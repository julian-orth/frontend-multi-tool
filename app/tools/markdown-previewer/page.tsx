import Breadcrumb from "@/components/breadcrumb";
import { FavoriteButton } from "@/components/favorite-button";
import { MarkdownPreviewerUI } from "./markdown-previewer-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";
import { getServerLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/locale";
import { getToolPageChrome } from "@/lib/i18n/tool-page-chrome";
import { pageContent } from "./content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const c = pageContent[locale];
  const path = localizeHref("/tools/markdown-previewer", locale);

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
      title: `${c.twitterTitle} — ${SITE_CONFIG.name}`,
      description: c.twitterDescription,
      images: ["/images/og-image.png"],
    },
    alternates: {
      canonical: `${SITE_CONFIG.domain}${path}`,
      languages: {
        de: `${SITE_CONFIG.domain}/tools/markdown-previewer`,
        en: `${SITE_CONFIG.domain}/en/tools/markdown-previewer`,
      },
    },
  };
}

export default async function MarkdownPreviewerPage() {
  const locale = await getServerLocale();
  const c = pageContent[locale];
  const chrome = getToolPageChrome(locale);

  return (
    <>
      <ToolSchema
        name={c.schemaName}
        description={c.schemaDescription}
        url={localizeHref("/tools/markdown-previewer", locale)}
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
              <FavoriteButton toolId="markdown-previewer" toolName={c.h1} />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {c.intro}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <MarkdownPreviewerUI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is Markdown */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                {c.whatIsMarkdown.heading}
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>{c.whatIsMarkdown.paragraph}</p>
              </div>
            </section>

            {/* Key Facts */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                {chrome.keyFacts}
              </h2>
              <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                  <li>{c.keyFacts.everywhere}</li>
                  <li>
                    {c.keyFacts.syntax.prefix} <code>#</code>{" "}
                    {c.keyFacts.syntax.forHeadings}, <code>**bold**</code>,{" "}
                    <code>*italic*</code>, <code>[link](url)</code>,{" "}
                    <code>![alt](image)</code>, {c.keyFacts.syntax.and}{" "}
                    <code>`code`</code>.
                  </li>
                  <li>
                    {c.keyFacts.tables.prefix} <code>| Header | --- |</code>,{" "}
                    {c.keyFacts.tables.suffix}
                  </li>
                  <li>{c.keyFacts.codeBlocks}</li>
                  <li>{c.keyFacts.rawHtml}</li>
                  <li>{c.keyFacts.privacy}</li>
                </ul>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 sm:mb-6 sm:text-3xl dark:text-gray-50">
                {chrome.faq}
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {c.faq.items.map((item) => (
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
                {chrome.relatedTools}
              </h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                {c.relatedTools.intro}
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {c.relatedTools.items.map((tool) => (
                  <a
                    key={tool.href}
                    href={localizeHref(tool.href, locale)}
                    className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-yellow-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-yellow-700"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-yellow-600 dark:text-gray-50 dark:group-hover:text-yellow-400">
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
