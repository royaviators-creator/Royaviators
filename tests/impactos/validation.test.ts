import assert from "node:assert/strict";
import test from "node:test";
import { getEditionById } from "../../lib/impactos/edition-registry";
import { validateEditionManifest, validatePermissionRule } from "../../lib/impactos/validation";

test("validation framework validates edition manifests", () => {
  const edition = getEditionById("ocean");
  assert.ok(edition);

  assert.equal(validateEditionManifest(edition).valid, true);
});

test("validation framework reports permission rule quality issues", () => {
  const result = validatePermissionRule({
    id: "rule_without_description",
    effect: "allow",
    permission: "reports:view",
    description: "",
  });

  assert.equal(result.valid, true);
  assert.equal(result.issues[0]?.severity, "warning");
});
