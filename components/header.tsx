"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Heart, Home, Info, PocketKnife, Trash2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { ToolQuickSwitch } from "@/components/tool-quick-switch";
import { useLocale } from "@/lib/contexts/locale-context";
import { localizeHref, stripLocalePrefix } from "@/lib/i18n/locale";
import { TOOLS } from "@/lib/tools/registry";
import { getLocalizedTool } from "@/lib/i18n/tools";
import { getLocalizedToolGroup } from "@/lib/i18n/tool-groups";
import {
  GROUP_COLOR_CLASSES,
  resolveToolIcon,
} from "@/lib/tools/icon-resolver";
import { useFavorites } from "@/lib/contexts/favorites-context";
import { IconTooltip } from "@/components/icon-tooltip";

export function Header() {
  const pathname = usePathname();
  const basePathname = stripLocalePrefix(pathname);
  const { locale, t } = useLocale();
  const { favoriteToolIds, clearFavorites } = useFavorites();
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const favoritesRef = useRef<HTMLDivElement>(null);
  const favoriteTools = TOOLS.filter((tool) =>
    favoriteToolIds.includes(tool.id)
  );

  useEffect(() => {
    if (!isFavoritesOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!favoritesRef.current?.contains(event.target as Node)) {
        setIsFavoritesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsFavoritesOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFavoritesOpen]);

  // Hover-based tooltips never appear on touch devices, so tapping a nav
  // icon instead flashes its label centered above the bottom bar.
  const [tapLabel, setTapLabel] = useState<string | null>(null);
  const tapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleHeaderClick = (event: React.MouseEvent<HTMLElement>) => {
    const labeled = (event.target as HTMLElement).closest("[aria-label]");
    if (!labeled || labeled.hasAttribute("data-suppress-tap-tooltip")) return;
    // Some buttons (e.g. the language toggle) already changed state by the
    // time this fires, so they can supply a confirmation string instead of
    // reusing their aria-label, which describes the now-completed action.
    const label =
      labeled.getAttribute("data-tap-label") ??
      labeled.getAttribute("aria-label");
    if (!label) return;

    if (tapTimeoutRef.current) clearTimeout(tapTimeoutRef.current);
    setTapLabel(label);
    tapTimeoutRef.current = setTimeout(() => setTapLabel(null), 1300);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (basePathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const railButtonClasses =
    "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-[var(--ink)] transition-all hover:border hover:border-[var(--line)] hover:bg-[var(--paper-2)] hover:shadow-[0_1px_0_var(--line-soft)] focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--paper)] focus:outline-none";

  return (
    <header
      onClick={handleHeaderClick}
      className="fixed inset-x-0 bottom-0 z-50 flex h-16 w-full max-w-full flex-row items-center gap-1 overflow-x-hidden border-t border-[var(--line)] bg-[var(--card)] px-2 py-2 md:inset-x-auto md:top-0 md:bottom-auto md:left-0 md:h-full md:w-16 md:flex-col md:gap-0 md:overflow-x-visible md:border-t-0 md:border-r md:px-0 md:py-4"
    >
      <nav aria-label={t("nav.primary")} className="contents">
        <IconTooltip label={t("site.name")} side="right">
          <Link
            href={localizeHref("/", locale)}
            onClick={handleLogoClick}
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-red-100 p-2.5 transition-opacity hover:opacity-80 dark:bg-red-900/30"
            aria-label={t("site.name")}
          >
            <PocketKnife
              className="h-6 w-6 text-red-700 dark:text-red-400"
              aria-hidden="true"
            />
          </Link>
        </IconTooltip>

        <div className="mx-1 h-8 w-px shrink-0 bg-[var(--line)] md:mx-0 md:mt-4 md:h-px md:w-8" />

        <div className="contents md:mt-4 md:flex md:flex-col md:items-center md:gap-2">
          <div className="flex flex-1 items-center justify-center md:flex-none">
            <IconTooltip label={t("nav.home")} side="right">
              <Link
                href={localizeHref("/", locale)}
                onClick={handleLogoClick}
                aria-label={t("nav.home")}
                className={`${railButtonClasses} ${basePathname === "/" ? "bg-[var(--paper-2)]" : ""}`}
              >
                <Home className="h-5 w-5" aria-hidden="true" />
              </Link>
            </IconTooltip>
          </div>
          <div className="flex flex-1 items-center justify-center md:flex-none">
            <ToolQuickSwitch />
          </div>
          <div
            ref={favoritesRef}
            className="relative flex flex-1 items-center justify-center md:flex-none"
          >
            <IconTooltip label={t("favorites.open")} side="right">
              <button
                type="button"
                onClick={() => setIsFavoritesOpen((isOpen) => !isOpen)}
                className={`relative ${railButtonClasses} ${
                  isFavoritesOpen
                    ? "border border-[var(--line)] bg-[var(--paper-2)]"
                    : ""
                }`}
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
            </IconTooltip>

            {isFavoritesOpen && (
              <div
                id="favorite-tools-menu"
                className="fixed inset-x-4 bottom-20 z-50 overflow-hidden border border-[var(--line)] bg-[var(--card)] shadow-xl md:absolute md:inset-x-auto md:top-0 md:bottom-auto md:left-full md:ml-2 md:w-80"
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
                                    {getLocalizedToolGroup(tool.group, locale)}
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
        </div>

        <div className="hidden md:block md:flex-1" />

        <div className="mx-1 h-8 w-px shrink-0 bg-[var(--line)] md:mx-0 md:mb-2 md:h-px md:w-8" />

        <div className="contents md:flex md:flex-col md:items-center md:gap-2">
          <div className="flex flex-1 items-center justify-center md:flex-none">
            <LanguageToggle />
          </div>
          <div className="flex flex-1 items-center justify-center md:flex-none">
            <ThemeToggle />
          </div>

          <div className="flex flex-1 items-center justify-center md:flex-none">
            <IconTooltip label={t("nav.aboutTooltip")} side="right">
              <Link
                href={localizeHref("/about", locale)}
                aria-label={t("nav.about")}
                data-tap-label={t("nav.aboutTooltip")}
                className={railButtonClasses}
              >
                <Info className="h-4 w-4" aria-hidden="true" />
              </Link>
            </IconTooltip>
          </div>
        </div>
      </nav>

      {tapLabel && (
        <div
          key={tapLabel}
          role="status"
          aria-live="polite"
          className="nav-tap-toast pointer-events-none fixed bottom-20 left-1/2 z-[60] rounded-lg border border-[var(--line)] bg-[var(--tooltip-bg)] px-3 py-1.5 text-xs font-medium whitespace-nowrap text-[var(--tooltip-ink)] shadow-[0_8px_18px_rgba(15,23,42,0.2)] md:hidden"
        >
          {tapLabel}
        </div>
      )}
    </header>
  );
}
