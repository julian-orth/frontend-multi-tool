"use client";

import { useTheme } from "@/lib/contexts/theme-context";
import { useLocale } from "@/lib/contexts/locale-context";
import { IconTooltip } from "@/components/icon-tooltip";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const { t } = useLocale();
  const isDark = theme === "dark";
  const tooltipLabel = t("theme.toggle");

  return (
    <IconTooltip label={tooltipLabel} side="right">
      <button
        type="button"
        onClick={toggleTheme}
        disabled={isTransitioning}
        className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-[var(--ink)] transition-all hover:border hover:border-[var(--line)] hover:bg-[var(--paper-2)] hover:shadow-[0_1px_0_var(--line-soft)] focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--paper)] focus:outline-none"
        aria-label={tooltipLabel}
      >
        <span className="relative flex h-4 w-4 items-center justify-center">
          <Sun
            className={`absolute h-4 w-4 transition-all duration-200 ${
              isDark ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
            aria-hidden="true"
          />
          <Moon
            className={`absolute h-4 w-4 transition-all duration-200 ${
              isDark ? "scale-75 opacity-0" : "scale-100 opacity-100"
            }`}
            aria-hidden="true"
          />
        </span>
      </button>
    </IconTooltip>
  );
}
