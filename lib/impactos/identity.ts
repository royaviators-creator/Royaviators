import type { ImpactModuleId, OrganizationRole, PermissionAction, PermissionKey, RoleDefinition } from "@/lib/impactos/types";

const moduleActions: PermissionAction[] = ["view", "create", "edit", "delete", "approve", "publish", "export", "configure", "admin"];

function modulePermissions(moduleId: ImpactModuleId, actions: PermissionAction[] = moduleActions): PermissionKey[] {
  return actions.map((action) => `${moduleId}:${action}` as PermissionKey);
}

export const roleDefinitions: RoleDefinition[] = [
  {
    id: "owner",
    label: "Owner",
    description: "Accountable organization owner with full tenant governance.",
    permissions: [
      ...modulePermissions("home"),
      ...modulePermissions("dashboard"),
      ...modulePermissions("projects"),
      ...modulePermissions("knowledge"),
      ...modulePermissions("documents"),
      ...modulePermissions("reports"),
      ...modulePermissions("kpis"),
      ...modulePermissions("maps"),
      ...modulePermissions("assistant"),
      ...modulePermissions("workflows"),
      ...modulePermissions("integrations"),
      ...modulePermissions("admin"),
      "platform:configuration:admin",
      "platform:permissions:admin",
      "platform:audit:view",
      "platform:feature-flags:configure",
    ],
  },
  {
    id: "admin",
    label: "Admin",
    description: "Manages users, settings, modules, integrations, and configuration.",
    inherits: ["workspace-admin"],
    permissions: [
      "admin:view",
      "admin:configure",
      "admin:admin",
      "integrations:view",
      "integrations:configure",
      "platform:configuration:configure",
      "platform:permissions:configure",
      "platform:feature-flags:configure",
    ],
  },
  {
    id: "workspace-admin",
    label: "Workspace Admin",
    description: "Manages one workspace and its module configuration.",
    inherits: ["executive", "operator", "analyst"],
    permissions: ["dashboard:configure", "projects:configure", "knowledge:configure", "documents:configure", "reports:configure", "kpis:configure"],
  },
  {
    id: "executive",
    label: "Executive",
    description: "Leadership view of progress, decisions, KPIs, risk, and reports.",
    permissions: [
      "home:view",
      "dashboard:view",
      "projects:view",
      "knowledge:view",
      "documents:view",
      "reports:view",
      "reports:approve",
      "reports:export",
      "kpis:view",
      "maps:view",
      "assistant:view",
    ],
  },
  {
    id: "operator",
    label: "Operator",
    description: "Day-to-day project, evidence, workflow, and document contributor.",
    permissions: [
      "home:view",
      "dashboard:view",
      "projects:view",
      "projects:create",
      "projects:edit",
      "knowledge:view",
      "knowledge:create",
      "knowledge:edit",
      "documents:view",
      "documents:create",
      "documents:edit",
      "reports:view",
      "kpis:view",
      "maps:view",
      "assistant:view",
      "workflows:view",
      "workflows:edit",
    ],
  },
  {
    id: "analyst",
    label: "Analyst",
    description: "Reviews KPIs, dashboards, reports, and evidence.",
    permissions: [
      "home:view",
      "dashboard:view",
      "knowledge:view",
      "documents:view",
      "reports:view",
      "reports:edit",
      "reports:export",
      "kpis:view",
      "kpis:edit",
      "maps:view",
      "assistant:view",
    ],
  },
  {
    id: "contributor",
    label: "Contributor",
    description: "Creates and updates assigned records.",
    permissions: ["home:view", "projects:view", "projects:edit", "knowledge:view", "documents:view", "documents:create", "documents:edit"],
  },
  {
    id: "partner",
    label: "Partner",
    description: "External constrained collaborator.",
    permissions: ["home:view", "projects:view", "knowledge:view", "documents:view", "reports:view", "maps:view"],
  },
  {
    id: "viewer",
    label: "Viewer",
    description: "Read-only access to permitted workspace surfaces.",
    permissions: ["home:view", "dashboard:view", "knowledge:view", "documents:view", "reports:view", "kpis:view", "maps:view"],
  },
];

export const roleLabels: Record<OrganizationRole, string> = roleDefinitions.reduce(
  (labels, role) => ({ ...labels, [role.id]: role.label }),
  {} as Record<OrganizationRole, string>,
);

export function normalizeRole(role?: string): OrganizationRole | null {
  if (!role) return null;
  return roleDefinitions.some((definition) => definition.id === role) ? (role as OrganizationRole) : null;
}

export function getRoleDefinition(role: OrganizationRole) {
  return roleDefinitions.find((definition) => definition.id === role);
}

export function getEffectivePermissions(role: OrganizationRole, visited = new Set<OrganizationRole>()): PermissionKey[] {
  if (visited.has(role)) return [];
  visited.add(role);

  const definition = getRoleDefinition(role);
  if (!definition) return [];

  const inherited = definition.inherits?.flatMap((inheritedRole) => getEffectivePermissions(inheritedRole, visited)) ?? [];
  return Array.from(new Set([...inherited, ...definition.permissions]));
}

export function hasPermission(role: OrganizationRole, permission: PermissionKey) {
  return getEffectivePermissions(role).includes(permission);
}

export function canAccessModule(role: OrganizationRole, moduleId: ImpactModuleId, action: PermissionAction = "view") {
  return hasPermission(role, `${moduleId}:${action}` as PermissionKey);
}
