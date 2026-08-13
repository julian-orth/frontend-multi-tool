"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/lib/contexts/locale-context";
import {
  type Locale,
  DEFAULT_LOCALE,
  switchLocalePath,
} from "@/lib/i18n/locale";

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale, setLocale, t } = useLocale();

  const toggleLocale = () => {
    const nextLocale: Locale = locale === "de" ? "en" : DEFAULT_LOCALE;
    setLocale(nextLocale);
    router.push(switchLocalePath(pathname, nextLocale));
  };

  const nextLabel = locale === "de" ? t("language.en") : t("language.de");

  return (
    <button
      onClick={toggleLocale}
      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[var(--line)] bg-[var(--card)] p-0 font-mono text-[6px] leading-none font-semibold tracking-[0.12em] text-[var(--ink)] shadow-[0_1px_0_var(--line-soft)] transition-all hover:bg-[var(--paper-2)] focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--paper)] focus:outline-none"
      aria-label={t("language.switchTo", { language: nextLabel })}
      title={t("language.switchTo", { language: nextLabel })}
    >
      {nextLabel}
    </button>
  );
}
