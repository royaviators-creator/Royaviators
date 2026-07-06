import { resolveEffectiveWorkspaceConfiguration } from "@/lib/impactos/configuration";
import type {
  EditionManifest,
  EffectiveWorkspaceConfiguration,
  FeatureFlagConfig,
  Organization,
  OrganizationConfigurationOverride,
  UserPreferenceConfiguration,
  Workspace,
  WorkspaceConfigurationOverride,
} from "@/lib/impactos/types";

export type CoreConfigurationLayer = {
  featureFlags?: FeatureFlagConfig[];
};

export type ConfigurationLoadInput = {
  core?: CoreConfigurationLayer;
  edition: EditionManifest;
  organization: Organization;
  organizationOverride?: OrganizationConfigurationOverride;
  workspace: Workspace;
  workspaceOverride?: WorkspaceConfigurationOverride;
  userPreferences?: UserPreferenceConfiguration;
};

function mergeFeatureFlags(...flagSets: FeatureFlagConfig[][]) {
  const flags = new Map<string, FeatureFlagConfig>();
  for (const flagSet of flagSets) {
    for (const flag of flagSet) {
      flags.set(flag.key, { ...flags.get(flag.key), ...flag });
    }
  }
  return Array.from(flags.values());
}

export function loadEffectiveConfiguration(input: ConfigurationLoadInput): EffectiveWorkspaceConfiguration {
  const edition: EditionManifest = {
    ...input.edition,
    defaultOrganizationConfig: {
      ...input.edition.defaultOrganizationConfig,
      featureFlags: mergeFeatureFlags(
        input.core?.featureFlags ?? [],
        input.edition.defaultOrganizationConfig.featureFlags,
      ),
    },
  };

  const organization: Organization = {
    ...input.organization,
    configuration: {
      ...input.organization.configuration,
      ...input.organizationOverride,
      brand: { ...input.organization.configuration?.brand, ...input.organizationOverride?.brand },
      theme: { ...input.organization.configuration?.theme, ...input.organizationOverride?.theme },
      terminology: {
        ...input.organization.configuration?.terminology,
        ...input.organizationOverride?.terminology,
        modules: {
          ...input.organization.configuration?.terminology?.modules,
          ...input.organizationOverride?.terminology?.modules,
        },
        roles: {
          ...input.organization.configuration?.terminology?.roles,
          ...input.organizationOverride?.terminology?.roles,
        },
      },
      featureFlags: mergeFeatureFlags(
        input.organization.configuration?.featureFlags ?? [],
        input.organizationOverride?.featureFlags ?? [],
      ),
    },
  };

  const workspace: Workspace = {
    ...input.workspace,
    configuration: {
      ...input.workspace.configuration,
      ...input.workspaceOverride,
      dashboard: {
        ...input.workspace.configuration?.dashboard,
        ...input.workspaceOverride?.dashboard,
      },
      featureFlags: mergeFeatureFlags(
        input.workspace.configuration?.featureFlags ?? [],
        input.workspaceOverride?.featureFlags ?? [],
      ),
    },
  };

  const resolved = resolveEffectiveWorkspaceConfiguration({
    edition,
    organization,
    workspace,
  });

  return {
    ...resolved,
    userPreferences: input.userPreferences,
    theme: {
      ...resolved.theme,
      density: input.userPreferences?.density ?? resolved.theme.density,
    },
    dashboard: {
      ...resolved.dashboard,
      landingModuleId:
        input.userPreferences?.preferredLandingModuleId &&
        resolved.enabledModules.includes(input.userPreferences.preferredLandingModuleId)
          ? input.userPreferences.preferredLandingModuleId
          : resolved.dashboard.landingModuleId,
    },
  };
}
