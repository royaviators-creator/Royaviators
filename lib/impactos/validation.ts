import { capabilityRegistry, getCapabilityById } from "@/lib/impactos/capability-registry";
import { getModuleById } from "@/lib/impactos/module-registry";
import { getProviderById, providerRegistry } from "@/lib/impactos/provider-registry";
import type {
  EditionManifest,
  EffectiveWorkspaceConfiguration,
  ImpactModuleDefinition,
  PermissionRule,
  PlatformCapabilityId,
  ProviderDefinition,
  ValidationIssue,
  ValidationResult,
} from "@/lib/impactos/types";

function result(issues: ValidationIssue[]): ValidationResult {
  return {
    valid: !issues.some((issue) => issue.severity === "error"),
    issues,
  };
}

function error(code: string, message: string, path?: string): ValidationIssue {
  return { code, message, severity: "error", path };
}

function warning(code: string, message: string, path?: string): ValidationIssue {
  return { code, message, severity: "warning", path };
}

export function validateCapabilityRegistry(capabilities = capabilityRegistry) {
  const issues: ValidationIssue[] = [];
  const ids = new Set<PlatformCapabilityId>();

  for (const capability of capabilities) {
    if (ids.has(capability.id)) {
      issues.push(error("capability.duplicate", `Duplicate capability id: ${capability.id}`, capability.id));
    }
    ids.add(capability.id);

    for (const dependency of capability.dependsOn ?? []) {
      if (!getCapabilityById(dependency)) {
        issues.push(error("capability.missingDependency", `Capability ${capability.id} depends on unknown capability ${dependency}`, capability.id));
      }
    }
  }

  return result(issues);
}

export function validateModuleDefinition(module: ImpactModuleDefinition) {
  const issues: ValidationIssue[] = [];

  if (!module.version) issues.push(error("module.versionMissing", `Module ${module.id} is missing a version`, module.id));

  for (const capabilityId of module.requiredCapabilities) {
    if (!getCapabilityById(capabilityId)) {
      issues.push(error("module.unknownCapability", `Module ${module.id} requires unknown capability ${capabilityId}`, module.id));
    }
  }

  for (const dependency of module.dependencies ?? []) {
    if (!getModuleById(dependency)) {
      issues.push(error("module.unknownDependency", `Module ${module.id} depends on unknown module ${dependency}`, module.id));
    }
  }

  return result(issues);
}

export function validateEditionManifest(edition: EditionManifest) {
  const issues: ValidationIssue[] = [];
  const organizationModules = new Set(edition.defaultOrganizationConfig.enabledModules);

  for (const moduleId of edition.defaultOrganizationConfig.enabledModules) {
    if (!getModuleById(moduleId)) {
      issues.push(error("edition.unknownOrganizationModule", `Edition ${edition.id} enables unknown module ${moduleId}`, "defaultOrganizationConfig.enabledModules"));
    }
  }

  for (const moduleId of edition.defaultWorkspaceConfig.enabledModules) {
    if (!organizationModules.has(moduleId)) {
      issues.push(error("edition.workspaceEscalatesModule", `Workspace defaults include module not enabled by organization defaults: ${moduleId}`, "defaultWorkspaceConfig.enabledModules"));
    }
  }

  for (const navItem of edition.defaultWorkspaceConfig.navigation) {
    if (!edition.defaultWorkspaceConfig.enabledModules.includes(navItem.moduleId)) {
      issues.push(error("edition.navigationDisabledModule", `Navigation references disabled module ${navItem.moduleId}`, "defaultWorkspaceConfig.navigation"));
    }
  }

  return result(issues);
}

export function validateEffectiveConfiguration(configuration: EffectiveWorkspaceConfiguration) {
  const issues: ValidationIssue[] = [];

  for (const moduleId of configuration.enabledModules) {
    if (!getModuleById(moduleId)) {
      issues.push(error("configuration.unknownModule", `Unknown enabled module: ${moduleId}`, "enabledModules"));
    }
  }

  for (const item of configuration.navigation) {
    if (!configuration.enabledModules.includes(item.moduleId)) {
      issues.push(error("configuration.navigationDisabledModule", `Navigation references disabled module: ${item.moduleId}`, "navigation"));
    }
  }

  if (!configuration.enabledModules.includes(configuration.dashboard.landingModuleId)) {
    issues.push(error("configuration.invalidLandingModule", `Landing module is disabled: ${configuration.dashboard.landingModuleId}`, "dashboard.landingModuleId"));
  }

  if (configuration.userPreferences?.preferredLandingModuleId && !configuration.enabledModules.includes(configuration.userPreferences.preferredLandingModuleId)) {
    issues.push(warning("configuration.ignoredUserLandingModule", "Preferred landing module is unavailable and will be ignored.", "userPreferences.preferredLandingModuleId"));
  }

  return result(issues);
}

export function validateProviderDefinition(provider: ProviderDefinition) {
  const issues: ValidationIssue[] = [];

  for (const replacement of provider.replaceableBy) {
    if (!getProviderById(replacement)) {
      issues.push(error("provider.unknownReplacement", `Provider ${provider.id} references unknown replacement ${replacement}`, provider.id));
    }
  }

  for (const capabilityId of provider.capabilityIds) {
    if (!getCapabilityById(capabilityId)) {
      issues.push(error("provider.unknownCapability", `Provider ${provider.id} references unknown capability ${capabilityId}`, provider.id));
    }
  }

  return result(issues);
}

export function validateProviderRegistry(providers = providerRegistry) {
  const issues: ValidationIssue[] = [];
  const ids = new Set<string>();

  for (const provider of providers) {
    if (ids.has(provider.id)) {
      issues.push(error("provider.duplicate", `Duplicate provider id: ${provider.id}`, provider.id));
    }
    ids.add(provider.id);
    issues.push(...validateProviderDefinition(provider).issues);
  }

  return result(issues);
}

export function validatePermissionRule(rule: PermissionRule) {
  const issues: ValidationIssue[] = [];

  if (!rule.id) issues.push(error("permissionRule.idMissing", "Permission rule is missing an id"));
  if (!rule.description) issues.push(warning("permissionRule.descriptionMissing", "Permission rule should describe why it exists", rule.id));
  if (rule.effect !== "allow" && rule.effect !== "deny") {
    issues.push(error("permissionRule.invalidEffect", `Permission rule has invalid effect: ${rule.effect}`, rule.id));
  }

  return result(issues);
}
