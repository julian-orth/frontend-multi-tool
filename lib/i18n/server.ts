import { cookies, headers } from "next/headers";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locale";

export async function getServerLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  const requestLocale = requestHeaders.get("x-locale");
  if (requestLocale === "en") return "en";
  if (requestLocale === "de") return "de";

  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value;
  return locale === "en" ? "en" : DEFAULT_LOCALE;
}
