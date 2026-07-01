import {
  approach,
  challenges,
  impactModules,
  industries,
  navItems,
  operatingOutputs,
  products,
  proofPoints,
  servicePillars,
  trustCapabilities,
} from "@/lib/content";

function Intro({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export function TrustedPartner() {
  return (
    <section className="section-tight trust-band">
      <div className="container trust-grid">
        <p className="eyebrow">Impact systems partner</p>
        <h2>Strategy, data, operations, and implementation brought together for organizations with complex work.</h2>
      </div>
    </section>
  );
}

export function Challenges() {
  return (
    <section id="solutions" className="section">
      <div className="container">
        <Intro
          kicker="Challenges we solve"
          title="Most organizations do not need more tools. They need clearer systems."
          text="Royaviators helps teams move from scattered work to connected knowledge, better workflows, and measurable outcomes."
        />
        <div className="challenge-grid">
          {challenges.map((challenge) => (
            <div className="challenge-item" key={challenge}>
              <span />
              <strong>{challenge}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="section surface-section">
      <div className="container">
        <Intro
          kicker="Services"
          title="From strategic clarity to operating systems."
          text="Our work connects strategy with implementation, so transformation becomes operational rather than theoretical."
        />
        <div className="grid-3">
          {servicePillars.map((pillar) => (
            <article className="service-card card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <ul>
                {pillar.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImpactOS() {
  return (
    <section id="impactos" className="section dark-section">
      <div className="container impactos-grid">
        <div className="impactos-copy">
          <p className="eyebrow">ImpactOS</p>
          <h2>One operating system for knowledge, work, and decisions.</h2>
          <p>
            ImpactOS is the reusable foundation behind Royaviators transformation projects. It connects how an organization knows, works, measures, and improves.
          </p>
          <a className="btn btn-secondary" href="#contact">Explore an implementation</a>
        </div>
        <div
          className="impactos-diagram"
          role="img"
          aria-label="ImpactOS connects knowledge, people, processes, and data to automation, workflows, insights, reporting, better decisions, and measurable impact."
        >
          <div className="diagram-row input-row">
            {impactModules.map((module) => {
              const Icon = module.icon;
              return (
                <div className="diagram-pill" key={module.label}>
                  <Icon size={18} aria-hidden="true" />
                  <span>{module.label}</span>
                </div>
              );
            })}
          </div>
          <div className="diagram-connector" />
          <div className="diagram-core">
            <span>Operating Foundation</span>
            <strong>ImpactOS</strong>
          </div>
          <div className="diagram-connector" />
          <div className="diagram-row output-row">
            {operatingOutputs.map((output) => (
              <div className="diagram-pill subtle" key={output}>
                {output}
              </div>
            ))}
          </div>
          <div className="diagram-connector" />
          <div className="diagram-outcome">Better Decisions</div>
          <div className="diagram-connector short" />
          <div className="diagram-impact">Measurable Impact</div>
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section id="industries" className="section">
      <div className="container">
        <Intro kicker="Industries" title="Built for sectors where decisions carry weight." />
        <div className="industry-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article className="industry-card card" key={industry.name}>
                <div className="industry-card-top">
                  <div className="icon-wrap"><Icon size={24} aria-hidden="true" /></div>
                  <span>{industry.focus}</span>
                </div>
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section className="section surface-section">
      <div className="container">
        <Intro kicker="Our approach" title="A practical journey from complexity to measurable improvement." />
        <div className="approach-line">
          {approach.map((step, index) => (
            <div className="approach-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyRoyaviators() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Intro kicker="Trust" title="Built for executives who need clarity, accountability, and progress." />
        <div className="capability-grid">
          {trustCapabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <article className="capability-card" key={capability.title}>
                <Icon size={24} aria-hidden="true" />
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            );
          })}
        </div>
        <div className="proof-grid">
          {proofPoints.map((point) => (
            <div key={point} className="proof-card">
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <section id="initiatives" className="section surface-section">
      <div className="container">
        <Intro
          kicker="Selected initiatives"
          title="Ideas being developed on the same systems foundation."
          text="These initiatives show the direction of our work and are presented according to their current stage."
        />
        <div className="grid-3">
          {products.map((product) => (
            <article className="product-card card" key={product.name}>
              <span>{product.status}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section id="contact" className="final-cta">
      <div className="container final-cta-inner">
        <p className="eyebrow">Start the conversation</p>
        <h2>
          Turn Complexity
          <span>Into Measurable Impact.</span>
        </h2>
        <a className="btn btn-primary" href="mailto:hello@royaviators.com">Book a Strategy Session</a>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
