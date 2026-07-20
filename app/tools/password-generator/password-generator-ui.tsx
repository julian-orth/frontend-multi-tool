"use client";

import { useMemo, useState } from "react";
import { Check, Copy, Download, Eye, EyeOff, RefreshCcw, ShieldCheck } from "lucide-react";
import PrimaryButton from "@/components/primary-button";
import { Checkbox } from "@/components/checkbox";
import {
  estimateStrength,
  formatEntropy,
  generatePassphrase,
  generatePassword,
  GeneratorMode,
  getStrengthBarClass,
  getStrengthTextClass,
  type PassphraseOptions,
  type PasswordOptions,
} from "./utils";

export function PasswordGeneratorUI() {
  const [mode, setMode] = useState<GeneratorMode>("password");
  const [showValues, setShowValues] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [passwordOptions, setPasswordOptions] = useState<PasswordOptions>({
    length: 18,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
    customSymbols: "!@#$%^&*()-_=+[]{};:,.?/",
    excludeAmbiguous: false,
    requireEachSelectedSet: true,
    noRepeatedCharacters: false,
  });

  const [passphraseOptions, setPassphraseOptions] = useState<PassphraseOptions>({
    wordCount: 5,
    separator: "-",
    capitalization: "lower",
    includeTrailingNumber: true,
    includeTrailingSymbol: false,
  });

  const [count, setCount] = useState(5);
  const [results, setResults] = useState<string[]>([]);
  const [lastEntropy, setLastEntropy] = useState(0);
  const [lastCharsetSize, setLastCharsetSize] = useState(0);

  const strength = useMemo(() => estimateStrength(lastEntropy), [lastEntropy]);

  const generateBatch = () => {
    setError(null);
    try {
      const nextValues: string[] = [];
      let entropy = 0;
      let charsetSize = 0;

      for (let index = 0; index < count; index += 1) {
        const generated =
          mode === "password"
            ? generatePassword(passwordOptions)
            : generatePassphrase(passphraseOptions);
        nextValues.push(generated.value);
        entropy = generated.entropyBits;
        charsetSize = generated.charsetSize;
      }

      setResults(nextValues);
      setLastEntropy(entropy);
      setLastCharsetSize(charsetSize);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to generate values."
      );
      setResults([]);
      setLastEntropy(0);
      setLastCharsetSize(0);
    }
  };

  const handleCopy = async (value: string, index: number) => {
    await navigator.clipboard.writeText(value);
    setCopied(index);
    setTimeout(() => setCopied(null), 1400);
  };

  const handleCopyAll = async () => {
    if (results.length === 0) return;
    await navigator.clipboard.writeText(results.join("\n"));
    setCopied(-1);
    setTimeout(() => setCopied(null), 1400);
  };

  const handleDownload = () => {
    if (results.length === 0) return;
    const lines = [
      `Password Generator Export`,
      `Mode: ${mode}`,
      `Generated: ${new Date().toISOString()}`,
      `Entropy: ${formatEntropy(lastEntropy)}`,
      "",
      ...results,
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `passwords-${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-6 dark:border-indigo-900/70 dark:from-indigo-950/30 dark:via-gray-900 dark:to-cyan-950/20">
        <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-indigo-300/20 blur-2xl dark:bg-indigo-500/15" />
        <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-cyan-300/20 blur-2xl dark:bg-cyan-500/15" />

        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-800 dark:bg-gray-900/80 dark:text-indigo-300">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Browser-only generation
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
              Professional Password Generator
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Cryptographically secure output with entropy scoring and batch export.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-indigo-200 bg-white p-1 dark:border-indigo-800 dark:bg-gray-900">
            <button
              type="button"
              onClick={() => setMode("password")}
              className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                mode === "password"
                  ? "bg-indigo-600 text-white dark:bg-indigo-500"
                  : "text-gray-700 hover:bg-indigo-50 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              Password
            </button>
            <button
              type="button"
              onClick={() => setMode("passphrase")}
              className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                mode === "passphrase"
                  ? "bg-indigo-600 text-white dark:bg-indigo-500"
                  : "text-gray-700 hover:bg-indigo-50 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              Passphrase
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          {mode === "password" ? (
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="length" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Length
                  </label>
                  <span className="rounded-md bg-gray-100 px-2 py-0.5 text-sm font-semibold text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                    {passwordOptions.length}
                  </span>
                </div>
                <input
                  id="length"
                  type="range"
                  min={4}
                  max={64}
                  value={passwordOptions.length}
                  onChange={(event) =>
                    setPasswordOptions((prev) => ({
                      ...prev,
                      length: Number(event.target.value),
                    }))
                  }
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-indigo-600 dark:bg-gray-800"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Checkbox
                  checked={passwordOptions.includeUppercase}
                  onChange={(checked) =>
                    setPasswordOptions((prev) => ({ ...prev, includeUppercase: checked }))
                  }
                  label="Uppercase"
                />
                <Checkbox
                  checked={passwordOptions.includeLowercase}
                  onChange={(checked) =>
                    setPasswordOptions((prev) => ({ ...prev, includeLowercase: checked }))
                  }
                  label="Lowercase"
                />
                <Checkbox
                  checked={passwordOptions.includeNumbers}
                  onChange={(checked) =>
                    setPasswordOptions((prev) => ({ ...prev, includeNumbers: checked }))
                  }
                  label="Numbers"
                />
                <Checkbox
                  checked={passwordOptions.includeSymbols}
                  onChange={(checked) =>
                    setPasswordOptions((prev) => ({ ...prev, includeSymbols: checked }))
                  }
                  label="Symbols"
                />
              </div>

              {passwordOptions.includeSymbols && (
                <div>
                  <label htmlFor="symbols" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Symbol set
                  </label>
                  <input
                    id="symbols"
                    type="text"
                    value={passwordOptions.customSymbols}
                    onChange={(event) =>
                      setPasswordOptions((prev) => ({
                        ...prev,
                        customSymbols: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
                  />
                </div>
              )}

              <div className="grid gap-3 sm:grid-cols-2">
                <Checkbox
                  checked={passwordOptions.requireEachSelectedSet}
                  onChange={(checked) =>
                    setPasswordOptions((prev) => ({
                      ...prev,
                      requireEachSelectedSet: checked,
                    }))
                  }
                  label="Require each selected type"
                />
                <Checkbox
                  checked={passwordOptions.excludeAmbiguous}
                  onChange={(checked) =>
                    setPasswordOptions((prev) => ({ ...prev, excludeAmbiguous: checked }))
                  }
                  label="Exclude ambiguous chars"
                />
                <Checkbox
                  checked={passwordOptions.noRepeatedCharacters}
                  onChange={(checked) =>
                    setPasswordOptions((prev) => ({
                      ...prev,
                      noRepeatedCharacters: checked,
                    }))
                  }
                  label="No repeated characters"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="words" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Word count
                  </label>
                  <span className="rounded-md bg-gray-100 px-2 py-0.5 text-sm font-semibold text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                    {passphraseOptions.wordCount}
                  </span>
                </div>
                <input
                  id="words"
                  type="range"
                  min={3}
                  max={12}
                  value={passphraseOptions.wordCount}
                  onChange={(event) =>
                    setPassphraseOptions((prev) => ({
                      ...prev,
                      wordCount: Number(event.target.value),
                    }))
                  }
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-indigo-600 dark:bg-gray-800"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="separator" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Separator
                  </label>
                  <input
                    id="separator"
                    value={passphraseOptions.separator}
                    onChange={(event) =>
                      setPassphraseOptions((prev) => ({
                        ...prev,
                        separator: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
                  />
                </div>

                <div>
                  <label htmlFor="capitalization" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Capitalization
                  </label>
                  <select
                    id="capitalization"
                    value={passphraseOptions.capitalization}
                    onChange={(event) =>
                      setPassphraseOptions((prev) => ({
                        ...prev,
                        capitalization: event.target.value as PassphraseOptions["capitalization"],
                      }))
                    }
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
                  >
                    <option value="lower">lowercase</option>
                    <option value="title">Title Case</option>
                    <option value="upper">UPPERCASE</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Checkbox
                  checked={passphraseOptions.includeTrailingNumber}
                  onChange={(checked) =>
                    setPassphraseOptions((prev) => ({
                      ...prev,
                      includeTrailingNumber: checked,
                    }))
                  }
                  label="Append random number"
                />
                <Checkbox
                  checked={passphraseOptions.includeTrailingSymbol}
                  onChange={(checked) =>
                    setPassphraseOptions((prev) => ({
                      ...prev,
                      includeTrailingSymbol: checked,
                    }))
                  }
                  label="Append random symbol"
                />
              </div>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <label htmlFor="batch" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                How many to generate
              </label>
              <input
                id="batch"
                type="number"
                min={1}
                max={20}
                value={count}
                onChange={(event) =>
                  setCount(Math.max(1, Math.min(20, Number(event.target.value) || 1)))
                }
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <PrimaryButton onClick={generateBatch} className="min-w-40 gap-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                <RefreshCcw className="h-4 w-4" aria-hidden="true" />
                Generate
              </PrimaryButton>
              <PrimaryButton
                onClick={() => setShowValues((value) => !value)}
                variant="outline"
                className="border-indigo-500 text-indigo-700 dark:border-indigo-400 dark:text-indigo-300"
              >
                {showValues ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
              </PrimaryButton>
            </div>
          </div>

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-300">
              {error}
            </div>
          )}
        </div>

        <div className="space-y-4 rounded-2xl border border-indigo-200 bg-indigo-50/60 p-6 dark:border-indigo-900/60 dark:bg-indigo-950/20">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Security score</h3>
          <div className="overflow-hidden rounded-full bg-white/70 dark:bg-gray-900/60">
            <div
              className={`h-3 transition-all ${getStrengthBarClass(strength.score)}`}
              style={{ width: `${strength.score * 20}%` }}
            />
          </div>
          <p className={`text-sm font-semibold ${getStrengthTextClass(strength.score)}`}>
            {strength.label}
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-indigo-200 bg-white p-3 dark:border-indigo-800 dark:bg-gray-900">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Entropy</p>
              <p className="mt-1 font-semibold text-gray-900 dark:text-gray-50">{formatEntropy(lastEntropy)}</p>
            </div>
            <div className="rounded-xl border border-indigo-200 bg-white p-3 dark:border-indigo-800 dark:bg-gray-900">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Character space</p>
              <p className="mt-1 font-semibold text-gray-900 dark:text-gray-50">{lastCharsetSize || "-"}</p>
            </div>
          </div>
          <div className="rounded-xl border border-indigo-200 bg-white p-3 text-sm text-gray-700 dark:border-indigo-800 dark:bg-gray-900 dark:text-gray-300">
            Estimated offline cracking time: <span className="font-semibold text-gray-900 dark:text-gray-100">{strength.crackEstimate}</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Generated values</h3>
          <div className="flex flex-wrap gap-2">
            <PrimaryButton onClick={handleCopyAll} variant="outline" disabled={results.length === 0} className="h-10 gap-2 px-3">
              {copied === -1 ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
              Copy all
            </PrimaryButton>
            <PrimaryButton onClick={handleDownload} variant="outline" disabled={results.length === 0} className="h-10 gap-2 px-3">
              <Download className="h-4 w-4" aria-hidden="true" />
              Export
            </PrimaryButton>
          </div>
        </div>

        {results.length === 0 ? (
          <p className="rounded-xl border border-dashed border-gray-300 p-6 text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
            Generate passwords to view results here.
          </p>
        ) : (
          <div className="space-y-2">
            {results.map((value, index) => (
              <div
                key={`${value}-${index}`}
                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-700 dark:bg-gray-950"
              >
                <code className="min-w-0 flex-1 truncate text-sm text-gray-900 dark:text-gray-100">
                  {showValues ? value : "•".repeat(Math.min(value.length, 48))}
                </code>
                <button
                  type="button"
                  onClick={() => void handleCopy(value, index)}
                  className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 transition hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
                  aria-label={`Copy generated value ${index + 1}`}
                >
                  {copied === index ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
