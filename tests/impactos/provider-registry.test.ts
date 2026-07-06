import assert from "node:assert/strict";
import test from "node:test";
import { canReplaceProvider, listProviders } from "../../lib/impactos/provider-registry";
import { validateProviderRegistry } from "../../lib/impactos/validation";

test("provider registry exposes replaceable provider ports", () => {
  assert.equal(listProviders("model").some((provider) => provider.id === "openai"), true);
  assert.equal(listProviders("maps").some((provider) => provider.id === "mapbox"), true);
  assert.equal(canReplaceProvider("openai", "mock"), true);
});

test("provider registry validates provider capabilities and replacements", () => {
  const result = validateProviderRegistry();

  assert.equal(result.valid, true);
});
