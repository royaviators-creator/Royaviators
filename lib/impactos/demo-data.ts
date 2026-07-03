import { notFound } from "next/navigation";
import { resolveEffectiveWorkspaceConfiguration, validateConfiguration } from "@/lib/impactos/configuration";
import { getEditionById } from "@/lib/impactos/edition-registry";
import { normalizeRole } from "@/lib/impactos/identity";
import type {
  ImpactModuleId,
  ModuleSnapshot,
  Organization,
  OrganizationWorkspace,
  Workspace,
} from "@/lib/impactos/types";

const organizations: Organization[] = [
  {
    id: "org_demo_deep_blue_drawdown",
    slug: "deep-blue-drawdown",
    name: "Deep Blue Drawdown",
    editionId: "ocean",
    industry: "Climate & Ocean",
    region: "Demo workspace",
    stage: "demo",
    memberCount: 18,
    currentRole: "executive",
    configuration: {
      brand: {
        displayName: "Deep Blue Drawdown",
        productName: "Ocean Edition",
        reportBrand: "Deep Blue Drawdown ImpactOS",
      },
      terminology: {
        workspace: "ocean workspace",
        modules: {
          projects: "Programs",
          kpis: "Indicators",
          maps: "Sites",
        },
        roles: {
          executive: "Executive",
          operator: "Operator",
          admin: "Admin",
          partner: "Partner",
        },
      },
    },
  },
];

const workspaces: Workspace[] = [
  {
    id: "ws_demo_deep_blue_executive",
    slug: "executive",
    organizationId: "org_demo_deep_blue_drawdown",
    name: "Executive Workspace",
    type: "executive",
    configuration: {
      dashboard: {
        landingModuleId: "home",
        cards: [
          { id: "active-programs", title: "Active programs", moduleId: "projects", metric: "active_programs" },
          { id: "reporting-readiness", title: "Reporting readiness", moduleId: "reports", metric: "reporting_readiness" },
          { id: "evidence-quality", title: "Evidence quality", moduleId: "knowledge", metric: "evidence_quality" },
          { id: "open-decisions", title: "Open decisions", moduleId: "dashboard", metric: "open_decisions" },
        ],
      },
    },
  },
];

