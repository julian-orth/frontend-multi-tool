import Breadcrumb from "@/components/breadcrumb";
import { FavoriteButton } from "@/components/favorite-button";
import { ColorPalettesUI } from "./color-palettes-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";
import { getServerLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/locale";
import { pageContent } from "./content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const c = pageContent[locale];
  const path = localizeHref("/tools/color-palettes", locale);

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
      title: `${c.shortTitle} — ${SITE_CONFIG.name}`,
      description: c.twitterDescription,
      images: ["/images/og-image.png"],
    },
    alternates: {
      canonical: `${SITE_CONFIG.domain}${path}`,
      languages: {
        de: `${SITE_CONFIG.domain}/tools/color-palettes`,
        en: `${SITE_CONFIG.domain}/en/tools/color-palettes`,
      },
    },
  };
}

export default async function ColorPalettesPage() {
  const locale = await getServerLocale();
  const c = pageContent[locale];

  return (
    <>
      <ToolSchema
        name={c.shortTitle}
        description={c.schemaDescription}
        url={localizeHref("/tools/color-palettes", locale)}
        keywords={c.schemaKeywords}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <div className="mb-3 flex items-start justify-between gap-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                {c.shortTitle}
              </h1>
              <FavoriteButton toolId="color-palettes" toolName={c.shortTitle} />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {c.intro}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <ColorPalettesUI />
          </div>

          <div className="mt-16 space-y-12">
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                {c.whatIsHeading}
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                {c.whatIsParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                {c.harmonyHeading}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {c.harmonyTypes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20"
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
