/**
 * SEO Utility -- centralized structured data generators and meta helpers
 * Covers: LocalBusiness, Service, FAQPage, Review, AggregateRating,
 *         BreadcrumbList, Product, ImageObject schemas
 */

const BASE_URL = "https://beautyxbyfarina.com";
const BUSINESS_NAME = "Beautyx by Farina";
const BUSINESS_DESC =
  "Lahore's premier beauty salon offering professional makeup, skin treatments, hair treatments, nail salon, laser hair removal, and waxing services.";
const ADDRESS = {
  streetAddress: "Main Boulevard",
  addressLocality: "Lahore",
  addressRegion: "Punjab",
  postalCode: "54000",
  addressCountry: "PK",
};
const GEO_COORDS = { latitude: 31.5204, longitude: 74.3587 };
const TELEPHONE = "+92 347 4138970";
const EMAIL = "info@beautyxbyfarina.com";
const OPENING_HOURS = [
  { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "20:00" },
];

// ── Base entity reference ──
const businessId = `${BASE_URL}/#business`;

// ── LocalBusiness (core schema for GEO) ──
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": businessId,
    name: BUSINESS_NAME,
    alternateName: "Beautyx by Farina Salon",
    description: BUSINESS_DESC,
    url: BASE_URL,
    telephone: TELEPHONE,
    email: EMAIL,
    image: `${BASE_URL}/og-image.jpg`,
    logo: `${BASE_URL}/favicon.svg`,
    address: { "@type": "PostalAddress", ...ADDRESS },
    geo: { "@type": "GeoCoordinates", ...GEO_COORDS },
    openingHoursSpecification: OPENING_HOURS.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    priceRange: "\u20A8\u20A8\u20A8",
    sameAs: [
      "https://www.instagram.com/beautyx_by_farina/",
      "https://www.facebook.com/BeautyxForAll/",
      "https://www.tiktok.com/@beautyxbyfarina",
      "https://wa.me/923474138970",
      "https://pin.it/5frPyCxtP",
    ],
    founder: {
      "@type": "Person",
      name: "Farina",
      jobTitle: "Founder & Lead Makeup Artist",
    },
    areaServed: {
      "@type": "City",
      name: "Lahore",
      sameAs: "https://en.wikipedia.org/wiki/Lahore",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Beauty Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Makeup" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Skin Treatments" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Treatments" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nail Salon" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laser Hair Removal" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Waxing" } },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      ratingCount: "85",
    },
  };
}

// ── Per-page breadcrumb ──
export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

// ── Service schema -- call for each category ──
export function serviceSchema(category) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${category.name} -- ${BUSINESS_NAME}`,
    description: category.description,
    provider: { "@id": businessId },
    areaServed: { "@type": "City", name: "Lahore" },
    offers: category.services.map((s) => ({
      "@type": "Offer",
      name: s.name,
      description: s.description,
      itemOffered: { "@type": "Service", name: s.name },
    })),
  };
}

// ── FAQPage schema ──
export function faqSchema(questions) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

// ── AggregateRating + Review schemas ──
export function reviewSchema(reviews) {
  const avg =
    reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${BUSINESS_NAME} Services`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avg.toFixed(1),
      bestRating: "5",
      ratingCount: reviews.length,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5" },
      reviewBody: r.text,
      itemReviewed: { "@type": "Service", name: r.service },
    })),
  };
}

// ── Page meta descriptor factory ──
export function pageMeta(title, description, keywords, ogImage) {
  return {
    title: `${title} | ${BUSINESS_NAME}`,
    description,
    keywords: keywords || "",
    ogTitle: title,
    ogDescription: description,
    ogImage: ogImage || `${BASE_URL}/og-image.jpg`,
    ogUrl: BASE_URL,
  };
}

// ── FAQ items for service categories ──
export const beautyFAQs = [
  {
    question: "What is the best bridal makeup salon in Lahore?",
    answer:
      "Beautyx by Farina is widely recognized as one of the best bridal makeup salons in Lahore, offering personalized bridal packages, premium products, and experienced makeup artists who specialize in bridal looks.",
  },
  {
    question: "How much does a hydra facial cost in Lahore?",
    answer:
      "At Beautyx by Farina, our hydra facial prices are competitive and tailored to your skin needs. We offer premium hydra facial treatments using advanced technology for deep cleansing, exfoliation, and hydration.",
  },
  {
    question: "What hair treatments do you offer in Lahore?",
    answer:
      "We offer a comprehensive range of hair treatments including keratin treatment, protein treatment, hair fall treatment, Brazilian keratin, rebounding, hair coloring, streaks, and precision cutting services at our Lahore salon.",
  },
  {
    question: "Is laser hair removal permanent?",
    answer:
      "Laser hair removal offers permanent hair reduction. At Beautyx by Farina in Lahore, we use advanced laser technology for safe, effective treatments. Multiple sessions are typically needed for optimal results.",
  },
  {
    question: "What types of waxing do you offer?",
    answer:
      "We offer rica waxing, fruit waxing, soft waxing, and hot wax services for all body areas including face, arms, legs, and full body at our Lahore salon.",
  },
  {
    question: "How can I book an appointment at Beautyx by Farina?",
    answer:
      "You can book an appointment by calling +92 347 4138970, emailing info@beautyxbyfarina.com, or using our online booking form on the website. We are located on Main Boulevard, Lahore and open Monday-Saturday 10 AM-8 PM.",
  },
];
