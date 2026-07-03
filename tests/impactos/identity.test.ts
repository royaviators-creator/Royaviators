import assert from "node:assert/strict";
import test from "node:test";
import { canAccessModule, getEffectivePermissions, normalizeRole } from "../../lib/impactos/identity";

test("normalizes known roles and rejects unknown roles", () => {
  assert.equal(normalizeRole("executive"), "executive");
  assert.equal(normalizeRole("workspace-admin"), "workspace-admin");
  assert.equal(normalizeRole("superuser"), null);
});

test("RBAC grants executive report access but not admin configuration", () => {
  assert.equal(canAccessModule("executive", "reports"), true);
  assert.equal(canAccessModule("executive", "admin", "configure"), false);
});

test("admin inherits workspace permissions and keeps admin controls", () => {
  const permissions = getEffectivePermissions("admin");

  assert.equal(permissions.includes("admin:configure"), true);
  assert.equal(permissions.includes("dashboard:view"), true);
  assert.equal(permissions.includes("projects:edit"), true);
});
