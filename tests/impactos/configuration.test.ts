import assert from "node:assert/strict";
import test from "node:test";
import {
  resolveEffectiveWorkspaceConfiguration,
  resolveVisibleNavigation,
  validateConfiguration,
} from "../../lib/impactos/configuration";
import { getEditionById } from "../../lib/impactos/edition-registry";
import type { Organization, Workspace } from "../../lib/impactos/types";

const edition = getEditionById("ocean");
if (!edition) throw new Error("Ocean Edition is required for tests.");

const organization: Organization = {
  id: "org_test",
  slug: "test-org",
  name: "Test Organization",
  editionId: "ocean",
  industry: "Climate & Ocean",
  region: "Test",
  stage: "demo",
  memberCount: 4,
  currentRole: "executive",
  configuration: {
    brand: { displayName: "Test Organization" },
    terminology: {
      workspace: "operating room",
      modules: { projects: "Programs" },
      roles: { executive: "Leadership" },
    },
  },
};

const workspace: Workspace = {
  id: "ws_test",
  slug: "executive",
  organizationId: "org_test",
  name: "Executive Workspace",
  type: "executive",
  configuration: {
    enabledModules: ["home", "dashboard", "projects", "reports", "admin"],
  },
};

test("configuration resolver merges edition defaults with organization and workspace overrides", () => {
  const configuration = resolveEffectiveWorkspaceConfiguration({ edition, organization, workspace });

  assert.equal(configuration.brand.displayName, "Test Organization");
  assert.equal(configuration.terminology.workspace, "operating room");
  assert.equal(configuration.terminology.modules.projects, "Programs");
  assert.deepEqual(configuration.enabledModules, ["home", "dashboard", "projects", "reports", "admin"]);
});

test("configuration validation fails closed for invalid navigation", () => {
  const configuration = resolveEffectiveWorkspaceConfiguration({ edition, organization, workspace });
  const invalid = {
    ...configuration,
    navigation: [
      ...configuration.navigation,
      { moduleId: "knowledge" as const, label: "Knowledge", group: "knowledge" as const, order: 99 },
    ],
  };

  assert.equal(validateConfiguration(invalid).valid, false);
});

test("visible navigation respects RBAC permissions", () => {
  const configuration = resolveEffectiveWorkspaceConfiguration({ edition, organization, workspace });
  const executiveNavigation = resolveVisibleNavigation(configuration, "executive").map((item) => item.moduleId);
  const adminNavigation = resolveVisibleNavigation(configuration, "admin").map((item) => item.moduleId);

  assert.equal(executiveNavigation.includes("admin"), false);
  assert.equal(adminNavigation.includes("admin"), true);
});
