"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, ArrowLeft } from "lucide-react";

const errorIcons = ["/404.svg", "/404_invert.svg"];

export default function NotFoundClient() {
  const [currentIcon, setCurrentIcon] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIcon((prev) => (prev + 1) % errorIcons.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center">
      <div
        className={`mb-8 transition-all duration-300 ${
          isAnimating
            ? "scale-75 rotate-12 opacity-0"
            : "scale-100 rotate-0 opacity-100"
        }`}
      >
        <div className="relative h-48 w-48">
          <Image
            src={errorIcons[currentIcon]}
            alt="Error page icon"
            fill
            sizes="192px"
            className="object-contain brightness-0 invert-0 dark:brightness-0 dark:invert"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(55%) sepia(96%) saturate(1807%) hue-rotate(1deg) brightness(101%) contrast(102%)",
            }}
            priority
          />
        </div>
      </div>

      <h1 className="mb-4 text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
        404
      </h1>

      <h2 className="mb-3 text-3xl font-semibold text-gray-800 dark:text-gray-100">
        Page Not Found
      </h2>

      <p className="mb-8 max-w-md text-lg text-gray-600 dark:text-gray-400">
        Oops! The page you&apos;re looking for seems to have wandered off into
        the digital void. Let&apos;s get you back on track.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600"
          aria-label="Go to homepage"
        >
          <Home className="h-5 w-5" aria-hidden="true" />
          Go Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          aria-label="Go back to previous page"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          Go Back
        </button>
      </div>

      <div className="mt-12 text-sm text-gray-500 dark:text-gray-500">
        Error code: 404 • Page not found
      </div>
    </div>
  );
}
