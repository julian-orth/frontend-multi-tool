"use client";
import React, { useState, useEffect } from "react";
import { GeneratorUI } from "./generator-ui";
import { InfoPanel } from "./info-panel";
import { UuidDecodeForm, UuidFormatForm, UuidValidateForm } from "./misc-forms";

type Tab = "generate" | "validate" | "decode" | "format";

const TABS: { id: Tab; label: string }[] = [
  { id: "generate", label: "Generate" },
  { id: "validate", label: "Validate" },
  { id: "decode", label: "Decode" },
  { id: "format", label: "Format" },
];

export function UuidGeneratorClient() {
  const [tab, setTab] = useState<Tab>("generate");

  useEffect(() => {
    // Reads the URL on the client only, to keep server and initial client
    // render identical and avoid a hydration mismatch.
    try {
      const params = new URLSearchParams(window.location.search);
      const t = params.get("tab");
      if (t && TABS.some((tb) => tb.id === t)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTab(t as Tab);
      }
    } catch {
      // URLSearchParams/window access can throw in non-browser environments;
      // falling back to the default tab is safe.
    }
  }, []);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (tab === "generate") {
        params.delete("tab");
      } else {
        params.set("tab", tab);
      }
      const search = params.toString();
      const newUrl =
        window.location.pathname +
        (search ? `?${search}` : "") +
        window.location.hash;
      window.history.replaceState({}, "", newUrl);
    } catch {
      // URL sync is a non-critical convenience; ignore if it fails.
    }
  }, [tab]);

  return (
    <div className="flex flex-col items-center gap-10 py-8">
      <div className="flex w-full flex-wrap rounded-xl border border-teal-200 bg-white p-1 dark:border-teal-800 dark:bg-gray-900">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`flex-1 cursor-pointer rounded-lg px-6 py-2 text-sm font-medium transition-colors ${
              tab === t.id
                ? "bg-teal-600 text-white dark:bg-teal-500"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "generate" && (
        <div className="w-full rounded-2xl border border-teal-100 bg-white/80 p-8 shadow-lg backdrop-blur-md dark:border-teal-900/40 dark:bg-gray-950/80">
          <h2 className="mb-3 w-full text-3xl font-bold tracking-tight text-black dark:text-white">
            UUID Generator
          </h2>
          <p className="mb-8 w-full text-base text-gray-700 dark:text-gray-300">
            Generate UUIDs of different versions (v1, v3, v4, v5, v7, NIL).
            Choose options and copy the result.
          </p>
          <GeneratorUI />
        </div>
      )}

      {tab === "generate" && <InfoPanel />}

      {tab === "decode" && (
        <div className="w-full rounded-2xl border border-yellow-100 bg-white/80 p-6 dark:border-yellow-900/40 dark:bg-gray-950/80">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-gray-50">
            UUID Decoder & Analyzer
          </h2>
          <UuidDecodeForm />
        </div>
      )}

      {tab === "format" && (
        <div className="w-full rounded-2xl border border-purple-100 bg-white/80 p-6 dark:border-purple-900/40 dark:bg-gray-950/80">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-gray-50">
            UUID Format Converter
          </h2>
          <UuidFormatForm />
        </div>
      )}

      {tab === "validate" && (
        <div className="w-full rounded-2xl border border-blue-100 bg-white/80 p-6 dark:border-blue-900/40 dark:bg-gray-950/80">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-gray-50">
            UUID Validator
          </h2>
          <UuidValidateForm />
        </div>
      )}
    </div>
  );
}
