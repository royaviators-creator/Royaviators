import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImpactOSLayout, OSBreadcrumb } from "@/components/impactos/ImpactOSLayout";
import { ModuleDetail } from "@/components/impactos/ModuleDashboard";
import { getDemoOrganization, getModuleSnapshot } from "@/lib/impactos/demo-data";
import { canAccessModule } from "@/lib/impactos/identity";
import { getModuleById } from "@/lib/impactos/module-registry";
import type { ImpactModuleId } from "@/lib/impactos/types";

type ModulePageProps = {
  params: Promise<{ organizationSlug: string; moduleSlug: string }>;
  searchParams: Promise<{ role?: string }>;
};

export async function generateMetadata({ params }: ModulePageProps): Promise<Metadata> {
  const { moduleSlug } = await params;
  const module = getModuleById(moduleSlug as ImpactModuleId);

  return {
    title: module ? `${module.name} | ImpactOS` : "ImpactOS Module",
    description: module?.description ?? "ImpactOS module placeholder.",
  };
}

export default async function ModulePage({ params, searchParams }: ModulePageProps) {
  const { organizationSlug, moduleSlug } = await params;
  const { role } = await searchParams;
  const moduleId = moduleSlug as ImpactModuleId;
  const workspace = getDemoOrganization(organizationSlug, role);
  const module = getModuleById(moduleId);

  if (
    !module ||
    !workspace.configuration.enabledModules.includes(moduleId) ||
    !canAccessModule(workspace.organization.currentRole, moduleId)
  ) {
    notFound();
  }

  const snapshot = getModuleSnapshot(moduleId);
  if (!snapshot) notFound();

  return (
    <ImpactOSLayout workspace={workspace} activeModuleId={moduleId}>
      <OSBreadcrumb organizationName={workspace.organization.name} moduleName={module.name} />
      <ModuleDetail snapshot={snapshot} />
    </ImpactOSLayout>
  );
}
