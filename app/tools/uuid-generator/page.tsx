import type { Metadata } from "next";
import { UuidGeneratorClient } from "./client";
import Breadcrumb from "@/components/breadcrumb";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "UUID (GUID) Generator, Validator, Decoder & Format Converter",
  description:
    "Generate, validate, decode, and reformat RFC 4122 compliant UUIDs (GUIDs) — v1, v3, v4, v5, v7, NIL — with shareable links via ?tab= and ?version=",
  keywords: [
    "uuid",
    "guid",
    "unique identifier",
    "generator",
    "validator",
    "decoder",
    "format converter",
    "v1",
    "v3",
    "v4",
    "v5",
    "v7",
  ],
  openGraph: {
    title: "UUID (GUID) Generator, Validator, Decoder & Format Converter",
    description:
      "Generate RFC 4122 compliant UUIDs (GUIDs) instantly, validate existing ones, decode their metadata, and convert between formats — all in one tool.",
    url: `${SITE_CONFIG.domain}/tools/uuid-generator`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `UUID (GUID) Generator, Validator, Decoder & Format Converter — ${SITE_CONFIG.name}`,
    description:
      "Generate, validate, decode, and reformat v1, v3, v4, v5, v7 UUIDs (GUIDs) in-browser. Share links using `?tab=` and `?version=`.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/uuid-generator`,
  },
};

