import Breadcrumb from "@/components/breadcrumb";
import { GradientGeneratorUI } from "./gradient-generator-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "CSS Gradient Generator - Linear, Radial & Conic Gradients",
  description:
    "Create beautiful CSS gradients with our free online gradient generator. Choose from 45+ preset gradients or create custom linear, radial, and conic gradients. Export to CSS, SCSS, Tailwind, JSON, and SVG formats. Perfect for web design and development.",
  keywords: [
    "gradient generator",
    "css gradient",
    "linear gradient",
    "radial gradient",
    "conic gradient",
    "gradient maker",
    "color gradient",
    "gradient tool",
    "tailwind gradient",
    "gradient css",
    "gradient background",
    "gradient design",
    "web gradient",
    "gradient export",
    "gradient presets",
  ],
  openGraph: {
    title:
      "CSS Gradient Generator — Create Beautiful Gradients with 45+ Presets",
    description:
      "Free CSS gradient generator with linear, radial, and conic gradients. Export to CSS, Tailwind, SCSS, JSON, and SVG. 45+ preset gradients included.",
    url: `${SITE_CONFIG.domain}/tools/gradient-generator`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `CSS Gradient Generator — ${SITE_CONFIG.name}`,
    description:
      "Create stunning CSS gradients with 45+ presets. Export to CSS, Tailwind, and more. Free online tool.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/gradient-generator`,
  },
};

