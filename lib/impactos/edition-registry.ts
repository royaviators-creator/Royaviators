import type {
  DashboardCardConfig,
  EditionManifest,
  FeatureFlagConfig,
  ImpactModuleId,
  NavigationItemConfig,
} from "@/lib/impactos/types";

const oceanModules: ImpactModuleId[] = [
  "home",
  "dashboard",
  "projects",
  "knowledge",
  "documents",
  "reports",
  "kpis",
  "maps",
  "assistant",
  "workflows",
  "integrations",
  "admin",
];

const oceanNavigation: NavigationItemConfig[] = [
  { moduleId: "home", label: "Home", group: "operate", order: 0 },
  { moduleId: "dashboard", label: "Dashboard", group: "measure", order: 1 },
  { moduleId: "projects", label: "Projects", group: "operate", order: 2 },
  { moduleId: "knowledge", label: "Knowledge", group: "knowledge", order: 3 },
  { moduleId: "documents", label: "Documents", group: "knowledge", order: 4 },
  { moduleId: "reports", label: "Reports", group: "measure", order: 5 },
  { moduleId: "kpis", label: "KPIs", group: "measure", order: 6 },
  { moduleId: "maps", label: "Maps", group: "measure", order: 7 },
  { moduleId: "assistant", label: "Assistant", group: "operate", order: 8 },
  { moduleId: "workflows", label: "Workflows", group: "operate", order: 9 },
  { moduleId: "integrations", label: "Integrations", group: "configure", order: 10 },
  { moduleId: "admin", label: "Admin", group: "configure", order: 11 },
];

const oceanFlags: FeatureFlagConfig[] = [
  {
    key: "assistant.governed-beta",
    enabled: true,
    description: "Governed assistant surface with demo-scoped knowledge and no autonomous actions.",
    scope: "edition",
  },
  {
    key: "workflows.internal-preview",
    enabled: true,
    description: "Workflow module appears as an architecture-ready internal preview.",
    scope: "edition",
  },
  {
    key: "integrations.internal-preview",
    enabled: true,
    description: "Integration registry appears with provider abstraction status.",
    scope: "edition",
  },
];

const oceanDashboardCards: DashboardCardConfig[] = [
  { id: "active-programs", title: "Active programs", moduleId: "projects", metric: "active_programs" },
  { id: "reporting-readiness", title: "Reporting readiness", moduleId: "reports", metric: "reporting_readiness" },
  { id: "evidence-quality", title: "Evidence quality", moduleId: "knowledge", metric: "evidence_quality" },
  { id: "open-decisions", title: "Open decisions", moduleId: "dashboard", metric: "open_decisions" },
];

export const editionRegistry: EditionManifest[] = [
  {
    id: "ocean",
    version: "1.0.0",
    name: "Ocean Edition",
    category: "Climate & Ocean",
    description:
      "A versioned operating model for ocean restoration, blue carbon, partner coordination, evidence, KPIs, and reporting.",
    operatingInputs: [
      "Research knowledge",
      "Field projects",
      "Partner network",
      "Monitoring data",
      "Reports and evidence",
    ],
    outcomes: [
      "Clearer project visibility",
      "Reusable impact evidence",
      "Better partner coordination",
      "More reliable reporting cycles",
    ],
    defaultOrganizationConfig: {
      brand: {
        displayName: "Ocean Edition",
        productName: "ImpactOS",
        reportBrand: "ImpactOS Ocean Edition",
        emailBrand: "ImpactOS",
      },
      theme: {
        primary: "#0f172a",
        accent: "#2563eb",
        surface: "#f8fafc",
        text: "#0f172a",
        density: "comfortable",
      },
      terminology: {
        workspace: "workspace",
        modules: {
          kpis: "KPIs",
          maps: "Maps",
          workflows: "Workflows",
        },
        roles: {
          executive: "Executive",
          operator: "Operator",
          admin: "Admin",
          partner: "Partner",
        },
      },
      enabledModules: oceanModules,
      featureFlags: oceanFlags,
    },
    defaultWorkspaceConfig: {
      enabledModules: oceanModules,
      navigation: oceanNavigation,
      featureFlags: oceanFlags,
      dashboard: {
        landingModuleId: "home",
        cards: oceanDashboardCards,
      },
    },
  },
];

export function getEditionById(editionId: string) {
  return editionRegistry.find((edition) => edition.id === editionId);
}
