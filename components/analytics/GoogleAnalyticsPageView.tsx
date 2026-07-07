"use client";

import { useEffect, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();

  const pagePath = useMemo(() => {
    const queryString = searchParams.toString();

    return queryString ? `${pathname}?${queryString}` : pathname;
  }, [pathname, searchParams]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

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
  }, [measurementId, pagePath]);

  return null;
}
