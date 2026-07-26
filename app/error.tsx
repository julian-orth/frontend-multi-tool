"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RotateCcw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
        Something went wrong
      </h1>

      <p className="mb-8 max-w-md text-lg text-gray-600 dark:text-gray-400">
        An unexpected error occurred while rendering this page. You can try
        again, or head back to the homepage.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          onClick={reset}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          <RotateCcw className="h-5 w-5" aria-hidden="true" />
          Try Again
        </button>

        <Link
          href="/"
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          aria-label="Go to homepage"
        >
          <Home className="h-5 w-5" aria-hidden="true" />
          Go Home
        </Link>
      </div>
    </div>
  );
}
