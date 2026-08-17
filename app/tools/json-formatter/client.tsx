"use client";
import React from "react";
import { JsonFormatterUI } from "./formatter-ui";
import { useLocale } from "@/lib/contexts/locale-context";
import { pageContent } from "./content";

export function JsonFormatterClient() {
  const { locale } = useLocale();
  const c = pageContent[locale];

  return (
    <div className="flex flex-col items-center gap-10 py-8">
      <div className="w-full rounded-2xl border border-green-100 bg-white/80 p-8 shadow-lg backdrop-blur-md dark:border-green-900/40 dark:bg-gray-950/80">
        <h2 className="mb-3 w-full text-3xl font-bold tracking-tight text-black dark:text-white">
          {c.h1}
        </h2>
        <p className="mb-8 w-full text-base text-gray-700 dark:text-gray-300">
          {c.intro}
        </p>
        <JsonFormatterUI />
      </div>
    </div>
  );
}
