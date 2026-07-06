import { randomUUID } from "node:crypto";
import type { ImpactEvent, ImpactEventName, ImpactEventPayloads } from "@/lib/impactos/types";

export type ImpactEventHandler<TName extends ImpactEventName = ImpactEventName> = (
  event: ImpactEvent<TName>,
) => void | Promise<void>;

export type ImpactEventPublisher = {
  publish<TName extends ImpactEventName>(
    event: Omit<ImpactEvent<TName>, "id" | "occurredAt"> & { id?: string; occurredAt?: string },
  ): Promise<ImpactEvent<TName>>;
};

export type ImpactEventSubscriber = {
  subscribe<TName extends ImpactEventName>(eventName: TName, handler: ImpactEventHandler<TName>): () => void;
};

export class InMemoryEventBus implements ImpactEventPublisher, ImpactEventSubscriber {
  private readonly handlers = new Map<ImpactEventName, Set<ImpactEventHandler>>();
  private readonly events: ImpactEvent[] = [];

  subscribe<TName extends ImpactEventName>(eventName: TName, handler: ImpactEventHandler<TName>) {
    const eventHandlers = this.handlers.get(eventName) ?? new Set<ImpactEventHandler>();
    eventHandlers.add(handler as ImpactEventHandler);
    this.handlers.set(eventName, eventHandlers);

    return () => {
      eventHandlers.delete(handler as ImpactEventHandler);
    };
  }

  async publish<TName extends ImpactEventName>(
    event: Omit<ImpactEvent<TName>, "id" | "occurredAt"> & { id?: string; occurredAt?: string },
  ) {
    const resolvedEvent: ImpactEvent<TName> = {
      ...event,
      id: event.id ?? randomUUID(),
      occurredAt: event.occurredAt ?? new Date().toISOString(),
    };

    this.events.push(resolvedEvent as ImpactEvent);

    for (const handler of this.handlers.get(event.name) ?? []) {
      await handler(resolvedEvent as ImpactEvent);
    }

    return resolvedEvent;
  }

  listEvents<TName extends ImpactEventName>(eventName?: TName) {
    return eventName ? this.events.filter((event) => event.name === eventName) : [...this.events];
  }
}

export function createImpactEvent<TName extends ImpactEventName>({
  name,
  organizationId,
  workspaceId,
  moduleId,
  payload,
  metadata,
}: {
  name: TName;
  organizationId: string;
  workspaceId?: string;
  moduleId?: ImpactEvent<TName>["moduleId"];
  payload: ImpactEventPayloads[TName];
  metadata?: Record<string, string>;
}): ImpactEvent<TName> {
  return {
    id: randomUUID(),
    name,
    organizationId,
    workspaceId,
    moduleId,
    occurredAt: new Date().toISOString(),
    payload,
    metadata,
  };
}
