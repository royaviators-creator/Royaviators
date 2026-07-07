"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/LOGO.jpeg";
import { navItems } from "@/lib/content";
import { siteConfig, strategySessionHref } from "@/lib/site";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${siteConfig.name} home`} onClick={closeMenu}>
          <Image
            className="brand-mark"
            src={logo}
            alt={`${siteConfig.name} logo`}
            width={40}
            height={40}
            priority
          />
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary header-cta" href={strategySessionHref}>
          {siteConfig.cta.strategySession.label}
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="container mobile-nav-inner">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="btn btn-primary mobile-nav-cta" href={strategySessionHref} onClick={closeMenu}>
            {siteConfig.cta.strategySession.label}
          </a>
        </div>
      </nav>
    </header>
  );
}
