import Breadcrumb from "@/components/breadcrumb";
import { EncoderTabs } from "./encoder-tabs";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Base64 / URL / HTML Encoder & Decoder - Free Online Tool",
  description:
    "Encode and decode Base64, URL, and HTML entities in one tool. URL-safe Base64, MIME chunks, 4 URL encoding modes, named/numeric HTML entities, and live mode.",
  keywords: [
    "base64",
    "url encoder",
    "html encoder",
    "encoder",
    "decoder",
    "encode",
    "decode",
    "url safe",
    "mime",
    "html entities",
    "converter",
  ],
  openGraph: {
    title: "Base64 / URL / HTML Encoder & Decoder",
    description:
      "Free Base64, URL, and HTML encoder/decoder with URL-safe format, MIME chunks, query string parsing, and named/numeric HTML entities. All processing in your browser.",
    url: `${SITE_CONFIG.domain}/tools/base64`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `Base64 / URL / HTML Encoder & Decoder — ${SITE_CONFIG.name}`,
    description:
      "Encode and decode Base64, URL, and HTML entities. Free online tool.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/base64`,
  },
};

export default function Base64Page() {
  return (
    <>
      <ToolSchema
        name="Base64 / URL / HTML Encoder & Decoder"
        description="Encode and decode Base64, URL, and HTML entities with URL-safe format support for data transmission and APIs"
        url="/tools/base64"
        keywords={[
          "base64 encoder",
          "base64 decoder",
          "url encoder",
          "html encoder",
          "encode base64",
          "decode base64",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Base64 / URL / HTML Encoder & Decoder
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Encode and decode Base64, URL, and HTML entities — with
              URL-safe format, MIME chunking, four URL encoding modes, and
              named or numeric HTML entities. All processing happens in your
              browser for complete privacy.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <EncoderTabs />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is this */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What Are Base64, URL, and HTML Encoding?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  These are three of the most common text-transformation
                  schemes on the web, and they solve different problems.{" "}
                  <strong>Base64</strong> is a binary-to-text encoding that
                  converts arbitrary binary data into a 64-character ASCII
                  alphabet, so it survives transmission through systems built
                  for text (email, JSON, data URLs).{" "}
                  <strong>URL (percent) encoding</strong> escapes characters
                  that would otherwise be misinterpreted as URL syntax — like
                  spaces, &amp;, and ? — so text can safely appear in a query
                  string or path segment. <strong>HTML entity encoding</strong>{" "}
                  replaces characters that have special meaning in HTML — like{" "}
                  &lt;, &gt;, and &amp; — with named or numeric entities, which
                  is essential for rendering user-supplied text safely and
                  preventing XSS.
                </p>
                <p>
                  None of these are encryption — they&apos;re all reversible,
                  publicly-documented transformations, not security measures.
                  Use the tabs above to switch between the three; each keeps
                  its own input, output, and mode-specific options.
                </p>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-800 dark:bg-green-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Email Attachments &amp; Data URLs
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    MIME uses Base64 to encode email attachments, and web pages
                    embed small images or fonts directly via data URLs (e.g.,
                    data:image/png;base64,...), reducing HTTP requests.
                  </p>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-800 dark:bg-green-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    JSON Web Tokens
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    JWTs use URL-safe Base64 encoding for their header and
                    payload sections, making them safe to transmit in URLs,
                    HTTP headers, and HTML form parameters.
                  </p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Query Parameters &amp; Form Submissions
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    URL encoding lets arbitrary text — spaces, symbols,
                    non-ASCII characters — travel safely inside a query string
                    or POST body without breaking URL syntax.
                  </p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Building &amp; Debugging Full URLs
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Full-URI encoding preserves structural characters (: / ? #)
                    while still escaping spaces and non-ASCII text, useful when
                    encoding an entire link rather than a single parameter.
                  </p>
                </div>
                <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-6 dark:border-orange-800 dark:bg-orange-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Safe HTML Rendering &amp; XSS Prevention
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Encoding user-supplied text before inserting it into HTML
                    prevents characters like &lt; and &amp; from being parsed
                    as markup, closing off a common cross-site-scripting
                    attack vector.
                  </p>
                </div>
                <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-6 dark:border-orange-800 dark:bg-orange-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Displaying Code Snippets &amp; Special Symbols
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Entity-encode source code samples so tags render as
                    visible text instead of being interpreted, and use named
                    entities for typographic symbols like ©, ™, or currency
                    signs.
                  </p>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-800 dark:bg-green-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    API Authentication &amp; Cryptographic Data
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Basic HTTP auth encodes credentials in Base64, and public
                    keys, certificates, and signatures are commonly
                    Base64-encoded for storage in text files (as in PEM
                    format).
                  </p>
                </div>
              </div>
            </section>

            {/* Advanced Features */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Advanced Features &amp; Reference
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Base64: URL-Safe, Line-by-Line, and MIME Chunks
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>URL-safe (RFC 4648):</strong> replaces + with -, /
                    with _, and drops padding = characters, so the result can
                    be used directly in URLs, filenames, or JWTs.
                  </p>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>Line-by-line:</strong> encodes or decodes each line
                    independently — useful for batches of tokens or
                    credentials.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>MIME chunks (RFC 2045):</strong> wraps encoded
                    output at 76 characters per line, matching the format
                    email attachments require.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    URL Encoding: Four Modes
                  </h3>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>Component</strong> (encodeURIComponent) — encode
                      a single parameter value; escapes &amp;, =, ?, / so they
                      can&apos;t be mistaken for URL structure.
                    </li>
                    <li>
                      <strong>Full URI</strong> (encodeURI) — encode an entire
                      URL while preserving structural characters like : / ? #.
                    </li>
                    <li>
                      <strong>Form data</strong>{" "}
                      (application/x-www-form-urlencoded) — like Component,
                      but spaces become + instead of %20, matching HTML form
                      submissions.
                    </li>
                    <li>
                      <strong>RFC 3986 strict</strong> — extends Component by
                      also escaping ! &apos; ( ) *, for maximum compatibility
                      with strict URI parsers.
                    </li>
                  </ul>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Decoding also parses the result into a key/value table when
                    the input looks like a query string.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    HTML Entities: Named vs. Numeric
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Named entities (&amp;lt;, &amp;amp;, &amp;copy;) are more
                    readable; numeric entities (&amp;#60;, &amp;#38;,
                    &amp;#169;) work even for characters without a named
                    equivalent. &quot;Encode all&quot; converts every character
                    rather than just the handful with special HTML meaning —
                    useful for maximizing compatibility with older parsers.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 dark:bg-gray-900">
                      <tr>
                        <th className="border-b border-gray-200 px-6 py-3 text-left font-semibold text-gray-900 dark:border-gray-800 dark:text-gray-50">
                          Character
                        </th>
                        <th className="border-b border-gray-200 px-6 py-3 text-left font-semibold text-gray-900 dark:border-gray-800 dark:text-gray-50">
                          Named
                        </th>
                        <th className="border-b border-gray-200 px-6 py-3 text-left font-semibold text-gray-900 dark:border-gray-800 dark:text-gray-50">
                          Numeric
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
                          &copy;
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
                          &euro;
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
                    </tbody>
                  </table>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Live Mode
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Every tab supports live mode for instant results as you
                    type. All processing happens directly in your browser
                    using JavaScript, with no data sent to any server.
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
                    Is Base64/URL/HTML encoding the same as encryption?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No. All three are reversible, publicly-documented encoding
                    schemes, not encryption. Anyone can decode the output
                    without a key or password. For confidentiality, use actual
                    encryption (AES, RSA) or a secure channel like HTTPS.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why does Base64 encoding increase file size?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Base64 converts every 3 bytes (24 bits) of input into 4
                    ASCII characters, an approximately 33% size increase — the
                    trade-off for making binary data safely transmittable as
                    text.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What are the padding characters (=) at the end of Base64?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The equals sign is padding used when the input length
                    isn&apos;t divisible by 3, ensuring the output length is
                    always a multiple of 4. In URL-safe Base64, padding is
                    typically omitted since it can be inferred from the data
                    length.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What&apos;s the difference between Component and Full URI
                    encoding?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Component encoding (encodeURIComponent) escapes everything
                    except unreserved characters — use it for a single
                    parameter value. Full URI encoding (encodeURI) preserves
                    structural characters like : / ? # so you can encode an
                    entire URL without breaking it.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why do spaces become + instead of %20?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    That&apos;s Form Data encoding (application/x-www-form-urlencoded),
                    the format HTML forms submit by default. Both %20 and +
                    are correctly interpreted as a space when decoding; use
                    Component or Full URI mode if you specifically need %20.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Should I use named or numeric HTML entities?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Named entities (&amp;lt;, &amp;copy;) are more readable in
                    source code. Numeric entities (&amp;#60;, &amp;#169;) work
                    for any character, including ones without a named
                    equivalent, and are unambiguous across parsers. Both
                    render identically in the browser.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How does HTML encoding prevent XSS?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Encoding characters like &lt;, &gt;, and &amp; before
                    inserting user-supplied text into HTML stops the browser
                    from interpreting that text as markup or script tags. This
                    is one layer of defense against cross-site scripting —
                    always encode untrusted input at the point it&apos;s
                    rendered.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why am I getting an &quot;Invalid&quot; error when decoding?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    For Base64, this means the input contains characters
                    outside the Base64 alphabet or has incorrect padding —
                    make sure you decode with the same URL-safe setting used
                    to encode. For URL decoding, it means the input contains a
                    malformed percent-escape sequence.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I encode Unicode text and special characters?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes. Base64 encoding uses UTF-8 before converting to
                    Base64, so any language (Chinese, Arabic, emoji) works
                    correctly. URL and HTML encoding handle non-ASCII
                    characters natively as well.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is my data safe when using this tool?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes. All encoding and decoding happens entirely in your
                    browser using JavaScript — nothing is ever sent to a
                    server. Remember, though, that none of these are
                    encryption: anyone with access to the encoded data can
                    decode it.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I encode binary files like images or PDFs?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Base64 can encode any binary file format, but for large
                    files the resulting text will be significantly larger and
                    slower to process in a browser tab. This tool works best
                    with text data and smaller files.
                  </p>
                </details>
              </div>
            </section>

            {/* Technical Details */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Technical Details and Standards
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <strong>RFC 4648:</strong> Base64, Base64URL, Base32, and
                      Base16 encoding schemes
                    </li>
                    <li>
                      <strong>RFC 2045:</strong> MIME, defining the
                      76-character line length for Base64 in email
                    </li>
                    <li>
                      <strong>RFC 3986:</strong> URI generic syntax and the
                      reserved/unreserved character sets that URL encoding is
                      built around
                    </li>
                    <li>
                      <strong>RFC 7515:</strong> JSON Web Signature (JWS),
                      which uses Base64URL encoding for JWT tokens
                    </li>
                    <li>
                      <strong>HTML5 / WHATWG:</strong> the named character
                      reference table this tool&apos;s HTML entity encoder is
                      built from
                    </li>
                  </ul>
                  <p>
                    Each Base64 character represents exactly 6 bits of data —
                    3 bytes (24 bits) of input become 4 Base64 characters (4 ×
                    6 bits = 24 bits), which is why the encoded output is
                    always about a third larger than the input.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Tools */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Related Tools
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                  href="/tools/jwt-decoder"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-red-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-red-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-red-600 dark:text-gray-50 dark:group-hover:text-red-400">
                    JWT Decoder
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Decode and analyze JSON Web Tokens (which use Base64URL)
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
