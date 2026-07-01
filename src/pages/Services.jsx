import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { serviceCategories } from "../data/services";
import { pageMeta, breadcrumbSchema, serviceSchema, faqSchema } from "../utils/seo";
import { toSlug } from "../utils/icons.jsx";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  const scrollToCategory = (id) => {
    setActiveCategory(id);
    const el = document.getElementById(`category-${id}`);
    if (el) {
      const offset = 160;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const meta = pageMeta(
    "Beauty Services -- Makeup, Skin, Hair, Nails, Laser and Waxing in Lahore",
    "Explore all 50+ beauty services at Beautyx by Farina in Lahore. Professional makeup artistry, hydra facial and skin treatments, keratin and hair treatments, nail salon, laser hair removal, and waxing. Book online.",
    "beauty services Lahore, makeup artist Lahore, facial treatment Lahore, hair salon Lahore, nail salon Lahore, laser hair removal Lahore, waxing Lahore"
  );

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  // FAQ data specific to services page
  const serviceFAQs = faqSchema([
    {
      question: "What makeup services do you offer in Lahore?",
      answer: "Beautyx by Farina offers professional bridal makeup, party makeup, and signature makeup services in Lahore. Our makeup artists use premium products for flawless, long-lasting results.",
    },
    {
      question: "What skin treatments are available at your salon?",
      answer: "We offer hydra facial, acne treatment with high frequency, whitening facial, gold facial, anti-aging RF treatment, VLCC skin treatment, and more at our Lahore salon.",
    },
    {
      question: "What hair services does Beautyx by Farina provide?",
      answer: "Our hair services include cutting (full, half, bob), keratin treatment, protein treatment, hair fall treatment, Brazilian keratin, rebounding, hair coloring, streaks, and more.",
    },
    {
      question: "Do you offer nail services in Lahore?",
      answer: "Yes! Our nail salon offers french manicure and pedicure, whitening manicure and pedicure, paraffin treatments, nail extensions, and complete nail art services.",
    },
    {
      question: "Is laser hair removal available in Lahore?",
      answer: "Yes, Beautyx by Farina offers professional laser hair removal for face, arms, legs, underarms, bikini line, and full body. Safe, effective, permanent hair reduction.",
    },
  ]);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:url" content="https://beautyxbyfarina.com/services" />
        <meta name="twitter:title" content={meta.ogTitle} />
        <meta name="twitter:description" content={meta.ogDescription} />
        <link rel="canonical" href="https://beautyxbyfarina.com/services" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
        {serviceCategories.map((cat) => (
          <script key={cat.id} type="application/ld+json">
            {JSON.stringify(serviceSchema(cat))}
          </script>
        ))}
        <script type="application/ld+json">
          {JSON.stringify(serviceFAQs)}
        </script>
      </Helmet>

      <div className="page-transition">
        {/* Page Hero */}
        <header className="page-hero" aria-label="Services page header">
          <div className="container">
            <h1 className="page-hero-title">Our Beauty Services</h1>
            <p className="page-hero-subtitle">
              Discover our comprehensive range of premium beauty services in
              Lahore -- from expert makeup artistry to advanced skincare and hair
              treatments
            </p>
          </div>
        </header>

        {/* Sticky Category Nav */}
        <nav className="services-nav" aria-label="Service categories">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              className={activeCategory === cat.id ? "active" : ""}
              onClick={() => scrollToCategory(cat.id)}
              aria-current={activeCategory === cat.id ? "true" : undefined}
            >
              {cat.name}
            </button>
          ))}
        </nav>

        {/* Service Categories */}
        {serviceCategories.map((category, index) => (
          <section
            key={category.id}
            id={`category-${category.id}`}
            className={`services-category-section category-anchor ${
              index % 2 === 1 ? "about-section" : ""
            }`}
            aria-labelledby={`cat-heading-${category.id}`}
          >
            <div className="container">
              <header className="services-category-header">
                <h2 id={`cat-heading-${category.id}`} className="services-category-name">
                  {category.name} Services in Lahore
                </h2>
                <p className="services-category-desc">{category.description}</p>
              </header>

              <div className="services-list" role="list" aria-label={`${category.name} services list`}>
                {category.services.map((service, i) => {
                  const slug = toSlug(service.name);
                  return (
                    <Link
                      key={i}
                      to={`/services/${category.id}/${slug}`}
                      className="service-item"
                      role="listitem"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                      aria-label={`View ${service.name} service details`}
                    >
                      <div className="service-item-dot" aria-hidden="true" />
                      <div>
                        <h3 className="service-item-name">{service.name}</h3>
                        {service.description && (
                          <p className="service-item-desc">{service.description}</p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <Link
                  to={`/services/${category.id}`}
                  className="btn btn-primary"
                  aria-label={`View all ${category.name} services in detail`}
                >
                  View All {category.name} Services
                </Link>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="cta-section" aria-label="Book your service appointment">
          <div className="container">
            <h2 className="cta-title">Book Your Appointment Today</h2>
            <p className="cta-subtitle">
              Ready to experience the best beauty services in Lahore? Schedule
              your visit now and let our experts take care of you.
            </p>
            <Link to="/book-appointment" className="btn btn-accent" aria-label="Book an appointment for beauty services">
              Book Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
