import Script from "next/script";
import { GoogleAnalyticsPageView } from "./GoogleAnalyticsPageView";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  if (process.env.NODE_ENV !== "production" || !gaMeasurementId) {
    return null;
  }

  const measurementIdScriptValue = JSON.stringify(gaMeasurementId);

  return (
    <>
      <Script
        id="google-analytics-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
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
      <GoogleAnalyticsPageView measurementId={gaMeasurementId} />
    </>
  );
}
