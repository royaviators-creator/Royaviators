import type { LucideIcon } from "lucide-react";

export type OrganizationRole = "owner" | "admin" | "executive" | "operator" | "partner";

export type ModuleStatus = "ready" | "demo" | "planned";

export type ImpactModuleId =
  | "dashboard"
  | "assistant"
  | "knowledge"
  | "projects"
  | "documents"
  | "reports"
  | "analytics"
  | "maps"
  | "automation"
  | "notifications"
  | "integrations"
  | "admin"
  | "settings";

export type ImpactModuleDefinition = {
  id: ImpactModuleId;
  name: string;
  shortName: string;
  description: string;
  status: ModuleStatus;
  icon: LucideIcon;
  allowedRoles: OrganizationRole[];
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

export type IndustryTemplate = {
  id: string;
  name: string;
  industry: string;
  description: string;
  operatingInputs: string[];
  outcomes: string[];
  enabledModules: ImpactModuleId[];
};

export type Organization = {
  id: string;
  slug: string;
  name: string;
  templateId: string;
  industry: string;
  region: string;
  stage: "demo" | "pilot" | "active";
  memberCount: number;
  currentRole: OrganizationRole;
};

export type OrganizationWorkspace = {
  organization: Organization;
  template: IndustryTemplate;
  moduleSnapshots: ModuleSnapshot[];
};
