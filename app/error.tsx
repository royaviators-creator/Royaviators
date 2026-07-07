"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main-content" className="section status-page">
      <div className="container status-card">
        <p className="eyebrow">Something went wrong</p>
        <h1>Royaviators could not load this page.</h1>
        <p>Please try again. If the problem continues, contact Royaviators directly.</p>
        <button className="btn btn-primary" type="button" onClick={reset}>
          Try again
        </button>
      </div>
    </main>
  );
}
