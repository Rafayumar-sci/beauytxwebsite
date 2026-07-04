import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { serviceCategories } from "../data/services";
import { testimonials } from "../data/testimonials";
import {
  pageMeta,
  breadcrumbSchema,
  reviewSchema,
} from "../utils/seo";
import HeroParticles from "../components/HeroParticles";
import AnimatedPage from "../components/AnimatedPage";

export default function Home() {
  const featuredServices = serviceCategories.slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 4);

  const meta = pageMeta(
    "Home -- Best Beauty Salon in Lahore",
    "Beautyx by Farina is Lahore's premier beauty salon. Expert bridal and party makeup, hydra facial, keratin hair treatment, nail salon, laser hair removal, and waxing. Book your appointment online.",
    "beauty salon Lahore, makeup artist Lahore, best bridal makeup Lahore, hydra facial Lahore, keratin treatment Lahore"
  );

  const breadcrumb = breadcrumbSchema([{ name: "Home", path: "/" }]);
  const reviews = reviewSchema(testimonials);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:url" content="https://beautyxbyfarina.com/" />
        <meta name="twitter:title" content={meta.ogTitle} />
        <meta name="twitter:description" content={meta.ogDescription} />
        <link rel="canonical" href="https://beautyxbyfarina.com/" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(reviews)}
        </script>
      </Helmet>

      <AnimatedPage>
        {/* Hero Section */}
        <header className="hero-section" aria-label="Hero banner">
          <HeroParticles />
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <div className="hero-badge" aria-label="Premium beauty salon in Lahore">
                  <span className="hero-badge-dot" aria-hidden="true" />
                  Premium Beauty Salon in Lahore
                </div>
                <h1 className="hero-title">Where Beauty</h1>
                <h2 className="hero-title-2">Meets Artistry</h2>
                <p className="hero-description">
                  Experience luxury beauty treatments at{" "}
                  <strong>Beautyx by Farina</strong>. From bridal makeup to
                  advanced skincare, we bring out the best version of you.
                </p>
                <div className="hero-buttons">
                  <Link
                    to="/book-appointment"
                    className="btn btn-primary"
                    aria-label="Book an appointment online"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    to="/services"
                    className="btn btn-secondary"
                    aria-label="Explore our beauty services"
                  >
                    Explore Services
                  </Link>
                </div>
                <div className="hero-stats" aria-label="Salon statistics">
                  <div>
                    <span className="hero-stat-number">500+</span>
                    <span className="hero-stat-label">Happy Clients</span>
                  </div>
                  <div>
                    <span className="hero-stat-number">50+</span>
                    <span className="hero-stat-label">Services</span>
                  </div>
                  <div>
                    <span className="hero-stat-number">15+</span>
                    <span className="hero-stat-label">Years Experience</span>
                  </div>
                </div>
              </div>
              <div className="hero-image-wrapper" role="img" aria-label="Beautyx by Farina salon showcase">
                <div className="hero-image-frame">
                  <div className="hero-image-placeholder">
                    <div className="hero-image-placeholder-icon" aria-hidden="true">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </div>
                    <div className="hero-image-placeholder-text">
                      Beautyx by Farina
                    </div>
                  </div>
                </div>
                <div className="hero-floating-card hero-floating-card-1" aria-hidden="true">
                  <div className="hero-floating-card-icon pink">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9A5A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="hero-floating-card-label">Expert</div>
                    <div className="hero-floating-card-value">Makeup Artists</div>
                  </div>
                </div>
                <div className="hero-floating-card hero-floating-card-2" aria-hidden="true">
                  <div className="hero-floating-card-icon gold">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="hero-floating-card-label">Premium</div>
                    <div className="hero-floating-card-value">Skincare</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Services Preview Section */}
        <section
          className="features-section section-padding"
          aria-labelledby="services-heading"
        >
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Our Services</span>
              <h2 id="services-heading" className="section-title">
                Discover Excellence in Beauty
              </h2>
              <p className="section-subtitle">
                From everyday glam to transformative treatments, we offer
                everything you need at our Lahore beauty salon
              </p>
            </div>
            <div className="features-grid">
              {featuredServices.map((cat) => (
                <Link
                  to={`/services/${cat.id}`}
                  key={cat.id}
                  className="feature-card"
                  aria-label={`Learn more about ${cat.name} services`}
                >
                  <div className="feature-icon" aria-hidden="true">
                    <CategoryIcon icon={cat.icon} />
                  </div>
                  <h3 className="feature-title">{cat.name}</h3>
                  <p className="feature-text">
                    {cat.description.split(".")[0]}.
                  </p>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link to="/services" className="btn btn-primary" aria-label="View all beauty services">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section
          className="about-section section-padding"
          aria-labelledby="about-heading"
        >
          <div className="container">
            <div className="about-content">
              <div
                className="about-image-frame"
                role="img"
                aria-label="Beautyx by Farina - our salon"
              >
                <div className="about-image-icon" aria-hidden="true">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div className="about-image-text">Beautyx by Farina</div>
              </div>
              <article className="about-text">
                <span className="section-tag">About Us</span>
                <h2 id="about-heading">Where Passion Meets Perfection</h2>
                <p>
                  At <strong>Beautyx by Farina</strong>, we believe every client
                  deserves to feel beautiful and confident. Our team of skilled
                  professionals brings years of expertise and a passion for
                  beauty to every service we provide.
                </p>
                <p>
                  Using premium products and the latest techniques, we create
                  personalized beauty experiences that enhance your natural
                  features and leave you feeling radiant.
                </p>
                <div className="about-details" aria-label="Our guarantees">
                  <div className="about-detail-item">
                    <span className="about-detail-check" aria-hidden="true">&#10003;</span>
                    Professional and Certified Team
                  </div>
                  <div className="about-detail-item">
                    <span className="about-detail-check" aria-hidden="true">&#10003;</span>
                    Premium Quality Products
                  </div>
                  <div className="about-detail-item">
                    <span className="about-detail-check" aria-hidden="true">&#10003;</span>
                    Hygienic and Safe Environment
                  </div>
                  <div className="about-detail-item">
                    <span className="about-detail-check" aria-hidden="true">&#10003;</span>
                    Personalized Service
                  </div>
                </div>
                <div className="about-signature">-- Farina</div>
                <div style={{ marginTop: "24px" }}>
                  <Link to="/about" className="btn btn-primary" aria-label="Learn more about our salon">
                    Learn More About Us
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Testimonials Preview */}
        <section
          className="testimonials-section section-padding"
          aria-labelledby="testimonials-heading"
        >
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Testimonials</span>
              <h2 id="testimonials-heading" className="section-title">
                What Our Clients Say
              </h2>
              <p className="section-subtitle">
                Hear from our happy clients about their experience at Beautyx
              </p>
            </div>
            <div className="testimonials-grid">
              {featuredTestimonials.map((t) => (
                <article key={t.id} className="testimonial-card" aria-label={`Review by ${t.name}`}>
                  <div className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
                    {"\u2605".repeat(t.rating)}
                    {"\u2606".repeat(5 - t.rating)}
                  </div>
                  <blockquote className="testimonial-text">"{t.text}"</blockquote>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" aria-hidden="true">
                      {t.name[0]}
                    </div>
                    <div>
                      <cite className="testimonial-name">{t.name}</cite>
                      <div className="testimonial-service">{t.service}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <Link to="/testimonials" className="btn btn-secondary" aria-label="Read more client reviews">
                Read More Reviews
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="cta-section"
          aria-label="Call to action -- book an appointment"
        >
          <div className="container">
            <h2 className="cta-title">Ready to Transform Your Look?</h2>
            <p className="cta-subtitle">
              Book your appointment today and experience the Beautyx difference.
              Your journey to beautiful begins here.
            </p>
            <div className="cta-buttons">
              <Link to="/book-appointment" className="btn btn-accent" aria-label="Book an appointment now">
                Book Now
              </Link>
              <Link to="/contact" className="btn btn-light" aria-label="Contact us">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </AnimatedPage>
    </>
  );
}

function CategoryIcon({ icon }) {
  const icons = {
    makeup: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    skincare: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    hair: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/>
      </svg>
    ),
    nails: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    laser: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    waxing: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22c1.25-.98 2.1-2.26 2.29-3.65"/><path d="M6 17c.42-1.56.98-3.12 2.19-4.35a5.59 5.59 0 0 0 .68-6.56L5 2c.69 1.5 1.25 3.14 1.25 5.04 0 1.29.27 2.55.86 3.67"/><path d="M11.43 8.77c.7-1.11 1.08-2.44 1.08-3.89C12.51 3 11.76 1.5 10.5 0c1.33.75 2.18 2.09 2.18 3.69 0 1.14-.29 2.23-.81 3.2"/><path d="M16.25 8.2a5.9 5.9 0 0 1-1.83 2.56C13.4 11.69 13 13.25 13 15"/>
        <path d="M17.89 12.42c.7-1.12 1.06-2.46 1.06-3.91C18.95 6.69 18.2 5.2 16.94 3.7c1.33.75 2.18 2.09 2.18 3.69 0 1.1-.25 2.13-.7 3.03"/><path d="M21 15c0 2.76-4.03 5-9 5s-9-2.24-9-5c0-1.53.96-2.6 2.29-3.65"/>
      </svg>
    ),
  };

  return icons[icon] || null;
}
