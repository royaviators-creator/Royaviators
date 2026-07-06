import assert from "node:assert/strict";
import test from "node:test";
import { InMemoryEventBus } from "../../lib/impactos/event-bus";
import { createImpactOSPlatformServices } from "../../lib/impactos/platform";
import { createServiceContainer } from "../../lib/impactos/service-container";

test("service container resolves registered services by interface key", () => {
  const services = createImpactOSPlatformServices();

  assert.equal(services.resolve("eventBus") instanceof InMemoryEventBus, true);
  assert.equal(services.resolve("providers").length > 0, true);
});

test("service container fails closed for missing services", () => {
  const services = createServiceContainer<{ eventBus: InMemoryEventBus }>();

  assert.throws(() => services.resolve("eventBus"), /Service is not registered/);
});
