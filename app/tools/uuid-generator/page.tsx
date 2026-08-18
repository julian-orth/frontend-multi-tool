import type { Metadata } from "next";
import { UuidGeneratorClient } from "./client";
import Breadcrumb from "@/components/breadcrumb";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";
import { getServerLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/locale";
import { getToolPageChrome } from "@/lib/i18n/tool-page-chrome";
import { pageContent } from "./content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const c = pageContent[locale];
  const path = localizeHref("/tools/uuid-generator", locale);

  return {
    title: c.title,
    description: c.metaDescription,
    keywords: c.keywords,
    openGraph: {
      title: c.title,
      description: c.metaDescription,
      url: `${SITE_CONFIG.domain}${path}`,
      siteName: SITE_CONFIG.name,
      images: ["/images/og-image.png"],
    },
    twitter: {
      card: "summary",
      title: `${c.title} — ${SITE_CONFIG.name}`,
      description: c.metaDescription,
      images: ["/images/og-image.png"],
    },
    alternates: {
      canonical: `${SITE_CONFIG.domain}${path}`,
      languages: {
        de: `${SITE_CONFIG.domain}/tools/uuid-generator`,
        en: `${SITE_CONFIG.domain}/en/tools/uuid-generator`,
      },
    },
  };
}

export default async function UuidGeneratorPage() {
  const locale = await getServerLocale();
  const c = pageContent[locale];
  const chrome = getToolPageChrome(locale);

  return (
    <>
      <ToolSchema
        name={c.title}
        description={c.metaDescription}
        url={localizeHref("/tools/uuid-generator", locale)}
        keywords={c.keywords}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-black dark:text-white">
              {c.h1}
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {c.intro}
            </p>
          </div>

          <UuidGeneratorClient />

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is UUID */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                {c.whatIsHeading}
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>{c.whatIsBody}</p>
              </div>
            </section>

            {/* Quick Facts */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                {chrome.keyFacts}
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                  {c.keyFacts.map((fact) => (
                    <li key={fact.label}>
                      <strong>{fact.label}</strong> {fact.text}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-50 sm:mb-6 sm:text-3xl">
                {chrome.faq}
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {c.faq.map((item) => (
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

            {/* Related Tools */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                {chrome.relatedTools}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {c.relatedTools.map((tool) => (
                  <a
                    key={tool.href}
                    href={localizeHref(tool.href, locale)}
                    className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-gray-50 dark:group-hover:text-indigo-400">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {tool.description}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
