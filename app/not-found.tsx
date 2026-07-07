import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <main id="main-content">
      <Header />
      <section className="section status-page">
        <div className="container status-card">
          <p className="eyebrow">Page not found</p>
          <h1>We could not find that page.</h1>
          <p>
            The page may have moved, or the address may be incorrect. Return to the Royaviators homepage to continue.
          </p>
          <Link className="btn btn-primary" href="/">
            Return home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
