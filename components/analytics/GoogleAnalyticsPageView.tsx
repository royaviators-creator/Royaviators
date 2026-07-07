"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type GtagCommand =
  | ["event", string, Record<string, unknown>]
  | ["config", string, Record<string, unknown>]
  | ["js", Date];

declare global {
  interface Window {
    dataLayer?: GtagCommand[];
    gtag?: (...command: GtagCommand) => void;
  }
}

type GoogleAnalyticsPageViewProps = {
  measurementId: string;
};

export function GoogleAnalyticsPageView({
  measurementId,
}: GoogleAnalyticsPageViewProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    const pagePath = `${pathname}${window.location.search}`;
    const pageView: GtagCommand = [
      "event",
      "page_view",
      {
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
        send_to: measurementId,
      },
    ];

    if (typeof window.gtag === "function") {
      window.gtag(...pageView);
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(pageView);
  }, [measurementId, pathname]);

  return null;
}
