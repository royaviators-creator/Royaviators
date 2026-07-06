import { capabilityRegistry } from "@/lib/impactos/capability-registry";
import { InMemoryEventBus } from "@/lib/impactos/event-bus";
import { integrationAdapters } from "@/lib/impactos/integrations";
import { coreModuleRegistry } from "@/lib/impactos/module-registry";
import { providerRegistry } from "@/lib/impactos/provider-registry";
import { createServiceContainer } from "@/lib/impactos/service-container";
import type { ImpactEventPublisher, ImpactEventSubscriber } from "@/lib/impactos/event-bus";

export type ImpactOSPlatformServices = {
  eventPublisher: ImpactEventPublisher;
  eventSubscriber: ImpactEventSubscriber;
  modules: typeof coreModuleRegistry;
  capabilities: typeof capabilityRegistry;
  providers: typeof providerRegistry;
  integrations: typeof integrationAdapters;
};

export function createImpactOSPlatformServices() {
  const services = createServiceContainer<ImpactOSPlatformServices>();
  const eventBus = new InMemoryEventBus();

  services.register("eventPublisher", eventBus);
  services.register("eventSubscriber", eventBus);
  services.register("modules", coreModuleRegistry);
  services.register("capabilities", capabilityRegistry);
  services.register("providers", providerRegistry);
  services.register("integrations", integrationAdapters);

  return services;
}
