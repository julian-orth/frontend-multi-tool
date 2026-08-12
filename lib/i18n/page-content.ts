import type { Locale } from "@/lib/i18n/locale";
import dePages from "@/public/locales/pages.de.json";
import enPages from "@/public/locales/pages.en.json";

const PAGE_CONTENT = {
  de: dePages,
  en: enPages,
} as const;

export function getPageContent(locale: Locale) {
  return PAGE_CONTENT[locale];
}
