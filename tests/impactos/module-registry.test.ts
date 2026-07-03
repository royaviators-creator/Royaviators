import assert from "node:assert/strict";
import test from "node:test";
import { coreModuleRegistry, getModuleById, listModules } from "../../lib/impactos/module-registry";

test("module registry exposes versioned core modules", () => {
  const dashboard = getModuleById("dashboard");

  assert.equal(dashboard?.version, "1.0.0");
  assert.equal(dashboard?.permissions.view, "dashboard:view");
});

test("module registry includes no duplicate module identifiers", () => {
  const ids = coreModuleRegistry.map((module) => module.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("listModules filters registry by configured module ids", () => {
  const modules = listModules(["home", "reports"]).map((module) => module.id);

  assert.deepEqual(modules, ["home", "reports"]);
});
