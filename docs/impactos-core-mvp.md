# ImpactOS Core MVP Architecture

This branch establishes a reusable multi-tenant operating-system foundation for ImpactOS.

## Scope

- Next.js App Router routes under `/os`
- Demo OceanOS workspace for Deep Blue Drawdown at `/os/deep-blue-drawdown`
- Role-aware module navigation using demo roles
- Config-driven industry template model
- Supabase-ready server client and tenant table map
- Demo data only, with no client claims

## Tenant Model

The core tenant object is an organization with:

- `id`
- `slug`
- `templateId`
- `industry`
- `stage`
- `memberCount`
- `currentRole`

The first configured tenant is `deep-blue-drawdown`, using the `oceanos` industry template.

## Roles

Supported roles:

- Owner
- Admin
- Executive
- Operator
- Partner

Navigation is filtered by module permissions, and module routes validate access before rendering.

## Modules

The MVP defines placeholders for:

- Dashboard
- Assistant
- Knowledge Hub
- Projects
- Documents
- Reports
- Analytics
- Maps
- Automation
- Notifications
- Integrations
- Admin
- Settings

Modules are reusable definitions with status, icon, description, and allowed roles.

## Supabase Readiness

The server client is lazy-initialized in `lib/supabase/server.ts` so builds do not require environment variables.

Expected tables are documented in `lib/impactos/supabase-schema.ts`, including organizations, members, modules, records, documents, reports, notifications, integrations, and audit events.

Real implementation should enforce tenant access through Supabase row-level security using `organization_id` and membership roles.
