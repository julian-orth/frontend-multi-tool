import Breadcrumb from "@/components/breadcrumb";
import { LoremIpsumUI } from "./lorem-ipsum-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator - Free Placeholder Text Generator",
  description:
    "Generate classic Lorem Ipsum placeholder text for your designs, mockups, and prototypes. Choose paragraphs, sentences, or words with live preview and instant copy.",
  keywords: [
    "lorem ipsum",
    "placeholder text",
    "dummy text",
    "filler text",
    "lorem ipsum generator",
    "text generator",
    "design mockup",
    "wireframe text",
    "cicero",
  ],
  openGraph: {
    title: "Lorem Ipsum Generator — Classic Placeholder Text",
    description:
      "Generate Lorem Ipsum placeholder text instantly. Choose paragraphs, sentences, or words. Perfect for design mockups, wireframes, and prototypes.",
    url: `${SITE_CONFIG.domain}/tools/lorem-ipsum`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `Lorem Ipsum Generator — ${SITE_CONFIG.name}`,
    description:
      "Generate classic Lorem Ipsum placeholder text for your designs. Paragraphs, sentences, or words with instant copy.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/lorem-ipsum`,
  },
};

export default function LoremIpsumPage() {
  return (
    <>
      <ToolSchema
        name="Lorem Ipsum Generator"
        description="Generate classic placeholder text for designs, mockups, and prototypes with customizable paragraphs and sentences"
        url="/tools/lorem-ipsum"
        keywords={[
          "lorem ipsum generator",
          "placeholder text",
          "dummy text",
          "filler text",
          "text generator",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Lorem Ipsum Generator
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Generate classic Lorem Ipsum placeholder text for your designs,
              mockups, and prototypes. All processing happens in your browser
              for complete privacy.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <LoremIpsumUI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is Lorem Ipsum */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is Lorem Ipsum?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Lorem Ipsum is a placeholder text commonly used in the graphic
                  design, printing, and typesetting industries. It serves as
                  dummy content to fill space and demonstrate visual layouts
                  without the distraction of meaningful content. The text has
                  been used since the 1500s when an unknown printer scrambled a
                  passage from Cicero&apos;s philosophical work &quot;De Finibus Bonorum
                  et Malorum&quot; (On the Extremes of Good and Evil) to create a
                  type specimen book.
                </p>
                <p>
                  The passage begins with the famous line &quot;Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit...&quot; which has become
                  instantly recognizable to designers, developers, and
                  publishers worldwide. Despite appearing to be random Latin
                  text, Lorem Ipsum actually originates from sections 1.10.32
                  and 1.10.33 of Cicero&apos;s work written in 45 BC, making it over
                  2000 years old.
                </p>
                <p>
                  The text experienced a resurgence in popularity during the
                  1960s when Letraset manufactured dry-transfer sheets
                  containing Lorem Ipsum in various fonts and sizes. It gained
                  further widespread adoption in the 1980s and 1990s when
                  desktop publishing software like Aldus PageMaker (later Adobe
                  PageMaker) bundled Lorem Ipsum as default placeholder text.
                  Today, it&apos;s ubiquitous across web design, app development, and
                  digital publishing.
                </p>
              </div>
            </section>

            {/* Why Use Lorem Ipsum */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Why Use Lorem Ipsum for Design?
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Focus on Visual Design
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Lorem Ipsum allows designers and clients to focus on visual
                    elements, typography, layout, and spacing without being
                    distracted by readable content. It creates a realistic
                    representation of how the final design will look with actual
                    text.
                  </p>
                </div>
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Natural Letter Distribution
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Unlike repeating simple phrases like &quot;text here&quot; or random
                    keyboard mashing, Lorem Ipsum has a natural distribution of
                    letters similar to English. This makes it ideal for testing
                    fonts, line spacing, and overall readability in realistic
                    conditions.
                  </p>
                </div>
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Prevents Content Distraction
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Using Lorem Ipsum instead of draft copy prevents
                    stakeholders from getting distracted by the content itself.
                    People naturally read meaningful text and may critique
                    wording, grammar, or message instead of focusing on design
                    decisions during review meetings.
                  </p>
                </div>
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Industry Standard
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Lorem Ipsum is universally recognized in design and
                    publishing industries. When someone sees Lorem Ipsum, they
                    immediately understand it&apos;s placeholder text, eliminating
                    confusion about whether content is final or temporary in
                    wireframes and mockups.
                  </p>
                </div>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for Lorem Ipsum
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Website Mockups and Wireframes
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Fill page templates, hero sections, blog posts, and
                    navigation menus with Lorem Ipsum to demonstrate layout and
                    visual hierarchy. Designers use it to show clients how
                    different amounts of content affect the design without
                    waiting for final copy. Essential for presenting website
                    concepts and getting early feedback on structure and flow.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Print Design Layouts
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Magazines, brochures, posters, flyers, and book layouts use
                    Lorem Ipsum to visualize how text will flow across columns,
                    pages, and sections. Publishers and graphic designers rely
                    on it to test different typography choices, adjust margins,
                    and finalize spacing before actual content is written or
                    approved.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    UI/UX Prototypes
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Mobile apps, desktop software, and web applications use
                    Lorem Ipsum in prototypes to simulate user interfaces with
                    realistic text length. Helps UX designers evaluate button
                    labels, form fields, menu items, notifications, and content
                    cards without waiting for final microcopy from content
                    writers.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Email Templates
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Marketing teams and email designers use Lorem Ipsum to
                    create newsletter templates, promotional email designs, and
                    transactional email layouts. Allows testing across different
                    email clients and devices to ensure proper rendering before
                    adding actual marketing copy or personalized content.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Font and Typography Testing
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Type designers, foundries, and graphic designers use Lorem
                    Ipsum to showcase new fonts in various sizes, weights, and
                    styles. The text provides a comprehensive view of how
                    letterforms interact and how typefaces perform in real-world
                    scenarios with diverse letter combinations and punctuation.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Content Management System (CMS) Themes
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    WordPress, Drupal, Joomla, and other CMS theme developers
                    include Lorem Ipsum in demo content to showcase theme
                    capabilities. Helps potential buyers visualize how their own
                    content will look, demonstrates responsive behavior, and
                    shows how the theme handles different content lengths and
                    formatting.
                  </p>
                </div>
              </div>
            </section>

            {/* History and Origin */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                The History and Origin of Lorem Ipsum
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  The Lorem Ipsum text comes from Cicero&apos;s philosophical
                  treatise &quot;De Finibus Bonorum et Malorum&quot; (On the Extremes of
                  Good and Evil), written in 45 BC. Specifically, it&apos;s derived
                  from sections 1.10.32 and 1.10.33 of the work, which discuss
                  ethics and the pursuit of pleasure versus pain.
                </p>
                <p>
                  The discovery of Lorem Ipsum&apos;s true origin is credited to
                  Richard McClintock, a Latin scholar from Hampden-Sydney
                  College in Virginia. In the 1980s, McClintock was intrigued by
                  the word &quot;consectetur&quot; in the Lorem Ipsum passage and traced
                  it through classical Latin literature until he found the
                  source in Cicero&apos;s work. This debunked the long-held belief
                  that Lorem Ipsum was simply nonsense text.
                </p>
                <p>
                  The actual scrambling likely occurred in the 1500s when a
                  printer needed specimen text to demonstrate typefaces. The
                  printer took Cicero&apos;s work, scrambled portions of it, and
                  removed certain sections to create text that looked like Latin
                  but didn&apos;t convey coherent meaning. This prevented readers
                  from being distracted by the content and allowed them to focus
                  purely on the visual presentation of the type.
                </p>
                <p>
                  Here&apos;s the original Latin passage from Cicero: &quot;Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem.&quot; Which translates to: &quot;Nor is there anyone who
                  loves or pursues or desires to obtain pain of itself, because
                  it is pain, but occasionally circumstances occur in which toil
                  and pain can procure him some great pleasure.&quot;
                </p>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Best Practices When Using Lorem Ipsum
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Always Replace Before Launch
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Make absolutely certain to replace all Lorem Ipsum text with
                    actual content before publishing or launching. Search your
                    entire project for &quot;lorem&quot; or &quot;ipsum&quot; to catch any missed
                    instances. Shipping Lorem Ipsum in production is
                    embarrassing and unprofessional.
                  </p>
                </div>

                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Use Realistic Content Length
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Generate Lorem Ipsum that approximates the length of your
                    final content. Short headlines need just a few words, while
                    blog posts might need several paragraphs. Using realistic
                    lengths helps identify layout issues early in the design
                    process.
                  </p>
                </div>

                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Consider Content-First Design
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    While Lorem Ipsum is useful, some designers advocate for
                    content-first design where real content drives layout
                    decisions. If possible, work with draft copy or collaborate
                    with content writers early to ensure your design truly
                    serves the content&apos;s purpose.
                  </p>
                </div>

                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Communicate Clearly with Clients
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Make sure clients and stakeholders understand that Lorem
                    Ipsum is placeholder text. Some may not be familiar with it
                    and could mistake it for real content or wonder why you&apos;re
                    using &quot;Latin.&quot; Clear communication prevents confusion during
                    design reviews.
                  </p>
                </div>

                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Test Edge Cases
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Don&apos;t just test with perfect Lorem Ipsum. Try very long
                    paragraphs, single words, unusual lengths, and content
                    variations to see how your design handles edge cases. Real
                    content is rarely perfect, so your design should be flexible
                    and resilient.
                  </p>
                </div>

                <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 p-6 dark:border-yellow-800 dark:bg-yellow-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Use Variants Sparingly
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    While there are many Lorem Ipsum variants (Bacon Ipsum,
                    Hipster Ipsum, etc.), stick with classic Lorem Ipsum for
                    client work and professional projects. Novelty variants can
                    be fun for personal projects but may seem unprofessional or
                    confusing in business contexts.
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
                    Does Lorem Ipsum have any actual meaning?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes and no. The Lorem Ipsum text is derived from Cicero&apos;s
                    &quot;De Finibus Bonorum et Malorum&quot; written in 45 BC, so the
                    individual words are real Latin. However, the passage has
                    been scrambled, truncated, and altered so that it doesn&apos;t
                    form coherent, meaningful sentences. It&apos;s designed to look
                    like natural language without conveying a distracting
                    message. If you read the original Cicero passage, it
                    discusses the philosophy of pleasure and pain.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I use Lorem Ipsum in commercial projects?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Absolutely. Lorem Ipsum is in the public domain and has been
                    used freely for over 500 years. There are no copyright
                    restrictions, licensing requirements, or usage fees. You can
                    use it in personal projects, commercial work, client
                    presentations, and products without any legal concerns. Just
                    remember to replace it with actual content before launching!
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Why does Lorem Ipsum always start with &quot;Lorem ipsum dolor
                    sit amet&quot;?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    This opening phrase has become the standard because it&apos;s the
                    beginning of the most commonly used Lorem Ipsum passage. It
                    comes from Cicero&apos;s original text where the words appear
                    (though not in exactly this scrambled form). Starting with
                    these words makes the text immediately recognizable as
                    placeholder text to designers and clients, preventing
                    confusion about whether content is final or temporary.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How much Lorem Ipsum should I generate for my project?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Generate an amount similar to what your final content will
                    be. For a blog post preview, use 2-3 sentences (about 50
                    words). For a full article, use 3-5 paragraphs. For a
                    landing page hero section, 10-20 words might suffice. The
                    goal is to see how your design handles realistic content
                    lengths. It&apos;s often helpful to test both shorter and longer
                    variations to ensure your layout is flexible.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Are there alternatives to Lorem Ipsum?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, there are many alternatives including other Latin-based
                    texts, novelty generators (Bacon Ipsum, Hipster Ipsum,
                    etc.), and industry-specific placeholder text. However,
                    Lorem Ipsum remains the most widely recognized and
                    professional choice. Some designers prefer using real draft
                    copy or content outlines instead of dummy text to ensure the
                    design truly serves the content. The best choice depends on
                    your project requirements and client preferences.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Will Lorem Ipsum affect my website&apos;s SEO?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    If you accidentally publish Lorem Ipsum on a live website,
                    it will negatively impact SEO. Search engines expect
                    meaningful, relevant content that provides value to users.
                    Lorem Ipsum provides no keyword relevance, user value, or
                    semantic meaning. Pages with Lorem Ipsum will rank poorly or
                    not at all. Always replace placeholder text with real
                    content before publishing to ensure good SEO performance.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How do I ensure I don&apos;t forget to replace Lorem Ipsum?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Create a pre-launch checklist that includes searching your
                    entire codebase and CMS for &quot;lorem&quot; and &quot;ipsum.&quot; Many code
                    editors and IDEs have project-wide search features. You can
                    also use automated tools or linters that flag Lorem Ipsum in
                    production code. Some teams use deliberately obvious
                    placeholder text like [INSERT CONTENT HERE] to make it
                    impossible to miss. Setting up a content review stage in
                    your workflow also helps catch placeholder text before
                    launch.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is this Lorem Ipsum generator free to use?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes, this Lorem Ipsum generator is completely free with no
                    limitations, registration requirements, or usage fees.
                    Generate as much text as you need for personal or commercial
                    projects. All text generation happens in your browser, so no
                    data is sent to our servers, ensuring complete privacy. You
                    can even use the tool offline once the page is loaded.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I customize the generated Lorem Ipsum text?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Our generator offers several customization options: choose
                    between paragraphs, sentences, or words; specify the exact
                    count you need; and toggle whether to start with the classic
                    &quot;Lorem ipsum dolor sit amet&quot; opening. The text is randomly
                    generated each time from a dictionary of authentic Lorem
                    Ipsum words derived from Cicero&apos;s work, ensuring
                    natural-looking variation while maintaining the traditional
                    character distribution.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What&apos;s the difference between paragraphs, sentences, and
                    words mode?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Paragraphs mode generates complete paragraphs with multiple
                    sentences, ideal for body text and article content.
                    Sentences mode creates individual sentences, useful for
                    shorter text blocks like descriptions or captions. Words
                    mode generates a specified number of words, perfect for
                    headlines, button labels, or testing character limits. Each
                    mode maintains the natural flow and letter distribution of
                    Lorem Ipsum while giving you precise control over output
                    length.
                  </p>
                </details>
              </div>
            </section>

            {/* Related Tools */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Related Developer Tools
              </h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Explore other text and design tools to streamline your
                development workflow:
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <a
                  href="/tools/text-diff"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-yellow-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-yellow-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-yellow-600 dark:text-gray-50 dark:group-hover:text-yellow-400">
                    Text Diff Checker
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Compare two text files and highlight differences
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
                    Test regular expressions with real-time matching
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
                    Pick and convert colors for your design projects
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
