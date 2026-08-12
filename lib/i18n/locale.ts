export const SUPPORTED_LOCALES = ["de", "en"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "de";

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return "en";
  }

  return DEFAULT_LOCALE;
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/en") {
    return "/";
  }

  if (pathname.startsWith("/en/")) {
    return pathname.slice(3);
  }

  return pathname;
}

export function localizeHref(href: string, locale: Locale): string {
  const normalized = href.startsWith("/") ? href : `/${href}`;

  if (locale === DEFAULT_LOCALE) {
    return normalized;
  }

  return normalized === "/" ? "/en" : `/en${normalized}`;
}

export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const basePath = stripLocalePrefix(pathname);
  return localizeHref(basePath, nextLocale);
}
