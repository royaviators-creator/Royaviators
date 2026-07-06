export type TenantStage = "demo" | "pilot" | "active";

export type OrganizationRole = "owner" | "admin" | "executive" | "operator" | "partner";

export type PermissionAction = "read" | "create" | "update" | "delete" | "manage" | "approve" | "export";

export type PermissionScope =
  | "workspace"
  | "module"
  | "configuration"
  | "integration"
  | "report"
  | "member";

export type Permission = `${PermissionScope}:${PermissionAction}`;

export type FeatureFlag = {
  key: string;
  enabled: boolean;
  description?: string;
};

export type BrandingConfig = {
  productName: string;
  organizationName: string;
  logoUrl?: string;
  accentLabel?: string;
};

export type ThemeConfig = {
  mode: "light" | "dark" | "system";
  density: "comfortable" | "compact";
  radius: "soft" | "rounded" | "sharp";
};

export type TerminologyConfig = {
  organizationLabel: string;
  workspaceLabel: string;
  projectLabel: string;
  impactLabel: string;
  evidenceLabel: string;
};

export type NavigationItem = {
  id: string;
  label: string;
  href: string;
  moduleId?: string;
  requiredPermissions?: Permission[];
};

export type KPI = {
  id: string;
  label: string;
  description: string;
  unit?: string;
};

export type DashboardWidget = {
  id: string;
  title: string;
  moduleId: string;
  kpiIds?: string[];
  size: "sm" | "md" | "lg";
};

export type AssistantConfig = {
  enabled: boolean;
  knowledgeCollections: string[];
  allowedTools: string[];
  systemBoundary: string;
};

export type KnowledgeCollection = {
  id: string;
  name: string;
  description: string;
  accessRoles: OrganizationRole[];
};

export type ReportTemplate = {
  id: string;
  name: string;
  cadence: "weekly" | "monthly" | "quarterly" | "annual" | "ad-hoc";
  requiredModules: string[];
};

export type Capability = {
  id: string;
  name: string;
  description: string;
  requiredPermissions: Permission[];
};

export type ModuleManifest = {
  id: string;
  name: string;
  version: string;
  status: "core" | "edition" | "demo" | "planned";
  description: string;
  capabilities: string[];
  permissions: Permission[];
  navigation?: Omit<NavigationItem, "moduleId">;
};

export type EditionManifest = {
  id: string;
  name: string;
  version: string;
  industry: string;
  description: string;
  defaultModules: string[];
  defaultCapabilities: string[];
};

export type IntegrationProvider = "openai" | "supabase" | "mapbox" | "n8n" | "mock";

export type IntegrationManifest = {
  id: string;
  provider: IntegrationProvider;
  name: string;
  purpose: string;
  requiredEnv: string[];
  enabledByDefault: boolean;
};

export type OrganizationConfig = {
  organizationId: string;
  slug: string;
  name: string;
  stage: TenantStage;
  editionId: string;
  branding?: Partial<BrandingConfig>;
  theme?: Partial<ThemeConfig>;
  terminology?: Partial<TerminologyConfig>;
  featureFlags?: FeatureFlag[];
  enabledModules?: string[];
  navigation?: NavigationItem[];
  kpis?: KPI[];
  dashboardWidgets?: DashboardWidget[];
  assistant?: Partial<AssistantConfig>;
  knowledgeCollections?: KnowledgeCollection[];
  reportTemplates?: ReportTemplate[];
};

export type WorkspaceConfig = {
  workspaceId: string;
  organizationId: string;
  slug: string;
  name: string;
  enabledModules?: string[];
  featureFlags?: FeatureFlag[];
  navigation?: NavigationItem[];
  dashboardWidgets?: DashboardWidget[];
};

export type ImpactOSResolvedConfig = {
  organizationId: string;
  workspaceId: string;
  editionId: string;
  branding: BrandingConfig;
  theme: ThemeConfig;
  terminology: TerminologyConfig;
  featureFlags: Record<string, boolean>;
  enabledModules: string[];
  navigation: NavigationItem[];
  kpis: KPI[];
  dashboardWidgets: DashboardWidget[];
  assistant: AssistantConfig;
  knowledgeCollections: KnowledgeCollection[];
  reportTemplates: ReportTemplate[];
};

export type RolePolicy = {
  role: OrganizationRole;
  inherits?: OrganizationRole[];
  permissions: Permission[];
};