export default function GradientGeneratorPage() {
  return (
    <>
      <ToolSchema
        name="CSS Gradient Generator"
        description="Create beautiful CSS gradients with 45+ presets. Generate linear, radial, and conic gradients with custom colors"
        url="/tools/gradient-generator"
        keywords={[
          "gradient generator",
          "css gradient",
          "linear gradient",
          "radial gradient",
          "gradient maker",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              CSS Gradient Generator
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Create stunning CSS gradients with 45+ beautiful presets or design
              your own custom linear, radial, and conic gradients. Export to
              CSS, SCSS, Tailwind, JSON, and SVG formats. All processing happens
              in your browser for complete privacy.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <GradientGeneratorUI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is a CSS Gradient */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is a CSS Gradient?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  CSS gradients are smooth transitions between two or more
                  colors, created entirely with CSS without requiring image
                  files. Gradients add depth, visual interest, and modern
                  aesthetics to web designs while maintaining fast load times
                  and crisp displays at any screen resolution. Unlike images,
                  CSS gradients are scalable, lightweight, and can be easily
                  modified with code.
                </p>
                <p>
                  Modern web browsers support three types of gradients: linear
                  (transitions along a straight line), radial (transitions
                  radiating from a center point), and conic (transitions
                  rotating around a center point). Each type offers unique
                  visual effects perfect for different design needs—from subtle
                  background textures to bold, eye-catching hero sections.
                </p>
                <p>
                  Gradients have become essential in modern web design, used by
                  major brands like Instagram, Stripe, and Spotify. They create
                  visual hierarchy, guide user attention, add dimension to flat
                  design, and establish memorable brand identities. Our
                  generator provides 45+ professionally designed preset
                  gradients plus a custom editor to create exactly what you
                  envision.
                </p>
                <p>
                  Whether you&apos;re building a website, designing a landing page,
                  creating marketing materials, or developing a web application,
                  gradients offer an elegant way to enhance your design without
                  sacrificing performance. All gradients generated by this tool
                  are production-ready CSS code that works across all modern
                  browsers.
                </p>
              </div>
            </section>

            {/* Types of Gradients */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Types of CSS Gradients
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-6 dark:border-rose-800 dark:bg-rose-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Linear Gradients
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Linear gradients create smooth color transitions along a
                    straight line. You control the direction using angles
                    (0-360°) or directional keywords (to top, to right, etc.).
                    Perfect for backgrounds, headers, buttons, and creating
                    depth. Most versatile and commonly used gradient type in web
                    design. Works beautifully for hero sections and card
                    backgrounds.
                  </p>
                </div>
                <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-6 dark:border-rose-800 dark:bg-rose-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Radial Gradients
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Radial gradients emanate from a center point and spread
                    outward in a circular or elliptical pattern. Ideal for
                    spotlights, glowing effects, vignettes, and creating focal
                    points. Great for call-to-action buttons, badges, and
                    drawing attention to specific elements. Can simulate
                    lighting effects and add dimension to flat designs.
                  </p>
                </div>
                <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-6 dark:border-rose-800 dark:bg-rose-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Conic Gradients
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Conic gradients rotate colors around a center point,
                    creating a sweeping, pie-like effect. Perfect for creating
                    progress indicators, pie charts, color wheels, and unique
                    geometric patterns. Less common but incredibly effective for
                    specific use cases. Excellent for data visualization and
                    creating modern, distinctive designs.
                  </p>
                </div>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for CSS Gradients
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-6 dark:border-rose-800 dark:bg-rose-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Hero Sections & Backgrounds
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Create eye-catching hero sections that immediately grab
                    visitor attention. Gradients add depth and visual interest
                    to large background areas without requiring heavy image
                    files. Combine with text overlays for effective landing
                    pages. Perfect for full-width headers, section dividers, and
                    establishing visual hierarchy. Sunset and ocean gradients
                    are particularly popular for this use.
                  </p>
                </div>
                <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-6 dark:border-rose-800 dark:bg-rose-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Buttons & Interactive Elements
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Make buttons and CTAs stand out with vibrant gradient
                    backgrounds. Add hover effects that shift or intensify
                    gradients for engaging interactions. Gradient buttons feel
                    modern, premium, and clickable. Combine with subtle shadows
                    and transitions for polished, professional interfaces.
                    Particularly effective for primary actions and
                    conversion-focused elements.
                  </p>
                </div>
                <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-6 dark:border-rose-800 dark:bg-rose-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Cards & Content Containers
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Enhance cards, pricing tables, and content blocks with
                    subtle gradient backgrounds. Use soft, pastel gradients for
                    elegant, professional looks or vibrant gradients for bold,
                    energetic designs. Gradients add sophistication to product
                    showcases, testimonial cards, and feature sections. Layer
                    semi-transparent gradients over images for better text
                    readability.
                  </p>
                </div>
                <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-6 dark:border-rose-800 dark:bg-rose-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Text & Typography Effects
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Apply gradients to text using background-clip for stunning
                    headline effects. Create Instagram-style gradient text that
                    grabs attention. Perfect for logos, headings, and
                    emphasizing key messages. Gradient text adds a modern,
                    premium feel to typography. Works exceptionally well for
                    brands targeting creative or tech-savvy audiences.
                  </p>
                </div>
                <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-6 dark:border-rose-800 dark:bg-rose-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Overlays & Image Masks
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Layer semi-transparent gradients over photos to improve text
                    contrast and readability. Create dramatic vignette effects,
                    fade images to solid colors, or add color tints for cohesive
                    design. Perfect for photo galleries, background images with
                    text overlays, and maintaining brand colors across varied
                    imagery. Essential for accessible, readable hero sections.
                  </p>
                </div>
                <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-6 dark:border-rose-800 dark:bg-rose-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Borders & Decorative Elements
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Create gradient borders, dividers, and decorative accents
                    that add subtle sophistication. Use as progress bars,
                    loading indicators, or separator lines between sections.
                    Gradient borders on cards and containers add premium, modern
                    touches. Particularly effective for dark mode interfaces
                    where subtle color variations create depth.
                  </p>
                </div>
              </div>
            </section>

            {/* How to Use Gradients in CSS */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                How to Use Gradients in Your CSS
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Basic Linear Gradient Syntax
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    The simplest linear gradient transitions between two colors
                    at a specified angle:
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-gray-50 p-4 font-mono text-sm text-gray-900 dark:bg-gray-950 dark:text-gray-100">
                    {`.element {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
}`}
                  </pre>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The angle (90deg) sets the direction. 0deg points up, 90deg
                    points right, 180deg points down, 270deg points left. You
                    can also use keywords like &quot;to right&quot;, &quot;to bottom&quot;, etc.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Multiple Color Stops
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Add multiple colors at specific positions for complex
                    gradients:
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-gray-50 p-4 font-mono text-sm text-gray-900 dark:bg-gray-950 dark:text-gray-100">
                    {`.element {
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 50%,
    #f093fb 100%
  );
}`}
                  </pre>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Position values (0%, 50%, 100%) control where each color
                    appears. Omit positions for even distribution, or specify
                    exact positions for precise control.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Radial Gradient Syntax
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Radial gradients radiate from a center point:
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-gray-50 p-4 font-mono text-sm text-gray-900 dark:bg-gray-950 dark:text-gray-100">
                    {`.element {
  background: radial-gradient(circle, #667eea 0%, #764ba2 100%);
}`}
                  </pre>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Use &quot;circle&quot; for circular gradients or &quot;ellipse&quot; for
                    elliptical ones. You can also specify size (closest-side,
                    farthest-corner, etc.) and position (at center, at top left,
                    etc.).
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Gradient Text Effect
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Apply gradients to text for eye-catching typography:
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-gray-50 p-4 font-mono text-sm text-gray-900 dark:bg-gray-950 dark:text-gray-100">
                    {`.gradient-text {
  background: linear-gradient(90deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`}
                  </pre>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The background-clip property clips the gradient to the text
                    shape, creating the gradient text effect. Widely supported
                    in modern browsers.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Layering Multiple Gradients
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Combine multiple gradients for complex effects:
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-gray-50 p-4 font-mono text-sm text-gray-900 dark:bg-gray-950 dark:text-gray-100">
                    {`.element {
  background: 
    linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
    linear-gradient(135deg, #667eea, #764ba2);
}`}
                  </pre>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Layer semi-transparent gradients for overlays, combine
                    different gradient types, or create intricate patterns.
                    Separate each gradient with a comma.
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
                    Are CSS gradients better than gradient images?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, CSS gradients have several advantages: they&apos;re scalable
                    (look crisp at any resolution), lightweight (no HTTP
                    requests), easily modified with code, animatable, and
                    accessibility-friendly. Images are only better for complex
                    photographic gradients or textures that can&apos;t be reproduced
                    with CSS. For most web design use cases, CSS gradients are
                    the superior choice.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I create a gradient that fades to transparent?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Use RGBA or HSLA color values where the alpha channel
                    controls transparency. For example: linear-gradient(to
                    bottom, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 0) 100%)
                    creates a red gradient that fades to fully transparent. This
                    is perfect for image overlays and fade effects. You can also
                    use the &quot;transparent&quot; keyword, though RGBA gives you more
                    control.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I animate CSS gradients?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Direct gradient animation isn&apos;t well-supported, but you can
                    achieve animated gradient effects using several techniques:
                    animate the background-position of a larger gradient, use
                    opacity transitions between multiple gradient layers,
                    animate gradient colors using CSS custom properties, or use
                    pseudo-elements with transitions. For complex animations,
                    consider using CSS animations with keyframes or JavaScript
                    libraries.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What&apos;s the browser support for CSS gradients?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    CSS gradients are supported in all modern browsers (Chrome,
                    Firefox, Safari, Edge) without prefixes. Older browsers (IE
                    10 and below) require vendor prefixes (-webkit-, -moz-, -o-)
                    or may not support gradients at all. For maximum
                    compatibility, our generator provides clean, modern CSS that
                    works in 99%+ of browsers used today. If you need to support
                    very old browsers, consider providing a solid color
                    fallback.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I use gradients in Tailwind CSS?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Tailwind CSS 3.0+ includes gradient utilities out of the
                    box. Use classes like bg-gradient-to-r (right),
                    bg-gradient-to-br (bottom right), from-blue-500,
                    via-purple-500, to-pink-500 to create gradients. For custom
                    gradients, add them to your tailwind.config.js theme
                    extension. Our export feature provides Tailwind-ready code
                    you can paste directly into your configuration. You can also
                    use arbitrary values with square brackets.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How many color stops should I use in a gradient?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Most effective gradients use 2-3 color stops. Two-color
                    gradients are clean and versatile. Three-color gradients add
                    more visual interest. Using 4+ stops can create beautiful
                    effects but may look busy or overwhelming if not carefully
                    designed. For subtle, professional results, stick with 2-3
                    colors with good contrast. You can always add more stops for
                    specific artistic effects or to match brand guidelines.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What angle should I use for my gradient?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Popular angles include 90deg (left to right), 180deg (top to
                    bottom), 45deg and 135deg (diagonal). Diagonal gradients
                    (45deg, 135deg, 225deg, 315deg) often feel more dynamic and
                    modern than straight vertical or horizontal gradients. The
                    &quot;right&quot; angle depends on your design context—experiment to
                    see what feels best. Many designers prefer 135deg as it
                    creates natural-feeling shadows and depth.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I use gradients for borders?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes! Create gradient borders using the border-image property
                    or by using a wrapper element with padding and background
                    clip. A common technique: create a container with the
                    gradient background, add padding equal to your desired
                    border width, and set the inner element&apos;s background to
                    match your page background. Gradient borders add
                    sophisticated, modern touches to cards, buttons, and
                    containers.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I make sure text is readable over gradients?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Ensure sufficient contrast between text and the
                    darkest/lightest parts of your gradient. Use our Color
                    Picker tool to check contrast ratios (minimum 4.5:1 for
                    normal text). Add semi-transparent dark or light overlays
                    between the gradient and text. Use text shadows for
                    additional readability. Test with real content—what looks
                    good with short headings may not work with longer
                    paragraphs. Consider using white text on dark gradients or
                    dark text on light gradients.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I export gradients for use in design software?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes! Use our SVG export option to create gradient files that
                    work in Figma, Sketch, Adobe Illustrator, and other design
                    tools. You can also copy the color codes and manually
                    recreate the gradient in your design software. The JSON
                    export provides all gradient information (colors, positions,
                    angles) in a structured format that can be parsed
                    programmatically or used as a reference for manual
                    implementation.
                  </p>
                </details>
              </div>
            </section>

            {/* Gradient Design Tips */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Gradient Design Best Practices
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Choose Related Colors:</strong> Gradients work best
                    when colors share similar hues or saturation levels. Avoid
                    jarring color combinations unless intentionally creating
                    high-contrast effects. Analogous colors (adjacent on the
                    color wheel) create harmonious gradients.
                  </p>
                  <p>
                    <strong>Consider Color Theory:</strong> Warm colors (reds,
                    oranges, yellows) create energy and urgency. Cool colors
                    (blues, greens, purples) feel calming and professional.
                    Complement your brand personality and content with
                    appropriate color temperatures.
                  </p>
                  <p>
                    <strong>Test Across Devices:</strong> Gradients may appear
                    differently on various screens due to color calibration and
                    display technology. Test on multiple devices to ensure your
                    gradient looks good everywhere. What looks perfect on your
                    Retina display might appear banded on lower-quality screens.
                  </p>
                  <p>
                    <strong>Use Subtle Gradients for Backgrounds:</strong> For
                    large background areas, subtle gradients (slight color
                    variations) often work better than dramatic color shifts.
                    They add depth without overwhelming content or competing
                    with foreground elements.
                  </p>
                  <p>
                    <strong>Match Your Brand:</strong> Ensure gradient colors
                    align with your brand guidelines. Lock your brand colors in
                    our custom editor and experiment with complementary colors
                    that enhance your identity while maintaining consistency.
                  </p>
                  <p>
                    <strong>Consider Dark Mode:</strong> If your site supports
                    dark mode, test gradients in both light and dark themes. You
                    may need different gradients or opacity adjustments for each
                    mode to maintain readability and visual impact.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Tools */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Related Tools
              </h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Explore other color and design tools to enhance your workflow:
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <a
                  href="/tools/color-palettes"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-rose-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-rose-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-rose-600 dark:text-gray-50 dark:group-hover:text-rose-400">
                    Color Palette Generator
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Generate harmonious color palettes for your gradient
                    projects
                  </p>
                </a>
                <a
                  href="/tools/color-picker"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-pink-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-pink-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-pink-600 dark:text-gray-50 dark:group-hover:text-pink-400">
                    Color Picker & Converter
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pick and convert colors for your gradient stops
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
                    Format and validate exported gradient JSON data
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
