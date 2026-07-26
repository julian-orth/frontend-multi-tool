import Breadcrumb from "@/components/breadcrumb";
import { HtmlEncoderUI } from "./html-encoder-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "HTML Encoder/Decoder - Convert Special Characters to HTML Entities",
  description:
    "Free online HTML encoder and decoder tool. Convert special characters to HTML entities (e.g., < to &lt;) and decode HTML entities back to plain text. Supports named entities, numeric codes, and bulk encoding with live preview. Essential for preventing XSS attacks and displaying HTML code safely on web pages.",
  keywords: [
    "html encoder",
    "html decoder",
    "html entities",
    "html escape",
    "html unescape",
    "encode html",
    "decode html",
    "html special characters",
    "html entity converter",
    "xss prevention",
    "html escape characters",
    "html character codes",
    "html entity reference",
    "ampersand encoding",
    "less than greater than encoding",
    "html symbols",
    "html entity decoder",
    "html character entity",
  ],
  openGraph: {
    title: "HTML Encoder/Decoder - Convert Special Characters to HTML Entities",
    description:
      "Encode and decode HTML entities instantly. Convert < > & \" ' and other special characters to their HTML entity equivalents. Free, fast, and secure.",
    type: "website",
    url: `${SITE_CONFIG.domain}/tools/html-encoder`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "HTML Encoder/Decoder - Convert Special Characters to HTML Entities",
    description:
      "Convert special characters to HTML entities and decode them back. Supports named entities, numeric codes, and live mode. 100% client-side processing.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/html-encoder`,
  },
};

