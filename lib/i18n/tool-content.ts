import type { Locale } from "@/lib/i18n/locale";

/**
 * Shared shape for the static SEO/content block every tool page renders below
 * its interactive UI. Each tool's `content.ts` exports
 * `pageContent: Record<Locale, ToolPageContent>`, so a missing or mistyped
 * field in either locale is a build-time TypeScript error, not a runtime gap.
 */
export interface ToolPageContent {
  /** <title> and JSON-LD `name` */
  title: string;
  /** <meta description> and JSON-LD `description` */
  metaDescription: string;
  /** SEO keywords for <meta> and JSON-LD */
  keywords: string[];
  /** Visible <h1> (may differ slightly from `title`) */
  h1: string;
  /** Short intro paragraph under the h1 */
  intro: string;
  /** Compact bullet list replacing the old multi-section SEO prose */
  keyFacts: string[];
  /** 3-4 highest-value FAQ pairs */
  faq: { question: string; answer: string }[];
  /**
   * Per-tool blurb for each related-tool card, keyed by the OTHER tool's id.
   * The related tool's own name/description come from getLocalizedTool();
   * this only holds the relationship-specific sentence
   * (e.g. "Format JSON before comparing it for a cleaner diff").
   * IDs should match the tool's own config.ts `relatedTools` array.
   */
  relatedToolsBlurb: Record<string, string>;
}

export type LocalizedToolPageContent = Record<Locale, ToolPageContent>;
