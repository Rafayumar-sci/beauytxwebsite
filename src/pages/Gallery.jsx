import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { pageMeta, breadcrumbSchema } from "../utils/seo";

const galleryImages = [
  { id: 1, category: "makeup", label: "Bridal Makeup" },
  { id: 2, category: "makeup", label: "Party Makeup" },
  { id: 3, category: "makeup", label: "Signature Look" },
  { id: 4, category: "hair", label: "Keratin Treatment" },
  { id: 5, category: "hair", label: "Hair Coloring" },
  { id: 6, category: "hair", label: "Hair Styling" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "makeup", label: "Makeup" },
  { id: "hair", label: "Hair" },
];

const categoryIcons = {
  makeup: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
  hair: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/>
    </svg>
  ),
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const meta = pageMeta(
    "Gallery -- Makeup and Hair Transformations | Beautyx by Farina",
    "View our makeup and hair gallery at Beautyx by Farina in Lahore. See bridal makeup, party makeup, keratin treatments, hair coloring, and styling transformations.",
    "makeup gallery Lahore, hair transformations Lahore, bridal makeup photos, keratin treatment results, Beautyx by Farina gallery"
  );

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
  ]);

  const defaultIcon = (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
  );

  const getIcon = (img) => categoryIcons[img.category] || defaultIcon;

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:url" content="https://beautyxbyfarina.com/gallery" />
        <meta name="twitter:title" content={meta.ogTitle} />
        <meta name="twitter:description" content={meta.ogDescription} />
        <link rel="canonical" href="https://beautyxbyfarina.com/gallery" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
      </Helmet>

      <div className="page-transition">
        {/* Page Hero */}
        <header className="page-hero" aria-label="Gallery page header">
          <div className="container">
            <h1 className="page-hero-title">Our Gallery</h1>
            <p className="page-hero-subtitle">
              Take a visual journey through our work -- from stunning makeovers to
              serene salon moments at Beautyx by Farina in Lahore
            </p>
          </div>
        </header>

        {/* Gallery */}
        <section className="about-page-section" aria-labelledby="gallery-heading">
          <div className="container">
            <nav className="gallery-categories" aria-label="Filter gallery by category">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`gallery-cat-btn${
                    activeCategory === cat.id ? " active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-current={activeCategory === cat.id ? "true" : undefined}
                  aria-label={`Show ${cat.label} photos`}
                >
                  {cat.label}
                </button>
              ))}
            </nav>

            <div className="gallery-grid" role="list" aria-label="Salon work gallery">
              {filtered.map((img) => (
                <div
                  key={img.id}
                  className="gallery-item"
                  onClick={() => setSelectedImage(img)}
                  role="listitem"
                  aria-label={`View ${img.label} photo`}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedImage(img)}
                >
                  <div className="gallery-item-placeholder" aria-hidden="true">
                    <div style={{ marginBottom: "8px" }}>{getIcon(img)}</div>
                    <span className="gallery-item-label">{img.label}</span>
                  </div>
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-overlay-text">{img.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div
                style={{
                  textAlign: "center",
                  padding: "60px 0",
                  color: "var(--text-muted)",
                }}
                role="status"
              >
                <p>No images in this category yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedImage.label} -- enlarged view`}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.9)",
              zIndex: 2000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              padding: "20px",
            }}
            onClick={() => setSelectedImage(null)}
          >
            <div
              style={{
                maxWidth: "600px",
                width: "100%",
                textAlign: "center",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, var(--primary-soft), var(--accent-light))",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
                aria-hidden="true"
              >
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--white)",
                  fontSize: "1.5rem",
                  marginBottom: "8px",
                }}
              >
                {selectedImage.label}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
                Click anywhere to close
              </p>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="cta-section" aria-label="Book your appointment">
          <div className="container">
            <h2 className="cta-title">Ready for Your Transformation?</h2>
            <p className="cta-subtitle">
              Book your appointment and let us create magic for you
            </p>
            <Link to="/book-appointment" className="btn btn-accent" aria-label="Book your beauty appointment">
              Book Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
