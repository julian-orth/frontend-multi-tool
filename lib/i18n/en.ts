/**
 * Site Content and Configuration
 *
 * IMPORTANT: TOOLS has moved to lib/tools/registry.ts
 * Import from there for better maintainability:
 * import { TOOLS } from "@/lib/tools/registry"
 */

export const SITE_NAME = "DeveloperUtilityTools";
export const SITE_DESCRIPTION =
  "Free online developer utilities and tools for everyday coding tasks";

/**
 * @deprecated Import from @/lib/tools/registry instead
 * This export maintained for backward compatibility
 */
export { TOOLS } from "@/lib/tools/registry";

export const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Tools", href: "/tools" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
