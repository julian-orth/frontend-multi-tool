"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  Copy,
  Check,
  Download,
  AlertCircle,
  CheckCircle,
  Trash2,
  Upload,
  ArrowUpDown,
  FileText,
} from "lucide-react";
import PrimaryButton from "@/components/primary-button";
import { Checkbox } from "@/components/checkbox";
import {
  encodeToBase64,
  decodeFromBase64,
  encodeLineByLine,
  decodeLineByLine,
  splitIntoChunks,
  isValidBase64,
  type Base64Result,
} from "./base64-utils";

type Mode = "encode" | "decode";

export function Base64UI() {
  const [mode, setMode] = useState<Mode>("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [urlSafe, setUrlSafe] = useState(false);
  const [lineByLine, setLineByLine] = useState(false);
  const [splitLines, setSplitLines] = useState(false);
  const [liveMode, setLiveMode] = useState(false);
  const [result, setResult] = useState<Base64Result | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleProcess = useCallback(() => {
    let processResult: Base64Result;

    if (mode === "encode") {
      if (lineByLine) {
        processResult = encodeLineByLine(input, urlSafe);
      } else {
        processResult = encodeToBase64(input, urlSafe);
        if (processResult.isValid && splitLines && !lineByLine) {
          processResult.output = splitIntoChunks(processResult.output, 76);
        }
      }
    } else {
      if (lineByLine) {
        processResult = decodeLineByLine(input, urlSafe);
      } else {
        processResult = decodeFromBase64(input, urlSafe);
      }
    }

    setResult(processResult);
    setOutput(processResult.output);
  }, [input, mode, urlSafe, lineByLine, splitLines]);

  // Live mode processing: intentionally re-syncs output to input on every
  // change while the user has live mode on (an explicit opt-in toggle, not
  // the default), as opposed to the manual "Process" button flow below.
  useEffect(() => {
    if (liveMode && input) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      handleProcess();
    } else if (!input) {
      setOutput("");
      setResult(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, liveMode, mode, urlSafe, lineByLine, splitLines]);

  const handleClear = useCallback(() => {
    setInput("");
    setOutput("");
    setResult(null);
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [output]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const ext = mode === "encode" ? "base64.txt" : "txt";
    a.download = `${mode}-${Date.now()}.${ext}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [output, mode]);

  const handleLoadSample = useCallback(() => {
    if (mode === "encode") {
      setInput("Hello, World! This is a sample text for Base64 encoding.");
    } else {
      setInput(
        "SGVsbG8sIFdvcmxkISBUaGlzIGlzIGEgc2FtcGxlIHRleHQgZm9yIEJhc2U2NCBlbmNvZGluZy4="
      );
    }
    setOutput("");
    setResult(null);
  }, [mode]);

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setInput(content);
        setOutput("");
        setResult(null);
      };
      reader.onerror = () => {
        setResult({
          isValid: false,
          output: "",
          error: "Failed to read file",
        });
      };
      reader.readAsText(file);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    []
  );

  const handleSwap = useCallback(() => {
    setInput(output);
    setOutput("");
    setResult(null);
    setMode(mode === "encode" ? "decode" : "encode");
  }, [output, mode]);

  // Calculate stats
  const inputBytes = new Blob([input]).size;
  const outputBytes = new Blob([output]).size;
  const ratio =
    inputBytes > 0 && outputBytes > 0
      ? ((outputBytes / inputBytes) * 100).toFixed(1)
      : "0.0";

  return (
    <div className="space-y-6">
      {/* Mode Toggle */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex rounded-xl border border-green-200 bg-white p-1 dark:border-green-800 dark:bg-gray-900">
          <button
            type="button"
            onClick={() => {
              setMode("encode");
              setOutput("");
              setResult(null);
            }}
            className={`cursor-pointer rounded-lg px-6 py-2 text-sm font-medium transition-colors ${
              mode === "encode"
                ? "bg-green-600 text-white dark:bg-green-500"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            }`}
          >
            Encode
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("decode");
              setOutput("");
              setResult(null);
            }}
            className={`cursor-pointer rounded-lg px-6 py-2 text-sm font-medium transition-colors ${
              mode === "decode"
                ? "bg-green-600 text-white dark:bg-green-500"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            }`}
          >
            Decode
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Checkbox checked={urlSafe} onChange={setUrlSafe} label="URL-safe" />
          <Checkbox
            checked={lineByLine}
            onChange={(checked) => {
              setLineByLine(checked);
              if (checked) setSplitLines(false);
            }}
            label="Line by line"
          />
          {mode === "encode" && !lineByLine && (
            <Checkbox
              checked={splitLines}
              onChange={(checked) => {
                setSplitLines(checked);
                if (checked) setLineByLine(false);
              }}
              label="Split into chunks (MIME)"
            />
          )}
          <Checkbox
            checked={liveMode}
            onChange={setLiveMode}
            label="Live mode"
          />
        </div>

        <div className="ml-auto flex flex-wrap gap-2">
          <PrimaryButton
            onClick={handleProcess}
            className="px-6"
            disabled={liveMode}
          >
            {mode === "encode" ? "Encode" : "Decode"}
          </PrimaryButton>
          <PrimaryButton
            onClick={handleSwap}
            variant="outline"
            className="px-4"
            disabled={!output}
            title="Swap input/output and toggle mode"
          >
            <ArrowUpDown className="h-4 w-4" aria-hidden="true" />
          </PrimaryButton>
          <PrimaryButton
            onClick={handleClear}
            variant="outline"
            className="px-4"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </PrimaryButton>
        </div>
      </div>

      {/* Load from File/Sample */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-green-200 bg-green-50/50 p-4 dark:border-green-800 dark:bg-green-950/20">
        <input
          ref={fileInputRef}
          type="file"
          accept=".txt,.base64,text/plain"
          onChange={handleFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-100 dark:bg-gray-900 dark:text-green-400 dark:hover:bg-gray-800"
        >
          <Upload className="h-4 w-4" aria-hidden="true" />
          Load from file
        </label>
        <button
          type="button"
          onClick={handleLoadSample}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-100 dark:bg-gray-900 dark:text-green-400 dark:hover:bg-gray-800"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Load sample
        </button>
      </div>

      {/* Validation status */}
      {result && !result.isValid && result.error && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-800/50 dark:bg-red-950/30">
          <AlertCircle
            className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400"
            aria-hidden="true"
          />
          <div className="flex-1">
            <p className="font-medium text-red-800 dark:text-red-200">Error</p>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              {result.error}
            </p>
          </div>
        </div>
      )}

      {result && result.isValid && output && (
        <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800/50 dark:bg-green-950/30">
          <CheckCircle
            className="h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400"
            aria-hidden="true"
          />
          <div className="flex-1">
            <p className="font-medium text-green-800 dark:text-green-200">
              {mode === "encode"
                ? "Encoded successfully"
                : "Decoded successfully"}
            </p>
          </div>
        </div>
      )}

      {/* Input/Output Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Input */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <label
              className="text-sm font-semibold text-gray-700 dark:text-gray-300"
              htmlFor="base64-input"
            >
              Input {mode === "encode" ? "(Text)" : "(Base64)"}
            </label>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {input.length.toLocaleString()} chars
            </div>
          </div>
          <textarea
            id="base64-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === "encode"
                ? "Enter text to encode..."
                : "Enter Base64 string to decode..."
            }
            className="min-h-[400px] w-full rounded-xl border border-green-200 bg-white/80 p-4 font-mono text-sm text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500 dark:border-green-800 dark:bg-gray-900/60 dark:text-gray-100"
            spellCheck={false}
          />
        </div>

        {/* Output */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <div
              className="text-sm font-semibold text-gray-700 dark:text-gray-300"
              role="heading"
              aria-level={3}
            >
              Output {mode === "encode" ? "(Base64)" : "(Text)"}
            </div>
            {output && (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex cursor-pointer items-center gap-1 text-xs text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                  disabled={copied}
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3" aria-hidden="true" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" aria-hidden="true" />
                      Copy
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="flex cursor-pointer items-center gap-1 text-xs text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                >
                  <Download className="h-3 w-3" aria-hidden="true" />
                  Download
                </button>
              </div>
            )}
          </div>
          <div className="relative min-h-[400px] w-full overflow-auto rounded-xl border border-green-200 bg-white/80 dark:border-green-800 dark:bg-gray-900/60">
            {output ? (
              <pre className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                <code className="break-words whitespace-pre-wrap">
                  {output}
                </code>
              </pre>
            ) : (
              <div className="flex h-[400px] items-center justify-center text-gray-500 dark:text-gray-400">
                <p className="text-sm">
                  {liveMode
                    ? "Start typing to see live results..."
                    : "Output will appear here..."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      {output && (
        <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
          <div>
            <span className="font-medium">Input:</span>{" "}
            {input.length.toLocaleString()} chars (
            {(inputBytes / 1024).toFixed(2)} KB)
          </div>
          <div>
            <span className="font-medium">Output:</span>{" "}
            {output.length.toLocaleString()} chars (
            {(outputBytes / 1024).toFixed(2)} KB)
          </div>
          <div>
            <span className="font-medium">Size ratio:</span> {ratio}%
          </div>
        </div>
      )}

      {/* Info Section */}
      <div className="rounded-xl border border-green-200 bg-green-50/30 p-6 dark:border-green-800 dark:bg-green-950/10">
        <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
          About Base64 Encoding
        </h3>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>
            Base64 is a binary-to-text encoding scheme that represents binary
            data in an ASCII string format. It&apos;s commonly used to encode data
            for transmission over media designed to handle text.
          </p>
          <ul className="mt-2 ml-5 list-disc space-y-1">
            <li>
              <strong>URL-safe:</strong> Replaces + with -, / with _, and
              removes padding = characters
            </li>
            <li>
              <strong>Line by line:</strong> Process each line independently,
              useful for multiple entries
            </li>
            <li>
              <strong>MIME chunks:</strong> Splits encoded output into
              76-character lines per RFC 2045
            </li>
            <li>
              <strong>Live mode:</strong> Processes data in real-time as you
              type (client-side only)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
