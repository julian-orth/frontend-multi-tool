import Breadcrumb from "@/components/breadcrumb";
import { GradientGeneratorUI } from "./gradient-generator-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";
import { getServerLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/locale";
import { pageContent } from "./content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const c = pageContent[locale];
  const path = localizeHref("/tools/gradient-generator", locale);

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
        de: `${SITE_CONFIG.domain}/tools/gradient-generator`,
        en: `${SITE_CONFIG.domain}/en/tools/gradient-generator`,
      },
    },
  };
}

export default async function GradientGeneratorPage() {
  const locale = await getServerLocale();
  const c = pageContent[locale];

  return (
    <>
      <ToolSchema
        name={c.title}
        description={c.schemaDescription}
        url={localizeHref("/tools/gradient-generator", locale)}
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
            <GradientGeneratorUI />
          </div>

          <div className="mt-16 space-y-12">
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                {c.whatIsSection.heading}
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                {c.whatIsSection.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                {c.typesSection.heading}
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {c.typesSection.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-rose-200 bg-rose-50/50 p-6 dark:border-rose-800 dark:bg-rose-950/20"
                  >
                    <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
