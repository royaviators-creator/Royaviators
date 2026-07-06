import assert from "node:assert/strict";
import test from "node:test";
import { InMemoryEventBus } from "../../lib/impactos/event-bus";

test("event bus publishes typed module events without module coupling", async () => {
  const bus = new InMemoryEventBus();
  const received: string[] = [];

  const unsubscribe = bus.subscribe("document.created", async (event) => {
    received.push(event.payload.documentId);
  });

  const event = await bus.publish({
    name: "document.created",
    organizationId: "org_test",
    workspaceId: "ws_test",
    moduleId: "documents",
    payload: { documentId: "doc_1", workspaceId: "ws_test" },
  });

  unsubscribe();

  assert.equal(event.name, "document.created");
  assert.equal(received[0], "doc_1");
  assert.equal(bus.listEvents("document.created").length, 1);
});
