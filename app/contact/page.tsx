import type { Metadata } from "next";
import {
  PageHero,
  PageShell,
  SectionIntro,
  SiteFooter,
} from "@/components/PageScaffold";

export const metadata: Metadata = {
  title: "Contact | Royaviators",
  description:
    "Book a Royaviators strategy session to discuss organizational systems, transformation, and measurable impact.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Book a strategy session."
        text="A focused conversation about your organization, the complexity you are managing, and where better systems could improve decisions and measurable progress."
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <div>
            <SectionIntro
              eyebrow="Strategy session"
              title="Start with the organizational question."
              text="Share a little about your context. Royaviators is based in The Netherlands and works with organizations internationally."
            />
            <div className="contact-note">
              <strong>Location</strong>
              <p>The Netherlands</p>
            </div>
          </div>
          <form
            className="contact-form"
            action="mailto:hello@royaviators.com"
            method="post"
            encType="text/plain"
            aria-label="Strategy session request"
          >
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Organization
              <input name="organization" type="text" autoComplete="organization" />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              What would you like to discuss?
              <textarea name="message" rows={6} required />
            </label>
            <button className="btn btn-primary" type="submit">
              Book a Strategy Session
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </PageShell>
  );
}
