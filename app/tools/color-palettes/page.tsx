import Breadcrumb from "@/components/breadcrumb";
import { ColorPalettesUI } from "./color-palettes-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Color Palette Generator - Create Harmonious Color Schemes",
  description:
    "Generate beautiful color palettes with color theory harmonies: monochromatic, analogous, complementary, triadic, and more. Export to CSS, SCSS, Tailwind, JSON, and SVG formats. Free online tool for designers and developers.",
  keywords: [
    "color palette generator",
    "color scheme",
    "color harmony",
    "monochromatic palette",
    "complementary colors",
    "analogous colors",
    "triadic colors",
    "color theory",
    "design colors",
    "palette export",
    "css colors",
    "tailwind colors",
    "pastel palette",
    "vibrant colors",
    "color combinations",
  ],
  openGraph: {
    title: "Color Palette Generator — Create Harmonious Color Schemes",
    description:
      "Generate beautiful color palettes using color theory. Monochromatic, complementary, triadic schemes. Export to CSS, Tailwind, SCSS, JSON, SVG.",
    url: `${SITE_CONFIG.domain}/tools/color-palettes`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `Color Palette Generator — ${SITE_CONFIG.name}`,
    description:
      "Create harmonious color schemes with color theory harmonies. Export to multiple formats. Free online tool.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/color-palettes`,
  },
};

