"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RotateCcw, AlertTriangle } from "lucide-react";
import { useLocale } from "@/lib/contexts/locale-context";
import { localizeHref } from "@/lib/i18n/locale";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { locale, t } = useLocale();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center">
      <AlertTriangle
        className="mb-8 h-24 w-24 text-gray-400 dark:text-gray-600"
        aria-hidden="true"
      />

      <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
        {t("error.title")}
      </h1>

      <p className="mb-8 max-w-md text-lg text-gray-600 dark:text-gray-400">
        {t("error.description")}
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--primary-hover)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--paper)] focus:outline-none"
        >
          <RotateCcw className="h-5 w-5" aria-hidden="true" />
          {t("error.tryAgain")}
        </button>

        <Link
          href={localizeHref("/", locale)}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          aria-label={t("error.goHomeAria")}
        >
          <Home className="h-5 w-5" aria-hidden="true" />
          {t("error.goHome")}
        </Link>
      </div>
    </div>
  );
}
