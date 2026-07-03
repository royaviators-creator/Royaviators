import assert from "node:assert/strict";
import test from "node:test";
import { getIntegrationAdapter, listIntegrationAdapters } from "../../lib/impactos/integrations";

test("integration registry exposes mock development providers", () => {
  const mockData = getIntegrationAdapter("mock-data");

  assert.equal(mockData?.manifest.port, "data");
  assert.equal(mockData?.health().status, "available");
});

test("integration registry groups adapters by provider-independent port", () => {
  const modelAdapters = listIntegrationAdapters("model");

  assert.equal(modelAdapters.length, 1);
  assert.equal(modelAdapters[0]?.manifest.provider, "openai");
});
