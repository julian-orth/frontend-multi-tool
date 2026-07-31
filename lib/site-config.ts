/**
 * Central site configuration
 * Single source of truth for all branding and URLs
 */

export const SITE_CONFIG = {
  name: "Frontend Multitool",
  domain: "https://developerutilitytools.com",
  description:
    "Free online developer utilities and tools for everyday coding tasks. All tools run client-side ensuring your data never leaves your browser.",
  tagline: "Privacy-First Developer Tools",
} as const;

// Helper functions for consistent URL generation
export function getToolUrl(toolId: string): string {
  return `${SITE_CONFIG.domain}/tools/${toolId}`;
}

export function getAboutUrl(): string {
  return `${SITE_CONFIG.domain}/about`;
}
