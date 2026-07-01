import type { Metadata } from "next";
import {
  PageCTA,
  PageHero,
  PageShell,
  SectionIntro,
  SiteFooter,
} from "@/components/PageScaffold";
import { servicePillarsDetailed } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Royaviators services connect strategy, operations, and intelligent systems for measurable impact.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Consulting services organized around outcomes."
        text="Royaviators helps organizations clarify strategy, improve work, and build systems that support better decisions."
        ctaLabel="Book a Strategy Session"
        ctaHref="/contact"
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Three pillars"
            title="From executive clarity to operating capability."
            text="Each engagement is shaped around leadership outcomes and team capacity."
          />
          <div className="pillar-stack">
            {servicePillarsDetailed.map((pillar) => (
              <article className="pillar-row" key={pillar.title}>
                <div>
                  <p className="eyebrow">{pillar.title}</p>
                  <h2>{pillar.description}</h2>
                </div>
                <ul className="capability-list">
                  {pillar.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="container split-section">
          <SectionIntro
            eyebrow="How engagements work"
            title="Small enough to stay focused. Serious enough to change the system."
            text="Royaviators begins with the operating model, then builds the routines and reporting that make progress visible."
          />
          <div className="insight-panel">
            <p>
              The result is a working path that connects leadership priorities with day-to-day execution.
            </p>
          </div>
        </div>
      </section>

      <PageCTA />
      <SiteFooter />
    </PageShell>
  );
}
