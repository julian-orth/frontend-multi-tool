import Breadcrumb from "@/components/breadcrumb";
import type { Metadata } from "next";
import { JsonFormatterClient } from "./client";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator",
  description:
    "Format, validate, minify, and beautify JSON data online. Features include syntax highlighting, error detection, key sorting, and multiple indentation options.",
  keywords: [
    "json",
    "formatter",
    "validator",
    "beautifier",
    "minify",
    "pretty print",
    "json lint",
    "syntax",
  ],
  openGraph: {
    title: "JSON Formatter & Validator — Format, Validate & Beautify JSON",
    description:
      "Online JSON formatter and validator with advanced features: beautify, minify, validate, sort keys, and detect errors with line numbers.",
    url: `${SITE_CONFIG.domain}/tools/json-formatter`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `JSON Formatter & Validator — ${SITE_CONFIG.name}`,
    description:
      "Format, validate, and minify JSON with detailed error detection and multiple formatting options.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/json-formatter`,
  },
};

export default function JsonFormatterPage() {
  return (
    <>
      <ToolSchema
        name="JSON Formatter & Validator"
        description="Format, validate, minify, and beautify JSON data online with advanced error detection and formatting options"
        url="/tools/json-formatter"
        keywords={[
          "json formatter",
          "json validator",
          "json beautifier",
          "json minifier",
          "json lint",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-black dark:text-white">
              JSON Formatter & Validator
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Format, validate, minify, and beautify JSON data with advanced
              error detection and formatting options
            </p>
          </div>

          <JsonFormatterClient />

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is JSON?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  JSON (JavaScript Object Notation) is a lightweight, text-based
                  data interchange format that is easy for humans to read and
                  write, and easy for machines to parse and generate. Despite
                  its name being derived from JavaScript, JSON is completely
                  language-independent and supported by virtually every modern
                  programming language through native functions or libraries.
                </p>
                <p>
                  Originally specified by Douglas Crockford in the early 2000s,
                  JSON has become the de facto standard for data exchange on the
                  web. It has largely replaced XML for web APIs due to its
                  simpler syntax, smaller payload size, and native support in
                  JavaScript, making it ideal for AJAX applications and RESTful
                  APIs.
                </p>
                <p>
                  JSON is built on two universal data structures: objects
                  (collections of name-value pairs) and arrays (ordered lists of
                  values). This simplicity makes JSON extremely versatile—it can
                  represent complex hierarchical data structures while remaining
                  human-readable and easy to debug. From configuration files to
                  API responses, database exports to state management, JSON has
                  become ubiquitous in modern software development.
                </p>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for JSON
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    API Development & Integration
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    RESTful APIs use JSON as the primary data format for request
                    and response payloads. Format API responses to debug
                    integration issues, validate request payloads before
                    sending, and ensure proper data structure. JSON&apos;s
                    lightweight nature and native JavaScript support make it
                    perfect for web APIs and microservices communication.
                  </p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Configuration Files
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Modern applications use JSON for configuration: package.json
                    for Node.js projects, tsconfig.json for TypeScript,
                    settings.json for VS Code, and countless other tools. Format
                    and validate these files to catch syntax errors early and
                    maintain consistent formatting across your project.
                  </p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Database Operations
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    NoSQL databases like MongoDB use JSON-like documents for
                    data storage. Export data from databases in JSON format for
                    backups, migrations, or analysis. Format database queries
                    and results to understand data structures and troubleshoot
                    issues in database operations.
                  </p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Data Exchange & Migration
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Transfer data between systems, applications, or services
                    using JSON. Import/export data from spreadsheets, migrate
                    between different database systems, or exchange information
                    between front-end and back-end applications. JSON&apos;s
                    universal support makes it ideal for cross-platform data
                    exchange.
                  </p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Frontend State Management
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Redux stores, Vuex state, React Context, and other state
                    management solutions serialize application state as JSON.
                    Debug state changes, persist state to localStorage, or share
                    state snapshots for debugging. Well-formatted JSON makes
                    state inspection and time-travel debugging much easier.
                  </p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Logging & Analytics
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Structured logging systems output logs in JSON format for
                    easy parsing and analysis. Format log entries to
                    troubleshoot application issues, validate log structure
                    before sending to log aggregation services like
                    Elasticsearch or Splunk, and ensure consistent logging
                    across microservices.
                  </p>
                </div>
              </div>
            </section>

            {/* JSON Syntax Rules */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                JSON Syntax Rules & Specifications
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Basic Structure
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    JSON data must follow strict formatting rules to be valid:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>Objects:</strong> Enclosed in curly braces {"{}"}{" "}
                      with name-value pairs separated by commas. Keys must be
                      strings in double quotes.
                    </li>
                    <li>
                      <strong>Arrays:</strong> Enclosed in square brackets []
                      with values separated by commas. Can contain any JSON data
                      type.
                    </li>
                    <li>
                      <strong>Strings:</strong> Must use double quotes (&quot;), not
                      single quotes. Special characters must be escaped with
                      backslash.
                    </li>
                    <li>
                      <strong>Numbers:</strong> Can be integers or
                      floating-point. Scientific notation is supported (e.g.,
                      1.2e+3).
                    </li>
                    <li>
                      <strong>Booleans:</strong> Lowercase true or false without
                      quotes.
                    </li>
                    <li>
                      <strong>Null:</strong> Lowercase null represents an empty
                      value.
                    </li>
                    <li>
                      <strong>No trailing commas:</strong> The last item in
                      objects or arrays cannot have a trailing comma.
                    </li>
                    <li>
                      <strong>No comments:</strong> JSON specification doesn&apos;t
                      allow comments (unlike JavaScript objects).
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Valid JSON Example
                  </h3>
                  <pre className="overflow-x-auto rounded-lg bg-gray-50 p-4 text-sm dark:bg-gray-950">
                    <code className="text-gray-900 dark:text-gray-100">{`{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "country": "USA"
  },
  "hobbies": ["reading", "coding", "hiking"],
  "isActive": true,
  "balance": 1234.56,
  "metadata": null
}`}</code>
                  </pre>
                </div>
              </div>
            </section>

            {/* Features Explanation */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Formatter Features Explained
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Format & Beautify
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Transform minified or poorly formatted JSON into
                    human-readable format with proper indentation and line
                    breaks. Choose between 2, 3, or 4 spaces for indentation
                    based on your project&apos;s coding standards. Proper formatting
                    makes JSON much easier to read, understand, and maintain,
                    especially for complex nested structures.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Validate & Debug
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Instantly validate JSON syntax and receive detailed error
                    messages with exact line and column numbers. Common errors
                    like trailing commas, unquoted keys, single quotes, or
                    missing brackets are immediately identified. This saves
                    significant debugging time and prevents deployment issues
                    caused by malformed JSON in configuration files or API
                    payloads.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Minify for Production
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Remove all whitespace, line breaks, and unnecessary
                    characters to reduce file size. Minified JSON loads faster
                    over networks and reduces bandwidth costs, making it ideal
                    for production environments. A 100KB formatted JSON file
                    might minify to 70-80KB, significantly improving API
                    response times and reducing data transfer costs.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Sort Keys Alphabetically
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Alphabetically sort object keys for improved readability and
                    consistency. This makes it easier to find specific
                    properties in large JSON objects and enables better version
                    control diffs by reducing irrelevant changes caused by
                    inconsistent key ordering. Sorted JSON is especially useful
                    for configuration files that are maintained by multiple
                    developers.
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
                    What&apos;s the difference between JSON and JavaScript objects?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    While JSON syntax is based on JavaScript object notation,
                    they&apos;re not identical. JSON requires double quotes for all
                    keys and string values, doesn&apos;t support trailing commas,
                    cannot contain functions or undefined values, and doesn&apos;t
                    allow comments. JavaScript objects are more flexible,
                    allowing single quotes, unquoted keys, trailing commas,
                    functions, and comments. Think of JSON as a strict subset of
                    JavaScript object notation designed specifically for data
                    exchange.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why does my JSON have a syntax error?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The most common JSON errors are: trailing commas after the
                    last item, using single quotes instead of double quotes,
                    forgetting to quote object keys, missing commas between
                    items, unclosed brackets or braces, and invalid escape
                    sequences. Our formatter provides detailed error messages
                    with line and column numbers to help you quickly identify
                    and fix these issues. Copy your JSON into the formatter to
                    see exactly what needs to be corrected.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I add comments to JSON?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No, the JSON specification doesn&apos;t support comments. If you
                    need documentation within your JSON data, you can add a
                    special key like &quot;_comment&quot; or &quot;description&quot; with string
                    values. Some tools support JSON5 or JSONC (JSON with
                    Comments) which allow comments, but these are not standard
                    JSON and won&apos;t work with most JSON parsers. For
                    configuration files that need comments, consider using YAML,
                    TOML, or your language&apos;s native configuration format.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I escape special characters in JSON strings?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    JSON strings must escape certain special characters using
                    backslash: \\ for backslash, \&quot; for double quote, \n for
                    newline, \r for carriage return, \t for tab, \b for
                    backspace, \f for form feed, and \uXXXX for Unicode
                    characters. For example, to include a quote in a string, use
                    &quot;He said \&quot;Hello\&quot;&quot;. Proper escaping ensures your JSON
                    remains valid and displays correctly when parsed.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is my data safe when using this formatter?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, completely safe. All JSON formatting, validation, and
                    processing happens entirely in your browser using
                    JavaScript. No data is ever transmitted to our servers,
                    stored in databases, or shared with third parties. You can
                    even disconnect from the internet after loading the page and
                    the formatter will continue to work. This makes it safe to
                    format sensitive data like API keys, configuration secrets,
                    or proprietary data structures.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Should I use minified JSON in production?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, for APIs and data transfer, minified JSON reduces file
                    size by 20-30%, improving load times and reducing bandwidth
                    costs. However, keep formatted versions for development and
                    debugging. Use minification as part of your build process,
                    not manually. For configuration files on servers, formatting
                    matters less than correctness, so choose what&apos;s more
                    maintainable for your team.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can JSON represent all data types?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    JSON supports six data types: objects, arrays, strings,
                    numbers, booleans, and null. It cannot directly represent
                    dates (use ISO 8601 strings), functions (not serializable),
                    undefined (use null), circular references (will cause
                    errors), NaN or Infinity (use null or strings), or binary
                    data (use Base64 encoding). For complex data types, you&apos;ll
                    need to serialize them to JSON-compatible formats and
                    deserialize them on the receiving end.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What indentation size should I use?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    This depends on your project&apos;s coding standards. 2 spaces is
                    compact and widely used in modern web development (default
                    for Prettier). 4 spaces provides better visual separation
                    and is common in enterprise projects. 3 spaces is less
                    common. Choose what your team uses consistently across your
                    codebase. Most importantly, be consistent—mixing indentation
                    styles causes version control conflicts and reduces
                    readability.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I handle large JSON files?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Our formatter handles reasonably large files (several
                    megabytes), but very large files (10MB+) may slow down or
                    crash your browser. For extremely large JSON files,
                    consider: streaming parsers that process data in chunks,
                    command-line tools like jq for large-scale processing, or
                    database imports instead of in-browser formatting. For web
                    applications, paginate or chunk large JSON responses instead
                    of sending everything at once.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I use this formatter programmatically?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    This is a browser-based tool designed for manual use. For
                    programmatic JSON formatting, use your programming
                    language&apos;s built-in functions: JSON.stringify() in
                    JavaScript, json.dumps() in Python, json_encode() in PHP, or
                    JSON.Marshal() in Go. For command-line formatting, use jq
                    (Unix/Linux/Mac) or integrate Prettier into your build
                    process for automated formatting across your entire project.
                  </p>
                </details>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                JSON Best Practices
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Use consistent naming conventions:</strong> Choose
                    either camelCase (common in JavaScript), snake_case (common
                    in Python), or kebab-case and stick with it throughout your
                    JSON structure. Consistency makes your data easier to work
                    with and reduces confusion.
                  </p>
                  <p>
                    <strong>Validate before deploying:</strong> Always validate
                    JSON configuration files, API responses, and data exports
                    before deployment. Invalid JSON causes runtime errors that
                    can crash applications or APIs. Use automated validation in
                    your CI/CD pipeline.
                  </p>
                  <p>
                    <strong>Keep nesting reasonable:</strong> While JSON
                    supports deep nesting, structures more than 3-4 levels deep
                    become hard to read and maintain. Consider flattening your
                    structure or using references to other objects instead of
                    deep nesting.
                  </p>
                  <p>
                    <strong>Use appropriate data types:</strong> Don&apos;t quote
                    numbers or booleans unnecessarily. Use null for missing
                    values instead of empty strings or zero. Represent dates as
                    ISO 8601 strings (YYYY-MM-DDTHH:mm:ss.sssZ) for consistency
                    across timezones.
                  </p>
                  <p>
                    <strong>Document your schema:</strong> For complex JSON
                    structures, maintain documentation or use JSON Schema to
                    define the expected structure, data types, and validation
                    rules. This helps other developers understand and correctly
                    use your JSON data.
                  </p>
                  <p>
                    <strong>Compress for transmission:</strong> Use HTTP
                    compression (gzip, brotli) when sending JSON over networks.
                    This typically reduces JSON size by 70-80%, much more
                    effective than just minification. Most web servers and HTTP
                    clients support this automatically.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Tools */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Related Developer Tools
              </h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Explore other data formatting and validation tools to streamline
                your development workflow:
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
                    Encode JSON data to Base64 for transmission or storage
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
                    Decode and format JSON payloads from JWT tokens
                  </p>
                </a>
                <a
                  href="/tools/url-encoder"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-orange-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-orange-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-orange-600 dark:text-gray-50 dark:group-hover:text-orange-400">
                    URL Encoder/Decoder
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    URL-encode JSON for API query parameters
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
