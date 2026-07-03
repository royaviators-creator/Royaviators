-- ImpactOS Core Foundation v1.0
-- Architecture source of truth: ImpactOS Architecture v1.0.
-- This migration establishes the shared logical tenancy model for Core v1.

create table if not exists impactos_editions (
  id text primary key,
  version text not null,
  name text not null,
  manifest jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists impactos_organizations (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  edition_id text not null references impactos_editions(id),
  status text not null default 'active',
  configuration jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists impactos_workspaces (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references impactos_organizations(id) on delete cascade,
  slug text not null,
  name text not null,
  type text not null,
  configuration jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (organization_id, slug)
);

create table if not exists impactos_organization_members (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references impactos_organizations(id) on delete cascade,
  user_id uuid not null,
  role text not null,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (organization_id, user_id)
);

create table if not exists impactos_modules (
  id text primary key,
  version text not null,
  manifest jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists impactos_workspace_modules (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references impactos_organizations(id) on delete cascade,
  workspace_id uuid not null references impactos_workspaces(id) on delete cascade,
  module_id text not null references impactos_modules(id),
  status text not null default 'enabled',
  configuration jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (workspace_id, module_id)
);

create table if not exists impactos_configurations (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references impactos_organizations(id) on delete cascade,
  workspace_id uuid references impactos_workspaces(id) on delete cascade,
  scope text not null,
  version integer not null default 1,
  configuration jsonb not null,
  created_by uuid,
  created_at timestamptz not null default now()
);

create table if not exists impactos_module_records (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references impactos_organizations(id) on delete cascade,
  workspace_id uuid not null references impactos_workspaces(id) on delete cascade,
  module_id text not null references impactos_modules(id),
  title text not null,
  status text not null default 'active',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists impactos_knowledge_collections (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references impactos_organizations(id) on delete cascade,
  workspace_id uuid references impactos_workspaces(id) on delete cascade,
  name text not null,
  review_cadence text,
  configuration jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists impactos_documents (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references impactos_organizations(id) on delete cascade,
  workspace_id uuid not null references impactos_workspaces(id) on delete cascade,
  title text not null,
  classification text not null default 'internal',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists impactos_reports (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references impactos_organizations(id) on delete cascade,
  workspace_id uuid not null references impactos_workspaces(id) on delete cascade,
  title text not null,
  status text not null default 'draft',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists impactos_kpis (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references impactos_organizations(id) on delete cascade,
  workspace_id uuid not null references impactos_workspaces(id) on delete cascade,
  key text not null,
  name text not null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (workspace_id, key)
);

create table if not exists impactos_workflow_runs (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references impactos_organizations(id) on delete cascade,
  workspace_id uuid not null references impactos_workspaces(id) on delete cascade,
  workflow_key text not null,
  status text not null default 'queued',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists impactos_integrations (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references impactos_organizations(id) on delete cascade,
  workspace_id uuid references impactos_workspaces(id) on delete cascade,
  adapter_id text not null,
  port text not null,
  status text not null default 'disabled',
  configuration jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists impactos_audit_events (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references impactos_organizations(id) on delete cascade,
  workspace_id uuid references impactos_workspaces(id) on delete cascade,
  actor_user_id uuid,
  event_type text not null,
  resource_type text not null,
  resource_id text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists impactos_workspaces_organization_idx on impactos_workspaces (organization_id);
create index if not exists impactos_members_user_idx on impactos_organization_members (user_id);
create index if not exists impactos_records_tenant_idx on impactos_module_records (organization_id, workspace_id, module_id);
create index if not exists impactos_audit_tenant_idx on impactos_audit_events (organization_id, workspace_id, created_at desc);

alter table impactos_organizations enable row level security;
alter table impactos_workspaces enable row level security;
alter table impactos_organization_members enable row level security;
alter table impactos_workspace_modules enable row level security;
alter table impactos_configurations enable row level security;
alter table impactos_module_records enable row level security;
alter table impactos_knowledge_collections enable row level security;
alter table impactos_documents enable row level security;
alter table impactos_reports enable row level security;
alter table impactos_kpis enable row level security;
alter table impactos_workflow_runs enable row level security;
alter table impactos_integrations enable row level security;
alter table impactos_audit_events enable row level security;

create or replace function impactos_is_org_member(target_organization_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from impactos_organization_members member
    where member.organization_id = target_organization_id
      and member.user_id = auth.uid()
      and member.status = 'active'
  );
$$;

create policy "members can read their organizations"
on impactos_organizations
for select
using (impactos_is_org_member(id));

create policy "members can read organization workspaces"
on impactos_workspaces
for select
using (impactos_is_org_member(organization_id));

create policy "members can read their own membership rows"
on impactos_organization_members
for select
using (impactos_is_org_member(organization_id));

create policy "members can read enabled workspace modules"
on impactos_workspace_modules
for select
using (impactos_is_org_member(organization_id));

create policy "members can read tenant configurations"
on impactos_configurations
for select
using (impactos_is_org_member(organization_id));

create policy "members can read module records"
on impactos_module_records
for select
using (impactos_is_org_member(organization_id));

create policy "members can read knowledge collections"
on impactos_knowledge_collections
for select
using (impactos_is_org_member(organization_id));

create policy "members can read documents"
on impactos_documents
for select
using (impactos_is_org_member(organization_id));

create policy "members can read reports"
on impactos_reports
for select
using (impactos_is_org_member(organization_id));

create policy "members can read kpis"
on impactos_kpis
for select
using (impactos_is_org_member(organization_id));

create policy "members can read workflow runs"
on impactos_workflow_runs
for select
using (impactos_is_org_member(organization_id));

create policy "members can read integration status"
on impactos_integrations
for select
using (impactos_is_org_member(organization_id));

create policy "members can read audit events"
on impactos_audit_events
for select
using (organization_id is not null and impactos_is_org_member(organization_id));
