import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <Link className="brand" href="/" aria-label="Dheeraj Builds home">
        <Image src="/favicon.svg" alt="" width="24" height="24" priority />
        <span>Dheeraj Builds</span>
      </Link>

      <section className="not-found-content" aria-labelledby="not-found-title">
        <div className="error-code" aria-label="Error 404">
          <span className="error-four" aria-hidden="true">4</span>
          <Image
            className="error-illustration"
            src="/404-fishing-o.png"
            alt="An illustrated person dipping a fishing net into a school of fish inside the number zero"
            width="1254"
            height="1254"
            priority
          />
          <span className="error-four" aria-hidden="true">4</span>
        </div>

        <div className="not-found-copy">
          <h1 id="not-found-title">Page not found</h1>
          <p>Looks like this page slipped through the net.</p>
          <Link className="home-link" href="/">Back to home</Link>
        </div>
      </section>
    </main>
  );
}
