import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "About" },
  { path: "/gallery", label: "Gallery" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header className={`navbar${scrolled ? " scrolled" : ""}`} role="banner">
        <div className="container">
          <Link to="/" className="navbar-brand" aria-label="Beautyx by Farina — Home">
            <div className="navbar-brand-text">
              <span className="navbar-brand-name">
                Beauty<span>x</span>
              </span>
              <span className="navbar-brand-tagline">by Farina</span>
            </div>
          </Link>

          <nav id="navbar-links" className={`navbar-links${isOpen ? " open" : ""}`} aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={
                  location.pathname === link.path ? "active" : ""
                }
                aria-current={location.pathname === link.path ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/book-appointment" className="navbar-cta" aria-label="Book an appointment">
              Book Now
            </Link>
          </nav>

          <button
            className={`mobile-toggle${isOpen ? " open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="navbar-links"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div
        className={`mobile-overlay${isOpen ? " visible" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
