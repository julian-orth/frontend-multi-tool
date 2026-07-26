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
                  Markdown is a lightweight markup language created by John
                  Gruber in 2004. It allows you to write formatted text using a
                  simple, easy-to-read plain text syntax that can be converted
                  to HTML and other formats. Markdown has become the de facto
                  standard for writing documentation, README files, blog posts,
                  and technical content.
                </p>
                <p>
                  The beauty of Markdown lies in its simplicity and readability.
                  Unlike HTML or other markup languages, Markdown files are
                  readable as-is, even without being rendered. This makes it
                  perfect for version control systems like Git, where you can
                  see the actual content changes without wading through
                  formatting tags.
                </p>
                <p>
                  GitHub-flavored Markdown (GFM) extends the original
                  specification with additional features like tables, task
                  lists, strikethrough text, and automatic URL linking. These
                  extensions have become so popular that they&apos;re now
                  supported by many Markdown parsers and editors.
                </p>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Uses for Markdown
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Documentation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Markdown is the standard format for writing software
                    documentation, API references, and technical guides. Its
                    simplicity allows developers to focus on content rather than
                    formatting, while still producing professional-looking
                    output.
                  </p>
                </div>
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    README Files
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Almost every GitHub repository includes a README.md file
                    written in Markdown. It provides project overview,
                    installation instructions, usage examples, and contribution
                    guidelines in a format that&apos;s both readable in plain
                    text and beautifully rendered on GitHub.
                  </p>
                </div>
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Blog Posts & Articles
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Many static site generators (Jekyll, Hugo, Gatsby) and CMS
                    platforms (Ghost, Dev.to) use Markdown for content creation.
                    Writers can focus on their content without worrying about
                    HTML tags or complex formatting interfaces.
                  </p>
                </div>
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Note-Taking
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Note-taking apps like Obsidian, Notion, and Bear use
                    Markdown for formatting. This allows notes to be portable,
                    searchable, and future-proof since they&apos;re stored as
                    plain text files that can be opened with any text editor.
                  </p>
                </div>
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Forums & Comments
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Popular platforms like Reddit, Stack Overflow, Discord, and
                    Slack support Markdown formatting in comments and messages.
                    This allows users to format code snippets, create lists, and
                    emphasize text without using complex editors.
                  </p>
                </div>
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Email Composition
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Some email clients and services support Markdown for
                    composing emails. This is particularly popular among
                    developers who prefer writing in plain text while still
                    being able to format their messages with headings, lists,
                    and code blocks.
                  </p>
                </div>
              </div>
            </section>

            {/* Markdown Syntax Guide */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Markdown Syntax Quick Reference
              </h2>
              <div className="space-y-6">
                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-800/50">
                      <tr>
                        <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-50">
                          Element
                        </th>
                        <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-50">
                          Markdown Syntax
                        </th>
                        <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-50">
                          Example
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-50">
                          Heading
                        </td>
                        <td className="px-6 py-4 font-mono text-xs text-gray-700 dark:text-gray-300">
                          # H1 ## H2 ### H3
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          Six levels available
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-50">
                          Bold
                        </td>
                        <td className="px-6 py-4 font-mono text-xs text-gray-700 dark:text-gray-300">
                          **bold text**
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          Double asterisks or underscores
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-50">
                          Italic
                        </td>
                        <td className="px-6 py-4 font-mono text-xs text-gray-700 dark:text-gray-300">
                          *italicized text*
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          Single asterisks or underscores
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-50">
                          Blockquote
                        </td>
                        <td className="px-6 py-4 font-mono text-xs text-gray-700 dark:text-gray-300">
                          {"> quote"}
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          Greater-than symbol
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-50">
                          Ordered List
                        </td>
                        <td className="px-6 py-4 font-mono text-xs text-gray-700 dark:text-gray-300">
                          1. First item
                          <br />
                          2. Second item
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          Numbers with periods
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-50">
                          Unordered List
                        </td>
                        <td className="px-6 py-4 font-mono text-xs text-gray-700 dark:text-gray-300">
                          - First item
                          <br />- Second item
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          Dash, asterisk, or plus
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-50">
                          Code
                        </td>
                        <td className="px-6 py-4 font-mono text-xs text-gray-700 dark:text-gray-300">
                          `code`
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          Backticks for inline code
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-50">
                          Code Block
                        </td>
                        <td className="px-6 py-4 font-mono text-xs text-gray-700 dark:text-gray-300">
                          ```language
                          <br />
                          code
                          <br />
                          ```
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          Triple backticks with language
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-50">
                          Link
                        </td>
                        <td className="px-6 py-4 font-mono text-xs text-gray-700 dark:text-gray-300">
                          [title](https://url.com)
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          Brackets and parentheses
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-50">
                          Image
                        </td>
                        <td className="px-6 py-4 font-mono text-xs text-gray-700 dark:text-gray-300">
                          ![alt](image.jpg)
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          Exclamation mark before link
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-50">
                          Table
                        </td>
                        <td className="px-6 py-4 font-mono text-xs text-gray-700 dark:text-gray-300">
                          | Header |<br />
                          | ------ |<br />| Cell |
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          Pipes and hyphens (GFM)
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                    What&apos;s the difference between Markdown and HTML?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Markdown is a lightweight markup language designed to be
                    human-readable in its raw form, while HTML is more verbose
                    and harder to read without rendering. Markdown files are
                    easier to write and maintain, but HTML offers more control
                    over styling and layout. Markdown is typically converted to
                    HTML for display on websites. Think of Markdown as a
                    simpler, more readable way to write content that will
                    eventually become HTML.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What is GitHub-flavored Markdown (GFM)?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    GitHub-flavored Markdown is a variant of Markdown that adds
                    several useful features beyond the original specification.
                    It includes support for tables, task lists (checkboxes),
                    strikethrough text, automatic URL linking, code fencing with
                    syntax highlighting, and emoji shortcodes. GFM is widely
                    used not just on GitHub, but across many platforms and tools
                    because it provides practical features that the original
                    Markdown specification lacked.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I use HTML inside Markdown?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes! Most Markdown parsers allow you to include raw HTML
                    directly in your Markdown files. This is useful when you
                    need more control over formatting or want to use HTML
                    elements that don&apos;t have Markdown equivalents (like
                    centered text, custom colors, or complex tables). However,
                    mixing too much HTML can defeat the purpose of using
                    Markdown in the first place, which is simplicity and
                    readability. Use HTML sparingly when Markdown&apos;s syntax
                    can&apos;t achieve what you need.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is my content safe when using this tool?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Absolutely. All Markdown parsing and HTML rendering happen
                    entirely in your browser using JavaScript. No data is ever
                    sent to our servers or any third party. You can even use
                    this tool offline once the page is loaded. Your content
                    stays private and secure on your device. We don&apos;t
                    track, store, or have access to anything you write in the
                    editor.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I export my markdown to other formats?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    This tool allows you to copy the rendered HTML and the raw
                    Markdown text. You can use the HTML output to paste into
                    websites, email clients, or content management systems. The
                    Markdown text can be saved to .md files for use in static
                    site generators, GitHub repositories, or note-taking apps.
                    For conversion to formats like PDF, Word, or LaTeX,
                    you&apos;d need to use additional tools like Pandoc.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Does this editor support syntax highlighting?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes! When you create code blocks using triple backticks
                    followed by a language name (e.g., ```javascript), the
                    preview will show syntax-highlighted code. This works for
                    dozens of programming languages including JavaScript,
                    Python, Java, C++, HTML, CSS, and many more. Syntax
                    highlighting makes code examples easier to read and more
                    professional-looking in documentation.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why isn&apos;t my Markdown rendering correctly?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Common issues include: forgetting blank lines before lists
                    or code blocks, incorrect indentation, mixing tabs and
                    spaces, or using syntax that&apos;s specific to certain
                    Markdown flavors. Make sure there&apos;s a blank line before
                    and after lists, blockquotes, and code blocks. For lists,
                    items should start at the beginning of a line or be properly
                    indented. Check that code blocks use three backticks on
                    their own lines. If you&apos;re copying from another editor,
                    invisible characters might cause problems.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I create tables in Markdown?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, tables are supported in GitHub-flavored Markdown (GFM).
                    Create tables using pipes (|) to separate columns and
                    hyphens (-) for the header row. For example: | Header 1 |
                    Header 2 | | --------- | --------- | | Cell 1 | Cell 2 |.
                    You can align columns using colons in the separator row:
                    :--- for left, :---: for center, and ---: for right
                    alignment. While table syntax can be a bit tedious to write
                    by hand, many editors offer table generators to make it
                    easier.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What&apos;s the best way to learn Markdown?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The best way to learn Markdown is by using it! Start with
                    the basics: headings, bold, italic, and links. Then
                    gradually add more features like lists, code blocks, and
                    images as you need them. This interactive editor is perfect
                    for practice—just start typing and see the results
                    instantly. Keep a Markdown cheat sheet handy for reference.
                    Within a few hours of use, you&apos;ll find the syntax
                    becomes second nature. Most people can master the
                    commonly-used Markdown features in an afternoon.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Are emoji supported in Markdown?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    In GitHub-flavored Markdown, you can use emoji shortcodes
                    like :smile:, :heart:, or :rocket: which render as emoji
                    characters. You can also paste emoji directly into your
                    Markdown text, and they&apos;ll appear in the output. This
                    tool supports both methods. Emoji are great for adding
                    visual interest to documentation, README files, and informal
                    content. A full list of GitHub emoji codes is available in
                    the GitHub emoji cheat sheet.
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
