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
import {
  generateHash,
  generateHMAC,
  type HashAlgorithm,
  type HashResult,
  type InputFormat,
} from "./utils";

const ALGORITHMS: HashAlgorithm[] = ["MD5", "SHA-1", "SHA-256", "SHA-512"];

export function HashGeneratorUI() {
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
      setError("Please enter some text to hash");
      return;
    }

    if (useHMAC && !hmacKey) {
      setError("Please enter an HMAC key");
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
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setIsProcessing(false);
    }
  }, [input, inputFormat, useHMAC, hmacKey]);

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
    let content = `Hash Generation Results\n`;
    content += `Generated: ${timestamp}\n`;
    content += `Input Format: ${inputFormat}\n`;
    content += `HMAC: ${useHMAC ? "Yes" : "No"}\n`;
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
  }, [results, inputFormat, useHMAC]);

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
        setError("File size must be less than 10MB");
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
        setError("Failed to read file");
      };
      reader.readAsText(file);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    []
  );

  // Get algorithm info
  const getAlgorithmInfo = (algo: HashAlgorithm) => {
    const info: Record<
      HashAlgorithm,
      { length: string; security: string; color: string }
    > = {
      MD5: {
        length: "128-bit (32 hex characters)",
        security: "Broken - not recommended for security",
        color: "red",
      },
      "SHA-1": {
        length: "160-bit (40 hex characters)",
        security: "Deprecated - avoid for new applications",
        color: "orange",
      },
      "SHA-256": {
        length: "256-bit (64 hex characters)",
        security: "Strong - recommended for most uses",
        color: "green",
      },
      "SHA-512": {
        length: "512-bit (128 hex characters)",
        security: "Very strong - high security applications",
        color: "green",
      },
    };
    return info[algo];
  };

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
            Input format:
          </label>
          <select
            id="input-format"
            value={inputFormat}
            onChange={(e) => setInputFormat(e.target.value as InputFormat)}
            className="rounded-lg border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-indigo-800 dark:bg-gray-900 dark:text-gray-100"
          >
            <option value="text">Text (UTF-8)</option>
            <option value="hex">Hexadecimal</option>
            <option value="base64">Base64</option>
          </select>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Checkbox
            checked={useHMAC}
            onChange={(checked) => {
              setUseHMAC(checked);
              if (!checked) setHmacKey("");
            }}
            label="HMAC mode"
          />
          <Checkbox
            checked={liveMode}
            onChange={setLiveMode}
            label="Live mode"
          />
        </div>

        <div className="ml-auto flex flex-wrap gap-2">
          <PrimaryButton
            onClick={handleGenerate}
            className="px-6"
            disabled={liveMode || isProcessing}
          >
            {isProcessing ? "Generating..." : "Generate Hashes"}
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
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-indigo-200 bg-indigo-50/50 p-4 dark:border-indigo-800 dark:bg-indigo-950/20">
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
          Load from file
        </label>
        <button
          type="button"
          onClick={handleLoadSample}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-100 dark:bg-gray-900 dark:text-indigo-400 dark:hover:bg-gray-800"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Load sample
        </button>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Max file size: 10MB
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
            Input
          </label>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {input.length.toLocaleString()} chars ({inputBytes} bytes)
          </div>
        </div>
        <textarea
          id="hash-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            inputFormat === "text"
              ? "Enter text to hash..."
              : inputFormat === "hex"
                ? "Enter hexadecimal string (e.g., 48656c6c6f)..."
                : "Enter Base64 string..."
          }
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
            HMAC Secret Key
          </label>
          <input
            id="hmac-key"
            type="text"
            value={hmacKey}
            onChange={(e) => setHmacKey(e.target.value)}
            placeholder="Enter secret key for HMAC..."
            className="w-full rounded-xl border border-indigo-200 bg-white/80 px-4 py-3 font-mono text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-indigo-800 dark:bg-gray-900/60 dark:text-gray-100"
          />
          <div className="flex items-start gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950/30">
            <Info
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400"
              aria-hidden="true"
            />
            <p className="text-xs text-blue-700 dark:text-blue-300">
              HMAC (Hash-based Message Authentication Code) uses a secret key to
              create authenticated hashes. Only parties with the key can
              generate or verify the hash.
            </p>
          </div>
        </div>
      )}

      {/* Results Grid */}
      {hasResults && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              Hash Results {useHMAC && "(HMAC)"}
            </h3>
            <PrimaryButton
              onClick={handleDownload}
              variant="outline"
              className="flex items-center gap-2 px-4 py-2"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download All
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
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" aria-hidden="true" />
                          Copy
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
        <div className="rounded-xl border border-indigo-200 bg-indigo-50/30 p-6 dark:border-indigo-800 dark:bg-indigo-950/10">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
            About Hash Generation
          </h3>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              This tool generates cryptographic hashes using multiple algorithms
              simultaneously. All computations are performed locally in your
              browser using the Web Crypto API.
            </p>
            <ul className="mt-3 ml-5 list-disc space-y-1">
              <li>
                <strong>MD5:</strong> Fast but cryptographically broken, use
                only for checksums
              </li>
              <li>
                <strong>SHA-1:</strong> Deprecated, avoid for new applications
              </li>
              <li>
                <strong>SHA-256:</strong> Industry standard, recommended for
                most uses
              </li>
              <li>
                <strong>SHA-512:</strong> Maximum security for sensitive
                applications
              </li>
              <li>
                <strong>HMAC:</strong> Add a secret key for message
                authentication
              </li>
            </ul>
            <p className="mt-3 text-xs italic">
              All hash calculations happen in your browser. No data is sent to
              any server.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
