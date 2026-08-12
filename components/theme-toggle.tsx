"use client";

import { useTheme } from "@/lib/contexts/theme-context";
import { useLocale } from "@/lib/contexts/locale-context";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { toggleTheme, isTransitioning } = useTheme();
  const { t } = useLocale();

  return (
    <button
      onClick={toggleTheme}
      disabled={isTransitioning}
      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[var(--line)] bg-[var(--card)] text-[var(--ink)] shadow-[0_1px_0_var(--line-soft)] transition-all hover:bg-[var(--paper-2)] focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--paper)] focus:outline-none"
      aria-label={t("theme.toggle")}
      title={t("theme.toggle")}
    >
      <Sun className="hidden h-5 w-5 dark:block" aria-hidden="true" />
      <Moon className="h-5 w-5 dark:hidden" aria-hidden="true" />
    </button>
  );
}
