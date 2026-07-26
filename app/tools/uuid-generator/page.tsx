import type { Metadata } from "next";
import { UuidGeneratorClient } from "./client";
import UuidLinks from "@/components/uuid-links";
import Breadcrumb from "@/components/breadcrumb";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "UUID (GUID) Generator",
  description:
    "Generate RFC-compliant UUIDs (GUIDs) (v1, v3, v4, v5, v7, NIL) with options and examples — shareable links via ?version=",
  keywords: [
    "uuid",
    "guid",
    "unique identifier",
    "generator",
    "v1",
    "v3",
    "v4",
    "v5",
    "v7",
  ],
  openGraph: {
    title: "UUID (GUID) Generator — Generate v1, v3, v4, v5, v7",
    description:
      "Generate RFC 4122 compliant UUIDs (GUIDs) instantly. Choose version, namespace and name for namespaced UUIDs, and copy shareable links (use `?version=v1`).",
    url: `${SITE_CONFIG.domain}/tools/uuid-generator`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `UUID (GUID) Generator — ${SITE_CONFIG.name}`,
    description:
      "Generate v1, v3, v4, v5, v7 UUIDs (GUIDs) in-browser. Share links using `?version=` to preselect the generator.",
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
        description="Generate RFC 4122 compliant UUIDs (GUIDs) in multiple versions (v1, v3, v4, v5, v7, NIL) for databases, APIs, and distributed systems"
        url="/tools/uuid-generator"
        keywords={[
          "uuid generator",
          "guid generator",
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
              instantly for use in databases, APIs, and applications
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
                  are deterministic based on namespace and name (v3, v5).
                  Understanding which version to use depends on your specific
                  requirements for randomness, ordering, determinism, and
                  collision resistance.
                </p>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for UUID Generation
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
                    round-trips. This improves security and scalability in
                    microservices architectures.
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
                    to guessing attacks, while their uniqueness ensures no two
                    sessions or transactions share the same ID across your
                    entire system.
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
                    server without conflicts. This pattern enables robust
                    offline functionality in Progressive Web Apps (PWAs) and
                    native mobile apps.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Deterministic Content Addressing
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Name-based UUIDs (v3/v5) generate consistent IDs from
                    namespace and name inputs, enabling content-addressable
                    storage, idempotency keys for API operations, cache keys
                    that remain consistent across servers, and deduplication by
                    hashing content to a deterministic identifier.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    File and Asset Management
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Cloud storage systems, CDNs, and content management systems
                    use UUIDs as filenames to prevent naming conflicts, organize
                    assets without filesystem limitations, and enable
                    distributed storage across multiple servers without central
                    coordination. UUIDs also prevent information disclosure
                    through predictable filenames.
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
                    suitable for security-sensitive contexts. Use v1 when you
                    need chronological ordering and don&apos;t require complete
                    randomness.
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
                    domain names, or other namespaced strings. While MD5 is
                    cryptographically weak, it&apos;s sufficient here since UUIDs
                    don&apos;t require cryptographic security— just uniqueness.
                    However, prefer v5 (SHA-1) for new applications.
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
                    collisions astronomically unlikely. V4 is simple to
                    generate, doesn&apos;t leak information about the system or time,
                    and works universally. Use v4 as your default choice unless
                    you specifically need ordering (v1/v7) or determinism
                    (v3/v5).
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Version 5 (SHA-1 Namespace-Based)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    UUID v5 works identically to v3 but uses SHA-1 instead of
                    MD5 for hashing the namespace and name. SHA-1 is
                    cryptographically stronger than MD5 (though also deprecated
                    for cryptographic purposes), making v5 the preferred choice
                    for name-based UUIDs in modern applications. Use v5 when you
                    need deterministic IDs from URLs, email addresses, DNS
                    names, or any namespaced identifier.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Version 7 (Time-Ordered with Random Data)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    UUID v7 is a modern format (proposed in the RFC 4122 update)
                    that places a Unix timestamp in milliseconds at the
                    beginning, followed by random data. This creates UUIDs that
                    are naturally sortable by creation time while maintaining
                    high randomness and collision resistance. V7 combines the
                    benefits of v1 (time-ordering for database indexing
                    performance) with v4 (randomness and privacy). Use v7 for
                    high-performance databases where insertion order matters.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    NIL UUID (All Zeros)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The NIL UUID (00000000-0000-0000-0000-000000000000) is a
                    special reserved value representing &quot;no UUID&quot; or an absent
                    identifier. It&apos;s used as a placeholder or default value in
                    situations where a UUID field is required but no meaningful
                    value exists yet. Never use NIL UUID as an actual identifier
                    for entities.
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
                    Windows, .NET, and SQL Server. The two terms are completely
                    interchangeable, though &quot;UUID&quot; is more common in
                    cross-platform contexts.
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
                    have a 50% chance of a single collision. To put this in
                    perspective: if you generated 1 billion UUIDs per second, it
                    would take about 86 years to reach a 50% collision
                    probability. In practice, UUID collisions are not a concern
                    for any real-world application.
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
                    deterministic IDs generated from namespaced names, like
                    creating consistent IDs from URLs or email addresses. Avoid
                    v1 if exposing MAC addresses is a privacy concern.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I use UUIDs as database primary keys?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, UUIDs are excellent primary keys for distributed
                    systems, though there are trade-offs. Benefits include:
                    generation without database round-trips, no collision risk
                    when merging datasets, non-sequential IDs that prevent
                    enumeration attacks, and easy sharding. Downsides include:
                    larger index size (16 bytes vs 4-8 for integers), potential
                    indexing performance issues with random UUIDs (use v1/v7 for
                    better locality), and less human-readable. Most modern
                    databases handle UUID primary keys efficiently.
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
                    authentication secrets. For security-sensitive purposes, use
                    dedicated cryptographic token generation (like
                    crypto.randomBytes() with 32+ bytes). UUIDs were designed
                    for uniqueness, not cryptographic security, though
                    properly-generated v4 UUIDs are resistant to guessing
                    attacks.
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
                    java.util.UUID.randomUUID(), C# has Guid.NewGuid(), PHP
                    offers uniqid() or ramsey/uuid library, and Go has
                    github.com/google/uuid. Always use your language&apos;s standard
                    library or well-maintained packages rather than implementing
                    UUID generation yourself.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can UUIDs be decoded to extract information?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    It depends on the version. UUID v1 embeds a timestamp and
                    node identifier (potentially MAC address) that can be
                    extracted, revealing when and where the UUID was generated.
                    UUID v3 and v5 are hashes, so the original namespace and
                    name cannot be reversed. UUID v4 is random data with no
                    embedded information. UUID v7 embeds a timestamp but not
                    machine information. Only decode v1 and v7 for timestamp
                    extraction; never rely on UUIDs as secure storage of data.
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
                    OID (for ISO OIDs), and X.500 (for X.500 DNs). For example,
                    generating a v5 UUID from the URL namespace and
                    &quot;https://example.com&quot; always produces the same UUID. You can
                    also create custom namespaces by generating a UUID to serve
                    as the namespace identifier for your application&apos;s
                    name-based UUIDs.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Should UUIDs be stored with or without hyphens?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Store UUIDs in whatever format your database optimizes for.
                    PostgreSQL has a native UUID type (stores 16 bytes
                    efficiently), MySQL can use BINARY(16) for compact storage
                    or CHAR(36) for hyphenated strings, and MongoDB supports
                    storing as Binary UUID subtype. The hyphenated canonical
                    format (36 characters) is human-readable and widely
                    compatible, while the compact format (32 hex digits) saves
                    space. Most modern databases handle both efficiently with
                    proper indexing.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is this tool safe for generating production UUIDs?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    This tool generates RFC 4122 compliant UUIDs using your
                    browser&apos;s cryptographically secure random number generator
                    (crypto.getRandomValues() or crypto.randomUUID()). The
                    generated UUIDs are suitable for production use. However,
                    for high-volume production systems, generate UUIDs
                    server-side or in your application code rather than manually
                    copying from a web tool. This tool is perfect for testing,
                    prototyping, or generating a few UUIDs for configuration or
                    database seeding.
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
                    UNIQUEIDENTIFIER) for optimal storage and indexing. For
                    databases without native support, store as BINARY(16) for
                    space efficiency or CHAR(36) for compatibility. Consider the
                    trade-off between random UUIDs (better security) and ordered
                    UUIDs (better indexing locality).
                  </p>
                  <p>
                    <strong>Generate UUIDs at the right layer:</strong>{" "}
                    Client-side generation (JavaScript, mobile apps) enables
                    offline functionality and reduces server round-trips.
                    Server-side generation ensures consistent generation quality
                    and reduces client-side code. Database-side generation
                    (using UUID functions) centralizes ID creation but couples
                    your data layer to the database. Choose based on your
                    architecture and offline requirements.
                  </p>
                  <p>
                    <strong>Use consistent formatting:</strong> Stick to the
                    canonical lowercase hyphenated format (8-4-4-4-12) for
                    storage, APIs, and display unless you have specific reasons
                    to use compact format. Consistent formatting prevents bugs
                    and makes debugging easier. Always validate and normalize
                    UUID input to your chosen format to handle different client
                    representations.
                  </p>
                  <p>
                    <strong>Don&apos;t extract security from UUIDs:</strong> Never
                    use UUIDs for access control, authentication, or
                    authorization. They&apos;re identifiers, not security tokens.
                    Don&apos;t parse v1 UUIDs to get timestamps for business
                    logic—use proper timestamp fields. Don&apos;t rely on UUID
                    randomness for cryptographic operations—use dedicated crypto
                    libraries.
                  </p>
                  <p>
                    <strong>Index strategically for performance:</strong> When
                    using random UUIDs (v4) as primary keys in high-write
                    databases, consider clustering or partitioning strategies to
                    mitigate index fragmentation. Time-ordered UUIDs (v7, v1)
                    have better locality for B-tree indexes. Monitor database
                    performance and consider using UUIDs as alternate keys with
                    integer primary keys if UUID indexing becomes a bottleneck.
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
                    bits indicate variant (10 for RFC 4122). This leaves 122
                    bits for data in v4 random UUIDs. The specific bit layout
                    varies by version—v1 encodes timestamp, clock sequence, and
                    node ID in specific positions, while v4 uses random bits
                    throughout except version and variant markers.
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
                    probability requires n ≈ 2.71 × 10¹⁸ UUIDs. Even generating
                    1 trillion UUIDs gives only a 0.0000000000005% collision
                    chance—negligible for any practical application.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Shareable Links Feature
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    This generator supports pre-selecting UUID versions via URL
                    query parameters: ?version=v1, ?version=v3, ?version=v4,
                    ?version=v5, ?version=v7, or ?version=nil. This enables
                    sharing direct links to specific UUID generation modes for
                    documentation, tutorials, or team workflows. The selected
                    version persists in the browser until changed, making it
                    easy to generate multiple UUIDs of the same type.
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
