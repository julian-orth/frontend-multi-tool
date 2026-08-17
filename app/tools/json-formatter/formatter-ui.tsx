"use client";
import React, { useState, useCallback } from "react";
import {
  Copy,
  Check,
  Download,
  AlertCircle,
  CheckCircle,
  FileJson,
  Trash2,
  Upload,
  Link,
} from "lucide-react";
import PrimaryButton from "@/components/primary-button";
import { Checkbox } from "@/components/checkbox";
import { StyledSelect } from "@/components/styled-select";
import { useLocale } from "@/lib/contexts/locale-context";
import { formatJson, minifyJson, validateJson } from "./utils";
import { uiContent } from "./content";

type ValidationResult = {
  isValid: boolean;
  error?: string;
  line?: number;
  column?: number;
};

export function JsonFormatterUI() {
  const { locale } = useLocale();
  const c = uiContent[locale];
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [indentSize, setIndentSize] = useState<2 | 3 | 4>(2);
  const [sortKeys, setSortKeys] = useState(false);
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const [isLoadingUrl, setIsLoadingUrl] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [showUrlInput, setShowUrlInput] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFormat = useCallback(() => {
    const result = formatJson(input, indentSize, sortKeys);
    setOutput(result.formatted);
    setValidation(result.validation);
  }, [input, indentSize, sortKeys]);

  const handleMinify = useCallback(() => {
    const result = minifyJson(input);
    setOutput(result.formatted);
    setValidation(result.validation);
  }, [input]);

  const handleValidate = useCallback(() => {
    const result = validateJson(input);
    setValidation(result);
    if (result.isValid) {
      setOutput(input); // Show the valid JSON as-is
    }
  }, [input]);

  const handleClear = useCallback(() => {
    setInput("");
    setOutput("");
    setValidation(null);
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [output]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([output], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `formatted-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [output]);

  const handleLoadSample = useCallback(() => {
    const sample = `{"name":"John Doe","age":30,"email":"john@example.com","address":{"street":"123 Main St","city":"New York","country":"USA"},"hobbies":["reading","coding","hiking"],"isActive":true,"balance":1234.56,"metadata":null}`;
    setInput(sample);
    setOutput("");
    setValidation(null);
  }, []);

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setInput(content);
        setOutput("");
        setValidation(null);
      };
      reader.onerror = () => {
        setValidation({
          isValid: false,
          error: c.fileReadFailed,
        });
      };
      reader.readAsText(file);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    [c]
  );

  const handleLoadFromUrl = useCallback(async () => {
    if (!urlInput.trim()) return;

    setIsLoadingUrl(true);
    setValidation(null);

    try {
      const response = await fetch(urlInput.trim());
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.text();
      setInput(data);
      setOutput("");
      setShowUrlInput(false);
      setUrlInput("");
    } catch (error) {
      setValidation({
        isValid: false,
        error: c.loadUrlFailed(
          error instanceof Error ? error.message : String(error)
        ),
      });
    } finally {
      setIsLoadingUrl(false);
    }
  }, [urlInput, c]);

  // Calculate line numbers for output
  const outputLines = output.split("\n");
  const lineCount = outputLines.length;

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-col">
          <label className="mb-1 block text-sm font-medium" htmlFor="indent">
            {c.indentSizeLabel}
          </label>
          <div style={{ width: "150px" }}>
            <StyledSelect
              id="indent"
              value={String(indentSize)}
              onChange={(v) => setIndentSize(Number(v) as 2 | 3 | 4)}
              options={[
                { value: "2", label: c.indentOptions[2] },
                { value: "3", label: c.indentOptions[3] },
                { value: "4", label: c.indentOptions[4] },
              ]}
              className="w-full rounded-xl border-green-200 bg-white/80 text-sm font-medium text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-green-800 dark:bg-gray-900/60 dark:text-gray-100"
              listClassName="rounded-xl border-green-200 bg-white dark:border-green-800 dark:bg-gray-900"
              optionActiveClassName="bg-green-600 font-medium text-white dark:bg-green-500"
              optionClassName="text-gray-700 hover:bg-green-50 dark:text-gray-300 dark:hover:bg-gray-800"
            />
          </div>
        </div>
        <div style={{ position: "relative", top: "10px" }}>
          <Checkbox
            checked={sortKeys}
            onChange={setSortKeys}
            label={c.sortKeysLabel}
          />
        </div>
        <div style={{ position: "relative", top: "10px" }}>
          <Checkbox
            checked={showLineNumbers}
            onChange={setShowLineNumbers}
            label={c.lineNumbersLabel}
          />
        </div>
        <div className="ml-auto flex flex-wrap gap-2">
          <PrimaryButton onClick={handleFormat} className="px-6">
            {c.formatButton}
          </PrimaryButton>
          <PrimaryButton
            onClick={handleMinify}
            variant="outline"
            className="px-6"
          >
            {c.minifyButton}
          </PrimaryButton>
          <PrimaryButton
            onClick={handleValidate}
            variant="outline"
            className="px-6"
          >
            {c.validateButton}
          </PrimaryButton>
          <PrimaryButton
            onClick={handleClear}
            variant="outline"
            className="px-4"
            aria-label={c.clearButtonAriaLabel}
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </PrimaryButton>
        </div>
      </div>

      {/* Load from File/URL */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-green-200 bg-green-50/50 p-4 dark:border-green-800 dark:bg-green-950/20">
        <input
          ref={fileInputRef}
          type="file"
          accept=".json,application/json,text/plain"
          onChange={handleFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-100 dark:bg-gray-900 dark:text-green-400 dark:hover:bg-gray-800"
        >
          <Upload className="h-4 w-4" aria-hidden="true" />
          {c.loadFromFileLabel}
        </label>

        {!showUrlInput ? (
          <>
            <button
              type="button"
              onClick={() => setShowUrlInput(true)}
              className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-100 dark:bg-gray-900 dark:text-green-400 dark:hover:bg-gray-800"
            >
              <Link className="h-4 w-4" aria-hidden="true" />
              {c.loadFromUrlLabel}
            </button>
            <button
              type="button"
              onClick={handleLoadSample}
              className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-100 dark:bg-gray-900 dark:text-green-400 dark:hover:bg-gray-800"
            >
              <FileJson className="h-4 w-4" aria-hidden="true" />
              {c.loadSampleLabel}
            </button>
          </>
        ) : (
          <div className="flex flex-1 flex-wrap items-center gap-2">
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleLoadFromUrl();
                } else if (e.key === "Escape") {
                  setShowUrlInput(false);
                  setUrlInput("");
                }
              }}
              placeholder={c.urlPlaceholder}
              className="flex-1 rounded-lg border border-green-300 bg-white px-3 py-2 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-500 dark:border-green-700 dark:bg-gray-900 dark:text-gray-100"
              disabled={isLoadingUrl}
            />
            <PrimaryButton
              onClick={handleLoadFromUrl}
              disabled={!urlInput.trim() || isLoadingUrl}
              className="px-4"
            >
              {isLoadingUrl ? c.loadingButton : c.loadButton}
            </PrimaryButton>
            <button
              type="button"
              onClick={() => {
                setShowUrlInput(false);
                setUrlInput("");
              }}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              disabled={isLoadingUrl}
            >
              {c.cancelButton}
            </button>
          </div>
        )}
      </div>

      {/* Validation status */}
      {validation && (
        <div
          className={`flex items-start gap-3 rounded-xl border p-4 ${
            validation.isValid
              ? "border-green-200 bg-green-50 dark:border-green-800/50 dark:bg-green-950/30"
              : "border-red-200 bg-red-50 dark:border-red-800/50 dark:bg-red-950/30"
          }`}
        >
          {validation.isValid ? (
            <CheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400"
              aria-hidden="true"
            />
          ) : (
            <AlertCircle
              className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400"
              aria-hidden="true"
            />
          )}
          <div className="flex-1">
            <p
              className={`font-medium ${
                validation.isValid
                  ? "text-green-800 dark:text-green-200"
                  : "text-red-800 dark:text-red-200"
              }`}
            >
              {validation.isValid ? c.validJson : c.invalidJson}
            </p>
            {!validation.isValid && validation.error && (
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                {validation.error}
                {validation.line !== undefined &&
                  validation.column !== undefined && (
                    <span className="ml-2 font-mono text-xs">
                      {c.lineColumn(validation.line, validation.column)}
                    </span>
                  )}
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
              htmlFor="json-input"
            >
              {c.inputLabel}
            </label>
          </div>
          <textarea
            id="json-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={c.inputPlaceholder}
            className="min-h-[400px] w-full rounded-xl border border-green-200 bg-white/80 p-4 font-mono text-sm text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500 dark:border-green-800 dark:bg-gray-900/60 dark:text-gray-100"
            spellCheck={false}
          />
        </div>

        {/* Output */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span
              className="text-sm font-semibold text-gray-700 dark:text-gray-300"
              aria-label={c.outputLabel}
            >
              {c.outputLabel}
            </span>
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
                      {c.copiedButton}
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" aria-hidden="true" />
                      {c.copyButton}
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="flex cursor-pointer items-center gap-1 text-xs text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                >
                  <Download className="h-3 w-3" aria-hidden="true" />
                  {c.downloadButton}
                </button>
              </div>
            )}
          </div>
          <div
            className="relative min-h-[400px] w-full overflow-auto rounded-xl border border-green-200 bg-white/80 dark:border-green-800 dark:bg-gray-900/60"
            role="region"
            aria-label="JSON output display"
          >
            {output ? (
              <div className="flex">
                {showLineNumbers && (
                  <div className="border-r border-green-200 bg-gray-50 px-3 py-4 text-right font-mono text-xs text-gray-500 select-none dark:border-green-800 dark:bg-gray-950/50 dark:text-gray-500">
                    {Array.from({ length: lineCount }, (_, i) => (
                      <div key={i + 1} className="leading-6">
                        {i + 1}
                      </div>
                    ))}
                  </div>
                )}
                <pre className="flex-1 p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  <code className="json-syntax">{output}</code>
                </pre>
              </div>
            ) : (
              <div className="flex h-[400px] items-center justify-center text-gray-500 dark:text-gray-400">
                <p className="text-sm">{c.outputPlaceholder}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      {output && (
        <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
          <div>
            <span className="font-medium">{c.charactersLabel}</span>{" "}
            {output.length.toLocaleString()}
          </div>
          <div>
            <span className="font-medium">{c.linesLabel}</span>{" "}
            {lineCount.toLocaleString()}
          </div>
          <div>
            <span className="font-medium">{c.sizeLabel}</span>{" "}
            {(new Blob([output]).size / 1024).toFixed(2)} KB
          </div>
        </div>
      )}
    </div>
  );
}
