import { cookies } from "next/headers";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locale";

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value;
  return locale === "en" ? "en" : DEFAULT_LOCALE;
}
