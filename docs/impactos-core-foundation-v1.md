# ImpactOS Core Foundation v1.0

This implementation follows `ImpactOS Architecture v1.0` as the source of truth.

## Scope

- Configuration Engine
- Organization and Workspace model
- RBAC permission engine
- Module Registry
- Edition Registry with Ocean Edition
- Integration adapter registry
- Supabase schema and RLS migration scaffold
- Demo workspace wired through effective configuration

## Core Flow

```text
Core defaults
  -> Ocean Edition defaults
  -> Organization overrides
  -> Workspace overrides
  -> Feature flags
  -> Permission-filtered navigation
  -> Effective workspace configuration
```

## Production Boundary

The current `/os` workspace still uses demo data. It now exercises the production architecture contracts, but it does not yet authenticate real users or persist real tenant data.

Before production tenant data is connected:

- Supabase migration must be applied in a managed environment.
- Authentication and user-scoped Supabase clients must be connected.
- Service-role access must remain server-only.
- Tenant isolation tests must run against a real Supabase project.

## Architecture Rules Preserved

- Organization is the tenant boundary.
- Workspace is the operating boundary.
- Modules are registry-defined product surfaces.
- Capabilities are reusable platform services.
- Editions are versioned operating-model defaults.
- Integrations depend on provider-independent ports.
- Configuration expresses client variation.
