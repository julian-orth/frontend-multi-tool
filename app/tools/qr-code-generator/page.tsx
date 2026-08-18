import Breadcrumb from "@/components/breadcrumb";
import { FavoriteButton } from "@/components/favorite-button";
import type { Metadata } from "next";
import { QRCodeGeneratorUI } from "./qr-code-generator-ui";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";
import { WhatIsQRCodeSection, QuickFactsSection } from "./seo-sections";
import { FAQSection } from "./faq-section";
import { RelatedToolsSection } from "./related-tools-section";
import { getServerLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/locale";
import { pageContent } from "./content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const c = pageContent[locale];
  const path = localizeHref("/tools/qr-code-generator", locale);

  return {
    title: c.title,
    description: c.metaDescription,
    keywords: c.keywords,
    openGraph: {
      title: c.ogTitle,
      description: c.ogDescription,
      url: `${SITE_CONFIG.domain}${path}`,
      siteName: SITE_CONFIG.name,
      images: ["/images/og-image.png"],
    },
    twitter: {
      card: "summary",
      title: `${c.twitterTitle} — ${SITE_CONFIG.name}`,
      description: c.twitterDescription,
      images: ["/images/og-image.png"],
    },
    alternates: {
      canonical: `${SITE_CONFIG.domain}${path}`,
      languages: {
        de: `${SITE_CONFIG.domain}/tools/qr-code-generator`,
        en: `${SITE_CONFIG.domain}/en/tools/qr-code-generator`,
      },
    },
  };
}

export default async function QRCodeGeneratorPage() {
  const locale = await getServerLocale();
  const c = pageContent[locale];

  return (
    <>
      <ToolSchema
        name={c.schemaName}
        description={c.schemaDescription}
        url={localizeHref("/tools/qr-code-generator", locale)}
        keywords={c.schemaKeywords}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <div className="mb-3 flex items-start justify-between gap-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                {c.h1}
              </h1>
              <FavoriteButton toolId="qr-code-generator" toolName={c.h1} />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {c.intro}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <QRCodeGeneratorUI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            <WhatIsQRCodeSection content={c} />
            <QuickFactsSection content={c} />
            <FAQSection content={c} />
            <RelatedToolsSection content={c} locale={locale} />
          </div>
        </div>
      </div>
    </>
  );
}
