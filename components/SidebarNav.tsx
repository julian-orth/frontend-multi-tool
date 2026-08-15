"use client";

import { TOOLS } from "@/lib/tools/registry";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Search, X } from "lucide-react";
import {
  GROUP_COLOR_CLASSES,
  resolveToolIcon,
} from "@/lib/tools/icon-resolver";
import {
  groupToolsBySimpleCategory,
  SIMPLE_GROUPS,
  type SimpleGroupKey,
} from "@/lib/tools/simple-groups";
import { useLocale } from "@/lib/contexts/locale-context";
import { localizeHref, stripLocalePrefix } from "@/lib/i18n/locale";
import { getLocalizedTool } from "@/lib/i18n/tools";
import { useFavorites } from "@/lib/contexts/favorites-context";
import { IconTooltip } from "@/components/icon-tooltip";

export function SidebarNav() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const basePathname = stripLocalePrefix(pathname);
  const { locale, t } = useLocale();
  const { isFavorite, toggleFavorite } = useFavorites();

  // Only show sidebar on tool pages (starting with /tools/)
  const isToolPage = basePathname.startsWith("/tools/");

  // Ctrl+K keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Ctrl+K (or Cmd+K on Mac)
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filtered = TOOLS.filter(
    (tool) =>
      tool.name.toLowerCase().includes(query.toLowerCase()) ||
      tool.description?.toLowerCase().includes(query.toLowerCase())
  );

  // Group tools with the same top-level categories used on the home page.
  const grouped = groupToolsBySimpleCategory(filtered);

  // Don't render sidebar if not on a tool page
  if (!isToolPage) {
    return null;
  }

  return (
    <nav
      className="fixed top-0 left-0 z-40 hidden h-full w-72 flex-shrink-0 border-r border-gray-200 bg-white md:block dark:border-gray-800 dark:bg-gray-950"
      aria-label="Main navigation"
    >
      <div className="flex h-full flex-col">
        <div className="relative flex items-center border-b border-gray-200/50 px-6 py-4 dark:border-gray-800/50">
          <label htmlFor="sidebar-search" className="sr-only">
            Search tools
          </label>
          <Search
            className="pointer-events-none absolute left-9 h-4 w-4 text-gray-400"
            aria-hidden="true"
          />
          <input
            id="sidebar-search"
            ref={inputRef}
            type="search"
            placeholder={t("sidebar.searchPlaceholder", {
              count: TOOLS.length,
            })}
            className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pr-10 pl-10 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-400 [&::-webkit-search-cancel-button]:hidden"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="absolute right-8 h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
              aria-label={t("sidebar.clearSearch")}
              title={t("sidebar.clearSearch")}
            >
              <X className="h-4 w-4" />
            </button>
          ) : (
            <kbd className="pointer-events-none absolute right-8 flex items-center gap-0.5 rounded border border-gray-300 bg-white px-1.5 py-0.5 font-mono text-xs font-semibold text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
              <span className="text-base leading-none">⌘</span>
              <span className="leading-none">K</span>
            </kbd>
          )}
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-3 pb-3">
          {filtered.length === 0 && (
            <div className="px-3 py-2 text-gray-400 dark:text-gray-600">
              {t("sidebar.noToolsFound")}
            </div>
          )}
          <div className="space-y-4">
            {(Object.keys(SIMPLE_GROUPS) as SimpleGroupKey[]).map(
              (groupKey) => {
                const tools = grouped[groupKey];

                if (tools.length === 0) {
                  return null;
                }

                return (
                  <div key={groupKey}>
                    <div className="mb-1 flex items-center justify-between px-2">
                      <h2 className="text-[10px] font-bold tracking-[0.12em] text-gray-500 uppercase dark:text-gray-400">
                        {t(`categories.${groupKey}.label`)}
                      </h2>
                      <span className="text-[10px] text-gray-400 dark:text-gray-500">
                        {tools.length}
                      </span>
                    </div>
                    <ul className="space-y-0.5">
                      {tools.map((tool) => {
                        const localizedTool = getLocalizedTool(tool, locale);
                        const Icon = resolveToolIcon(tool.groupIcon);
                        const badgeColor =
                          GROUP_COLOR_CLASSES[tool.groupColor] ||
                          GROUP_COLOR_CLASSES.blue;
                        const localizedHref = localizeHref(tool.href, locale);
                        const isActive = basePathname === tool.href;
                        const isToolFavorite = isFavorite(tool.id);
                        const favoriteLabel = t(
                          isToolFavorite ? "favorites.remove" : "favorites.add",
                          { name: localizedTool.name }
                        );
                        return (
                          <li key={tool.id}>
                            <div className="group flex items-center">
                              <Link
                                href={localizedHref}
                                className={`flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-950 ${
                                  isActive
                                    ? "bg-blue-50 font-medium text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                                    : "text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                                }`}
                                aria-label={t("mobile.openTool", {
                                  name: localizedTool.name,
                                })}
                                aria-current={isActive ? "page" : undefined}
                              >
                                <span
                                  className={`rounded-full p-1.5 ${badgeColor}`}
                                >
                                  <Icon
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                  />
                                </span>
                                <span className="truncate">
                                  {localizedTool.name}
                                </span>
                              </Link>
                              <IconTooltip
                                label={favoriteLabel}
                                align="end"
                                className="ml-1"
                              >
                                <button
                                  type="button"
                                  onClick={() => toggleFavorite(tool.id)}
                                  className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-gray-400 opacity-0 transition-colors group-hover:opacity-100 hover:bg-gray-100 hover:text-red-500 focus:opacity-100 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-400"
                                  aria-label={favoriteLabel}
                                >
                                  <Heart
                                    className={`h-4 w-4 ${
                                      isToolFavorite
                                        ? "fill-current text-red-500 dark:text-red-400"
                                        : ""
                                    }`}
                                    aria-hidden="true"
                                  />
                                </button>
                              </IconTooltip>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SidebarNav;
