import { contactHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-contact-only" aria-label="Company contact information">
        <div>Royaviators</div>
        <div><a href={contactHref}>hello@royaviators.com</a></div>
        <div>Utrecht, The Netherlands</div>
        <div>KvK 97129550</div>
        <div>VAT NL005250674B79</div>
      </div>
    </footer>
  );
}
