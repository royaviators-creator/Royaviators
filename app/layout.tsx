import type { Metadata } from "next";
import "./globals.css";
import "./enhancements.css";
import "./os.css";

export const metadata: Metadata = {
  title: {
    default: "Royaviators | Impact Systems Consultancy",
    template: "%s | Royaviators",
  },
  description:
    "Royaviators helps organizations improve operations, knowledge, decisions, and measurable impact through connected systems.",
  metadataBase: new URL("https://royaviators.com"),
  openGraph: {
    title: "Royaviators | Impact Systems Consultancy",
    description:
      "Turn complexity into measurable impact through better systems, clearer decisions, and long-term partnership.",
    type: "website",
    locale: "en_US",
    siteName: "Royaviators",
  },
  twitter: {
    card: "summary_large_image",
    title: "Royaviators | Impact Systems Consultancy",
    description:
      "Better systems for operations, knowledge, decisions, and measurable impact.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Royaviators",
    url: "https://royaviators.com",
    description:
      "Impact systems consultancy for operations, knowledge, decisions, and measurable impact.",
    areaServed: "International",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NL",
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
