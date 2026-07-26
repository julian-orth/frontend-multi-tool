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
  Code,
} from "lucide-react";
import PrimaryButton from "@/components/primary-button";
import { Checkbox } from "@/components/checkbox";
import {
  encodeToHtml,
  decodeFromHtml,
  encodeLineByLine,
  decodeLineByLine,
  containsHtmlEntities,
  countHtmlEntities,
  type HtmlResult,
} from "./utils";

type Mode = "encode" | "decode";

export function HtmlEncoderUI() {
  const [mode, setMode] = useState<Mode>("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [useNamedEntities, setUseNamedEntities] = useState(true);
  const [encodeAll, setEncodeAll] = useState(false);
  const [lineByLine, setLineByLine] = useState(false);
  const [liveMode, setLiveMode] = useState(false);
  const [result, setResult] = useState<HtmlResult | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleProcess = useCallback(() => {
    let processResult: HtmlResult;

    if (mode === "encode") {
      if (lineByLine) {
        processResult = encodeLineByLine(input, useNamedEntities, encodeAll);
      } else {
        processResult = encodeToHtml(input, useNamedEntities, encodeAll);
      }
    } else {
      if (lineByLine) {
        processResult = decodeLineByLine(input);
      } else {
        processResult = decodeFromHtml(input);
      }
    }

    setResult(processResult);
    setOutput(processResult.output);
  }, [input, mode, useNamedEntities, encodeAll, lineByLine]);

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
  }, [input, liveMode, mode, useNamedEntities, encodeAll, lineByLine]);

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
    const blob = new Blob([output], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const ext = mode === "encode" ? "encoded.html" : "decoded.txt";
    a.download = `html-${mode}-${Date.now()}.${ext}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [output, mode]);

  const handleLoadSample = useCallback(() => {
    if (mode === "encode") {
      setInput(
        '<div class="container">\n  <h1>Hello & Welcome!</h1>\n  <p>Price: €50 - Special offer: 50% off!</p>\n  <p>Copyright © 2024</p>\n</div>'
      );
    } else {
      setInput(
        "&lt;div class=&quot;container&quot;&gt;\n  &lt;h1&gt;Hello &amp; Welcome!&lt;/h1&gt;\n  &lt;p&gt;Price: &euro;50 - Special offer: 50% off!&lt;/p&gt;\n  &lt;p&gt;Copyright &copy; 2024&lt;/p&gt;\n&lt;/div&gt;"
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
  const inputChars = input.length;
  const outputChars = output.length;
  const entityCount =
    mode === "decode" ? countHtmlEntities(input) : countHtmlEntities(output);
  const hasEntities = mode === "decode" && containsHtmlEntities(input);

  return (
    <div className="space-y-6">
      {/* Mode Toggle */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex rounded-xl border border-orange-200 bg-white p-1 dark:border-orange-800 dark:bg-gray-900">
          <button
            type="button"
            onClick={() => {
              setMode("encode");
              setOutput("");
              setResult(null);
            }}
            className={`cursor-pointer rounded-lg px-6 py-2 text-sm font-medium transition-colors ${
              mode === "encode"
                ? "bg-orange-600 text-white dark:bg-orange-500"
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
                ? "bg-orange-600 text-white dark:bg-orange-500"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            }`}
          >
            Decode
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {mode === "encode" && (
            <>
              <Checkbox
                checked={useNamedEntities}
                onChange={setUseNamedEntities}
                label="Named entities"
              />
              <Checkbox
                checked={encodeAll}
                onChange={setEncodeAll}
                label="Encode all"
              />
            </>
          )}
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
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-orange-200 bg-orange-50/50 p-4 dark:border-orange-800 dark:bg-orange-950/20">
        <input
          ref={fileInputRef}
          type="file"
          accept=".html,.txt,.xml,text/html,text/plain"
          onChange={handleFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-orange-700 transition-colors hover:bg-orange-100 dark:bg-gray-900 dark:text-orange-400 dark:hover:bg-gray-800"
        >
          <Upload className="h-4 w-4" aria-hidden="true" />
          Load from file
        </label>
        <button
          type="button"
          onClick={handleLoadSample}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-orange-700 transition-colors hover:bg-orange-100 dark:bg-gray-900 dark:text-orange-400 dark:hover:bg-gray-800"
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
        <div className="flex items-start gap-3 rounded-xl border border-orange-200 bg-orange-50 p-4 dark:border-orange-800/50 dark:bg-orange-950/30">
          <CheckCircle
            className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400"
            aria-hidden="true"
          />
          <div className="flex-1">
            <p className="font-medium text-orange-800 dark:text-orange-200">
              {mode === "encode"
                ? "Encoded successfully"
                : "Decoded successfully"}
            </p>
            {mode === "decode" && hasEntities && (
              <p className="mt-1 text-sm text-orange-700 dark:text-orange-300">
                Found {entityCount} HTML{" "}
                {entityCount === 1 ? "entity" : "entities"}
              </p>
            )}
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
              htmlFor="html-input"
            >
              Input {mode === "encode" ? "(Plain Text)" : "(HTML Entities)"}
            </label>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {inputChars.toLocaleString()} chars
            </div>
          </div>
          <textarea
            id="html-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === "encode"
                ? 'Enter text to encode (e.g., <div>Hello & "Goodbye"</div>)...'
                : "Enter HTML entities to decode (e.g., &lt;div&gt;&amp;nbsp;&lt;/div&gt;)..."
            }
            className="min-h-[400px] w-full rounded-xl border border-orange-200 bg-white/80 p-4 font-mono text-sm text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 dark:border-orange-800 dark:bg-gray-900/60 dark:text-gray-100"
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
              Output {mode === "encode" ? "(HTML Entities)" : "(Plain Text)"}
            </div>
            {output && (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex cursor-pointer items-center gap-1 text-xs text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
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
                  className="flex cursor-pointer items-center gap-1 text-xs text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
                >
                  <Download className="h-3 w-3" aria-hidden="true" />
                  Download
                </button>
              </div>
            )}
          </div>
          <div className="relative min-h-[400px] w-full overflow-auto rounded-xl border border-orange-200 bg-white/80 dark:border-orange-800 dark:bg-gray-900/60">
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
            {inputChars.toLocaleString()} characters
          </div>
          <div>
            <span className="font-medium">Output:</span>{" "}
            {outputChars.toLocaleString()} characters
          </div>
          {entityCount > 0 && (
            <div>
              <span className="font-medium">
                {mode === "encode" ? "Entities created" : "Entities decoded"}:
              </span>{" "}
              {entityCount}
            </div>
          )}
        </div>
      )}

      {/* Info Section */}
      <div className="rounded-xl border border-orange-200 bg-orange-50/30 p-6 dark:border-orange-800 dark:bg-orange-950/10">
        <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
          <Code
            className="h-5 w-5 text-orange-600 dark:text-orange-400"
            aria-hidden="true"
          />
          About HTML Encoding
        </h3>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>
            HTML encoding converts special characters into HTML entities to
            display them correctly in web pages and prevent XSS vulnerabilities.
          </p>
          <ul className="mt-2 ml-5 list-disc space-y-1">
            <li>
              <strong>Named entities:</strong> Use readable names like &amp;lt;
              &amp;gt; &amp;amp; instead of numeric codes
            </li>
            <li>
              <strong>Encode all:</strong> Convert every character to entities,
              including letters and numbers
            </li>
            <li>
              <strong>Line by line:</strong> Process each line independently,
              useful for multiple entries
            </li>
            <li>
              <strong>Live mode:</strong> See results in real-time as you type
              (all processing happens in your browser)
            </li>
          </ul>
          <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">
            Common entities: &amp;lt; (&lt;), &amp;gt; (&gt;), &amp;amp;
            (&amp;), &amp;quot; (&quot;), &amp;nbsp; (non-breaking space)
          </p>
        </div>
      </div>
    </div>
  );
}
