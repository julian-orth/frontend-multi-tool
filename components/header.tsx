"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Info, PocketKnife } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNavButton } from "@/components/MobileNav";
import { LanguageToggle } from "@/components/language-toggle";
import { useLocale } from "@/lib/contexts/locale-context";
import { localizeHref, stripLocalePrefix } from "@/lib/i18n/locale";

export function Header() {
  const pathname = usePathname();
  const basePathname = stripLocalePrefix(pathname);
  const isToolPage = basePathname.startsWith("/tools/");
  const { locale, t } = useLocale();

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

          <Link
            href={localizeHref("/about", locale)}
            aria-label={t("nav.about")}
            title={t("nav.about")}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[var(--line)] bg-[var(--card)] text-[var(--ink)] shadow-[0_1px_0_var(--line-soft)] transition-all hover:bg-[var(--paper-2)] focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--paper)] focus:outline-none"
          >
            <Info className="h-4 w-4" aria-hidden="true" />
          </Link>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
