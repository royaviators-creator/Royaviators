import Link from "next/link";
import { navItems } from "@/lib/content";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Royaviators home">
          <span className="brand-mark">R</span>
          <span>Royaviators</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary header-cta" href="#contact">
          Book a Strategy Session
        </a>
      </div>
    </header>
  );
}
