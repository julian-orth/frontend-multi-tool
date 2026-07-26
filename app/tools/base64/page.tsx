import Breadcrumb from "@/components/breadcrumb";
import { Base64UI } from "./base64-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Base64 Encoder/Decoder - Free Online Base64 Tool",
  description:
    "Encode and decode Base64 strings with support for URL-safe format, line-by-line processing, and MIME chunks. Free online Base64 tool with live mode.",
  keywords: [
    "base64",
    "encoder",
    "decoder",
    "encode",
    "decode",
    "url safe",
    "mime",
    "converter",
  ],
  openGraph: {
    title: "Base64 Encoder/Decoder — Encode & Decode Base64 Online",
    description:
      "Free Base64 encoder/decoder with URL-safe format, MIME chunks, and line-by-line processing. All processing in your browser for complete privacy.",
    url: `${SITE_CONFIG.domain}/tools/base64`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `Base64 Encoder/Decoder — ${SITE_CONFIG.name}`,
    description:
      "Encode and decode Base64 strings with URL-safe format and MIME support. Free online tool.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/base64`,
  },
};

export default function Base64Page() {
  return (
    <>
      <ToolSchema
        name="Base64 Encoder/Decoder"
        description="Encode and decode Base64 strings with URL-safe format support for data transmission and APIs"
        url="/tools/base64"
        keywords={[
          "base64 encoder",
          "base64 decoder",
          "base64 converter",
          "encode base64",
          "decode base64",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Base64 Encoder/Decoder
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Encode and decode Base64 strings with URL-safe format,
              line-by-line processing, and MIME chunk support. All processing
              happens in your browser for complete privacy.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <Base64UI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is Base64 */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is Base64 Encoding?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Base64 is a binary-to-text encoding scheme that converts
                  binary data into an ASCII string format using a set of 64
                  printable characters. The name &quot;Base64&quot; comes from the fact
                  that it uses 64 different characters to represent data:
                  uppercase letters (A-Z), lowercase letters (a-z), digits
                  (0-9), plus (+), and forward slash (/).
                </p>
                <p>
                  Originally developed for MIME (Multipurpose Internet Mail
                  Extensions), Base64 encoding ensures that binary data remains
                  intact when transmitted across systems that are designed to
                  handle only text data. This is particularly important for
                  email systems, URLs, and data storage in text formats like
                  JSON or XML.
                </p>
                <p>
                  The encoding process takes every 3 bytes of binary data and
                  converts them into 4 ASCII characters. This results in an
                  approximately 33% increase in data size, which is the
                  trade-off for ensuring compatibility across text-based
                  systems.
                </p>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for Base64
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-800 dark:bg-green-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Email Attachments
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    MIME uses Base64 to encode email attachments, ensuring that
                    binary files like images, documents, and executables can be
                    safely transmitted through email systems that only support
                    7-bit ASCII text.
                  </p>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-800 dark:bg-green-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Data URLs
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Base64 encoding allows embedding small images, fonts, or
                    other files directly into HTML, CSS, or JavaScript using
                    data URLs (e.g., data:image/png;base64,...), reducing HTTP
                    requests and improving page load times.
                  </p>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-800 dark:bg-green-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    API Authentication
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Basic HTTP authentication uses Base64 to encode username and
                    password credentials. While not secure on its own, it&apos;s
                    commonly used over HTTPS connections for simple
                    authentication schemes.
                  </p>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-800 dark:bg-green-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    JSON Web Tokens
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    JWTs use URL-safe Base64 encoding for their header and
                    payload sections, making them safe to transmit in URLs, HTTP
                    headers, and HTML form parameters without special escaping.
                  </p>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-800 dark:bg-green-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Data Storage
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Binary data can be stored in text-based formats like XML,
                    JSON, or configuration files using Base64 encoding, making
                    it easier to manage and transfer without worrying about
                    binary data corruption.
                  </p>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-800 dark:bg-green-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Cryptographic Applications
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Public keys, certificates, encrypted data, and digital
                    signatures are often Base64-encoded for easy transmission
                    and storage in text files, as seen in PEM certificate
                    formats.
                  </p>
                </div>
              </div>
            </section>

            {/* Features Explanation */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Advanced Features
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    URL-Safe Base64 Encoding
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Standard Base64 encoding uses characters (+, /, =) that have
                    special meanings in URLs and must be percent-encoded.
                    URL-safe Base64 (also called Base64URL) addresses this by:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Replacing + with - (hyphen)</li>
                    <li>Replacing / with _ (underscore)</li>
                    <li>Removing padding = characters</li>
                  </ul>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    This variant is defined in RFC 4648 and is commonly used in
                    JWTs, URLs, filenames, and anywhere the encoded data needs
                    to be transmitted without additional encoding.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Line-by-Line Processing
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    This feature allows you to encode or decode multiple
                    independent text entries simultaneously, with each line
                    processed separately. This is particularly useful when
                    working with:
                  </p>
                  <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Lists of passwords or credentials</li>
                    <li>Multiple API keys or tokens</li>
                    <li>Batch processing of data entries</li>
                    <li>Converting multiple strings in one operation</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    MIME Format (76-Character Chunks)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    According to RFC 2045 (MIME specification), Base64-encoded
                    data in email messages should be split into lines no longer
                    than 76 characters. This feature automatically formats your
                    encoded output to comply with MIME standards, making it
                    suitable for email attachments and other MIME-compliant
                    applications. The line breaks are purely cosmetic and don&apos;t
                    affect the decoded output.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Live Mode
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Enable live mode for instant encoding or decoding as you
                    type. All processing happens directly in your browser using
                    JavaScript, with no data sent to any server. This provides
                    immediate feedback and is perfect for learning, testing, or
                    quick conversions. Live mode supports UTF-8 character
                    encoding and all other features including URL-safe encoding
                    and line-by-line processing.
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
                    Is Base64 encoding the same as encryption?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No, Base64 is not encryption. It&apos;s simply an encoding scheme
                    that converts binary data to ASCII text. Anyone can decode
                    Base64 data without needing a key or password. Base64
                    provides no security or confidentiality—it only ensures data
                    integrity during transmission through text-based systems.
                    For security, you need actual encryption algorithms like
                    AES, RSA, or use it over secure channels like HTTPS.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why does Base64 encoding increase file size?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Base64 encoding increases data size by approximately 33%
                    (more precisely, 4/3 or 133% of the original size). This
                    happens because Base64 converts every 3 bytes (24 bits) of
                    data into 4 ASCII characters. Each ASCII character uses 8
                    bits, so 3 bytes become 4 bytes. This size increase is the
                    trade-off for making binary data safely transmittable as
                    text.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What are the padding characters (=) at the end?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The equals sign (=) is used as padding when the input data
                    length isn&apos;t divisible by 3. Since Base64 converts 3-byte
                    groups into 4-character groups, padding ensures the output
                    length is always a multiple of 4. One or two equals signs
                    may appear at the end: one = means the last group had 2
                    bytes, and two == means it had 1 byte. In URL-safe Base64,
                    padding is often omitted as it can be inferred from the data
                    length.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I encode binary files like images or PDFs?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, Base64 can encode any type of binary file including
                    images (JPEG, PNG, GIF), documents (PDF, Word), executables,
                    or any other file format. However, for large files, the
                    encoding process may take time and the resulting text will
                    be significantly larger. Our tool works best with text data
                    and smaller binary files. For very large files, consider
                    using specialized tools or server-side processing.
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
                    data security are completely protected. However, remember
                    that Base64 is not encryption—anyone with access to the
                    encoded data can easily decode it.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What&apos;s the difference between Base64 and Base64URL?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Base64URL (also called URL-safe Base64) is a variant
                    designed for use in URLs, filenames, and other contexts
                    where certain characters are problematic. The differences
                    are: standard Base64 uses + and / which have special meaning
                    in URLs, while Base64URL replaces them with - and _
                    respectively. Additionally, Base64URL typically omits the
                    padding = characters. Both can be decoded to the same
                    original data—they&apos;re just different representations
                    optimized for different use cases.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why am I getting an &quot;Invalid Base64&quot; error?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    This error occurs when the input string contains invalid
                    Base64 characters or has incorrect formatting. Common causes
                    include: using characters outside the Base64 alphabet (A-Z,
                    a-z, 0-9, +, /, =), incorrect padding, or trying to decode
                    regular text that isn&apos;t Base64-encoded. Make sure you&apos;re
                    decoding actual Base64 data. If you encoded data with
                    URL-safe mode, decode it with URL-safe mode enabled as well.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I encode special characters or Unicode text?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Our tool automatically handles Unicode text using UTF-8
                    encoding before converting to Base64. This means you can
                    encode text in any language (Chinese, Arabic, emoji, etc.)
                    and it will work correctly. When decoding, the tool expects
                    UTF-8 encoded text. If you&apos;re working with other character
                    encodings, you may need to convert your data to UTF-8 first.
                    Most modern applications use UTF-8 by default, so this
                    typically isn&apos;t an issue.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I use this tool for commercial projects?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, this Base64 encoder/decoder tool is completely free to
                    use for any purpose, including commercial projects. There
                    are no usage limits, registration requirements, or fees.
                    Since all processing happens in your browser, you can use it
                    as often as needed without any restrictions. We only ask
                    that you bookmark and share the tool if you find it useful!
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What browsers are supported?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    This tool works in all modern browsers including Chrome,
                    Firefox, Safari, Edge, and Opera. It requires JavaScript to
                    be enabled and uses standard Web APIs (btoa/atob for Base64
                    encoding/decoding, TextEncoder/TextDecoder for UTF-8
                    handling). These APIs have been supported in all major
                    browsers for many years. The tool is also fully responsive
                    and works on mobile devices, tablets, and desktop computers.
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
                    Base64 encoding is standardized in several RFCs (Request for
                    Comments):
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <strong>RFC 4648:</strong> The main Base64 specification,
                      defining standard Base64, Base64URL, Base32, and Base16
                      encoding schemes
                    </li>
                    <li>
                      <strong>RFC 2045:</strong> MIME Part One, which specifies
                      Base64 for email attachments and the 76-character line
                      length requirement
                    </li>
                    <li>
                      <strong>RFC 7515:</strong> JSON Web Signature (JWS), which
                      uses Base64URL encoding for JWT tokens
                    </li>
                  </ul>
                  <p className="mt-4">
                    The Base64 alphabet consists of 64 ASCII characters selected
                    to be universally supported across different systems:
                  </p>
                  <ul className="mt-2 ml-6 list-disc space-y-2">
                    <li>Uppercase letters: A-Z (values 0-25)</li>
                    <li>Lowercase letters: a-z (values 26-51)</li>
                    <li>Digits: 0-9 (values 52-61)</li>
                    <li>Special characters: + (value 62) and / (value 63)</li>
                    <li>
                      Padding character: = (used to make output length a
                      multiple of 4)
                    </li>
                  </ul>
                  <p className="mt-4">
                    Each Base64 character represents exactly 6 bits of data.
                    When encoding, the input is divided into 6-bit groups, and
                    each group is mapped to its corresponding Base64 character.
                    This is why 3 bytes (24 bits) of input become 4 Base64
                    characters (4 × 6 bits = 24 bits).
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
                  href="/tools/url-encoder"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-green-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-green-600 dark:text-gray-50 dark:group-hover:text-green-400">
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
