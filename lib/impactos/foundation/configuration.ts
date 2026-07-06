import type {
  FeatureFlag,
  ImpactOSResolvedConfig,
  OrganizationConfig,
  WorkspaceConfig,
} from "@/lib/impactos/foundation/types";

export const coreDefaults = {
  branding: {
    productName: "ImpactOS",
    organizationName: "Royaviators",
    accentLabel: "Measurable impact",
  },
  theme: {
    mode: "system" as const,
    density: "comfortable" as const,
    radius: "rounded" as const,
  },
  terminology: {
    organizationLabel: "Organization",
    workspaceLabel: "Workspace",
    projectLabel: "Project",
    impactLabel: "Impact",
    evidenceLabel: "Evidence",
  },
  assistant: {
    enabled: false,
    knowledgeCollections: [] as string[],
    allowedTools: [] as string[],
    systemBoundary: "Demo workspace boundary",
  },
};

export function resolveWorkspaceConfig(input: {
  organization: OrganizationConfig;
  workspace: WorkspaceConfig;
  editionDefaults: Partial<ImpactOSResolvedConfig>;
}): ImpactOSResolvedConfig {
  const { organization, workspace, editionDefaults } = input;

  if (organization.organizationId !== workspace.organizationId) {
    throw new Error("Workspace configuration must belong to the same organization.");
  }

  const enabledModules = unique(
    workspace.enabledModules ?? organization.enabledModules ?? editionDefaults.enabledModules ?? [],
  );

  return {
    organizationId: organization.organizationId,
    workspaceId: workspace.workspaceId,
    editionId: organization.editionId,
    branding: { ...coreDefaults.branding, ...editionDefaults.branding, ...organization.branding },
    theme: { ...coreDefaults.theme, ...editionDefaults.theme, ...organization.theme },
    terminology: { ...coreDefaults.terminology, ...editionDefaults.terminology, ...organization.terminology },
    featureFlags: mergeFeatureFlags(
      editionDefaults.featureFlags,
      organization.featureFlags,
      workspace.featureFlags,
    ),
    enabledModules,
    navigation: [
      ...(editionDefaults.navigation ?? []),
      ...(organization.navigation ?? []),
      ...(workspace.navigation ?? []),
    ].filter((item) => !item.moduleId || enabledModules.includes(item.moduleId)),
    kpis: [...(editionDefaults.kpis ?? []), ...(organization.kpis ?? [])],
    dashboardWidgets: [
      ...(editionDefaults.dashboardWidgets ?? []),
      ...(organization.dashboardWidgets ?? []),
      ...(workspace.dashboardWidgets ?? []),
    ].filter((widget) => enabledModules.includes(widget.moduleId)),
    assistant: { ...coreDefaults.assistant, ...editionDefaults.assistant, ...organization.assistant },
    knowledgeCollections: [
      ...(editionDefaults.knowledgeCollections ?? []),
      ...(organization.knowledgeCollections ?? []),
    ],
    reportTemplates: [...(editionDefaults.reportTemplates ?? []), ...(organization.reportTemplates ?? [])],
  };
}

export function validateResolvedConfig(config: ImpactOSResolvedConfig) {
  const errors: string[] = [];

  if (!config.organizationId) errors.push("organizationId is required");
  if (!config.workspaceId) errors.push("workspaceId is required");
  if (!config.editionId) errors.push("editionId is required");
  if (!config.enabledModules.length) errors.push("at least one module must be enabled");

  if (config.navigation.some((item) => item.moduleId && !config.enabledModules.includes(item.moduleId))) {
    errors.push("navigation cannot reference disabled modules");
  }

  if (config.dashboardWidgets.some((widget) => !config.enabledModules.includes(widget.moduleId))) {
    errors.push("dashboard widgets cannot reference disabled modules");
  }

  return { valid: errors.length === 0, errors };
}

function mergeFeatureFlags(...sets: Array<FeatureFlag[] | undefined>) {
  return sets.flatMap((set) => set ?? []).reduce<Record<string, boolean>>((flags, flag) => {
    flags[flag.key] = flag.enabled;
    return flags;
  }, {});
}

function unique<T>(items: T[]) {
  return Array.from(new Set(items));
}
