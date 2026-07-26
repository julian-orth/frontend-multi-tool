import Breadcrumb from "@/components/breadcrumb";
import { RegexTesterUI } from "./regex-tester-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Regex Tester - Test and Debug Regular Expressions Online",
  description:
    "Free online regex tester with real-time match highlighting, capture groups, and common pattern examples. Test regular expressions with multiple flags and live mode for JavaScript, Python, and more.",
  keywords: [
    "regex",
    "regular expression",
    "regex tester",
    "regex validator",
    "pattern matcher",
    "regex debugger",
    "regex tool",
    "regex online",
    "regex test",
    "regex flags",
  ],
  openGraph: {
    title: "Regex Tester — Test Regular Expressions with Live Highlighting",
    description:
      "Free regex tester with real-time match highlighting, capture groups, and pattern examples. Debug regular expressions instantly in your browser.",
    url: `${SITE_CONFIG.domain}/tools/regex-tester`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `Regex Tester — ${SITE_CONFIG.name}`,
    description:
      "Test and debug regular expressions with real-time highlighting and capture groups. Free online regex tool.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/regex-tester`,
  },
};

export default function RegexTesterPage() {
  return (
    <>
      <ToolSchema
        name="Regex Tester"
        description="Test and debug regular expressions with real-time match highlighting, capture groups, and comprehensive flag support"
        url="/tools/regex-tester"
        keywords={[
          "regex tester",
          "regular expression",
          "pattern matcher",
          "regex debugger",
          "regex validator",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Regex Tester
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Test and debug regular expressions with real-time match
              highlighting, capture groups, and comprehensive flag support. All
              processing happens in your browser for complete privacy.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <RegexTesterUI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is Regex */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What are Regular Expressions?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Regular expressions (regex or regexp) are powerful patterns
                  used to match, search, and manipulate text. They provide a
                  concise and flexible way to identify strings of text, such as
                  specific characters, words, or patterns within larger text
                  bodies. Regular expressions are supported in virtually every
                  modern programming language including JavaScript, Python,
                  Java, PHP, Ruby, and many others.
                </p>
                <p>
                  A regex pattern is composed of a sequence of characters that
                  define a search pattern. These patterns can include literal
                  characters (like &quot;cat&quot;), special characters called
                  metacharacters (like . * + ? [ ] {} ( ) ^ $ | \), and
                  character classes. The true power of regular expressions lies
                  in their ability to express complex matching logic in a
                  compact, declarative syntax.
                </p>
                <p>
                  Originally developed by mathematician Stephen Cole Kleene in
                  the 1950s as a notation for regular languages, regular
                  expressions became widely adopted in Unix tools like grep,
                  sed, and awk in the 1970s. Today, they are an essential tool
                  for developers, data analysts, and anyone working with text
                  processing and validation.
                </p>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for Regular Expressions
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Form Validation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Validate user input for email addresses, phone numbers,
                    postal codes, credit card numbers, passwords, and other
                    structured data. Regex patterns ensure data follows the
                    expected format before processing or storage.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Text Search & Replace
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Find and replace complex patterns in text editors, IDEs, and
                    scripts. Regex enables powerful search-and-replace
                    operations that would be impossible with simple string
                    matching, including capturing and reusing matched groups.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Data Extraction
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Extract specific information from logs, documents, or web
                    pages. Parse structured or semi-structured text to pull out
                    URLs, dates, prices, IDs, or any identifiable pattern for
                    further processing or analysis.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    URL Routing
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Web frameworks use regex patterns to match and extract
                    parameters from URL paths. Express.js, Django, Rails, and
                    other frameworks rely on regex for flexible routing and
                    parameter extraction in web applications.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Log Analysis
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Parse server logs, application logs, or system logs to
                    extract error messages, timestamps, IP addresses, user
                    agents, or other relevant information. Regex patterns help
                    identify patterns in large log files for monitoring and
                    debugging.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Syntax Highlighting
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Code editors and IDEs use regex to identify keywords,
                    strings, comments, and other language constructs for syntax
                    highlighting. This makes code more readable and helps
                    developers quickly identify different elements.
                  </p>
                </div>
              </div>
            </section>

            {/* Regex Flags Explanation */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Understanding Regex Flags
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    <code className="rounded bg-red-100 px-2 py-1 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      g
                    </code>
                    Global Flag
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Without the global flag, regex matches only the first
                    occurrence in the string. With the global flag enabled, the
                    regex continues searching and returns all matches throughout
                    the entire string. Essential for find-and-replace operations
                    and comprehensive text analysis.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    <code className="rounded bg-red-100 px-2 py-1 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      i
                    </code>
                    Case Insensitive Flag
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Makes the pattern matching case-insensitive. For example,
                    the pattern /hello/i will match &quot;hello&quot;, &quot;Hello&quot;, &quot;HELLO&quot;,
                    or any other case variation. Particularly useful when you
                    want to match text regardless of capitalization, such as
                    user input or natural language text.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    <code className="rounded bg-red-100 px-2 py-1 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      m
                    </code>
                    Multiline Flag
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Changes the behavior of ^ and $ anchors. Without this flag,
                    ^ matches only at the start of the entire string and $
                    matches only at the end. With the multiline flag, ^ matches
                    at the start of each line and $ matches at the end of each
                    line. Crucial for working with multi-line text or documents.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    <code className="rounded bg-red-100 px-2 py-1 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      s
                    </code>
                    Dot All Flag
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    By default, the dot (.) metacharacter matches any character
                    except newline characters (\n). The dotAll flag changes this
                    behavior so that . matches any character including newlines.
                    Useful when you need to match patterns that span multiple
                    lines.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    <code className="rounded bg-red-100 px-2 py-1 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      u
                    </code>
                    Unicode Flag
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Enables full Unicode support, treating patterns and strings
                    as sequences of Unicode code points rather than code units.
                    This flag is essential when working with Unicode characters
                    outside the Basic Multilingual Plane, emoji, or when you
                    need accurate character class matching for international
                    text.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    <code className="rounded bg-red-100 px-2 py-1 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      y
                    </code>
                    Sticky Flag
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Matches only from the position indicated by the lastIndex
                    property of the regex object. Unlike the global flag which
                    searches from the last match position, the sticky flag
                    requires the match to occur exactly at lastIndex. Used in
                    parsers and tokenizers for sequential matching.
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
                    What&apos;s the difference between . and \. in regex?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The dot (.) is a special metacharacter that matches any
                    single character (except newlines by default). If you want
                    to match a literal period/dot character, you need to escape
                    it with a backslash: \. For example, to match &quot;example.com&quot;,
                    use the pattern example\.com instead of example.com which
                    would match &quot;exampleXcom&quot; where X is any character.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I match a specific number of characters?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Use curly braces with numbers to specify exact counts or
                    ranges. For example: \d{`{3}`} matches exactly 3 digits, \d
                    {`{3,5}`} matches 3 to 5 digits, and \d{`{3,}`} matches 3 or
                    more digits. This is more precise than using + (one or more)
                    or * (zero or more) quantifiers.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What are capture groups and how do I use them?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Capture groups are portions of a regex pattern enclosed in
                    parentheses ( ) that &quot;capture&quot; the matched text for later
                    use. For example, in the pattern (\d{`{3}`})-(\d{`{4}`}),
                    the two groups capture the area code and number separately
                    from a phone number like &quot;555-1234&quot;. You can reference these
                    groups in replacements using $1, $2, etc., or access them
                    programmatically in your code.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What&apos;s the difference between greedy and lazy matching?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    By default, quantifiers like *, +, and {`{n,m}`} are
                    greedy—they match as much text as possible. For example, .*
                    in the string &quot;&lt;div&gt;content&lt;/div&gt;&quot; matches the
                    entire string. Adding a ? after the quantifier makes it
                    lazy: .*? matches as little as possible, so it would match
                    just &quot;&lt;div&gt;&quot; first. Use lazy matching when you want to
                    match the shortest possible string.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I match a word boundary?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Use \b to match a position between a word character (\w) and
                    a non-word character, or at the start/end of a string. For
                    example, \bcat\b matches &quot;cat&quot; as a whole word but not
                    &quot;category&quot; or &quot;scat&quot;. Word boundaries are essential for
                    matching complete words without accidentally matching parts
                    of longer words.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I use regex to match nested structures like HTML?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Regular expressions are fundamentally limited and cannot
                    fully parse nested or recursive structures like HTML, XML,
                    or balanced parentheses. While you can write regex patterns
                    to match simple, non-nested cases, attempting to match
                    properly nested structures will fail or produce incorrect
                    results. For parsing HTML or XML, use dedicated parsing
                    libraries like DOMParser, BeautifulSoup, or xml2js instead.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why isn&apos;t my regex pattern matching Unicode characters?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    If you&apos;re working with Unicode characters (emoji, accented
                    letters, non-Latin scripts), enable the Unicode flag (u).
                    Without it, character classes like \w or . may not work
                    correctly with Unicode. For example, use /[\u0400-\u04FF]+/u
                    to match Cyrillic characters, or /\p{`{Emoji}`}/u to match
                    emoji when supported by your regex engine.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I escape special characters in regex?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    To match literal special characters like . * + ? ^ $ [ ]{" "}
                    {`{ }`} ( ) | \, you need to escape them with a backslash.
                    For example, to match &quot;example.com&quot;, use example\.com. To
                    match a backslash itself, use \\. If you&apos;re dynamically
                    building regex patterns from user input, use a function to
                    escape all special characters to prevent regex injection
                    vulnerabilities.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What are lookaheads and lookbehinds?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Lookaheads and lookbehinds are zero-width assertions that
                    check for patterns without including them in the match.
                    Positive lookahead (?=...) ensures a pattern follows,
                    negative lookahead (?!...) ensures it doesn&apos;t. For example,
                    \d+(?= dollars) matches numbers followed by &quot; dollars&quot; but
                    doesn&apos;t include &quot; dollars&quot; in the match. Lookbehinds work
                    similarly: (?&lt;=...) checks what comes before, (?&lt;!...)
                    checks what doesn&apos;t come before.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is my data safe when using this tool?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, absolutely. All regex testing and matching happens
                    entirely in your browser using JavaScript. No patterns or
                    test strings are ever sent to our servers or any third
                    party. You can even use this tool offline once the page is
                    loaded. Your privacy and data security are completely
                    protected. This tool is safe to use with sensitive data or
                    proprietary patterns.
                  </p>
                </details>
              </div>
            </section>

            {/* Basic Regex Syntax Reference */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Basic Regex Syntax Reference
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Character Classes
                  </h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">.</code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Any character (except newline)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">\d</code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Any digit [0-9]
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">\w</code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Word character [A-Za-z0-9_]
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">\s</code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Whitespace character
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">
                        [abc]
                      </code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Any of a, b, or c
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">
                        [a-z]
                      </code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Character range a to z
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Quantifiers
                  </h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">*</code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Zero or more
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">+</code>
                      <span className="text-gray-600 dark:text-gray-400">
                        One or more
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">?</code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Zero or one
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">{`{n}`}</code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Exactly n times
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">{`{n,}`}</code>
                      <span className="text-gray-600 dark:text-gray-400">
                        n or more times
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">{`{n,m}`}</code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Between n and m times
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Anchors
                  </h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">^</code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Start of string/line
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">$</code>
                      <span className="text-gray-600 dark:text-gray-400">
                        End of string/line
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">\b</code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Word boundary
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">\B</code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Not word boundary
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Groups & Alternation
                  </h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">
                        (abc)
                      </code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Capture group
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">
                        (?:abc)
                      </code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Non-capturing group
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">
                        a|b
                      </code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Match a or b
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600 dark:text-red-400">\1</code>
                      <span className="text-gray-600 dark:text-gray-400">
                        Backreference to group 1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Tools */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Related Developer Tools
              </h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Explore other text processing and validation tools to streamline
                your development workflow:
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <a
                  href="/tools/text-diff"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-red-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-red-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-red-600 dark:text-gray-50 dark:group-hover:text-red-400">
                    Text Diff Checker
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Compare two text files and highlight differences
                  </p>
                </a>
                <a
                  href="/tools/url-encoder"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-orange-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-orange-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-orange-600 dark:text-gray-50 dark:group-hover:text-orange-400">
                    URL Encoder/Decoder
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Encode and decode URL parameters and query strings
                  </p>
                </a>
                <a
                  href="/tools/json-formatter"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-gray-50 dark:group-hover:text-blue-400">
                    JSON Formatter
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Format, validate, and beautify JSON data
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
