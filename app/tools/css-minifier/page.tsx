import type { Metadata } from "next";
import CSSMinifierUI from "./css-minifier-ui";
import Breadcrumb from "@/components/breadcrumb";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "CSS Minifier/Beautifier - Minify & Format CSS Online",
  description:
    "Free online CSS minifier and beautifier. Minify CSS to reduce file size or beautify for readability. Instant formatting with comment preservation options. No data is sent to any server - all processing happens in your browser.",
  keywords: [
    "css minifier",
    "css beautifier",
    "css formatter",
    "minify css",
    "beautify css",
    "compress css",
    "css optimizer",
    "format css",
    "prettify css",
    "css compressor",
    "online css tool",
  ],
  openGraph: {
    title: "CSS Minifier/Beautifier — Minify & Format CSS Online",
    description:
      "Minify CSS to reduce file size or beautify for readability with instant formatting, comment preservation options, and zero data transmission.",
    url: `${SITE_CONFIG.domain}/tools/css-minifier`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `CSS Minifier/Beautifier — ${SITE_CONFIG.name}`,
    description:
      "Minify CSS to reduce file size or beautify for readability. All processing happens in your browser.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/css-minifier`,
  },
};

export default function CSSMinifierPage() {
  return (
    <>
      <ToolSchema
        name="CSS Minifier/Beautifier"
        description="Minify CSS to reduce file size or beautify for readability with instant formatting and comment preservation"
        url="/tools/css-minifier"
        keywords={[
          "css minifier",
          "css beautifier",
          "minify css",
          "css formatter",
          "css optimizer",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              CSS Minifier/Beautifier
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Minify CSS to reduce file size or beautify for readability with
              instant formatting, comment preservation options, and zero data
              transmission. All processing happens in your browser for complete
              privacy.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <CSSMinifierUI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is CSS Minification */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is CSS Minification?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  CSS minification is the process of removing unnecessary
                  characters from CSS code without changing its functionality.
                  This includes eliminating whitespace, line breaks, comments,
                  and shortening color codes and values where possible. The
                  result is a significantly smaller file that loads faster but
                  performs identically to the original.
                </p>
                <p>
                  Modern websites often include hundreds of kilobytes of CSS
                  code across multiple stylesheets. Every byte matters when it
                  comes to page load speed, which directly impacts user
                  experience, SEO rankings, and conversion rates. Minification
                  typically reduces CSS file size by 20-40%, resulting in faster
                  page loads and reduced bandwidth costs.
                </p>
                <p>
                  CSS beautification, on the other hand, is the reverse
                  process—adding proper indentation, line breaks, and spacing to
                  make minified or poorly formatted CSS readable and
                  maintainable. This is essential during development, debugging,
                  and code review processes where human readability is
                  paramount.
                </p>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for CSS Minification
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6 dark:border-teal-800 dark:bg-teal-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Production Website Optimization
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Minify CSS files before deploying to production to reduce
                    page load times and bandwidth usage. Faster load times
                    improve user experience, reduce bounce rates, and boost SEO
                    rankings. Every 100ms of improvement can increase conversion
                    rates by 1%.
                  </p>
                </div>
                <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6 dark:border-teal-800 dark:bg-teal-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Build Process Integration
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Integrate minification into your build pipeline with tools
                    like Webpack, Gulp, or npm scripts. Automatically minify CSS
                    during production builds while keeping development versions
                    readable. This ensures optimal performance without
                    sacrificing developer experience.
                  </p>
                </div>
                <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6 dark:border-teal-800 dark:bg-teal-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Debugging Third-Party CSS
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Beautify minified CSS from third-party libraries, CDNs, or
                    legacy code to understand how styles are applied. Proper
                    formatting makes it easier to debug layout issues, override
                    styles, and learn from existing code.
                  </p>
                </div>
                <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6 dark:border-teal-800 dark:bg-teal-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Email Template Optimization
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Email clients often have size limits for HTML emails.
                    Minifying inline CSS in email templates reduces file size
                    while maintaining styling. This is crucial for newsletters
                    and transactional emails where every byte counts against
                    size limits.
                  </p>
                </div>
                <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6 dark:border-teal-800 dark:bg-teal-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Mobile App Performance
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Hybrid mobile apps and Progressive Web Apps benefit
                    significantly from minified CSS. Smaller CSS files mean
                    faster initial loads on mobile networks, reduced data usage
                    for users on limited plans, and improved performance on
                    lower-end devices.
                  </p>
                </div>
                <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6 dark:border-teal-800 dark:bg-teal-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Code Review and Learning
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Beautify CSS before code reviews to ensure consistency and
                    readability. Well-formatted CSS makes it easier for team
                    members to spot issues, suggest improvements, and learn best
                    practices from existing codebases.
                  </p>
                </div>
              </div>
            </section>

            {/* Features Explanation */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Minification & Beautification Features
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Minify CSS
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Removes all unnecessary whitespace, line breaks, and
                    indentation while optionally preserving important comments.
                    Colors are shortened (e.g., #ffffff becomes #fff), and zero
                    values are optimized. The result is the smallest possible
                    CSS file that functions identically to the original,
                    typically reducing file size by 20-40%.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Beautify CSS
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Formats CSS with proper indentation, line breaks, and
                    spacing for maximum readability. Each selector and property
                    is placed on its own line with consistent indentation. This
                    makes code easier to read, debug, and maintain, especially
                    when working with minified or poorly formatted stylesheets.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Comment Preservation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Choose whether to keep or remove comments during
                    minification. Important comments (like copyright notices or
                    license information) can be preserved using special syntax
                    (/*! comment */), while development comments are removed to
                    reduce file size. This gives you control over what
                    documentation remains in production code.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Instant Processing
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    All minification and beautification happens instantly in
                    your browser using JavaScript. No server uploads, no waiting
                    for processing, no file size limits. Process files of any
                    size without privacy concerns, as your CSS never leaves your
                    device. Works offline once the page is loaded.
                  </p>
                </div>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                CSS Minification Best Practices
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>
                      Automate minification in your build process:
                    </strong>{" "}
                    Don&apos;t minify manually for every deployment. Use build tools
                    like Webpack, Vite, Parcel, or PostCSS to automatically
                    minify CSS during production builds. This ensures
                    consistency and prevents human error.
                  </p>
                  <p>
                    <strong>Keep source files separate:</strong> Never edit
                    minified files directly. Maintain readable source CSS files
                    for development and generate minified versions for
                    production. Use source maps to debug minified CSS in browser
                    developer tools.
                  </p>
                  <p>
                    <strong>Combine with other optimizations:</strong>{" "}
                    Minification works best when combined with HTTP compression
                    (gzip/brotli), CSS concatenation (combining multiple files),
                    and removing unused CSS with tools like PurgeCSS. Together,
                    these can reduce CSS payload by 70-90%.
                  </p>
                  <p>
                    <strong>Test after minification:</strong> Always test your
                    website after minifying CSS to ensure nothing broke. While
                    minification shouldn&apos;t change functionality, complex CSS
                    with nested selectors or vendor prefixes can sometimes
                    produce unexpected results.
                  </p>
                  <p>
                    <strong>Preserve important comments:</strong> Use /*!
                    comment */ syntax for comments that must remain in
                    production (licenses, attributions, important warnings).
                    Regular /* comment */ comments will be stripped during
                    minification.
                  </p>
                  <p>
                    <strong>Optimize images and fonts separately:</strong>{" "}
                    Minifying CSS is just one part of web performance
                    optimization. Also optimize images, use modern formats
                    (WebP, AVIF), subset fonts, and implement lazy loading for
                    comprehensive performance improvements.
                  </p>
                  <p>
                    <strong>Monitor file size savings:</strong> Track the file
                    size reduction from minification in your build process.
                    Significant increases in minified size can indicate code
                    bloat that should be refactored. Aim for at least 20-30%
                    reduction from minification alone.
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Details */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                How CSS Minification Works
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Whitespace Removal
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Minification removes all unnecessary spaces, tabs, and line
                    breaks that don&apos;t affect CSS functionality. CSS is parsed
                    into tokens, and only required spaces (like those between
                    selectors or values) are preserved. This typically accounts
                    for 10-20% of file size reduction.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Value Optimization
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Colors are shortened (e.g., #ffffff → #fff, #aabbcc → #abc),
                    zero values have units removed (0px → 0), decimal places are
                    optimized (0.5 → .5), and redundant values in shorthands are
                    eliminated (margin: 10px 10px → margin: 10px). These
                    micro-optimizations add up significantly in large
                    stylesheets.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Comment Stripping
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    All standard comments (/* comment */) are removed unless
                    they use the special preserve syntax (/*! comment */).
                    Comments can account for 5-15% of CSS file size in
                    well-documented codebases. Removing them reduces payload
                    without affecting functionality.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Browser Compatibility
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    This tool preserves all CSS functionality including vendor
                    prefixes (-webkit-, -moz-, -ms-), CSS custom properties
                    (variables), media queries, @import rules, and modern CSS
                    features. Minification is purely textual and doesn&apos;t modify
                    how browsers interpret your styles.
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
                    Will minifying CSS break my website?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No, proper CSS minification only removes whitespace and
                    comments while preserving all functionality. The minified
                    CSS behaves identically to the original. However, always
                    test after minification to ensure your minifier correctly
                    handles edge cases like complex selectors, data URIs, or
                    special characters. Use source maps for debugging minified
                    CSS.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How much can CSS minification reduce file size?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Typical CSS minification reduces file size by 20-40%
                    depending on the original formatting, comment density, and
                    coding style. Well-commented and nicely formatted CSS will
                    see larger reductions. When combined with gzip/brotli
                    compression, the total size reduction can reach 70-80%. A
                    100KB CSS file might minify to 60-70KB and compress to
                    20-25KB for transmission.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Should I minify CSS for development or only production?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Only minify CSS for production. Development environments
                    should use readable, well-formatted CSS for easier
                    debugging, code review, and collaboration. Use automated
                    build processes to minify during production builds. Most
                    modern frameworks (Next.js, Vite, Create React App) handle
                    this automatically in production mode.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is CSS minification the same as compression?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No, they&apos;re different but complementary. Minification
                    removes unnecessary characters from the source code itself,
                    creating a smaller file. Compression (gzip/brotli) applies
                    an algorithm during transmission to further reduce size. Use
                    both: minify your CSS files, then enable HTTP compression on
                    your web server for maximum size reduction. Together they&apos;re
                    far more effective than either alone.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I un-minify (beautify) minified CSS perfectly?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Beautification can make minified CSS readable again, but
                    won&apos;t restore the original formatting perfectly. Comments
                    are permanently removed during minification and can&apos;t be
                    recovered. Beautifiers add consistent indentation and line
                    breaks based on CSS syntax, but the original developer&apos;s
                    formatting choices are lost. Always keep unminified source
                    files.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What about CSS-in-JS and styled-components?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    CSS-in-JS solutions like styled-components, Emotion, or CSS
                    Modules typically handle minification automatically in
                    production builds. The generated CSS is minified at build
                    time or runtime. You generally don&apos;t need to manually minify
                    CSS from these tools. However, this tool can be useful for
                    debugging the generated output.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Does minification affect CSS specificity or cascade order?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No, minification preserves the exact order and structure of
                    CSS rules, so specificity and cascade behavior remain
                    unchanged. Only whitespace and comments are removed—the
                    actual CSS syntax, selector order, and property declarations
                    stay identical. This ensures your styles apply exactly the
                    same before and after minification.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is my CSS safe using this tool?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Absolutely. All minification and beautification happens
                    entirely in your browser using JavaScript. No CSS code is
                    ever sent to our servers or any third party. You can even
                    use this tool offline once the page is loaded. Your CSS,
                    including proprietary styles, framework code, or sensitive
                    class names, remains completely private on your device.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What tools should I use for automated minification?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    For production workflows, use build tools: Vite and Parcel
                    minify automatically, Webpack with
                    css-minimizer-webpack-plugin, PostCSS with cssnano, Gulp
                    with gulp-clean-css, or npm scripts with clean-css-cli.
                    These integrate into your build process and handle
                    minification consistently. This online tool is perfect for
                    quick one-off minification, debugging, or learning.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Does CSS minification improve SEO?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Indirectly, yes. Google uses page load speed as a ranking
                    factor, and faster-loading pages rank better. Minified CSS
                    reduces file size, leading to faster page loads, improved
                    Core Web Vitals scores (especially LCP and FID), and better
                    mobile performance. Combined with other optimizations, this
                    can positively impact search rankings and user engagement
                    metrics.
                  </p>
                </details>
              </div>
            </section>

            {/* Performance Impact */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Performance Impact of CSS Minification
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Reduced bandwidth costs:</strong> For websites
                    serving millions of page views, reducing CSS file size by
                    30% translates directly to lower bandwidth costs. A site
                    serving 1 million pages per month with 200KB of CSS saves
                    60GB of bandwidth monthly with minification.
                  </p>
                  <p>
                    <strong>Faster mobile performance:</strong> Mobile users on
                    3G/4G networks particularly benefit from smaller CSS files.
                    A 50KB reduction in CSS size can improve page load time by
                    200-500ms on slower connections, significantly improving
                    perceived performance and user experience.
                  </p>
                  <p>
                    <strong>Improved Core Web Vitals:</strong> Smaller CSS files
                    contribute to better Largest Contentful Paint (LCP) scores
                    by reducing render-blocking resources. This directly impacts
                    Google&apos;s page experience ranking signals and can improve
                    search visibility.
                  </p>
                  <p>
                    <strong>Reduced parse time:</strong> While the savings are
                    small, minified CSS also parses slightly faster because the
                    browser has fewer characters to process. This
                    microsecond-level improvement adds up across thousands of
                    DOM updates and style recalculations.
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
                Explore other tools to optimize and enhance your web development
                workflow:
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <a
                  href="/tools/json-formatter"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-gray-50 dark:group-hover:text-blue-400">
                    JSON Formatter
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Format and minify JSON data for APIs and configuration files
                  </p>
                </a>
                <a
                  href="/tools/base64"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-green-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-green-600 dark:text-gray-50 dark:group-hover:text-green-400">
                    Base64 / URL / HTML Encoder
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Encode HTML special characters for safe display in web pages
                  </p>
                </a>
                <a
                  href="/tools/color-picker"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-pink-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-pink-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-pink-600 dark:text-gray-50 dark:group-hover:text-pink-400">
                    Color Picker
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pick and convert CSS colors between HEX, RGB, and HSL
                    formats
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
