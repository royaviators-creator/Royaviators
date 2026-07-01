import type { Metadata } from "next";
import {
  PageCTA,
  PageHero,
  PageShell,
  SectionIntro,
  SiteFooter,
} from "@/components/PageScaffold";
import { insightCategories, placeholderArticles } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Royaviators insights will cover aviation, sustainable tourism, climate, automation, knowledge systems, and operations.",
};

export default function InsightsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title="Perspectives on systems, transformation, and measurable impact."
        text="A home for original Royaviators thinking as articles are written and reviewed."
      />

      <section className="section">
        <div className="container split-section">
          <SectionIntro
            eyebrow="Categories"
            title="A focused editorial architecture for future publishing."
            text="No fake publications, borrowed credibility, or artificial bylines."
          />
          <div className="category-cloud" aria-label="Insight categories">
            {insightCategories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="container">
          <SectionIntro
            eyebrow="Planned articles"
            title="Editorial placeholders for production content."
            text="Planned topics, presented without claiming publication history."
          />
          <div className="page-grid two">
            {placeholderArticles.map((article) => (
              <article className="insight-card" key={article.title}>
                <span>{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <strong>Planned article</strong>
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
