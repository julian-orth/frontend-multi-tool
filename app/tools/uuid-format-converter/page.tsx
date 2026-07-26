import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb";
import UuidLinks from "@/components/uuid-links";
import { UuidGeneratorClient } from "../uuid-generator/client";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "UUID Format Converter",
  description:
    "Convert UUIDs between common representations: hyphenated, compact, uppercase, URN and braces.",
  keywords: [
    "uuid",
    "format",
    "converter",
    "uppercase",
    "hyphens",
    "urn",
    "braces",
    "compact",
  ],
  openGraph: {
    title: `UUID Format Converter — ${SITE_CONFIG.name}`,
    description:
      "Convert UUIDs between common representations: hyphenated, compact, uppercase, URN and braces.",
    url: `${SITE_CONFIG.domain}/tools/uuid-format-converter`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `UUID Format Converter — ${SITE_CONFIG.name}`,
    description: "Convert UUID representations for storage or display.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/uuid-format-converter`,
  },
};

export default function UuidFormatConverterPage() {
  return (
    <>
      <ToolSchema
        name="UUID Format Converter"
        description="Convert UUIDs between formats including hyphens, uppercase, URN, braced, and compact representations"
        url="/tools/uuid-format-converter"
        keywords={[
          "uuid converter",
          "guid converter",
          "uuid format",
          "convert uuid",
          "uuid transformer",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-black dark:text-white">
              UUID Format Converter
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Convert UUIDs between different common formats used by databases,
              APIs, and display layers.
            </p>
          </div>

          <UuidGeneratorClient only="format" />

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is UUID Format Conversion */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is UUID Format Conversion?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  UUID format conversion transforms the same 128-bit UUID value
                  between different textual representations used by various
                  systems, databases, and APIs. While the underlying UUID
                  remains identical, different platforms and use cases prefer
                  different string formats: the canonical hyphenated lowercase
                  format (8-4-4-4-12), compact format without hyphens, uppercase
                  variants, URN format with &quot;urn:uuid:&quot; prefix, or Microsoft&apos;s
                  braced format with curly braces.
                </p>
                <p>
                  Converting between formats is essential when integrating
                  systems that use different UUID conventions. For example,
                  PostgreSQL&apos;s UUID type stores and returns UUIDs in lowercase
                  hyphenated format, while some Java systems use uppercase, and
                  certain APIs expect compact format for URL efficiency. Format
                  conversion ensures compatibility across your technology stack
                  without changing the actual identifier values.
                </p>
                <p>
                  This converter handles all common UUID representations,
                  providing instant conversion between formats. It normalizes
                  input (accepting any valid format), validates UUID structure,
                  and outputs all standard formats simultaneously. This makes it
                  easy to adapt UUIDs for different systems, debug format
                  mismatches, or understand how your identifiers appear in
                  different contexts.
                </p>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for UUID Format Conversion
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Database Integration
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Convert UUIDs to match database requirements. PostgreSQL
                    uses lowercase hyphenated format, MySQL BINARY(16) requires
                    compact hex, SQL Server UNIQUEIDENTIFIER accepts braced
                    format. Converting ensures your UUIDs are stored correctly
                    and queries match expected formats, preventing &quot;UUID not
                    found&quot; errors from format mismatches.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    API Compatibility
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Normalize UUIDs for REST APIs that expect specific formats.
                    Some APIs require lowercase canonical format, others accept
                    compact for URL efficiency. Converting ensures requests
                    succeed and prevents rejection due to format violations.
                    Important when integrating with third-party services or
                    standardizing across microservices.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    URL and URI Construction
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Convert to compact format for shorter URLs or to URN format
                    for semantic web applications. Compact format reduces URL
                    length by 4 characters, important for character-limited
                    contexts. URN format (urn:uuid:...) is used in RDF, XML
                    namespaces, and formal specifications requiring full URI
                    notation.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Legacy System Migration
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Convert UUIDs when migrating between systems with different
                    format conventions. Legacy Windows systems use uppercase
                    braced format, modern APIs prefer lowercase hyphenated.
                    Format conversion during ETL processes ensures data
                    consistency and prevents identifier mismatches after
                    migration.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Display and Logging
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Standardize UUID display format for consistency in logs,
                    user interfaces, and documentation. Convert all UUIDs to
                    canonical lowercase hyphenated format for readability, or to
                    uppercase for visual distinction. Consistent formatting
                    improves debugging and user experience.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Storage Optimization
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Convert to compact format for space-efficient storage in
                    constrained environments. Removes 4 hyphen characters,
                    reducing storage from 36 to 32 bytes per UUID. Important for
                    large-scale systems storing millions of UUIDs where every
                    byte counts, or for bandwidth-limited APIs.
                  </p>
                </div>
              </div>
            </section>

            {/* Format Types Explained */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                UUID Format Types Explained
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Canonical (Hyphenated Lowercase)
                  </h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    The RFC 4122 standard format: 8-4-4-4-12 groups of lowercase
                    hexadecimal digits separated by hyphens. Total length: 36
                    characters. This is the most widely used and recommended
                    format.
                  </p>
                  <pre className="rounded bg-gray-100 p-3 text-sm dark:bg-gray-800">
                    <code>550e8400-e29b-41d4-a716-446655440000</code>
                  </pre>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Use this format for: APIs, databases with native UUID
                    support (PostgreSQL), logging, and general-purpose display.
                    It&apos;s the most human-readable and universally compatible.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Uppercase (Hyphenated Uppercase)
                  </h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    Same structure as canonical but with uppercase hexadecimal
                    digits. Some systems prefer this for consistency or visual
                    distinction.
                  </p>
                  <pre className="rounded bg-gray-100 p-3 text-sm dark:bg-gray-800">
                    <code>550E8400-E29B-41D4-A716-446655440000</code>
                  </pre>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Use this format for: systems with uppercase conventions, SQL
                    Server in some contexts, or when uppercase is your
                    organizational standard. Functionally identical to
                    lowercase.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Compact (No Hyphens)
                  </h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    32 hexadecimal digits with no separators. More
                    space-efficient but less readable. Used when storage space
                    or URL length matters.
                  </p>
                  <pre className="rounded bg-gray-100 p-3 text-sm dark:bg-gray-800">
                    <code>550e8400e29b41d4a716446655440000</code>
                  </pre>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Use this format for: binary storage representations, compact
                    URLs, cache keys, or systems that don&apos;t require hyphens.
                    Save 4 bytes per UUID, which adds up at scale.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    URN (Uniform Resource Name)
                  </h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    Canonical format prefixed with &quot;urn:uuid:&quot; to create a valid
                    URN. Used in semantic web, XML namespaces, and formal
                    specifications.
                  </p>
                  <pre className="rounded bg-gray-100 p-3 text-sm dark:bg-gray-800">
                    <code>urn:uuid:550e8400-e29b-41d4-a716-446655440000</code>
                  </pre>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Use this format for: RDF documents, XML schema references,
                    SOAP messages, or any context requiring formal URI notation
                    for identifiers.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Braced (Microsoft Format)
                  </h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    Canonical format wrapped in curly braces. Traditional
                    Microsoft GUID representation, especially in Windows APIs
                    and older .NET code.
                  </p>
                  <pre className="rounded bg-gray-100 p-3 text-sm dark:bg-gray-800">
                    <code>{`{550e8400-e29b-41d4-a716-446655440000}`}</code>
                  </pre>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Use this format for: Windows COM interfaces, legacy .NET
                    applications, SQL Server UNIQUEIDENTIFIER in some contexts,
                    or when integrating with Microsoft ecosystems requiring
                    braced GUIDs.
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
                    Does format conversion change the UUID value?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No. Format conversion only changes the textual
                    representation, not the underlying 128-bit value. All
                    formats represent the exact same UUID. Converting between
                    formats is like writing the same number in different
                    notations (123 vs 0x7B)—the value is identical, only the
                    display changes. The UUID remains functionally equivalent
                    across all formats.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Which format should I use for storage?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Use native UUID types when available (PostgreSQL UUID, SQL
                    Server UNIQUEIDENTIFIER) which handle format internally. For
                    databases without native support: use BINARY(16) with
                    compact format for space efficiency, or CHAR(36) with
                    canonical lowercase for readability and debugging. Document
                    your choice and be consistent across your application to
                    avoid conversion overhead and confusion.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Are uppercase and lowercase UUIDs considered equal?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, they&apos;re the same UUID. However, some systems treat them
                    as different strings in comparisons. Best practice:
                    normalize to lowercase canonical format for storage and
                    comparison to prevent duplicates. For example, without
                    normalization, you might accidentally treat &quot;550E8400-...&quot;
                    and &quot;550e8400-...&quot; as different records in case-sensitive
                    systems.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Should I convert UUIDs before database insertion?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Depends on your database. PostgreSQL&apos;s UUID type accepts any
                    valid format and normalizes automatically. For string
                    columns (CHAR/ VARCHAR), normalize to your standard format
                    before insertion for consistency. For BINARY columns,
                    convert to compact format and then to binary. Consistent
                    formatting prevents query issues and duplicate key
                    violations from format differences.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why do some APIs reject certain UUID formats?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    APIs enforce format standards for consistency and parsing
                    reliability. Strict APIs may only accept canonical lowercase
                    hyphenated format, rejecting uppercase, compact, or braced
                    variants. This ensures predictable parsing and prevents
                    ambiguity. Always check API documentation for format
                    requirements and convert accordingly before making requests.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I convert UUIDs programmatically?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Most languages provide UUID libraries with format
                    conversion: JavaScript uuid library has formatting options,
                    Python uuid module supports str() and hex properties, Java&apos;s
                    UUID class has toString(), C#&apos;s Guid has ToString(format).
                    For custom formats, normalize to lowercase, remove/add
                    hyphens as needed, and wrap with prefixes/ suffixes. Regex
                    can help but libraries are more reliable.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Does format affect UUID performance?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Slightly. Compact format saves 4 bytes per UUID, reducing
                    storage and network transfer costs at scale. Binary storage
                    (16 bytes) is most efficient. String formats have similar
                    performance for comparison operations. The real performance
                    impact comes from indexing strategies (time-ordered vs
                    random UUIDs), not format choice. Choose format based on
                    compatibility and readability, not performance.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    When should I use URN format?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Use URN format when UUIDs need to be formal URIs in semantic
                    web contexts, RDF/OWL ontologies, XML namespaces, or
                    specifications requiring full URI notation. For regular APIs
                    and databases, stick to canonical hyphenated format. URN
                    format is verbose and mainly for formal/academic contexts
                    where URIs are required, not everyday application
                    development.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I safely convert between formats repeatedly?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, format conversion is lossless and repeatable.
                    Converting canonical → compact → uppercase → URN → braced →
                    back to canonical yields the exact same UUID. There&apos;s no
                    degradation or loss of information. However, repeated
                    conversions waste CPU cycles. Convert once at system
                    boundaries and store in your preferred format to avoid
                    unnecessary processing.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What happens if I mix formats in my database?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Mixing formats causes problems: duplicate records (same UUID
                    in different formats treated as different values), failed
                    queries (searching for lowercase doesn&apos;t find uppercase),
                    broken foreign key relationships, and debugging nightmares.
                    Always normalize to one format at input boundaries. Use
                    database constraints or triggers to enforce format
                    consistency. Better yet, use native UUID types that handle
                    this automatically.
                  </p>
                </details>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Best Practices for UUID Format Management
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Standardize on one format per system:</strong>{" "}
                    Choose canonical lowercase hyphenated format as your default
                    unless you have specific requirements. Document this
                    standard in your API documentation, database schema
                    comments, and code style guides. Consistency prevents
                    conversion errors, simplifies debugging, and improves team
                    productivity.
                  </p>
                  <p>
                    <strong>Normalize at entry points:</strong> Convert all
                    incoming UUIDs to your standard format at API boundaries,
                    file imports, and user inputs. This creates a trusted zone
                    where all UUIDs are consistently formatted. Never assume
                    external sources use your format—always validate and
                    normalize.
                  </p>
                  <p>
                    <strong>Use native UUID types when possible:</strong>{" "}
                    PostgreSQL UUID, SQL Server UNIQUEIDENTIFIER, and similar
                    native types handle format conversion automatically. They
                    accept any valid format on input and normalize internally.
                    This eliminates conversion bugs and simplifies application
                    code. Only use string types when native support is
                    unavailable.
                  </p>
                  <p>
                    <strong>Document format requirements clearly:</strong> In
                    API documentation, specify accepted UUID formats explicitly.
                    Don&apos;t just say &quot;UUID&quot;—say &quot;canonical lowercase hyphenated
                    format (8-4-4-4-12)&quot; with examples. This prevents
                    integration issues and support requests. Include format
                    requirements in error messages when validation fails.
                  </p>
                  <p>
                    <strong>Avoid format conversion in hot paths:</strong>{" "}
                    Convert once at system boundaries, not repeatedly in loops
                    or frequently-called functions. Cache converted formats if
                    needed multiple times. While conversion is fast, eliminating
                    unnecessary conversions improves performance at scale.
                    Profile your code to identify conversion bottlenecks.
                  </p>
                  <p>
                    <strong>Test cross-platform compatibility:</strong> If your
                    system integrates with multiple platforms (PostgreSQL + .NET
                    + Java), verify UUID format handling across all systems.
                    Test that UUIDs round-trip correctly through your entire
                    stack. Automated integration tests should validate format
                    consistency end-to-end.
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
                  href="/tools/uuid-validator"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-gray-50 dark:group-hover:text-indigo-400">
                    UUID Validator
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Validate UUID format and RFC 4122 compliance
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
