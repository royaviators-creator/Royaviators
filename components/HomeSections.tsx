import { challenges, servicePillars, impactModules, industries, approach, products, proofPoints, comparison } from "@/lib/content";
import { siteConfig, strategySessionHref } from "@/lib/site";

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
        <h2>We combine strategy, industry expertise, data, technology, and implementation to solve complex organizational challenges.</h2>
      </div>
    </section>
  );
}

export function Challenges() {
  return (
    <section id="solutions" className="section">
      <div className="container">
        <Intro kicker="Challenges we solve" title="Most organizations do not need more tools. They need clearer systems." text="Royaviators helps teams move from scattered work to connected knowledge, better workflows, and measurable outcomes." />
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
        <Intro kicker="Services" title="From strategic clarity to intelligent operating systems." text="Our work connects high-level strategy with practical implementation, so transformation becomes operational rather than theoretical." />
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
        <div>
          <p className="eyebrow">ImpactOS</p>
          <h2>One intelligent foundation. Tailored to every organization.</h2>
          <p>
            ImpactOS is the reusable workspace behind Royaviators transformation projects. It connects knowledge, relationships, documents, dashboards, automation, analytics, reporting, collaboration, and selected AI capabilities in one tailored operating system.
          </p>
          <a className="btn btn-secondary" href="#contact">{siteConfig.cta.implementation.label}</a>
        </div>
        <div className="module-grid">
          {impactModules.map((module) => {
            const Icon = module.icon;
            return (
              <div className="module-card" key={module.label}>
                <Icon size={22} />
                <span>{module.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section id="industries" className="section">
      <div className="container">
        <Intro kicker="Industry solutions" title="ImpactOS adapts to the language, workflows, and decisions of each sector." />
        <div className="industry-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article className="industry-card card" key={industry.name}>
                <div className="icon-wrap"><Icon size={24} /></div>
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
        <Intro kicker="Our approach" title="A practical transformation journey from complexity to measurable improvement." />
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
        <Intro kicker="Why Royaviators" title="Not a traditional consultancy. Not a software vendor. A long-term transformation partner." />
        <div className="comparison-table">
          <div className="comparison-head"><strong>Traditional consultancy</strong><strong>Software vendor</strong><strong>Royaviators</strong></div>
          {comparison.map((row) => (
            <div className="comparison-row" key={row.join("-")}>
              {row.map((cell) => <span key={cell}>{cell}</span>)}
            </div>
          ))}
        </div>
        <div className="proof-grid">
          {proofPoints.map((point) => <div key={point} className="proof-card">{point}</div>)}
        </div>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <section id="initiatives" className="section surface-section">
      <div className="container">
        <Intro kicker="Selected initiatives" title="Ideas being developed on the same systems foundation." text="These initiatives show the direction of our work. They are presented transparently according to their current stage." />
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
    <section id="contact" className="section final-cta">
      <div className="container final-cta-card">
        <p className="eyebrow">Start the conversation</p>
        <h2>The organizations creating the greatest impact will redesign how they work.</h2>
        <p>Let’s explore how strategy, connected knowledge, automation, data, and carefully selected intelligent technologies can create measurable value for your organization.</p>
        <a className="btn btn-primary" href={strategySessionHref}>{siteConfig.cta.strategySession.label}</a>
      </div>
    </section>
  );
}
