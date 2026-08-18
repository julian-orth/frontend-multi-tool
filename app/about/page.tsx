import type { Metadata } from "next";
import { Code2, Compass, Gauge, SearchCheck, Sparkles } from "lucide-react";
import { TOOLS } from "@/lib/tools/registry";
import { SITE_CONFIG } from "@/lib/site-config";
import { getServerLocale } from "@/lib/i18n/server";
import { getPageContent } from "@/lib/i18n/page-content";

const PRINCIPLE_ICONS = [Compass, SearchCheck, Sparkles] as const;
const PRINCIPLE_COLORS = ["#9f3f38", "#777774", "#c2766f"] as const;
const TECH_ICONS = [Code2, Gauge] as const;

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
      images: ["/images/og-image.png"],
    },
    twitter: {
      card: "summary",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: ["/images/og-image.png"],
    },
    alternates: {
      canonical: `${SITE_CONFIG.domain}${path}`,
      languages: {
        de: `${SITE_CONFIG.domain}/about`,
        en: `${SITE_CONFIG.domain}/en/about`,
      },
    },
  };
}

export default async function AboutPage() {
  const locale = await getServerLocale();
  const content = getPageContent(locale).about;

  const stats = [
    { label: content.toolsLabel, value: String(TOOLS.length) },
    { label: content.clientSideLabel, value: "100%" },
  ];

  return (
    <div className="about-stage">
      <div className="about-shell">
        <div className="about-intro">
          <span className="about-kicker">{content.badge}</span>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
          <div className="about-author">
            <span>{content.authorLabel}</span>
            <a href="https://julianorth.de" target="_blank" rel="noreferrer">
              {content.authorName} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <section className="about-stats" aria-label={content.title}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="about-statement">
          <span className="about-statement-mark" aria-hidden="true">
            {"//"}
          </span>
          <div>
            <h2>{content.portfolioTitle}</h2>
            <p>{content.portfolioText}</p>
          </div>
        </section>

        <section className="about-focus">
          <h2>{content.focusTitle}</h2>
          <div>
            {content.principles.map((principle, index) => {
              const Icon = PRINCIPLE_ICONS[index];
              const color = PRINCIPLE_COLORS[index];
              return (
                <article key={principle.title}>
                  <div
                    className="about-focus-icon"
                    style={{ borderColor: color, color }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="about-technical">
          <div className="about-section-heading">
            <span>{"// 01"}</span>
            <h2>{content.technicalTitle}</h2>
          </div>
          <p className="about-section-intro">{content.technicalIntro}</p>
          <div className="about-technical-grid">
            {content.technicalItems.map((item, index) => {
              const Icon = TECH_ICONS[index];
              return (
                <article key={item.title}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="about-quality">
          <div className="about-section-heading">
            <span>{"// 02"}</span>
            <h2>{content.qualityTitle}</h2>
          </div>
          <p className="about-section-intro">{content.qualityIntro}</p>
          <div className="about-quality-grid">
            {content.qualityMetrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
