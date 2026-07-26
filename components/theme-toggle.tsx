"use client";

import { useTheme } from "@/lib/contexts/theme-context";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer rounded-md border border-[var(--line)] bg-[var(--card)] p-2 text-[var(--ink)] shadow-[0_1px_0_var(--line-soft)] transition-all hover:bg-[var(--paper-2)] focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--paper)] focus:outline-none"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <Sun className="hidden h-5 w-5 dark:block" aria-hidden="true" />
      <Moon className="h-5 w-5 dark:hidden" aria-hidden="true" />
    </button>
  );
}
