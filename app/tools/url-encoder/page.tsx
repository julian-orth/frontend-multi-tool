import Breadcrumb from "@/components/breadcrumb";
import { UrlEncoderUI } from "./url-encoder-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "URL Encoder/Decoder - Percent Encoding Tool Online",
  description:
    "Encode and decode URLs with support for query parameters, full URIs, form data, and RFC3986 compliance. Free online URL encoding tool with live mode and query string parser.",
  keywords: [
    "url encoder",
    "url decoder",
    "percent encoding",
    "uri encoding",
    "query string",
    "encodeURIComponent",
    "encodeURI",
    "form data",
    "rfc3986",
  ],
  openGraph: {
    title: "URL Encoder/Decoder — Percent Encoding for URLs & Query Strings",
    description:
      "Free online URL encoder/decoder with query parameter support and RFC3986 compliance. Encode special characters safely for web URLs.",
    url: `${SITE_CONFIG.domain}/tools/url-encoder`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `URL Encoder/Decoder — ${SITE_CONFIG.name}`,
    description:
      "Encode and decode URLs with percent encoding. Supports query strings and full URIs. Free online tool.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/url-encoder`,
  },
};

export default function UrlEncoderPage() {
  return (
    <>
      <ToolSchema
        name="URL Encoder/Decoder"
        description="Encode and decode URLs with percent encoding for safe transmission in URLs and query parameters"
        url="/tools/url-encoder"
        keywords={[
          "url encoder",
          "url decoder",
          "percent encoding",
          "uri encoding",
          "query string encoder",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              URL Encoder/Decoder
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Encode and decode URLs with support for query parameters, full
              URIs, form data encoding, and RFC3986 compliance. All processing
              happens in your browser for complete privacy.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <UrlEncoderUI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is URL Encoding */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is URL Encoding?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  URL encoding, also known as percent-encoding, is a mechanism
                  for encoding information in a Uniform Resource Identifier
                  (URI) by replacing certain characters with one or more
                  character triplets consisting of the percent character (%)
                  followed by two hexadecimal digits. This encoding method
                  ensures that URLs can be safely transmitted over the Internet,
                  as many protocols only support a limited set of ASCII
                  characters.
                </p>
                <p>
                  The need for URL encoding arises because URLs can only contain
                  a specific set of characters from the US-ASCII character set.
                  Characters outside this set, as well as certain reserved
                  characters that have special meanings in URLs (like ?, &, =,
                  #, and spaces), must be encoded to prevent misinterpretation
                  by web servers, browsers, and other web components.
                </p>
                <p>
                  For example, a space character is encoded as %20 (or + in form
                  data), while special characters like @ becomes %40, # becomes
                  %23, and so on. This ensures that data integrity is maintained
                  during transmission and that URLs are interpreted correctly
                  regardless of the system or application processing them.
                </p>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for URL Encoding
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-800 dark:bg-green-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Query Parameters
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Query parameters in URLs must be properly encoded to handle
                    special characters, spaces, and non-ASCII text. For example,
                    search queries, filter values, and user input sent via GET
                    requests all require URL encoding to ensure proper
                    transmission.
                  </p>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-800 dark:bg-green-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Form Submissions
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    HTML forms with method=&quot;GET&quot; automatically URL-encode form
                    data before submitting. Understanding URL encoding is
                    essential for debugging form submissions, creating custom
                    query strings, or working with
                    application/x-www-form-urlencoded data.
                  </p>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-800 dark:bg-green-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    API Development
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    RESTful APIs often use URL parameters for filtering,
                    sorting, and pagination. Properly encoding these parameters
                    ensures that special characters in filter values, search
                    terms, or identifiers don&apos;t break API requests or cause
                    security vulnerabilities.
                  </p>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-800 dark:bg-green-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    OAuth and Authentication
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    OAuth flows require encoding redirect URIs, state
                    parameters, and other values passed in URLs. Improper
                    encoding can cause authentication failures, security issues,
                    or redirect mismatches in OAuth implementations.
                  </p>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-800 dark:bg-green-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Email Links
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    mailto: links with pre-filled subject lines, body text, or
                    CC/BCC addresses require URL encoding. This is especially
                    important when including line breaks, special characters, or
                    non-English text in email templates or automated
                    communications.
                  </p>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-800 dark:bg-green-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Internationalization
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    URLs containing non-ASCII characters (Chinese, Arabic,
                    emoji, etc.) must be encoded using UTF-8 and
                    percent-encoding. This allows international domain names,
                    multilingual content, and unicode characters to be safely
                    transmitted in URLs.
                  </p>
                </div>
              </div>
            </section>

            {/* Encoding Modes Explanation */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Understanding Different Encoding Modes
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Component Encoding (encodeURIComponent)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    This is the most commonly used encoding method for
                    individual URL components like query parameters, path
                    segments, or fragment identifiers. It encodes all characters
                    except:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Alphanumeric characters: A-Z, a-z, 0-9</li>
                    <li>Unreserved characters: - _ . ! ~ * &apos; ( )</li>
                  </ul>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    <strong>Use this when:</strong> Encoding individual
                    parameter values, path segments, or any data that will be
                    inserted into a URL. This ensures that characters like &, =,
                    ?, and / are encoded and won&apos;t be interpreted as URL
                    structure.
                  </p>
                  <div className="mt-4 rounded-lg bg-gray-100 p-4 font-mono text-sm dark:bg-gray-950">
                    <div className="text-gray-600 dark:text-gray-400">
                      Example:
                    </div>
                    <div className="mt-2 text-gray-900 dark:text-gray-100">
                      Input: &quot;Hello World & Friends&quot;
                    </div>
                    <div className="mt-1 text-green-600 dark:text-green-400">
                      Output: &quot;Hello%20World%20%26%20Friends&quot;
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Full URI Encoding (encodeURI)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    This mode is designed for encoding complete URLs. It encodes
                    most characters but preserves those that have special
                    meaning in URIs, including: : / ? # [ ] @ ! $ & &apos; ( ) * + ,
                    ; =
                  </p>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    <strong>Use this when:</strong> Encoding an entire URL
                    string while preserving its structure. This is useful when
                    you need to encode spaces or non-ASCII characters in a URL
                    without breaking its syntax.
                  </p>
                  <div className="mt-4 rounded-lg bg-gray-100 p-4 font-mono text-sm dark:bg-gray-950">
                    <div className="text-gray-600 dark:text-gray-400">
                      Example:
                    </div>
                    <div className="mt-2 text-gray-900 dark:text-gray-100">
                      Input: &quot;https://example.com/path with spaces&quot;
                    </div>
                    <div className="mt-1 text-green-600 dark:text-green-400">
                      Output: &quot;https://example.com/path%20with%20spaces&quot;
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Form Data Encoding (application/x-www-form-urlencoded)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    This encoding method is used by HTML forms with the default
                    content type. It&apos;s similar to encodeURIComponent but with
                    one key difference: spaces are encoded as + instead of %20.
                    This format is the standard for POST request bodies and GET
                    query strings from HTML forms.
                  </p>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    <strong>Use this when:</strong> Working with HTML form
                    submissions, creating form-like POST bodies, or debugging
                    form data. Note that when decoding, both %20 and + are
                    correctly interpreted as spaces.
                  </p>
                  <div className="mt-4 rounded-lg bg-gray-100 p-4 font-mono text-sm dark:bg-gray-950">
                    <div className="text-gray-600 dark:text-gray-400">
                      Example:
                    </div>
                    <div className="mt-2 text-gray-900 dark:text-gray-100">
                      Input: &quot;first name&quot;
                    </div>
                    <div className="mt-1 text-green-600 dark:text-green-400">
                      Output: &quot;first+name&quot;
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    RFC3986 Strict Encoding
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    RFC3986 is the current standard for URI syntax. This mode
                    extends encodeURIComponent by also encoding the characters !
                    &apos; ( ) *, which are technically reserved in the RFC3986
                    specification even though JavaScript&apos;s built-in
                    encodeURIComponent doesn&apos;t encode them.
                  </p>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    <strong>Use this when:</strong> You need strict compliance
                    with RFC3986, working with systems that expect these
                    characters to be encoded, or when maximum compatibility
                    across different URL parsers is required.
                  </p>
                  <div className="mt-4 rounded-lg bg-gray-100 p-4 font-mono text-sm dark:bg-gray-950">
                    <div className="text-gray-600 dark:text-gray-400">
                      Example:
                    </div>
                    <div className="mt-2 text-gray-900 dark:text-gray-100">
                      Input: &quot;user(name)&quot;
                    </div>
                    <div className="mt-1 text-green-600 dark:text-green-400">
                      Output: &quot;user%28name%29&quot;
                    </div>
                  </div>
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
                    What&apos;s the difference between encodeURI and
                    encodeURIComponent?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    encodeURI is designed to encode a complete URI while
                    preserving characters that have special meaning in URIs
                    (like :, /, ?, #). encodeURIComponent encodes everything
                    except unreserved characters, making it suitable for
                    encoding individual components like query parameter values.
                    Use encodeURIComponent for parameter values and encodeURI
                    only when encoding an entire URL.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why do I see + instead of %20 for spaces sometimes?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The + character is used to represent spaces in the
                    application/x-www-form-urlencoded format, which is the
                    default encoding for HTML forms. While %20 is the standard
                    percent encoding for space, + is specifically used in query
                    strings and form data for historical reasons. When decoding,
                    both should be treated as spaces. Our tool supports both
                    formats.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I encode URLs with international characters?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes! Our tool automatically handles Unicode characters using
                    UTF-8 encoding. Characters like Chinese, Arabic, Cyrillic,
                    or emoji are first converted to their UTF-8 byte
                    representation, then each byte is percent-encoded. For
                    example, &quot;你好&quot; becomes &quot;%E4%BD%A0%E5%A5%BD&quot;. This is the
                    standard way international domain names and multilingual
                    URLs work.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is URL encoding the same as HTML encoding?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No, they serve different purposes. URL encoding
                    (percent-encoding) is for safely transmitting data in URLs,
                    using % followed by hexadecimal digits. HTML encoding uses
                    entities like &amp; and &lt; to display special characters
                    in HTML content. You need URL encoding for URLs and HTML
                    encoding for displaying text in HTML. They&apos;re not
                    interchangeable.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why does my URL have double encoding?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Double encoding occurs when already-encoded data is encoded
                    again. For example, encoding &quot;hello world&quot; gives
                    &quot;hello%20world&quot;, but encoding that again gives
                    &quot;hello%2520world&quot; (where %20 becomes %2520). This usually
                    happens due to programming errors where data is encoded
                    multiple times. Always ensure you only encode raw data once
                    before adding it to a URL.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is my data safe when using this tool?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Absolutely. All encoding and decoding operations happen
                    entirely in your browser using JavaScript. No data is ever
                    sent to our servers or any third party. You can even use
                    this tool offline once the page is loaded. Your privacy and
                    data security are completely protected.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What characters need to be URL encoded?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Any character that&apos;s not an unreserved character should be
                    encoded. Unreserved characters are: A-Z, a-z, 0-9, hyphen
                    (-), underscore (_), period (.), and tilde (~). Everything
                    else, including spaces, special characters, and non-ASCII
                    characters, should be percent-encoded. Reserved characters
                    like ?, &, =, #, / should always be encoded when they&apos;re
                    part of data, not URL structure.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I decode malformed URLs?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Malformed URLs can occur from invalid percent sequences
                    (like %2G where G isn&apos;t a hex digit) or incomplete encoding.
                    Our tool will display an error message if the URL can&apos;t be
                    decoded. Common issues include: missing the second hex digit
                    after %, using lowercase hex digits inconsistently, or
                    having actual % characters that should be encoded as %25.
                    Try fixing these issues manually or re-encoding the original
                    data.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I use this for OAuth redirect URIs?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes! OAuth redirect URIs must be properly URL-encoded when
                    passed as parameters to authorization endpoints. Use the
                    &quot;Component&quot; encoding mode to encode your redirect URI before
                    adding it to the authorization URL. This ensures that query
                    parameters in your redirect URI don&apos;t interfere with the
                    authorization server&apos;s parameters.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What browsers are supported?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    This tool works in all modern browsers including Chrome,
                    Firefox, Safari, Edge, and Opera. It uses standard
                    JavaScript functions (encodeURIComponent, encodeURI,
                    decodeURIComponent) that have been supported in all browsers
                    for many years. The tool is fully responsive and works on
                    desktop, tablet, and mobile devices.
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
                  <p>
                    URL encoding is standardized in several RFCs (Request for
                    Comments):
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <strong>RFC 3986:</strong> The current standard for URI
                      syntax, which defines percent-encoding and the characters
                      that must be encoded in different URI components
                    </li>
                    <li>
                      <strong>RFC 1738:</strong> The original specification for
                      URL syntax, which introduced percent-encoding (now
                      superseded by RFC 3986)
                    </li>
                    <li>
                      <strong>RFC 3987:</strong> Internationalized Resource
                      Identifiers (IRIs), which extends URIs to support Unicode
                      characters directly
                    </li>
                    <li>
                      <strong>HTML Living Standard:</strong> Defines the
                      application/x-www-form-urlencoded format used by HTML
                      forms
                    </li>
                  </ul>
                  <p className="mt-4">
                    Percent-encoding represents characters as % followed by two
                    hexadecimal digits. For example:
                  </p>
                  <ul className="mt-2 ml-6 list-disc space-y-2">
                    <li>Space: %20 (or + in form data)</li>
                    <li>Exclamation mark (!): %21</li>
                    <li>Double quote (&quot;): %22</li>
                    <li>Percent sign (%): %25</li>
                    <li>Ampersand (&): %26</li>
                    <li>Plus (+): %2B</li>
                    <li>Forward slash (/): %2F</li>
                    <li>Question mark (?): %3F</li>
                    <li>Equals (=): %3D</li>
                  </ul>
                  <p className="mt-4">
                    For multi-byte UTF-8 characters, each byte is individually
                    percent-encoded. For example, the emoji 😀 (U+1F600) is
                    encoded in UTF-8 as four bytes: F0 9F 98 80, which becomes
                    %F0%9F%98%80 in URL encoding.
                  </p>
                </div>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Best Practices
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Always Encode User Input
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Never trust user input to be URL-safe. Always encode data
                    from forms, search queries, or any user-provided values
                    before adding them to URLs. This prevents both functionality
                    issues and security vulnerabilities like URL injection
                    attacks.
                  </p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Use the Right Encoding Method
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Choose encodeURIComponent for parameter values and path
                    segments, encodeURI for complete URLs, and form data
                    encoding only when working with HTML forms. Using the wrong
                    method can cause characters to be incorrectly interpreted.
                  </p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Avoid Double Encoding
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Only encode data once. Check if your framework or library
                    automatically encodes URLs before manually encoding. Double
                    encoding makes URLs unnecessarily long and can cause
                    decoding issues on the receiving end.
                  </p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Test International Characters
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    If your application serves international users, test URL
                    encoding with non-ASCII characters, emoji, and right-to-left
                    text. Ensure your backend correctly handles UTF-8 encoded
                    URLs and that your URL length limits account for multi-byte
                    characters.
                  </p>
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
                  href="/tools/base64"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-green-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-green-600 dark:text-gray-50 dark:group-hover:text-green-400">
                    Base64 Encoder/Decoder
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Encode and decode Base64 strings with URL-safe format
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
                  href="/tools/jwt-decoder"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-red-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-red-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-red-600 dark:text-gray-50 dark:group-hover:text-red-400">
                    JWT Decoder
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Decode and analyze JSON Web Tokens
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
