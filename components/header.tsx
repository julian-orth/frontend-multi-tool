"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Heart, Info, PocketKnife, Trash2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNavButton } from "@/components/MobileNav";
import { LanguageToggle } from "@/components/language-toggle";
import { useLocale } from "@/lib/contexts/locale-context";
import { localizeHref, stripLocalePrefix } from "@/lib/i18n/locale";
import { TOOLS } from "@/lib/tools/registry";
import { getLocalizedTool } from "@/lib/i18n/tools";
import {
  GROUP_COLOR_CLASSES,
  resolveToolIcon,
} from "@/lib/tools/icon-resolver";
import { useFavorites } from "@/lib/contexts/favorites-context";
import { IconTooltip } from "@/components/icon-tooltip";

export function Header() {
  const pathname = usePathname();
  const basePathname = stripLocalePrefix(pathname);
  const isToolPage = basePathname.startsWith("/tools/");
  const { locale, t } = useLocale();
  const { favoriteToolIds, clearFavorites } = useFavorites();
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const favoriteTools = TOOLS.filter((tool) =>
    favoriteToolIds.includes(tool.id)
  );

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (basePathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b border-[var(--line)] bg-[var(--card)]/95 backdrop-blur-sm transition-all ${isToolPage ? "md:left-72 md:w-[calc(100%-18rem)]" : ""}`}
    >
      <div
        className={`mx-auto flex items-center justify-between px-4 py-4 sm:px-6 ${isToolPage ? "max-w-full" : "max-w-7xl"}`}
      >
        <Link
          href={localizeHref("/", locale)}
          onClick={handleLogoClick}
          className="group flex items-center gap-3 transition-opacity hover:opacity-80"
          aria-label={t("nav.home")}
        >
          <span className="rounded-full bg-red-100 p-2 dark:bg-red-900/30">
            <PocketKnife
              className="h-6 w-6 text-red-700 dark:text-red-400"
              aria-hidden="true"
            />
          </span>
          <span className="text-xl font-bold tracking-tight text-[var(--ink)]">
            {t("site.name")}
          </span>
        </Link>

        <div className="flex items-center gap-2 md:gap-3">
          <MobileNavButton />

          <IconTooltip label={t("nav.aboutTooltip")}>
            <Link
              href={localizeHref("/about", locale)}
              aria-label={t("nav.about")}
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[var(--line)] bg-[var(--card)] text-[var(--ink)] shadow-[0_1px_0_var(--line-soft)] transition-all hover:bg-[var(--paper-2)] focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--paper)] focus:outline-none"
            >
              <Info className="h-4 w-4" aria-hidden="true" />
            </Link>
          </IconTooltip>

          <div className="group relative">
            <button
              type="button"
              onClick={() => setIsFavoritesOpen((isOpen) => !isOpen)}
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[var(--line)] bg-[var(--card)] text-[var(--ink)] shadow-[0_1px_0_var(--line-soft)] transition-all hover:bg-[var(--paper-2)] focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--paper)] focus:outline-none"
              aria-label={t("favorites.open")}
              aria-expanded={isFavoritesOpen}
              aria-controls="favorite-tools-menu"
            >
              <Heart
                className={`h-4 w-4 ${
                  favoriteTools.length > 0
                    ? "fill-current text-red-500 dark:text-red-400"
                    : ""
                }`}
                aria-hidden="true"
              />
              {favoriteTools.length > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex min-w-4 items-center justify-center rounded-full border-2 border-[var(--card)] bg-red-600 px-1 text-[10px] leading-4 font-bold text-white dark:bg-red-500">
                  {favoriteTools.length > 99 ? "99+" : favoriteTools.length}
                </span>
              )}
            </button>
            {!isFavoritesOpen && (
              <span className="pointer-events-none absolute top-full left-1/2 z-50 mt-2 -translate-x-1/2 translate-y-1 border border-[var(--line)] bg-[var(--card)] px-2 py-1 text-xs font-medium whitespace-nowrap text-[var(--ink)] opacity-0 shadow-md transition-all duration-200 ease-out group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100">
                {t("favorites.open")}
              </span>
            )}

            {isFavoritesOpen && (
              <div
                id="favorite-tools-menu"
                className="absolute top-11 right-0 z-50 w-80 overflow-hidden border border-[var(--line)] bg-[var(--card)] shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--paper-2)] px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400">
                      <Heart
                        className="h-3.5 w-3.5 fill-current"
                        aria-hidden="true"
                      />
                    </span>
                    <p className="text-sm font-semibold text-[var(--ink)]">
                      {t("favorites.title")}
                    </p>
                  </div>
                  <span className="rounded-full border border-[var(--line)] bg-[var(--card)] px-2 py-0.5 text-xs font-semibold text-[var(--ink)]">
                    {favoriteTools.length}
                  </span>
                </div>
                {favoriteTools.length > 0 ? (
                  <>
                    <ul className="max-h-80 space-y-1 overflow-y-auto p-2">
                      {favoriteTools.map((tool) => {
                        const localizedTool = getLocalizedTool(tool, locale);
                        const Icon = resolveToolIcon(tool.groupIcon);
                        const badgeColor =
                          GROUP_COLOR_CLASSES[tool.groupColor] ||
                          GROUP_COLOR_CLASSES.blue;

                        return (
                          <li key={tool.id}>
                            <Link
                              href={localizeHref(tool.href, locale)}
                              onClick={() => setIsFavoritesOpen(false)}
                              className="group flex items-center gap-3 rounded-md border border-transparent px-2 py-2.5 text-[var(--ink)] transition-all hover:border-[var(--line)] hover:bg-[var(--paper-2)] focus:ring-2 focus:ring-[var(--focus)] focus:outline-none"
                            >
                              <span
                                className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${badgeColor}`}
                              >
                                <Icon className="h-4 w-4" aria-hidden="true" />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="flex items-center justify-between gap-3">
                                  <span className="truncate text-sm font-semibold">
                                    {localizedTool.name}
                                  </span>
                                  <span className="shrink-0 text-[10px] font-medium tracking-[0.08em] text-[var(--ink-soft)] uppercase">
                                    {tool.group}
                                  </span>
                                </span>
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="border-t border-[var(--line)] bg-[var(--paper-2)] p-2">
                      <button
                        type="button"
                        onClick={clearFavorites}
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-xs font-semibold text-red-700 transition-colors hover:bg-red-100 focus:ring-2 focus:ring-[var(--focus)] focus:outline-none dark:text-red-300 dark:hover:bg-red-950/40"
                      >
                        <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                        {t("favorites.clearAll")}
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="px-3 py-3 text-sm text-[var(--ink-soft)]">
                    {t("favorites.empty")}
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
