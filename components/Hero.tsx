export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Impact Systems Consultancy</p>
          <h1>Turn complexity into measurable impact.</h1>
          <p className="hero-subtitle">
            Royaviators helps aviation, tourism, climate, ocean, public sector, and mission-driven organizations improve operations, knowledge, and decision-making through connected systems built for lasting impact.
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

        <div
          className="hero-system"
          role="img"
          aria-label="ImpactOS connected operating system diagram"
        >
          <div className="system-shell">
            <div className="system-node system-node-primary">
              <span>ImpactOS</span>
              <strong>Operating System</strong>
            </div>
            <div className="system-node node-knowledge">
              <span>01</span>
              <strong>Knowledge</strong>
            </div>
            <div className="system-node node-operations">
              <span>02</span>
              <strong>Operations</strong>
            </div>
            <div className="system-node node-data">
              <span>03</span>
              <strong>Data</strong>
            </div>
            <div className="system-node node-decisions">
              <span>04</span>
              <strong>Decisions</strong>
            </div>
            <div className="system-path path-horizontal" />
            <div className="system-path path-vertical" />
          </div>
        </div>
      </div>
    </section>
  );
}
