import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { pageMeta, breadcrumbSchema } from "../utils/seo";
import HeroParticles from "../components/HeroParticles";
import AnimatedPage from "../components/AnimatedPage";

export default function About() {
  const meta = pageMeta(
    "About -- Beautyx by Farina | Best Beauty Salon in Lahore",
    "Discover the story behind Beautyx by Farina, Lahore's premier beauty salon. Meet founder Farina and our expert team specializing in makeup, skincare, hair, nails, laser, and waxing.",
    "about Beautyx by Farina, beauty salon Lahore, Farina makeup artist Lahore, best beauty salon story Lahore"
  );

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:url" content="https://beautyxbyfarina.com/about" />
        <meta name="twitter:title" content={meta.ogTitle} />
        <meta name="twitter:description" content={meta.ogDescription} />
        <link rel="canonical" href="https://beautyxbyfarina.com/about" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
      </Helmet>

      <AnimatedPage>
        {/* Page Hero */}
        <header className="page-hero" aria-label="About page header">
          <HeroParticles />
          <div className="container">
            <h1 className="page-hero-title">About Beautyx by Farina</h1>
            <p className="page-hero-subtitle">
              Discover the story behind Lahore's most beloved beauty destination
            </p>
          </div>
        </header>

        {/* About Content */}
        <section className="about-page-section" aria-labelledby="our-story-heading">
          <div className="container">
            <article className="about-page-content">
              <div
                className="about-page-image"
                role="img"
                aria-label="Beautyx by Farina beauty salon"
              >
                <div className="about-page-image-icon" aria-hidden="true">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div className="about-page-image-text">
                  Where Beauty Meets Artistry
                </div>
              </div>
              <div className="about-page-text">
                <span className="section-tag">Our Story</span>
                <h2 id="our-story-heading">Passionately Crafting Beauty Since Day One</h2>
                <p>
                  <strong>Beautyx by Farina</strong> was born from a dream -- to
                  create a sanctuary where every woman can experience the
                  transformative power of professional beauty services. Founded
                  by <strong>Farina</strong>, a visionary makeup artist with years
                  of experience in the beauty industry, our salon has grown into
                  one of Lahore's most trusted beauty destinations.
                </p>
                <p>
                  We believe that beauty is not just about looking good -- it's
                  about feeling confident, empowered, and radiant from within.
                  Every service we offer, from our signature makeup looks to our
                  advanced skin treatments, is designed with this philosophy in
                  mind.
                </p>
                <p>
                  Our team comprises highly trained and certified professionals
                  who stay up-to-date with the latest trends, techniques, and
                  technologies in the beauty world. We use only premium products
                  to ensure the best results for our clients.
                </p>
                <div className="about-signature">-- Farina, Founder</div>
              </div>
            </article>

            {/* Values */}
            <div className="section-header">
              <span className="section-tag">Our Values</span>
              <h2 className="section-title">What Sets Us Apart</h2>
            </div>
            <div className="about-values" aria-label="Our core values">
              <article className="about-value-card">
                <div className="about-value-icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="about-value-title">Excellence</h3>
                <p className="about-value-text">
                  We strive for perfection in every service, ensuring each client
                  leaves our salon feeling beautiful and satisfied.
                </p>
              </article>
              <article className="about-value-card">
                <div className="about-value-icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className="about-value-title">Personalized Care</h3>
                <p className="about-value-text">
                  Every client is unique. We tailor our services to your specific
                  needs, preferences, and skin or hair type.
                </p>
              </article>
              <article className="about-value-card">
                <div className="about-value-icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="1"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/>
                  </svg>
                </div>
                <h3 className="about-value-title">Innovation</h3>
                <p className="about-value-text">
                  We continuously update our techniques and products to bring you
                  the latest innovations in beauty and skincare.
                </p>
              </article>
              <article className="about-value-card">
                <div className="about-value-icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <h3 className="about-value-title">Premium Products</h3>
                <p className="about-value-text">
                  We use only high-quality, safe, and effective products from
                  trusted brands for all our services.
                </p>
              </article>
              <article className="about-value-card">
                <div className="about-value-icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3 className="about-value-title">Professionalism</h3>
                <p className="about-value-text">
                  Our team consists of certified professionals dedicated to
                  providing the highest standard of service.
                </p>
              </article>
              <article className="about-value-card">
                <div className="about-value-icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                  </svg>
                </div>
                <h3 className="about-value-title">Hygiene and Safety</h3>
                <p className="about-value-text">
                  We maintain the highest standards of cleanliness and hygiene to
                  ensure a safe and comfortable experience.
                </p>
              </article>
            </div>

            {/* Team */}
            <section className="about-team" aria-labelledby="team-heading">
              <div className="section-header">
                <span className="section-tag">Our Team</span>
                <h2 id="team-heading" className="section-title">
                  Meet the Experts
                </h2>
                <p className="section-subtitle">
                  Talented professionals dedicated to making you look and feel
                  beautiful
                </p>
              </div>
              <div className="about-team-grid" aria-label="Our team members">
                <article className="about-team-member">
                  <div className="about-team-avatar" aria-hidden="true">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <h3 className="about-team-name">Farina</h3>
                  <p className="about-team-role">Founder and Lead Makeup Artist</p>
                </article>
                <article className="about-team-member">
                  <div className="about-team-avatar" aria-hidden="true">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <h3 className="about-team-name">Ayesha</h3>
                  <p className="about-team-role">Senior Skincare Specialist</p>
                </article>
                <article className="about-team-member">
                  <div className="about-team-avatar" aria-hidden="true">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <h3 className="about-team-name">Zara</h3>
                  <p className="about-team-role">Hair Stylist and Colorist</p>
                </article>
              </div>
            </section>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" aria-label="Book an appointment">
          <div className="container">
            <h2 className="cta-title">Experience the Beautyx Difference</h2>
            <p className="cta-subtitle">
              Book your appointment and let us help you shine
            </p>
            <Link to="/book-appointment" className="btn btn-accent" aria-label="Book your appointment now">
              Book Now
            </Link>
          </div>
        </section>
      </AnimatedPage>
    </>
  );
}
