import Breadcrumb from "@/components/breadcrumb";
import { TimestampConverterUI } from "./timestamp-converter-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Unix Timestamp Converter - Epoch Time to Date Converter",
  description:
    "Convert Unix timestamps to human-readable dates and vice versa. Supports seconds, milliseconds, microseconds, and nanoseconds. Live epoch time clock with timezone conversion.",
  keywords: [
    "unix timestamp",
    "epoch converter",
    "timestamp to date",
    "date to timestamp",
    "epoch time",
    "unix time",
    "milliseconds converter",
    "timezone converter",
    "utc time",
  ],
  openGraph: {
    title: "Unix Timestamp Converter — Epoch Time to Date",
    description:
      "Convert Unix timestamps to human-readable dates instantly. Supports multiple formats and timezones. Live epoch clock included.",
    url: `${SITE_CONFIG.domain}/tools/timestamp-converter`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `Unix Timestamp Converter — ${SITE_CONFIG.name}`,
    description:
      "Convert Unix timestamps to dates and vice versa. Live epoch clock with timezone support.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/timestamp-converter`,
  },
};

export default function TimestampConverterPage() {
  return (
    <>
      <ToolSchema
        name="Unix Timestamp Converter"
        description="Convert Unix timestamps to human-readable dates and vice versa with millisecond support and timezone formatting"
        url="/tools/timestamp-converter"
        keywords={[
          "timestamp converter",
          "unix timestamp",
          "epoch converter",
          "date converter",
          "unix time",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Unix Timestamp Converter
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Convert Unix timestamps to human-readable dates and vice versa.
              Supports seconds, milliseconds, and multiple timezones. All
              processing happens in your browser for complete privacy.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <TimestampConverterUI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is Unix Timestamp */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is a Unix Timestamp?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  A Unix timestamp (also called Epoch time, POSIX time, or Unix
                  time) is a system for tracking time as a running total of
                  seconds. It counts the number of seconds that have elapsed
                  since the Unix Epoch: January 1, 1970 at 00:00:00 UTC
                  (Coordinated Universal Time). This specific moment is also
                  known as the &quot;birth of Unix time&quot; and serves as the reference
                  point for all Unix timestamp calculations.
                </p>
                <p>
                  The Unix timestamp system was originally developed for Unix
                  operating systems, hence the name, but it has since become a
                  universal standard adopted across virtually all modern
                  computing platforms, programming languages, and databases. The
                  beauty of Unix timestamps lies in their simplicity: a single
                  integer represents an exact moment in time, making them
                  incredibly efficient for storage, comparison, and computation.
                </p>
                <p>
                  Unlike human-readable date formats that vary by locale,
                  language, and timezone, Unix timestamps are completely
                  unambiguous and universal. Whether you&apos;re in New York, Tokyo,
                  or Sydney, the Unix timestamp 1701388800 represents exactly
                  the same moment in time for everyone. This universality makes
                  Unix timestamps essential for distributed systems,
                  international applications, and any software that needs to
                  handle time consistently across different locations.
                </p>
                <p>
                  One important characteristic of Unix timestamps is that they
                  don&apos;t account for leap seconds—small adjustments made to keep
                  atomic time synchronized with Earth&apos;s rotation. This means
                  Unix time assumes every day has exactly 86,400 seconds, which
                  simplifies calculations but means Unix time can drift slightly
                  from actual solar time over long periods.
                </p>
              </div>
            </section>

            {/* Timestamp Formats */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Understanding Different Timestamp Formats
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-cyan-200 bg-cyan-50/50 p-6 dark:border-cyan-800 dark:bg-cyan-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Seconds (10 digits)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    The standard Unix timestamp format counting seconds since
                    the Unix Epoch. This is the most common format, used by most
                    Unix systems, Linux, macOS, and many programming languages
                    like Python, PHP, and C.
                  </p>
                  <div className="rounded-lg border border-cyan-200 bg-white p-3 font-mono text-sm dark:border-cyan-800 dark:bg-gray-900">
                    Example: 1701388800
                  </div>
                </div>
                <div className="rounded-xl border border-cyan-200 bg-cyan-50/50 p-6 dark:border-cyan-800 dark:bg-cyan-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Milliseconds (13 digits)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    JavaScript&apos;s native timestamp format, counting milliseconds
                    since the Unix Epoch. Used extensively in web development,
                    Node.js, and any JavaScript-based applications. Provides
                    millisecond precision.
                  </p>
                  <div className="rounded-lg border border-cyan-200 bg-white p-3 font-mono text-sm dark:border-cyan-800 dark:bg-gray-900">
                    Example: 1701388800000
                  </div>
                </div>
                <div className="rounded-xl border border-cyan-200 bg-cyan-50/50 p-6 dark:border-cyan-800 dark:bg-cyan-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Microseconds (16 digits)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    High-precision timestamps counting microseconds (millionths
                    of a second) since the Unix Epoch. Used in performance
                    monitoring, high-frequency trading systems, and scientific
                    applications requiring precise timing.
                  </p>
                  <div className="rounded-lg border border-cyan-200 bg-white p-3 font-mono text-sm dark:border-cyan-800 dark:bg-gray-900">
                    Example: 1701388800000000
                  </div>
                </div>
                <div className="rounded-xl border border-cyan-200 bg-cyan-50/50 p-6 dark:border-cyan-800 dark:bg-cyan-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Nanoseconds (19 digits)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Ultra-high precision timestamps counting nanoseconds
                    (billionths of a second) since the Unix Epoch. Essential for
                    distributed systems, real-time trading, and applications
                    requiring nanosecond-level timing accuracy.
                  </p>
                  <div className="rounded-lg border border-cyan-200 bg-white p-3 font-mono text-sm dark:border-cyan-800 dark:bg-gray-900">
                    Example: 1701388800000000000
                  </div>
                </div>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for Unix Timestamps
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Database Storage and Queries
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Databases use Unix timestamps to store date and time
                    information efficiently. They&apos;re perfect for sorting
                    chronological records, calculating time differences, and
                    performing date-based queries. Most SQL databases (MySQL,
                    PostgreSQL, SQLite) and NoSQL databases (MongoDB, Redis)
                    support Unix timestamps natively, making them ideal for
                    created_at, updated_at, and expires_at fields.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    API Responses and Data Exchange
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    RESTful APIs and data exchange formats (JSON, XML)
                    frequently use Unix timestamps to represent dates. They
                    eliminate timezone confusion and ambiguity in international
                    applications. Since Unix timestamps are just integers,
                    they&apos;re easy to serialize, deserialize, and validate across
                    different systems and programming languages.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Session Management and Authentication
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Web applications use Unix timestamps to manage user
                    sessions, JWT tokens, and authentication expiration times.
                    The exp (expiration) claim in JSON Web Tokens (JWT) uses
                    Unix timestamps to determine when a token should no longer
                    be accepted. Cookie expiration, cache invalidation, and
                    temporary access links also rely on Unix timestamps.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Logging and Monitoring Systems
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Server logs, application logs, and monitoring systems
                    timestamp every event using Unix time. This enables precise
                    troubleshooting, performance analysis, and correlation of
                    events across distributed systems. Log aggregation tools
                    like Elasticsearch, Splunk, and CloudWatch all use Unix
                    timestamps for indexing and time-series analysis.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Scheduled Tasks and Cron Jobs
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Task schedulers, cron jobs, and background workers use Unix
                    timestamps to schedule future execution, track last run
                    times, and calculate intervals between executions. Whether
                    you&apos;re scheduling email campaigns, database backups, or
                    automated reports, Unix timestamps provide reliable
                    scheduling across different timezones.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Cache Invalidation and TTL
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Caching systems like Redis, Memcached, and CDN edge servers
                    use Unix timestamps to implement Time-To-Live (TTL)
                    mechanisms. They determine when cached data should expire
                    and be refreshed. HTTP headers like Expires and
                    Last-Modified also use timestamp formats derived from Unix
                    time for browser cache control.
                  </p>
                </div>
              </div>
            </section>

            {/* Year 2038 Problem */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                The Year 2038 Problem (Y2038)
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  The Year 2038 problem (also called Y2K38 or the Unix
                  Millennium Bug) is a critical issue affecting systems that
                  store Unix timestamps as signed 32-bit integers. On January
                  19, 2038 at 03:14:07 UTC, the Unix timestamp will reach
                  2,147,483,647—the maximum value for a signed 32-bit integer.
                  One second later, the timestamp will overflow and wrap around
                  to -2,147,483,648, representing December 13, 1901.
                </p>
                <p>
                  This overflow will cause catastrophic failures in any system
                  still using 32-bit timestamps. Applications might incorrectly
                  sort events, fail to process future dates, crash entirely, or
                  produce completely nonsensical results. Financial systems
                  could miscalculate interest, IoT devices might malfunction,
                  embedded systems in vehicles and infrastructure could fail,
                  and historical records could be corrupted.
                </p>
                <p>
                  The solution is to migrate to 64-bit timestamps, which can
                  represent dates far into the future (until the year
                  292,277,026,596). Modern operating systems, databases, and
                  programming languages have already made this transition.
                  However, legacy systems, embedded devices, firmware, and older
                  software still need updates before 2038.
                </p>
                <p>
                  Unlike the Y2K bug which was primarily a display issue, Y2038
                  is a fundamental arithmetic overflow that will break actual
                  functionality. Organizations should audit their systems now,
                  especially IoT devices, industrial control systems, medical
                  equipment, and any hardware with long lifecycles that might
                  still be in use by 2038.
                </p>
              </div>
            </section>

            {/* Date Format Standards */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Date Format Standards
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    ISO 8601 (International Standard)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    The international standard for representing dates and times,
                    designed to reduce ambiguity and confusion. Format:
                    YYYY-MM-DDTHH:mm:ss.sssZ where Z indicates UTC timezone.
                    This is the recommended format for data exchange and
                    storage.
                  </p>
                  <div className="rounded-lg border border-cyan-200 bg-cyan-50/50 p-3 font-mono text-sm dark:border-cyan-800 dark:bg-cyan-950/20">
                    Example: 2024-12-01T12:00:00.000Z
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    RFC 2822 (Email and HTTP Headers)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Used in email headers (Date field) and HTTP headers. More
                    human-readable than ISO 8601 but less precise. Includes
                    abbreviated day name, month, and timezone offset. Common in
                    SMTP and HTTP protocols.
                  </p>
                  <div className="rounded-lg border border-cyan-200 bg-cyan-50/50 p-3 font-mono text-sm dark:border-cyan-800 dark:bg-cyan-950/20">
                    Example: Mon, 01 Dec 2024 12:00:00 +0000
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    RFC 3339 (Internet Timestamp)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    A profile of ISO 8601 specifically for Internet protocols.
                    Similar to ISO 8601 but with stricter formatting rules and
                    explicit timezone handling. Widely used in JSON APIs, OAuth,
                    and modern web services.
                  </p>
                  <div className="rounded-lg border border-cyan-200 bg-cyan-50/50 p-3 font-mono text-sm dark:border-cyan-800 dark:bg-cyan-950/20">
                    Example: 2024-12-01T12:00:00+00:00
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
                    How do I get the current Unix timestamp?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    In JavaScript:{" "}
                    <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
                      Math.floor(Date.now() / 1000)
                    </code>{" "}
                    for seconds or{" "}
                    <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
                      Date.now()
                    </code>{" "}
                    for milliseconds. In Python:{" "}
                    <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
                      import time; time.time()
                    </code>
                    . In PHP:{" "}
                    <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
                      time()
                    </code>
                    . In MySQL:{" "}
                    <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
                      SELECT UNIX_TIMESTAMP()
                    </code>
                    . All return the current Unix timestamp in seconds (except
                    JavaScript Date.now which returns milliseconds).
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why does my timestamp have 13 digits instead of 10?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    A 13-digit timestamp represents milliseconds since the Unix
                    Epoch, which is the native format used by JavaScript&apos;s Date
                    object. The standard Unix timestamp has 10 digits (seconds).
                    To convert milliseconds to seconds, divide by 1000. To
                    convert seconds to milliseconds, multiply by 1000. Our tool
                    automatically detects the format based on the number of
                    digits and converts accordingly.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Do Unix timestamps include timezone information?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No, Unix timestamps are always in UTC (Coordinated Universal
                    Time) and don&apos;t store timezone information. They represent
                    an absolute point in time that&apos;s the same everywhere in the
                    world. When converting to human-readable dates, you need to
                    specify the timezone for display purposes. This is why
                    1701388800 represents the exact same moment for everyone,
                    but might display as &quot;Dec 1, 2023 00:00:00&quot; in UTC, &quot;Nov 30,
                    2023 19:00:00&quot; in New York (EST), or &quot;Dec 1, 2023 09:00:00&quot;
                    in Tokyo (JST).
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can Unix timestamps be negative?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, negative Unix timestamps represent dates before the
                    Unix Epoch (January 1, 1970). For example, -86400 represents
                    December 31, 1969 00:00:00 UTC. Many programming languages
                    and systems support negative timestamps for historical
                    dates, though some older systems only support positive
                    values. Be cautious when working with dates before 1970, as
                    not all systems handle negative timestamps consistently.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How accurate are Unix timestamps?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Standard Unix timestamps (in seconds) are accurate to 1
                    second. Millisecond timestamps provide accuracy to 1/1000th
                    of a second. For applications requiring higher precision,
                    use microsecond (1/1,000,000th) or nanosecond
                    (1/1,000,000,000th) timestamps. However, note that actual
                    system clock accuracy depends on hardware, NTP
                    synchronization, and operating system capabilities. Most
                    servers maintain accuracy within milliseconds using NTP
                    (Network Time Protocol).
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What&apos;s the difference between Unix time and UTC time?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Unix time is a numeric representation (seconds since Epoch),
                    while UTC (Coordinated Universal Time) is the timezone
                    standard and time scale. Unix timestamps are always based on
                    UTC—they count seconds since January 1, 1970 00:00:00 UTC.
                    When you convert a Unix timestamp to a human-readable date,
                    you can display it in any timezone, but the underlying
                    timestamp always references UTC as its basis.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why do some timestamps fail to convert?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Common reasons include: (1) The number is too large or too
                    small to represent a valid date, (2) You&apos;re using the wrong
                    format (seconds vs milliseconds), (3) The timestamp
                    represents a date outside the supported range (typically
                    1970-2100), (4) There are non-numeric characters in the
                    input, or (5) The date string format isn&apos;t recognized. Try
                    checking if you need to divide or multiply by 1000 to
                    convert between seconds and milliseconds.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Do Unix timestamps account for leap seconds?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No, Unix time does not account for leap seconds. It assumes
                    every day has exactly 86,400 seconds. When a leap second
                    occurs (added to keep atomic time synchronized with Earth&apos;s
                    rotation), Unix time essentially &quot;repeats&quot; a second or
                    pauses briefly. This design decision was made to keep Unix
                    time calculations simple and predictable. For applications
                    requiring precise astronomical time, you need specialized
                    time libraries that handle leap seconds explicitly.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is this timestamp converter free to use?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, this Unix timestamp converter is completely free with
                    no limitations, registration requirements, or usage fees.
                    Convert as many timestamps as you need for personal or
                    commercial projects. All conversions happen entirely in your
                    browser using JavaScript—no data is sent to our servers,
                    ensuring complete privacy and security. You can even use the
                    tool offline once the page is loaded.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What date formats can I enter for conversion to timestamp?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Our converter accepts most common date formats including:
                    ISO 8601 (2024-12-01, 2024-12-01T12:00:00Z), US format
                    (12/1/2024, 12-1-2024), European format (1/12/2024,
                    1.12.2024), written format (December 1, 2024, Dec 1 2024, 1
                    Dec 2024), and combined formats with time (2024-12-01
                    12:00:00, Dec 1, 2024 12:00 PM). The tool uses JavaScript&apos;s
                    Date.parse() which is very flexible, but for best results
                    use ISO 8601 format (YYYY-MM-DD).
                  </p>
                </details>
              </div>
            </section>

            {/* Programming Examples */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Programming Examples
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    JavaScript / TypeScript
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Get current timestamp:
                      </div>
                      <pre className="overflow-x-auto rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-950">
                        <code>{`const seconds = Math.floor(Date.now() / 1000);
const milliseconds = Date.now();`}</code>
                      </pre>
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Convert timestamp to date:
                      </div>
                      <pre className="overflow-x-auto rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-950">
                        <code>{`const date = new Date(1701388800 * 1000);
console.log(date.toISOString());`}</code>
                      </pre>
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Convert date to timestamp:
                      </div>
                      <pre className="overflow-x-auto rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-950">
                        <code>{`const timestamp = Math.floor(new Date('2024-12-01').getTime() / 1000);`}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Python
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Get current timestamp:
                      </div>
                      <pre className="overflow-x-auto rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-950">
                        <code>{`import time
timestamp = int(time.time())`}</code>
                      </pre>
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Convert timestamp to date:
                      </div>
                      <pre className="overflow-x-auto rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-950">
                        <code>{`from datetime import datetime
date = datetime.fromtimestamp(1701388800)
print(date.isoformat())`}</code>
                      </pre>
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Convert date to timestamp:
                      </div>
                      <pre className="overflow-x-auto rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-950">
                        <code>{`from datetime import datetime
dt = datetime(2024, 12, 1)
timestamp = int(dt.timestamp())`}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    PHP
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Get current timestamp:
                      </div>
                      <pre className="overflow-x-auto rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-950">
                        <code>{`$timestamp = time();`}</code>
                      </pre>
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Convert timestamp to date:
                      </div>
                      <pre className="overflow-x-auto rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-950">
                        <code>{`$date = date('Y-m-d H:i:s', 1701388800);`}</code>
                      </pre>
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Convert date to timestamp:
                      </div>
                      <pre className="overflow-x-auto rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-950">
                        <code>{`$timestamp = strtotime('2024-12-01');`}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    SQL Databases
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        MySQL - Get current timestamp:
                      </div>
                      <pre className="overflow-x-auto rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-950">
                        <code>{`SELECT UNIX_TIMESTAMP();`}</code>
                      </pre>
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        MySQL - Convert timestamp to date:
                      </div>
                      <pre className="overflow-x-auto rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-950">
                        <code>{`SELECT FROM_UNIXTIME(1701388800);`}</code>
                      </pre>
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        PostgreSQL - Get current timestamp:
                      </div>
                      <pre className="overflow-x-auto rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-950">
                        <code>{`SELECT EXTRACT(EPOCH FROM NOW());`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Tools */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Related Developer Tools
              </h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Explore other data conversion and developer tools to streamline
                your workflow:
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
