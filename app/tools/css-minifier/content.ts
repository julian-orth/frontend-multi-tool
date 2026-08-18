export interface CssMinifierPageContent {
  /** <title> and JSON-LD `name` */
  title: string;
  /** <meta description> */
  metaDescription: string;
  /** SEO keywords for <meta> */
  keywords: string[];
  /** Open Graph title/description */
  ogTitle: string;
  ogDescription: string;
  /** Twitter card title/description */
  twitterDescription: string;
  /** JSON-LD `description` and `keywords` (shorter/curated subset) */
  schemaDescription: string;
  schemaKeywords: string[];
  /** Visible <h1> */
  h1: string;
  /** Intro paragraph under the h1 */
  intro: string;
  whatIsSection: {
    heading: string;
    paragraphs: string[];
  };
  useCasesSection: {
    heading: string;
    items: { title: string; description: string }[];
  };
  featuresSection: {
    heading: string;
    items: { title: string; description: string }[];
  };
}

export const pageContent: Record<"en" | "de", CssMinifierPageContent> = {
  en: {
    title: "CSS Minifier/Beautifier - Minify & Format CSS Online",
    metaDescription:
      "Free CSS minifier and beautifier. Minify CSS to reduce file size or format it for readability. Instant formatting with options to keep comments. No data is sent to a server — everything runs in the browser.",
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
    ogTitle: "CSS Minifier/Beautifier — Minify & Format CSS Online",
    ogDescription:
      "Minify CSS to reduce file size or format it for readability. Instant formatting, comment preservation, and no data transmission.",
    twitterDescription: "Minify or beautify CSS. Everything runs in the browser.",
    schemaDescription: "Minify CSS to reduce file size or format it for readability",
    schemaKeywords: [
      "css minifier",
      "css beautifier",
      "minify css",
      "css formatter",
      "css optimizer",
    ],
    h1: "CSS Minifier/Beautifier",
    intro:
      "Minify CSS to reduce file size or format it for better readability — with instant formatting, comment preservation, and no data transmission. Everything runs in the browser for complete privacy.",
    whatIsSection: {
      heading: "What Is CSS Minification?",
      paragraphs: [
        "CSS minification is the process of removing unnecessary characters from CSS code without changing its functionality. This includes whitespace, line breaks, comments, and shortening color values and other values wherever possible. The result is a significantly smaller file that loads faster and works identically.",
        "Modern websites often contain hundreds of kilobytes of CSS across multiple stylesheets. Every byte matters for load speed, which directly affects user experience, SEO, and conversion. Minification typically reduces CSS file size by 20-40%.",
        "CSS beautification, on the other hand, is the reverse process: indentation, line breaks, and whitespace are added so that minified or poorly formatted CSS becomes readable and maintainable.",
      ],
    },
    useCasesSection: {
      heading: "Common Use Cases for CSS Minification",
      items: [
        {
          title: "Production Website Optimization",
          description:
            "Minify CSS before deployment to reduce load times and bandwidth usage.",
        },
        {
          title: "Build Pipeline Integration",
          description:
            "Integrate minification into build processes while keeping development versions readable.",
        },
        {
          title: "Debugging Third-Party CSS",
          description:
            "Format minified CSS from libraries, CDNs, or legacy code to debug layout issues.",
        },
        {
          title: "Email Template Optimization",
          description:
            "Minify inline CSS in emails to reduce file size and stay under size limits.",
        },
        {
          title: "Mobile App Performance",
          description:
            "Smaller CSS files mean faster load times and better performance on mobile networks.",
        },
        {
          title: "Code Review and Learning",
          description:
            "Format CSS before reviews so team members can spot issues more easily and learn best practices.",
        },
      ],
    },
    featuresSection: {
      heading: "Minification & Formatting Features",
      items: [
        {
          title: "Minify CSS",
          description:
            "Removes unnecessary whitespace, line breaks, and indentation while optionally preserving important comments. Colors are shortened and zero values are optimized.",
        },
        {
          title: "Format CSS",
          description:
            "Formats CSS with clean indentation, line breaks, and spacing for maximum readability. Especially useful for minified or poorly formatted code.",
        },
      ],
    },
  },
  de: {
    title: "CSS Minifier/Beautifier - CSS online minimieren & formatieren",
    metaDescription:
      "Kostenloser CSS-Minifier und -Beautifier. CSS minimieren, um die Dateigröße zu reduzieren oder leserlich zu formatieren. Sofortige Formatierung mit Optionen zum Behalten von Kommentaren. Keine Daten werden an Server gesendet – alles läuft im Browser.",
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
    ogTitle: "CSS Minifier/Beautifier — CSS online minimieren & formatieren",
    ogDescription:
      "CSS minimieren, um die Dateigröße zu reduzieren oder leserlich zu formatieren. Sofortige Formatierung, Kommentarerhaltung und keine Datentransmission.",
    twitterDescription: "CSS minimieren oder lesbar formatieren. Alles läuft im Browser.",
    schemaDescription: "CSS minimieren, um die Dateigröße zu reduzieren oder für Lesbarkeit zu formatieren",
    schemaKeywords: [
      "css minifier",
      "css beautifier",
      "minify css",
      "css formatter",
      "css optimizer",
    ],
    h1: "CSS Minifier/Beautifier",
    intro:
      "CSS minimieren, um die Dateigröße zu reduzieren oder für bessere Lesbarkeit zu formatieren – mit sofortiger Formatierung, Kommentarerhaltung und ohne Datentransmission. Alles läuft im Browser für vollständige Privatsphäre.",
    whatIsSection: {
      heading: "Was ist CSS-Minifizierung?",
      paragraphs: [
        "CSS-Minifizierung ist der Prozess, überflüssige Zeichen aus CSS-Code zu entfernen, ohne die Funktionalität zu verändern. Dazu zählen Leerzeichen, Zeilenumbrüche, Kommentare und die Verkürzung von Farbwerten und anderen Werten, soweit möglich. Das Ergebnis ist eine deutlich kleinere Datei, die schneller lädt und identisch funktioniert.",
        "Moderne Websites enthalten oft Hunderte von Kilobytes CSS-Code über mehrere Stylesheets. Jedes Byte zählt bei der Ladegeschwindigkeit, was sich direkt auf Nutzererlebnis, SEO und Conversion auswirkt. Minifizierung reduziert die CSS-Dateigröße typischerweise um 20-40%.",
        "CSS-Beautification ist hingegen der umgekehrte Prozess: Einrückung, Zeilenumbrüche und Leerzeichen werden ergänzt, damit minifizierter oder schlecht formatierter CSS-Code lesbar und wartbar wird.",
      ],
    },
    useCasesSection: {
      heading: "Häufige Anwendungsfälle für CSS-Minifizierung",
      items: [
        {
          title: "Optimierung von Produktiv-Websites",
          description:
            "CSS vor dem Deployment minimieren, um Ladezeiten und Bandbreitenverbrauch zu reduzieren.",
        },
        {
          title: "Build-Pipeline-Integration",
          description:
            "Minifizierung in Build-Prozesse integrieren, während Entwicklungsvarianten lesbar bleiben.",
        },
        {
          title: "Debugging von Drittanbieter-CSS",
          description:
            "Minifizierten CSS-Code von Bibliotheken, CDNs oder Legacy-Code formatiert anzeigen, um Layoutprobleme zu debuggen.",
        },
        {
          title: "Optimierung von E-Mail-Templates",
          description:
            "Inline-CSS in E-Mails minimieren, um Dateigröße und Größenlimits zu reduzieren.",
        },
        {
          title: "Performance mobiler Apps",
          description:
            "Kleinere CSS-Dateien sorgen für schnellere Ladezeiten und bessere Leistung auf mobilen Netzwerken.",
        },
        {
          title: "Code-Review und Lernen",
          description:
            "CSS vor Reviews formatieren, damit Teammitglieder Probleme leichter erkennen und Best Practices lernen.",
        },
      ],
    },
    featuresSection: {
      heading: "Funktionen für Minifizierung & Formatierung",
      items: [
        {
          title: "CSS minimieren",
          description:
            "Entfernt überflüssige Leerzeichen, Zeilenumbrüche und Einrückungen und behält wichtige Kommentare optional bei. Farben werden verkürzt und Nullwerte optimiert.",
        },
        {
          title: "CSS formatieren",
          description:
            "Formatiert CSS mit sauberer Einrückung, Zeilenumbrüchen und Abständen für maximale Lesbarkeit. Besonders nützlich bei minifiziertem oder schlecht formatiertem Code.",
        },
      ],
    },
  },
};
