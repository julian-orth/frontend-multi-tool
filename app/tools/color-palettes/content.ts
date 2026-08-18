interface HarmonyType {
  title: string;
  description: string;
}

interface ColorPalettesPageContent {
  /** <title> */
  title: string;
  /** <meta description> */
  metaDescription: string;
  /** SEO keywords for <meta> */
  keywords: string[];
  /** Open Graph title */
  ogTitle: string;
  /** Open Graph description */
  ogDescription: string;
  /** Twitter card description */
  twitterDescription: string;
  /** Short title reused for h1, JSON-LD name, and the Twitter card title prefix */
  shortTitle: string;
  /** JSON-LD `description` */
  schemaDescription: string;
  /** JSON-LD `keywords` (subset of `keywords`) */
  schemaKeywords: string[];
  /** Intro paragraph under the h1 */
  intro: string;
  whatIsHeading: string;
  whatIsParagraphs: string[];
  harmonyHeading: string;
  harmonyTypes: HarmonyType[];
}

export const pageContent: Record<"en" | "de", ColorPalettesPageContent> = {
  en: {
    title: "Color Palette Generator - Create Harmonious Color Schemes",
    metaDescription:
      "Generate beautiful color palettes with color theory harmonies: monochromatic, analogous, complementary, triadic, and more. Export as CSS, SCSS, Tailwind, JSON, and SVG. Free online tool for designers and developers.",
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
    ogTitle: "Color Palette Generator — Create Harmonious Color Schemes",
    ogDescription:
      "Generate beautiful color palettes using color theory. Monochromatic, complementary, and triadic schemes. Export as CSS, Tailwind, SCSS, JSON, SVG.",
    twitterDescription:
      "Create harmonious color schemes using color theory. Export to multiple formats. Free online tool.",
    shortTitle: "Color Palette Generator",
    schemaDescription:
      "Generate beautiful color palettes with color theory harmonies like monochromatic, complementary, and triadic schemes",
    schemaKeywords: [
      "color palette generator",
      "color scheme",
      "color harmony",
      "complementary colors",
      "color theory",
    ],
    intro:
      "Generate beautiful, harmonious color palettes using color theory. Build monochromatic, complementary, analogous, triadic, and custom color schemes. Lock colors, export as CSS/SCSS/Tailwind/JSON/SVG, and craft striking designs. All calculations run in your browser.",
    whatIsHeading: "What is a Color Palette Generator?",
    whatIsParagraphs: [
      "A color palette generator is an essential tool for designers, developers, and creatives that automatically produces harmonious color schemes based on color theory principles. Rather than manually picking colors that work well together, a palette generator uses mathematical relationships between hues to create aesthetically pleasing color combinations that are proven in design practice.",
      "Color theory, refined over centuries by artists and scientists, provides rules for combining colors in ways that are visually pleasing to the human eye. These rules are based on the color wheel, a circular diagram that arranges colors by their chromatic relationships. Our color palette generator applies these proven principles so you can create professional color schemes in seconds.",
      "Whether you're designing a website, building a brand identity, creating a mobile app, or working on any visual project, choosing the right colors is critical. Colors evoke emotions, convey messages, establish hierarchy, and set the overall mood of your design. A well-chosen palette can be the difference between an amateurish and a professional-looking design.",
      "Our tool goes beyond simple random color generation: it offers multiple palette types based on established color harmonies, lets you lock in your favorite colors, and exports your palettes to formats you can use directly in CSS, SCSS, Tailwind CSS, JSON, SVG, and JavaScript. Everything happens entirely in your browser, keeping your creative work private and secure.",
    ],
    harmonyHeading: "Understanding Color Harmony Types",
    harmonyTypes: [
      {
        title: "Monochromatic Palettes",
        description:
          "Monochromatic color schemes use variations in lightness and saturation of a single hue. These palettes create a cohesive, elegant look that's easy on the eyes. They're ideal for minimal designs, professional websites, and adding depth without complexity. Monochromatic palettes are straightforward and work well for backgrounds, UI elements, and building visual hierarchy.",
      },
      {
        title: "Analogous Palettes",
        description:
          "Analogous color schemes use colors that sit next to each other on the color wheel (typically within 30-60 degrees). These palettes create calm, pleasant designs often found in nature — like the blues and greens of the ocean or the reds, oranges, and yellows of a sunset. Ideal for harmonious designs without strong contrast.",
      },
      {
        title: "Complementary Palettes",
        description:
          "Complementary colors sit directly opposite each other on the color wheel (180 degrees apart), creating maximum contrast and visual impact. Examples include red and cyan, blue and orange, or yellow and purple. These palettes are bold, vibrant, and attention-grabbing. They work well for call-to-action buttons, key highlights, or high-energy designs — but should be used thoughtfully.",
      },
      {
        title: "Triadic Palettes",
        description:
          "Triadic color schemes use three colors evenly spaced around the color wheel (120 degrees apart). The primary colors (red, yellow, blue) and secondary colors (orange, green, purple) are classic triads. These palettes offer dynamic contrast while maintaining balance and harmony.",
      },
    ],
  },
  de: {
    title: "Farbpaletten-Generator - Harmonische Farbschemata erstellen",
    metaDescription:
      "Erzeuge schöne Farbpallette mit Farbtheorie-Harmonien: monochromatisch, analog, komplementär, triadisch und mehr. Export als CSS, SCSS, Tailwind, JSON und SVG. Kostenloses Online-Tool für Designer und Entwickler.",
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
    ogTitle: "Farbpaletten-Generator — Harmonische Farbschemata erstellen",
    ogDescription:
      "Erzeuge schöne Farbpallette mit Farbtheorie. Monochromatische, komplementäre, triadische Schemata. Export als CSS, Tailwind, SCSS, JSON, SVG.",
    twitterDescription:
      "Erstelle harmonische Farbschemata mit Farbtheorie. Exportiere in verschiedene Formate. Kostenloses Online-Tool.",
    shortTitle: "Farbpaletten-Generator",
    schemaDescription:
      "Erzeuge schöne Farbpallette mit Farbtheorie-Harmonien wie monochromatischen, komplementären und triadischen Schemata",
    schemaKeywords: [
      "color palette generator",
      "color scheme",
      "color harmony",
      "complementary colors",
      "color theory",
    ],
    intro:
      "Erzeuge schöne, harmonische Farbpallette mit Hilfe der Farbtheorie. Stelle monochromatische, komplementäre, analoge, triadische und individuelle Farbschemata zusammen. Sperre Farben, exportiere als CSS/SCSS/Tailwind/JSON/SVG und gestalte beeindruckende Designs. Alle Berechnungen laufen im Browser ab.",
    whatIsHeading: "Was ist ein Farbpaletten-Generator?",
    whatIsParagraphs: [
      "Ein Farbpaletten-Generator ist ein essentielles Werkzeug für Designer, Entwickler und Kreative, das automatisch harmonische Farbschemata auf Basis von Farbtheorie-Prinzipien erzeugt. Anstatt Farben manuell auszuwählen, die gut zusammenpassen, verwendet ein Paletten-Generator mathematische Beziehungen zwischen Farbtönen, um ästhetisch ansprechende Farbkombinationen zu erzeugen, die in der Gestaltung bewährt sind.",
      "Die Farbtheorie, die über Jahrhunderte von Künstlern und Wissenschaftlern entwickelt wurde, liefert Regeln für die Kombination von Farben, die für das menschliche Auge visuell ansprechend sind. Diese Regeln basieren auf dem Farbkreis, einem Kreisschema, das Farben nach ihren chromatischen Beziehungen ordnet. Unser Farbpaletten-Generator setzt diese bewährten Prinzipien um, damit du in Sekundenschnelle professionelle Farbschemata erstellen kannst.",
      "Egal, ob du eine Website gestaltest, eine Markenidentität entwickelst, eine Mobile-App baust oder an einem visuellen Projekt arbeitest: Die richtige Farbwahl ist entscheidend. Farben rufen Emotionen hervor, vermitteln Botschaften, schaffen Hierarchien und bestimmen die gesamte Stimmung deiner Gestaltung. Eine gut gewählte Palette kann den Unterschied zwischen einem laienhaften und einem professionell wirkenden Design ausmachen.",
      "Unser Tool geht über die einfache zufällige Farberzeugung hinaus: Es bietet mehrere Palettentypen auf Basis etablierter Farbharmonien, erlaubt das Fixieren von Lieblingsfarben und exportiert deine Paletten in Formate, die direkt in CSS, SCSS, Tailwind CSS, JSON, SVG und JavaScript verwendet werden können. Alles geschieht vollständig im Browser und hält deine kreativen Arbeiten privat und sicher.",
    ],
    harmonyHeading: "Farb-Harmonietypen verstehen",
    harmonyTypes: [
      {
        title: "Monochromatische Paletten",
        description:
          "Monochromatische Farbschemata nutzen Variationen in Helligkeit und Sättigung eines einzelnen Farbtons. Diese Paletten erzeugen ein zusammenhängendes, elegantes Erscheinungsbild, das angenehm für die Augen ist. Ideal für minimale Designs, professionelle Websites und das Schaffen von Tiefe ohne Komplexität. Monochromatische Paletten sind unkompliziert und funktionieren gut für Hintergründe, UI-Elemente und die Schaffung visueller Hierarchie.",
      },
      {
        title: "Analoge Paletten",
        description:
          "Analoge Farbschemata verwenden Farben, die auf dem Farbkreis benachbart sind (typischerweise innerhalb von 30-60 Grad). Diese Paletten erzeugen ruhige, angenehme Designs, wie sie oft in der Natur vorkommen – etwa die Blau- und Grüntöne des Ozeans oder die Rot-, Orange- und Gelbtöne eines Sonnenuntergangs. Ideal für harmonische Entwürfe ohne starke Kontraste.",
      },
      {
        title: "Komplementäre Paletten",
        description:
          "Komplementäre Farben liegen auf dem Farbkreis direkt gegenüber (180 Grad getrennt) und erzeugen maximalen Kontrast und visuelle Wirkung. Beispiele sind Rot und Cyan, Blau und Orange oder Gelb und Lila. Diese Paletten sind kräftig, lebhaft und aufmerksamkeitsstark. Sie eignen sich für Call-to-Action-Buttons, wichtige Hervorhebungen oder energiegeladene Designs. Dennoch solltest du sie mit Bedacht einsetzen.",
      },
      {
        title: "Triadische Paletten",
        description:
          "Triadische Farbschemata verwenden drei Farben, die gleichmäßig um den Farbkreis verteilt sind (120 Grad voneinander entfernt). Die Primärfarben (Rot, Gelb, Blau) und Sekundärfarben (Orange, Grün, Lila) sind klassische Triaden. Diese Paletten bieten dynamischen Kontrast bei gleichzeitiger Balance und Harmonie.",
      },
    ],
  },
};
