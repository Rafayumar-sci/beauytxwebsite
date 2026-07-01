import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { serviceCategories } from "../data/services";
import {
  pageMeta,
  breadcrumbSchema,
  serviceSchema,
} from "../utils/seo";
import {
  toSlug,
  categoryGradients,
  CategorySvgIcon,
} from "../utils/icons.jsx";

export default function ServiceCategory() {
  const { categoryId } = useParams();
  const category = serviceCategories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="page-transition">
        <div className="page-hero">
          <div className="container">
            <h1 className="page-hero-title">Service Not Found</h1>
            <p className="page-hero-subtitle">
              The service category you are looking for could not be found.
            </p>
            <Link
              to="/services"
              className="btn btn-primary"
              style={{ marginTop: "24px", display: "inline-flex" }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const meta = pageMeta(
    `${category.name} Services in Lahore -- Beautyx by Farina`,
    `${category.description} Book online for ${category.name.toLowerCase()} at our Lahore salon.`,
    category.seoKeywords?.join(", ")
  );

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: category.name, path: `/services/${category.id}` },
  ]);

  const serviceStructured = serviceSchema(category);
  const gradient = categoryGradients[category.icon] || "linear-gradient(135deg, var(--primary-soft), var(--accent-light))";

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta
          property="og:url"
          content={`https://beautyxbyfarina.com/services/${category.id}`}
        />
        <meta name="twitter:title" content={meta.ogTitle} />
        <meta name="twitter:description" content={meta.ogDescription} />
        <link
          rel="canonical"
          href={`https://beautyxbyfarina.com/services/${category.id}`}
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceStructured)}
        </script>
      </Helmet>

      <div className="page-transition">
        {/* Page Hero */}
        <header
          className="page-hero"
          aria-label={`${category.name} services header`}
        >
          <div className="container">
            <h1 className="page-hero-title">
              {category.name} Services in Lahore
            </h1>
            <p className="page-hero-subtitle">{category.description}</p>
          </div>
        </header>

        {/* Service Cards */}
        <section
          className="about-page-section"
          aria-labelledby="services-heading"
        >
          <div className="container">
            <div className="section-header">
              <span className="section-tag">{category.name}</span>
              <h2
                id="services-heading"
                className="section-title"
              >
                Our {category.name} Services
              </h2>
              <p className="section-subtitle">
                {category.services.length} professional{" "}
                {category.name.toLowerCase()} services tailored to your needs
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "24px",
              }}
              role="list"
              aria-label={`${category.name} services`}
            >
              {category.services.map((service, i) => {
                const slug = toSlug(service.name);
                return (
                  <Link
                    key={i}
                    to={`/services/${category.id}/${slug}`}
                    style={{ textDecoration: "none", display: "block" }}
                    aria-label={`View ${service.name} service details`}
                  >
                    <article
                      className="feature-card"
                      style={{
                        padding: "0",
                        overflow: "hidden",
                        background: "var(--white)",
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                      role="listitem"
                    >
                      {/* Image */}
                      <div
                        style={{
                          height: "200px",
                          background: gradient,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                        }}
                        aria-hidden="true"
                      >
                        <div
                          style={{
                            opacity: 0.6,
                          }}
                          className="feature-icon"
                        >
                          <CategorySvgIcon icon={category.icon} size={48} />
                        </div>
                      </div>
                      {/* Content */}
                      <div style={{ padding: "24px 28px 28px" }}>
                        <h3
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.15rem",
                            fontWeight: 600,
                            color: "var(--secondary)",
                            marginBottom: "8px",
                          }}
                        >
                          {service.name}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.85rem",
                            color: "var(--text-muted)",
                            lineHeight: "1.7",
                            margin: 0,
                          }}
                        >
                          {service.description}
                        </p>
                        <div
                          style={{
                            marginTop: "16px",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            color: "var(--primary)",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                          }}
                        >
                          Learn More
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>

            {/* Sub-category details */}
            {category.subCategories?.length > 0 && (
              <div
                style={{
                  marginTop: "60px",
                  display: "grid",
                  gap: "24px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.8rem",
                    color: "var(--secondary)",
                    textAlign: "center",
                    marginBottom: "16px",
                  }}
                >
                  Specialized {category.name} Treatments
                </h2>
                {category.subCategories.map((sub, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--white)",
                      padding: "32px",
                      borderRadius: "var(--radius-md)",
                      boxShadow: "var(--shadow-sm)",
                      border: "1px solid rgba(183,110,121,0.08)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.3rem",
                        color: "var(--secondary)",
                        marginBottom: "8px",
                      }}
                    >
                      {sub.name}
                    </h3>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.9rem",
                        lineHeight: "1.7",
                      }}
                    >
                      Our {sub.name.toLowerCase()} services at Beautyx by
                      Farina in Lahore are designed to deliver exceptional
                      results. We use premium products and advanced techniques
                      to ensure the highest quality care for your beauty needs.
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section
          className="cta-section"
          aria-label="Book your appointment"
        >
          <div className="container">
            <h2 className="cta-title">
              Book Your {category.name} Appointment
            </h2>
            <p className="cta-subtitle">
              Experience professional {category.name.toLowerCase()} services at
              Beautyx by Farina in Lahore. Schedule your visit today.
            </p>
            <Link
              to="/book-appointment"
              className="btn btn-accent"
              aria-label={`Book ${category.name.toLowerCase()} appointment`}
            >
              Book Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
