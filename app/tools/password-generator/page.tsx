import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb";
import { FavoriteButton } from "@/components/favorite-button";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";
import { getServerLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/locale";
import { PasswordGeneratorUI } from "./password-generator-ui";
import { pageContent } from "./content";

const SECTION_CLASSES = [
  "rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20",
  "rounded-xl border border-cyan-200 bg-cyan-50/50 p-6 dark:border-cyan-800 dark:bg-cyan-950/20",
  "rounded-xl border border-emerald-200 bg-emerald-50/50 p-6 dark:border-emerald-800 dark:bg-emerald-950/20",
] as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const c = pageContent[locale];
  const path = localizeHref("/tools/password-generator", locale);

  return {
    title: c.metaTitle,
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
        de: `${SITE_CONFIG.domain}/tools/password-generator`,
        en: `${SITE_CONFIG.domain}/en/tools/password-generator`,
      },
    },
  };
}

export default async function PasswordGeneratorPage() {
  const locale = await getServerLocale();
  const c = pageContent[locale];

  return (
    <>
      <ToolSchema
        name={c.schemaName}
        description={c.schemaDescription}
        url={localizeHref("/tools/password-generator", locale)}
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
              <FavoriteButton toolId="password-generator" toolName={c.h1} />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {c.intro}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <PasswordGeneratorUI />
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {c.sections.map((section, index) => (
              <section key={section.heading} className={SECTION_CLASSES[index]}>
                <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
                  {section.heading}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
