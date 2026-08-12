"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/site-config";
import { getToolById } from "@/lib/tools/registry";
import { useLocale } from "@/lib/contexts/locale-context";
import { localizeHref, stripLocalePrefix } from "@/lib/i18n/locale";
import { getLocalizedTool } from "@/lib/i18n/tools";

function toTitle(str: string) {
  // Special cases for acronyms
  const acronyms: Record<string, string> = {
    uuid: "UUID",
    guid: "GUID",
    json: "JSON",
    jwt: "JWT",
    url: "URL",
    api: "API",
    html: "HTML",
    css: "CSS",
    xml: "XML",
  };

  return str
    .split("-")
    .map((word) => {
      const lower = word.toLowerCase();
      return acronyms[lower] || word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export default function Breadcrumb() {
  const pathname = usePathname();
  const basePathname = stripLocalePrefix(pathname);
  const segments = basePathname.split("/").filter(Boolean);
  const { locale, t } = useLocale();

  // Build breadcrumb items
  let crumbs = [{ name: t("nav.home"), href: "/" }];

  // Check if we're on a tool page
  if (segments[0] === "tools" && segments[1]) {
    const tool = getToolById(segments[1]);
    const localizedTool = tool ? getLocalizedTool(tool, locale) : undefined;

    if (tool && localizedTool) {
      // Add Group > Tool Name without a /tools landing page
      crumbs.push(
        { name: `${tool.group} Tools`, href: "/" },
        { name: localizedTool.name, href: basePathname }
      );
    } else {
      // Fallback if tool not found in registry
      crumbs.push({ name: toTitle(segments[1]), href: basePathname });
    }
  } else {
    // Default behavior for non-tool pages
    crumbs = [
      { name: t("nav.home"), href: "/" },
      ...segments.map((seg, idx) => ({
        name: toTitle(seg),
        href: "/" + segments.slice(0, idx + 1).join("/"),
      })),
    ];
  }

  // Generate Schema.org BreadcrumbList structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_CONFIG.domain}${crumb.href}`,
    })),
  };

  return (
    <>
      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
          {crumbs.map((crumb, i) => (
            <li key={`${crumb.href}-${i}`} className="flex items-center">
              {i > 0 && (
                <span
                  className="px-2 text-gray-400 dark:text-gray-600"
                  aria-hidden="true"
                >
                  /
                </span>
              )}
              {i === crumbs.length - 1 ? (
                <span
                  className="font-medium text-gray-900 dark:text-gray-50"
                  aria-current="page"
                >
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={localizeHref(crumb.href, locale)}
                  className="rounded text-gray-600 hover:text-blue-600 hover:underline focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:text-gray-400 dark:hover:text-blue-400 dark:focus:ring-offset-gray-950"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
