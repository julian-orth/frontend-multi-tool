import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb";
import UuidLinks from "@/components/uuid-links";
import { UuidGeneratorClient } from "../uuid-generator/client";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "UUID Validator",
  description:
    "Validate UUIDs (RFC 4122) instantly, check format, version and basic integrity.",
  keywords: [
    "uuid",
    "validator",
    "check",
    "unique identifier",
    "v4",
    "v1",
    "v3",
    "v5",
    "nil",
  ],
  openGraph: {
    title: `UUID Validator — ${SITE_CONFIG.name}`,
    description:
      "Validate RFC 4122 compliant UUIDs instantly. Check if a string is a valid UUID and determine its version.",
    url: `${SITE_CONFIG.domain}/tools/uuid-validator`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `UUID Validator — ${SITE_CONFIG.name}`,
    description: "Validate RFC 4122 compliant UUIDs instantly.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/uuid-validator`,
  },
};

export default function UuidValidatorPage() {
  return (
    <>
      <ToolSchema
        name="UUID Validator"
        description="Validate RFC 4122 compliant UUIDs instantly and check format correctness with version and variant detection"
        url="/tools/uuid-validator"
        keywords={[
          "uuid validator",
          "guid validator",
          "validate uuid",
          "uuid checker",
          "uuid verification",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-black dark:text-white">
              UUID Validator
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Validate RFC 4122 compliant UUIDs (Universally Unique Identifiers)
              instantly and determine their version and basic structure.
            </p>
          </div>

          <UuidGeneratorClient only="validate" />

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is UUID Validation */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is UUID Validation?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  UUID validation verifies that a string conforms to the RFC
                  4122 specification for Universally Unique Identifiers. A valid
                  UUID must have the correct length (32 hexadecimal digits plus
                  optional 4 hyphens), use only valid hexadecimal characters
                  (0-9, a-f, A-F), follow the proper format (8-4-4-4-12 hyphen
                  pattern), and have correct version and variant bits in their
                  designated positions.
                </p>
                <p>
                  Validating UUIDs before processing them prevents errors in
                  your application, database, or API. Invalid UUIDs can cause
                  crashes, database constraint violations, or silent data
                  corruption. Proper validation at input boundaries (API
                  endpoints, file imports, user forms) ensures data quality and
                  system reliability. This is especially important when
                  accepting UUIDs from external sources, third-party
                  integrations, or user input.
                </p>
                <p>
                  This validator checks both format (string structure) and RFC
                  4122 compliance (version and variant bits). It identifies
                  common problems: incorrect length, non-hexadecimal characters,
                  wrong hyphen placement, invalid version numbers, and non-RFC
                  4122 variants. The validator provides clear feedback about
                  what&apos;s wrong with invalid UUIDs, making it easy to
                  troubleshoot UUID generation or parsing issues.
                </p>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for UUID Validation
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    API Input Validation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Validate UUID parameters in REST API endpoints before
                    processing requests. Check that user IDs, resource
                    identifiers, session tokens, or correlation IDs are valid
                    UUIDs. Return 400 Bad Request with clear error messages for
                    invalid UUIDs instead of allowing them to propagate through
                    your system causing crashes or security issues.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Database Data Quality
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Validate UUIDs before inserting into databases, especially
                    when importing data from CSV files, legacy systems, or
                    external sources. Catch malformed UUIDs before they violate
                    database constraints or corrupt data. Validation during ETL
                    processes ensures only well-formed identifiers enter your
                    data warehouse.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    User Input Sanitization
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Validate UUIDs entered by users in forms, configuration
                    files, or command-line tools. Provide immediate feedback
                    when users paste malformed identifiers. This improves user
                    experience by catching errors early and prevents downstream
                    issues from propagating through your application workflow.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Testing UUID Generation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Verify that your UUID generation functions produce RFC 4122
                    compliant identifiers. Use validation in unit tests to
                    ensure generated UUIDs have correct version numbers, proper
                    variant bits, and valid format. This catches configuration
                    errors or library bugs before they reach production.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Integration Point Verification
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Validate UUIDs at integration boundaries when receiving data
                    from microservices, third-party APIs, or partner systems.
                    Different systems may use different UUID formats or
                    non-standard identifiers. Validation ensures you only
                    process compatible identifiers and reject incompatible
                    formats early.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Migration and Data Cleanup
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Audit existing databases for invalid UUIDs before migrations
                    or schema changes. Identify and fix malformed identifiers,
                    non-RFC compliant UUIDs, or corrupted data. Validation helps
                    ensure data quality when consolidating multiple systems or
                    upgrading database platforms.
                  </p>
                </div>
              </div>
            </section>

            {/* Validation Checks */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What This Validator Checks
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Format and Structure
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Verifies the UUID has exactly 32 hexadecimal digits,
                    optionally separated by 4 hyphens in the pattern 8-4-4-4-12.
                    Checks that all characters are valid hexadecimal (0-9, a-f,
                    A-F). Accepts both uppercase and lowercase. Rejects strings
                    that are too short, too long, have hyphens in wrong
                    positions, or contain non-hex characters like &apos;g&apos;, &apos;z&apos;, or
                    special symbols.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Version Number Validation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Checks the version bits (4 bits at position 13 in hyphenated
                    format) to ensure they indicate a valid version: 1
                    (time-based), 3 (MD5 name-based), 4 (random), 5 (SHA-1
                    name-based), 7 (time- ordered), or 0 (NIL UUID). Rejects
                    UUIDs with version numbers 2, 6, 8-15 as these are either
                    reserved or not part of the standard specification.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    RFC 4122 Variant Compliance
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Validates the variant bits (2-3 bits at position 17) to
                    ensure the UUID follows RFC 4122 specification. The variant
                    should be &quot;10&quot; in binary (decimal 8-11 in the relevant hex
                    digit position). Flags UUIDs with variants from older
                    specifications (NCS, Microsoft reserved, future reserved)
                    that use different bit layouts and may not be compatible
                    with RFC 4122 tools.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    NIL UUID Recognition
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Recognizes the special NIL UUID (00000000-0000-0000-0000-
                    000000000000), a reserved value representing &quot;no UUID&quot; or an
                    absent identifier. While technically valid in structure, the
                    validator notes when you&apos;re checking the NIL UUID, as it
                    should only be used as a placeholder value, never as an
                    actual entity identifier.
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
                    What makes a UUID invalid?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Common reasons for invalid UUIDs: wrong length (not 32 hex
                    digits), non-hexadecimal characters, incorrect hyphen
                    placement (should be 8-4-4-4-12), invalid version number
                    (must be 1, 3, 4, 5, 7, or 0 for NIL), or wrong variant bits
                    (should be RFC 4122 variant). Also invalid: missing hyphens
                    when expected, extra characters, leading/ trailing
                    whitespace, or completely random strings that happen to be
                    32 characters.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can a UUID be valid but still unusable?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes. A UUID can be structurally valid (correct format, valid
                    version/variant bits) but still problematic: it could be a
                    duplicate, the NIL UUID used as a real identifier, a
                    manually created non-random v4 UUID with predictable values,
                    or a v1 UUID with an invalid timestamp. Format validation
                    only checks structure, not uniqueness, randomness quality,
                    or whether the UUID was generated properly.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Should I validate UUIDs in production code?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, especially at API boundaries and input points. Validate
                    UUIDs from user input, external APIs, file uploads, or any
                    untrusted source. However, skip validation for UUIDs your
                    own code generates— that&apos;s redundant if you trust your
                    generation library. Balance performance and security:
                    validate at entry points, trust internal data after
                    validation, and use fast regex or built-in validation
                    functions rather than complex parsing.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Are uppercase and lowercase UUIDs both valid?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, RFC 4122 accepts both uppercase and lowercase
                    hexadecimal digits. However, the canonical format uses
                    lowercase. Most systems normalize UUIDs to lowercase for
                    consistency. When validating, accept both cases but consider
                    normalizing to lowercase in your storage and APIs to prevent
                    duplicate entries from case differences (e.g., treating
                    A1B2... and a1b2... as different values).
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Do UUIDs always need hyphens?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No. UUIDs can be represented with or without hyphens. The
                    canonical format includes hyphens (36 characters total), but
                    the compact format without hyphens (32 hex digits) is also
                    valid and commonly used for space efficiency. This validator
                    accepts both formats. When accepting UUID input, support
                    both formats but normalize to your preferred representation
                    for storage.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What&apos;s the difference between format and RFC compliance?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Format validation checks string structure: length,
                    hexadecimal characters, hyphen placement. RFC 4122
                    compliance additionally validates version and variant bits
                    are set correctly according to the specification. A UUID can
                    have valid format but fail RFC compliance if version/variant
                    bits are wrong. Always validate both for true UUID
                    compliance—format alone isn&apos;t enough.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I fix invalid UUIDs in my database?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    First, query for invalid UUIDs using validation logic in
                    your database. For malformed UUIDs, regenerate them if
                    they&apos;re not referenced elsewhere, or update references if
                    they are. For UUIDs with wrong format (e.g., missing
                    hyphens), normalize them. For corrupted data, check backups
                    or source systems. Prevention is key: add validation
                    constraints, use native UUID types, and validate input at
                    application boundaries.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can validation guarantee UUID uniqueness?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No. Validation only checks format and structure, not
                    uniqueness. Multiple UUIDs can all be valid but duplicate.
                    Uniqueness depends on proper generation (using sufficient
                    randomness for v4, unique timestamps/nodes for v1, etc.) and
                    your data model. Enforce uniqueness through database unique
                    constraints, not validation alone. Validation prevents
                    malformed UUIDs; constraints prevent duplicates.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Should I use regex or a library for UUID validation?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    For simple format validation, regex is fast and sufficient.
                    For complete RFC 4122 compliance checking (version/variant
                    validation), use a library or more detailed parsing. Most
                    languages have UUID validation in standard libraries (Python
                    uuid.UUID(), JavaScript libraries, etc.). Regex is fine for
                    basic checks, but libraries provide better error messages
                    and handle edge cases correctly.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is this validator safe for production UUID checking?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes for ad-hoc testing and debugging, but implement
                    validation in your application code for production systems.
                    This browser tool is perfect for manual verification,
                    troubleshooting, or educational purposes. For production,
                    use robust validation libraries in your backend that handle
                    edge cases, provide detailed error messages, and integrate
                    with your error handling framework.
                  </p>
                </details>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Best Practices for UUID Validation
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Validate at API boundaries:</strong> Always validate
                    UUID input at REST API endpoints, GraphQL resolvers, RPC
                    handlers, and other entry points to your system. Return 400
                    Bad Request with descriptive error messages for invalid
                    UUIDs. Never let invalid UUIDs propagate into your business
                    logic or database layers where they can cause crashes or
                    data corruption.
                  </p>
                  <p>
                    <strong>Use appropriate validation depth:</strong> For
                    public APIs, validate format, version, and variant. For
                    internal services where you control generation, lighter
                    validation may suffice. Balance security/reliability with
                    performance. Don&apos;t re-validate UUIDs that have already
                    passed validation at entry points unless there&apos;s a security
                    boundary.
                  </p>
                  <p>
                    <strong>Normalize after validation:</strong> After
                    validating, normalize UUIDs to a consistent format
                    (lowercase, hyphenated) to prevent duplicate entries from
                    case or formatting differences. Store normalized UUIDs
                    consistently across your system. Document your normalization
                    strategy in API documentation.
                  </p>
                  <p>
                    <strong>Provide helpful error messages:</strong> When
                    validation fails, return specific error messages: &quot;UUID too
                    short&quot;, &quot;Invalid character &apos;Z&apos; at position 15&quot;, &quot;Invalid
                    version 6&quot;. This helps developers debug integration issues
                    quickly. Generic &quot;Invalid UUID&quot; errors waste time.
                  </p>
                  <p>
                    <strong>Consider version requirements:</strong> Some
                    applications may require specific UUID versions (e.g., only
                    accept v4 random UUIDs). Validate not just RFC compliance
                    but also that the version matches your requirements.
                    Document version requirements in API specifications.
                  </p>
                  <p>
                    <strong>Test edge cases:</strong> In your validation tests,
                    include edge cases: NIL UUID, uppercase vs lowercase, with
                    and without hyphens, almost-valid UUIDs (31 or 33
                    characters), non-hex characters that look hexadecimal (like
                    &apos;g&apos;), and UUIDs with valid format but invalid
                    version/variant bits.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Tools */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Related UUID Tools
              </h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Explore our complete suite of UUID tools for generation,
                validation, decoding, and format conversion:
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <a
                  href="/tools/uuid-generator"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-gray-50 dark:group-hover:text-indigo-400">
                    UUID Generator
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Generate RFC 4122 compliant UUIDs in all versions (v1, v3,
                    v4, v5, v7, NIL)
                  </p>
                </a>
                <a
                  href="/tools/uuid-decoder"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-gray-50 dark:group-hover:text-indigo-400">
                    UUID Decoder
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Decode and analyze UUIDs to extract version, variant,
                    timestamps, and node information
                  </p>
                </a>
                <a
                  href="/tools/uuid-format-converter"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-gray-50 dark:group-hover:text-indigo-400">
                    UUID Format Converter
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Convert between UUID formats: hyphenated, compact,
                    uppercase, URN, and braced
                  </p>
                </a>
              </div>
            </section>
          </div>

          <UuidLinks />
        </div>
      </div>
    </>
  );
}
