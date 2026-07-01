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
  title: "ImpactOS",
  description:
    "ImpactOS connects knowledge, people, processes, data, workflows, insights, and reporting for measurable organizational impact.",
};

export default function ImpactOSPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="ImpactOS"
        title="The operating system for measurable organizational impact."
        text="ImpactOS connects knowledge, work, data, and reporting into one practical operating model, tailored to each organization."
        ctaLabel="Book a Strategy Session"
        ctaHref="/contact"
      />

      <section className="section">
        <div className="container split-section">
          <SectionIntro
            eyebrow="The organizational challenge"
            title="Fragmented systems slow down good organizations."
            text="Strong teams often work across documents, spreadsheets, inboxes, dashboards, and informal knowledge. Leaders spend too much time reconciling information."
          />
          <div className="insight-panel">
            <p>
              ImpactOS is designed around how organizations operate: knowledge, people, processes, data, decisions, and evidence.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container split-section">
          <SectionIntro
            eyebrow="The ImpactOS operating model"
            title="A connected foundation for work, decisions, and impact."
            text="Simple enough for leadership alignment. Structured enough for implementation."
          />
          <ImpactOperatingDiagram />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Core capabilities"
            title="Built around daily operating needs."
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
            title="One operating model, adapted by sector."
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
            title="A practical path to measurable progress."
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
            text="ImpactOS is configured around governance, privacy, access, ownership, and operating reality."
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
