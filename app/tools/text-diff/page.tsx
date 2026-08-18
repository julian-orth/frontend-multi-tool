import Breadcrumb from "@/components/breadcrumb";
import { FavoriteButton } from "@/components/favorite-button";
import type { Metadata } from "next";
import { TextDiffUI } from "./text-diff-ui";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";
import { getServerLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/locale";
import { getToolPageChrome } from "@/lib/i18n/tool-page-chrome";
import { pageContent } from "./content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const c = pageContent[locale];
  const path = localizeHref("/tools/text-diff", locale);

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
      title: `${c.twitterTitle} - ${SITE_CONFIG.name}`,
      description: c.twitterDescription,
      images: ["/images/og-image.png"],
    },
    alternates: {
      canonical: `${SITE_CONFIG.domain}${path}`,
      languages: {
        de: `${SITE_CONFIG.domain}/tools/text-diff`,
        en: `${SITE_CONFIG.domain}/en/tools/text-diff`,
      },
    },
  };
}

export default async function TextDiffPage() {
  const locale = await getServerLocale();
  const c = pageContent[locale];
  const chrome = getToolPageChrome(locale);

  return (
    <>
      <ToolSchema
        name={c.schemaName}
        description={c.schemaDescription}
        url={localizeHref("/tools/text-diff", locale)}
        keywords={c.schemaKeywords}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <div className="mb-3 flex items-start justify-between gap-4">
              <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
                {c.h1}
              </h1>
              <FavoriteButton toolId="text-diff" toolName={c.h1} />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {c.intro}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <TextDiffUI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is Text Diff */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                {c.whatIsHeading}
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>{c.whatIsParagraph}</p>
              </div>
            </section>

            {/* Key Facts */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                {chrome.keyFacts}
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                  {c.keyFacts.map((parts, index) => (
                    <li key={index}>
                      {parts.map((part, partIndex) => {
                        if (part.bold) {
                          return <strong key={partIndex}>{part.text}</strong>;
                        }
                        if (part.code) {
                          return <code key={partIndex}>{part.text}</code>;
                        }
                        return <span key={partIndex}>{part.text}</span>;
                      })}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 sm:mb-6 sm:text-3xl dark:text-gray-50">
                {chrome.faq}
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {c.faq.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-xl border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <summary className="cursor-pointer text-base font-semibold text-gray-900 sm:text-lg dark:text-gray-50">
                      {item.question}
                    </summary>
                    <p className="mt-2 text-sm text-gray-700 sm:mt-3 sm:text-base dark:text-gray-300">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Related Tools */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                {c.relatedToolsHeading}
              </h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                {c.relatedToolsIntro}
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <a
                  href={localizeHref(c.relatedTools[0].href, locale)}
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-gray-50 dark:group-hover:text-blue-400">
                    {c.relatedTools[0].name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {c.relatedTools[0].description}
                  </p>
                </a>
                <a
                  href={localizeHref(c.relatedTools[1].href, locale)}
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-orange-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-orange-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-orange-600 dark:text-gray-50 dark:group-hover:text-orange-400">
                    {c.relatedTools[1].name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {c.relatedTools[1].description}
                  </p>
                </a>
                <a
                  href={localizeHref(c.relatedTools[2].href, locale)}
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-green-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-green-600 dark:text-gray-50 dark:group-hover:text-green-400">
                    {c.relatedTools[2].name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {c.relatedTools[2].description}
                  </p>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
