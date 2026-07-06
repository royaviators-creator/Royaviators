import { notFound } from "next/navigation";
import { resolveEffectiveWorkspaceConfiguration } from "@/lib/impactos/configuration";
import { demoFixtures, getDemoFixtureBySlug } from "@/lib/impactos/demo-fixtures";
import { getEditionById } from "@/lib/impactos/edition-registry";
import { normalizeRole } from "@/lib/impactos/identity";
import { validateEffectiveConfiguration } from "@/lib/impactos/validation";
import type { ImpactModuleId, OrganizationWorkspace } from "@/lib/impactos/types";

export function getDemoOrganization(slug: string, role?: string): OrganizationWorkspace {
  const fixture = getDemoFixtureBySlug(slug);
  if (!fixture) notFound();

  const edition = getEditionById(fixture.organization.editionId);
  if (!edition) notFound();

  const organization = {
    ...fixture.organization,
    currentRole: normalizeRole(role) ?? fixture.organization.currentRole,
  };
  const configuration = resolveEffectiveWorkspaceConfiguration({
    edition,
    organization,
    workspace: fixture.workspace,
  });
  const validation = validateEffectiveConfiguration(configuration);
  if (!validation.valid) notFound();

  return {
    organization,
    workspace: fixture.workspace,
    edition,
    configuration,
    moduleSnapshots: fixture.moduleSnapshots,
  };
}

export function getModuleSnapshot(moduleId: ImpactModuleId) {
  for (const fixture of demoFixtures) {
    const snapshot = fixture?.moduleSnapshots.find((item) => item.moduleId === moduleId);
    if (snapshot) return snapshot;
  }

  return undefined;
}
