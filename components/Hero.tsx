export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">AI Impact Consultancy</p>
          <h1>Building intelligent organizations for a more sustainable future.</h1>
          <p className="hero-subtitle">
            Royaviators partners with aviation, tourism, climate, ocean, public sector, and mission-driven organizations to design AI-powered operating systems that improve decisions, operations, and measurable impact.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Book a Strategy Session
            </a>
            <a className="btn btn-secondary" href="#impactos">
              Explore ImpactOS
            </a>
          </div>
        </div>

        <div className="hero-system" aria-label="Abstract ImpactOS system diagram">
          <div className="system-card primary-node">
            <span>ImpactOS</span>
            <strong>AI Workspace</strong>
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
