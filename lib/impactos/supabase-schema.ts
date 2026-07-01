export const supabaseTables = {
  organizations: "impactos_organizations",
  organizationMembers: "impactos_organization_members",
  modules: "impactos_modules",
  moduleRecords: "impactos_module_records",
  documents: "impactos_documents",
  reports: "impactos_reports",
  notifications: "impactos_notifications",
  integrations: "impactos_integrations",
  auditEvents: "impactos_audit_events",
} as const;

export const tenantKeys = {
  organizationId: "organization_id",
  memberId: "member_id",
  role: "role",
  moduleId: "module_id",
} as const;

export const rowLevelSecurityNotes = [
  "All tenant-owned tables should include organization_id.",
  "Members should access rows through impactos_organization_members.",
  "Role checks should be enforced with Supabase RLS policies and mirrored in app navigation.",
  "Service-role access should stay server-only and never ship to the browser.",
];
