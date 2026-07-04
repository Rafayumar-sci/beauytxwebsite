import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { serviceCategories, findGroupInCategory } from "../data/services";
import { pageMeta, breadcrumbSchema, serviceSchema } from "../utils/seo";
import {
  toSlug,
  categoryGradients,
  CategorySvgIcon,
} from "../utils/icons.jsx";
import HeroParticles from "../components/HeroParticles";
import AnimatedPage from "../components/AnimatedPage";

export default function ServiceGroup() {
  const { categoryId, groupSlug } = useParams();
  const category = serviceCategories.find((c) => c.id === categoryId);
  const group = category ? findGroupInCategory(category, groupSlug) : null;

  if (!category || !group) {
    return (
      <AnimatedPage>
        <div className="page-hero">
          <div className="container">
            <h1 className="page-hero-title">Service Group Not Found</h1>
            <p className="page-hero-subtitle">
              The service group you are looking for could not be found.
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

  const iconKey = category.icon;
  const gradient = categoryGradients[iconKey] || "linear-gradient(135deg, var(--primary-soft), var(--accent-light))";

  const meta = pageMeta(
    `${group.name} Services in Lahore -- Beautyx by Farina`,
    `${group.description} Book online for ${group.name.toLowerCase()} at our ${category.name.toLowerCase()} salon in Lahore.`,
    category.seoKeywords?.join(", ")
  );

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: category.name, path: `/services/${category.id}` },
    { name: group.name, path: `/services/${category.id}/g/${groupSlug}` },
  ]);

  const serviceStructured = serviceSchema({
    ...category,
    services: group.services,
  });

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
          content={`https://beautyxbyfarina.com/services/${category.id}/g/${groupSlug}`}
        />
        <meta name="twitter:title" content={meta.ogTitle} />
        <meta name="twitter:description" content={meta.ogDescription} />
        <link
          rel="canonical"
          href={`https://beautyxbyfarina.com/services/${category.id}/g/${groupSlug}`}
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceStructured)}
        </script>
      </Helmet>

      <AnimatedPage>
        {/* Page Hero */}
        <header
          className="page-hero"
          aria-label={`${group.name} services header`}
        >
          <HeroParticles />
          <div className="container">
            <Link
              to={`/services/${category.id}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.85rem",
                color: "var(--primary)",
                fontWeight: 500,
                marginBottom: "12px",
                textDecoration: "none",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              Back to {category.name}
            </Link>
            <h1 className="page-hero-title">{group.name} Services</h1>
            <p className="page-hero-subtitle">{group.description}</p>
          </div>
        </header>

        {/* Individual Service Cards */}
        <section className="about-page-section" aria-labelledby="group-services-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">{group.name}</span>
              <h2 id="group-services-heading" className="section-title">
                Our {group.name} Services
              </h2>
              <p className="section-subtitle">
                {group.services.length} professional {group.name.toLowerCase()} services
              </p>
            </div>

            <div className="service-cards-grid" role="list" aria-label={`${group.name} services`}>
              {group.services.map((service, i) => {
                const slug = toSlug(service.name);
                return (
                  <Link
                    key={i}
                    to={`/services/${category.id}/${slug}`}
                    style={{ textDecoration: "none", display: "block" }}
                    aria-label={`View ${service.name} service details`}
                  >
                    <article
                      className="category-card"
                      style={{
                        padding: "0",
                        overflow: "hidden",
                        background: "var(--white)",
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                      role="listitem"
                    >
                      {/* Image placeholder */}
                      <div
                        className="service-card-image"
                        style={{ background: gradient }}
                        aria-hidden="true"
                      >
                        <div className="service-card-icon" style={{ opacity: 0.6 }}>
                          <CategorySvgIcon icon={iconKey} size={48} />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="service-card-content">
                        <h3 className="service-card-name">{service.name}</h3>
                        {service.description && (
                          <p className="service-card-desc">{service.description}</p>
                        )}
                        <span className="service-card-cta">
                          Learn More
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                          </svg>
                        </span>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" aria-label="Book your appointment">
          <div className="container">
            <h2 className="cta-title">
              Book Your {group.name} Appointment
            </h2>
            <p className="cta-subtitle">
              Experience professional {group.name.toLowerCase()} services at
              Beautyx by Farina in Lahore. Schedule your visit today.
            </p>
            <Link
              to="/book-appointment"
              className="btn btn-accent"
              aria-label={`Book ${group.name} appointment`}
            >
              Book Now
            </Link>
          </div>
        </section>
      </AnimatedPage>
    </>
  );
}
