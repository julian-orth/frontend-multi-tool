"use client";
import React, { useState, useEffect } from "react";
import { Base64UI } from "./base64-ui";
import { UrlEncoderUI } from "./url-encoder-ui";
import { HtmlEncoderUI } from "./html-encoder-ui";

type Tab = "base64" | "url" | "html";

const TABS: { id: Tab; label: string }[] = [
  { id: "base64", label: "Base64" },
  { id: "url", label: "URL" },
  { id: "html", label: "HTML" },
];

export function EncoderTabs() {
  const [tab, setTab] = useState<Tab>("base64");

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
      if (tab === "base64") {
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
    <div className="space-y-6">
      <div className="flex w-full flex-wrap rounded-xl border border-green-200 bg-white p-1 dark:border-green-800 dark:bg-gray-900">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`flex-1 cursor-pointer rounded-lg px-6 py-2 text-sm font-medium transition-colors ${
              tab === t.id
                ? "bg-green-600 text-white dark:bg-green-500"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "base64" && <Base64UI />}
      {tab === "url" && <UrlEncoderUI />}
      {tab === "html" && <HtmlEncoderUI />}
    </div>
  );
}
