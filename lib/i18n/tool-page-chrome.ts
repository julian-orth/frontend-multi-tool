import type { Locale } from "@/lib/i18n/locale";
import de from "@/public/locales/de.json";
import en from "@/public/locales/en.json";

const DICT = { de, en };

/** Structural headings shared by every tool page (not tool-specific content). */
export function getToolPageChrome(locale: Locale) {
  return DICT[locale].toolPage;
}
