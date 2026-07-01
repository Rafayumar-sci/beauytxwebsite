import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { testimonials } from "../data/testimonials";
import { pageMeta, breadcrumbSchema, reviewSchema } from "../utils/seo";

export default function TestimonialsPage() {
  const [ratingFilter, setRatingFilter] = useState(0);

  const filtered =
    ratingFilter === 0
      ? testimonials
      : testimonials.filter((t) => t.rating === ratingFilter);

  const average =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  const meta = pageMeta(
    "Testimonials — Beautyx by Farina | Client Reviews Lahore",
    "Read real reviews from clients at Beautyx by Farina in Lahore. See why we're rated as one of the best beauty salons for bridal makeup, hydra facial, keratin treatment, and more.",
    "beauty salon reviews Lahore, Beautyx by Farina reviews, bridal makeup reviews Lahore, best salon Lahore testimonials"
  );

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Testimonials", path: "/testimonials" },
  ]);

  const reviewsStructured = reviewSchema(testimonials);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:url" content="https://beautyxbyfarina.com/testimonials" />
        <meta name="twitter:title" content={meta.ogTitle} />
        <meta name="twitter:description" content={meta.ogDescription} />
        <link rel="canonical" href="https://beautyxbyfarina.com/testimonials" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(reviewsStructured)}
        </script>
      </Helmet>

      <div className="page-transition">
        {/* Page Hero */}
        <header className="page-hero" aria-label="Testimonials page header">
          <div className="container">
            <h1 className="page-hero-title">Client Testimonials</h1>
            <p className="page-hero-subtitle">
              Discover why our clients trust <strong>Beautyx by Farina</strong>{" "}
              for their beauty needs. Real reviews from real people in Lahore.
            </p>
          </div>
        </header>

        {/* Stats Summary — AEO-friendly structured stats section */}
        <section
          style={{
            padding: "40px 0",
            background: "var(--white)",
            borderBottom: "1px solid rgba(183,110,121,0.08)",
          }}
          aria-label="Review statistics summary"
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "60px",
                flexWrap: "wrap",
                textAlign: "center",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "var(--secondary)",
                    display: "block",
                  }}
                >
                  {testimonials.length}
                </span>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  Total Reviews
                </span>
              </div>
              <div itemScope itemType="https://schema.org/AggregateRating">
                <meta itemProp="ratingValue" content={average.toFixed(1)} />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="ratingCount" content={testimonials.length} />
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "var(--gold)",
                    display: "block",
                  }}
                >
                  {average.toFixed(1)}
                </span>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  Average Rating
                </span>
                <div
                  style={{ color: "var(--gold)", fontSize: "1.2rem" }}
                  aria-label={`${average.toFixed(1)} out of 5 stars`}
                >
                  {"★".repeat(Math.round(average))}
                  {"☆".repeat(5 - Math.round(average))}
                </div>
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                    display: "block",
                  }}
                >
                  50+
                </span>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  Services Offered
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter */}
        <nav
          style={{ padding: "30px 0", background: "var(--bg-cream)" }}
          aria-label="Filter testimonials by rating"
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                }}
              >
                Filter by rating:
              </span>
              {[
                { value: 0, label: "All" },
                { value: 5, label: "5 ★" },
                { value: 4, label: "4 ★" },
              ].map((f) => (
                <button
                  key={f.value}
                  className={`gallery-cat-btn${
                    ratingFilter === f.value ? " active" : ""
                  }`}
                  onClick={() => setRatingFilter(f.value)}
                  aria-current={ratingFilter === f.value ? "true" : undefined}
                  aria-label={`Show ${f.label} reviews`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Testimonials List */}
        <section className="about-page-section" aria-label="Client reviews list">
          <div className="container">
            <div className="testimonials-page-grid" role="list" aria-label="Client testimonials">
              {filtered.map((t) => (
                <article
                  key={t.id}
                  className="testimonial-card"
                  role="listitem"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <meta itemProp="author" content={t.name} />
                  <meta itemProp="itemReviewed" content={t.service} />
                  <div
                    className="testimonial-stars"
                    aria-label={`${t.rating} out of 5 stars`}
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    <meta itemProp="ratingValue" content={t.rating} />
                    <meta itemProp="bestRating" content="5" />
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>
                  <blockquote className="testimonial-text" itemProp="reviewBody">
                    "{t.text}"
                  </blockquote>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" aria-hidden="true">
                      {t.name[0]}
                    </div>
                    <div>
                      <cite className="testimonial-name" itemProp="author">
                        {t.name}
                      </cite>
                      <div className="testimonial-service">
                        {t.service} — {t.location}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "40px 0", color: "var(--text-muted)" }} role="status">
                <p>No reviews match this filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" aria-label="Book an appointment">
          <div className="container">
            <h2 className="cta-title">Ready to Be Our Next Happy Client?</h2>
            <p className="cta-subtitle">
              Book your appointment and experience the Beautyx difference
            </p>
            <Link to="/book-appointment" className="btn btn-accent" aria-label="Book your beauty appointment now">
              Book Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
