import Breadcrumb from "@/components/breadcrumb";
import { ColorPickerUI } from "./color-picker-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Color Picker & Converter - HEX, RGB, HSL Color Tool",
  description:
    "Free online color picker with instant conversion between HEX, RGB, HSL, RGBA, and HSLA formats. Generate color palettes, check WCAG contrast ratios, and explore color theory.",
  keywords: [
    "color picker",
    "hex to rgb",
    "rgb to hsl",
    "color converter",
    "color palette generator",
    "complementary colors",
    "wcag contrast",
    "accessibility",
    "color theory",
  ],
  openGraph: {
    title: "Color Picker & Converter — HEX, RGB, HSL Conversion Tool",
    description:
      "Free color picker with instant format conversion, palette generation, and WCAG contrast checking. Perfect for designers and developers.",
    url: `${SITE_CONFIG.domain}/tools/color-picker`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `Color Picker & Converter — ${SITE_CONFIG.name}`,
    description:
      "Pick colors and convert between HEX, RGB, HSL formats. Generate palettes and check accessibility. Free tool.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/color-picker`,
  },
};

export default function ColorPickerPage() {
  return (
    <>
      <ToolSchema
        name="Color Picker & Converter"
        description="Pick colors and convert between HEX, RGB, HSL formats with WCAG contrast checking and palette generation"
        url="/tools/color-picker"
        keywords={[
          "color picker",
          "hex to rgb",
          "color converter",
          "wcag contrast",
          "color palette",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Color Picker & Converter
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Pick colors, convert between formats (HEX, RGB, HSL), generate
              palettes, and check accessibility contrast ratios. All processing
              happens in your browser for complete privacy.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <ColorPickerUI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is a Color Picker */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is a Color Picker?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  A color picker is an essential tool for designers, developers,
                  and digital creators that allows you to select, identify, and
                  convert colors between different formats. Whether you&apos;re
                  designing a website, creating graphics, or developing an
                  application, choosing the right colors is crucial for
                  aesthetics, branding, and user experience.
                </p>
                <p>
                  Modern color pickers go beyond simple selection—they provide
                  instant conversion between color formats, generate harmonious
                  color palettes based on color theory, and even check
                  accessibility compliance by calculating contrast ratios
                  according to WCAG (Web Content Accessibility Guidelines)
                  standards.
                </p>
                <p>
                  Our color picker supports all major web color formats: HEX
                  (hexadecimal), RGB (Red-Green-Blue), HSL
                  (Hue-Saturation-Lightness), and their alpha channel variants
                  RGBA and HSLA. This makes it perfect for CSS styling, design
                  systems, and any project requiring precise color
                  specifications.
                </p>
              </div>
            </section>

            {/* Color Formats Explained */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Understanding Color Formats
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-pink-200 bg-pink-50/50 p-6 dark:border-pink-800 dark:bg-pink-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    HEX (Hexadecimal)
                  </h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    Format: <code className="font-mono">#RRGGBB</code>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    The most common format in web design, HEX colors use six
                    hexadecimal digits to represent red, green, and blue values
                    (00-FF for each). Example: #3B82F6 represents a vibrant
                    blue. It&apos;s compact, easy to copy, and universally supported
                    in CSS and HTML.
                  </p>
                </div>
                <div className="rounded-xl border border-pink-200 bg-pink-50/50 p-6 dark:border-pink-800 dark:bg-pink-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    RGB (Red, Green, Blue)
                  </h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    Format: <code className="font-mono">rgb(R, G, B)</code>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    RGB uses three decimal values (0-255) for red, green, and
                    blue channels. Example: rgb(59, 130, 246). This format is
                    more intuitive for understanding color composition and is
                    the native format for digital displays. RGBA adds an alpha
                    channel for transparency (0-1).
                  </p>
                </div>
                <div className="rounded-xl border border-pink-200 bg-pink-50/50 p-6 dark:border-pink-800 dark:bg-pink-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    HSL (Hue, Saturation, Lightness)
                  </h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    Format: <code className="font-mono">hsl(H, S%, L%)</code>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    HSL represents colors using hue (0-360°), saturation
                    (0-100%), and lightness (0-100%). Example: hsl(217, 91%,
                    60%). This format is excellent for creating color
                    variations—adjusting saturation makes colors more or less
                    vibrant, while changing lightness creates tints and shades.
                  </p>
                </div>
                <div className="rounded-xl border border-pink-200 bg-pink-50/50 p-6 dark:border-pink-800 dark:bg-pink-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Alpha Channel (Transparency)
                  </h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    Formats: <code className="font-mono">rgba(), hsla()</code>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    The alpha channel adds transparency to RGB and HSL colors,
                    with values from 0 (fully transparent) to 1 (fully opaque).
                    Example: rgba(59, 130, 246, 0.5) creates a semi-transparent
                    blue. This is essential for overlays, shadows, and modern UI
                    design.
                  </p>
                </div>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for Color Pickers
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-pink-200 bg-pink-50/50 p-6 dark:border-pink-800 dark:bg-pink-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Web Development & CSS
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Quickly find and convert colors for CSS styling. Copy HEX,
                    RGB, or HSL values directly into your stylesheets. Perfect
                    for theming, custom properties (CSS variables), and
                    maintaining consistent design systems across your web
                    applications.
                  </p>
                </div>
                <div className="rounded-xl border border-pink-200 bg-pink-50/50 p-6 dark:border-pink-800 dark:bg-pink-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Brand Identity & Design Systems
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Create cohesive brand color palettes with complementary,
                    analogous, or triadic color schemes. Generate lighter and
                    darker variations for buttons, backgrounds, and interactive
                    states. Ensure consistency across all brand materials and
                    digital products.
                  </p>
                </div>
                <div className="rounded-xl border border-pink-200 bg-pink-50/50 p-6 dark:border-pink-800 dark:bg-pink-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Accessibility Compliance
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Check WCAG contrast ratios to ensure text is readable for
                    users with visual impairments. Our tool calculates contrast
                    ratios and indicates whether color combinations meet AA or
                    AAA standards, helping you create accessible interfaces that
                    comply with legal requirements.
                  </p>
                </div>
                <div className="rounded-xl border border-pink-200 bg-pink-50/50 p-6 dark:border-pink-800 dark:bg-pink-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    UI/UX Design
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Select colors for buttons, links, backgrounds, and
                    interactive elements. Use palette generators to create
                    harmonious color schemes that enhance user experience.
                    Export colors in formats compatible with Figma, Sketch,
                    Adobe XD, and other design tools.
                  </p>
                </div>
                <div className="rounded-xl border border-pink-200 bg-pink-50/50 p-6 dark:border-pink-800 dark:bg-pink-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Digital Art & Graphics
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Pick precise colors for illustrations, icons, infographics,
                    and digital artwork. Convert between formats to match the
                    requirements of different software. Use the alpha channel to
                    create transparent elements and layered compositions.
                  </p>
                </div>
                <div className="rounded-xl border border-pink-200 bg-pink-50/50 p-6 dark:border-pink-800 dark:bg-pink-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Marketing & Social Media
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Choose eye-catching colors for social media graphics, email
                    templates, and marketing materials. Generate color
                    variations that maintain brand consistency while adapting to
                    different platforms and contexts. Ensure colors translate
                    well across devices.
                  </p>
                </div>
              </div>
            </section>

            {/* Color Theory & Palettes */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Color Theory & Palette Generation
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Complementary Colors
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Complementary colors are opposite each other on the color
                    wheel (180° apart in hue). These create maximum contrast and
                    vibrant combinations. Examples include red and cyan, blue
                    and orange, yellow and purple. Complementary schemes are
                    bold and attention-grabbing, perfect for calls-to-action and
                    highlighting important elements.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Analogous Colors
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Analogous colors are adjacent on the color wheel (typically
                    30° apart). They create harmonious, pleasing combinations
                    often found in nature. For example, blue, blue-green, and
                    green. Analogous schemes are serene and comfortable, ideal
                    for backgrounds and creating a cohesive look without harsh
                    contrasts.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Triadic Colors
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Triadic colors are evenly spaced around the color wheel
                    (120° apart), forming a triangle. Classic triads include
                    red-yellow-blue (primary colors) and orange-green-purple
                    (secondary colors). Triadic schemes offer strong visual
                    contrast while maintaining color harmony, providing vibrant
                    yet balanced palettes.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Tetradic (Square) Colors
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Tetradic color schemes use four colors evenly spaced around
                    the color wheel (90° apart), forming a square. These provide
                    the most color variety and can be challenging to balance but
                    offer rich, dynamic palettes when one color dominates and
                    others serve as accents.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Shades & Tints (Lightness Variations)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Shades are created by adding black (decreasing lightness),
                    while tints are created by adding white (increasing
                    lightness). Monochromatic palettes using shades and tints of
                    a single color create elegant, sophisticated designs with
                    built-in harmony. This approach is perfect for modern,
                    minimalist interfaces and professional applications.
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
                    How do I convert HEX to RGB?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Simply enter your HEX color (e.g., #3B82F6) into the color
                    picker, and it will automatically display the RGB
                    equivalent. HEX colors use two hexadecimal digits for each
                    channel (RR-GG-BB). Our tool instantly converts between all
                    formats, so you can copy the RGB value directly for use in
                    your projects.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What is the difference between RGB and HSL?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    RGB (Red-Green-Blue) defines colors by mixing light from
                    three color channels, similar to how screens display colors.
                    HSL (Hue-Saturation-Lightness) describes colors more
                    intuitively: hue is the color type (0-360°), saturation is
                    color intensity (0-100%), and lightness is how light or dark
                    it is (0-100%). HSL is often easier for creating color
                    variations and themes.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I check if my colors are accessible?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Our color picker automatically calculates the contrast ratio
                    between your selected color and white background. WCAG AA
                    requires a minimum contrast ratio of 4.5:1 for normal text
                    and 3:1 for large text. AAA standards require 7:1 and 4.5:1
                    respectively. The tool shows whether your color passes these
                    standards and displays preview text in both black and white
                    for visual comparison.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What are complementary colors and when should I use them?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Complementary colors are opposite each other on the color
                    wheel and create maximum contrast. Use them when you want
                    elements to stand out strongly, such as call-to-action
                    buttons, important warnings, or to draw attention to
                    specific features. However, use them carefully—too much
                    contrast can be jarring. Often, using one color dominantly
                    with its complement as an accent works best.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I use transparency in CSS with these color formats?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes! Use the opacity slider to adjust transparency, and the
                    tool will generate RGBA and HSLA formats with the alpha
                    channel. The alpha value ranges from 0 (completely
                    transparent) to 1 (completely opaque). For example, rgba(59,
                    130, 246, 0.5) creates a semi-transparent blue. These
                    formats work in all modern browsers and are perfect for
                    overlays, shadows, and layered designs.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I create a cohesive color palette for my website?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Start with a primary brand color, then use our palette
                    generators to create harmonious combinations. For a safe,
                    professional look, try analogous colors. For more vibrant
                    designs, use complementary or triadic schemes. Generate
                    shades and tints of your primary color for different UI
                    states (hover, active, disabled). Always test your palette
                    for accessibility and ensure sufficient contrast between
                    text and backgrounds.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What is the best color format to use in CSS?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    It depends on your needs. HEX is most common and compact
                    (#3B82F6). RGB is good when you need to manipulate
                    individual channels or add transparency with RGBA. HSL is
                    best for creating color variations programmatically—you can
                    easily adjust hue, saturation, or lightness. Modern CSS also
                    supports CSS custom properties (CSS variables), which work
                    with any format and make theming easier.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is this color picker tool free to use?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, absolutely! This color picker is completely free with
                    no registration, no limits, and no ads interrupting your
                    workflow. All color conversions and calculations happen
                    directly in your browser, so your data stays private. You
                    can use it for personal projects, commercial work, client
                    projects—anything you need. We only ask that you bookmark
                    and share the tool if you find it useful!
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I pick a color from an image or screenshot?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    While this tool doesn&apos;t support direct image sampling, most
                    operating systems have built-in color pickers: macOS has
                    Digital Color Meter, Windows has the PowerToys Color Picker,
                    and most graphic design software includes eyedropper tools.
                    Once you&apos;ve identified the HEX or RGB value from your image,
                    paste it into our tool to convert it to other formats and
                    generate matching palettes.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why are my colors different on different devices?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Colors can appear different due to screen calibration,
                    display technology (LCD, OLED, etc.), brightness settings,
                    and color profiles. While you can&apos;t control how users see
                    your colors, you can ensure they&apos;re specified correctly in
                    your code. Use our tool to get precise color values, test on
                    multiple devices when possible, and focus on sufficient
                    contrast for readability rather than perfect color
                    reproduction.
                  </p>
                </details>
              </div>
            </section>

            {/* Accessibility */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Color Accessibility & WCAG Standards
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    Web Content Accessibility Guidelines (WCAG) define minimum
                    contrast ratios to ensure text is readable for people with
                    visual impairments, including color blindness and low
                    vision. Following these standards isn&apos;t just good
                    practice—it&apos;s often legally required for public websites and
                    applications.
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <strong>WCAG AA (Minimum):</strong> Requires a contrast
                      ratio of at least 4.5:1 for normal text (under 18pt or
                      14pt bold) and 3:1 for large text. This is the legal
                      standard in many countries.
                    </li>
                    <li>
                      <strong>WCAG AAA (Enhanced):</strong> Requires 7:1 for
                      normal text and 4.5:1 for large text. This provides
                      maximum readability and is recommended for text-heavy
                      applications.
                    </li>
                    <li>
                      <strong>Non-text elements:</strong> Interactive components
                      like buttons, form controls, and focus indicators require
                      a minimum 3:1 contrast ratio against adjacent colors.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Our color picker automatically calculates contrast ratios
                    and indicates whether your color combinations meet these
                    standards. Use the text preview feature to visually assess
                    readability with both white and black text on your selected
                    background color.
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
                Explore other developer tools to streamline your workflow:
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
                    Format, validate, and beautify JSON data with syntax
                    highlighting
                  </p>
                </a>
                <a
                  href="/tools/base64"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-green-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-green-600 dark:text-gray-50 dark:group-hover:text-green-400">
                    Base64 Encoder/Decoder
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Encode and decode Base64 strings for data URLs and more
                  </p>
                </a>
                <a
                  href="/tools/regex-tester"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-orange-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-orange-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-orange-600 dark:text-gray-50 dark:group-hover:text-orange-400">
                    Regex Tester
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Test and debug regular expressions with real-time matching
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
