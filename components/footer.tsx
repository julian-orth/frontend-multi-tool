"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PocketKnife } from "lucide-react";
import { TOOLS } from "@/lib/tools/registry";
import { useLocale } from "@/lib/contexts/locale-context";
import { localizeHref, stripLocalePrefix } from "@/lib/i18n/locale";
import { getLocalizedTool } from "@/lib/i18n/tools";

export function Footer() {
  const pathname = usePathname();
  const basePathname = stripLocalePrefix(pathname);
  const isToolPage = basePathname.startsWith("/tools/");
  const { locale, t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`relative border-t border-[var(--line)] bg-[var(--paper)] py-8 ${isToolPage ? "md:ml-72" : ""}`}
    >
      <div
        className={`px-4 sm:px-6 ${isToolPage ? "max-w-full" : "mx-auto max-w-7xl"}`}
      >
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-md">
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-red-100 p-2 dark:bg-red-900/30">
                <PocketKnife
                  className="h-5 w-5 text-red-700 dark:text-red-400"
                  aria-hidden="true"
                />
              </span>
              <span className="text-lg font-bold tracking-tight text-[var(--ink)]">
                {t("site.name")}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-400">
              {t("footer.description")}
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold tracking-wider text-gray-900 uppercase dark:text-white">
              {t("footer.popularTools")}
            </h4>
            <ul className="space-y-2 text-sm">
              {TOOLS.slice(0, 5).map((tool) => {
                const localizedTool = getLocalizedTool(tool, locale);
                const localizedHref = localizeHref(tool.href, locale);
                const isActive = basePathname === tool.href;
                return (
                  <li key={tool.id}>
                    <Link
                      href={localizedHref}
                      className={`transition-colors ${
                        isActive
                          ? "font-semibold text-[var(--ink)]"
                          : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {localizedTool.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-[var(--line)] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-700 dark:text-gray-400">
              {t("footer.copyright", { year: currentYear })}
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href={localizeHref("/privacy", locale)}
                className={`transition-colors ${
                  basePathname === "/privacy"
                    ? "font-semibold text-[var(--ink)]"
                    : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                }`}
                aria-current={basePathname === "/privacy" ? "page" : undefined}
              >
                {t("footer.privacy")}
              </Link>
              <Link
                href={localizeHref("/terms", locale)}
                className={`transition-colors ${
                  basePathname === "/terms"
                    ? "font-semibold text-[var(--ink)]"
                    : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                }`}
                aria-current={basePathname === "/terms" ? "page" : undefined}
              >
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
