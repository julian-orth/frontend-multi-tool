"use client";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import {
  Copy,
  Check,
  Download,
  AlertCircle,
  CheckCircle,
  Trash2,
  Zap,
  FileText,
  ChevronDown,
} from "lucide-react";
import PrimaryButton from "@/components/primary-button";
import { Checkbox } from "@/components/checkbox";
import {
  testRegex,
  highlightMatches,
  buildFlagsString,
  COMMON_PATTERNS,
  type RegexFlags,
  type RegexResult,
  type Match,
} from "./utils";

export function RegexTesterUI() {
  const [pattern, setPattern] = useState("");
  const [testString, setTestString] = useState("");
  const [flags, setFlags] = useState<RegexFlags>({
    global: true,
    multiline: false,
    caseInsensitive: false,
    dotAll: false,
    unicode: false,
    sticky: false,
  });
  const [result, setResult] = useState<RegexResult | null>(null);
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [liveMode, setLiveMode] = useState(true);

  // Test regex with current inputs
  const performTest = useCallback(() => {
    const testResult = testRegex(pattern, testString, flags);
    setResult(testResult);
    setSelectedMatch(null);
  }, [pattern, testString, flags]);

  // Live mode - test as user types
  useEffect(() => {
    if (liveMode) {
      const timer = setTimeout(() => {
        performTest();
      }, 150); // Debounce
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pattern, testString, flags, liveMode]);

  const handleTest = useCallback(() => {
    if (!liveMode) {
      performTest();
    }
  }, [liveMode, performTest]);

  const handleClear = useCallback(() => {
    setPattern("");
    setTestString("");
    setResult(null);
    setSelectedMatch(null);
  }, []);

  const handleCopyPattern = useCallback(() => {
    const fullPattern = `/${pattern}/${buildFlagsString(flags)}`;
    navigator.clipboard.writeText(fullPattern);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [pattern, flags]);

  const handleDownload = useCallback(() => {
    const content = {
      pattern,
      flags: buildFlagsString(flags),
      testString,
      matches: result?.matches || [],
    };
    const blob = new Blob([JSON.stringify(content, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `regex-test-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [pattern, flags, testString, result]);

  const handleLoadSample = useCallback(() => {
    setPattern("\\b[A-Z][a-z]+\\b");
    setTestString(
      "The Quick Brown Fox jumps over the Lazy Dog. Regular Expressions are Powerful!"
    );
    setResult(null);
    setSelectedMatch(null);
  }, []);

  const handleLoadPattern = useCallback(
    (patternObj: (typeof COMMON_PATTERNS)[0]) => {
      setPattern(patternObj.pattern);
      setTestString(patternObj.sample);
      setResult(null);
      setSelectedMatch(null);
    },
    []
  );

  // Highlighted segments for display
  const highlightedSegments = useMemo(() => {
    if (!result || result.matches.length === 0) return null;
    return highlightMatches(testString, result.matches);
  }, [testString, result]);

  const flagsString = buildFlagsString(flags);

  return (
    <div className="space-y-6">
      {/* Pattern Input */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label
            className="text-sm font-semibold text-gray-700 dark:text-gray-300"
            htmlFor="regex-pattern"
          >
            Regular Expression Pattern
          </label>
          {pattern && (
            <button
              type="button"
              onClick={handleCopyPattern}
              className="flex cursor-pointer items-center gap-1 text-xs text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
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
                  Copy Pattern
                </>
              )}
            </button>
          )}
        </div>
        <div className="relative flex items-center">
          <div className="absolute left-4 font-mono text-lg text-gray-500 dark:text-gray-400">
            /
          </div>
          <input
            id="regex-pattern"
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="Enter regex pattern... e.g., \b[A-Z]\w+"
            className="w-full rounded-xl border border-red-200 bg-white/80 py-3 pr-20 pl-8 font-mono text-base text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500 dark:border-red-800 dark:bg-gray-900/60 dark:text-gray-100"
            spellCheck={false}
          />
          <div className="absolute right-4 font-mono text-lg text-gray-500 dark:text-gray-400">
            /{flagsString}
          </div>
        </div>
      </div>

      {/* Flags */}
      <div className="flex flex-wrap items-center gap-4 rounded-xl border border-red-200 bg-red-50/30 p-4 dark:border-red-800 dark:bg-red-950/20">
        <span
          className="text-sm font-semibold text-gray-700 dark:text-gray-300"
          role="group"
          aria-label="Regular expression flags"
        >
          Flags:
        </span>
        <Checkbox
          checked={flags.global}
          onChange={(checked) => setFlags({ ...flags, global: checked })}
          label="Global (g)"
        />
        <Checkbox
          checked={flags.multiline}
          onChange={(checked) => setFlags({ ...flags, multiline: checked })}
          label="Multiline (m)"
        />
        <Checkbox
          checked={flags.caseInsensitive}
          onChange={(checked) =>
            setFlags({ ...flags, caseInsensitive: checked })
          }
          label="Case Insensitive (i)"
        />
        <Checkbox
          checked={flags.dotAll}
          onChange={(checked) => setFlags({ ...flags, dotAll: checked })}
          label="Dot All (s)"
        />
        <Checkbox
          checked={flags.unicode}
          onChange={(checked) => setFlags({ ...flags, unicode: checked })}
          label="Unicode (u)"
        />
        <Checkbox
          checked={flags.sticky}
          onChange={(checked) => setFlags({ ...flags, sticky: checked })}
          label="Sticky (y)"
        />
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3">
        <Checkbox checked={liveMode} onChange={setLiveMode} label="Live mode" />
        <div className="ml-auto flex flex-wrap gap-2">
          <PrimaryButton
            onClick={handleTest}
            className="px-6"
            disabled={liveMode || !pattern}
          >
            <Zap className="mr-2 h-4 w-4" aria-hidden="true" />
            Test
          </PrimaryButton>
          <PrimaryButton
            onClick={handleDownload}
            variant="outline"
            className="px-6"
            disabled={!result || !result.matches.length}
          >
            <Download className="h-4 w-4" aria-hidden="true" />
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

      {/* Load Samples */}
      <details className="rounded-xl border border-red-200 bg-red-50/30 dark:border-red-800 dark:bg-red-950/20">
        <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4" aria-hidden="true" />
            Load Common Pattern Examples
            <ChevronDown className="ml-auto h-4 w-4" aria-hidden="true" />
          </div>
        </summary>
        <div className="border-t border-red-200 p-4 dark:border-red-800">
          <div className="mb-3 flex gap-2">
            <button
              type="button"
              onClick={handleLoadSample}
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-100 dark:bg-gray-900 dark:text-red-400 dark:hover:bg-gray-800"
            >
              Load Basic Sample
            </button>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {COMMON_PATTERNS.map((patternObj, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleLoadPattern(patternObj)}
                className="cursor-pointer rounded-lg border border-red-200 bg-white p-3 text-left transition-all hover:border-red-300 hover:shadow-sm dark:border-red-800 dark:bg-gray-900 dark:hover:border-red-700"
              >
                <div className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                  {patternObj.name}
                </div>
                <div className="mb-2 text-xs text-gray-600 dark:text-gray-400">
                  {patternObj.description}
                </div>
                <code className="block overflow-x-auto text-xs text-red-600 dark:text-red-400">
                  {patternObj.pattern}
                </code>
              </button>
            ))}
          </div>
        </div>
      </details>

      {/* Validation status */}
      {result && !result.isValid && result.error && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-800/50 dark:bg-red-950/30">
          <AlertCircle
            className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400"
            aria-hidden="true"
          />
          <div className="flex-1">
            <p className="font-medium text-red-800 dark:text-red-200">
              Invalid Pattern
            </p>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              {result.error}
            </p>
          </div>
        </div>
      )}

      {result && result.isValid && (
        <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800/50 dark:bg-green-950/30">
          <CheckCircle
            className="h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400"
            aria-hidden="true"
          />
          <div className="flex-1">
            <p className="font-medium text-green-800 dark:text-green-200">
              {result.matchCount === 0
                ? "No matches found"
                : `Found ${result.matchCount} match${result.matchCount !== 1 ? "es" : ""}`}
            </p>
          </div>
        </div>
      )}

      {/* Test String Input */}
      <div className="flex flex-col">
        <div className="mb-2 flex items-center justify-between">
          <label
            className="text-sm font-semibold text-gray-700 dark:text-gray-300"
            htmlFor="test-string"
          >
            Test String
          </label>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {testString.length.toLocaleString()} characters
          </div>
        </div>
        <textarea
          id="test-string"
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder="Enter text to test against your regex pattern..."
          className="min-h-[200px] w-full rounded-xl border border-red-200 bg-white/80 p-4 font-mono text-sm text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500 dark:border-red-800 dark:bg-gray-900/60 dark:text-gray-100"
          spellCheck={false}
        />
      </div>

      {/* Match Highlighting */}
      {highlightedSegments && result && result.matches.length > 0 && (
        <div className="space-y-3">
          <div
            className="text-sm font-semibold text-gray-700 dark:text-gray-300"
            role="heading"
            aria-level={3}
          >
            Highlighted Matches
          </div>
          <div className="rounded-xl border border-red-200 bg-white p-4 dark:border-red-800 dark:bg-gray-900">
            <div className="font-mono text-sm text-gray-900 dark:text-gray-100">
              {highlightedSegments.map((segment, idx) =>
                segment.isMatch ? (
                  <span
                    key={idx}
                    className={`cursor-pointer rounded px-1 py-0.5 ${
                      selectedMatch === segment.matchIndex
                        ? "bg-red-600 text-white"
                        : "bg-red-200 text-red-900 hover:bg-red-300 dark:bg-red-900/50 dark:text-red-100 dark:hover:bg-red-800/60"
                    }`}
                    onClick={() =>
                      setSelectedMatch(
                        selectedMatch === segment.matchIndex
                          ? null
                          : (segment.matchIndex ?? null)
                      )
                    }
                    title={`Match #${(segment.matchIndex ?? 0) + 1} - Click to view details`}
                  >
                    {segment.text}
                  </span>
                ) : (
                  <span key={idx}>{segment.text}</span>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Match Details */}
      {result && result.matches.length > 0 && (
        <div className="space-y-3">
          <div
            className="text-sm font-semibold text-gray-700 dark:text-gray-300"
            role="heading"
            aria-level={3}
          >
            Match Details
          </div>
          <div className="space-y-2">
            {result.matches.map((match, idx) => (
              <details
                key={idx}
                open={selectedMatch === idx}
                className={`rounded-xl border bg-white p-4 dark:bg-gray-900 ${
                  selectedMatch === idx
                    ? "border-red-400 dark:border-red-600"
                    : "border-red-200 dark:border-red-800"
                }`}
              >
                <summary
                  className="cursor-pointer font-mono text-sm font-medium text-gray-900 hover:text-red-600 dark:text-gray-100 dark:hover:text-red-400"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedMatch(selectedMatch === idx ? null : idx);
                  }}
                >
                  Match #{idx + 1}: &quot;{match.match}&quot; (position {match.index})
                </summary>
                <div className="mt-3 space-y-2 border-t border-red-100 pt-3 text-sm dark:border-red-900">
                  <div className="flex">
                    <span className="w-24 font-medium text-gray-600 dark:text-gray-400">
                      Full Match:
                    </span>
                    <code className="flex-1 rounded bg-gray-100 px-2 py-1 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                      {match.match}
                    </code>
                  </div>
                  <div className="flex">
                    <span className="w-24 font-medium text-gray-600 dark:text-gray-400">
                      Position:
                    </span>
                    <span className="text-gray-900 dark:text-gray-100">
                      {match.index} - {match.index + match.match.length}
                    </span>
                  </div>
                  {match.groups.length > 0 && (
                    <div>
                      <span className="font-medium text-gray-600 dark:text-gray-400">
                        Capture Groups:
                      </span>
                      <div className="mt-1 space-y-1 pl-4">
                        {match.groups.map((group, groupIdx) => (
                          <div key={groupIdx} className="flex gap-2">
                            <span className="text-gray-600 dark:text-gray-400">
                              Group {groupIdx + 1}:
                            </span>
                            <code className="rounded bg-gray-100 px-2 py-0.5 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                              {group !== undefined ? group : "(no capture)"}
                            </code>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {match.namedGroups &&
                    Object.keys(match.namedGroups).length > 0 && (
                      <div>
                        <span className="font-medium text-gray-600 dark:text-gray-400">
                          Named Groups:
                        </span>
                        <div className="mt-1 space-y-1 pl-4">
                          {Object.entries(match.namedGroups).map(
                            ([name, value]) => (
                              <div key={name} className="flex gap-2">
                                <span className="text-gray-600 dark:text-gray-400">
                                  {name}:
                                </span>
                                <code className="rounded bg-gray-100 px-2 py-0.5 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                                  {value}
                                </code>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                </div>
              </details>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
