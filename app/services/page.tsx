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
  title: "Services | Royaviators",
  description:
    "Royaviators services are organized around strategy, transformation, and intelligent systems for measurable organizational impact.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Consulting services organized around outcomes."
        text="Royaviators helps organizations clarify strategy, transform how work happens, and build systems that support better decisions. The work starts with organizational reality, not with technology."
        ctaLabel="Book a Strategy Session"
        ctaHref="/contact"
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Three pillars"
            title="From executive clarity to operating capability."
            text="Each engagement is shaped around the outcomes leadership needs and the capacity teams need to sustain change."
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
            text="Royaviators typically begins with a strategic assessment, identifies the operating model that should exist, and then builds the systems, routines, and reporting structure needed to make progress visible."
          />
          <div className="insight-panel">
            <p>
              The result is not a stack of disconnected recommendations. It is a working transformation path that connects leadership priorities with day-to-day execution.
            </p>
          </div>
        </div>
      </section>

      <PageCTA />
      <SiteFooter />
    </PageShell>
  );
}
