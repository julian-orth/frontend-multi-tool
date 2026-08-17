"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  Copy,
  Check,
  Download,
  Trash2,
  Upload,
  FileText,
  Info,
} from "lucide-react";
import PrimaryButton from "@/components/primary-button";
import { Checkbox } from "@/components/checkbox";
import { StyledSelect } from "@/components/styled-select";
import { useLocale } from "@/lib/contexts/locale-context";
import {
  generateHash,
  generateHMAC,
  type HashAlgorithm,
  type HashResult,
  type InputFormat,
} from "./utils";
import { uiContent } from "./content";

const ALGORITHMS: HashAlgorithm[] = ["MD5", "SHA-1", "SHA-256", "SHA-512"];

export function HashGeneratorUI() {
  const { locale } = useLocale();
  const c = uiContent[locale];
  const [input, setInput] = useState("");
  const [algorithm, setAlgorithm] = useState<HashAlgorithm>("SHA-256");
  const [inputFormat, setInputFormat] = useState<InputFormat>("text");
  const [useHMAC, setUseHMAC] = useState(false);
  const [hmacKey, setHmacKey] = useState("");
  const [liveMode, setLiveMode] = useState(false);
  const [results, setResults] = useState<Record<HashAlgorithm, string>>({
    MD5: "",
    "SHA-1": "",
    "SHA-256": "",
    "SHA-512": "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleGenerate = useCallback(async () => {
    if (!input) {
      setError(c.errors.emptyInput);
      return;
    }

    if (useHMAC && !hmacKey) {
      setError(c.errors.missingHmacKey);
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const newResults: Record<HashAlgorithm, string> = {
        MD5: "",
        "SHA-1": "",
        "SHA-256": "",
        "SHA-512": "",
      };

      // Generate hash for all algorithms
      for (const algo of ALGORITHMS) {
        let result: HashResult;
        if (useHMAC) {
          result = await generateHMAC(input, hmacKey, algo, inputFormat);
        } else {
          result = await generateHash(input, algo, inputFormat);
        }

        if (result.success && result.hash) {
          newResults[algo] = result.hash;
        } else if (result.error) {
          setError(result.error);
          setIsProcessing(false);
          return;
        }
      }

      setResults(newResults);
    } catch (err) {
      setError(err instanceof Error ? err.message : c.errors.unexpected);
    } finally {
      setIsProcessing(false);
    }
  }, [input, inputFormat, useHMAC, hmacKey, c]);

  // Live mode processing: intentionally re-syncs output to input on every
  // change while the user has live mode on (an explicit opt-in toggle, not
  // the default), as opposed to the manual "Generate" button flow below.
  useEffect(() => {
    if (liveMode && input) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      handleGenerate();
    } else if (!input) {
      setResults({ MD5: "", "SHA-1": "", "SHA-256": "", "SHA-512": "" });
      setError(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, algorithm, inputFormat, useHMAC, hmacKey, liveMode]);

  const handleClear = useCallback(() => {
    setInput("");
    setHmacKey("");
    setResults({ MD5: "", "SHA-1": "", "SHA-256": "", "SHA-512": "" });
    setError(null);
  }, []);

  const handleCopy = useCallback(
    (algo: HashAlgorithm) => {
      navigator.clipboard.writeText(results[algo]);
      setCopied(algo);
      setTimeout(() => setCopied(null), 1500);
    },
    [results]
  );

  const handleDownload = useCallback(() => {
    const timestamp = new Date().toISOString();
    let content = `${c.downloadFile.header}\n`;
    content += `${c.downloadFile.generated}: ${timestamp}\n`;
    content += `${c.downloadFile.inputFormat}: ${inputFormat}\n`;
    content += `${c.downloadFile.hmac}: ${useHMAC ? c.downloadFile.yes : c.downloadFile.no}\n`;
    content += `\n${"=".repeat(60)}\n\n`;

    ALGORITHMS.forEach((algo) => {
      if (results[algo]) {
        content += `${algo}:\n${results[algo]}\n\n`;
      }
    });

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hash-results-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [results, inputFormat, useHMAC, c]);

  const handleLoadSample = useCallback(() => {
    setInput("The quick brown fox jumps over the lazy dog");
    setResults({ MD5: "", "SHA-1": "", "SHA-256": "", "SHA-512": "" });
    setError(null);
  }, []);

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      // Limit file size to 10MB for performance
      if (file.size > 10 * 1024 * 1024) {
        setError(c.errors.fileTooLarge);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setInput(content);
        setResults({ MD5: "", "SHA-1": "", "SHA-256": "", "SHA-512": "" });
        setError(null);
      };
      reader.onerror = () => {
        setError(c.errors.fileReadFailed);
      };
      reader.readAsText(file);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    [c]
  );

  const ALGORITHM_COLORS: Record<HashAlgorithm, string> = {
    MD5: "red",
    "SHA-1": "orange",
    "SHA-256": "green",
    "SHA-512": "green",
  };

  // Get algorithm info
  const getAlgorithmInfo = (algo: HashAlgorithm) => ({
    ...c.algorithmInfo[algo],
    color: ALGORITHM_COLORS[algo],
  });

  const inputBytes = new Blob([input]).size;
  const hasResults = Object.values(results).some((r) => r.length > 0);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <label
            htmlFor="input-format"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {c.inputFormatLabel}
          </label>
          <StyledSelect
            id="input-format"
            value={inputFormat}
            onChange={(v) => setInputFormat(v as InputFormat)}
            options={[
              { value: "text", label: c.inputFormatOptions.text },
              { value: "hex", label: c.inputFormatOptions.hex },
              { value: "base64", label: c.inputFormatOptions.base64 },
            ]}
            className="border-indigo-200 bg-white text-sm font-medium text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-indigo-800 dark:bg-gray-900 dark:text-gray-100"
            listClassName="border-indigo-200 bg-white dark:border-indigo-800 dark:bg-gray-900"
            optionActiveClassName="bg-indigo-600 font-medium text-white dark:bg-indigo-500"
            optionClassName="text-gray-700 hover:bg-indigo-50 dark:text-gray-300 dark:hover:bg-gray-800"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Checkbox
            checked={useHMAC}
            onChange={(checked) => {
              setUseHMAC(checked);
              if (!checked) setHmacKey("");
            }}
            label={c.hmacModeLabel}
          />
          <Checkbox
            checked={liveMode}
            onChange={setLiveMode}
            label={c.liveModeLabel}
          />
        </div>

        <div className="ml-auto flex flex-wrap gap-2">
          <PrimaryButton
            onClick={handleGenerate}
            className="px-6"
            disabled={liveMode || isProcessing}
          >
            {isProcessing ? c.generatingButton : c.generateButton}
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

      {/* Load from File/Sample */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-indigo-200 bg-indigo-50/50 p-4 dark:border-gray-700 dark:bg-gray-800/40">
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
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-100 dark:bg-gray-900 dark:text-indigo-400 dark:hover:bg-gray-800"
        >
          <Upload className="h-4 w-4" aria-hidden="true" />
          {c.loadFromFileLabel}
        </label>
        <button
          type="button"
          onClick={handleLoadSample}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-100 dark:bg-gray-900 dark:text-indigo-400 dark:hover:bg-gray-800"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          {c.loadSampleLabel}
        </button>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {c.maxFileSize}
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-800/50 dark:bg-red-950/30">
          <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
        </div>
      )}

      {/* Input Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            className="text-sm font-semibold text-gray-700 dark:text-gray-300"
            htmlFor="hash-input"
          >
            {c.inputLabel}
          </label>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {c.charsBytes(input.length, inputBytes)}
          </div>
        </div>
        <textarea
          id="hash-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={c.placeholders[inputFormat]}
          className="min-h-[150px] w-full rounded-xl border border-indigo-200 bg-white/80 p-4 font-mono text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-indigo-800 dark:bg-gray-900/60 dark:text-gray-100"
          spellCheck={false}
        />
      </div>

      {/* HMAC Key Input */}
      {useHMAC && (
        <div className="space-y-2">
          <label
            className="text-sm font-semibold text-gray-700 dark:text-gray-300"
            htmlFor="hmac-key"
          >
            {c.hmacKeyLabel}
          </label>
          <input
            id="hmac-key"
            type="text"
            value={hmacKey}
            onChange={(e) => setHmacKey(e.target.value)}
            placeholder={c.hmacKeyPlaceholder}
            className="w-full rounded-xl border border-indigo-200 bg-white/80 px-4 py-3 font-mono text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-indigo-800 dark:bg-gray-900/60 dark:text-gray-100"
          />
          <div className="flex items-start gap-2 rounded-lg bg-blue-50 p-3 dark:bg-gray-800/40">
            <Info
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400"
              aria-hidden="true"
            />
            <p className="text-xs text-blue-700 dark:text-blue-300">
              {c.hmacInfo}
            </p>
          </div>
        </div>
      )}

      {/* Results Grid */}
      {hasResults && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              {c.resultsTitle(useHMAC)}
            </h3>
            <PrimaryButton
              onClick={handleDownload}
              variant="outline"
              className="flex items-center gap-2 px-4 py-2"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {c.downloadAllButton}
            </PrimaryButton>
          </div>

          <div className="space-y-4">
            {ALGORITHMS.map((algo) => {
              const info = getAlgorithmInfo(algo);
              const hash = results[algo];
              if (!hash) return null;

              return (
                <div
                  key={algo}
                  className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                        {algo}
                      </h4>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                        {info.length}
                      </p>
                      <p
                        className={`mt-1 text-xs font-medium ${
                          info.color === "green"
                            ? "text-green-600 dark:text-green-400"
                            : info.color === "orange"
                              ? "text-orange-600 dark:text-orange-400"
                              : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {info.security}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(algo)}
                      className="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-950/30"
                      disabled={copied === algo}
                    >
                      {copied === algo ? (
                        <>
                          <Check className="h-4 w-4" aria-hidden="true" />
                          {c.copiedButton}
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" aria-hidden="true" />
                          {c.copyButton}
                        </>
                      )}
                    </button>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
                    <code className="font-mono text-xs break-all text-gray-900 dark:text-gray-100">
                      {hash}
                    </code>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Info Section */}
      {!hasResults && (
        <div className="rounded-xl border border-indigo-200 bg-indigo-50/30 p-6 dark:border-gray-700 dark:bg-gray-800/30">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
            {c.aboutTitle}
          </h3>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>{c.aboutIntro}</p>
            <ul className="mt-3 ml-5 list-disc space-y-1">
              {c.aboutList.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong> {item.text}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs italic">{c.aboutPrivacyNote}</p>
          </div>
        </div>
      )}
    </div>
  );
}
