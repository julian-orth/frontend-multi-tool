import Breadcrumb from "@/components/breadcrumb";
import { EncoderTabs } from "./encoder-tabs";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { RelatedTools } from "@/components/related-tools";
import { SITE_CONFIG } from "@/lib/site-config";
import { getServerLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/locale";
import { pageContent } from "./content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const c = pageContent[locale];
  const path = localizeHref("/tools/base64", locale);

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
      title: `${c.ogTitle} — ${SITE_CONFIG.name}`,
      description: c.twitterDescription,
      images: ["/images/og-image.png"],
    },
    alternates: {
      canonical: `${SITE_CONFIG.domain}${path}`,
      languages: {
        de: `${SITE_CONFIG.domain}/tools/base64`,
        en: `${SITE_CONFIG.domain}/en/tools/base64`,
      },
    },
  };
}

export default async function Base64Page() {
  const locale = await getServerLocale();
  const c = pageContent[locale];

  return (
    <>
      <ToolSchema
        name={c.h1}
        description={c.schemaDescription}
        url={localizeHref("/tools/base64", locale)}
        keywords={c.schemaKeywords}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              {c.h1}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {c.intro}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <EncoderTabs />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is this */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                {c.whatIsSection.heading}
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  {c.whatIsSection.terms.map((item) => (
                    <span key={item.term}>
                      <strong>{item.term}</strong> {item.text}{" "}
                    </span>
                  ))}
                  {c.whatIsSection.conclusion}
                </p>
              </div>
            </section>

            {/* Key Facts */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                {c.keyFacts.heading}
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                  {c.keyFacts.items.map((item) => (
                    <li key={item.text}>
                      {item.label ? <strong>{item.label}</strong> : null}{" "}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-50 sm:mb-6 sm:text-3xl">
                {c.faq.heading}
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {c.faq.items.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-6"
                  >
                    <summary className="cursor-pointer text-base font-semibold text-gray-900 dark:text-gray-50 sm:text-lg">
                      {item.question}
                    </summary>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <RelatedTools
              toolId="base64"
              locale={locale}
              blurbs={c.relatedToolsBlurb}
            />
          </div>
        </div>
      </div>
    </>
  );
}
