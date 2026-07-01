import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Royaviators — AI Impact Consultancy",
  description:
    "Royaviators helps organizations create measurable economic, social, and environmental impact through AI, automation, data, and innovation.",
  metadataBase: new URL("https://royaviators.com"),
  openGraph: {
    title: "Royaviators — AI Impact Consultancy",
    description:
      "Building intelligent organizations for a more sustainable future.",
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
