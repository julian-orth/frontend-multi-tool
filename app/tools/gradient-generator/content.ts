export interface GradientGeneratorPageContent {
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
  typesSection: {
    heading: string;
    items: { title: string; description: string }[];
  };
}

export const pageContent: Record<"en" | "de", GradientGeneratorPageContent> = {
  en: {
    title: "CSS Gradient Generator - Linear, Radial & Conic Gradients",
    metaDescription:
      "Create beautiful CSS gradients with our free online generator. Choose from 45+ preset gradients or build your own linear, radial, and conic gradients. Export as CSS, SCSS, Tailwind, JSON, and SVG. Perfect for web design and development.",
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
    ogTitle: "CSS Gradient Generator — Create Beautiful Gradients with 45+ Presets",
    ogDescription:
      "Free CSS gradient generator with linear, radial, and conic gradients. Export as CSS, Tailwind, SCSS, JSON, and SVG. 45+ presets included.",
    twitterDescription:
      "Create stunning CSS gradients with 45+ presets. Export as CSS, Tailwind, and more. Free online tool.",
    schemaDescription:
      "Create beautiful CSS gradients with 45+ presets. Generate linear, radial, and conic gradients with custom colors",
    schemaKeywords: [
      "gradient generator",
      "css gradient",
      "linear gradient",
      "radial gradient",
      "gradient maker",
    ],
    h1: "CSS Gradient Generator",
    intro:
      "Create stunning CSS gradients with 45+ high-quality presets or design your own linear, radial, and conic gradients. Export as CSS, SCSS, Tailwind, JSON, and SVG. All calculations run in the browser.",
    whatIsSection: {
      heading: "What Is a CSS Gradient?",
      paragraphs: [
        "CSS gradients are smooth transitions between two or more colors, created entirely with CSS without requiring any image files. Gradients give web designs depth, visual interest, and a modern aesthetic without increasing load times, and they stay sharp at every screen resolution. Unlike images, CSS gradients are scalable, lightweight, and easy to adjust with code.",
        "Modern browsers support three types of gradients: linear (transitioning along a straight line), radial (transitioning outward from a center point), and conic (transitioning around a center point). Each type offers unique visual effects for different design needs — from subtle background textures to eye-catching hero sections.",
        "Gradients are essential in modern web design and are used by major brands like Instagram, Stripe, and Spotify. They create visual hierarchy, direct users' attention, add depth to flat designs, and establish memorable brand identities. Our generator offers 45+ professionally designed presets as well as a custom editor for exactly what you have in mind.",
        "Whether you're building a website, designing a landing page, creating marketing materials, or developing a web app, gradients are an elegant way to enhance your design without sacrificing performance. Every gradient produced by this tool is production-ready CSS code that works in all modern browsers.",
      ],
    },
    typesSection: {
      heading: "Types of CSS Gradients",
      items: [
        {
          title: "Linear Gradients",
          description:
            "Linear gradients create smooth color transitions along a straight line. Direction can be controlled with angles (0-360°) or directional keywords. Ideal for backgrounds, headers, buttons, and adding depth. The most versatile and commonly used gradient type in web design.",
        },
        {
          title: "Radial Gradients",
          description:
            "Radial gradients radiate outward from a center point, spreading in circular or elliptical patterns. Ideal for spotlights, glow effects, vignettes, and focused highlights. Perfect for call-to-action buttons, badges, and drawing attention to specific elements.",
        },
        {
          title: "Conic Gradients",
          description:
            "Conic gradients rotate colors around a center point, creating a circular effect with pie-like arrangement. Perfect for progress indicators, pie charts, color wheels, and unique geometric patterns.",
        },
      ],
    },
  },
  de: {
    title: "CSS-Verlaufsgenerator - Lineare, radiale und konische Verläufe",
    metaDescription:
      "Erstelle schöne CSS-Verläufe mit unserem kostenlosen Online-Generator. Wähle aus 45+ vordefinierten Verläufen oder erstelle eigene lineare, radiale und konische Verläufe. Exportiere als CSS, SCSS, Tailwind, JSON und SVG. Perfekt für Webdesign und Entwicklung.",
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
    ogTitle: "CSS-Verlaufsgenerator — Schöne Verläufe mit 45+ Presets erstellen",
    ogDescription:
      "Kostenloser CSS-Verlaufsgenerator mit linearen, radialen und konischen Verläufen. Export als CSS, Tailwind, SCSS, JSON und SVG. 45+ Presets inklusive.",
    twitterDescription:
      "Erstelle beeindruckende CSS-Verläufe mit 45+ Presets. Export als CSS, Tailwind und mehr. Kostenloses Online-Tool.",
    schemaDescription:
      "Erstelle schöne CSS-Verläufe mit 45+ Presets. Generiere lineare, radiale und konische Verläufe mit individuellen Farben",
    schemaKeywords: [
      "gradient generator",
      "css gradient",
      "linear gradient",
      "radial gradient",
      "gradient maker",
    ],
    h1: "CSS-Verlaufsgenerator",
    intro:
      "Erstelle beeindruckende CSS-Verläufe mit 45+ hochwertigen Presets oder gestalte eigene lineare, radiale und konische Verläufe. Exportiere als CSS, SCSS, Tailwind, JSON und SVG. Alle Berechnungen laufen im Browser ab.",
    whatIsSection: {
      heading: "Was ist ein CSS-Verlauf?",
      paragraphs: [
        "CSS-Verläufe sind sanfte Übergänge zwischen zwei oder mehr Farben, die vollständig mit CSS erstellt werden, ohne Bilddateien zu benötigen. Verläufe verleihen Webdesigns Tiefe, visuelles Interesse und eine moderne Ästhetik, ohne die Ladezeiten zu erhöhen und bei jeder Bildschirmauflösung scharf zu bleiben. Im Gegensatz zu Bildern sind CSS-Verläufe skalierbar, leichtgewichtig und mit Code einfach anzupassen.",
        "Moderne Browser unterstützen drei Arten von Verläufen: lineare (Übergang entlang einer geraden Linie), radiale (Übergang vom Mittelpunkt aus) und konische (Übergang um einen Mittelpunkt herum). Jede Art bietet einzigartige visuelle Effekte für unterschiedliche Design-Anforderungen – von subtilen Hintergrundtexturen bis hin zu auffälligen Hero-Bereichen.",
        "Verläufe sind im modernen Webdesign essenziell und werden von großen Marken wie Instagram, Stripe und Spotify genutzt. Sie schaffen visuelle Hierarchie, lenken die Aufmerksamkeit der Nutzer, verleihen flachen Designs Tiefe und etablieren einprägsame Markenidentitäten. Unser Generator bietet 45+ professionell gestaltete Presets sowie einen individuellen Editor für genau das, was du dir vorstellst.",
        "Egal, ob du eine Website baust, eine Landingpage gestaltest, Marketingmaterialien erstellst oder eine Webanwendung entwickelst: Verläufe sind ein eleganter Weg, um das Design zu verbessern, ohne Performance zu opfern. Alle von diesem Tool erzeugten Verläufe sind produktionsreife CSS-Codes, die in allen modernen Browsern funktionieren.",
      ],
    },
    typesSection: {
      heading: "Arten von CSS-Verläufen",
      items: [
        {
          title: "Lineare Verläufe",
          description:
            "Lineare Verläufe erzeugen glatte Farbübergänge entlang einer geraden Linie. Die Richtung lässt sich über Winkel (0-360°) oder Richtungsbegriffe steuern. Ideal für Hintergründe, Header, Buttons und das Erzeugen von Tiefe. Der vielseitigste und am häufigsten genutzte Verlaufstyp im Webdesign.",
        },
        {
          title: "Radiale Verläufe",
          description:
            "Radiale Verläufe strahlen von einem Mittelpunkt aus und verbreiten sich in kreisförmigen oder elliptischen Mustern. Ideal für Spotlights, Leuchteffekte, Vignetten und fokussierte Hervorhebungen. Perfekt für Call-to-Action-Buttons, Badges und das Sichtbarmachen von bestimmten Elementen.",
        },
        {
          title: "Konische Verläufe",
          description:
            "Konische Verläufe drehen Farben um einen Mittelpunkt und bilden einen kreisförmigen Effekt mit pie-ähnlicher Ausrichtung. Perfekt für Fortschrittsindikatoren, Kreisdiagramme, Farbkreise und einzigartige geometrische Muster.",
        },
      ],
    },
  },
};
