import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getModuleById } from "@/lib/impactos/module-registry";
import { evaluatePermission } from "@/lib/impactos/permission-engine";
import type { ModuleSnapshot, OrganizationWorkspace } from "@/lib/impactos/types";

type ModuleDashboardProps = {
  workspace: OrganizationWorkspace;
};

export function ModuleDashboard({ workspace }: ModuleDashboardProps) {
  const { organization, edition, configuration, moduleSnapshots } = workspace;
  const dashboardCardModules = new Set(configuration.dashboard.cards.map((card) => card.moduleId));

  return (
    <div className="os-content-stack">
      <section className="os-hero-panel">
        <div>
          <p className="os-kicker">Operating model</p>
          <h2>{configuration.brand.displayName} for {organization.name}</h2>
          <p>{edition.description}</p>
        </div>
        <div className="os-outcome-list">
          {edition.outcomes.map((outcome) => (
            <span key={outcome}>{outcome}</span>
          ))}
        </div>
      </section>

      <section className="os-operating-grid" aria-label="Operating inputs">
        {edition.operatingInputs.map((input) => (
          <article key={input}>
            <span />
            <strong>{input}</strong>
          </article>
        ))}
      </section>

      <section className="os-module-grid">
        {moduleSnapshots.map((snapshot) => {
          const module = getModuleById(snapshot.moduleId);
          if (
            !module ||
            !configuration.enabledModules.includes(module.id) ||
            !evaluatePermission({
              role: organization.currentRole,
              permission: `${module.id}:view`,
              context: {
                organizationId: configuration.organizationId,
                workspaceId: configuration.workspaceId,
                moduleId: module.id,
              },
            }).allowed ||
            (configuration.dashboard.cards.length > 0 && !dashboardCardModules.has(module.id) && module.id !== "home")
          ) {
            return null;
          }
          const Icon = module.icon;
          const label = configuration.terminology.modules[module.id] ?? module.name;

          return (
            <Link
              className="os-module-card"
              href={module.id === "home" ? `/os/${organization.slug}?role=${organization.currentRole}` : `/os/${organization.slug}/${module.id}?role=${organization.currentRole}`}
              key={module.id}
            >
              <div>
                <Icon size={22} aria-hidden="true" />
                <span>{module.status}</span>
              </div>
              <h3>{label}</h3>
              <p>{snapshot.summary}</p>
              <strong>
                Open module
                <ArrowUpRight size={16} aria-hidden="true" />
              </strong>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export function ModuleDetail({ snapshot }: { snapshot: ModuleSnapshot }) {
  const module = getModuleById(snapshot.moduleId);
  if (!module) return null;
  const Icon = module.icon;

  return (
    <div className="os-content-stack">
      <section className="os-module-detail-hero">
        <div className="os-module-icon">
          <Icon size={28} aria-hidden="true" />
        </div>
        <div>
          <p className="os-kicker">{module.status} module</p>
          <h2>{module.name}</h2>
          <p>{snapshot.summary}</p>
        </div>
      </section>

      <section className="os-metric-grid" aria-label={`${module.name} metrics`}>
        {snapshot.metrics.map((metric) => (
          <article key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="os-record-panel">
        <div className="os-panel-heading">
          <p className="os-kicker">Demo records</p>
          <h3>Sample operating data</h3>
        </div>
        <div className="os-record-list">
          {snapshot.records.map((record) => (
            <article key={record.title}>
              <div>
                <strong>{record.title}</strong>
                <span>{record.meta}</span>
              </div>
              <em>{record.status}</em>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
