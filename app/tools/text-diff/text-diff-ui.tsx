"use client";
import React, { useState, useCallback, useMemo } from "react";
import {
  Copy,
  Check,
  Download,
  Trash2,
  Upload,
  FileText,
  SplitSquareHorizontal,
  List,
  ArrowLeftRight,
} from "lucide-react";
import PrimaryButton from "@/components/primary-button";
import { Checkbox } from "@/components/checkbox";
import { useDebouncedValue } from "@/lib/hooks/use-debounced-value";
import {
  computeDiff,
  prepareSplitView,
  createUnifiedPatch,
  splitLines,
  type DiffMode,
  type ViewMode,
  type DiffOptions,
  type DiffResult,
} from "./utils";

export function TextDiffUI() {
  const [oldText, setOldText] = useState("");
  const [newText, setNewText] = useState("");
  const [diffMode, setDiffMode] = useState<DiffMode>("lines");
  const [viewMode, setViewMode] = useState<ViewMode>("split");
  const [ignoreCase, setIgnoreCase] = useState(false);
  const [ignoreWhitespace, setIgnoreWhitespace] = useState(false);
  const [newlineIsToken, setNewlineIsToken] = useState(false);
  const [copied, setCopied] = useState(false);
  const fileInputOldRef = React.useRef<HTMLInputElement>(null);
  const fileInputNewRef = React.useRef<HTMLInputElement>(null);

  // Compute diff (debounced so large pasted documents don't block typing)
  const debouncedOldText = useDebouncedValue(oldText, 200);
  const debouncedNewText = useDebouncedValue(newText, 200);

  const diffResult: DiffResult | null = useMemo(() => {
    if (!debouncedOldText && !debouncedNewText) return null;

    const options: DiffOptions = {
      ignoreCase,
      ignoreWhitespace,
      newlineIsToken,
    };

    return computeDiff(debouncedOldText, debouncedNewText, diffMode, options);
  }, [
    debouncedOldText,
    debouncedNewText,
    diffMode,
    ignoreCase,
    ignoreWhitespace,
    newlineIsToken,
  ]);

  // Prepare split view data
  const splitViewData = useMemo(() => {
    if (!diffResult || viewMode !== "split") return null;
    return prepareSplitView(diffResult.changes);
  }, [diffResult, viewMode]);

  const handleClear = useCallback(() => {
    setOldText("");
    setNewText("");
  }, []);

  const handleSwap = useCallback(() => {
    const temp = oldText;
    setOldText(newText);
    setNewText(temp);
  }, [oldText, newText]);

  const handleCopyPatch = useCallback(() => {
    const patch = createUnifiedPatch(oldText, newText, "Original", "Modified", {
      ignoreWhitespace,
    });
    navigator.clipboard.writeText(patch);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [oldText, newText, ignoreWhitespace]);

  const handleDownloadPatch = useCallback(() => {
    const patch = createUnifiedPatch(oldText, newText, "Original", "Modified", {
      ignoreWhitespace,
    });
    const blob = new Blob([patch], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `diff-${Date.now()}.patch`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [oldText, newText, ignoreWhitespace]);

  const handleLoadSample = useCallback(() => {
    setOldText(
      `The quick brown fox jumps over the lazy dog.
This is the first line.
This is the second line.
This line will be removed.
This is the fourth line.
The end.`
    );
    setNewText(
      `The quick brown fox jumps over the lazy dog.
This is the first line.
This is the second line that was modified.
This is the fourth line.
This is a new line added here.
The end.`
    );
  }, []);

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, side: "old" | "new") => {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        if (side === "old") {
          setOldText(content);
        } else {
          setNewText(content);
        }
      };
      reader.readAsText(file);

      // Reset file input
      if (side === "old" && fileInputOldRef.current) {
        fileInputOldRef.current.value = "";
      } else if (side === "new" && fileInputNewRef.current) {
        fileInputNewRef.current.value = "";
      }
    },
    []
  );

  // Calculate statistics
  const stats = useMemo(() => {
    if (!diffResult) return null;

    const totalChanges = diffResult.addedCount + diffResult.removedCount;

    return {
      added: diffResult.addedCount,
      removed: diffResult.removedCount,
      unchanged: diffResult.unchangedCount,
      total: totalChanges,
    };
  }, [diffResult]);

  return (
    <div className="space-y-6">
      {/* Mode Selection */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label
            htmlFor="diff-mode"
            className="text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            Compare:
          </label>
          <select
            id="diff-mode"
            value={diffMode}
            onChange={(e) => setDiffMode(e.target.value as DiffMode)}
            className="rounded-lg border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-indigo-800 dark:bg-gray-900 dark:text-gray-300"
          >
            <option value="lines">Line by Line</option>
            <option value="words">Word by Word</option>
            <option value="chars">Character by Character</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span
            className="text-sm font-semibold text-gray-700 dark:text-gray-300"
            aria-label="View mode"
          >
            View:
          </span>
          <div
            className="flex rounded-xl border border-indigo-200 bg-white p-1 dark:border-indigo-800 dark:bg-gray-900"
            role="group"
            aria-label="View mode selection"
          >
            <button
              type="button"
              onClick={() => setViewMode("split")}
              className={`flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                viewMode === "split"
                  ? "bg-indigo-600 text-white dark:bg-indigo-500"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              }`}
            >
              <SplitSquareHorizontal className="h-4 w-4" aria-hidden="true" />
              Split
            </button>
            <button
              type="button"
              onClick={() => setViewMode("unified")}
              className={`flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                viewMode === "unified"
                  ? "bg-indigo-600 text-white dark:bg-indigo-500"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              }`}
            >
              <List className="h-4 w-4" aria-hidden="true" />
              Unified
            </button>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="flex flex-wrap items-center gap-4 rounded-xl border border-indigo-200 bg-indigo-50/30 p-4 dark:border-indigo-800 dark:bg-indigo-950/20">
        <span
          className="text-sm font-semibold text-gray-700 dark:text-gray-300"
          role="group"
          aria-label="Diff options"
        >
          Options:
        </span>
        <Checkbox
          checked={ignoreCase}
          onChange={setIgnoreCase}
          label="Ignore case"
          disabled={diffMode === "lines"}
        />
        <Checkbox
          checked={ignoreWhitespace}
          onChange={setIgnoreWhitespace}
          label="Ignore whitespace"
          disabled={diffMode !== "lines"}
        />
        <Checkbox
          checked={newlineIsToken}
          onChange={setNewlineIsToken}
          label="Newline as token"
          disabled={diffMode !== "lines"}
        />
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <div className="flex flex-wrap gap-2">
          <input
            ref={fileInputOldRef}
            type="file"
            accept=".txt,text/plain"
            onChange={(e) => handleFileUpload(e, "old")}
            className="hidden"
            id="file-upload-old"
          />
          <label
            htmlFor="file-upload-old"
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-100 dark:border-indigo-800 dark:bg-gray-900 dark:text-indigo-400 dark:hover:bg-gray-800"
          >
            <Upload className="h-4 w-4" aria-hidden="true" />
            Load Original
          </label>

          <input
            ref={fileInputNewRef}
            type="file"
            accept=".txt,text/plain"
            onChange={(e) => handleFileUpload(e, "new")}
            className="hidden"
            id="file-upload-new"
          />
          <label
            htmlFor="file-upload-new"
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-100 dark:border-indigo-800 dark:bg-gray-900 dark:text-indigo-400 dark:hover:bg-gray-800"
          >
            <Upload className="h-4 w-4" aria-hidden="true" />
            Load Modified
          </label>

          <button
            type="button"
            onClick={handleLoadSample}
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-100 dark:border-indigo-800 dark:bg-gray-900 dark:text-indigo-400 dark:hover:bg-gray-800"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Load sample
          </button>
        </div>

        <div className="ml-auto flex flex-wrap gap-2">
          <PrimaryButton
            onClick={handleSwap}
            variant="outline"
            className="px-4"
            disabled={!oldText && !newText}
            title="Swap original and modified texts"
          >
            <ArrowLeftRight className="h-4 w-4" aria-hidden="true" />
          </PrimaryButton>
          <PrimaryButton
            onClick={handleCopyPatch}
            variant="outline"
            className="px-4"
            disabled={!diffResult || copied}
            title="Copy unified diff patch"
          >
            {copied ? (
              <Check className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Copy className="h-4 w-4" aria-hidden="true" />
            )}
          </PrimaryButton>
          <PrimaryButton
            onClick={handleDownloadPatch}
            variant="outline"
            className="px-4"
            disabled={!diffResult}
            title="Download unified diff patch"
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

      {/* Statistics */}
      {stats && (
        <div className="flex flex-wrap gap-6 rounded-xl border border-indigo-200 bg-indigo-50/30 p-4 text-sm dark:border-indigo-800 dark:bg-indigo-950/20">
          <div>
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Added:
            </span>{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              +{stats.added}
            </span>
          </div>
          <div>
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Removed:
            </span>{" "}
            <span className="font-semibold text-red-600 dark:text-red-400">
              -{stats.removed}
            </span>
          </div>
          <div>
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Total changes:
            </span>{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              {stats.total}
            </span>
          </div>
        </div>
      )}

      {/* Text Input Areas / Diff Display */}
      {viewMode === "split" ? (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Original Text */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-center justify-between">
              <label
                className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                htmlFor="old-text"
              >
                Original Text
              </label>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {oldText.length.toLocaleString()} chars
              </div>
            </div>
            {diffResult ? (
              <div className="min-h-[400px] overflow-auto rounded-xl border border-indigo-200 bg-white font-mono text-sm dark:border-indigo-800 dark:bg-gray-900">
                {splitViewData?.leftLines.map((line, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      line.type === "removed"
                        ? "bg-red-50 dark:bg-red-950/30"
                        : line.type === "empty"
                          ? "bg-gray-50 dark:bg-gray-900"
                          : ""
                    }`}
                  >
                    <div className="w-12 flex-shrink-0 border-r border-gray-200 bg-gray-50 px-2 py-1 text-right text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                      {line.type !== "empty" ? index + 1 : ""}
                    </div>
                    <div
                      className={`flex-1 px-3 py-1 ${
                        line.type === "removed"
                          ? "text-red-800 dark:text-red-200"
                          : "text-gray-900 dark:text-gray-100"
                      }`}
                    >
                      {line.type === "removed" && (
                        <span className="mr-1 font-bold text-red-600 dark:text-red-400">
                          -
                        </span>
                      )}
                      {line.value || "\u00A0"}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <textarea
                id="old-text"
                value={oldText}
                onChange={(e) => setOldText(e.target.value)}
                placeholder="Enter original text..."
                className="min-h-[400px] w-full rounded-xl border border-indigo-200 bg-white/80 p-4 font-mono text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-indigo-800 dark:bg-gray-900/60 dark:text-gray-100"
                spellCheck={false}
              />
            )}
          </div>

          {/* Modified Text */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-center justify-between">
              <label
                className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                htmlFor="new-text"
              >
                Modified Text
              </label>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {newText.length.toLocaleString()} chars
              </div>
            </div>
            {diffResult ? (
              <div className="min-h-[400px] overflow-auto rounded-xl border border-indigo-200 bg-white font-mono text-sm dark:border-indigo-800 dark:bg-gray-900">
                {splitViewData?.rightLines.map((line, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      line.type === "added"
                        ? "bg-green-50 dark:bg-green-950/30"
                        : line.type === "empty"
                          ? "bg-gray-50 dark:bg-gray-900"
                          : ""
                    }`}
                  >
                    <div className="w-12 flex-shrink-0 border-r border-gray-200 bg-gray-50 px-2 py-1 text-right text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                      {line.type !== "empty" ? index + 1 : ""}
                    </div>
                    <div
                      className={`flex-1 px-3 py-1 ${
                        line.type === "added"
                          ? "text-green-800 dark:text-green-200"
                          : "text-gray-900 dark:text-gray-100"
                      }`}
                    >
                      {line.type === "added" && (
                        <span className="mr-1 font-bold text-green-600 dark:text-green-400">
                          +
                        </span>
                      )}
                      {line.value || "\u00A0"}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <textarea
                id="new-text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Enter modified text..."
                className="min-h-[400px] w-full rounded-xl border border-indigo-200 bg-white/80 p-4 font-mono text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-indigo-800 dark:bg-gray-900/60 dark:text-gray-100"
                spellCheck={false}
              />
            )}
          </div>
        </div>
      ) : (
        // Unified View
        <div className="space-y-4">
          {/* Original Text Input */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-center justify-between">
              <label
                className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                htmlFor="old-text-unified"
              >
                Original Text
              </label>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {oldText.length.toLocaleString()} chars
              </div>
            </div>
            <textarea
              id="old-text-unified"
              value={oldText}
              onChange={(e) => setOldText(e.target.value)}
              placeholder="Enter original text..."
              className="min-h-[200px] w-full rounded-xl border border-indigo-200 bg-white/80 p-4 font-mono text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-indigo-800 dark:bg-gray-900/60 dark:text-gray-100"
              spellCheck={false}
            />
          </div>

          {/* Modified Text Input */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-center justify-between">
              <label
                className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                htmlFor="new-text-unified"
              >
                Modified Text
              </label>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {newText.length.toLocaleString()} chars
              </div>
            </div>
            <textarea
              id="new-text-unified"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              placeholder="Enter modified text..."
              className="min-h-[200px] w-full rounded-xl border border-indigo-200 bg-white/80 p-4 font-mono text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-indigo-800 dark:bg-gray-900/60 dark:text-gray-100"
              spellCheck={false}
            />
          </div>

          {/* Unified Diff Display */}
          {diffResult && (
            <div className="flex flex-col">
              <div className="mb-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Diff Results
                </label>
              </div>
              <div className="min-h-[400px] overflow-auto rounded-xl border border-indigo-200 bg-white font-mono text-sm dark:border-indigo-800 dark:bg-gray-900">
                {diffResult.changes.map((change, index) => {
                  const lines = splitLines(change.value);
                  return lines.map((line, lineIndex) => (
                    <div
                      key={`${index}-${lineIndex}`}
                      className={`px-3 py-1 ${
                        change.added
                          ? "bg-green-50 text-green-800 dark:bg-green-950/30 dark:text-green-200"
                          : change.removed
                            ? "bg-red-50 text-red-800 dark:bg-red-950/30 dark:text-red-200"
                            : "text-gray-900 dark:text-gray-100"
                      }`}
                    >
                      {change.added && (
                        <span className="mr-1 font-bold text-green-600 dark:text-green-400">
                          +
                        </span>
                      )}
                      {change.removed && (
                        <span className="mr-1 font-bold text-red-600 dark:text-red-400">
                          -
                        </span>
                      )}
                      {!change.added && !change.removed && (
                        <span className="mr-1 text-gray-400">&nbsp;</span>
                      )}
                      {line || "\u00A0"}
                    </div>
                  ));
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
