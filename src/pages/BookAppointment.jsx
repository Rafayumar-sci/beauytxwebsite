import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { serviceCategories } from "../data/services";
import { pageMeta, breadcrumbSchema } from "../utils/seo";
import HeroParticles from "../components/HeroParticles";
import AnimatedPage from "../components/AnimatedPage";

export default function BookAppointment() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    category: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    // Map category ID to category name for better readability
    const category =
      serviceCategories.find((c) => c.id === formData.category)?.name ||
      formData.category;

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, category }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const meta = pageMeta(
    "Book an Appointment -- Beautyx by Farina Lahore",
    "Schedule your beauty appointment at Beautyx by Farina in Lahore. Book bridal makeup, hydra facial, keratin treatment, nail services, laser hair removal, or waxing online.",
    "book beauty appointment Lahore, book bridal makeup Lahore, salon appointment Lahore, beautyx booking"
  );

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Book Appointment", path: "/book-appointment" },
  ]);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:url" content="https://beautyxbyfarina.com/book-appointment" />
        <meta name="twitter:title" content={meta.ogTitle} />
        <meta name="twitter:description" content={meta.ogDescription} />
        <link rel="canonical" href="https://beautyxbyfarina.com/book-appointment" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
      </Helmet>

      <AnimatedPage>
        {/* Page Hero */}
        <header className="page-hero" aria-label="Book appointment page header">
          <HeroParticles />
          <div className="container">
            <h1 className="page-hero-title">Book an Appointment</h1>
            <p className="page-hero-subtitle">
              Schedule your visit and let us take care of the rest. Your journey
              to beauty begins with a simple click.
            </p>
          </div>
        </header>

        {/* Booking Section */}
        <section className="booking-section" aria-label="Appointment booking form" style={{ position: 'relative' }}>
          <HeroParticles />
          <div className="container">
            <div className="booking-content">
              <div className="booking-info">
                <h2>Let's Get Started</h2>
                <p>
                  Fill out the form and we will confirm your appointment as soon as
                  possible. Whether you are looking for a complete makeover or a
                  quick touch-up, we are here for you.
                </p>

                <div className="booking-details" aria-label="Contact and location details">
                  <div className="booking-detail">
                    <div className="booking-detail-icon" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Location</h4>
                      <span>122 A/4 P.G.E.C.H.S, Phase-1, Lahore, Pakistan</span>
                    </div>
                  </div>
                  <div className="booking-detail">
                    <div className="booking-detail-icon" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Phone</h4>
                      <span>
                        <a href="tel:+923474138970" aria-label="Call us at +92 347 4138970">
                          +92 347 4138970
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="booking-detail">
                    <div className="booking-detail-icon" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Working Hours</h4>
                      <span>Monday - Sunday: 10:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                  <div className="booking-detail">
                    <div className="booking-detail-icon" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                        <line x1="1" y1="10" x2="23" y2="10"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Payment</h4>
                      <span>Cash, JazzCash, Easypaisa, Credit/Debit Card</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="booking-form-wrapper">
                {error && (
                  <div className="form-error" role="alert" style={{
                    backgroundColor: "#fef2f2",
                    border: "1px solid #fecaca",
                    borderRadius: "8px",
                    padding: "16px",
                    marginBottom: "16px",
                    color: "#991b1b",
                    fontSize: "14px",
                  }}>
                    <p style={{ margin: 0 }}><strong>Unable to book:</strong> {error}</p>
                  </div>
                )}

                {submitted ? (
                  <div className="form-success" role="status">
                    <div className="form-success-icon" aria-hidden="true">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                    </div>
                    <h3>Appointment Request Sent!</h3>
                    <p>
                      Thank you for booking with <strong>Beautyx by Farina</strong>.
                      We will contact you shortly to confirm your appointment.
                      We look forward to seeing you!
                    </p>
                    <button
                      className="btn btn-primary form-submit"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          service: "",
                          category: "",
                          date: "",
                          time: "",
                          message: "",
                        });
                      }}
                      style={{ marginTop: "24px", width: "auto" }}
                      aria-label="Book another appointment"
                    >
                      Book Another
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="booking-form-title">Book Your Appointment</h3>
                    <form
                      onSubmit={handleSubmit}
                      aria-label="Appointment booking form"
                      noValidate
                    >
                      <div className="form-row">
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
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+92 347 4138970"
                          autoComplete="tel"
                        />
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="category">Service Category *</label>
                          <select
                            id="category"
                            name="category"
                            required
                            value={formData.category}
                            onChange={handleChange}
                          >
                            <option value="">Select a category</option>
                            {serviceCategories.map((cat) => (
                              <option key={cat.id} value={cat.id}>
                                {cat.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="service">Service *</label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                          >
                            <option value="">Select a service</option>
                            {formData.category
                              ? (() => {
                                  const cat = serviceCategories.find((c) => c.id === formData.category);
                                  if (!cat) return null;
                                  return cat.groups.flatMap((g) =>
                                    g.services.map((s, i) => (
                                      <option key={`${g.name}-${i}`} value={s.name}>
                                        {s.name} ({g.name})
                                      </option>
                                    ))
                                  );
                                })()
                              : serviceCategories.flatMap((cat) =>
                                  cat.groups.flatMap((g) =>
                                    g.services.map((s, i) => (
                                      <option key={`${cat.id}-${g.name}-${i}`} value={s.name}>
                                        {s.name} ({cat.name})
                                      </option>
                                    ))
                                  )
                                )}
                          </select>
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="date">Preferred Date *</label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="time">Preferred Time *</label>
                          <select
                            id="time"
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                          >
                            <option value="">Select time</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="16:00">4:00 PM</option>
                            <option value="17:00">5:00 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="19:00">7:00 PM</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Special Requests</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Any special requests or notes..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary form-submit"
                        disabled={submitting}
                        aria-label="Submit appointment booking request"
                        style={submitting ? { opacity: 0.7, cursor: "not-allowed" } : {}}
                      >
                        {submitting ? "Submitting..." : "Book Appointment"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </AnimatedPage>
    </>
  );
}
