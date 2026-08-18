/**
 * Tool Configuration Type System
 *
 * Defines the structure for tool metadata, validation schemas,
 * and configuration. This ensures consistency across all tools.
 */

import { LucideIcon } from "lucide-react";
import type { Metadata } from "next";

/**
 * Tool group color options
 * Must match Tailwind color classes defined in GROUP_COLORS
 */
export type ToolGroupColor =
  | "blue"
  | "purple"
  | "green"
  | "orange"
  | "pink"
  | "red"
  | "indigo"
  | "cyan"
  | "teal"
  | "yellow";

/**
 * Tool category/group
 * Logical grouping for related tools in navigation
 */
export type ToolGroup =
  | "JSON"
  | "UUID"
  | "Encoding"
  | "Regex"
  | "Color"
  | "Text"
  | "Time"
  | "JWT"
  | "CSS"
  | "HTML"
  | "Image"
  | "Network"
  | "Security"
  | "Data";

/**
 * Tool status for development tracking
 */
export type ToolStatus = "stable" | "beta" | "alpha" | "planned" | "deprecated";

/**
 * Core tool metadata definition
 * This is what powers the sidebar, homepage, and navigation
 */
export interface Tool {
  /** Unique identifier (kebab-case, matches route) */
  id: string;

  /** Display name shown in UI */
  name: string;

  /** Short description (150-160 chars optimal for SEO) */
  description: string;

  /** Route path (must start with /tools/) */
  href: string;

  /** Tool group for categorization */
  group: ToolGroup;

  /** Color theme for the tool badge/icon */
  groupColor: ToolGroupColor;

  /** Lucide icon name (kebab-case) */
  groupIcon: string;

  /** Tool status (optional, defaults to 'stable') */
  status?: ToolStatus;

  /** Keywords for search/SEO (optional) */
  keywords?: string[];

  /** Alternative names/aliases for search (optional) */
  aliases?: string[];

  /** Related tool IDs for cross-linking (optional) */
  relatedTools?: string[];
}

/**
 * Tool configuration that lives in each tool's folder
 * Extends Tool with additional metadata
 */
export interface ToolConfig extends Tool {
  /** Next.js metadata for the tool page */
  metadata: Metadata;

  /** Long-form description for tool page (optional) */
  longDescription?: string;

  /** Feature list for marketing/SEO (optional) */
  features?: string[];

  /** Common use cases for SEO content (optional) */
  useCases?: Array<{
    title: string;
    description: string;
  }>;

  /** FAQ items for SEO (optional) */
  faq?: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * Validation result for tool configuration
 */
export interface ToolValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  toolId: string;
}
