import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { pageMeta, breadcrumbSchema } from "../utils/seo";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, POST to backend /api/contact
    console.log("Contact:", formData);
    setSubmitted(true);
  };

  const meta = pageMeta(
    "Contact Us -- Beautyx by Farina | Beauty Salon Lahore",
    "Contact Beautyx by Farina in Lahore. Call +92 347 4138970, email info@beautyxbyfarina.com, or visit us at Main Boulevard. Book bridal makeup, facials, hair treatments, nails, laser, and waxing.",
    "contact beauty salon Lahore, Beautyx by Farina Lahore address, beauty salon phone number Lahore, book beauty appointment Lahore"
  );

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:url" content="https://beautyxbyfarina.com/contact" />
        <meta name="twitter:title" content={meta.ogTitle} />
        <meta name="twitter:description" content={meta.ogDescription} />
        <link rel="canonical" href="https://beautyxbyfarina.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
      </Helmet>

      <div className="page-transition">
        {/* Page Hero */}
        <header className="page-hero" aria-label="Contact page header">
          <div className="container">
            <h1 className="page-hero-title">Contact Us</h1>
            <p className="page-hero-subtitle">
              We would love to hear from you! Reach out for bookings, inquiries, or
              just to say hello.
            </p>
          </div>
        </header>

        {/* Contact Section */}
        <section className="contact-section" aria-label="Contact information and form">
          <div className="container">
            <div className="contact-content">
              <div className="contact-info-grid" aria-label="Our contact details">
                <address className="contact-card" style={{ fontStyle: "normal" }}>
                  <div className="contact-card-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <h3>Visit Us</h3>
                  <p>
                    Main Boulevard, Lahore<br />
                    Punjab, Pakistan
                  </p>
                </address>

                <div className="contact-card">
                  <div className="contact-card-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <h3>Call Us</h3>
                  <p>
                    <a href="tel:+923474138970" aria-label="Call +92 347 4138970">
                      +92 347 4138970
                    </a>
                  </p>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <h3>Email Us</h3>
                  <p>
                    <a href="mailto:info@beautyxbyfarina.com" aria-label="Email info at beautyxbyfarina.com">
                      info@beautyxbyfarina.com
                    </a>
                    <br />
                    <a href="mailto:booking@beautyxbyfarina.com" aria-label="Email booking at beautyxbyfarina.com">
                      booking@beautyxbyfarina.com
                    </a>
                  </p>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <h3>Working Hours</h3>
                  <p>
                    Monday -- Saturday: 10:00 AM - 8:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </div>
                  <h3>Follow Us</h3>
                  <p>
                    Instagram: @beautyx_by_farina
                    <br />
                    Facebook: /BeautyxForAll
                  </p>
                </div>
              </div>

              <div>
                <div className="contact-form-wrapper">
                  <h2>Send Us a Message</h2>
                  {submitted ? (
                    <div className="form-success" role="status">
                      <div className="form-success-icon" aria-hidden="true">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                      </div>
                      <h3>Message Sent!</h3>
                      <p>
                        Thank you for reaching out! We will get back to you as soon
                        as possible. In the meantime, feel free to book an
                        appointment directly.
                      </p>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            subject: "",
                            message: "",
                          });
                        }}
                        style={{ marginTop: "16px" }}
                        aria-label="Send another message"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      aria-label="Contact us form"
                      noValidate
                    >
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          autoComplete="name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          autoComplete="email"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is this about?"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can help you..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary form-submit"
                        aria-label="Send your message"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div
              className="contact-map"
              role="img"
              aria-label="Our location at Main Boulevard, Lahore, Pakistan"
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ marginBottom: "8px" }} aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>Main Boulevard, Lahore, Pakistan</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
