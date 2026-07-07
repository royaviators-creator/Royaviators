import Link from "next/link";
import { navItems } from "@/lib/content";
import { contactHref, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link href="/" className="footer-brand" aria-label={`${siteConfig.name} home`}>
            {siteConfig.name}
          </Link>
          <p>{siteConfig.footerDescription}</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href={contactHref}>{siteConfig.cta.contact.label}</a>
        </nav>
      </div>
    </footer>
  );
}
