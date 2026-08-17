import Breadcrumb from "@/components/breadcrumb";
import { MarkdownPreviewerUI } from "./markdown-previewer-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Markdown Previewer & Editor - Live GitHub Flavored Markdown",
  description:
    "Free online markdown editor with live preview, GitHub-flavored markdown support, syntax highlighting, and HTML export. Perfect for documentation, README files, and content creation.",
  keywords: [
    "markdown editor",
    "markdown preview",
    "gfm",
    "github flavored markdown",
    "markdown to html",
    "online markdown",
    "markdown live preview",
    "markdown syntax",
    "readme editor",
  ],
  openGraph: {
    title:
      "Markdown Previewer & Editor — Live GFM Preview with Syntax Highlighting",
    description:
      "Write and preview markdown with live rendering, GitHub-flavored markdown support, and HTML export. Free online markdown editor for developers.",
    url: `${SITE_CONFIG.domain}/tools/markdown-previewer`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `Markdown Previewer & Editor — ${SITE_CONFIG.name}`,
    description:
      "Live markdown editor with GitHub-flavored support and syntax highlighting. Export to HTML. Free tool.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/markdown-previewer`,
  },
};

export default function MarkdownPreviewerPage() {
  return (
    <>
      <ToolSchema
        name="Markdown Previewer & Editor"
        description="Write and preview markdown with live rendering, GitHub-flavored markdown support, and syntax highlighting"
        url="/tools/markdown-previewer"
        keywords={[
          "markdown editor",
          "markdown preview",
          "github flavored markdown",
          "markdown to html",
          "readme editor",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Markdown Previewer & Editor
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Write and preview markdown with live rendering, GitHub-flavored
              markdown support, syntax highlighting, and instant HTML export.
              All processing happens in your browser for complete privacy.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <MarkdownPreviewerUI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is Markdown */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is Markdown?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Markdown is a lightweight markup language that lets you write
                  formatted text using simple, readable plain-text syntax. It&apos;s
                  the standard format for README files, documentation, blog
                  posts, and notes because it stays readable even unrendered.
                  GitHub-flavored Markdown (GFM) extends it with tables, task
                  lists, strikethrough, and auto-linking.
                </p>
              </div>
            </section>

            {/* Key Facts */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Key Facts
              </h2>
              <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                  <li>
                    Used everywhere: GitHub READMEs, docs sites, static site
                    generators, note apps (Obsidian, Notion), and comments on
                    Reddit, Discord, and Slack.
                  </li>
                  <li>
                    Core syntax: <code>#</code> for headings,{" "}
                    <code>**bold**</code>, <code>*italic*</code>,{" "}
                    <code>[link](url)</code>, <code>![alt](image)</code>, and{" "}
                    <code>`code`</code>.
                  </li>
                  <li>
                    GFM tables use pipes and hyphens, e.g.{" "}
                    <code>| Header | --- |</code>, with colons for column
                    alignment.
                  </li>
                  <li>
                    Code blocks use triple backticks with a language name
                    (e.g. ```javascript) to enable syntax highlighting.
                  </li>
                  <li>
                    Raw HTML can be embedded inside Markdown for formatting it
                    doesn&apos;t natively support, but use it sparingly.
                  </li>
                  <li>
                    All parsing and rendering here happens locally in your
                    browser — nothing you type is sent to a server.
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
                    What&apos;s the difference between Markdown and HTML?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                    Markdown is a simpler, human-readable plain-text syntax
                    that gets converted to HTML for display. HTML offers more
                    control but is more verbose to write and read.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-6">
                  <summary className="cursor-pointer text-base font-semibold text-gray-900 dark:text-gray-50 sm:text-lg">
                    What is GitHub-flavored Markdown (GFM)?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                    GFM extends standard Markdown with tables, task list
                    checkboxes, strikethrough, auto-linking, and syntax-
                    highlighted code fences. It&apos;s widely supported beyond
                    just GitHub.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-6">
                  <summary className="cursor-pointer text-base font-semibold text-gray-900 dark:text-gray-50 sm:text-lg">
                    Is my content safe when using this tool?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                    Yes. All parsing and rendering happen entirely in your
                    browser — nothing is sent to a server, and it even works
                    offline once loaded.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-6">
                  <summary className="cursor-pointer text-base font-semibold text-gray-900 dark:text-gray-50 sm:text-lg">
                    Why isn&apos;t my Markdown rendering correctly?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                    Common causes are missing blank lines around lists, quotes,
                    or code blocks, inconsistent indentation, or mixing tabs
                    and spaces.
                  </p>
                </details>
              </div>
            </section>

            {/* Related Tools */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Related Tools
              </h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Explore other text and content tools:
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <a
                  href="/tools/text-diff"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-yellow-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-yellow-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-yellow-600 dark:text-gray-50 dark:group-hover:text-yellow-400">
                    Text Diff
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Compare text differences side-by-side
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
