"use client";
import React, { useState } from "react";
import {
  isValidUuid,
  getUuidVersion,
  getUuidVariant,
  getV1Timestamp,
  formatUuid,
  explainUuidInvalidity,
} from "./uuid-utils";
import { CheckCircle, XCircle } from "lucide-react";
import PrimaryButton from "@/components/primary-button";
import { Checkbox } from "@/components/checkbox";

export function UuidDecodeForm() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<null | {
    valid: boolean;
    version: number | null;
    variant: string | null;
    timestamp?: string | null;
  }>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    const valid = isValidUuid(trimmed);
    const version = valid ? getUuidVersion(trimmed) : null;
    const variant = valid ? getUuidVariant(trimmed) : null;
    let timestamp: string | null | undefined = undefined;
    if (valid && version === 1) {
      timestamp = getV1Timestamp(trimmed);
    }
    setResult({ valid, version, variant, timestamp });
  }

  return (
    <form className="flex max-w-xl flex-col gap-4" onSubmit={handleSubmit}>
      <label htmlFor="uuid-decode-input" className="text-sm font-medium">
        UUID to decode/analyze
      </label>
      <input
        id="uuid-decode-input"
        type="text"
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 font-mono text-sm font-medium text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        autoComplete="off"
        spellCheck={false}
      />
      <PrimaryButton type="submit">Decode</PrimaryButton>
      {result && (
        <div
          className={`mt-2 rounded p-4 font-mono text-lg ${result.valid ? "bg-yellow-50 text-yellow-900 dark:bg-yellow-950/20 dark:text-yellow-100" : "bg-red-50 text-red-900 dark:bg-red-950/20 dark:text-red-100"}`}
        >
          {result.valid ? (
            <>
              <div>
                <span className="font-bold">Version:</span>{" "}
                {result.version === 0 ? "NIL" : result.version}
              </div>
              <div>
                <span className="font-bold">Variant:</span> {result.variant}
              </div>
              {result.timestamp && (
                <div>
                  <span className="font-bold">Timestamp (v1):</span>{" "}
                  {result.timestamp}
                </div>
              )}
            </>
          ) : (
            <span className="font-bold">Invalid UUID</span>
          )}
        </div>
      )}
    </form>
  );
}

export function UuidFormatForm() {
  const [input, setInput] = useState("");
  const [hyphens, setHyphens] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [braces, setBraces] = useState(false);
  const [urn, setUrn] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(formatUuid(input.trim(), { hyphens, uppercase, braces, urn }));
  }

  return (
    <form className="flex max-w-xl flex-col gap-4" onSubmit={handleSubmit}>
      <label htmlFor="uuid-format-input" className="text-sm font-medium">
        UUID to format
      </label>
      <input
        id="uuid-format-input"
        type="text"
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 font-mono text-sm font-medium text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        autoComplete="off"
        spellCheck={false}
      />
      <div className="flex flex-wrap gap-4">
        <Checkbox checked={hyphens} onChange={setHyphens} label="Hyphens" />
        <Checkbox
          checked={uppercase}
          onChange={setUppercase}
          label="Uppercase"
        />
        <Checkbox
          checked={braces}
          onChange={setBraces}
          label="Braces"
          helperText="{uuid}"
        />
        <Checkbox
          checked={urn}
          onChange={setUrn}
          label="URN"
          helperText="urn:uuid:..."
        />
      </div>
      <PrimaryButton type="submit">Convert</PrimaryButton>
      {result && (
        <div className="mt-2 rounded bg-purple-50 p-4 font-mono text-lg break-all text-purple-900 select-all dark:bg-purple-950/20 dark:text-purple-100">
          {result}
        </div>
      )}
    </form>
  );
}

export function UuidValidateForm() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<null | {
    valid: boolean;
    version: number | null;
    reasons?: string[];
  }>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed === "00000000-0000-0000-0000-000000000000") {
      setResult({ valid: true, version: 0 });
      return;
    }
    const valid = isValidUuid(trimmed);
    const version = valid ? getUuidVersion(trimmed) : null;
    const reasons = valid ? undefined : explainUuidInvalidity(trimmed);
    setResult({ valid, version, reasons });
  }

  return (
    <form className="flex max-w-xl flex-col gap-4" onSubmit={handleSubmit}>
      <label htmlFor="uuid-validate-input" className="text-sm font-medium">
        UUID to validate
      </label>
      <input
        id="uuid-validate-input"
        type="text"
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 font-mono text-sm font-medium text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        autoComplete="off"
        spellCheck={false}
      />
      <PrimaryButton type="submit">Validate</PrimaryButton>
      {result && (
        <div
          className={`mt-2 rounded p-4 font-mono text-lg ${result.valid ? "bg-blue-50 text-blue-900 dark:bg-blue-950/20 dark:text-blue-100" : "border border-red-200 bg-red-100 text-red-900 dark:bg-red-900/80 dark:text-red-100"}`}
        >
          {result.valid ? (
            <div className="flex items-start gap-3">
              <CheckCircle
                className="mt-1 h-6 w-6 text-blue-600 dark:text-blue-400"
                aria-hidden="true"
              />
              <div>
                <div className="font-bold">Valid UUID</div>
                {typeof result.version === "number" && (
                  <div className="mt-1 text-sm">
                    (version {result.version === 0 ? "NIL" : result.version})
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <XCircle
                  className="mt-1 h-6 w-6 text-red-600 dark:text-red-300"
                  aria-hidden="true"
                />
                <div>
                  <div className="font-bold">Invalid UUID</div>
                  <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                    The input does not meet the RFC 4122 string requirements.
                    Below are common reasons why it&apos;s invalid.
                  </div>
                </div>
              </div>
              <div className="ml-9">
                {result.reasons && result.reasons.length > 0 ? (
                  <ul className="mt-1 list-disc pl-4 text-sm text-gray-800 dark:text-gray-200">
                    {result.reasons.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    Unknown format error.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </form>
  );
}
