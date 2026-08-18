/**
 * Central site configuration
 * Single source of truth for all branding and URLs
 */

// Resolution order: an explicit override (set this once a custom domain is
// connected), then Vercel's own production-domain system variable (already
// correct on every Vercel deployment with no config needed), then a local
// fallback for running the build outside Vercel.
const domain =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://developerutilitytools.com");

export const SITE_CONFIG = {
  name: "Frontend Multitool",
  domain,
  description:
    "Free online developer utilities and tools for everyday coding tasks. All tools run client-side ensuring your data never leaves your browser.",
  tagline: "Privacy-First Developer Tools",
} as const;

// Helper functions for consistent URL generation
export function getToolUrl(toolId: string): string {
  return `${SITE_CONFIG.domain}/tools/${toolId}`;
}
