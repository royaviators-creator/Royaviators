import { ImpactOSRegistryError } from "@/lib/impactos/errors";
import type { InMemoryEventBus } from "@/lib/impactos/event-bus";

export type ImpactOSServiceMap = {
  eventBus: InMemoryEventBus;
};

export type ImpactOSServiceKey = keyof ImpactOSServiceMap;

export class ServiceContainer<TServices extends Record<string, unknown> = ImpactOSServiceMap> {
  private readonly services = new Map<keyof TServices, TServices[keyof TServices]>();

  register<TKey extends keyof TServices>(key: TKey, service: TServices[TKey]) {
    if (this.services.has(key)) {
      throw new ImpactOSRegistryError(`Service is already registered: ${String(key)}`, { key: String(key) });
    }

    this.services.set(key, service);
    return this;
  }

  resolve<TKey extends keyof TServices>(key: TKey): TServices[TKey] {
    const service = this.services.get(key);
    if (!service) {
      throw new ImpactOSRegistryError(`Service is not registered: ${String(key)}`, { key: String(key) });
    }

    return service as TServices[TKey];
  }

  has<TKey extends keyof TServices>(key: TKey) {
    return this.services.has(key);
  }
}

export function createServiceContainer<TServices extends Record<string, unknown> = ImpactOSServiceMap>() {
  return new ServiceContainer<TServices>();
}
