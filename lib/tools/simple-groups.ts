import type { Tool, ToolGroup } from "@/lib/types/tool";

export type SimpleGroupKey = "ESSENTIALS" | "DESIGN" | "CONTENT";

export const SIMPLE_GROUPS: Record<
  SimpleGroupKey,
  { label: string; color: string; description: string }
> = {
  ESSENTIALS: {
    label: "Core Tools",
    color: "#B5652C",
    description: "Encode, validate, inspect, and debug development data.",
  },
  DESIGN: {
    label: "UI & Color",
    color: "#3D5A99",
    description: "Design helpers for color, CSS, and visual output.",
  },
  CONTENT: {
    label: "Text & Content",
    color: "#2E6B5E",
    description: "Write, format, compare, and transform content quickly.",
  },
};

const GROUP_TO_SIMPLE: Partial<Record<ToolGroup, SimpleGroupKey>> = {
  Encoding: "ESSENTIALS",
  UUID: "ESSENTIALS",
  Regex: "ESSENTIALS",
  JWT: "ESSENTIALS",
  Security: "ESSENTIALS",
  Time: "ESSENTIALS",
  JSON: "ESSENTIALS",
  Data: "ESSENTIALS",
  Network: "ESSENTIALS",
  Color: "DESIGN",
  CSS: "DESIGN",
  Image: "DESIGN",
  Text: "CONTENT",
  HTML: "CONTENT",
};

export function mapToolGroupToSimple(group: ToolGroup): SimpleGroupKey {
  return GROUP_TO_SIMPLE[group] ?? "ESSENTIALS";
}

export function groupToolsBySimpleCategory(
  tools: Tool[]
): Record<SimpleGroupKey, Tool[]> {
  const grouped: Record<SimpleGroupKey, Tool[]> = {
    ESSENTIALS: [],
    DESIGN: [],
    CONTENT: [],
  };

  for (const tool of tools) {
    grouped[mapToolGroupToSimple(tool.group)].push(tool);
  }

  return grouped;
}