export default function UuidGeneratorPage() {
  return (
    <>
      <ToolSchema
        name="UUID Generator"
        description="Generate, validate, decode, and reformat RFC 4122 compliant UUIDs (GUIDs) in multiple versions (v1, v3, v4, v5, v7, NIL) for databases, APIs, and distributed systems"
        url="/tools/uuid-generator"
        keywords={[
          "uuid generator",
          "guid generator",
          "uuid validator",
          "uuid decoder",
          "unique identifier",
          "uuid v4",
          "uuid v7",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-black dark:text-white">
              UUID / GUID Generator
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Generate RFC 4122 compliant UUIDs (GUIDs — Microsoft term)
              instantly, then validate, decode, or reformat them — all in one
              place.
            </p>
          </div>

          <UuidGeneratorClient />

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is UUID */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is a UUID (GUID)?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  A UUID (Universally Unique Identifier), also known as a GUID
                  (Globally Unique Identifier) in Microsoft terminology, is a
                  128-bit value designed to be unique across all systems and
                  time without requiring a central coordination authority. UUIDs
                  are standardized by RFC 4122 and are widely used in
                  distributed systems, databases, APIs, and applications where
                  globally unique identification is critical.
                </p>
                <p>
                  The standard UUID format uses 32 hexadecimal digits displayed
                  in five groups separated by hyphens, in the form 8-4-4-4-12,
                  for a total of 36 characters including hyphens (for example:
                  550e8400-e29b-41d4-a716-446655440000). This compact, URL-safe
                  format makes UUIDs ideal for use as resource identifiers in
                  REST APIs, primary keys in databases, session identifiers, or
                  any scenario where you need guaranteed uniqueness without a
                  central ID generator.
                </p>
                <p>
                  UUIDs come in multiple versions (v1, v3, v4, v5, v7, and NIL),
                  each designed for different use cases. Some are time-based and
                  sortable (v1, v7), some are completely random (v4), and others
                  are deterministic based on namespace and name (v3, v5). This
                  tool covers the full lifecycle of a UUID: generating new ones,
                  validating ones you receive, decoding their embedded metadata,
                  and converting between display formats.
                </p>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Database Primary Keys
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    UUIDs are ideal primary keys for distributed databases,
                    sharded systems, or offline-first applications where
                    multiple nodes need to generate unique IDs without
                    coordination. Unlike auto-incrementing integers, UUIDs
                    prevent ID collisions when merging data from different
                    sources and don&apos;t reveal record counts or creation order.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    REST API Resource Identifiers
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Modern REST APIs use UUIDs as resource identifiers in URLs
                    (e.g., /api/users/550e8400-e29b-41d4-a716-446655440000).
                    UUIDs are URL-safe, non-sequential (preventing enumeration
                    attacks), and can be generated client-side without server
                    round-trips.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Session and Transaction IDs
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Web applications use UUIDs for session identifiers, tracking
                    tokens, request IDs for distributed tracing, and transaction
                    identifiers. Their randomness and length make them resistant
                    to guessing attacks.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Client-Generated Identifiers
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Offline-first and mobile applications generate UUIDs locally
                    when creating records without network connectivity. When the
                    device reconnects, these locally-generated IDs sync to the
                    server without conflicts.
                  </p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Validating Incoming API UUIDs
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Before trusting a UUID passed in a request path or payload,
                    check it&apos;s a well-formed, RFC 4122 compliant value. The
                    Validate tab checks structure, version, and variant, and
                    explains exactly why a malformed value fails.
                  </p>
                </div>
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Extracting Creation Time from v1 IDs
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Version 1 UUIDs embed a timestamp. The Decode tab extracts
                    it (along with version and variant) so you can inspect when
                    a v1 UUID was generated for debugging or auditing.
                  </p>
                </div>
                <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-6 dark:border-purple-800 dark:bg-purple-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Normalizing UUID Format Before Storage
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Different systems expect different UUID formats — with or
                    without hyphens, upper- or lowercase, braced, or as a URN.
                    The Format tab converts between them so you can normalize
                    values before writing them to your database.
                  </p>
                </div>
              </div>
            </section>

            {/* UUID Versions Detailed */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                UUID Versions Explained in Detail
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Version 1 (Time-Based with MAC Address)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    UUID v1 combines a timestamp (100-nanosecond intervals since
                    October 15, 1582) with a node identifier (traditionally the
                    MAC address of the generating machine) and a clock sequence
                    to prevent duplicates. This creates naturally sortable UUIDs
                    based on creation time. However, v1 UUIDs may expose network
                    hardware information and aren&apos;t random, making them less
                    suitable for security-sensitive contexts.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Version 3 (MD5 Namespace-Based)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    UUID v3 generates deterministic UUIDs by hashing a namespace
                    UUID and a name using the MD5 algorithm. Given the same
                    namespace and name, v3 always produces the same UUID. This
                    is perfect for creating consistent identifiers from URLs,
                    domain names, or other namespaced strings.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Version 4 (Cryptographically Random)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    UUID v4 is the most commonly used version, generating IDs
                    from 122 bits of random data (with 6 bits reserved for
                    version and variant markers). Modern implementations use
                    cryptographically secure random number generators, making
                    collisions astronomically unlikely. Use v4 as your default
                    choice unless you specifically need ordering (v1/v7) or
                    determinism (v3/v5).
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Version 5 (SHA-1 Namespace-Based)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    UUID v5 works identically to v3 but uses SHA-1 instead of
                    MD5 for hashing the namespace and name, making v5 the
                    preferred choice for name-based UUIDs in modern
                    applications.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Version 7 (Time-Ordered with Random Data)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    UUID v7 is a modern format that places a Unix timestamp in
                    milliseconds at the beginning, followed by random data. This
                    creates UUIDs that are naturally sortable by creation time
                    while maintaining high randomness and collision resistance.
                    Use v7 for high-performance databases where insertion order
                    matters.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    NIL UUID (All Zeros)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The NIL UUID (00000000-0000-0000-0000-000000000000) is a
                    special reserved value representing &quot;no UUID&quot; or an absent
                    identifier. Never use NIL UUID as an actual identifier for
                    entities.
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
                    hexadecimal digits separated by hyphens. This is the most
                    widely used and recommended format.
                  </p>
                  <pre className="overflow-x-auto rounded bg-gray-100 p-3 text-sm dark:bg-gray-800">
                    <code>550e8400-e29b-41d4-a716-446655440000</code>
                  </pre>
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
                  <pre className="overflow-x-auto rounded bg-gray-100 p-3 text-sm dark:bg-gray-800">
                    <code>550e8400e29b41d4a716446655440000</code>
                  </pre>
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
                  <pre className="overflow-x-auto rounded bg-gray-100 p-3 text-sm dark:bg-gray-800">
                    <code>urn:uuid:550e8400-e29b-41d4-a716-446655440000</code>
                  </pre>
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
                  <pre className="overflow-x-auto rounded bg-gray-100 p-3 text-sm dark:bg-gray-800">
                    <code>{`{550e8400-e29b-41d4-a716-446655440000}`}</code>
                  </pre>
                </div>
              </div>
            </section>

            {/* Validation & Decoding */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                How Validation and Decoding Work
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Format and Structure
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Verifies the UUID has exactly 32 hexadecimal digits,
                    optionally separated by 4 hyphens in the pattern 8-4-4-4-12.
                    Rejects strings that are too short, too long, have hyphens
                    in wrong positions, or contain non-hex characters.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Version and Variant Extraction
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Every UUID encodes its version in 4 bits at a specific
                    position (the M in xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx) and
                    variant in 2-3 bits (the N position). The decoder and
                    validator both parse these bits to identify the UUID type
                    and confirm RFC 4122 compliance.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Decoding Version 1 Timestamps
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Version 1 UUIDs encode a 60-bit timestamp representing
                    100-nanosecond intervals since October 15, 1582 (UUID
                    epoch). The decoder reassembles these fields, converts the
                    UUID epoch timestamp to Unix epoch, and displays a
                    human-readable date and time.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Analyzing Random UUIDs (v4)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Version 4 UUIDs are purely random except for version and
                    variant bits. The decoder identifies v4 UUIDs and confirms
                    there&apos;s no embedded timestamp or node information — all
                    other bits are cryptographically random.
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
                    What&apos;s the difference between UUID and GUID?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    UUID (Universally Unique Identifier) and GUID (Globally
                    Unique Identifier) refer to the same thing—a 128-bit
                    identifier standardized by RFC 4122. &quot;UUID&quot; is the official
                    standard term used in specifications and most programming
                    languages. &quot;GUID&quot; is Microsoft&apos;s terminology used in
                    Windows, .NET, and SQL Server.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How likely are UUID collisions?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    For UUID v4 (random), the probability of collision is
                    astronomically low. With 122 bits of randomness, you&apos;d need
                    to generate about 2.71 quintillion (2.71 × 10¹⁸) UUIDs to
                    have a 50% chance of a single collision.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Which UUID version should I use?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Use UUID v4 (random) as your default choice—it&apos;s simple,
                    secure, widely supported, and appropriate for most use
                    cases. Choose v1 or v7 if you need time-based sorting for
                    database indexing performance (v7 is preferable for
                    privacy). Use v3 or v5 (prefer v5) when you need
                    deterministic IDs generated from namespaced names.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I use UUIDs as database primary keys?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, UUIDs are excellent primary keys for distributed
                    systems, though there are trade-offs. Benefits include
                    generation without database round-trips and no collision
                    risk when merging datasets. Downsides include larger index
                    size (16 bytes vs 4-8 for integers) and potential indexing
                    performance issues with random UUIDs (use v1/v7 for better
                    locality).
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Are UUIDs secure for session tokens or secrets?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    UUID v4 provides sufficient randomness for session
                    identifiers and non-security-critical tokens, but shouldn&apos;t
                    be used for cryptographic keys, password reset tokens, or
                    authentication secrets. UUIDs were designed for uniqueness,
                    not cryptographic security.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can UUIDs be decoded to extract information?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    It depends on the version. UUID v1 embeds a timestamp that
                    can be extracted, revealing when the UUID was generated.
                    UUID v3 and v5 are hashes, so the original namespace and
                    name cannot be reversed. UUID v4 is random data with no
                    embedded information. Use the Decode tab above for v1
                    UUIDs; never rely on UUIDs as secure storage of data.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What are UUID namespaces for v3/v5?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    UUID namespaces partition the UUID space to avoid collisions
                    between different naming authorities. RFC 4122 defines
                    standard namespaces: DNS (for domain names), URL (for URLs),
                    OID (for ISO OIDs), and X.500 (for X.500 DNs).
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What format should I store UUIDs in?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Store UUIDs in whatever format your database optimizes for.
                    PostgreSQL has a native UUID type, MySQL can use BINARY(16)
                    for compact storage or CHAR(36) for hyphenated strings. The
                    canonical hyphenated format is human-readable and widely
                    compatible; use the Format tab to convert between
                    representations before writing to storage.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why is my UUID marked invalid?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The most common reasons are: wrong character count (not 32
                    hex digits), hyphens in the wrong positions, non-hex
                    characters (e.g. &apos;g&apos;, &apos;z&apos;, or symbols), an unsupported
                    version number, or a variant that doesn&apos;t match RFC 4122
                    (&quot;10&quot; in binary). The Validate tab lists the specific reason
                    for any input that fails.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I generate UUIDs in my programming language?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Most modern programming languages have built-in UUID
                    generation: JavaScript/Node.js uses crypto.randomUUID(),
                    Python has the uuid module (uuid.uuid4()), Java provides
                    java.util.UUID.randomUUID(), C# has Guid.NewGuid(), and Go
                    has github.com/google/uuid.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is this tool safe for generating production UUIDs?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    This tool generates RFC 4122 compliant UUIDs using your
                    browser&apos;s cryptographically secure random number generator
                    and runs entirely client-side — nothing you type or
                    generate is sent to a server. For high-volume production
                    systems, generate UUIDs server-side or in your application
                    code rather than manually copying from a web tool.
                  </p>
                </details>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Best Practices for Using UUIDs
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Choose the right version for your use case:</strong>{" "}
                    Use v4 (random) as your default for general-purpose unique
                    identifiers. Choose v7 or v1 when you need time-ordered IDs
                    for database indexing performance. Use v5 (or v3) when you
                    need deterministic IDs from namespaced inputs. Avoid v1 in
                    privacy-sensitive contexts where exposing MAC addresses is a
                    concern.
                  </p>
                  <p>
                    <strong>Understand storage implications:</strong> UUIDs are
                    128 bits (16 bytes), larger than integer IDs. Use native
                    UUID types when available (PostgreSQL UUID, SQL Server
                    UNIQUEIDENTIFIER) for optimal storage and indexing.
                  </p>
                  <p>
                    <strong>Generate UUIDs at the right layer:</strong>{" "}
                    Client-side generation (JavaScript, mobile apps) enables
                    offline functionality and reduces server round-trips.
                    Server-side generation ensures consistent generation quality
                    and reduces client-side code.
                  </p>
                  <p>
                    <strong>Use consistent formatting:</strong> Stick to the
                    canonical lowercase hyphenated format (8-4-4-4-12) for
                    storage, APIs, and display unless you have specific reasons
                    to use another format. Validate and normalize UUID input to
                    your chosen format to handle different client
                    representations.
                  </p>
                  <p>
                    <strong>Don&apos;t extract security from UUIDs:</strong> Never
                    use UUIDs for access control, authentication, or
                    authorization. They&apos;re identifiers, not security tokens.
                  </p>
                  <p>
                    <strong>Index strategically for performance:</strong> When
                    using random UUIDs (v4) as primary keys in high-write
                    databases, consider clustering or partitioning strategies to
                    mitigate index fragmentation. Time-ordered UUIDs (v7, v1)
                    have better locality for B-tree indexes.
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Details */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Technical Details & RFC 4122 Compliance
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    UUID Structure and Bit Layout
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    A UUID is 128 bits long, typically represented as 32
                    hexadecimal digits with hyphens:
                    xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx. The M position (4
                    bits) indicates version (1-5, 7). The N position&apos;s first 2-3
                    bits indicate variant (10 for RFC 4122).
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Collision Probability Mathematics
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The collision probability follows the birthday problem. For
                    v4 UUIDs with 122 random bits, the probability of at least
                    one collision after generating n UUIDs is approximately:
                    P(collision) ≈ 1 - e^(-n²/2^123). To reach a 50% collision
                    probability requires n ≈ 2.71 × 10¹⁸ UUIDs.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Shareable Links Feature
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    This tool supports pre-selecting a tab via ?tab=validate,
                    ?tab=decode, or ?tab=format (generate is the default), and
                    pre-selecting a UUID version on the Generate tab via
                    ?version=v1, ?version=v3, ?version=v4, ?version=v5,
                    ?version=v7, or ?version=nil. This enables sharing direct
                    links for documentation, tutorials, or team workflows.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Tools */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Related Tools
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href="/tools/timestamp-converter"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-gray-50 dark:group-hover:text-indigo-400">
                    Timestamp Converter
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Convert the Unix timestamp decoded from a v1 UUID into a
                    human-readable date
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
                    Generate MD5, SHA-1, and SHA-256 hashes for checksums and
                    data integrity
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
