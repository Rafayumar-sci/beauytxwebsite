import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { serviceCategories } from "../data/services";
import { pageMeta, breadcrumbSchema, serviceSchema, faqSchema } from "../utils/seo";
import { toSlug, CategorySvgIcon } from "../utils/icons.jsx";
import { getCategoryServices } from "../data/services";
import HeroParticles from "../components/HeroParticles";
import AnimatedPage from "../components/AnimatedPage";

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
      answer: "Yes, Beautyx by Farina offers professional laser hair removal for face, arms, legs, underarms, and full body. Safe, effective, permanent hair reduction.",
    },
  ]);

  const categoryIcons = {
    makeup: "makeup",
    "skin-treatments": "skincare",
    "hair-treatments": "hair",
    "nail-salon": "nails",
    "laser-hair-removal": "laser",
    waxing: "waxing",
  };

  const placeholderColors = {
    makeup: "B76E79",
    skincare: "6B8E6B",
    hair: "9A5A65",
    nails: "C9A96E",
    laser: "7B8CB5",
    waxing: "C4876E",
  };

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
            {JSON.stringify(serviceSchema({ ...cat, services: getCategoryServices(cat) }))}
          </script>
        ))}
        <script type="application/ld+json">
          {JSON.stringify(serviceFAQs)}
        </script>
      </Helmet>

      <AnimatedPage>
        {/* Page Hero */}
        <header className="page-hero" aria-label="Services page header">
          <HeroParticles />
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

        {/* Category Sections with Groups */}
        {serviceCategories.map((category, index) => {
          const iconKey = categoryIcons[category.id] || "makeup";

          return (
            <section
              key={category.id}
              id={`category-${category.id}`}
              className={`services-category-section category-anchor ${index % 2 === 1 ? "about-section" : ""}`}
              aria-labelledby={`cat-heading-${category.id}`}
            >
              <div className="container">
                <header className="services-category-header">
                  <div className="services-category-icon" aria-hidden="true">
                    <CategorySvgIcon icon={iconKey} size={40} />
                  </div>
                  <h2 id={`cat-heading-${category.id}`} className="services-category-name">
                    {category.name} Services in Lahore
                  </h2>
                  <p className="services-category-desc">{category.description}</p>
                </header>

                {/* Group cards — clickable cards that link to group pages */}
                <div className="service-groups-grid">
                  {category.groups.map((group, gi) => {
                    const groupSlug = toSlug(group.name);
                    return (
                      <Link
                        key={gi}
                        to={`/services/${category.id}/g/${groupSlug}`}
                        style={{ textDecoration: "none", display: "block" }}
                        aria-label={`View ${group.name} services`}
                      >
                        <div className="service-group-card service-group-card-link">
                          <div className="service-group-image">
                            <img
                              src={`https://placehold.co/600x200/${placeholderColors[iconKey] || "B76E79"}/ffffff?text=${encodeURIComponent(group.name)}`}
                              alt={group.name}
                              loading="lazy"
                            />
                            <div className="service-group-image-overlay">
                              <CategorySvgIcon icon={iconKey} size={22} />
                              <h3 className="service-group-title">{group.name}</h3>
                            </div>
                          </div>
                          <div className="service-group-body">
                            <p className="service-group-desc">{group.description}</p>
                            <div className="service-group-cta">
                              <span>View {group.services.length} Services</span>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                              </svg>
                            </div>
                          </div>
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
          );
        })}

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
      </AnimatedPage>
    </>
  );
}
