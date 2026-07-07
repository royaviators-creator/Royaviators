"use client";

import { siteConfig } from "@/lib/site";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main-content" className="section status-page">
      <div className="container status-card">
        <p className="eyebrow">{siteConfig.status.error.kicker}</p>
        <h1>{siteConfig.status.error.title}</h1>
        <p>{siteConfig.status.error.description}</p>
        <button className="btn btn-primary" type="button" onClick={reset}>
          {siteConfig.status.error.actionLabel}
        </button>
      </div>
    </main>
  );
}
