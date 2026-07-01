import { Link } from "react-router-dom";
import { serviceCategories } from "../data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand & Social */}
          <div>
            <div className="footer-brand" aria-label="Beautyx by Farina">
              Beauty<span>x</span>
            </div>
            <p className="footer-desc">
              Where beauty meets artistry. <strong>Beautyx by Farina</strong>{" "}
              offers premium beauty services in{" "}
              <strong>Lahore</strong>, including makeup, skincare, hair
              treatments, nail care, laser hair removal, and waxing. Experience
              luxury and transformation at our Main Boulevard salon.
            </p>
            <div className="footer-social" aria-label="Follow us on social media">
              <a
                href="https://www.instagram.com/beautyx_by_farina/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                title="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/BeautyxForAll/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                title="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@beautyxbyfarina"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on TikTok"
                title="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
              </a>
              <a
                href="https://wa.me/923474138970"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                title="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </a>
              <a
                href="https://pin.it/5frPyCxtP"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Pinterest"
                title="Pinterest"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 20l4-16h4l-1.5 6h4L17 20h-4l1.5-6H9L7 20H4l1.5-6h4"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Our services">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/services/${cat.id}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info -- NAP consistency for local SEO */}
          <address style={{ fontStyle: "normal" }} aria-label="Contact information">
            <h3 className="footer-heading">Contact Info</h3>
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <span>Main Boulevard, Lahore, Pakistan</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <a href="tel:+923474138970" aria-label="Call +92 347 4138970">+92 347 4138970</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <a href="mailto:info@beautyxbyfarina.com" aria-label="Email info at beautyxbyfarina.com">
                info@beautyxbyfarina.com
              </a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </span>
              <span>Mon-Sat: 10:00 AM - 8:00 PM</span>
            </div>
          </address>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} <strong>Beautyx by Farina</strong>. All rights reserved.</span>
          <span>Main Boulevard, Lahore, Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
