import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb";
import UuidLinks from "@/components/uuid-links";
import { UuidGeneratorClient } from "../uuid-generator/client";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "UUID Decoder & Analyzer",
  description:
    "Decode and analyze UUIDs: extract version, variant, timestamps and node identifiers (v1).",
  keywords: [
    "uuid",
    "decode",
    "analyze",
    "version",
    "variant",
    "timestamp",
    "v1",
    "mac",
  ],
  openGraph: {
    title: `UUID Decoder & Analyzer — ${SITE_CONFIG.name}`,
    description:
      "Decode and inspect RFC 4122 UUIDs. Extract version, variant, timestamp (for v1) and other fields.",
    url: `${SITE_CONFIG.domain}/tools/uuid-decoder`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `UUID Decoder & Analyzer — ${SITE_CONFIG.name}`,
    description: "Decode and inspect RFC 4122 UUIDs in the browser.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/uuid-decoder`,
  },
};

export default function UuidDecoderPage() {
  return (
    <>
      <ToolSchema
        name="UUID Decoder & Analyzer"
        description="Decode and analyze UUIDs to extract version, variant, timestamp, node ID, and clock sequence information"
        url="/tools/uuid-decoder"
        keywords={[
          "uuid decoder",
          "guid decoder",
          "uuid analyzer",
          "decode uuid",
          "uuid parser",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-black dark:text-white">
              UUID Decoder & Analyzer
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Paste a UUID to decode its fields: version, variant, embedded
              timestamp (v1/v7), and node identifier when available.
            </p>
          </div>

          <UuidGeneratorClient only="decode" />

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is UUID Decoding */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is UUID Decoding?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  UUID decoding is the process of extracting embedded
                  information from a UUID string by analyzing its structure and
                  bit layout. While UUIDs appear as opaque 128-bit identifiers,
                  certain versions encode meaningful data that can be extracted:
                  version 1 and version 7 UUIDs contain timestamps, version 1
                  UUIDs may include node identifiers (MAC addresses), and all
                  UUIDs carry version and variant indicators in specific bit
                  positions.
                </p>
                <p>
                  Understanding what information is embedded in a UUID helps
                  with debugging distributed systems, auditing identifier
                  generation, investigating event ordering, and validating that
                  systems are producing the expected UUID versions. For example,
                  if your API is supposed to generate v4 random UUIDs but you
                  discover it&apos;s actually generating v1 UUIDs, this could have
                  privacy implications since v1 may expose machine information.
                </p>
                <p>
                  This decoder analyzes the UUID structure according to RFC 4122
                  specifications, extracting version numbers, variant types,
                  embedded timestamps (for time-based versions), and node
                  identifiers when available. It provides human-readable
                  explanations of each field, making it easy to understand what
                  data is encoded in any UUID.
                </p>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for UUID Decoding
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Debugging Event Ordering
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Extract timestamps from v1 or v7 UUIDs to understand when
                    events occurred in distributed systems. This helps debug
                    race conditions, verify event ordering in event sourcing
                    systems, or investigate timing issues. Timestamps provide
                    approximate creation times useful for troubleshooting
                    without requiring separate timestamp fields.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Auditing UUID Generation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Verify that your systems are generating the expected UUID
                    versions. Decode sample UUIDs from production to confirm
                    version numbers, check variant compliance with RFC 4122, and
                    ensure consistency across microservices. This helps catch
                    configuration errors or library issues early.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Investigating Privacy Concerns
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Decode v1 UUIDs to check if they expose node identifiers
                    that could reveal MAC addresses or machine information. This
                    is crucial for privacy compliance—if your system
                    inadvertently generates v1 UUIDs with real MAC addresses,
                    sensitive network information could be exposed in logs or
                    APIs.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Data Validation and Quality
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Validate UUID structure in imported datasets, verify that
                    all UUIDs conform to RFC 4122 variant specifications, and
                    check for consistency in version usage across records.
                    Decoding helps identify malformed or non-standard UUIDs that
                    could cause issues in downstream processing.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Understanding Legacy Systems
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Decode UUIDs from legacy databases or systems to understand
                    how they were generated, determine if they&apos;re time-based or
                    random, and plan migration strategies. Knowing the UUID
                    version helps when integrating old and new systems or
                    standardizing identifier generation.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Forensic Analysis
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Extract timestamps and node information from v1 UUIDs for
                    forensic purposes in security investigations. While not
                    suitable as primary forensic evidence, decoded UUID data can
                    provide additional context about when and where events
                    occurred, supplementing audit logs and system records.
                  </p>
                </div>
              </div>
            </section>

            {/* How Decoding Works */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                How UUID Decoding Works
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Extracting Version and Variant
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Every UUID encodes its version in 4 bits at a specific
                    position (the M in xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx) and
                    variant in 2-3 bits (the N position). The decoder parses
                    these bits to identify the UUID type. Version indicates the
                    generation algorithm (1=time- based, 3=MD5 hash, 4=random,
                    5=SHA-1 hash, 7=time-ordered). Variant indicates the UUID
                    layout specification (RFC 4122 uses variant &quot;10&quot;).
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Decoding Version 1 Timestamps
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Version 1 UUIDs encode a 60-bit timestamp representing
                    100-nanosecond intervals since October 15, 1582 (UUID
                    epoch). This timestamp is split across multiple fields in
                    the UUID structure. The decoder reassembles these fields,
                    converts the UUID epoch timestamp to Unix epoch (January 1,
                    1970), and displays a human-readable date and time. This
                    provides approximate creation time with sub-millisecond
                    precision.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Extracting Node Identifiers
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Version 1 UUIDs include a 48-bit node identifier in the last
                    12 hex digits. Originally this was the IEEE 802 MAC address
                    of the generating machine&apos;s network interface. Modern
                    implementations often use random node IDs or hash-based
                    identifiers instead of real MAC addresses for privacy. The
                    decoder extracts this field and indicates whether it appears
                    to be a multicast (randomized) or unicast (potentially real
                    MAC) address.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Analyzing Random UUIDs (v4)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Version 4 UUIDs are purely random except for version and
                    variant bits. The decoder identifies v4 UUIDs and confirms
                    there&apos;s no embedded timestamp or node information. All other
                    bits (122 bits) are cryptographically random, providing no
                    extractable metadata. This makes v4 UUIDs the most
                    privacy-preserving option.
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
                    What information can be extracted from UUIDs?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    It depends on the UUID version. Version 1 UUIDs contain
                    embedded timestamps (100-nanosecond precision since 1582)
                    and node identifiers (potentially MAC addresses). Version 7
                    UUIDs contain Unix timestamps in milliseconds. Version 3 and
                    5 are hashed values that cannot be reversed to extract
                    original input. Version 4 is purely random with no
                    extractable information. All versions include version and
                    variant indicators in specific bit positions.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Are decoded timestamps accurate?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Timestamps extracted from v1 or v7 UUIDs are approximate and
                    should not be used as authoritative sources of truth. Clock
                    skew between machines, time zone differences, and clock
                    adjustments can affect accuracy. Use decoded timestamps for
                    debugging and approximate ordering, but rely on explicit
                    timestamp fields in your data model for business logic and
                    accurate time tracking. The precision is there, but accuracy
                    depends on the generating system&apos;s clock.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Do v1 UUIDs expose real MAC addresses?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Historically yes, but modern implementations typically use
                    random node identifiers instead. RFC 4122 allows using
                    random values for the node field with the multicast bit set
                    to indicate it&apos;s not a real MAC address. Check the decoded
                    node identifier—if the least significant bit of the first
                    octet is 1, it&apos;s multicast (random). If 0, it could be a
                    real unicast MAC address. Most modern UUID libraries use
                    random node IDs for privacy.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can name-based UUIDs (v3/v5) be reversed?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No. Version 3 and 5 UUIDs are cryptographic hashes (MD5 and
                    SHA-1 respectively) of namespace and name inputs. Hashes are
                    one-way functions—you cannot extract the original namespace
                    or name from the UUID. You can only verify a UUID by
                    regenerating it with the suspected namespace and name and
                    checking if it matches. This makes name-based UUIDs suitable
                    for privacy-preserving deterministic identifiers.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What is the UUID epoch and why 1582?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The UUID epoch starts at October 15, 1582 00:00:00 UTC,
                    which is the date the Gregorian calendar was first adopted.
                    This arbitrary historical date was chosen by the UUID
                    specification authors to provide a long time range for
                    timestamps. Version 1 timestamps are 100-nanosecond
                    intervals since this epoch, providing extremely high
                    precision. The decoder converts this to Unix epoch (January
                    1, 1970) for familiar date display.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What does RFC 4122 variant mean?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The variant field indicates which UUID layout specification
                    is used. RFC 4122 defines variant &quot;10&quot; (binary), which is
                    what almost all modern UUIDs use. There are historical
                    variants from older specifications (NCS, Microsoft,
                    reserved) that used different bit layouts. If a UUID doesn&apos;t
                    have RFC 4122 variant, it may not decode correctly or may be
                    from a legacy system. The decoder identifies the variant to
                    help validate UUID conformance.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is decoding safe for sensitive UUIDs?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, decoding happens entirely in your browser with no
                    server communication. However, be cautious about what you do
                    with decoded information. If you decode a v1 UUID and
                    discover it contains a real MAC address, sharing that
                    decoded data could expose network information. Treat decoded
                    timestamps and node identifiers with the same
                    confidentiality as the original UUIDs. Use this tool in
                    secure environments when analyzing production identifiers.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why do some UUIDs have invalid versions?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    UUIDs with invalid versions (not 1, 3, 4, 5, or 7) may be:
                    malformed UUIDs from buggy generators, UUIDs from non-RFC
                    4122 systems, manually created test UUIDs, or corrupted
                    data. The decoder will identify these as invalid or unknown
                    versions. Always validate UUID generation in your systems to
                    ensure compliance with RFC 4122 specifications.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I decode UUIDs in bulk?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    This tool is designed for analyzing individual UUIDs. For
                    bulk decoding, consider using programming libraries in your
                    language of choice. Python&apos;s uuid module, JavaScript uuid
                    libraries, or command-line tools can process large datasets.
                    You could also write a simple script using this tool&apos;s
                    decoding logic adapted to your needs for batch processing of
                    UUID datasets.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What&apos;s the clock sequence in v1 UUIDs?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The clock sequence is a 14-bit counter in v1 UUIDs used to
                    prevent duplicates when the system clock moves backward,
                    changes, or when the node identifier changes. It&apos;s
                    incremented whenever the clock appears to have gone backward
                    relative to the last UUID generated. This ensures uniqueness
                    even with clock adjustments. The decoded clock sequence
                    value itself isn&apos;t particularly useful—it&apos;s mainly an
                    internal mechanism for collision avoidance.
                  </p>
                </details>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Best Practices for UUID Decoding
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Use decoded data for debugging only:</strong> Don&apos;t
                    rely on decoded timestamps or node identifiers for business
                    logic. Extracted timestamps are approximate and
                    clock-dependent. Node IDs may be random or real MAC
                    addresses. Always use explicit fields in your data model for
                    authoritative information. Decode for troubleshooting, not
                    as a primary data source.
                  </p>
                  <p>
                    <strong>Verify UUID versions in production:</strong>{" "}
                    Regularly decode sample UUIDs from your production systems
                    to ensure they&apos;re generating the expected versions. If you
                    expect v4 random UUIDs but discover v1, investigate
                    immediately—this could have privacy or performance
                    implications. Set up monitoring to alert on unexpected UUID
                    version changes.
                  </p>
                  <p>
                    <strong>Protect privacy when sharing decoded data:</strong>{" "}
                    Be cautious about sharing decoded v1 UUID information
                    publicly. Node identifiers and timestamps could reveal
                    sensitive system details. Redact or anonymize decoded data
                    when sharing in public forums, documentation, or bug
                    reports. Treat decoded information with the same
                    confidentiality as the source UUIDs.
                  </p>
                  <p>
                    <strong>Understand version limitations:</strong> Know which
                    UUID versions contain extractable data (v1 and v7 have
                    timestamps, v1 has node IDs) and which don&apos;t (v3, v4, v5 are
                    opaque). Don&apos;t attempt to extract timestamps from v4 random
                    UUIDs—there&apos;s nothing to extract. Check the version first to
                    understand what decoding will reveal.
                  </p>
                  <p>
                    <strong>Validate before assuming:</strong> Don&apos;t assume all
                    UUIDs in your system follow RFC 4122. Legacy systems,
                    third-party integrations, or manual test data might use
                    non-standard formats. Always validate variant and version
                    before trusting decoded data. Invalid UUIDs should trigger
                    alerts in your validation pipeline.
                  </p>
                  <p>
                    <strong>Document UUID generation strategies:</strong> After
                    decoding UUIDs from different systems, document which
                    versions are used where and why. This helps future
                    developers understand identifier strategies and makes system
                    integration smoother. Include UUID version requirements in
                    API documentation and database schema comments.
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
