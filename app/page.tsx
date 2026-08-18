import type { Metadata } from "next";
import { HomeClient } from "@/components/home-client";
import { getServerLocale } from "@/lib/i18n/server";
import { SITE_CONFIG } from "@/lib/site-config";
import de from "@/public/locales/de.json";
import en from "@/public/locales/en.json";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const translations = locale === "en" ? en : de;
  const path = locale === "en" ? "/en" : "/";
  const title =
    locale === "en"
      ? "Privacy-First Developer Tools"
      : "Datenschutzfreundliche Entwickler-Tools";
  const url = `${SITE_CONFIG.domain}${path}`;

  return {
    title,
    description: translations.home.intro,
    alternates: {
      canonical: url,
      languages: {
        de: SITE_CONFIG.domain,
        en: `${SITE_CONFIG.domain}/en`,
      },
    },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description: translations.home.intro,
      url,
      siteName: SITE_CONFIG.name,
      locale: locale === "en" ? "en_US" : "de_DE",
      type: "website",
      images: ["/images/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description: translations.home.intro,
      images: ["/images/og-image.png"],
    },
  };
}

export default function HomePage() {
  return <HomeClient />;
}
