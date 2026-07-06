import { getModuleById, listModules } from "@/lib/impactos/module-registry";
import { evaluatePermission } from "@/lib/impactos/permission-engine";
import { validateEffectiveConfiguration } from "@/lib/impactos/validation";
import type {
  EffectiveWorkspaceConfiguration,
  FeatureFlagConfig,
  ImpactModuleId,
  NavigationItemConfig,
  Organization,
  OrganizationConfiguration,
  OrganizationConfigurationOverride,
  OrganizationRole,
  Workspace,
  WorkspaceConfiguration,
  WorkspaceConfigurationOverride,
  EditionManifest,
} from "@/lib/impactos/types";

function mergeFeatureFlags(...flagSets: FeatureFlagConfig[][]) {
  const flags = new Map<string, FeatureFlagConfig>();

  for (const flagSet of flagSets) {
    for (const flag of flagSet) {
      flags.set(flag.key, { ...flags.get(flag.key), ...flag });
    }
  }

  return Array.from(flags.values());
}

function mergeOrganizationConfig(
  defaults: OrganizationConfiguration,
  override?: OrganizationConfigurationOverride,
): OrganizationConfiguration {
  return {
    brand: { ...defaults.brand, ...override?.brand },
    theme: { ...defaults.theme, ...override?.theme },
    terminology: {
      workspace: override?.terminology?.workspace ?? defaults.terminology.workspace,
      modules: { ...defaults.terminology.modules, ...override?.terminology?.modules },
      roles: { ...defaults.terminology.roles, ...override?.terminology?.roles },
    },
    enabledModules: override?.enabledModules ?? defaults.enabledModules,
    featureFlags: mergeFeatureFlags(defaults.featureFlags, override?.featureFlags ?? []),
  };
}

function mergeWorkspaceConfig(defaults: WorkspaceConfiguration, override?: WorkspaceConfigurationOverride): WorkspaceConfiguration {
  return {
    enabledModules: override?.enabledModules ?? defaults.enabledModules,
    navigation: override?.navigation ?? defaults.navigation,
    featureFlags: mergeFeatureFlags(defaults.featureFlags, override?.featureFlags ?? []),
    dashboard: {
      ...defaults.dashboard,
      ...override?.dashboard,
      cards: override?.dashboard?.cards ?? defaults.dashboard.cards,
    },
  };
}

function filterEnabledModules(
  organizationModules: ImpactModuleId[],
  workspaceModules: ImpactModuleId[],
  featureFlags: FeatureFlagConfig[],
) {
  const enabledFlags = new Set(featureFlags.filter((flag) => flag.enabled).map((flag) => flag.key));
  const organizationModuleSet = new Set(organizationModules);
  const candidateModules = workspaceModules.filter((moduleId) => organizationModuleSet.has(moduleId));

  return candidateModules.filter((moduleId) => {
    if (moduleId === "assistant") return enabledFlags.has("assistant.governed-beta");
    if (moduleId === "workflows") return enabledFlags.has("workflows.internal-preview");
    if (moduleId === "integrations") return enabledFlags.has("integrations.internal-preview");
    return Boolean(getModuleById(moduleId));
  });
}

export function resolveEffectiveWorkspaceConfiguration({
  edition,
  organization,
  workspace,
}: {
  edition: EditionManifest;
  organization: Organization;
  workspace: Workspace;
}): EffectiveWorkspaceConfiguration {
  const organizationConfig = mergeOrganizationConfig(edition.defaultOrganizationConfig, organization.configuration);
  const workspaceConfig = mergeWorkspaceConfig(edition.defaultWorkspaceConfig, workspace.configuration);
  const featureFlags = mergeFeatureFlags(organizationConfig.featureFlags, workspaceConfig.featureFlags);
  const enabledModules = filterEnabledModules(organizationConfig.enabledModules, workspaceConfig.enabledModules, featureFlags);

  return {
    ...organizationConfig,
    ...workspaceConfig,
    editionId: edition.id,
    editionVersion: edition.version,
    organizationId: organization.id,
    workspaceId: workspace.id,
    enabledModules,
    featureFlags,
    navigation: resolveNavigation(workspaceConfig.navigation, enabledModules),
    dashboard: {
      ...workspaceConfig.dashboard,
      landingModuleId: enabledModules.includes(workspaceConfig.dashboard.landingModuleId)
        ? workspaceConfig.dashboard.landingModuleId
        : "home",
      cards: workspaceConfig.dashboard.cards.filter((card) => enabledModules.includes(card.moduleId)),
    },
  };
}

export function resolveNavigation(navigation: NavigationItemConfig[], enabledModules: ImpactModuleId[]) {
  const registeredModules = listModules(enabledModules);
  const navigationByModule = new Map(navigation.map((item) => [item.moduleId, item]));

  return registeredModules
    .map((module) => {
      const configured = navigationByModule.get(module.id);
      return {
        moduleId: module.id,
        label: configured?.label ?? module.shortName,
        group: configured?.group ?? module.defaultNavigationGroup,
        order: configured?.order ?? 999,
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function resolveVisibleNavigation(configuration: EffectiveWorkspaceConfiguration, role: OrganizationRole) {
  return configuration.navigation.filter((item) =>
    evaluatePermission({
      role,
      permission: `${item.moduleId}:view`,
      context: {
        organizationId: configuration.organizationId,
        workspaceId: configuration.workspaceId,
        moduleId: item.moduleId,
      },
    }).allowed,
  );
}

export function validateConfiguration(configuration: EffectiveWorkspaceConfiguration) {
  const validation = validateEffectiveConfiguration(configuration);

  return {
    valid: validation.valid,
    errors: validation.issues.filter((issue) => issue.severity === "error").map((issue) => issue.message),
  };
}
