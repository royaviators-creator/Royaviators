import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <main id="main-content">
      <Header />
      <section className="section status-page">
        <div className="container status-card">
          <p className="eyebrow">{siteConfig.status.notFound.kicker}</p>
          <h1>{siteConfig.status.notFound.title}</h1>
          <p>{siteConfig.status.notFound.description}</p>
          <Link className="btn btn-primary" href="/">
            {siteConfig.status.notFound.actionLabel}
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
