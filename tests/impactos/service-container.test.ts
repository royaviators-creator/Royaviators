import assert from "node:assert/strict";
import test from "node:test";
import type { ImpactEventPublisher } from "../../lib/impactos/event-bus";
import { createImpactOSPlatformServices } from "../../lib/impactos/platform";
import { createServiceContainer } from "../../lib/impactos/service-container";

test("service container resolves registered services by interface key", () => {
  const services = createImpactOSPlatformServices();

  assert.equal(typeof services.resolve("eventPublisher").publish, "function");
  assert.equal(typeof services.resolve("eventSubscriber").subscribe, "function");
  assert.equal(services.resolve("providers").length > 0, true);
});

test("service container fails closed for missing services", () => {
  const services = createServiceContainer<{ eventPublisher: ImpactEventPublisher }>();

  assert.throws(() => services.resolve("eventPublisher"), /Service is not registered/);
});
