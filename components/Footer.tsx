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
          <div className="footer-contact" aria-label="Company contact information">
            <a href={contactHref}>{siteConfig.contact.email}</a>
            <span>{siteConfig.contact.location}</span>
            <span>{siteConfig.contact.responseTime}</span>
            <span>KvK {siteConfig.contact.kvk}</span>
            <span>VAT {siteConfig.contact.vat}</span>
          </div>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
