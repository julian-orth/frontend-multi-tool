import Link from "next/link";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import { getServerLocale } from "@/lib/i18n/server";
import { getPageContent } from "@/lib/i18n/page-content";
import { localizeHref } from "@/lib/i18n/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const content = getPageContent(locale).terms;
  const path = locale === "en" ? "/en/terms" : "/terms";
  const metadataDescription =
    content.sections[0]?.paragraphs?.[0] ?? content.title;

  return {
    title: content.title,
    description: metadataDescription,
    openGraph: {
      title: `${content.title} | ${SITE_CONFIG.name}`,
      description: metadataDescription,
      type: "website",
      url: `${SITE_CONFIG.domain}${path}`,
      images: ["/images/og-image.png"],
    },
    twitter: {
      card: "summary",
      title: `${content.title} | ${SITE_CONFIG.name}`,
      description: metadataDescription,
      images: ["/images/og-image.png"],
    },
    alternates: {
      canonical: `${SITE_CONFIG.domain}${path}`,
      languages: {
        de: `${SITE_CONFIG.domain}/terms`,
        en: `${SITE_CONFIG.domain}/en/terms`,
      },
    },
  };
}

export default async function TermsPage() {
  const locale = await getServerLocale();
  const content = getPageContent(locale).terms;
  const privacyLinkLabel = locale === "en" ? "Privacy Policy" : "Datenschutz";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <span className="inline-flex items-center rounded-sm border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 text-[11px] tracking-[0.12em] text-[var(--ink-soft)] uppercase shadow-[0_1px_0_var(--line)]">
          {content.badge}
        </span>
        <h1 className="font-display mt-4 mb-6 text-5xl font-bold tracking-tight text-[var(--ink)]">
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
              <h2 className="font-display mb-4 text-2xl font-semibold text-[var(--ink)]">
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
              {section.title
                .toLowerCase()
                .includes(locale === "en" ? "privacy" : "datenschutz") && (
                <p className="mt-4 leading-relaxed">
                  <Link
                    href={localizeHref("/privacy", locale)}
                    className="text-[var(--primary-on-surface)] underline hover:text-[var(--primary-hover)]"
                  >
                    {privacyLinkLabel}
                  </Link>
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
