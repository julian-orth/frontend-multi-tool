import type { Metadata } from "next";
import { Layers, FlaskConical, Gauge } from "lucide-react";
import { TOOLS } from "@/lib/tools/registry";
import { SITE_CONFIG } from "@/lib/site-config";
import { getServerLocale } from "@/lib/i18n/server";
import { getPageContent } from "@/lib/i18n/page-content";

const CATEGORY_COUNT = new Set(TOOLS.map((tool) => tool.group)).size;
const LIGHTHOUSE_VALUES = [92, 100, 100, 100] as const;
const PRINCIPLE_ICONS = [Layers, FlaskConical, Gauge] as const;
const PRINCIPLE_COLORS = ["#3D5A99", "#2E6B5E", "#B5652C"] as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const content = getPageContent(locale).about;
  const title = content.badge;
  const description = content.intro;
  const path = locale === "en" ? "/en/about" : "/about";

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url: `${SITE_CONFIG.domain}${path}`,
      siteName: SITE_CONFIG.name,
    },
    twitter: {
      card: "summary",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
    },
    alternates: {
      canonical: `${SITE_CONFIG.domain}${path}`,
    },
  };
}

export default async function AboutPage() {
  const locale = await getServerLocale();
  const content = getPageContent(locale).about;

  const stats = [
    { label: content.stats[0], value: String(TOOLS.length) },
    { label: content.stats[1], value: String(CATEGORY_COUNT) },
    { label: content.stats[2], value: "331" },
    { label: content.stats[3], value: "0" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 pb-16 sm:px-6">
      <div className="mb-8">
        <span className="inline-flex items-center rounded-sm border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 text-[11px] tracking-[0.12em] text-[var(--ink-soft)] uppercase shadow-[0_1px_0_var(--line)]">
          {content.badge}
        </span>
        <h1 className="mt-4 mb-3 font-[Space_Grotesk] text-5xl font-bold tracking-tight text-[var(--ink)]">
          {content.title}
        </h1>
        <p className="max-w-2xl text-lg text-[var(--ink-soft)]">
          {content.intro}
        </p>
      </div>

      <div className="space-y-8">
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-md border border-[var(--line)] bg-[var(--card)] p-4 shadow-[0_1px_0_var(--line-soft)]"
            >
              <div className="font-[Space_Grotesk] text-3xl font-bold text-[var(--ink)]">
                {stat.value}
              </div>
              <div className="mt-1 font-[IBM_Plex_Mono] text-[11px] tracking-[0.08em] text-[var(--ink-soft)] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        <section className="rounded-md border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_1px_0_var(--line-soft)]">
          <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-bold text-[var(--ink)]">
            {content.whatTitle}
          </h2>
          {content.whatParagraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-4 text-[var(--ink-soft)] last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </section>

        <section>
          <h2 className="mb-6 font-[Space_Grotesk] text-2xl font-bold text-[var(--ink)]">
            {content.buildTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {content.principles.map((principle, index) => {
              const Icon = PRINCIPLE_ICONS[index];
              const color = PRINCIPLE_COLORS[index];
              return (
                <article
                  key={principle.title}
                  className="rounded-md border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_1px_0_var(--line-soft)]"
                >
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded border"
                    style={{ borderColor: color, color }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-[Space_Grotesk] text-xl font-bold text-[var(--ink)]">
                    {principle.title}
                  </h3>
                  <p className="text-[var(--ink-soft)]">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rounded-md border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_1px_0_var(--line-soft)]">
          <h2 className="mb-2 font-[Space_Grotesk] text-2xl font-bold text-[var(--ink)]">
            {content.lighthouseTitle}
          </h2>
          <p className="mb-6 text-[var(--ink-soft)]">
            {content.lighthouseDescription}
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {content.lighthouseLabels.map((label, index) => (
              <div
                key={label}
                className="rounded-md border border-[var(--line)] bg-[var(--paper-2)] p-4 text-center"
              >
                <div className="font-[Space_Grotesk] text-3xl font-bold text-[var(--ink)]">
                  {LIGHTHOUSE_VALUES[index]}
                </div>
                <div className="mt-1 font-[IBM_Plex_Mono] text-[11px] tracking-[0.08em] text-[var(--ink-soft)] uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-md border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_1px_0_var(--line-soft)]">
          <h2 className="mb-4 font-[Space_Grotesk] text-2xl font-bold text-[var(--ink)]">
            {content.stackTitle}
          </h2>
          <ul className="space-y-2 text-[var(--ink-soft)]">
            {content.stackItems.map((item) => (
              <li key={item} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
