import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const GROUP_COLOR_CLASSES: Record<string, string> = {
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  purple:
    "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  orange:
    "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  pink: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
  red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  indigo:
    "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
  cyan: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400",
  teal: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400",
  yellow:
    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
};

function toPascalCaseIconName(iconName: string): string {
  return iconName
    .replace(/-([a-z])/g, (_, char) => char.toUpperCase())
    .replace(/^\w/, (char) => char.toUpperCase());
}

export function resolveToolIcon(iconName?: string): LucideIcon {
  const fallback = LucideIcons.Zap;
  if (!iconName) return fallback;

  const normalizedName = toPascalCaseIconName(iconName);
  const icon =
    (LucideIcons as unknown as Record<string, LucideIcon | undefined>)[
      normalizedName
    ];
  return icon || fallback;
}
