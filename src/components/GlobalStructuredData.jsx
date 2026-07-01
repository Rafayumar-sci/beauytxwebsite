import { Helmet } from "react-helmet-async";
import { localBusinessSchema, beautyFAQs, faqSchema } from "../utils/seo";

/**
 * Injects global JSON-LD structured data that benefits every page:
 * - LocalBusiness (BeautySalon) with address, geo, hours, aggregate rating
 * - FAQPage with common beauty questions
 */
export default function GlobalStructuredData() {
  const business = localBusinessSchema();
  const faqs = faqSchema(beautyFAQs);

  return (
    <Helmet>
      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify(business)}
      </script>

      {/* FAQ Schema (benefits all pages for voice/AEO) */}
      <script type="application/ld+json">
        {JSON.stringify(faqs)}
      </script>

      {/* Default meta tags (overridden per-page by Helmet) */}
      <html lang="en-PK" dir="ltr" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <link rel="canonical" href="https://beautyxbyfarina.com/" />
    </Helmet>
  );
}
