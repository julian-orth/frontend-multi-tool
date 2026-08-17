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
                  <strong>Base64</strong> is a binary-to-text encoding that
                  turns arbitrary binary data into ASCII text so it survives
                  systems built for text (email, JSON, data URLs).{" "}
                  <strong>URL (percent) encoding</strong> escapes characters
                  that would break URL syntax, and{" "}
                  <strong>HTML entity encoding</strong> replaces characters
                  like &lt;, &gt;, and &amp; that have special meaning in
                  HTML, which is essential for rendering user-supplied text
                  safely. None of these are encryption — they&apos;re
                  reversible, publicly-documented transformations, not
                  security measures. Use the tabs above to switch between the
                  three.
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
                    <strong>Base64 uses cases:</strong> MIME email
                    attachments, data URLs, JWT header/payload segments, Basic
                    HTTP auth, and PEM-formatted keys/certificates.
                  </li>
                  <li>
                    <strong>URL-safe Base64 (RFC 4648):</strong> replaces +
                    with -, / with _, and drops padding = so it can be used
                    directly in URLs, filenames, or JWTs; MIME chunking (RFC
                    2045) wraps output at 76 characters per line for email.
                  </li>
                  <li>
                    <strong>Four URL encoding modes:</strong> Component
                    (single parameter values), Full URI (preserves : / ? #),
                    Form data (spaces become + instead of %20), and RFC 3986
                    strict (also escapes ! &apos; ( ) *).
                  </li>
                  <li>
                    <strong>HTML entities:</strong> named forms (&amp;lt;,
                    &amp;amp;, &amp;copy;) are more readable; numeric forms
                    (&amp;#60;, &amp;#38;, &amp;#169;) work for any character,
                    including ones without a named equivalent.
                  </li>
                  <li>
                    <strong>Size overhead:</strong> Base64 converts every 3
                    bytes of input into 4 ASCII characters, an ~33% size
                    increase.
                  </li>
                  <li>
                    Every tab supports live mode, and all processing happens
                    in your browser — nothing is sent to a server.
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
                    Is Base64/URL/HTML encoding the same as encryption?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                    No. All three are reversible, publicly-documented encoding
                    schemes, not encryption. Anyone can decode the output
                    without a key or password. For confidentiality, use actual
                    encryption (AES, RSA) or a secure channel like HTTPS.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-6">
                  <summary className="cursor-pointer text-base font-semibold text-gray-900 dark:text-gray-50 sm:text-lg">
                    Why does Base64 encoding increase file size?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                    Base64 converts every 3 bytes (24 bits) of input into 4
                    ASCII characters, an approximately 33% size increase — the
                    trade-off for making binary data safely transmittable as
                    text.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-6">
                  <summary className="cursor-pointer text-base font-semibold text-gray-900 dark:text-gray-50 sm:text-lg">
                    What are the padding characters (=) at the end of Base64?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                    The equals sign pads the output so its length is always a
                    multiple of 4. In URL-safe Base64, padding is typically
                    omitted since it can be inferred from the data length.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-6">
                  <summary className="cursor-pointer text-base font-semibold text-gray-900 dark:text-gray-50 sm:text-lg">
                    Why am I getting an &quot;Invalid&quot; error when decoding?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                    For Base64, the input contains characters outside the
                    Base64 alphabet or has incorrect padding — make sure you
                    decode with the same URL-safe setting used to encode. For
                    URL decoding, it means the input has a malformed
                    percent-escape sequence.
                  </p>
                </details>
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
