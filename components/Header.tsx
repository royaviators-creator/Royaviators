import Image from "next/image";
import Link from "next/link";
import logo from "@/LOGO.jpeg";
import { navItems } from "@/lib/content";
import { strategySessionHref } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Royaviators home">
          <Image
            className="brand-mark"
            src={logo}
            alt="Royaviators logo"
            width={40}
            height={40}
            priority
          />
          <span>Royaviators</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary header-cta" href={strategySessionHref}>
          Book a Strategy Session
        </a>
      </div>
    </header>
  );
}
