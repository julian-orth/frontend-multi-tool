import type { Metadata } from "next";
import NotFoundClient from "./not-found-client";
import { getServerLocale } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();

  return {
    title:
      locale === "en" ? "404 - Page Not Found" : "404 - Seite nicht gefunden",
    description:
      locale === "en"
        ? "Oops! The page you're looking for doesn't exist. Return to our collection of developer tools."
        : "Die gesuchte Seite existiert nicht. Kehre zu unserer Sammlung an Entwickler-Tools zurueck.",
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function NotFound() {
  return <NotFoundClient />;
}