export default function ColorPalettesPage() {
  return (
    <>
      <ToolSchema
        name="Color Palette Generator"
        description="Generate beautiful color palettes using color theory harmonies like monochromatic, complementary, and triadic schemes"
        url="/tools/color-palettes"
        keywords={[
          "color palette generator",
          "color scheme",
          "color harmony",
          "complementary colors",
          "color theory",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Color Palette Generator
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Generate beautiful, harmonious color palettes using color theory.
              Create monochromatic, complementary, analogous, triadic, and
              custom color schemes. Lock colors, export to
              CSS/SCSS/Tailwind/JSON/SVG, and create stunning designs. All
              processing happens in your browser for complete privacy.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <ColorPalettesUI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is a Color Palette Generator */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is a Color Palette Generator?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  A color palette generator is an essential tool for designers,
                  developers, and creatives that automatically creates
                  harmonious color schemes based on color theory principles.
                  Instead of manually selecting colors that work well together,
                  a palette generator uses mathematical relationships between
                  hues to produce aesthetically pleasing color combinations that
                  are proven to work well in design.
                </p>
                <p>
                  Color theory, developed over centuries by artists and
                  scientists, provides rules for combining colors in ways that
                  are visually appealing to the human eye. These rules are based
                  on the color wheel—a circular diagram that organizes colors by
                  their chromatic relationships. Our color palette generator
                  implements these time-tested principles to help you create
                  professional-looking color schemes in seconds.
                </p>
                <p>
                  Whether you&apos;re designing a website, creating a brand identity,
                  building a mobile app, or working on any visual project,
                  choosing the right colors is crucial. Colors evoke emotions,
                  communicate messages, establish hierarchy, and create the
                  overall mood of your design. A well-chosen palette can make
                  the difference between a design that feels amateur and one
                  that looks polished and professional.
                </p>
                <p>
                  Our tool goes beyond simple random color generation—it
                  provides multiple palette types based on established color
                  harmonies, allows you to lock colors you love while generating
                  new variations, and exports your palettes in formats ready to
                  use in CSS, SCSS, Tailwind CSS, JSON, SVG, and JavaScript. All
                  processing happens entirely in your browser, ensuring your
                  creative work stays private and secure.
                </p>
              </div>
            </section>

            {/* Color Harmony Types */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Understanding Color Harmony Types
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Monochromatic Palettes
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Monochromatic color schemes use variations in lightness and
                    saturation of a single hue. These palettes create a
                    cohesive, elegant look that&apos;s easy on the eyes. Perfect for
                    minimalist designs, professional websites, and creating
                    depth without complexity. Monochromatic palettes are
                    foolproof and work well for backgrounds, UI elements, and
                    establishing visual hierarchy through tints and shades.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Analogous Palettes
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Analogous color schemes use colors that are adjacent to each
                    other on the color wheel (typically within 30-60 degrees).
                    These palettes create serene, comfortable designs often
                    found in nature—like the blues and greens of the ocean, or
                    the reds, oranges, and yellows of a sunset. Ideal for
                    creating harmonious designs without stark contrasts, perfect
                    for backgrounds and ambient interfaces.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Complementary Palettes
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Complementary colors sit opposite each other on the color
                    wheel (180 degrees apart), creating maximum contrast and
                    visual impact. Examples include red and cyan, blue and
                    orange, or yellow and purple. These palettes are bold,
                    vibrant, and attention-grabbing. Use them for call-to-action
                    buttons, important highlights, or creating energetic
                    designs. However, use carefully—too much contrast can be
                    overwhelming.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Triadic Palettes
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Triadic color schemes use three colors evenly spaced around
                    the color wheel (120 degrees apart). The primary colors
                    (red, yellow, blue) and secondary colors (orange, green,
                    purple) are classic triads. These palettes offer vibrant
                    contrast while maintaining balance and harmony. They&apos;re
                    perfect for creating colorful, dynamic designs with good
                    color variety. Works best when one color dominates and
                    others serve as accents.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Tetradic (Square) Palettes
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Tetradic or square color schemes use four colors evenly
                    distributed around the color wheel (90 degrees apart),
                    forming a square. These palettes offer the richest color
                    variety but can be challenging to balance. They work best
                    when one color is dominant and the others are used as
                    accents. Ideal for complex designs, infographics, and
                    projects requiring diverse color options while maintaining
                    harmony.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Split-Complementary Palettes
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Split-complementary schemes use a base color plus the two
                    colors adjacent to its complement. This creates strong
                    visual contrast like complementary colors but with more
                    nuance and less tension. For example, if your base is blue,
                    instead of using orange (complement), you&apos;d use
                    yellow-orange and red-orange. This harmony is versatile,
                    sophisticated, and easier to balance than pure complementary
                    schemes.
                  </p>
                </div>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for Color Palettes
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Web Design & Development
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Create cohesive color schemes for websites, landing pages,
                    and web applications. Generate palettes and export directly
                    to CSS variables or Tailwind config for instant integration.
                    Use monochromatic palettes for professional corporate sites,
                    complementary for high-conversion landing pages, or
                    analogous for calming user interfaces.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Brand Identity & Logo Design
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Develop complete brand color systems with primary,
                    secondary, and accent colors. Use triadic or tetradic
                    palettes for diverse brand applications across print,
                    digital, and merchandise. Export to design tools like Figma,
                    Sketch, or Adobe Creative Suite. Lock your primary brand
                    color and generate complementary colors that enhance your
                    brand identity.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    UI/UX Design & Design Systems
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Build comprehensive design systems with consistent color
                    scales. Generate monochromatic palettes for state variations
                    (hover, active, disabled) or create accent color palettes
                    for buttons, links, and interactive elements. Export to JSON
                    for integration with design tokens and style guides. Perfect
                    for maintaining consistency across large applications.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Social Media Graphics
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Create eye-catching color schemes for Instagram posts,
                    YouTube thumbnails, Facebook covers, and Pinterest graphics.
                    Use vibrant palettes for maximum engagement or pastel
                    palettes for a softer, more approachable aesthetic. Lock
                    your brand colors and generate complementary palettes that
                    maintain brand consistency while keeping content fresh.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Illustration & Digital Art
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Find harmonious color combinations for digital
                    illustrations, concept art, character design, and
                    backgrounds. Use analogous palettes for natural scenes,
                    complementary for dramatic impact, or triadic for balanced,
                    colorful compositions. Export palettes to use in Procreate,
                    Adobe Photoshop, Illustrator, or other digital art software.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Presentation & Infographic Design
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Design professional PowerPoint presentations, Keynote
                    slides, and data visualizations with balanced color
                    palettes. Use tetradic palettes for charts and graphs that
                    need multiple distinct categories, or monochromatic palettes
                    for elegant, focused presentations. Export to your preferred
                    format and maintain visual consistency throughout your
                    slides.
                  </p>
                </div>
              </div>
            </section>

            {/* Advanced Features */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Advanced Features & Tips
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Color Locking
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The color lock feature is perfect for iterative design. When
                    you find a color you love, click the lock icon to preserve
                    it while regenerating the rest of the palette. This is
                    invaluable when working with brand colors—lock your primary
                    brand color and experiment with different harmonies to find
                    the perfect complementary palette. You can lock multiple
                    colors to gradually build your ideal scheme.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Export Formats Explained
                  </h3>
                  <div className="mt-3 space-y-3 text-gray-700 dark:text-gray-300">
                    <p>
                      <strong>CSS Variables:</strong> Generates CSS custom
                      properties (--color-1, --color-2, etc.) ready to paste
                      into your :root selector. Perfect for theming and
                      maintaining consistency across your stylesheet.
                    </p>
                    <p>
                      <strong>SCSS Variables:</strong> Creates SCSS/SASS
                      variable declarations ($color-1, $color-2, etc.) for use
                      in preprocessor workflows. Ideal for component libraries
                      and design systems.
                    </p>
                    <p>
                      <strong>Tailwind Config:</strong> Exports palette in
                      Tailwind CSS configuration format, ready to add to your
                      tailwind.config.js. Use the generated colors with utility
                      classes like bg-100, text-200, etc.
                    </p>
                    <p>
                      <strong>JSON:</strong> Outputs a simple array of hex
                      values in JSON format, perfect for importing into design
                      tools, storing in databases, or using with JavaScript
                      applications.
                    </p>
                    <p>
                      <strong>SVG:</strong> Generates an SVG color swatch that
                      can be embedded in documentation, used as a visual
                      reference, or imported into design software for
                      presentation.
                    </p>
                    <p>
                      <strong>JavaScript Array:</strong> Creates a JavaScript
                      array literal with your colors, ready to use in React
                      components, Vue templates, or any JavaScript application.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Preset Style Palettes
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Beyond traditional color harmonies, our generator includes
                    preset styles that apply specific aesthetic characteristics:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>Pastel:</strong> Soft, desaturated colors with
                      high lightness (70-90%). Perfect for gentle, approachable
                      designs, children&apos;s content, or spring/summer themes.
                    </li>
                    <li>
                      <strong>Vibrant:</strong> Highly saturated colors
                      (80-100%) with medium lightness. Ideal for energetic
                      brands, youth- oriented products, or designs that need to
                      pop.
                    </li>
                    <li>
                      <strong>Dark:</strong> Low-lightness colors (15-40%)
                      perfect for dark mode interfaces, sophisticated designs,
                      or creating moody atmospheres.
                    </li>
                    <li>
                      <strong>Random:</strong> Harmoniously generated random
                      colors that maintain good relationships on the color wheel
                      while providing unexpected combinations for creative
                      exploration.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Best Practices for Using Color Palettes
                  </h3>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>60-30-10 Rule:</strong> Use your dominant color
                      for 60% of the design, secondary color for 30%, and accent
                      color for 10%. This creates balance and visual hierarchy.
                    </li>
                    <li>
                      <strong>Test Accessibility:</strong> Always check that
                      text colors have sufficient contrast against backgrounds
                      (minimum 4.5:1 for normal text). Use our Color Picker tool
                      for contrast checking.
                    </li>
                    <li>
                      <strong>Start Simple:</strong> Begin with 2-3 colors and
                      add more only if needed. Too many colors can create visual
                      chaos and dilute your message.
                    </li>
                    <li>
                      <strong>Consider Context:</strong> Colors have cultural
                      meanings and emotional associations. Blue suggests trust
                      and professionalism, red conveys energy or urgency, green
                      represents growth or environmental themes.
                    </li>
                    <li>
                      <strong>Test in Multiple Contexts:</strong> View your
                      palette on different devices, screens, and in both light
                      and dark environments before finalizing.
                    </li>
                  </ul>
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
                    How do I choose the right palette type for my project?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The best palette type depends on your design goals. Use
                    monochromatic for elegant, professional designs;
                    complementary for high-impact, attention-grabbing layouts;
                    analogous for harmonious, calming interfaces; triadic for
                    balanced, colorful designs; and tetradic when you need
                    maximum color variety. Start with the harmony that matches
                    your brand personality, then experiment with different
                    variations until you find what resonates.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I use these color palettes commercially?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes! All palettes generated by this tool are completely free
                    to use for any purpose, including commercial projects,
                    client work, products, and services. Colors themselves
                    cannot be copyrighted (though specific combinations used in
                    logos may be trademarked by companies). You own the palettes
                    you create and can use them without attribution or
                    restrictions.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I use the exported palette in my CSS?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Choose &quot;CSS Variables&quot; from the export menu, then copy the
                    output. Paste it into your CSS file inside a :root selector
                    like this: :root &#123; --color-1: #123456; --color-2:
                    #abcdef; &#125;. Then use these variables throughout your
                    CSS with var(--color-1), var(--color-2), etc. This makes it
                    easy to change your entire color scheme by updating just the
                    root variables.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What does &quot;locking&quot; a color do?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    When you lock a color (by clicking the lock icon), that
                    specific color will be preserved when you generate a new
                    palette. This is incredibly useful when you have a brand
                    color or a color you love and want to build the rest of your
                    palette around it. You can lock multiple colors at once,
                    allowing you to iteratively refine your palette while
                    keeping the colors you&apos;re happy with.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I create a palette based on my brand color?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    First, click on any color swatch in the generated palette
                    and type your brand color&apos;s hex code into the input field.
                    Then lock that color by clicking the lock icon. Now select
                    different palette types (complementary, triadic, analogous,
                    etc.) and click &quot;Generate New&quot; to explore different
                    harmonies built around your brand color. This lets you
                    discover professional color combinations that work perfectly
                    with your existing brand identity.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What&apos;s the difference between pastel, vibrant, and dark
                    palettes?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    These preset styles modify the saturation and lightness of
                    colors while maintaining harmony. Pastel palettes have low
                    saturation and high lightness, creating soft, gentle colors.
                    Vibrant palettes maximize saturation for bold, energetic
                    colors. Dark palettes use low lightness for deep, rich
                    colors perfect for dark mode interfaces or sophisticated
                    designs. These presets help you quickly achieve a specific
                    aesthetic without manual adjustments.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I edit individual colors in the palette?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes! Click on any color swatch or use the text input below
                    each color to type a new hex code directly. This allows you
                    to fine- tune generated palettes or create custom
                    combinations. Any manually edited color can be locked to
                    preserve it during regeneration. This gives you the
                    flexibility to use the generator as a starting point and
                    then customize to your exact needs.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I use the Tailwind export format?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Select &quot;Tailwind Config&quot; from the export menu and copy the
                    output. Open your tailwind.config.js file and add the
                    exported colors to the theme.extend.colors section. For
                    example: colors: &#123; &apos;custom&apos;: &#123; 100: &apos;#abc123&apos;,
                    200: &apos;#def456&apos;, ... &#125; &#125;. Then use these colors in
                    your HTML with classes like bg-custom-100, text-custom-200,
                    border-custom-300, etc. This integrates your generated
                    palette seamlessly into your Tailwind workflow.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is my palette data saved anywhere?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No, all palette generation happens entirely in your browser
                    using JavaScript. No data is sent to any server, stored in
                    databases, or tracked. Your palettes exist only in your
                    current browser session. If you refresh the page, your
                    current palette will be lost unless you export or save it
                    yourself. This ensures complete privacy for your creative
                    work. We recommend exporting palettes you want to keep for
                    future use.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How many colors should I include in my palette?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    For most projects, 3-5 colors is ideal: one dominant color,
                    one or two supporting colors, and one or two accent colors.
                    This provides enough variety for visual interest while
                    maintaining cohesion. Complex applications or design systems
                    might use 7-10 colors with variations. Avoid using too many
                    colors as it can create visual chaos and make your design
                    feel unfocused. Our slider lets you adjust from 3-10 colors
                    to find what works best for your project.
                  </p>
                </details>
              </div>
            </section>

            {/* Color Psychology */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Color Psychology in Design
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    Colors have psychological effects that influence emotions,
                    perceptions, and behaviors. Understanding color psychology
                    helps you choose palettes that align with your message and
                    resonate with your audience:
                  </p>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="mb-2">
                        <strong className="text-blue-600 dark:text-blue-400">
                          Blue:
                        </strong>{" "}
                        Trust, professionalism, calmness, security. Popular for
                        corporate brands, banks, healthcare, and technology
                        companies.
                      </p>
                      <p className="mb-2">
                        <strong className="text-red-600 dark:text-red-400">
                          Red:
                        </strong>{" "}
                        Energy, passion, urgency, excitement. Effective for
                        call-to-action buttons, sales, food brands, and
                        entertainment.
                      </p>
                      <p className="mb-2">
                        <strong className="text-green-600 dark:text-green-400">
                          Green:
                        </strong>{" "}
                        Growth, health, nature, freshness. Perfect for
                        environmental, wellness, finance (growth), and organic
                        brands.
                      </p>
                      <p className="mb-2">
                        <strong className="text-yellow-600 dark:text-yellow-400">
                          Yellow:
                        </strong>{" "}
                        Optimism, happiness, warmth, attention. Great for
                        youthful brands, warnings, and creating cheerful
                        designs.
                      </p>
                      <p className="mb-2">
                        <strong className="text-purple-600 dark:text-purple-400">
                          Purple:
                        </strong>{" "}
                        Luxury, creativity, wisdom, spirituality. Ideal for
                        beauty products, premium brands, and creative services.
                      </p>
                    </div>
                    <div>
                      <p className="mb-2">
                        <strong className="text-orange-600 dark:text-orange-400">
                          Orange:
                        </strong>{" "}
                        Enthusiasm, creativity, adventure, affordability. Works
                        well for call-to-actions, sports, and youth-oriented
                        brands.
                      </p>
                      <p className="mb-2">
                        <strong className="text-pink-600 dark:text-pink-400">
                          Pink:
                        </strong>{" "}
                        Romance, femininity, playfulness, compassion. Common in
                        beauty, fashion, and products targeting female
                        audiences.
                      </p>
                      <p className="mb-2">
                        <strong className="text-gray-700 dark:text-gray-300">
                          Black:
                        </strong>{" "}
                        Sophistication, luxury, power, elegance. Essential for
                        high-end brands, fashion, and modern minimalist designs.
                      </p>
                      <p className="mb-2">
                        <strong className="text-gray-500 dark:text-gray-400">
                          Gray:
                        </strong>{" "}
                        Neutrality, balance, professionalism, timelessness.
                        Perfect for backgrounds and supporting elements.
                      </p>
                      <p>
                        <strong className="text-gray-100 dark:text-gray-700">
                          White:
                        </strong>{" "}
                        Purity, simplicity, cleanliness, space. Creates
                        breathing room and emphasizes minimalism.
                      </p>
                    </div>
                  </div>
                  <p className="mt-4">
                    Remember that color meanings can vary across cultures.
                    Always consider your target audience&apos;s cultural context when
                    selecting colors for global products or diverse audiences.
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
                  href="/tools/color-picker"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-pink-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-pink-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-pink-600 dark:text-gray-50 dark:group-hover:text-pink-400">
                    Color Picker & Converter
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pick colors and convert between HEX, RGB, HSL, RGBA, and
                    HSLA formats
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
                    Format and validate JSON data for color configuration files
                  </p>
                </a>
                <a
                  href="/tools/base64"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-green-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-green-600 dark:text-gray-50 dark:group-hover:text-green-400">
                    Base64 Encoder
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Encode SVG color swatches for data URLs
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
