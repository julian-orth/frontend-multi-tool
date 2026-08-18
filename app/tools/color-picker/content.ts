interface ColorFormat {
  title: string;
  /** Label preceding the format code, e.g. "Format" or (for entries listing
   * more than one notation, like the alpha channel) "Formats" */
  formatLabel: string;
  format: string;
  description: string;
}

interface ColorPickerPageContent {
  /** <title> */
  title: string;
  /** <meta description> */
  metaDescription: string;
  /** SEO keywords for <meta> */
  keywords: string[];
  /** Open Graph title (distinct from <title>) */
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
  formatsHeading: string;
  formats: ColorFormat[];
}

export const pageContent: Record<"en" | "de", ColorPickerPageContent> = {
  en: {
    title: "Color Picker & Converter - HEX, RGB, HSL Color Picker",
    metaDescription:
      "Free online color picker with instant conversion between HEX, RGB, HSL, RGBA, and HSLA. Generate color palettes, check WCAG contrast ratios, and explore color theory.",
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
    ogTitle: "Color Picker & Converter — HEX, RGB, HSL Conversion",
    ogDescription:
      "Free color picker with instant format conversion, color palettes, and WCAG contrast checking. Ideal for designers and developers.",
    twitterDescription:
      "Pick colors and convert between HEX, RGB, and HSL formats. Generate palettes and check accessibility. Free tool.",
    shortTitle: "Color Picker & Converter",
    schemaDescription:
      "Pick colors and convert between HEX, RGB, and HSL formats with WCAG contrast checking and color palettes",
    schemaKeywords: [
      "color picker",
      "hex to rgb",
      "color converter",
      "wcag contrast",
      "color palette",
    ],
    intro:
      "Pick colors, convert between formats (HEX, RGB, HSL), generate palettes, and check contrast ratios for accessibility. All calculations run entirely in your browser.",
    whatIsHeading: "What is a Color Picker?",
    whatIsParagraphs: [
      "A color picker is an essential tool for designers, developers, and digital creators, letting you select, identify, and convert colors between different formats. Whether you're designing a website, creating graphics, or building an application, choosing the right colors is crucial for aesthetics, branding, and user experience.",
      "Modern color pickers go beyond simple selection: they offer instant conversions between color formats, generate harmonious color palettes based on color theory, and even check accessibility by calculating contrast ratios against WCAG standards (Web Content Accessibility Guidelines).",
      "Our color picker supports all major web color formats: HEX (hexadecimal), RGB (red-green-blue), HSL (hue-saturation-lightness), and their alpha variants RGBA and HSLA. That makes it ideal for CSS styling, design systems, and projects that need precise color definitions.",
    ],
    formatsHeading: "Understanding Color Formats",
    formats: [
      {
        title: "HEX (Hexadecimal)",
        formatLabel: "Format",
        format: "#RRGGBB",
        description:
          "The most common format in web design: HEX colors use six hexadecimal digits for red, green, and blue (00-FF for each channel). Example: #3B82F6 is a vivid blue. It's compact, easy to copy, and universally supported in CSS and HTML.",
      },
      {
        title: "RGB (Red, Green, Blue)",
        formatLabel: "Format",
        format: "rgb(R, G, B)",
        description:
          "RGB uses three decimal values (0-255) for the red, green, and blue channels. Example: rgb(59, 130, 246). This format is more intuitive for understanding color composition and is the native format for digital displays. RGBA adds an alpha channel for transparency (0-1).",
      },
      {
        title: "HSL (Hue, Saturation, Lightness)",
        formatLabel: "Format",
        format: "hsl(H, S%, L%)",
        description:
          "HSL describes colors using hue (0-360°), saturation (0-100%), and lightness (0-100%). Example: hsl(217, 91%, 60%). This format excels at creating color variations: adjusting saturation makes colors more vivid or muted, while changing lightness produces tints and shades.",
      },
      {
        title: "Alpha Channel (Transparency)",
        formatLabel: "Formats",
        format: "rgba(), hsla()",
        description:
          "The alpha channel adds transparency to RGB and HSL colors, with values ranging from 0 (fully transparent) to 1 (fully opaque). Example: rgba(59, 130, 246, 0.5) creates a semi-transparent blue. This is essential for overlays, shadows, and modern UI design.",
      },
    ],
  },
  de: {
    title: "Farbwähler & Konverter - HEX, RGB, HSL Farbwähler",
    metaDescription:
      "Kostenloser Online-Farbwähler mit sofortiger Umwandlung zwischen HEX, RGB, HSL, RGBA und HSLA. Erzeuge Farbpalletten, prüfe WCAG-Kontrastverhältnisse und erkunde Farbtheorie.",
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
    ogTitle: "Farbwähler & Konverter — Konvertierung HEX, RGB, HSL",
    ogDescription:
      "Kostenloser Farbwähler mit sofortiger Formatumwandlung, Farbpallette und WCAG-Kontrastprüfung. Ideal für Designer und Entwickler.",
    twitterDescription:
      "Farben auswählen und zwischen HEX-, RGB- und HSL-Formaten konvertieren. Paletten erzeugen und Barrierefreiheit prüfen. Kostenloses Tool.",
    shortTitle: "Farbwähler & Konverter",
    schemaDescription:
      "Farben auswählen und zwischen HEX-, RGB- und HSL-Formaten konvertieren mit WCAG-Kontrastprüfung und Farbpalletten",
    schemaKeywords: [
      "color picker",
      "hex to rgb",
      "color converter",
      "wcag contrast",
      "color palette",
    ],
    intro:
      "Farben auswählen, zwischen Formaten (HEX, RGB, HSL) konvertieren, Paletten erzeugen und Kontrastverhältnisse für Barrierefreiheit prüfen. Alle Berechnungen laufen komplett im Browser ab.",
    whatIsHeading: "Was ist ein Farbwähler?",
    whatIsParagraphs: [
      "Ein Farbwähler ist ein essentielles Werkzeug für Designer, Entwickler und digitale Gestalter, mit dem Farben ausgewählt, identifiziert und zwischen verschiedenen Formaten konvertiert werden können. Ob du eine Website gestaltest, Grafiken erstellst oder eine Anwendung entwickelst: Die richtige Farbwahl ist für Ästhetik, Branding und Benutzererfahrung entscheidend.",
      "Moderne Farbwähler gehen über die einfache Auswahl hinaus: Sie bieten sofortige Umwandlungen zwischen Farbformaten, erzeugen harmonische Farbpallette auf Basis der Farbtheorie und prüfen sogar die Barrierefreiheit durch Berechnung von Kontrastverhältnissen nach WCAG-Standards (Web Content Accessibility Guidelines).",
      "Unser Farbwähler unterstützt alle wichtigen Web-Farbformate: HEX (hexadezimal), RGB (Rot-Grün-Blau), HSL (Farbton-Sättigung-Helligkeit) und ihre Alpha-Varianten RGBA und HSLA. Dadurch eignet er sich ideal für CSS-Styling, Designsysteme und Projekte mit präzisen Farbdefinitionen.",
    ],
    formatsHeading: "Farbformate verstehen",
    formats: [
      {
        title: "HEX (Hexadezimal)",
        formatLabel: "Format",
        format: "#RRGGBB",
        description:
          "Das häufigste Format im Webdesign: HEX-Farben verwenden sechs hexadezimale Ziffern für Rot, Grün und Blau (00-FF für jeden Kanal). Beispiel: #3B82F6 steht für ein lebhaftes Blau. Es ist kompakt, leicht zu kopieren und in CSS und HTML universell unterstützt.",
      },
      {
        title: "RGB (Rot, Grün, Blau)",
        formatLabel: "Format",
        format: "rgb(R, G, B)",
        description:
          "RGB verwendet drei Dezimalwerte (0-255) für die Rot-, Grün- und Blaukanäle. Beispiel: rgb(59, 130, 246). Dieses Format ist intuitiver, um Farbzusammensetzungen zu verstehen, und ist das native Format für digitale Displays. RGBA ergänzt einen Alphakanal für Transparenz (0-1).",
      },
      {
        title: "HSL (Farbton, Sättigung, Helligkeit)",
        formatLabel: "Format",
        format: "hsl(H, S%, L%)",
        description:
          "HSL beschreibt Farben über Farbton (0-360°), Sättigung (0-100%) und Helligkeit (0-100%). Beispiel: hsl(217, 91%, 60%). Dieses Format ist hervorragend für die Erstellung von Farbvarianten: Die Anpassung der Sättigung macht Farben lebendiger oder weniger intensiv, während die Veränderung der Helligkeit Töne und Schattierungen erzeugt.",
      },
      {
        title: "Alphakanal (Transparenz)",
        formatLabel: "Formate",
        format: "rgba(), hsla()",
        description:
          "Der Alphakanal fügt RGB- und HSL-Farben Transparenz hinzu, mit Werten von 0 (vollständig transparent) bis 1 (vollständig undurchsichtig). Beispiel: rgba(59, 130, 246, 0.5) erzeugt ein halbtransparentes Blau. Das ist für Overlays, Schatten und modernes UI-Design essenziell.",
      },
    ],
  },
};
