import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import { getServerLocale } from "@/lib/i18n/server";
import { getPageContent } from "@/lib/i18n/page-content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const content = getPageContent(locale).privacy;
  const path = locale === "en" ? "/en/privacy" : "/privacy";

  return {
    title: content.title,
    description: content.sections[0].paragraphs[0],
    openGraph: {
      title: `${content.title} | ${SITE_CONFIG.name}`,
      description: content.sections[0].paragraphs[0],
      type: "website",
      url: `${SITE_CONFIG.domain}${path}`,
    },
    twitter: {
      card: "summary",
      title: `${content.title} | ${SITE_CONFIG.name}`,
      description: content.sections[0].paragraphs[0],
    },
    alternates: {
      canonical: `${SITE_CONFIG.domain}${path}`,
    },
  };
}

export default async function PrivacyPage() {
  const locale = await getServerLocale();
  const content = getPageContent(locale).privacy;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <span className="inline-flex items-center rounded-sm border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 text-[11px] tracking-[0.12em] text-[var(--ink-soft)] uppercase shadow-[0_1px_0_var(--line)]">
          {content.badge}
        </span>
        <h1 className="mt-4 mb-6 font-[Space_Grotesk] text-5xl font-bold tracking-tight text-[var(--ink)]">
          {content.title}
        </h1>

        <div className="space-y-8 text-[var(--ink-soft)]">
          {content.sections.map((section) => (
            <section
              key={section.title}
              className={
                section.highlight
                  ? "rounded-lg border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_1px_0_var(--line-soft)]"
                  : undefined
              }
            >
              <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-semibold text-[var(--ink)]">
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mb-4 leading-relaxed last:mb-0">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mb-4 list-inside list-disc space-y-2 pl-4 last:mb-0">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mt-12 border-t border-[var(--line)] pt-8">
            <p className="text-center text-sm text-[var(--ink-soft)]">
              {content.lastUpdated}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
