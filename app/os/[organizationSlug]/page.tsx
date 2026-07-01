import type { Metadata } from "next";
import { ImpactOSLayout, OSBreadcrumb } from "@/components/impactos/ImpactOSLayout";
import { ModuleDashboard } from "@/components/impactos/ModuleDashboard";
import { SupabaseReadiness } from "@/components/impactos/SupabaseReadiness";
import { getDemoOrganization } from "@/lib/impactos/demo-data";

type WorkspacePageProps = {
  params: Promise<{ organizationSlug: string }>;
  searchParams: Promise<{ role?: string }>;
};

export const metadata: Metadata = {
  title: "ImpactOS Core MVP",
  description:
    "A demo multi-tenant ImpactOS foundation with role-aware modules, OceanOS template, and Supabase-ready architecture.",
};

export default async function WorkspacePage({ params, searchParams }: WorkspacePageProps) {
  const { organizationSlug } = await params;
  const { role } = await searchParams;
  const workspace = getDemoOrganization(organizationSlug, role);

  return (
    <ImpactOSLayout workspace={workspace} activeModuleId="dashboard">
      <OSBreadcrumb organizationName={workspace.organization.name} moduleName="Dashboard" />
      <ModuleDashboard workspace={workspace} />
      <SupabaseReadiness />
    </ImpactOSLayout>
  );
}
