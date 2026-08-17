import Breadcrumb from "@/components/breadcrumb";
import type { Metadata } from "next";
import { TextDiffUI } from "./text-diff-ui";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Text Diff Checker - Compare Text Differences Online",
  description:
    "Free online text diff tool to compare two texts side-by-side or in unified view. Visualize additions, deletions, and changes with line-by-line, word-by-word, or character-by-character comparison.",
  keywords:
    "text diff, compare text, text comparison, diff checker, side by side diff, unified diff, text changes, file comparison, merge conflicts, code review",
  openGraph: {
    title: "Text Diff Checker - Compare Text Differences Online",
    description:
      "Compare two texts and visualize differences with split or unified view. Perfect for reviewing changes, merging files, and code reviews.",
    url: `${SITE_CONFIG.domain}/tools/text-diff`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `Text Diff Checker - ${SITE_CONFIG.name}`,
    description:
      "Compare two texts and visualize differences with split or unified view. Perfect for reviewing changes, merging files, and code reviews.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/text-diff`,
  },
};

export default function TextDiffPage() {
  return (
    <>
      <ToolSchema
        name="Text Diff Checker"
        description="Free online text diff tool to compare two texts side-by-side or in unified view. Visualize additions, deletions, and changes with line-by-line, word-by-word, or character-by-character comparison."
        url="/tools/text-diff"
        keywords={[
          "text diff",
          "compare text",
          "text comparison",
          "diff checker",
          "side by side diff",
          "unified diff",
          "text changes",
          "file comparison",
          "merge conflicts",
          "code review",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-black dark:text-white">
              Text Diff Checker
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Compare two texts and visualize differences side-by-side or in
              unified view
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <TextDiffUI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is Text Diff */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is a Text Diff Tool?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  A text diff (difference) tool compares two text documents and
                  highlights exactly what has been added, removed, or modified
                  between them. It&apos;s used for code reviews, comparing document
                  versions, checking configuration files, and resolving merge
                  conflicts. This tool uses the Myers diff algorithm—the same
                  approach used by Git—to compute changes accurately, entirely
                  in your browser.
                </p>
              </div>
            </section>

            {/* Key Facts */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Key Facts
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Split view</strong> shows both texts side-by-side in
                    parallel columns for context; <strong>unified view</strong>{" "}
                    combines them into one column with +/- markers, matching
                    Git&apos;s patch format.
                  </li>
                  <li>
                    <strong>Line-by-line</strong> mode is best for code and
                    config files, <strong>word-by-word</strong> for prose and
                    documentation, and <strong>character-by-character</strong>{" "}
                    for spotting typos or precise data changes.
                  </li>
                  <li>
                    Use &quot;ignore whitespace&quot; to skip formatting-only changes and
                    &quot;ignore case&quot; for case-insensitive comparisons.
                  </li>
                  <li>
                    Generated unified diff patches can be applied with{" "}
                    <code>git apply patch.diff</code> or the Unix{" "}
                    <code>patch</code> command.
                  </li>
                  <li>
                    All comparison happens locally in your browser—no files or
                    text are ever uploaded, so the tool works offline too.
                  </li>
                  <li>
                    Designed for text only; use dedicated tools for binary files
                    or images, and keep files under 1-2MB for best performance.
                  </li>
                </ul>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-50 sm:mb-6 sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <details className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-6">
                  <summary className="cursor-pointer text-base font-semibold text-gray-900 dark:text-gray-50 sm:text-lg">
                    What algorithm does this diff tool use?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                    It uses the Myers diff algorithm, the same one that powers
                    Git and Unix diff, which finds the shortest edit script
                    between two texts quickly and accurately.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-6">
                  <summary className="cursor-pointer text-base font-semibold text-gray-900 dark:text-gray-50 sm:text-lg">
                    What&apos;s the difference between split and unified view?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                    Split view shows both texts side-by-side for context;
                    unified view combines them into one column with +/- markers,
                    matching Git&apos;s patch format for quick scanning.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-6">
                  <summary className="cursor-pointer text-base font-semibold text-gray-900 dark:text-gray-50 sm:text-lg">
                    Why should I ignore whitespace when comparing code?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                    Formatting changes like indentation or line endings don&apos;t
                    affect functionality but can create false &quot;changes&quot; —
                    ignoring whitespace lets you focus on real code changes.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-6">
                  <summary className="cursor-pointer text-base font-semibold text-gray-900 dark:text-gray-50 sm:text-lg">
                    Is my data safe when using this tool?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                    Yes. All comparison happens locally in your browser—nothing
                    is uploaded to any server, so it&apos;s safe for sensitive or
                    private documents.
                  </p>
                </details>
              </div>
            </section>

            {/* Related Tools */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Related Developer Tools
              </h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Explore other text processing and development tools to enhance
                your workflow:
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <a
                  href="/tools/json-formatter"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-gray-50 dark:group-hover:text-blue-400">
                    JSON Formatter
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Format JSON files before comparing them for better diff
                    results
                  </p>
                </a>
                <a
                  href="/tools/regex-tester"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-orange-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-orange-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-orange-600 dark:text-gray-50 dark:group-hover:text-orange-400">
                    Regex Tester
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Test patterns to find specific changes in text
                  </p>
                </a>
                <a
                  href="/tools/base64"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-green-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-green-600 dark:text-gray-50 dark:group-hover:text-green-400">
                    Base64 Encoder/Decoder
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Decode Base64 content before comparing
                  </p>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
