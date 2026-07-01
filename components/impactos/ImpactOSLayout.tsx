import Link from "next/link";
import { ChevronRight, Database, ShieldCheck } from "lucide-react";
import { getVisibleModules, roleLabels } from "@/lib/impactos/modules";
import { isSupabaseConfigured } from "@/lib/supabase/server";
import type { ImpactModuleId, OrganizationRole, OrganizationWorkspace } from "@/lib/impactos/types";

type ImpactOSLayoutProps = {
  workspace: OrganizationWorkspace;
  activeModuleId?: ImpactModuleId;
  children: React.ReactNode;
};

export function ImpactOSLayout({ workspace, activeModuleId = "dashboard", children }: ImpactOSLayoutProps) {
  const { organization, template } = workspace;
  const visibleModules = getVisibleModules(organization.currentRole, template.enabledModules);

  return (
    <main className="os-shell">
      <aside className="os-sidebar" aria-label="ImpactOS workspace navigation">
        <Link href="/" className="os-brand">
          <span>Royaviators</span>
          <strong>ImpactOS</strong>
        </Link>

        <div className="os-tenant-card">
          <span>{template.name}</span>
          <h1>{organization.name}</h1>
          <p>{template.industry} operating-system demo.</p>
        </div>

        <RoleSwitcher organizationSlug={organization.slug} currentRole={organization.currentRole} />

        <nav className="os-module-nav" aria-label="Workspace modules">
          {visibleModules.map((module) => {
            const Icon = module.icon;
            const isActive = module.id === activeModuleId;

            return (
              <Link
                className={isActive ? "active" : undefined}
                href={module.id === "dashboard" ? `/os/${organization.slug}?role=${organization.currentRole}` : `/os/${organization.slug}/${module.id}?role=${organization.currentRole}`}
                key={module.id}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon size={18} aria-hidden="true" />
                <span>{module.shortName}</span>
                <em>{module.status}</em>
              </Link>
            );
          })}
        </nav>

        <div className="os-sidebar-note">
          <ShieldCheck size={17} aria-hidden="true" />
          <span>Role-aware navigation using demo permissions.</span>
        </div>
      </aside>

      <section className="os-main">
        <header className="os-topbar">
          <div>
            <p className="os-kicker">{organization.stage} workspace</p>
            <h2>{template.description}</h2>
          </div>
          <div className="os-topbar-actions" aria-label="Workspace status">
            <span>{roleLabels[organization.currentRole]}</span>
            <span>{organization.memberCount} demo members</span>
            <span className={isSupabaseConfigured() ? "online" : undefined}>
              <Database size={15} aria-hidden="true" />
              {isSupabaseConfigured() ? "Supabase ready" : "Demo data"}
            </span>
          </div>
        </header>

        {children}
      </section>
    </main>
  );
}

function RoleSwitcher({
  organizationSlug,
  currentRole,
}: {
  organizationSlug: string;
  currentRole: OrganizationRole;
}) {
  const roles: OrganizationRole[] = ["executive", "operator", "admin", "partner"];

  return (
    <div className="os-role-switcher" aria-label="Demo role switcher">
      <p>Demo role</p>
      <div>
        {roles.map((role) => (
          <Link
            className={role === currentRole ? "active" : undefined}
            href={`/os/${organizationSlug}?role=${role}`}
            key={role}
          >
            {roleLabels[role]}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function OSBreadcrumb({
  organizationName,
  moduleName,
}: {
  organizationName: string;
  moduleName: string;
}) {
  return (
    <div className="os-breadcrumb" aria-label="Breadcrumb">
      <span>{organizationName}</span>
      <ChevronRight size={15} aria-hidden="true" />
      <strong>{moduleName}</strong>
    </div>
  );
}
