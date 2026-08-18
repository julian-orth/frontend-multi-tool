"use client";
import React, { useState, useEffect } from "react";
import { Loader2, Download } from "lucide-react";
import { uuidv1, uuidv3, uuidv4, uuidv5, uuidv7, uuidNil } from "./uuid-utils";
import { CopyButton } from "./copy-button";
import PrimaryButton from "@/components/primary-button";
import { StyledSelect } from "@/components/styled-select";

const VERSION_OPTIONS = [
  { value: "v1", label: "v1 (timestamp)" },
  { value: "v3", label: "v3 (namespace+MD5)" },
  { value: "v4", label: "v4 (random)" },
  { value: "v5", label: "v5 (namespace+SHA-1)" },
  { value: "v7", label: "v7 (Unix time, random)" },
  { value: "nil", label: "NIL (all zeros)" },
] as const;

type UuidVersion = (typeof VERSION_OPTIONS)[number]["value"];

function isUuidVersion(value: string): value is UuidVersion {
  return VERSION_OPTIONS.some((option) => option.value === value);
}

const COUNT_OPTIONS = ["1", "5", "10", "20", "50", "100"].map((n) => ({
  value: n,
  label: n,
}));

const tealSelectClassName =
  "h-12 border-teal-200 bg-white/80 text-sm font-medium text-gray-900 focus:border-teal-500 focus:ring-teal-500 dark:border-teal-800 dark:bg-gray-900/60 dark:text-gray-100";
const tealListClassName =
  "border-teal-200 bg-white dark:border-teal-800 dark:bg-gray-900";
const tealOptionActiveClassName =
  "bg-teal-600 font-medium text-white dark:bg-teal-500";
const tealOptionClassName =
  "text-gray-700 hover:bg-teal-50 dark:text-gray-300 dark:hover:bg-gray-800";

