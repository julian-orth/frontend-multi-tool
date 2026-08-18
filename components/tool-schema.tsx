/**
 * Schema.org Structured Data Component for Tools
 *
 * Generates JSON-LD structured data for better SEO and rich snippets
 * in search results. Implements WebApplication schema for developer tools.
 */

import { SITE_CONFIG } from "@/lib/site-config";

interface ToolSchemaProps {
  name: string;
  description: string;
  url: string;
  category?: string;
  keywords?: string[];
}

export function ToolSchema({
  name,
  description,
  url,
  category = "DeveloperApplication",
  keywords = [],
}: ToolSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: name,
    description: description,
    url: `${SITE_CONFIG.domain}${url}`,
    image: `${SITE_CONFIG.domain}/images/og-image.png`,
    applicationCategory: category,
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    keywords: keywords.join(", "),
    browserRequirements: "Requires JavaScript. Works in all modern browsers.",
    permissions: "No data collection, runs entirely client-side",
    isAccessibleForFree: true,
    audience: {
      "@type": "Audience",
      audienceType: "Developers, Designers, Web Professionals",
    },
    creator: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
