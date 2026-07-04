export function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const categoryGradients = {
  makeup: "linear-gradient(135deg, #F2D5DA, #E0C8A0)",
  skincare: "linear-gradient(135deg, #D4E8D8, #E0C8A0)",
  hair: "linear-gradient(135deg, #F2D5DA, #D4C4E0)",
  nails: "linear-gradient(135deg, #E0C8A0, #F2D5DA)",
  laser: "linear-gradient(135deg, #D4E8D8, #C4D4E8)",
  waxing: "linear-gradient(135deg, #F2E0D0, #D4E8D8)",
};

export function CategorySvgIcon({ icon, size = 28 }) {
  const s = size;
  const icons = {
    makeup: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#9A5A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    skincare: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#9A5A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    hair: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#9A5A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/>
      </svg>
    ),
    nails: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#9A5A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    laser: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#9A5A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    waxing: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#9A5A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22c1.25-.98 2.1-2.26 2.29-3.65"/><path d="M6 17c.42-1.56.98-3.12 2.19-4.35a5.59 5.59 0 0 0 .68-6.56L5 2c.69 1.5 1.25 3.14 1.25 5.04 0 1.29.27 2.55.86 3.67"/><path d="M11.43 8.77c.7-1.11 1.08-2.44 1.08-3.89C12.51 3 11.76 1.5 10.5 0c1.33.75 2.18 2.09 2.18 3.69 0 1.14-.29 2.23-.81 3.2"/><path d="M16.25 8.2a5.9 5.9 0 0 1-1.83 2.56C13.4 11.69 13 13.25 13 15"/>
        <path d="M17.89 12.42c.7-1.12 1.06-2.46 1.06-3.91C18.95 6.69 18.2 5.2 16.94 3.7c1.33.75 2.18 2.09 2.18 3.69 0 1.1-.25 2.13-.7 3.03"/><path d="M21 15c0 2.76-4.03 5-9 5s-9-2.24-9-5c0-1.53.96-2.6 2.29-3.65"/>
      </svg>
    ),
  };
  return icons[icon] || null;
}

export function generateServiceLongDescription(service, category) {
  const kwList = category.seoKeywords?.slice(0, 5).join(", ") || "";
  return `${service.description} At Beautyx by Farina, our ${service.name.toLowerCase()} service is performed by experienced professionals using premium products and the latest techniques. Located at 122 A/4 P.G.E.C.H.S, Phase-1, Lahore, we are a trusted destination for ${category.name.toLowerCase()} services. ${kwList ? `Clients searching for ${kwList} trust our expertise and personalized approach.` : ""} We tailor every ${service.name.toLowerCase()} session to your specific needs, ensuring results that exceed expectations. Book your appointment today and experience the Beautyx difference.`;
}
