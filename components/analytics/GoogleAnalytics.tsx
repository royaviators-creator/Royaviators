import { Suspense } from "react";
import Script from "next/script";
import { GoogleAnalyticsPageView } from "./GoogleAnalyticsPageView";

export const GA_MEASUREMENT_ID = "G-Z83BZEJZYQ";

type GoogleAnalyticsProps = {
  measurementId?: string;
};

export function GoogleAnalytics({
  measurementId = GA_MEASUREMENT_ID,
}: GoogleAnalyticsProps) {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  const measurementIdScriptValue = JSON.stringify(measurementId);

  return (
    <>
      <Script
        id="google-analytics-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            // Future consent mode integration should set consent defaults before config.
            gtag('config', ${measurementIdScriptValue}, { send_page_view: false });
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsPageView measurementId={measurementId} />
      </Suspense>
    </>
  );
}
