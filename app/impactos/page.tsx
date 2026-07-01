import type { Metadata } from "next";
import Link from "next/link";
import {
  ImpactOperatingDiagram,
  PageCTA,
  PageHero,
  PageShell,
  SectionIntro,
  SiteFooter,
} from "@/components/PageScaffold";
import {
  coreCapabilities,
  implementationJourney,
  industryAdaptations,
  securityPrinciples,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "ImpactOS | Royaviators",
  description:
    "ImpactOS is the operating foundation Royaviators uses to connect knowledge, people, processes, data, automation, workflows, insights, and reporting.",
};

export default function ImpactOSPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="ImpactOS"
        title="The operating system for measurable organizational impact."
        text="ImpactOS helps organizations connect knowledge, work, data, and reporting into one practical operating model. Every implementation is tailored to the organization, its sector, and its governance needs."
        ctaLabel="Book a Strategy Session"
        ctaHref="/contact"
      />

      <section className="section">
        <div className="container split-section">
          <SectionIntro
            eyebrow="The organizational challenge"
            title="Fragmented systems slow down good organizations."
            text="Many teams have strong people and serious missions, but their work is spread across documents, spreadsheets, inboxes, dashboards, and informal knowledge. Leaders spend too much time reconciling information and too little time improving decisions."
          />
          <div className="insight-panel">
            <p>
              ImpactOS is designed around the way organizations operate: knowledge, people, processes, data, decisions, and evidence. It gives teams a clearer way to coordinate work and measure progress.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container split-section">
          <SectionIntro
            eyebrow="The ImpactOS operating model"
            title="A connected foundation for work, decisions, and impact."
            text="The model is simple enough for leadership alignment and structured enough for implementation."
          />
          <ImpactOperatingDiagram />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Core capabilities"
            title="Built around the operating needs organizations return to every day."
          />
          <div className="page-grid three">
            {coreCapabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article className="feature-card compact-card" key={capability.title}>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="container">
          <SectionIntro
            eyebrow="Industry adaptations"
            title="One operating model, adapted to different organizational realities."
          />
          <div className="page-grid three">
            {industryAdaptations.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link className="industry-link-card" href={`/industries#${industry.slug}`} key={industry.name}>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{industry.name}</h3>
                  <p>{industry.summary}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Implementation journey"
            title="A practical path from complexity to measurable progress."
          />
          <div className="journey-grid">
            {implementationJourney.map((step, index) => (
              <article className="journey-card" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="container">
          <SectionIntro
            eyebrow="Security and governance"
            title="Every implementation is tailored to the organization."
            text="ImpactOS is not installed as a generic product. It is configured around governance, privacy, access, ownership, and the operating reality of each client."
          />
          <div className="page-grid three">
            {securityPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <article className="feature-card" key={principle.title}>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <PageCTA />
      <SiteFooter />
    </PageShell>
  );
}
