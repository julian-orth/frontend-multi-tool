import {
  Binary,
  Braces,
  Clock,
  FileCode,
  FileText,
  Fingerprint,
  KeyRound,
  Palette,
  QrCode,
  Regex,
  Shield,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Every value a tool config's `groupIcon` field can take (see
// app/tools/*/config.ts). Named imports keep the icon set tree-shakeable
// instead of bundling all of lucide-react's ~4,000 icons on every page.
const TOOL_ICONS: Record<string, LucideIcon> = {
  binary: Binary,
  braces: Braces,
  clock: Clock,
  "file-code": FileCode,
  "file-text": FileText,
  fingerprint: Fingerprint,
  "key-round": KeyRound,
  palette: Palette,
  "qr-code": QrCode,
  regex: Regex,
  shield: Shield,
  "shield-check": ShieldCheck,
};

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

export function resolveToolIcon(iconName?: string): LucideIcon {
  if (!iconName) return Zap;
  return TOOL_ICONS[iconName] || Zap;
}
