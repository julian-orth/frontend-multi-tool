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
                  A text diff (difference) tool is an essential utility for
                  comparing two text documents and visualizing their
                  differences. Whether you&apos;re reviewing code changes, comparing
                  document versions, analyzing configuration files, or resolving
                  merge conflicts, a diff tool highlights exactly what has been
                  added, removed, or modified between two texts. This makes it
                  easy to spot changes at a glance without manually reading
                  through both documents.
                </p>
                <p>
                  The term &quot;diff&quot; comes from the Unix diff utility created in
                  the early 1970s by Douglas McIlroy and James Hunt. This
                  foundational tool introduced the concept of computing the
                  minimum set of changes needed to transform one file into
                  another. Modern diff tools, including this one, use
                  sophisticated algorithms like the Myers diff algorithm
                  (created by Eugene W. Myers in 1986) to efficiently compute
                  differences even for large files.
                </p>
                <p>
                  Text diff tools are ubiquitous in software development, used
                  daily by millions of developers through version control
                  systems like Git, code review platforms like GitHub and
                  GitLab, and integrated development environments (IDEs).
                  They&apos;re also valuable for writers, editors, legal
                  professionals, and anyone who needs to track changes in text
                  documents over time.
                </p>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for Text Diff Tools
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Code Reviews & Pull Requests
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Review code changes before merging, understand what
                    modifications were made to specific functions or modules,
                    and ensure code quality. Compare different versions of
                    source code files to see evolution over time. Essential for
                    collaborative development and maintaining code quality in
                    team environments.
                  </p>
                </div>
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Document Version Comparison
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Track changes in contracts, articles, essays, or any text
                    documents. Identify what collaborators or editors have
                    modified, ensure no important content was accidentally
                    deleted, and maintain version control for important
                    documents without complex software.
                  </p>
                </div>
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Configuration File Management
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Compare configuration files before deploying changes to
                    production servers. Verify differences in .env files, nginx
                    configs, database settings, or application configurations.
                    Catch accidental changes or missing environment variables
                    that could cause production issues.
                  </p>
                </div>
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Merge Conflict Resolution
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    When merging branches in version control systems, conflicts
                    occur when the same lines are modified differently. Diff
                    tools help visualize conflicting changes, understand what
                    each version contains, and make informed decisions about
                    which changes to keep or how to combine them.
                  </p>
                </div>
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Log File Analysis
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Compare server logs, application logs, or error logs from
                    different time periods or environments. Identify new errors,
                    removed warnings, or changed patterns in log output. Useful
                    for troubleshooting issues and understanding system behavior
                    changes after deployments.
                  </p>
                </div>
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Data File Comparison
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Compare CSV files, JSON exports, SQL dumps, or any
                    structured data files to identify changes in datasets.
                    Verify data migrations, check database exports, or validate
                    that data transformations produced expected results.
                    Line-by-line comparison helps spot data inconsistencies.
                  </p>
                </div>
              </div>
            </section>

            {/* Understanding Diff Views */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Understanding Different Diff Views
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Split View (Side-by-Side Comparison)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Split view displays both texts in parallel columns, making
                    it easy to see the context and structure of both versions
                    simultaneously. The original text appears on the left,
                    modified text on the right:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong className="text-red-600 dark:text-red-400">
                        Deletions (red):
                      </strong>{" "}
                      Lines removed from the original appear only in the left
                      column with red background highlighting
                    </li>
                    <li>
                      <strong className="text-green-600 dark:text-green-400">
                        Additions (green):
                      </strong>{" "}
                      Lines added in the modified version appear only in the
                      right column with green background highlighting
                    </li>
                    <li>
                      <strong>Unchanged lines:</strong> Appear in both columns
                      with normal styling, providing context around changes
                    </li>
                    <li>
                      <strong>Line numbers:</strong> Both columns show line
                      numbers to help navigate and reference specific changes
                    </li>
                  </ul>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Split view is excellent for understanding the overall
                    structure and context of changes. It&apos;s the preferred view
                    when you need to see how changes affect the surrounding code
                    or text, making it ideal for code reviews and detailed
                    analysis.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Unified View (Combined Comparison)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Unified view displays both texts in a single column with
                    visual markers indicating the type of change. This is the
                    format used by Git and other version control systems:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong className="text-red-600 dark:text-red-400">
                        Lines with &quot;-&quot; prefix:
                      </strong>{" "}
                      Deletions shown in red, indicating content removed from
                      the original
                    </li>
                    <li>
                      <strong className="text-green-600 dark:text-green-400">
                        Lines with &quot;+&quot; prefix:
                      </strong>{" "}
                      Additions shown in green, indicating new content in the
                      modified version
                    </li>
                    <li>
                      <strong>Lines with no prefix:</strong> Unchanged context
                      lines that provide surrounding context for changes
                    </li>
                    <li>
                      <strong>Hunks:</strong> Groups of changes are organized
                      into &quot;hunks&quot; with header lines showing line number ranges
                    </li>
                  </ul>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Unified view is more compact than split view, making it
                    easier to scan through many changes quickly. It&apos;s the
                    standard format for patches and is most familiar to
                    developers who work with Git. Perfect for getting a quick
                    overview of all changes or when screen space is limited.
                  </p>
                </div>
              </div>
            </section>

            {/* Comparison Modes */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Comparison Modes Explained
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Line-by-Line Comparison
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Line-by-line mode treats each line as an atomic unit. If any
                    character in a line changes, the entire line is marked as
                    modified. This mode is best for:
                  </p>
                  <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Comparing source code where line boundaries are meaningful
                    </li>
                    <li>Configuration files with line-oriented structure</li>
                    <li>
                      Quick overviews where you don&apos;t need character-level
                      precision
                    </li>
                    <li>
                      Large files where character comparison would be too
                      detailed
                    </li>
                  </ul>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Options like &quot;ignore whitespace&quot; and &quot;newlines as tokens&quot;
                    refine how lines are compared, letting you focus on
                    meaningful changes while ignoring formatting differences.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Word-by-Word Comparison
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Word-by-word mode splits text into individual words and
                    punctuation marks, comparing each as a separate token.
                    Within a line, specific words that changed are highlighted.
                    Best for:
                  </p>
                  <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Prose, articles, documentation, or natural language text
                    </li>
                    <li>
                      Seeing exactly which words were added or removed in a
                      sentence
                    </li>
                    <li>
                      Maintaining readability while showing granular changes
                    </li>
                    <li>Editorial reviews and collaborative writing</li>
                  </ul>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The &quot;ignore case&quot; option is particularly useful here when
                    capitalization differences aren&apos;t important, such as when
                    comparing user-generated content or informal documents.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Character-by-Character Comparison
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Character-by-character mode provides the finest level of
                    detail, highlighting every single character that differs.
                    This mode shows:
                  </p>
                  <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Exact positions where characters were inserted or deleted
                    </li>
                    <li>
                      Typos, single-letter differences, or subtle text changes
                    </li>
                    <li>
                      Whitespace changes, extra spaces, or formatting issues
                    </li>
                    <li>
                      Precise differences in strings, identifiers, or data
                      values
                    </li>
                  </ul>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    While very detailed, this mode can be overwhelming for large
                    changes. Use it when you need to see every modification or
                    when comparing short texts where precision matters more than
                    overview.
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
                    What algorithm does this diff tool use?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    This tool uses the Myers diff algorithm (developed by Eugene
                    W. Myers in 1986), which is the industry standard for
                    computing differences between texts. It&apos;s the same algorithm
                    powering Git, Unix diff, and most modern version control
                    systems. The Myers algorithm efficiently finds the shortest
                    edit script (smallest set of changes) to transform one text
                    into another, making it both fast and accurate even for
                    large files.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I use the unified diff patch file?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The generated unified diff patch follows the standard format
                    used by Git and Unix patch tools. You can apply it using:
                    &quot;git apply patch.diff&quot; for Git repositories, &quot;patch &lt;
                    patch.diff&quot; for Unix patch command, or import it into
                    version control systems. The patch includes headers showing
                    old and new file names, line number ranges (@@), and all
                    changes with +/- markers, making it a portable way to share
                    or apply changes.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why should I ignore whitespace when comparing code?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Ignoring whitespace is crucial when comparing code because
                    formatting changes (indentation, spacing, line endings)
                    don&apos;t affect functionality but can create hundreds of false
                    &quot;changes.&quot; This is especially important when: comparing code
                    formatted by different editors or linters, reviewing changes
                    after auto- formatting, working across different operating
                    systems (Windows vs Unix line endings), or when team members
                    use different tab/space settings. Ignoring whitespace lets
                    you focus on actual code changes that matter.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What&apos;s the difference between split and unified view?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Split view shows both texts side-by-side in parallel
                    columns, making it easier to see context and structure of
                    both versions simultaneously. It&apos;s better for understanding
                    overall changes and seeing how modifications affect
                    surrounding code. Unified view combines both texts into a
                    single column with +/- markers, which is more compact and
                    matches Git&apos;s output format. Use split view for detailed
                    review and context, unified view for quick scanning or when
                    familiar with Git patch format.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I compare binary files or images?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No, this tool is designed specifically for text file
                    comparison. Binary files (images, executables, compressed
                    files, PDFs) require specialized binary diff tools that work
                    with bytes rather than text characters. For images, use
                    visual diff tools that show pixel-by-pixel differences. For
                    other binary files, consider tools like vbindiff or
                    specialized diff utilities designed for binary data.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is there a file size limit?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    While the tool can handle reasonably large files (several
                    megabytes), very large files may be slow to process or could
                    crash your browser depending on your device&apos;s memory and
                    performance. For best results, keep files under 1-2MB. For
                    comparing very large files (10MB+), consider using
                    command-line tools like diff, git diff, or specialized diff
                    utilities designed for large-scale comparisons that don&apos;t
                    run in the browser.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    When should I use word vs character comparison?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Use word-by-word comparison for prose, documentation,
                    articles, or any natural language text where you want to see
                    which specific words changed while maintaining readability.
                    Use character-by-character for precise comparison needs:
                    finding typos, comparing short strings, analyzing data
                    values, or when you need to see exactly where individual
                    characters differ. Line-by- line is best for code or
                    structured text where line boundaries matter.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is my data safe when using this tool?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, absolutely safe. All text comparison and diff
                    computation happens entirely in your browser using
                    JavaScript. No files or text content are ever uploaded to
                    our servers, stored in databases, or transmitted over the
                    internet. You can even disconnect from the internet after
                    loading the page and the tool will continue to work offline.
                    This makes it completely safe to compare sensitive
                    documents, proprietary code, confidential contracts, or any
                    private data.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I load files for comparison?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    You can either copy and paste text directly into the input
                    areas, or use the file upload buttons to load text files
                    from your computer. The tool supports any plain text file
                    format (.txt, .js, .py, .md, .json, .xml, .csv, etc.). After
                    loading, files are read into the browser&apos;s memory and
                    compared locally—nothing is uploaded to any server. The
                    &quot;Swap&quot; button lets you quickly reverse the comparison
                    direction if needed.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What does &quot;ignore case&quot; do?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The &quot;ignore case&quot; option makes the comparison
                    case-insensitive, treating uppercase and lowercase letters
                    as equivalent. For example, &quot;Hello&quot; and &quot;hello&quot; would be
                    considered identical. This is useful when comparing:
                    user-generated content where capitalization varies,
                    case-insensitive programming languages, text where
                    capitalization doesn&apos;t affect meaning, or when you want to
                    focus on content changes rather than formatting. It works
                    with word and character comparison modes but not
                    line-by-line.
                  </p>
                </details>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Best Practices for Text Comparison
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Start with line-by-line view:</strong> Begin with
                    line-by-line comparison in split view to get a quick
                    overview of changes. This helps you understand the scope and
                    type of modifications before diving into details. Once
                    you&apos;ve identified interesting sections, switch to word or
                    character mode for detailed analysis.
                  </p>
                  <p>
                    <strong>Use appropriate comparison modes:</strong> Match the
                    comparison mode to your content type. Code and configuration
                    files benefit from line-by-line with whitespace ignored.
                    Natural language documents work better with word-by-word
                    comparison. Precise string or data comparison needs
                    character-by-character mode.
                  </p>
                  <p>
                    <strong>Leverage view options strategically:</strong> Enable
                    &quot;ignore whitespace&quot; when formatting changes obscure real
                    content changes. Use &quot;ignore case&quot; for case-insensitive
                    comparisons. Turn on &quot;newlines as tokens&quot; when paragraph
                    structure changes are important. These options help you
                    focus on the changes that actually matter.
                  </p>
                  <p>
                    <strong>Save important diffs as patches:</strong> When you
                    need to share changes or apply them later, export to unified
                    diff patch format. This creates a portable,
                    version-control-compatible file that documents exactly what
                    changed and can be applied programmatically with Git or
                    patch tools.
                  </p>
                  <p>
                    <strong>Use context to understand changes:</strong> Don&apos;t
                    just look at the highlighted changes—read the surrounding
                    unchanged lines to understand why changes were made. Context
                    helps you evaluate whether changes are correct, safe, and
                    appropriate.
                  </p>
                  <p>
                    <strong>Compare incrementally for large changes:</strong>{" "}
                    When reviewing major rewrites or large updates, break the
                    comparison into smaller chunks. Compare files section by
                    section or function by function to make the review process
                    more manageable and reduce the chance of missing important
                    changes.
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Details */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Technical Details
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    The Myers Diff Algorithm
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The Myers algorithm finds the shortest edit script (SES)
                    between two sequences—the minimum set of insertions and
                    deletions needed to transform one text into another. It uses
                    a graph-based approach where: the x-axis represents the
                    original text, y-axis represents the modified text, and the
                    algorithm finds the shortest path through this edit graph.
                    This guarantees optimal results: the smallest possible diff
                    that accurately represents changes.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Unified Diff Format Specification
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Unified diff format follows these conventions:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>Headers:</strong> File names prefixed with ---
                      (original) and +++ (modified)
                    </li>
                    <li>
                      <strong>Hunk headers:</strong> @@ -start,count
                      +start,count @@ showing line ranges
                    </li>
                    <li>
                      <strong>Context lines:</strong> No prefix, showing
                      unchanged lines around changes
                    </li>
                    <li>
                      <strong>Deletions:</strong> Lines prefixed with - (minus
                      sign)
                    </li>
                    <li>
                      <strong>Additions:</strong> Lines prefixed with + (plus
                      sign)
                    </li>
                  </ul>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    This format is standardized and recognized by all major
                    version control systems, making patches portable and widely
                    compatible.
                  </p>
                </div>
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
