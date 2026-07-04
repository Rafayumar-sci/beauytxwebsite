import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "About" },
  { path: "/gallery", label: "Gallery" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" },
];

const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0, 0, 0.2, 1],
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    x: 40,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1],
    },
  },
};

const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className={`navbar${scrolled ? " scrolled" : ""}`} role="banner">
        <div className="container">
          <Link to="/" className="navbar-brand" aria-label="Beautyx by Farina — Home">
            <img
              src="/beautyx logo maroon.png"
              alt="Beautyx by Farina"
              className="navbar-logo"
            />
            <div className="navbar-brand-text">
              <span className="navbar-brand-name">
                Beauty<span>x</span>
              </span>
              <span className="navbar-brand-tagline">by Farina</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="navbar-links-desktop" aria-label="Main navigation">
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

          {/* Mobile menu (animated with Framer Motion) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                id="navbar-links"
                className="navbar-links-mobile"
                role="navigation"
                aria-label="Mobile navigation"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={linkVariants}>
                    <Link
                      to={link.path}
                      className={
                        location.pathname === link.path ? "active" : ""
                      }
                      aria-current={location.pathname === link.path ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={linkVariants}>
                  <Link
                    to="/book-appointment"
                    className="navbar-cta"
                    aria-label="Book an appointment"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Now
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

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

      {/* Mobile overlay (animated with Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-overlay"
            className="mobile-overlay"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
