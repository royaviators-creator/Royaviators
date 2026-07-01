import type { Metadata } from "next";
import {
  PageCTA,
  PageHero,
  PageShell,
  SectionIntro,
  SiteFooter,
} from "@/components/PageScaffold";
import { aboutReasons, impactFramework, principles } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Royaviators helps organizations turn complexity into clearer systems, better decisions, and measurable impact.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Royaviators"
        title="Built for organizations that need clarity, trust, and measurable progress."
        text="Royaviators is an impact systems consultancy for operations, knowledge, decisions, and long-term progress."
      />

      <section className="section">
        <div className="container page-grid three">
          {aboutReasons.map((item) => {
            const Icon = item.icon;
            return (
              <article className="feature-card tall-card" key={item.title}>
                <Icon size={24} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section surface-section">
        <div className="container split-section">
          <SectionIntro
            eyebrow="Principles"
            title="The standard is calm, useful, and durable."
            text="The work is judged by whether organizations operate with more clarity and accountability."
          />
          <ul className="principles-list">
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Our way of working"
            title="The Royaviators Impact Framework."
            text="A practical sequence for understanding complexity and improving the system over time."
          />
          <div className="framework-grid">
            {impactFramework.map((step, index) => (
              <article className="framework-step" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
      <SiteFooter />
    </PageShell>
  );
}
