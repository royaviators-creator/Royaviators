import type { LucideIcon } from "lucide-react";

export type OrganizationRole =
  | "owner"
  | "admin"
  | "workspace-admin"
  | "executive"
  | "operator"
  | "analyst"
  | "contributor"
  | "partner"
  | "viewer";

export type ModuleStatus = "draft" | "internal-preview" | "beta" | "stable" | "deprecated";

export type ImpactModuleId =
  | "home"
  | "dashboard"
  | "assistant"
  | "knowledge"
  | "projects"
  | "documents"
  | "reports"
  | "kpis"
  | "maps"
  | "workflows"
  | "integrations"
  | "admin";

export type PlatformCapabilityId =
  | "identity"
  | "permissions"
  | "configuration"
  | "module-registry"
  | "edition-registry"
  | "navigation"
  | "knowledge"
  | "ai-orchestration"
  | "workflow-runtime"
  | "audit"
  | "notifications"
  | "search"
  | "analytics"
  | "feature-flags";

export type PermissionAction =
  | "view"
  | "create"
  | "edit"
  | "delete"
  | "approve"
  | "publish"
  | "export"
  | "configure"
  | "admin";

export type PermissionKey = `${ImpactModuleId}:${PermissionAction}` | `platform:${PlatformCapabilityId}:${PermissionAction}`;

export type RoleDefinition = {
  id: OrganizationRole;
  label: string;
  description: string;
  inherits?: OrganizationRole[];
  permissions: PermissionKey[];
};

export type ImpactModuleDefinition = {
  id: ImpactModuleId;
  name: string;
  shortName: string;
  description: string;
  status: ModuleStatus;
  icon: LucideIcon;
  version: string;
  category: "workspace" | "data" | "governance" | "intelligence" | "integration";
  requiredCapabilities: PlatformCapabilityId[];
  permissions: Partial<Record<PermissionAction, PermissionKey>>;
  dependencies?: ImpactModuleId[];
  defaultNavigationGroup: "operate" | "measure" | "knowledge" | "configure";
};

export type ModuleMetric = {
  label: string;
  value: string;
  detail: string;
};

export type ModuleRecord = {
  title: string;
  meta: string;
  status: string;
};

export type ModuleSnapshot = {
  moduleId: ImpactModuleId;
  summary: string;
  metrics: ModuleMetric[];
  records: ModuleRecord[];
};

export type BrandConfig = {
  displayName: string;
  productName: string;
  reportBrand?: string;
  emailBrand?: string;
};

export type ThemeConfig = {
  primary: string;
  accent: string;
  surface: string;
  text: string;
  density: "comfortable" | "compact";
};

export type TerminologyConfig = {
  workspace: string;
  modules: Partial<Record<ImpactModuleId, string>>;
  roles: Partial<Record<OrganizationRole, string>>;
};

export type NavigationItemConfig = {
  moduleId: ImpactModuleId;
  label: string;
  group: ImpactModuleDefinition["defaultNavigationGroup"];
  order: number;
};

export type FeatureFlagConfig = {
  key: string;
  enabled: boolean;
  description: string;
  scope: "core" | "edition" | "organization" | "workspace";
};

export type DashboardCardConfig = {
  id: string;
  title: string;
  moduleId: ImpactModuleId;
  metric: string;
};

export type DashboardConfig = {
  landingModuleId: ImpactModuleId;
  cards: DashboardCardConfig[];
};

export type WorkspaceConfiguration = {
  enabledModules: ImpactModuleId[];
  navigation: NavigationItemConfig[];
  featureFlags: FeatureFlagConfig[];
  dashboard: DashboardConfig;
};

export type WorkspaceConfigurationOverride = {
  enabledModules?: ImpactModuleId[];
  navigation?: NavigationItemConfig[];
  featureFlags?: FeatureFlagConfig[];
  dashboard?: Partial<DashboardConfig>;
};

export type OrganizationConfiguration = {
  brand: BrandConfig;
  theme: ThemeConfig;
  terminology: TerminologyConfig;
  enabledModules: ImpactModuleId[];
  featureFlags: FeatureFlagConfig[];
};

export type OrganizationConfigurationOverride = {
  brand?: Partial<BrandConfig>;
  theme?: Partial<ThemeConfig>;
  terminology?: {
    workspace?: string;
    modules?: Partial<Record<ImpactModuleId, string>>;
    roles?: Partial<Record<OrganizationRole, string>>;
  };
  enabledModules?: ImpactModuleId[];
  featureFlags?: FeatureFlagConfig[];
};

export type EffectiveWorkspaceConfiguration = OrganizationConfiguration &
  WorkspaceConfiguration & {
    editionId: string;
    editionVersion: string;
    organizationId: string;
    workspaceId: string;
  };

export type EditionManifest = {
  id: string;
  version: string;
  name: string;
  category: string;
  description: string;
  operatingInputs: string[];
  outcomes: string[];
  defaultOrganizationConfig: OrganizationConfiguration;
  defaultWorkspaceConfig: WorkspaceConfiguration;
};

export type Organization = {
  id: string;
  slug: string;
  name: string;
  editionId: string;
  industry: string;
  region: string;
  stage: "demo" | "pilot" | "active";
  memberCount: number;
  currentRole: OrganizationRole;
  configuration?: OrganizationConfigurationOverride;
};

export type Workspace = {
  id: string;
  slug: string;
  organizationId: string;
  name: string;
  type: "executive" | "operations" | "partner" | "reporting" | "knowledge" | "program";
  configuration?: WorkspaceConfigurationOverride;
};

export type OrganizationWorkspace = {
  organization: Organization;
  workspace: Workspace;
  edition: EditionManifest;
  configuration: EffectiveWorkspaceConfiguration;
  moduleSnapshots: ModuleSnapshot[];
};

export type IntegrationPort = "data" | "file" | "model" | "embeddings" | "search" | "maps" | "workflow";

export type IntegrationAdapterManifest = {
  id: string;
  name: string;
  port: IntegrationPort;
  provider: "mock" | "supabase" | "openai" | "mapbox" | "n8n";
  version: string;
  capabilities: string[];
  credentialMode: "none" | "server-only";
};