const oceanSnapshots: ModuleSnapshot[] = [
  {
    moduleId: "home",
    summary: "Configured workspace home for priorities, recent movement, reporting readiness, and leadership focus.",
    metrics: [
      { label: "Configuration", value: "v1.0", detail: "Effective workspace config" },
      { label: "Edition", value: "Ocean", detail: "Versioned defaults" },
      { label: "Workspace", value: "1", detail: "Demo executive workspace" },
    ],
    records: [
      { title: "Configuration engine", meta: "Core platform", status: "Active" },
      { title: "Module registry", meta: "Core platform", status: "Active" },
      { title: "Edition registry", meta: "Ocean Edition", status: "Active" },
    ],
  },
  {
    moduleId: "dashboard",
    summary: "Executive view of restoration work, partner activity, reporting readiness, and open decisions.",
    metrics: [
      { label: "Active programs", value: "6", detail: "Demo portfolio" },
      { label: "Reporting readiness", value: "82%", detail: "Sample score" },
      { label: "Open decisions", value: "4", detail: "Needs leadership review" },
    ],
    records: [
      { title: "Blue carbon portfolio review", meta: "Executive review", status: "This week" },
      { title: "Partner reporting cycle", meta: "Evidence consolidation", status: "On track" },
      { title: "Site monitoring summary", meta: "Field data", status: "Needs review" },
    ],
  },
  {
    moduleId: "knowledge",
    summary: "Reusable knowledge for restoration methods, partner notes, monitoring protocols, and decisions.",
    metrics: [
      { label: "Knowledge entries", value: "124", detail: "Demo records" },
      { label: "Decision notes", value: "18", detail: "Linked to programs" },
      { label: "Review cadence", value: "Monthly", detail: "Governance routine" },
    ],
    records: [
      { title: "Seagrass monitoring protocol", meta: "Research method", status: "Approved" },
      { title: "Community partner guidance", meta: "Partner knowledge", status: "Draft" },
      { title: "Carbon evidence glossary", meta: "Reporting reference", status: "Published" },
    ],
  },
  {
    moduleId: "projects",
    summary: "Program coordination for restoration sites, research milestones, partners, and reporting actions.",
    metrics: [
      { label: "Projects", value: "9", detail: "Demo projects" },
      { label: "At risk", value: "2", detail: "Needs action" },
      { label: "Partner actions", value: "31", detail: "Open items" },
    ],
    records: [
      { title: "Mangrove restoration pilot", meta: "Field program", status: "Active" },
      { title: "Ocean evidence dashboard", meta: "Systems work", status: "In design" },
      { title: "University research exchange", meta: "Partner project", status: "Planned" },
    ],
  },
  {
    moduleId: "documents",
    summary: "Evidence files, reports, agreements, methods, and reusable templates for the ocean program.",
    metrics: [
      { label: "Documents", value: "86", detail: "Demo library" },
      { label: "Templates", value: "12", detail: "Reusable" },
      { label: "Pending reviews", value: "7", detail: "Role-based" },
    ],
    records: [
      { title: "Quarterly impact report", meta: "Reporting", status: "Review" },
      { title: "Partner agreement template", meta: "Governance", status: "Approved" },
      { title: "Field evidence upload guide", meta: "Operations", status: "Draft" },
    ],
  },
  {
    moduleId: "reports",
    summary: "Structured reporting for funders, partners, leadership, and internal operating reviews.",
    metrics: [
      { label: "Reports", value: "5", detail: "Current cycle" },
      { label: "Evidence linked", value: "73%", detail: "Sample score" },
      { label: "Next deadline", value: "14d", detail: "Demo schedule" },
    ],
    records: [
      { title: "Funder progress summary", meta: "External reporting", status: "Draft" },
      { title: "Board impact update", meta: "Leadership", status: "Ready" },
      { title: "Field partner appendix", meta: "Evidence", status: "Collecting" },
    ],
  },
  {
    moduleId: "kpis",
    summary: "Impact indicators for restoration activity, evidence quality, partner cadence, and reporting risk.",
    metrics: [
      { label: "Evidence quality", value: "B+", detail: "Demo score" },
      { label: "Partner cadence", value: "88%", detail: "Expected updates" },
      { label: "Manual effort", value: "-18%", detail: "Sample trend" },
    ],
    records: [
      { title: "Reporting risk trend", meta: "Analytics", status: "Stable" },
      { title: "Evidence completeness", meta: "Portfolio view", status: "Improving" },
      { title: "Partner response time", meta: "Operations", status: "Watch" },
    ],
  },
  {
    moduleId: "maps",
    summary: "Geographic view of restoration sites, research zones, partners, and monitoring coverage.",
    metrics: [
      { label: "Sites", value: "14", detail: "Demo locations" },
      { label: "Regions", value: "3", detail: "Sample geography" },
      { label: "Coverage", value: "76%", detail: "Monitoring coverage" },
    ],
    records: [
      { title: "Coastal restoration cluster", meta: "Map layer", status: "Active" },
      { title: "Monitoring station coverage", meta: "Field data", status: "Review" },
      { title: "Partner site directory", meta: "Network", status: "Current" },
    ],
  },
];

const placeholderModuleIds: ImpactModuleId[] = [
  "assistant",
  "workflows",
  "integrations",
  "admin",
];

const placeholderSnapshots: ModuleSnapshot[] = placeholderModuleIds.map((moduleId) => ({
  moduleId,
  summary: "Placeholder module prepared for tenant-specific configuration, permissions, data, and workflows.",
  metrics: [
    { label: "Status", value: "Ready", detail: "Architecture placeholder" },
    { label: "Data source", value: "Demo", detail: "No client claims" },
    { label: "Access", value: "RBAC", detail: "Role-aware navigation" },
  ],
  records: [
    { title: "Module configuration", meta: "Template setup", status: "Prepared" },
    { title: "Supabase mapping", meta: "Data architecture", status: "Planned" },
    { title: "Tenant permissions", meta: "Access control", status: "Modeled" },
  ],
}));

const moduleSnapshots = [...oceanSnapshots, ...placeholderSnapshots];

export function getDemoOrganization(slug: string, role?: string): OrganizationWorkspace {
  const organization = organizations.find((item) => item.slug === slug);
  if (!organization) notFound();

  const workspace = workspaces.find((item) => item.organizationId === organization.id);
  if (!workspace) notFound();

  const edition = getEditionById(organization.editionId);
  if (!edition) notFound();

  const resolvedOrganization = {
    ...organization,
    currentRole: normalizeRole(role) ?? organization.currentRole,
  };
  const configuration = resolveEffectiveWorkspaceConfiguration({
    edition,
    organization: resolvedOrganization,
    workspace,
  });
  const validation = validateConfiguration(configuration);
  if (!validation.valid) notFound();

  return {
    organization: resolvedOrganization,
    workspace,
    edition,
    configuration,
    moduleSnapshots,
  };
}

export function getModuleSnapshot(moduleId: ImpactModuleId) {
  return moduleSnapshots.find((snapshot) => snapshot.moduleId === moduleId);
}
