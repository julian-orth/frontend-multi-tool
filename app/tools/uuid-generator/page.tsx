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
                  in Microsoft terminology, is a 128-bit value standardized by
                  RFC 4122 that&apos;s unique across systems without needing central
                  coordination. It&apos;s typically written as 32 hex digits in five
                  hyphenated groups (8-4-4-4-12), e.g.
                  550e8400-e29b-41d4-a716-446655440000. UUIDs come in several
                  versions — random (v4), time-ordered (v1, v7), and
                  deterministic namespace-based (v3, v5) — and this tool lets
                  you generate, validate, decode, and reformat any of them.
                </p>
              </div>
            </section>

            {/* Quick Facts */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Quick Facts
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Most common versions:</strong> v4 (fully random,
                    the default choice) and v7 (time-ordered, great for
                    database index locality); v1/v3/v5 cover MAC-based,
                    MD5-namespace, and SHA-1-namespace use cases.
                  </li>
                  <li>
                    <strong>Format:</strong> canonical form is 8-4-4-4-12
                    lowercase hex with hyphens (36 chars); compact (no
                    hyphens), URN (urn:uuid:...), and braced ({`{...}`}) forms
                    are also supported by the Format tab.
                  </li>
                  <li>
                    <strong>Common uses:</strong> database primary keys, REST
                    API resource identifiers, session/transaction IDs, and
                    offline-generated client-side IDs.
                  </li>
                  <li>
                    <strong>Collision risk:</strong> for v4, astronomically
                    low — you&apos;d need ~2.71 quintillion UUIDs for a 50% chance
                    of a single collision.
                  </li>
                  <li>
                    <strong>Best practice:</strong> use v4 by default, v7/v1
                    when insertion order matters, v5 for deterministic
                    namespaced IDs, and never use UUIDs as security or auth
                    tokens.
                  </li>
                  <li>
                    <strong>Shareable links:</strong> pre-select a tab via
                    ?tab=validate|decode|format and a version via
                    ?version=v1|v3|v4|v5|v7|nil.
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
                    What&apos;s the difference between UUID and GUID?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                    They&apos;re the same thing — a 128-bit identifier standardized
                    by RFC 4122. &quot;UUID&quot; is the standard term; &quot;GUID&quot; is
                    Microsoft&apos;s terminology for it.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-6">
                  <summary className="cursor-pointer text-base font-semibold text-gray-900 dark:text-gray-50 sm:text-lg">
                    Which UUID version should I use?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                    Use v4 (random) by default. Choose v7 or v1 when you need
                    time-ordered IDs for database indexing, and v5 (or v3) for
                    deterministic IDs from namespaced names.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-6">
                  <summary className="cursor-pointer text-base font-semibold text-gray-900 dark:text-gray-50 sm:text-lg">
                    How likely are UUID collisions?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                    For v4 (random) UUIDs, extremely unlikely — you&apos;d need to
                    generate about 2.71 quintillion of them to have a 50%
                    chance of a single collision.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-6">
                  <summary className="cursor-pointer text-base font-semibold text-gray-900 dark:text-gray-50 sm:text-lg">
                    Can I use UUIDs as database primary keys?
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-base">
                    Yes — they avoid coordination and merge conflicts, though
                    they take more index space (16 bytes) than integers. Use
                    v1/v7 instead of v4 for better index locality.
                  </p>
                </details>
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
