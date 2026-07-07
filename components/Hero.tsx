import { siteConfig, strategySessionHref } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{siteConfig.tagline}</p>
          <h1>Turn complexity into measurable impact.</h1>
          <p className="hero-subtitle">
            Royaviators helps aviation, tourism, climate, ocean, public sector, and mission-driven organizations improve operations, knowledge, and decision-making through connected systems built for lasting impact.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={strategySessionHref}>
              {siteConfig.cta.strategySession.label}
            </a>
            <a className="btn btn-secondary" href="#impactos">
              {siteConfig.cta.impactOS.label}
            </a>
          </div>
        </div>

        <div className="hero-system" aria-label="ImpactOS connected operating system diagram">
          <div className="system-card primary-node">
            <span>ImpactOS</span>
            <strong>Intelligent Workspace</strong>
          </div>
          <div className="system-orbit orbit-one">Knowledge</div>
          <div className="system-orbit orbit-two">Automation</div>
          <div className="system-orbit orbit-three">Data</div>
          <div className="system-orbit orbit-four">Decisions</div>
          <div className="system-line line-a" />
          <div className="system-line line-b" />
          <div className="system-line line-c" />
        </div>
      </div>
    </section>
  );
}
