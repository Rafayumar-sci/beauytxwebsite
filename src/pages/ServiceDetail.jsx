import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { serviceCategories, findServiceInCategory, getCategoryServices } from "../data/services";
import { pageMeta, breadcrumbSchema } from "../utils/seo";
import {
  toSlug,
  categoryGradients,
  CategorySvgIcon,
  generateServiceLongDescription,
} from "../utils/icons.jsx";
import HeroParticles from "../components/HeroParticles";
import AnimatedPage from "../components/AnimatedPage";

export default function ServiceDetail() {
  const { categoryId, serviceSlug } = useParams();

  const category = serviceCategories.find((c) => c.id === categoryId);
  const { service, group } = category ? findServiceInCategory(category, serviceSlug) : { service: null, group: null };

  if (!category || !service) {
    return (
      <AnimatedPage>
        <div className="page-hero">
          <div className="container">
            <h1 className="page-hero-title">Service Not Found</h1>
            <p className="page-hero-subtitle">
              The service you are looking for could not be found.
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
      </AnimatedPage>
    );
  }

  const gradient = categoryGradients[category.icon] || "linear-gradient(135deg, var(--primary-soft), var(--accent-light))";
  const longDescription = generateServiceLongDescription(service, category);

  // Get all services from the same category, excluding current
  const allCatServices = getCategoryServices(category);
  const relatedServices = allCatServices.filter((s) => s.name !== service.name).slice(0, 3);

  const meta = pageMeta(
    `${service.name} in Lahore -- Beautyx by Farina`,
    `${service.description} Book online for ${service.name.toLowerCase()} at our ${category.name.toLowerCase()} salon in Lahore.`,
    `${service.name.toLowerCase()} Lahore, ${service.name.toLowerCase()} in Lahore, ${service.name.toLowerCase()} services, ${category.seoKeywords?.slice(0, 3).join(", ") || ""}`
  );

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: category.name, path: `/services/${category.id}` },
    { name: service.name, path: `/services/${category.id}/${serviceSlug}` },
  ]);

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
          content={`https://beautyxbyfarina.com/services/${category.id}/${serviceSlug}`}
        />
        <meta name="twitter:title" content={meta.ogTitle} />
        <meta name="twitter:description" content={meta.ogDescription} />
        <link
          rel="canonical"
          href={`https://beautyxbyfarina.com/services/${category.id}/${serviceSlug}`}
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
      </Helmet>

      <AnimatedPage>
        {/* Hero Section with Image */}
        <header
          className="page-hero"
          aria-label={`${service.name} service header`}
          style={{ paddingBottom: "40px" }}
        >
          <HeroParticles />
          <div className="container">
            <div className="service-detail-hero">
              <div>
                <Link
                  to={`/services/${category.id}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.85rem",
                    color: "var(--primary)",
                    fontWeight: 500,
                    marginBottom: "16px",
                    textDecoration: "none",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                  </svg>
                  Back to {category.name} Services
                </Link>
                {group && (
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--primary)",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "8px",
                    }}
                  >
                    {group.name}
                  </div>
                )}
                <h1 className="page-hero-title" style={{ fontSize: "2.8rem" }}>
                  {service.name} in Lahore
                </h1>
                <p
                  className="page-hero-subtitle"
                  style={{ margin: "0", maxWidth: "500px", fontSize: "1rem" }}
                >
                  {service.description}
                </p>
                <div style={{ marginTop: "28px" }}>
                  <Link
                    to="/book-appointment"
                    className="btn btn-primary"
                    aria-label={`Book ${service.name} appointment`}
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
              <div
                style={{
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  background: gradient,
                  minHeight: "320px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "var(--shadow-md)",
                  padding: "40px",
                }}
                role="img"
                aria-label={`${service.name} service image`}
              >
                <div style={{ opacity: 0.7 }} aria-hidden="true">
                  <CategorySvgIcon icon={category.icon} size={64} />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.3rem",
                    color: "var(--text-muted)",
                    marginTop: "12px",
                    fontStyle: "italic",
                  }}
                >
                  {service.name}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Service Details */}
        <section
          className="about-page-section"
          aria-label={`${service.name} details`}
          style={{ paddingTop: "40px" }}
        >
          <div className="container">
            <div
              style={{
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <div className="section-header" style={{ marginBottom: "40px" }}>
                <span className="section-tag">{category.name}</span>
                <h2 className="section-title" style={{ fontSize: "2rem" }}>
                  About This Service
                </h2>
              </div>

              <div
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-md)",
                  padding: "40px",
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid rgba(183,110,121,0.08)",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.9",
                    color: "var(--text-body)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {longDescription}
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    marginTop: "36px",
                    paddingTop: "32px",
                    borderTop: "1px solid rgba(183,110,121,0.1)",
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1rem",
                        color: "var(--secondary)",
                        marginBottom: "8px",
                      }}
                    >
                      Service Category
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                      {category.name}{group ? ` — ${group.name}` : ""}
                    </p>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1rem",
                        color: "var(--secondary)",
                        marginBottom: "8px",
                      }}
                    >
                      Location
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                      122 A/4 P.G.E.C.H.S, Phase-1, Lahore, Pakistan
                    </p>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1rem",
                        color: "var(--secondary)",
                        marginBottom: "8px",
                      }}
                    >
                      Contact
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                      +92 347 4138970
                    </p>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1rem",
                        color: "var(--secondary)",
                        marginBottom: "8px",
                      }}
                    >
                      Timings
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                      Mon-Sun: 10:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div style={{ marginTop: "60px" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.6rem",
                      color: "var(--secondary)",
                      textAlign: "center",
                      marginBottom: "30px",
                    }}
                  >
                    More {category.name} Services
                  </h2>
                  <div
                    className="services-list"
                    role="list"
                    aria-label="Related services"
                  >
                    {relatedServices.map((s, i) => (
                      <Link
                        key={i}
                        to={`/services/${category.id}/${toSlug(s.name)}`}
                        className="service-item"
                        role="listitem"
                        style={{ textDecoration: "none", cursor: "pointer" }}
                        aria-label={`View ${s.name} service`}
                      >
                        <div className="service-item-dot" aria-hidden="true" />
                        <div>
                          <h3 className="service-item-name">{s.name}</h3>
                          <p className="service-item-desc">{s.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" aria-label="Book your appointment">
          <div className="container">
            <h2 className="cta-title">
              Book Your {service.name} Appointment
            </h2>
            <p className="cta-subtitle">
              Experience professional {service.name.toLowerCase()} at Beautyx
              by Farina in Lahore. Schedule your visit today.
            </p>
            <Link
              to="/book-appointment"
              className="btn btn-accent"
              aria-label={`Book ${service.name} appointment`}
            >
              Book Now
            </Link>
          </div>
        </section>
      </AnimatedPage>
    </>
  );
}
