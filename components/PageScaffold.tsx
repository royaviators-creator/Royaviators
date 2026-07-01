import Link from "next/link";
import { Header } from "@/components/Header";
import { navItems } from "@/lib/content";
import { operatingInputs, operatingOutputs } from "@/lib/site";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string;
  title: string;
  text: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        {ctaLabel && ctaHref ? (
          <Link className="btn btn-primary" href={ctaHref}>
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export function ImpactOperatingDiagram() {
  return (
    <div
      className="operating-model"
      role="img"
      aria-label="Knowledge, people, processes, and data flow into ImpactOS, then automation, workflows, insights, and reporting, leading to better decisions and measurable impact."
    >
      <div className="model-tier model-grid">
        {operatingInputs.map((item) => {
          const Icon = item.icon;
          return (
            <div className="model-node" key={item.title}>
              <Icon size={18} aria-hidden="true" />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <span className="model-line" aria-hidden="true" />
      <div className="model-core">
        <span>Operating Foundation</span>
        <strong>ImpactOS</strong>
      </div>
      <span className="model-line" aria-hidden="true" />
      <div className="model-tier model-grid">
        {operatingOutputs.map((output) => (
          <div className="model-node" key={output}>
            <span>{output}</span>
          </div>
        ))}
      </div>
      <span className="model-line" aria-hidden="true" />
      <div className="model-outcome">Better Decisions</div>
      <span className="model-line short" aria-hidden="true" />
      <div className="model-impact">Measurable Impact</div>
    </div>
  );
}

export function PageCTA({
  eyebrow = "Start the conversation",
  title = "Turn Complexity Into Measurable Impact.",
  text = "Explore where clearer systems can improve decisions, accountability, and progress.",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section className="page-cta">
      <div className="container page-cta-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="btn btn-primary" href="/contact">
          Book a Strategy Session
        </Link>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="page-footer">
      <div className="container page-footer-inner">
        <div>
          <Link href="/" className="footer-brand">
            Royaviators
          </Link>
          <p>Operations, systems, knowledge, impact.</p>
        </div>
        <div className="footer-navigation">
          <Link className="btn btn-primary" href="/contact">
            Book a Strategy Session
          </Link>
          <nav className="footer-nav compact" aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
