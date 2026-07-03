export const supabaseTables = {
  editions: "impactos_editions",
  organizations: "impactos_organizations",
  workspaces: "impactos_workspaces",
  organizationMembers: "impactos_organization_members",
  modules: "impactos_modules",
  workspaceModules: "impactos_workspace_modules",
  configurations: "impactos_configurations",
  moduleRecords: "impactos_module_records",
  knowledgeCollections: "impactos_knowledge_collections",
  documents: "impactos_documents",
  reports: "impactos_reports",
  kpis: "impactos_kpis",
  workflowRuns: "impactos_workflow_runs",
  integrations: "impactos_integrations",
  auditEvents: "impactos_audit_events",
} as const;

export const tenantKeys = {
  organizationId: "organization_id",
  memberId: "member_id",
  role: "role",
  workspaceId: "workspace_id",
  moduleId: "module_id",
} as const;

export const rowLevelSecurityNotes = [
  "All tenant-owned tables should include organization_id.",
  "Workspace-owned tables should include workspace_id.",
  "Members should access rows through impactos_organization_members.",
  "Role checks should be enforced with Supabase RLS policies and mirrored by server-side authorization.",
  "Service-role access should stay server-only and never ship to the browser.",
  "Configuration, integration, and audit tables should be treated as sensitive tenant data.",
];
