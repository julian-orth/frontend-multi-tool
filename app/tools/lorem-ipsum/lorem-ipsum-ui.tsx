"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  Copy,
  Check,
  Download,
  Zap,
  Trash2,
  ChevronDown,
  FileText,
} from "lucide-react";
import PrimaryButton from "@/components/primary-button";
import { Checkbox } from "@/components/checkbox";
import {
  generateLoremIpsum,
  getCharacterCount,
  getWordCount,
  getParagraphCount,
  type GeneratorMode,
  type GeneratorType,
} from "./utils";
import "@/lib/styles/form-utilities.css";

export function LoremIpsumUI() {
  const [mode, setMode] = useState<GeneratorMode>("paragraphs");
  const [type, setType] = useState<GeneratorType>("classic");
  const [count, setCount] = useState(5);
  const [startWithLorem, setStartWithLorem] = useState(true);
  // Lazily generate the initial text once on mount instead of starting
  // empty and syncing it in via an effect.
  const [result, setResult] = useState(() =>
    generateLoremIpsum({ mode, count, startWithLorem, type })
  );
  const [copied, setCopied] = useState(false);
  const [liveMode, setLiveMode] = useState(true);

  // Generate text automatically
  const performGenerate = useCallback(() => {
    const generated = generateLoremIpsum({ mode, count, startWithLorem, type });
    setResult(generated);
  }, [mode, count, startWithLorem, type]);

  // Live mode - generate as options change
  useEffect(() => {
    if (liveMode) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      performGenerate();
    }
  }, [mode, count, startWithLorem, type, liveMode, performGenerate]);

  const handleGenerate = useCallback(() => {
    if (!liveMode) {
      performGenerate();
    }
  }, [liveMode, performGenerate]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [result]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([result], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const filename = `lorem-ipsum-${mode}-${count}-${new Date()
      .toISOString()
      .slice(0, 10)}.txt`;
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [result, mode, count]);

  const handleClear = useCallback(() => {
    setResult("");
    setMode("paragraphs");
    setType("classic");
    setCount(5);
    setStartWithLorem(true);
  }, []);

  const charCount = getCharacterCount(result);
  const wordCount = getWordCount(result);
  const paragraphCount = getParagraphCount(result);

  return (
    <div className="space-y-6">
      {/* Generation Options */}
      <form
        className="flex w-full flex-wrap items-end gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleGenerate();
        }}
      >
        <div className="flex flex-col">
          <label
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="lorem-type"
          >
            Type
          </label>
          <div className="select-icon-wrapper" style={{ minWidth: "150px" }}>
            <select
              id="lorem-type"
              className="h-12 w-full cursor-pointer appearance-none rounded-xl border border-yellow-200 bg-white/80 px-3 pr-10 text-sm font-medium text-gray-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 dark:border-yellow-800 dark:bg-gray-900/60 dark:text-gray-100"
              value={type}
              onChange={(e) => setType(e.target.value as GeneratorType)}
            >
              <option value="classic">Classic</option>
              <option value="bacon">🥓 Bacon</option>
              <option value="hipster">🧔 Hipster</option>
              <option value="pirate">🏴‍☠️ Pirate</option>
              <option value="cat">🐱 Cat</option>
            </select>
            <ChevronDown
              className="select-icon h-4 w-4 text-gray-400 dark:text-gray-300"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="lorem-mode"
          >
            Generate
          </label>
          <div className="select-icon-wrapper" style={{ minWidth: "150px" }}>
            <select
              id="lorem-mode"
              className="h-12 w-full cursor-pointer appearance-none rounded-xl border border-yellow-200 bg-white/80 px-3 pr-10 text-sm font-medium text-gray-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 dark:border-yellow-800 dark:bg-gray-900/60 dark:text-gray-100"
              value={mode}
              onChange={(e) => setMode(e.target.value as GeneratorMode)}
            >
              <option value="paragraphs">Paragraphs</option>
              <option value="sentences">Sentences</option>
              <option value="words">Words</option>
            </select>
            <ChevronDown
              className="select-icon h-4 w-4 text-gray-400 dark:text-gray-300"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="lorem-count"
          >
            Count
          </label>
          <input
            id="lorem-count"
            type="number"
            min="1"
            max={mode === "words" ? 1000 : mode === "sentences" ? 100 : 50}
            value={count}
            onChange={(e) =>
              setCount(Math.max(1, parseInt(e.target.value) || 1))
            }
            className="h-12 w-32 rounded-xl border border-yellow-200 bg-white/80 px-3 text-sm font-medium text-gray-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 dark:border-yellow-800 dark:bg-gray-900/60 dark:text-gray-100"
          />
        </div>

        <div className="flex items-center" style={{ marginTop: "23px" }}>
          <Checkbox
            checked={startWithLorem}
            onChange={setStartWithLorem}
            label={
              type === "classic"
                ? 'Start with "Lorem ipsum..."'
                : "Random start"
            }
            disabled={type !== "classic"}
          />
        </div>

        <div className="ml-auto flex flex-wrap items-center gap-2">
          <Checkbox
            checked={liveMode}
            onChange={setLiveMode}
            label="Live mode"
          />
        </div>
      </form>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <PrimaryButton
          onClick={handleGenerate}
          className="px-6"
          disabled={liveMode}
        >
          <Zap className="mr-2 h-4 w-4" aria-hidden="true" />
          Generate
        </PrimaryButton>

        <PrimaryButton
          onClick={handleCopy}
          variant="outline"
          className="px-6"
          disabled={!result}
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" aria-hidden="true" />
              Copied
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" aria-hidden="true" />
              Copy
            </>
          )}
        </PrimaryButton>

        <PrimaryButton
          onClick={handleDownload}
          variant="outline"
          className="px-6"
          disabled={!result}
        >
          <Download className="mr-2 h-4 w-4" aria-hidden="true" />
          Download
        </PrimaryButton>

        <PrimaryButton onClick={handleClear} variant="outline" className="px-4">
          <Trash2 className="h-4 w-4" aria-hidden="true" />
        </PrimaryButton>
      </div>

      {/* Statistics */}
      {result && (
        <div className="flex flex-wrap gap-6 rounded-xl border border-yellow-200 bg-yellow-50/30 p-4 dark:border-yellow-800 dark:bg-yellow-950/20">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Characters
            </span>
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {charCount.toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Words
            </span>
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {wordCount.toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Paragraphs
            </span>
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {paragraphCount.toLocaleString()}
            </span>
          </div>
        </div>
      )}

      {/* Result Display */}
      <div className="flex flex-col">
        <div className="mb-2 flex items-center justify-between">
          <label
            className="text-sm font-semibold text-gray-700 dark:text-gray-300"
            htmlFor="lorem-result"
          >
            Generated Text
          </label>
        </div>
        <textarea
          id="lorem-result"
          aria-label="Generated Lorem Ipsum text"
          value={result}
          readOnly
          className="min-h-[400px] w-full rounded-xl border border-yellow-200 bg-white/60 p-4 font-serif text-base leading-relaxed text-gray-900 shadow-inner focus:ring-2 focus:ring-yellow-500 dark:border-yellow-800 dark:bg-gray-900/60 dark:text-gray-100"
          placeholder="Generated Lorem Ipsum text will appear here..."
        />
      </div>

      {/* Quick Presets */}
      <details className="rounded-xl border border-yellow-200 bg-yellow-50/30 dark:border-yellow-800 dark:bg-yellow-950/20">
        <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4" aria-hidden="true" />
            Quick Presets
            <ChevronDown className="ml-auto h-4 w-4" aria-hidden="true" />
          </div>
        </summary>
        <div className="border-t border-yellow-200 p-4 dark:border-yellow-800">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <button
              type="button"
              onClick={() => {
                setType("classic");
                setMode("paragraphs");
                setCount(3);
                setStartWithLorem(true);
              }}
              className="flex cursor-pointer flex-col rounded-lg border border-yellow-200 bg-white p-3 text-left transition-all hover:border-yellow-300 hover:shadow-sm dark:border-yellow-800 dark:bg-gray-900 dark:hover:border-yellow-700"
            >
              <div className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                Short (3 paragraphs)
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Quick placeholder for small sections
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setType("classic");
                setMode("paragraphs");
                setCount(5);
                setStartWithLorem(true);
              }}
              className="flex cursor-pointer flex-col rounded-lg border border-yellow-200 bg-white p-3 text-left transition-all hover:border-yellow-300 hover:shadow-sm dark:border-yellow-800 dark:bg-gray-900 dark:hover:border-yellow-700"
            >
              <div className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                Medium (5 paragraphs)
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Standard lorem ipsum content
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setType("classic");
                setMode("paragraphs");
                setCount(10);
                setStartWithLorem(true);
              }}
              className="flex cursor-pointer flex-col rounded-lg border border-yellow-200 bg-white p-3 text-left transition-all hover:border-yellow-300 hover:shadow-sm dark:border-yellow-800 dark:bg-gray-900 dark:hover:border-yellow-700"
            >
              <div className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                Long (10 paragraphs)
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Extended content for testing layouts
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setType("bacon");
                setMode("paragraphs");
                setCount(3);
                setStartWithLorem(false);
              }}
              className="flex cursor-pointer flex-col rounded-lg border border-yellow-200 bg-white p-3 text-left transition-all hover:border-yellow-300 hover:shadow-sm dark:border-yellow-800 dark:bg-gray-900 dark:hover:border-yellow-700"
            >
              <div className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                🥓 Bacon Ipsum
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Meat-themed placeholder text
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setType("hipster");
                setMode("paragraphs");
                setCount(3);
                setStartWithLorem(false);
              }}
              className="flex cursor-pointer flex-col rounded-lg border border-yellow-200 bg-white p-3 text-left transition-all hover:border-yellow-300 hover:shadow-sm dark:border-yellow-800 dark:bg-gray-900 dark:hover:border-yellow-700"
            >
              <div className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                🧔 Hipster Ipsum
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Artisanal craft text
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setType("pirate");
                setMode("paragraphs");
                setCount(3);
                setStartWithLorem(false);
              }}
              className="flex cursor-pointer flex-col rounded-lg border border-yellow-200 bg-white p-3 text-left transition-all hover:border-yellow-300 hover:shadow-sm dark:border-yellow-800 dark:bg-gray-900 dark:hover:border-yellow-700"
            >
              <div className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                🏴‍☠️ Pirate Ipsum
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Ahoy matey, swashbuckling text
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setType("cat");
                setMode("paragraphs");
                setCount(3);
                setStartWithLorem(false);
              }}
              className="flex cursor-pointer flex-col rounded-lg border border-yellow-200 bg-white p-3 text-left transition-all hover:border-yellow-300 hover:shadow-sm dark:border-yellow-800 dark:bg-gray-900 dark:hover:border-yellow-700"
            >
              <div className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                🐱 Cat Ipsum
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Meow meow purr purr
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setType("classic");
                setMode("sentences");
                setCount(10);
                setStartWithLorem(true);
              }}
              className="flex cursor-pointer flex-col rounded-lg border border-yellow-200 bg-white p-3 text-left transition-all hover:border-yellow-300 hover:shadow-sm dark:border-yellow-800 dark:bg-gray-900 dark:hover:border-yellow-700"
            >
              <div className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                10 sentences
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                For short descriptions
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setType("classic");
                setMode("words");
                setCount(50);
                setStartWithLorem(true);
              }}
              className="flex cursor-pointer flex-col rounded-lg border border-yellow-200 bg-white p-3 text-left transition-all hover:border-yellow-300 hover:shadow-sm dark:border-yellow-800 dark:bg-gray-900 dark:hover:border-yellow-700"
            >
              <div className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                50 words
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Short snippets and titles
              </div>
            </button>
          </div>
        </div>
      </details>
    </div>
  );
}
