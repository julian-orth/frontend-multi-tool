import type { Tool } from "@/lib/types/tool";
import type { Locale } from "@/lib/i18n/locale";
import deTools from "@/public/locales/tools.de.json";
import enTools from "@/public/locales/tools.en.json";

const TOOL_TEXTS = {
  de: deTools,
  en: enTools,
} as const;

type ToolTextEntry = {
  name?: string;
  description?: string;
};

export function getLocalizedTool(tool: Tool, locale: Locale): Tool {
  const entry = (TOOL_TEXTS[locale] as Record<string, ToolTextEntry>)[tool.id];

  if (!entry) {
    return tool;
  }

  return {
    ...tool,
    name: entry.name ?? tool.name,
    description: entry.description ?? tool.description,
  };
}

export function getLocalizedTools(tools: Tool[], locale: Locale): Tool[] {
  return tools.map((tool) => getLocalizedTool(tool, locale));
}
