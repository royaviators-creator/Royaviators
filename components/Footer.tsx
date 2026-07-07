import Link from "next/link";
import { navItems } from "@/lib/content";
import { contactEmail } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link href="/" className="footer-brand" aria-label="Royaviators home">
            Royaviators
          </Link>
          <p>Impact systems consultancy for organizations creating measurable change.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href={`mailto:${contactEmail}`}>Contact</a>
        </nav>
      </div>
    </footer>
  );
}
