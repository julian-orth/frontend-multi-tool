"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PocketKnife } from "lucide-react";
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

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
  ];

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
        <div className="flex items-center gap-3 md:gap-6">
          <MobileNavButton />
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              {navItems.map((item) => {
                const localizedHref = localizeHref(item.href, locale);
                const isActive =
                  basePathname === item.href ||
                  basePathname.startsWith(item.href + "/");
                return (
                  <li key={localizedHref}>
                    <Link
                      href={localizedHref}
                      className={`rounded-sm px-2 py-1 text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-[var(--paper-2)] text-[var(--ink)]"
                          : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
