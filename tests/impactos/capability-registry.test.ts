import assert from "node:assert/strict";
import test from "node:test";
import { capabilityRegistry, getCapabilityById } from "../../lib/impactos/capability-registry";
import { coreModuleRegistry } from "../../lib/impactos/module-registry";
import { validateCapabilityRegistry, validateModuleDefinition } from "../../lib/impactos/validation";

test("capability registry includes required platform and domain capabilities", () => {
  const ids = capabilityRegistry.map((capability) => capability.id);

  assert.equal(ids.includes("ai-assistant"), true);
  assert.equal(ids.includes("analytics"), true);
  assert.equal(ids.includes("reporting"), true);
  assert.equal(ids.includes("maps"), true);
  assert.equal(ids.includes("automation"), true);
  assert.equal(ids.includes("knowledge"), true);
  assert.equal(ids.includes("documents"), true);
  assert.equal(ids.includes("projects"), true);
  assert.equal(ids.includes("search"), true);
  assert.equal(ids.includes("notifications"), true);
});

test("capability registry validates dependencies", () => {
  const result = validateCapabilityRegistry();

  assert.equal(result.valid, true);
  assert.equal(getCapabilityById("ai-orchestration")?.status, "beta");
});

test("module capability references are registered", () => {
  for (const module of coreModuleRegistry) {
    assert.equal(validateModuleDefinition(module).valid, true, module.id);
  }
});
