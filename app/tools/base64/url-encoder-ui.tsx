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
  encodeComponent,
  encodeFullUri,
  encodeFormData,
  encodeRFC3986,
  decodeUrl,
  encodeLineByLine,
  decodeLineByLine,
  parseQueryString,
  buildQueryString,
  type UrlEncodeResult,
  type EncodingMode,
} from "./url-utils";

type Mode = "encode" | "decode";

export function UrlEncoderUI() {
  const [mode, setMode] = useState<Mode>("encode");
  const [encodingMode, setEncodingMode] = useState<EncodingMode>("component");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [lineByLine, setLineByLine] = useState(false);
  const [liveMode, setLiveMode] = useState(false);
  const [result, setResult] = useState<UrlEncodeResult | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleProcess = useCallback(() => {
    let processResult: UrlEncodeResult;

    if (mode === "encode") {
      if (lineByLine) {
        processResult = encodeLineByLine(input, encodingMode);
      } else {
        switch (encodingMode) {
          case "uri":
            processResult = encodeFullUri(input);
            break;
          case "formdata":
            processResult = encodeFormData(input);
            break;
          case "rfc3986":
            processResult = encodeRFC3986(input);
            break;
          default:
            processResult = encodeComponent(input);
        }
      }
    } else {
      if (lineByLine) {
        processResult = decodeLineByLine(input);
      } else {
        processResult = decodeUrl(input);
      }
    }

    setResult(processResult);
    setOutput(processResult.output);
  }, [input, mode, encodingMode, lineByLine]);

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
  }, [input, liveMode, mode, encodingMode, lineByLine]);

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
    const ext = mode === "encode" ? "encoded.txt" : "txt";
    a.download = `url-${mode}-${Date.now()}.${ext}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [output, mode]);

  const handleLoadSample = useCallback(() => {
    if (mode === "encode") {
      setInput(
        "Hello World! This is a test string with special characters: @#$%^&*()"
      );
    } else {
      setInput(
        "Hello%20World%21%20This%20is%20a%20test%20string%20with%20special%20characters%3A%20%40%23%24%25%5E%26*%28%29"
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

  // Parse query string for display
  const queryParams =
    mode === "decode" && output && !lineByLine ? parseQueryString(output) : [];

  // Calculate stats
  const inputBytes = new Blob([input]).size;
  const outputBytes = new Blob([output]).size;

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

        {mode === "encode" && (
          <select
            id="encoding-mode"
            value={encodingMode}
            onChange={(e) => setEncodingMode(e.target.value as EncodingMode)}
            className="rounded-lg border border-green-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 dark:border-green-800 dark:bg-gray-900 dark:text-gray-300"
            aria-label="Encoding mode"
          >
            <option value="component">Component (Query Params)</option>
            <option value="uri">Full URI</option>
            <option value="formdata">Form Data (+ for spaces)</option>
            <option value="rfc3986">RFC3986 Strict</option>
          </select>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <Checkbox
            checked={lineByLine}
            onChange={setLineByLine}
            label="Line by line"
          />
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
          accept=".txt,text/plain"
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
              htmlFor="url-input"
            >
              Input {mode === "encode" ? "(Text)" : "(URL-encoded)"}
            </label>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {input.length.toLocaleString()} chars
            </div>
          </div>
          <textarea
            id="url-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === "encode"
                ? "Enter text to encode..."
                : "Enter URL-encoded string to decode..."
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
              Output {mode === "encode" ? "(URL-encoded)" : "(Text)"}
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

      {/* Query String Parser */}
      {queryParams.length > 0 && (
        <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Parsed Query Parameters
          </h3>
          <div className="space-y-2">
            {queryParams.map((param, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg border border-blue-200 bg-white p-3 dark:border-blue-800 dark:bg-gray-900"
              >
                <div className="flex-1">
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Key
                  </div>
                  <div className="mt-1 font-mono text-sm text-gray-900 dark:text-gray-100">
                    {param.key}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Value
                  </div>
                  <div className="mt-1 font-mono text-sm text-gray-900 dark:text-gray-100">
                    {param.value || <em className="text-gray-400">(empty)</em>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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
        </div>
      )}

      {/* Info Section */}
      <div className="rounded-xl border border-green-200 bg-green-50/30 p-6 dark:border-green-800 dark:bg-green-950/10">
        <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
          About URL Encoding
        </h3>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>
            URL encoding (percent-encoding) converts characters into a format
            that can be safely transmitted over the Internet. Special characters
            are replaced with % followed by hexadecimal values.
          </p>
          <ul className="mt-2 ml-5 list-disc space-y-1">
            <li>
              <strong>Component:</strong> For query parameters and fragments
              (encodeURIComponent)
            </li>
            <li>
              <strong>Full URI:</strong> For complete URLs, preserves URI
              structure (encodeURI)
            </li>
            <li>
              <strong>Form Data:</strong> Uses + for spaces
              (application/x-www-form-urlencoded)
            </li>
            <li>
              <strong>RFC3986:</strong> Strict encoding including !, &apos;, (, ), *
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
