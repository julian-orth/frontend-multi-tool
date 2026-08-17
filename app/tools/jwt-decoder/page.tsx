import Breadcrumb from "@/components/breadcrumb";
import { JWTDecoderUI } from "./jwt-decoder-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { RelatedTools } from "@/components/related-tools";
import { SITE_CONFIG } from "@/lib/site-config";
import { getServerLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/locale";
import { getToolPageChrome } from "@/lib/i18n/tool-page-chrome";
import { pageContent } from "./content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const c = pageContent[locale];
  const path = localizeHref("/tools/jwt-decoder", locale);

  return {
    title: c.title,
    description: c.metaDescription,
    keywords: c.keywords,
    openGraph: {
      title: c.title,
      description: c.metaDescription,
      url: `${SITE_CONFIG.domain}${path}`,
      siteName: SITE_CONFIG.name,
    },
    twitter: {
      card: "summary",
      title: `${c.title} — ${SITE_CONFIG.name}`,
      description: c.metaDescription,
    },
    alternates: {
      canonical: `${SITE_CONFIG.domain}${path}`,
    },
  };
}

export default async function JwtDecoderPage() {
  const locale = await getServerLocale();
  const c = pageContent[locale];
  const chrome = getToolPageChrome(locale);

  return (
    <>
      <ToolSchema
        name={c.title}
        description={c.metaDescription}
        url={localizeHref("/tools/jwt-decoder", locale)}
        keywords={c.keywords}
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
            <JWTDecoderUI />
          </div>

          <div className="mt-16 space-y-12">
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                {chrome.keyFacts}
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <ul className="ml-6 list-disc space-y-3 text-gray-700 dark:text-gray-300">
                  {c.keyFacts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </div>
            </section>

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

            <RelatedTools
              toolId="jwt-decoder"
              locale={locale}
              blurbs={c.relatedToolsBlurb}
            />
          </div>
        </div>
      </div>
    </>
  );
}
