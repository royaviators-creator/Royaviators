# ImpactOS Core Foundation Sprint 2

Sprint 2 completes the platform backbone described by `ImpactOS Architecture v1.0`.

This sprint does not add client functionality, business logic, UI redesign, styling, or demo improvements.

## Registries

| Registry | File | Responsibility |
|---|---|---|
| Capability Registry | `lib/impactos/capability-registry.ts` | Registers every platform and domain capability used by modules. |
| Module Registry | `lib/impactos/module-registry.ts` | Defines module metadata, permissions, dependencies, lifecycle, and required capabilities. |
| Edition Registry | `lib/impactos/edition-registry.ts` | Defines versioned Edition manifests and defaults. |
| Provider Registry | `lib/impactos/provider-registry.ts` | Registers replaceable providers behind integration ports. |
| Integration Registry | `lib/impactos/integrations.ts` | Registers adapter manifests and health checks. |

## Event Bus

Modules communicate by publishing events instead of importing one another.

```mermaid
flowchart LR
  Documents["Documents Module"] -->|"document.created"| Bus["ImpactOS Event Bus"]
  Projects["Projects Module"] -->|"project.updated"| Bus
  Knowledge["Knowledge Capability"] -->|"knowledge.indexed"| Bus
  Assistant["Assistant Capability"] -->|"assistant.completed"| Bus
  Reports["Reports Module"] -->|"report.generated"| Bus
  Bus --> Audit["Audit Capability"]
  Bus --> Notifications["Notification Capability"]
  Bus --> Analytics["Analytics Capability"]
```

## Service Container

Modules receive services through interfaces. They must not construct providers directly.

```mermaid
flowchart TD
  Module["Module Contract"] --> Services["Service Container"]
  Services --> Events["Event Bus"]
  Services --> Capabilities["Capability Registry"]
  Services --> Providers["Provider Registry"]
  Services --> Integrations["Integration Adapters"]
```

## Configuration Loading

Configuration loads in deterministic Architecture v1.0 order.

```mermaid
flowchart TD
  Core["Core Defaults"] --> Edition["Edition Defaults"]
  Edition --> Organization["Organization Overrides"]
  Organization --> Workspace["Workspace Overrides"]
  Workspace --> User["User Preferences"]
  User --> Effective["Effective Configuration"]
  Effective --> Validation["Validation Framework"]
```

## Permission Engine

RBAC remains the v1 model. Evaluation now supports explicit allow/deny overrides and conditional rules so ABAC can be introduced later without changing the public contract.

Evaluation order:

1. Explicit deny rules.
2. Explicit allow rules.
3. Role-inherited grants.
4. Fail closed.

## Validation Framework

The validation framework checks:

- Capability registry dependencies.
- Module required capabilities and dependencies.
- Edition manifests.
- Effective configurations.
- Provider capability and replacement references.
- Permission rule quality.

## Provider Boundary

OpenAI, Supabase, Mapbox, n8n, and Mock are registered as replaceable providers.

Modules must depend on provider-independent ports such as `model`, `data`, `maps`, and `workflow`.
