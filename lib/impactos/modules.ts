import {
  BarChart3,
  Bell,
  Bot,
  FileText,
  FolderKanban,
  Gauge,
  Landmark,
  Map,
  Network,
  Plug,
  Settings,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { ImpactModuleDefinition, ImpactModuleId, OrganizationRole } from "@/lib/impactos/types";

export const roleLabels: Record<OrganizationRole, string> = {
  owner: "Owner",
  admin: "Admin",
  executive: "Executive",
  operator: "Operator",
  partner: "Partner",
};

export const allRoles: OrganizationRole[] = ["owner", "admin", "executive", "operator", "partner"];

export const impactModules: ImpactModuleDefinition[] = [
  {
    id: "dashboard",
    name: "Dashboard",
    shortName: "Dashboard",
    description: "Executive overview of progress, risks, decisions, and operating signals.",
    status: "demo",
    icon: Gauge,
    allowedRoles: allRoles,
  },
  {
    id: "assistant",
    name: "Assistant",
    shortName: "Assistant",
    description: "Guided support for finding knowledge, drafting updates, and preparing decisions.",
    status: "planned",
    icon: Bot,
    allowedRoles: ["owner", "admin", "executive", "operator"],
  },
  {
    id: "knowledge",
    name: "Knowledge Hub",
    shortName: "Knowledge",
    description: "Structured institutional knowledge, methods, decisions, and field notes.",
    status: "demo",
    icon: Landmark,
    allowedRoles: allRoles,
  },
  {
    id: "projects",
    name: "Projects",
    shortName: "Projects",
    description: "Program and project coordination with ownership, status, and milestones.",
    status: "demo",
    icon: FolderKanban,
    allowedRoles: allRoles,
  },
  {
    id: "documents",
    name: "Documents",
    shortName: "Documents",
    description: "Proposals, reports, governance files, evidence, and reusable templates.",
    status: "demo",
    icon: FileText,
    allowedRoles: allRoles,
  },
  {
    id: "reports",
    name: "Reports",
    shortName: "Reports",
    description: "Board, funder, partner, and internal reporting workflows.",
    status: "demo",
    icon: BarChart3,
    allowedRoles: ["owner", "admin", "executive", "operator"],
  },
  {
    id: "analytics",
    name: "Analytics",
    shortName: "Analytics",
    description: "Signals, metrics, and analysis that explain progress and risk.",
    status: "demo",
    icon: Network,
    allowedRoles: ["owner", "admin", "executive", "operator"],
  },
  {
    id: "maps",
    name: "Maps",
    shortName: "Maps",
    description: "Geographic context for sites, partners, assets, and interventions.",
    status: "demo",
    icon: Map,
    allowedRoles: allRoles,
  },
  {
    id: "automation",
    name: "Automation",
    shortName: "Automation",
    description: "Workflow triggers, review routines, reminders, and operational handoffs.",
    status: "planned",
    icon: Workflow,
    allowedRoles: ["owner", "admin", "operator"],
  },
  {
    id: "notifications",
    name: "Notifications",
    shortName: "Notifications",
    description: "Role-aware alerts for decisions, deadlines, risk, and reporting cycles.",
    status: "planned",
    icon: Bell,
    allowedRoles: allRoles,
  },
  {
    id: "integrations",
    name: "Integrations",
    shortName: "Integrations",
    description: "Supabase-ready connectors for data, documents, and external tools.",
    status: "planned",
    icon: Plug,
    allowedRoles: ["owner", "admin"],
  },
  {
    id: "admin",
    name: "Admin",
    shortName: "Admin",
    description: "Organization settings, members, roles, access, and governance controls.",
    status: "demo",
    icon: ShieldCheck,
    allowedRoles: ["owner", "admin"],
  },
  {
    id: "settings",
    name: "Settings",
    shortName: "Settings",
    description: "Workspace preferences, module configuration, and template controls.",
    status: "demo",
    icon: Settings,
    allowedRoles: ["owner", "admin"],
  },
];

export function getModuleById(moduleId: ImpactModuleId) {
  return impactModules.find((module) => module.id === moduleId);
}

export function getVisibleModules(role: OrganizationRole, enabledModules: ImpactModuleId[]) {
  return impactModules.filter(
    (module) => enabledModules.includes(module.id) && module.allowedRoles.includes(role),
  );
}

export function canAccessModule(role: OrganizationRole, moduleId: ImpactModuleId, enabledModules: ImpactModuleId[]) {
  const module = getModuleById(moduleId);
  return Boolean(module && enabledModules.includes(module.id) && module.allowedRoles.includes(role));
}
