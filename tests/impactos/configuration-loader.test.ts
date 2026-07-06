import assert from "node:assert/strict";
import test from "node:test";
import { loadEffectiveConfiguration } from "../../lib/impactos/configuration-loader";
import { getEditionById } from "../../lib/impactos/edition-registry";
import type { Organization, Workspace } from "../../lib/impactos/types";

const edition = getEditionById("ocean");
if (!edition) throw new Error("Ocean Edition is required for tests.");

const organization: Organization = {
  id: "org_layers",
  slug: "org-layers",
  name: "Layered Org",
  editionId: "ocean",
  industry: "Climate & Ocean",
  region: "EU",
  stage: "pilot",
  memberCount: 8,
  currentRole: "admin",
};

const workspace: Workspace = {
  id: "ws_layers",
  slug: "executive",
  organizationId: "org_layers",
  name: "Executive Workspace",
  type: "executive",
};

test("configuration loader applies core, edition, organization, workspace, and user layers deterministically", () => {
  const configuration = loadEffectiveConfiguration({
    core: {
      featureFlags: [
        {
          key: "assistant.governed-beta",
          enabled: false,
          description: "Core default disabled until edition enables it.",
          scope: "core",
        },
      ],
    },
    edition,
    organization,
    organizationOverride: {
      brand: { displayName: "Layered Brand" },
    },
    workspace,
    workspaceOverride: {
      enabledModules: ["home", "dashboard", "projects", "reports"],
    },
    userPreferences: {
      preferredLandingModuleId: "reports",
      density: "compact",
    },
  });

  assert.equal(configuration.brand.displayName, "Layered Brand");
  assert.deepEqual(configuration.enabledModules, ["home", "dashboard", "projects", "reports"]);
  assert.equal(configuration.dashboard.landingModuleId, "reports");
  assert.equal(configuration.theme.density, "compact");
});
