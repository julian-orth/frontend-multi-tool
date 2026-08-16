"use client";

import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import { useLocale } from "@/lib/contexts/locale-context";
import { IconTooltip } from "@/components/icon-tooltip";
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
  const tooltipLabel = t("language.switchTo", { language: nextLabel });

  return (
    <IconTooltip label={tooltipLabel} side="right">
      <button
        type="button"
        onClick={toggleLocale}
        className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-[var(--ink)] transition-all hover:border hover:border-[var(--line)] hover:bg-[var(--paper-2)] hover:shadow-[0_1px_0_var(--line-soft)] focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--paper)] focus:outline-none"
        aria-label={tooltipLabel}
      >
        <Languages className="h-4 w-4" aria-hidden="true" />
      </button>
    </IconTooltip>
  );
}
