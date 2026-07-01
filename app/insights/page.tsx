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
  title: "Insights | Royaviators",
  description:
    "Royaviators insights will cover aviation, sustainable tourism, climate, automation, knowledge systems, and transformation.",
};

export default function InsightsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title="Perspectives on systems, transformation, and measurable impact."
        text="This section is structured for original Royaviators thinking. Articles will be added as they are written and reviewed."
      />

      <section className="section">
        <div className="container split-section">
          <SectionIntro
            eyebrow="Categories"
            title="A focused editorial architecture for future publishing."
            text="No fake publications, borrowed credibility, or artificial bylines. The structure is ready for real articles."
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
            text="These entries define the intended content direction without claiming publication history."
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
