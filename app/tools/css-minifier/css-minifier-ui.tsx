"use client";

import { useState, useMemo } from "react";
import {
  Copy,
  Check,
  FileCode,
  Minimize2,
  AlignLeft,
  Download,
} from "lucide-react";
import {
  minifyCSS,
  beautifyCSS,
  validateCSS,
  calculateCSSStats,
  type MinifyOptions,
  type BeautifyOptions,
} from "./utils";
import { Checkbox } from "@/components/checkbox";

const SAMPLE_CSS = `/* Sample CSS */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.button {
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
}

/* Media query */
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}`;

type Mode = "minify" | "beautify";

export default function CSSMinifierUI() {
  const [input, setInput] = useState(SAMPLE_CSS);
  const [mode, setMode] = useState<Mode>("minify");
  const [copied, setCopied] = useState(false);

  // Minify options
  const [removeComments, setRemoveComments] = useState(true);
  const [preserveImportant, setPreserveImportant] = useState(true);

  // Beautify options
  const [indentSize, setIndentSize] = useState(2);
  const [indentChar, setIndentChar] = useState<" " | "\t">(" ");

  // Output, validation, and stats are all pure derivations of the input
  // and current options, so they're computed directly rather than synced
  // via state + effect.
  const { output, error, stats } = useMemo(() => {
    if (!input.trim()) {
      return { output: "", error: null as string | null, stats: null };
    }

    const validation = validateCSS(input);
    const error: string | null = validation.valid
      ? null
      : validation.errors.join(", ");

    try {
      const minifyOptions: MinifyOptions = { removeComments, preserveImportant };
      const beautifyOptions: BeautifyOptions = { indentSize, indentChar };
      const processed =
        mode === "minify"
          ? minifyCSS(input, minifyOptions)
          : beautifyCSS(input, beautifyOptions);

      return { output: processed, error, stats: calculateCSSStats(input, processed) };
    } catch (err) {
      return {
        output: "",
        error: err instanceof Error ? err.message : "Invalid CSS",
        stats: null,
      };
    }
  }, [input, mode, removeComments, preserveImportant, indentSize, indentChar]);

  // Copy to clipboard
  const handleCopy = async () => {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Download as file
  const handleDownload = () => {
    if (!output) return;

    const blob = new Blob([output], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = mode === "minify" ? "minified.css" : "beautified.css";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Clear all
  const handleClear = () => {
    setInput("");
  };

  // Load sample
  const handleLoadSample = () => {
    setInput(SAMPLE_CSS);
  };

  // Format bytes
  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="mb-8">
        {/* Mode Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setMode("minify")}
            className={`flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors ${
              mode === "minify"
                ? "bg-teal-600 text-white dark:bg-teal-500"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
            aria-pressed={mode === "minify"}
          >
            <Minimize2 className="h-4 w-4" aria-hidden="true" />
            Minify
          </button>
          <button
            onClick={() => setMode("beautify")}
            className={`flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors ${
              mode === "beautify"
                ? "bg-teal-600 text-white dark:bg-teal-500"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
            aria-pressed={mode === "beautify"}
          >
            <AlignLeft className="h-4 w-4" aria-hidden="true" />
            Beautify
          </button>
        </div>
      </div>

      {/* Main Tool */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        {/* Options */}
        <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
          <h2 className="mb-3 text-sm font-semibold tracking-wide text-gray-700 uppercase dark:text-gray-300">
            Options
          </h2>

          {mode === "minify" ? (
            <div className="flex flex-wrap gap-6">
              <Checkbox
                id="removeComments"
                label="Remove Comments"
                checked={removeComments}
                onChange={setRemoveComments}
              />
              <Checkbox
                id="preserveImportant"
                label="Preserve /*! */ Comments"
                checked={preserveImportant}
                onChange={setPreserveImportant}
                disabled={!removeComments}
              />
            </div>
          ) : (
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <label
                  htmlFor="indentSize"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Indent Size:
                </label>
                <input
                  type="number"
                  id="indentSize"
                  min="1"
                  max="8"
                  value={indentSize}
                  onChange={(e) => setIndentSize(Number(e.target.value))}
                  className="w-16 rounded-md border border-gray-300 px-3 py-1 text-sm dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="indentChar"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Indent Character:
                </label>
                <select
                  id="indentChar"
                  value={indentChar}
                  onChange={(e) => setIndentChar(e.target.value as " " | "\t")}
                  className="rounded-md border border-gray-300 px-3 py-1 text-sm dark:border-gray-600 dark:bg-gray-700"
                >
                  <option value=" ">Spaces</option>
                  <option value="\t">Tabs</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="css-input"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Input CSS
            </label>
            <div className="flex gap-2">
              <button
                onClick={handleLoadSample}
                className="cursor-pointer text-xs text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
              >
                Load Sample
              </button>
              <button
                onClick={handleClear}
                className="cursor-pointer text-xs text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Clear
              </button>
            </div>
          </div>
          <textarea
            id="css-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your CSS here..."
            className="h-64 w-full rounded-lg border border-gray-300 bg-white p-4 font-mono text-sm text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
            spellCheck={false}
          />
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
            <strong>Warning:</strong> {error}
          </div>
        )}

        {/* Stats */}
        {stats && output && (
          <div className="mb-4 grid grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4 sm:grid-cols-4 dark:border-gray-700 dark:bg-gray-800/50">
            <div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Original Size
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {formatBytes(stats.originalSize)}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Processed Size
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {formatBytes(stats.processedSize)}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {mode === "minify" ? "Saved" : "Added"}
              </div>
              <div
                className={`text-lg font-semibold ${
                  mode === "minify"
                    ? "text-green-600 dark:text-green-400"
                    : "text-blue-600 dark:text-blue-400"
                }`}
              >
                {stats.savedPercentage}%
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Lines
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {stats.originalLines} → {stats.processedLines}
              </div>
            </div>
          </div>
        )}

        {/* Output */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="css-output"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Output CSS
            </label>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                disabled={!output}
                className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-teal-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-teal-500 dark:hover:bg-teal-600"
                aria-label="Copy to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    Copy
                  </>
                )}
              </button>
              <button
                onClick={handleDownload}
                disabled={!output}
                className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-gray-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600"
                aria-label="Download CSS file"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                Download
              </button>
            </div>
          </div>
          <textarea
            id="css-output"
            value={output}
            readOnly
            placeholder="Processed CSS will appear here..."
            className="h-64 w-full rounded-lg border border-gray-300 bg-gray-50 p-4 font-mono text-sm text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
            spellCheck={false}
          />
        </div>
      </div>

      {/* Info Section */}
      {!output && (
        <div className="mt-8 rounded-xl border border-teal-200 bg-teal-50/30 p-6 dark:border-teal-800 dark:bg-teal-950/10">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
            About CSS Minification & Beautification
          </h3>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              This tool helps optimize your CSS files for production or format
              them for better readability during development. All processing
              happens locally in your browser.
            </p>
            <ul className="mt-3 ml-5 list-disc space-y-1">
              <li>
                <strong>Minify:</strong> Reduce file size by removing
                whitespace, comments, and optimizing rules - perfect for
                production deployment
              </li>
              <li>
                <strong>Beautify:</strong> Format CSS with proper indentation
                and spacing for better readability and easier maintenance
              </li>
              <li>
                <strong>Optimizations:</strong> Automatically shortens hex
                colors (#FFFFFF → #FFF) and removes units from zeros (0px → 0)
              </li>
              <li>
                <strong>Comment control:</strong> Choose to preserve important{" "}
                {"/*! */"} comments while removing others
              </li>
              <li>
                <strong>Real-time stats:</strong> See file size savings,
                percentage reduction, and line count changes
              </li>
            </ul>
            <p className="mt-3 text-xs italic">
              All CSS processing happens in your browser. No data is sent to any
              server.
            </p>
          </div>
        </div>
      )}

      {/* Feature Cards */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <Minimize2
            className="mb-3 h-6 w-6 text-teal-600 dark:text-teal-400"
            aria-hidden="true"
          />
          <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-50">
            Minify CSS
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Reduce file size by removing whitespace, comments, and optimizing
            rules for faster page loads.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <AlignLeft
            className="mb-3 h-6 w-6 text-teal-600 dark:text-teal-400"
            aria-hidden="true"
          />
          <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-50">
            Beautify CSS
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Format CSS with proper indentation and spacing for better
            readability and maintenance.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <FileCode
            className="mb-3 h-6 w-6 text-teal-600 dark:text-teal-400"
            aria-hidden="true"
          />
          <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-50">
            Privacy First
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            All processing happens in your browser. Your CSS never leaves your
            device.
          </p>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="mt-12 space-y-12">
        {/* What is CSS Minification */}
        <section className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-50">
            What is CSS Minification?
          </h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              CSS minification is the process of removing unnecessary characters
              from CSS code without changing its functionality. This includes
              eliminating whitespace, line breaks, comments, and optimizing code
              structure to create the smallest possible file size.
            </p>
            <p>
              Minified CSS files load faster, reducing page load times and
              improving website performance. This is especially important for
              mobile users and users with slower internet connections. Every
              kilobyte saved translates to faster rendering and better user
              experience.
            </p>
          </div>
        </section>

        {/* When to Use Each Mode */}
        <section className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-50">
            When to Use Minify vs Beautify
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-teal-200 bg-teal-50/50 p-6 dark:border-teal-800 dark:bg-teal-950/20">
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                Use Minify When:
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-teal-600 dark:text-teal-400">✓</span>
                  <span>
                    Deploying CSS to production environments for optimal
                    performance
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600 dark:text-teal-400">✓</span>
                  <span>
                    Reducing bandwidth usage and improving page load speeds
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600 dark:text-teal-400">✓</span>
                  <span>Optimizing CSS for CDN distribution</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600 dark:text-teal-400">✓</span>
                  <span>
                    Meeting performance budgets and Core Web Vitals requirements
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-teal-200 bg-teal-50/50 p-6 dark:border-teal-800 dark:bg-teal-950/20">
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                Use Beautify When:
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-teal-600 dark:text-teal-400">✓</span>
                  <span>
                    Reading or debugging minified CSS from external sources
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600 dark:text-teal-400">✓</span>
                  <span>
                    Maintaining consistent code formatting across your team
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600 dark:text-teal-400">✓</span>
                  <span>
                    Making minified third-party CSS readable for customization
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600 dark:text-teal-400">✓</span>
                  <span>Learning from or analyzing production CSS code</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-50">
            CSS Optimization Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                Minification Optimizations
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Removes all unnecessary whitespace and line breaks</li>
                <li>
                  • Strips comments (with option to preserve important ones)
                </li>
                <li>• Shortens hex colors (#ffffff → #fff)</li>
                <li>• Removes units from zero values (0px → 0)</li>
                <li>• Optimizes multiple zeros (0 0 0 0 → 0)</li>
                <li>• Removes unnecessary semicolons</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                Beautification Options
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Configurable indentation (spaces or tabs)</li>
                <li>• Adjustable indent size (1-8 spaces)</li>
                <li>• Proper line breaks for readability</li>
                <li>• Consistent spacing around selectors and properties</li>
                <li>• Organized structure with clear hierarchy</li>
                <li>• Maintains all original comments</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-50">
            Best Practices for CSS Optimization
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="rounded-lg border border-teal-200 bg-teal-50/50 p-4 dark:border-teal-800 dark:bg-teal-950/20">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-50">
                Keep source files readable
              </h3>
              <p>
                Always maintain beautified/formatted source CSS files and only
                minify for production deployment. This makes maintenance and
                collaboration much easier.
              </p>
            </div>
            <div className="rounded-lg border border-teal-200 bg-teal-50/50 p-4 dark:border-teal-800 dark:bg-teal-950/20">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-50">
                Use build tools for automation
              </h3>
              <p>
                Integrate CSS minification into your build process (webpack,
                Vite, Parcel, etc.) for automated optimization. This ensures
                consistency and reduces manual work.
              </p>
            </div>
            <div className="rounded-lg border border-teal-200 bg-teal-50/50 p-4 dark:border-teal-800 dark:bg-teal-950/20">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-50">
                Test after minification
              </h3>
              <p>
                Always verify your minified CSS works correctly, especially with
                complex selectors or edge cases. Use browser DevTools to inspect
                the final output.
              </p>
            </div>
            <div className="rounded-lg border border-teal-200 bg-teal-50/50 p-4 dark:border-teal-800 dark:bg-teal-950/20">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-50">
                Combine with compression
              </h3>
              <p>
                Enable gzip or Brotli compression on your web server for maximum
                file size reduction. Minification + compression can reduce CSS
                size by 80%+ compared to unoptimized files.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-50">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                Does minification change how my CSS works?
              </summary>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                No, minification only removes unnecessary characters like
                whitespace and comments. The functionality and styling remain
                exactly the same. Your CSS will work identically before and
                after minification. The browser interprets both versions in the
                same way, but the minified version loads faster due to the
                smaller file size.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                How much file size can I save with CSS minification?
              </summary>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                Typical savings range from 20-40% for well-formatted CSS with
                comments, and up to 60% for heavily commented or verbose CSS.
                The exact savings depend on your coding style, comment usage,
                and formatting preferences. When combined with gzip or Brotli
                compression on the server, total file size reduction can exceed
                80% compared to unoptimized CSS.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                Is my CSS data secure when using this tool?
              </summary>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                Yes, absolutely. All processing happens locally in your browser
                using JavaScript. Your CSS never leaves your device or gets sent
                to any server. This tool works completely offline once the page
                is loaded, making it safe for processing sensitive or
                proprietary CSS code.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                Can I minify CSS that uses vendor prefixes?
              </summary>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                Yes, this tool handles vendor prefixes (-webkit-, -moz-, -ms-,
                -o-) correctly during both minification and beautification. They
                will be preserved and formatted appropriately. The tool
                recognizes vendor-prefixed properties and values as valid CSS
                and won&apos;t remove or break them during processing.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                Should I minify CSS during development?
              </summary>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                No, keep CSS beautified during development for readability and
                easier debugging. Only minify CSS for production deployment.
                Modern build tools like webpack, Vite, and Parcel can automate
                this process, minifying only when building for production while
                keeping development CSS readable. This gives you the best of
                both worlds: easy development and optimized production files.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                What&apos;s the difference between CSS minification and compression?
              </summary>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                CSS minification removes unnecessary characters from the source
                code itself (whitespace, comments, etc.), while compression
                (gzip/Brotli) is applied by the web server during file transfer.
                Minification happens once during the build process and reduces
                the actual file size permanently. Compression happens
                dynamically for each request and uses algorithms to further
                reduce transfer size. For best results, use both: minify your
                CSS files during build, then enable server compression for
                maximum efficiency.
              </p>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
}
