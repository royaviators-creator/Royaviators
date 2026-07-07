import { siteConfig } from "@/lib/site";

export default function Loading() {
  return (
    <main id="main-content" className="section status-page" aria-busy="true">
      <div className="container status-card">
        <p className="eyebrow">{siteConfig.status.loading.kicker}</p>
        <h1>{siteConfig.status.loading.title}</h1>
      </div>
    </main>
  );
}
