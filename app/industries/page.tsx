import type { Metadata } from "next";
import Link from "next/link";
import {
  PageCTA,
  PageHero,
  PageShell,
  SectionIntro,
  SiteFooter,
} from "@/components/PageScaffold";
import { industryAdaptations } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries | Royaviators",
  description:
    "Royaviators works with aviation, sustainable tourism, climate and ocean, NGOs, universities, and public sector organizations.",
};

export default function IndustriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Industries"
        title="Systems consulting for sectors where decisions carry weight."
        text="Royaviators works with organizations whose work depends on coordination, evidence, accountability, and long-term trust."
        ctaLabel="Book a Strategy Session"
        ctaHref="/contact"
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Sector focus"
            title="Each industry has its own pressures. The operating challenge is often familiar."
          />
          <div className="page-grid three">
            {industryAdaptations.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link className="large-industry-card" href={`#${industry.slug}`} key={industry.name}>
                  <Icon size={26} aria-hidden="true" />
                  <h3>{industry.name}</h3>
                  <p>{industry.summary}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section surface-section industry-detail-section">
        <div className="container industry-detail-stack">
          {industryAdaptations.map((industry) => {
            const Icon = industry.icon;
            return (
              <article className="industry-detail" id={industry.slug} key={industry.name}>
                <div className="industry-detail-heading">
                  <Icon size={28} aria-hidden="true" />
                  <div>
                    <p className="eyebrow">{industry.name}</p>
                    <h2>{industry.summary}</h2>
                  </div>
                </div>
                <div className="detail-columns">
                  <div>
                    <h3>Challenges</h3>
                    <ul className="mini-list">
                      {industry.challenges.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Opportunities</h3>
                    <ul className="mini-list">
                      {industry.opportunities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="detail-columns">
                  <div>
                    <h3>How Royaviators helps</h3>
                    <p>{industry.helps}</p>
                  </div>
                  <div>
                    <h3>How ImpactOS adapts</h3>
                    <p>{industry.adapts}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <PageCTA />
      <SiteFooter />
    </PageShell>
  );
}
