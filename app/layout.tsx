import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import "./logo.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Royaviators | Intelligent Systems for Measurable Impact",
  description:
    "Royaviators is an impact consultancy helping organizations improve operations, sustainability, productivity, and decision-making through AI, automation, data, and innovation.",
  icons: {
    icon: "/LOGO.jpeg",
    apple: "/LOGO.jpeg",
  },
  openGraph: {
    title: "Royaviators | Intelligent Systems for Measurable Impact",
    description:
      "Strategy, AI, automation, and intelligent systems for measurable economic, social, and environmental impact.",
    images: ["/LOGO.jpeg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
