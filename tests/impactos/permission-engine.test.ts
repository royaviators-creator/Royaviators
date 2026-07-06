import assert from "node:assert/strict";
import test from "node:test";
import { createPermissionRule, evaluatePermission } from "../../lib/impactos/permission-engine";

test("permission engine honors explicit deny before role grants", () => {
  const evaluation = evaluatePermission({
    role: "admin",
    permission: "projects:edit",
    context: {
      organizationId: "org_test",
      workspaceId: "ws_test",
      overrides: [
        createPermissionRule({
          id: "deny-project-edits",
          effect: "deny",
          permission: "projects:edit",
          description: "Temporary project lock.",
        }),
      ],
    },
  });

  assert.equal(evaluation.allowed, false);
  assert.equal(evaluation.reason, "explicit-deny");
});

test("permission engine preserves role inheritance grants", () => {
  const evaluation = evaluatePermission({
    role: "admin",
    permission: "projects:edit",
    context: {
      organizationId: "org_test",
      workspaceId: "ws_test",
      moduleId: "projects",
    },
  });

  assert.equal(evaluation.allowed, true);
  assert.equal(evaluation.reason, "role-grant");
});

test("permission engine supports conditional ABAC-ready allow rules", () => {
  const evaluation = evaluatePermission({
    role: "viewer",
    permission: "admin:view",
    context: {
      organizationId: "org_test",
      workspaceId: "ws_test",
      overrides: [
        createPermissionRule({
          id: "allow-admin-read-in-workspace",
          effect: "allow",
          permission: "admin:view",
          description: "Workspace-scoped support read access.",
          conditions: [{ attribute: "workspaceId", operator: "equals", value: "ws_test" }],
        }),
      ],
    },
  });

  assert.equal(evaluation.allowed, true);
  assert.equal(evaluation.reason, "explicit-allow");
});
