"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import {
  type Locale,
  DEFAULT_LOCALE,
  getLocaleFromPathname,
} from "@/lib/i18n/locale";
import de from "@/public/locales/de.json";
import en from "@/public/locales/en.json";

type TranslationDict = Record<string, unknown>;

const TRANSLATIONS: Record<Locale, TranslationDict> = {
  de,
  en,
};

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (key) => key,
});

function readByPath(dict: TranslationDict, path: string): string | undefined {
  const value = path.split(".").reduce<unknown>((acc, segment) => {
    if (!acc || typeof acc !== "object") return undefined;
    return (acc as Record<string, unknown>)[segment];
  }, dict);

  return typeof value === "string" ? value : undefined;
}

function interpolate(
  template: string,
  params?: Record<string, string | number>
): string {
  if (!params) return template;

  return template.replace(/\{(\w+)\}/g, (_, key: string) => {
    const replacement = params[key];
    return replacement === undefined ? `{${key}}` : String(replacement);
  });
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const locale = useMemo<Locale>(
    () => getLocaleFromPathname(pathname),
    [pathname]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    window.localStorage.setItem("locale", nextLocale);
    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
  };

  const value = useMemo<LocaleContextValue>(() => {
    const t = (key: string, params?: Record<string, string | number>) => {
      const dict = TRANSLATIONS[locale];
      const fallbackDict = TRANSLATIONS[DEFAULT_LOCALE];
      const found =
        readByPath(dict, key) ?? readByPath(fallbackDict, key) ?? key;
      return interpolate(found, params);
    };

    return { locale, setLocale, t };
  }, [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