export default function HtmlEncoderPage() {
  return (
    <>
      <ToolSchema
        name="HTML Encoder/Decoder"
        description="Convert special characters to HTML entities and decode them back for XSS prevention and safe character rendering"
        url="/tools/html-encoder"
        keywords={[
          "html encoder",
          "html entities",
          "html escape",
          "xss prevention",
          "html decoder",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              HTML Encoder/Decoder
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Convert special characters to HTML entities and decode them back
              to plain text. Essential for preventing XSS attacks, displaying
              code snippets, and ensuring proper character rendering in HTML.
              All processing happens in your browser for complete privacy.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <HtmlEncoderUI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is HTML Encoding */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is HTML Encoding?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  HTML encoding, also known as HTML entity encoding or HTML
                  escaping, is the process of converting special characters into
                  their corresponding HTML entity representations. This ensures
                  that these characters are displayed as text rather than being
                  interpreted as HTML markup or code by web browsers.
                </p>
                <p>
                  For example, the less-than symbol{" "}
                  <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
                    &lt;
                  </code>{" "}
                  is encoded as{" "}
                  <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
                    &amp;lt;
                  </code>{" "}
                  to prevent browsers from treating it as the beginning of an
                  HTML tag. Similarly, the ampersand{" "}
                  <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
                    &amp;
                  </code>{" "}
                  becomes{" "}
                  <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
                    &amp;amp;
                  </code>{" "}
                  to avoid confusion with entity references.
                </p>
                <p>
                  HTML entities come in two forms:{" "}
                  <strong>named entities</strong> (like{" "}
                  <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
                    &amp;copy;
                  </code>{" "}
                  for ©) and <strong>numeric entities</strong> (like{" "}
                  <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
                    &amp;#169;
                  </code>{" "}
                  or{" "}
                  <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
                    &amp;#xA9;
                  </code>{" "}
                  for ©). Named entities are more readable, while numeric
                  entities can represent any Unicode character.
                </p>
                <p>
                  This encoding process is crucial for web security, preventing
                  XSS (Cross-Site Scripting) attacks, displaying code examples,
                  and ensuring proper rendering of special characters across
                  different browsers and platforms.
                </p>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for HTML Encoding
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-6 dark:border-orange-800 dark:bg-orange-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    XSS Attack Prevention
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Encoding user-generated content prevents malicious scripts
                    from being executed. When users input text containing HTML
                    or JavaScript, encoding ensures it displays as plain text
                    rather than executable code, protecting your website and
                    users from XSS vulnerabilities.
                  </p>
                </div>
                <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-6 dark:border-orange-800 dark:bg-orange-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Displaying Code Snippets
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    When showing HTML, XML, or other markup code examples on
                    your website, encoding prevents the browser from
                    interpreting tags. This allows you to display code exactly
                    as written, making it perfect for tutorials, documentation,
                    and code-sharing platforms.
                  </p>
                </div>
                <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-6 dark:border-orange-800 dark:bg-orange-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Special Character Display
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Display copyright symbols (©), trademarks (™), currency
                    symbols (€, £, ¥), mathematical operators (×, ÷), and other
                    special characters that might not render correctly in all
                    browsers or encodings. HTML entities ensure consistent
                    display across platforms.
                  </p>
                </div>
                <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-6 dark:border-orange-800 dark:bg-orange-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Form Data Processing
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    When processing form submissions, encoding special
                    characters prevents issues with database storage, ensures
                    data integrity, and protects against SQL injection when
                    combined with proper parameterized queries. It&apos;s essential
                    for safely handling user input.
                  </p>
                </div>
                <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-6 dark:border-orange-800 dark:bg-orange-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Email Content
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    HTML emails require proper encoding of special characters to
                    display correctly across different email clients. Encoding
                    ensures your message appears as intended, whether viewed in
                    Gmail, Outlook, or mobile email apps, preventing formatting
                    issues.
                  </p>
                </div>
                <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-6 dark:border-orange-800 dark:bg-orange-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    XML and RSS Feeds
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    XML documents and RSS feeds have strict syntax rules.
                    Encoding special characters like &lt;, &gt;, and &amp; is
                    mandatory to create valid XML. This ensures your feeds parse
                    correctly in RSS readers and XML processors without syntax
                    errors.
                  </p>
                </div>
              </div>
            </section>

            {/* Essential HTML Entities Reference */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Essential HTML Entities Reference
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr>
                      <th className="border-b border-gray-200 px-6 py-3 text-left font-semibold text-gray-900 dark:border-gray-800 dark:text-gray-50">
                        Character
                      </th>
                      <th className="border-b border-gray-200 px-6 py-3 text-left font-semibold text-gray-900 dark:border-gray-800 dark:text-gray-50">
                        Named Entity
                      </th>
                      <th className="border-b border-gray-200 px-6 py-3 text-left font-semibold text-gray-900 dark:border-gray-800 dark:text-gray-50">
                        Numeric Code
                      </th>
                      <th className="border-b border-gray-200 px-6 py-3 text-left font-semibold text-gray-900 dark:border-gray-800 dark:text-gray-50">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-900">
                    <tr>
                      <td className="px-6 py-4 font-mono text-gray-900 dark:text-gray-100">
                        &lt;
                      </td>
                      <td className="px-6 py-4 font-mono text-orange-600 dark:text-orange-400">
                        &amp;lt;
                      </td>
                      <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-400">
                        &amp;#60;
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        Less than sign
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-gray-900 dark:text-gray-100">
                        &gt;
                      </td>
                      <td className="px-6 py-4 font-mono text-orange-600 dark:text-orange-400">
                        &amp;gt;
                      </td>
                      <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-400">
                        &amp;#62;
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        Greater than sign
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-gray-900 dark:text-gray-100">
                        &amp;
                      </td>
                      <td className="px-6 py-4 font-mono text-orange-600 dark:text-orange-400">
                        &amp;amp;
                      </td>
                      <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-400">
                        &amp;#38;
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        Ampersand
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-gray-900 dark:text-gray-100">
                        &quot;
                      </td>
                      <td className="px-6 py-4 font-mono text-orange-600 dark:text-orange-400">
                        &amp;quot;
                      </td>
                      <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-400">
                        &amp;#34;
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        Double quotation mark
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-gray-900 dark:text-gray-100">
                        &apos;
                      </td>
                      <td className="px-6 py-4 font-mono text-orange-600 dark:text-orange-400">
                        &amp;apos; or &amp;#39;
                      </td>
                      <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-400">
                        &amp;#39;
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        Single quotation mark (apostrophe)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-gray-900 dark:text-gray-100">
                        &nbsp;
                      </td>
                      <td className="px-6 py-4 font-mono text-orange-600 dark:text-orange-400">
                        &amp;nbsp;
                      </td>
                      <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-400">
                        &amp;#160;
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        Non-breaking space
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-gray-900 dark:text-gray-100">
                        ©
                      </td>
                      <td className="px-6 py-4 font-mono text-orange-600 dark:text-orange-400">
                        &amp;copy;
                      </td>
                      <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-400">
                        &amp;#169;
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        Copyright symbol
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-gray-900 dark:text-gray-100">
                        ®
                      </td>
                      <td className="px-6 py-4 font-mono text-orange-600 dark:text-orange-400">
                        &amp;reg;
                      </td>
                      <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-400">
                        &amp;#174;
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        Registered trademark
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-gray-900 dark:text-gray-100">
                        ™
                      </td>
                      <td className="px-6 py-4 font-mono text-orange-600 dark:text-orange-400">
                        &amp;trade;
                      </td>
                      <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-400">
                        &amp;#8482;
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        Trademark symbol
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-gray-900 dark:text-gray-100">
                        €
                      </td>
                      <td className="px-6 py-4 font-mono text-orange-600 dark:text-orange-400">
                        &amp;euro;
                      </td>
                      <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-400">
                        &amp;#8364;
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        Euro currency symbol
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-gray-900 dark:text-gray-100">
                        £
                      </td>
                      <td className="px-6 py-4 font-mono text-orange-600 dark:text-orange-400">
                        &amp;pound;
                      </td>
                      <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-400">
                        &amp;#163;
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        Pound sterling symbol
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-gray-900 dark:text-gray-100">
                        ¥
                      </td>
                      <td className="px-6 py-4 font-mono text-orange-600 dark:text-orange-400">
                        &amp;yen;
                      </td>
                      <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-400">
                        &amp;#165;
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        Yen/Yuan currency symbol
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                These are the most commonly used HTML entities. Our tool
                supports hundreds more including Greek letters, mathematical
                symbols, arrows, and special punctuation marks.
              </p>
            </section>

            {/* Features Explanation */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Advanced Features
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Named Entities vs. Numeric Codes
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Choose between human-readable named entities (like{" "}
                    <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
                      &amp;copy;
                    </code>
                    ) or universal numeric codes (like{" "}
                    <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
                      &amp;#169;
                    </code>
                    ).
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>Named entities:</strong> More readable and
                      memorable, but limited to predefined character sets. Ideal
                      for common symbols like copyright, trademark, and currency
                      symbols.
                    </li>
                    <li>
                      <strong>Numeric codes:</strong> Can represent any Unicode
                      character using decimal (
                      <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                        &amp;#N;
                      </code>
                      ) or hexadecimal (
                      <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                        &amp;#xN;
                      </code>
                      ) notation. Perfect for emoji, rare symbols, and
                      international characters.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Encode All Characters
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Enable this option to convert every character, including
                    regular letters and numbers, into numeric HTML entities.
                    This creates heavily obfuscated text useful for:
                  </p>
                  <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Email address protection from spam bots</li>
                    <li>
                      Hiding text from simple scrapers while keeping it visible
                      to users
                    </li>
                    <li>Creating puzzles or encoded messages</li>
                    <li>Testing HTML entity decoder implementations</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    Note: This significantly increases text size and may impact
                    page load times with large amounts of content.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Line-by-Line Processing
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Process multiple independent text entries simultaneously,
                    with each line encoded or decoded separately. Perfect for:
                  </p>
                  <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Batch processing lists of HTML snippets</li>
                    <li>Converting multiple strings in database migrations</li>
                    <li>Encoding form field values in bulk</li>
                    <li>Processing CSV or TSV data containing HTML</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Live Mode
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Enable live mode for instant encoding or decoding as you
                    type. All processing happens directly in your browser using
                    JavaScript with no data sent to any server. Perfect for
                    learning how different characters are encoded, testing quick
                    conversions, or understanding HTML entity representations in
                    real-time.
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
                    What&apos;s the difference between HTML encoding and URL
                    encoding?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    HTML encoding converts special characters to HTML entities
                    (like{" "}
                    <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                      &amp;lt;
                    </code>
                    ) for display in HTML documents, while URL encoding uses
                    percent-encoding (like{" "}
                    <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                      %3C
                    </code>
                    ) for transmitting data in URLs. HTML encoding is for
                    content display and XSS prevention, while URL encoding is
                    for safe transmission of data in web addresses and query
                    parameters. They&apos;re complementary but serve different
                    purposes.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Does HTML encoding prevent all XSS attacks?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    HTML encoding is essential for XSS prevention but not
                    sufficient on its own. It prevents attacks when user input
                    is displayed in HTML content, but additional measures are
                    needed for data in JavaScript contexts, CSS, or HTML
                    attributes. Use context-aware encoding, Content Security
                    Policy (CSP), input validation, and frameworks with built-in
                    XSS protection for comprehensive security. Always follow
                    OWASP guidelines for web application security.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Do I need to encode all special characters?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    At minimum, always encode{" "}
                    <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                      &lt;
                    </code>
                    ,{" "}
                    <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                      &gt;
                    </code>
                    ,{" "}
                    <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                      &amp;
                    </code>
                    ,{" "}
                    <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                      &quot;
                    </code>
                    , and{" "}
                    <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                      &apos;
                    </code>{" "}
                    in user-generated content to prevent XSS. For UTF-8 encoded
                    pages, you don&apos;t need to encode international characters
                    (like accented letters or Chinese characters), but you may
                    choose to for compatibility with older systems or email
                    clients. Encoding non-breaking spaces and special symbols
                    depends on your specific use case and target audience.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I decode doubly-encoded HTML entities?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, but you&apos;ll need to decode multiple times. Sometimes
                    data gets encoded twice (like{" "}
                    <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                      &amp;amp;lt;
                    </code>{" "}
                    instead of{" "}
                    <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                      &amp;lt;
                    </code>
                    ). Our decoder handles one level of encoding per operation,
                    so run the decoder twice to fully decode double-encoded
                    text. You can use the swap button to quickly move output to
                    input for sequential decoding operations.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why use named entities instead of Unicode characters
                    directly?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    While modern UTF-8 encoding supports Unicode characters
                    directly, HTML entities offer several advantages: guaranteed
                    compatibility with older browsers and email clients,
                    protection against encoding corruption during data
                    transmission, explicit indication of special characters in
                    source code, and prevention of issues with systems that
                    don&apos;t properly handle Unicode. For critical symbols (©, ®,
                    ™) and HTML-significant characters (&lt;, &gt;, &amp;),
                    entities are the safer choice.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is my data safe when using this tool?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Absolutely. All encoding and decoding operations happen
                    entirely in your browser using JavaScript. No data is ever
                    sent to our servers or any third party. You can verify this
                    by disconnecting from the internet after loading the
                    page—the tool will continue to work perfectly. Your privacy
                    and data security are completely protected. You can even use
                    this tool offline once the page is loaded.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What&apos;s the difference between &amp;apos; and &amp;#39;?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Both represent the apostrophe/single quote character.{" "}
                    <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                      &amp;#39;
                    </code>{" "}
                    is the numeric entity and works universally in all HTML
                    versions.{" "}
                    <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                      &amp;apos;
                    </code>{" "}
                    is the named entity but isn&apos;t defined in HTML4, only in
                    XHTML and HTML5. For maximum compatibility, use{" "}
                    <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                      &amp;#39;
                    </code>{" "}
                    or simply encode as needed. Modern browsers support both,
                    but{" "}
                    <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                      &amp;#39;
                    </code>{" "}
                    is safer for legacy support.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I encode emoji or other Unicode symbols?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Emoji and most Unicode symbols don&apos;t have named entities, so
                    they&apos;re encoded using numeric entities. For example, 😀
                    becomes{" "}
                    <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                      &amp;#128512;
                    </code>{" "}
                    or{" "}
                    <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                      &amp;#x1F600;
                    </code>{" "}
                    (hex). However, modern web pages with UTF-8 encoding can
                    display emoji directly without encoding. Use HTML entity
                    encoding for emoji only if you need compatibility with older
                    systems or want to prevent encoding issues during data
                    transmission.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I use this tool for email address obfuscation?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, using the &quot;Encode All&quot; option converts every character
                    to numeric entities, which can help hide email addresses
                    from simple spam bots. However, sophisticated scrapers can
                    decode HTML entities, so this provides only basic
                    protection. For better protection, combine entity encoding
                    with JavaScript-based rendering, contact forms instead of
                    direct mailto: links, or CAPTCHA verification. Entity
                    encoding adds a layer of obfuscation but shouldn&apos;t be your
                    only anti-spam measure.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What browsers support this tool?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    This tool works in all modern browsers including Chrome,
                    Firefox, Safari, Edge, and Opera. It requires JavaScript to
                    be enabled and uses standard DOM APIs for text manipulation.
                    The tool is fully responsive and works on desktop computers,
                    tablets, and mobile devices. For best experience, use the
                    latest version of your preferred browser. Internet Explorer
                    is not supported due to missing modern JavaScript features.
                  </p>
                </details>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Best Practices for HTML Encoding
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-50">
                      1. Always Encode User Input
                    </h3>
                    <p>
                      Never trust user-generated content. Always encode special
                      characters before displaying user input in HTML pages to
                      prevent XSS attacks. This includes form submissions,
                      comments, URL parameters, and any external data sources.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-50">
                      2. Use Context-Appropriate Encoding
                    </h3>
                    <p>
                      Different contexts require different encoding: HTML
                      content needs HTML entity encoding, JavaScript strings
                      need JavaScript escaping, CSS values need CSS escaping,
                      and URLs need percent-encoding. Use the right encoding
                      method for each context.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-50">
                      3. Set Proper Character Encoding
                    </h3>
                    <p>
                      Always declare UTF-8 encoding in your HTML documents using{" "}
                      <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                        &lt;meta charset=&quot;utf-8&quot;&gt;
                      </code>
                      . This ensures consistent character rendering and reduces
                      the need for excessive entity encoding of international
                      characters.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-50">
                      4. Don&apos;t Double-Encode
                    </h3>
                    <p>
                      Avoid encoding already-encoded data, which creates
                      double-encoded entities that display incorrectly (like
                      showing{" "}
                      <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">
                        &amp;lt;
                      </code>{" "}
                      instead of &lt;). Check if data is already encoded before
                      applying additional encoding.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-50">
                      5. Use Libraries and Frameworks
                    </h3>
                    <p>
                      Modern frameworks like React, Vue, and Angular
                      automatically encode output by default. Leverage these
                      built-in protections rather than manually encoding
                      everywhere. Only use manual encoding when necessary (like
                      generating HTML strings or working with legacy code).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Tools */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Related Tools
              </h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Explore other encoding and developer tools to streamline your
                workflow:
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <a
                  href="/tools/url-encoder"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-green-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-green-600 dark:text-gray-50 dark:group-hover:text-green-400">
                    URL Encoder/Decoder
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Encode and decode URL parameters with percent encoding
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
                    Encode and decode Base64 strings for data transmission
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
                <a
                  href="/tools/markdown-previewer"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-yellow-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-yellow-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-yellow-600 dark:text-gray-50 dark:group-hover:text-yellow-400">
                    Markdown Previewer
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Preview markdown with HTML output
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
                    Test and debug regular expressions
                  </p>
                </a>
                <a
                  href="/tools/hash-generator"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-gray-50 dark:group-hover:text-indigo-400">
                    Hash Generator
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Generate cryptographic hashes (MD5, SHA-256, etc.)
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
