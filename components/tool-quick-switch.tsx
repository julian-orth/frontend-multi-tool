"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { TOOLS } from "@/lib/tools/registry";
import { resolveToolIcon } from "@/lib/tools/icon-resolver";
import { useLocale } from "@/lib/contexts/locale-context";
import { getLocalizedTool } from "@/lib/i18n/tools";
import { localizeHref, stripLocalePrefix } from "@/lib/i18n/locale";
import { IconTooltip } from "@/components/icon-tooltip";

export function ToolQuickSwitch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const basePathname = stripLocalePrefix(pathname);
  const { locale, t } = useLocale();

  const filteredTools = TOOLS.filter((tool) => {
    const searchText = [
      tool.name,
      tool.description,
      ...(tool.keywords ?? []),
      ...(tool.aliases ?? []),
    ]
      .join(" ")
      .toLowerCase();

    return searchText.includes(query.trim().toLowerCase());
  });

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus();
    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <IconTooltip label={t("nav.tools")} side="right">
      <div ref={containerRef} className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className={`inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-[var(--ink)] transition-colors hover:bg-[var(--paper-2)] focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--paper)] focus:outline-none ${
            isOpen ? "bg-[var(--paper-2)]" : ""
          }`}
          aria-label={t("nav.tools")}
          aria-expanded={isOpen}
          aria-controls="tool-quick-switch"
        >
          <span className="grid grid-cols-3 gap-0.5" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, index) => (
              <span key={index} className="h-1 w-1 rounded-full bg-current" />
            ))}
          </span>
        </button>

        {isOpen && (
          <section
            id="tool-quick-switch"
            className="fixed inset-x-4 bottom-20 z-50 overflow-hidden rounded-2xl border border-[#343434] bg-[#202020] shadow-2xl shadow-black/40 md:absolute md:inset-x-auto md:top-0 md:bottom-auto md:left-full md:ml-3 md:w-[min(24rem,calc(100vw-5.75rem))]"
            aria-label={t("nav.tools")}
          >
            <div className="border-b border-[#343434] p-3">
              <label className="flex items-center gap-2 rounded-lg border border-[#383838] bg-[#181818] px-3 py-2.5 text-[#9b9b9b] focus-within:border-[#767676]">
                <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="sr-only">{t("sidebar.search")}</span>
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={t("sidebar.searchPlaceholder", {
                    count: TOOLS.length,
                  })}
                  className="min-w-0 flex-1 bg-transparent text-sm text-[#f0f0f0] outline-none placeholder:text-[#777] [&::-webkit-search-cancel-button]:hidden"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="cursor-pointer text-[#9b9b9b] hover:text-white focus:outline-none"
                    aria-label={t("sidebar.clearSearch")}
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </label>
            </div>

            <ul className="max-h-[min(30rem,calc(100vh-5rem))] overflow-y-auto p-2">
              {filteredTools.map((tool) => {
                const localizedTool = getLocalizedTool(tool, locale);
                const Icon = resolveToolIcon(tool.groupIcon);
                const isActive = basePathname === tool.href;

                return (
                  <li key={tool.id}>
                    <Link
                      href={localizeHref(tool.href, locale)}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors focus:ring-2 focus:ring-[#a3a3a3] focus:outline-none ${
                        isActive
                          ? "bg-[#454545] font-semibold text-white"
                          : "text-[#ececec] hover:bg-[#303030]"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <Icon
                        className="h-4 w-4 shrink-0 text-[#d0d0d0]"
                        aria-hidden="true"
                      />
                      <span className="min-w-0 flex-1 truncate">
                        {localizedTool.name}
                      </span>
                      {isActive && (
                        <Check
                          className="h-4 w-4 shrink-0 text-[#d8d8d8]"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
              {filteredTools.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-[#999]">
                  {t("sidebar.noToolsFound")}
                </li>
              )}
            </ul>
          </section>
        )}
      </div>
    </IconTooltip>
  );
}
