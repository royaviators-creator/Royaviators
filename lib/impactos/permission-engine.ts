import { getEffectivePermissions } from "@/lib/impactos/identity";
import type {
  OrganizationRole,
  PermissionCondition,
  PermissionEvaluation,
  PermissionEvaluationContext,
  PermissionKey,
  PermissionRule,
} from "@/lib/impactos/types";

function conditionMatches(condition: PermissionCondition, context: PermissionEvaluationContext) {
  const value =
    condition.attribute === "organizationId"
      ? context.organizationId
      : condition.attribute === "workspaceId"
        ? context.workspaceId
        : condition.attribute === "moduleId"
          ? context.moduleId
          : context.attributes?.[condition.attribute];

  if (condition.operator === "equals") return value === condition.value;
  if (Array.isArray(condition.value)) {
    return Array.isArray(value)
      ? value.some((item) => condition.value.includes(item))
      : Boolean(value && condition.value.includes(value));
  }

  return Array.isArray(value) ? value.includes(condition.value) : value === condition.value;
}

function ruleMatches(rule: PermissionRule, permission: PermissionKey, context: PermissionEvaluationContext) {
  if (rule.permission !== permission) return false;
  return rule.conditions?.every((condition) => conditionMatches(condition, context)) ?? true;
}

export function evaluatePermission({
  role,
  permission,
  context,
}: {
  role: OrganizationRole;
  permission: PermissionKey;
  context: PermissionEvaluationContext;
}): PermissionEvaluation {
  const matchingOverrides = context.overrides?.filter((rule) => ruleMatches(rule, permission, context)) ?? [];
  const denyRules = matchingOverrides.filter((rule) => rule.effect === "deny");
  if (denyRules.length > 0) {
    return {
      allowed: false,
      permission,
      reason: "explicit-deny",
      matchedRuleIds: denyRules.map((rule) => rule.id),
    };
  }

  const allowRules = matchingOverrides.filter((rule) => rule.effect === "allow");
  if (allowRules.length > 0) {
    return {
      allowed: true,
      permission,
      reason: "explicit-allow",
      matchedRuleIds: allowRules.map((rule) => rule.id),
    };
  }

  const granted = getEffectivePermissions(role).includes(permission);
  return {
    allowed: granted,
    permission,
    reason: granted ? "role-grant" : "not-granted",
    matchedRuleIds: [],
  };
}

export function createPermissionRule(rule: PermissionRule) {
  return rule;
}
