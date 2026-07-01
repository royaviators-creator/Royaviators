import type { Metadata } from "next";
import "./globals.css";
import "./enhancements.css";

export const metadata: Metadata = {
  title: "Royaviators — Impact Systems Consultancy",
  description:
    "Royaviators helps organizations improve operations, knowledge, decision-making, and measurable impact through strategy, connected systems, automation, and data.",
  metadataBase: new URL("https://royaviators.com"),
  openGraph: {
    title: "Royaviators — Impact Systems Consultancy",
    description:
      "Turn complexity into measurable impact through better systems, clearer decisions, and practical transformation.",
    type: "website",
    locale: "en_US",
    siteName: "Royaviators",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