export function GeneratorUI() {
  const [version, setVersion] = useState<UuidVersion>("v4");

  useEffect(() => {
    // Reads the URL on the client only, to keep server and initial client
    // render identical and avoid a hydration mismatch.
    try {
      const params = new URLSearchParams(window.location.search);
      const v = params.get("version");
      if (v && isUuidVersion(v)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVersion(v);
      }
    } catch {
      // URLSearchParams/window access can throw in non-browser environments;
      // falling back to the default version is safe.
    }
  }, []);

  // Generate once on first client render so users see a UUID immediately
  useEffect(() => {
    // call handleGenerate on mount but avoid triggering the button "generating"
    // animation/state. We pass `{ animate: false }` so the initial value is
    // produced silently.
    handleGenerate({ animate: false });
    // We intentionally run this only once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (version === "v4") {
        params.delete("version");
      } else {
        params.set("version", version);
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
  }, [version]);

  const [namespace, setNamespace] = useState(
    "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
  );
  const [name, setName] = useState("example.com");
  const [count, setCount] = useState(1);
  const [result, setResult] = useState<string[] | null>(null);
  const [generating, setGenerating] = useState(false);
  const [exporting, setExporting] = useState(false);

  async function handleGenerate(
    { animate = true }: { animate?: boolean } = { animate: true }
  ) {
    if (animate) setGenerating(true);
    const start = Date.now();
    try {
      const uuids: string[] = [];
      const n = Math.max(1, Math.min(count, 100));
      for (let i = 0; i < n; i++) {
        let uuid = "";
        if (version === "v1") uuid = uuidv1();
        else if (version === "v3") uuid = uuidv3(name, namespace);
        else if (version === "v4") uuid = uuidv4();
        else if (version === "v5") uuid = uuidv5(name, namespace);
        else if (version === "v7") uuid = uuidv7();
        else if (version === "nil") uuid = uuidNil();
        uuids.push(uuid);
      }
      const elapsed = Date.now() - start;
      // Only enforce the minimum duration when animating so manual generation
      // keeps the UX expectation of a visible activity. Silent initial
      // generation returns results immediately.
      if (animate && elapsed < 1000) {
        await new Promise((res) => setTimeout(res, 1000 - elapsed));
      }
      setResult(uuids);
    } catch (e) {
      setResult(["Error: " + (e as Error).message]);
    } finally {
      if (animate) setGenerating(false);
    }
  }

  async function handleExport() {
    if (!result) return;
    try {
      setExporting(true);
      const text = result.join("\n");
      const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const filename = `uuids-${version}-${new Date()
        .toISOString()
        .replace(/[:.]/g, "-")}.txt`;
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } finally {
      setExporting(false);
    }
  }

  return (
    <div>
      <form
        className="mb-6 flex w-full flex-row flex-wrap items-end gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          handleGenerate();
        }}
      >
        <div className="flex flex-col">
          <label
            className="mb-1 block text-sm font-medium"
            htmlFor="uuid-version"
          >
            Version
          </label>
          <div style={{ width: "150px" }}>
            <StyledSelect
              id="uuid-version"
              value={version}
              onChange={(v) => setVersion(v as typeof version)}
              options={VERSION_OPTIONS}
              className={`w-full rounded-xl ${tealSelectClassName}`}
              listClassName={`rounded-xl ${tealListClassName}`}
              optionActiveClassName={tealOptionActiveClassName}
              optionClassName={tealOptionClassName}
            />
          </div>
        </div>

        {(version === "v3" || version === "v5") && (
          <div className="flex flex-col">
            <label
              className="mb-1 block text-sm font-medium"
              htmlFor="uuid-namespace"
            >
              Namespace UUID
            </label>
            <input
              id="uuid-namespace"
              type="text"
              className="h-12 w-full rounded-xl border border-teal-200 bg-white/80 px-3 font-mono text-sm font-medium text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 dark:border-teal-800 dark:bg-gray-900/60 dark:text-gray-100"
              value={namespace}
              onChange={(e) => setNamespace(e.target.value)}
            />
          </div>
        )}

        {(version === "v3" || version === "v5") && (
          <div className="flex flex-col">
            <label
              className="mb-1 block text-sm font-medium"
              htmlFor="uuid-name"
            >
              Name
            </label>
            <input
              id="uuid-name"
              type="text"
              className="h-12 w-full rounded-xl border border-teal-200 bg-white/80 px-3 text-sm font-medium text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 dark:border-teal-800 dark:bg-gray-900/60 dark:text-gray-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="flex flex-col">
          <label
            className="mb-1 block text-sm font-medium"
            htmlFor="uuid-count"
          >
            Count
          </label>
          <div style={{ width: "150px" }}>
            <StyledSelect
              id="uuid-count"
              value={String(count)}
              onChange={(v) => setCount(Number(v))}
              options={COUNT_OPTIONS}
              className={`w-full rounded-xl ${tealSelectClassName}`}
              listClassName={`rounded-xl ${tealListClassName}`}
              optionActiveClassName={tealOptionActiveClassName}
              optionClassName={tealOptionClassName}
            />
          </div>
        </div>

        <div
          style={{ marginTop: "23px" }}
          className="flex flex-wrap items-center gap-2"
        >
          <PrimaryButton
            type="submit"
            className="px-8 py-3"
            disabled={generating}
          >
            {generating ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2
                  className="h-5 w-5 animate-spin text-white"
                  aria-hidden="true"
                />
                Generating...
              </span>
            ) : (
              "Generate"
            )}
          </PrimaryButton>

          {result && result.length >= 5 && (
            <PrimaryButton
              type="button"
              variant="outline"
              onClick={handleExport}
              disabled={exporting || generating}
              className="px-4"
            >
              {exporting ? (
                "Preparing..."
              ) : (
                <span className="flex items-center">
                  <Download
                    className="mr-2 h-4 w-4 text-teal-600 dark:text-teal-300"
                    aria-hidden="true"
                  />
                  Export
                </span>
              )}
            </PrimaryButton>
          )}
        </div>
      </form>

      {result && (
        <div
          className="mt-4 flex w-full flex-col gap-2"
          role="status"
          aria-live="polite"
        >
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Generated UUID{result.length > 1 ? "s" : ""}
          </p>
          {result.map((uuid, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <input
                id={`generated-uuid-${idx}`}
                name={`generated-uuid-${idx}`}
                type="text"
                value={uuid}
                readOnly
                className="h-12 min-w-0 rounded-xl border border-teal-200 bg-white/60 px-4 font-mono text-lg text-gray-900 shadow-inner transition focus:ring-2 focus:ring-teal-500 focus:outline-none dark:border-teal-800 dark:bg-gray-900/60 dark:text-gray-100"
                aria-label={`Generated UUID ${idx + 1}`}
                style={{
                  letterSpacing: "0.04em",
                  // Make input width match the UUID length in characters (ch).
                  // Ensure a sensible minimum (36ch) so short values still look right.
                  width: `${Math.max(uuid.length, 36)}ch`,
                  maxWidth: "100%",
                }}
              />
              <CopyButton value={uuid} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
