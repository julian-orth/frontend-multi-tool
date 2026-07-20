/**
 * Tool Registry
 *
 * Source of truth is per-tool config files under app/tools/<tool-id>/config.ts.
 * This module only aggregates and provides helper utilities.
 */

import { TOOL_CONFIGS } from "@/app/tools/tool-configs";
import type { Tool } from "@/lib/types/tool";

export const TOOL_REGISTRY: Tool[] = TOOL_CONFIGS;

/**
 * Get a tool by ID
 */
export function getToolById(id: string): Tool | undefined {
  return TOOL_REGISTRY.find((tool) => tool.id === id);
}

/**
 * Get tools by group
 */
export function getToolsByGroup(group: string): Tool[] {
  return TOOL_REGISTRY.filter((tool) => tool.group === group);
}

/**
 * Get all unique groups
 */
export function getAllGroups(): string[] {
  const groups = new Set(TOOL_REGISTRY.map((tool) => tool.group));
  return Array.from(groups).sort();
}

/**
 * Search tools by query (name, description, keywords)
 */
export function searchTools(query: string): Tool[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return TOOL_REGISTRY;

  return TOOL_REGISTRY.filter((tool) => {
    const searchText = [
      tool.name,
      tool.description,
      ...(tool.keywords || []),
      ...(tool.aliases || []),
    ]
      .join(" ")
      .toLowerCase();

    return searchText.includes(lowerQuery);
  });
}

/**
 * Get related tools for a tool ID
 */
export function getRelatedTools(toolId: string): Tool[] {
  const tool = getToolById(toolId);
  if (!tool?.relatedTools) return [];

  return tool.relatedTools
    .map((id) => getToolById(id))
    .filter((t): t is Tool => t !== undefined);
}

/**
 * Backward compatibility export
 */
export const TOOLS = TOOL_REGISTRY;
