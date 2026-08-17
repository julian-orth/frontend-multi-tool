import type { ToolGroup } from "@/lib/types/tool";
import type { Locale } from "@/lib/i18n/locale";

// Distinct from lib/tools/simple-groups.ts, which buckets these 14 groups into
// 3 coarse categories for the home page search UI. This map keeps the
// original fine-grained group name (used in breadcrumbs and the favorites
// menu) localized 1:1.
export const TOOL_GROUP_LABELS = {
  JSON: { en: "JSON", de: "JSON" },
  UUID: { en: "UUID", de: "UUID" },
  Encoding: { en: "Encoding", de: "Encoding" },
  Regex: { en: "Regex", de: "Regex" },
  Color: { en: "Color", de: "Farbe" },
  Text: { en: "Text", de: "Text" },
  Time: { en: "Time", de: "Zeit" },
  JWT: { en: "JWT", de: "JWT" },
  CSS: { en: "CSS", de: "CSS" },
  HTML: { en: "HTML", de: "HTML" },
  Image: { en: "Image", de: "Bild" },
  Network: { en: "Network", de: "Netzwerk" },
  Security: { en: "Security", de: "Sicherheit" },
  Data: { en: "Data", de: "Daten" },
} satisfies Record<ToolGroup, Record<Locale, string>>;

export function getLocalizedToolGroup(group: ToolGroup, locale: Locale): string {
  return TOOL_GROUP_LABELS[group][locale];
}
