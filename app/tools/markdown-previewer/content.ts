import type { Locale } from "@/lib/i18n/locale";

export interface MarkdownPreviewerPageContent {
  /** <title> */
  metaTitle: string;
  /** <meta description> and JSON-LD `description` */
  metaDescription: string;
  /** <meta keywords> */
  keywords: string[];
  /** Open Graph title */
  ogTitle: string;
  /** Open Graph description */
  ogDescription: string;
  /** Twitter card title (composed with " — " + site name in page.tsx) */
  twitterTitle: string;
  /** Twitter card description */
  twitterDescription: string;
  /** JSON-LD `name` */
  schemaName: string;
  /** JSON-LD `description` */
  schemaDescription: string;
  /** JSON-LD `keywords` */
  schemaKeywords: string[];
  /** Visible <h1> */
  h1: string;
  /** Intro paragraph under the h1 */
  intro: string;
  whatIsMarkdown: {
    heading: string;
    paragraph: string;
  };
  keyFacts: {
    everywhere: string;
    syntax: { prefix: string; forHeadings: string; and: string };
    tables: { prefix: string; suffix: string };
    codeBlocks: string;
    rawHtml: string;
    privacy: string;
  };
  faq: {
    items: { question: string; answer: string }[];
  };
  relatedTools: {
    intro: string;
    items: { title: string; description: string; href: string }[];
  };
}

export const pageContent: Record<Locale, MarkdownPreviewerPageContent> = {
  en: {
    metaTitle: "Markdown Previewer & Editor - Live GitHub Flavored Markdown",
    metaDescription:
      "Free online markdown editor with live preview, GitHub-flavored markdown support, syntax highlighting, and HTML export. Perfect for documentation, README files, and content creation.",
    keywords: [
      "markdown editor",
      "markdown preview",
      "gfm",
      "github flavored markdown",
      "markdown to html",
      "online markdown",
      "markdown live preview",
      "markdown syntax",
      "readme editor",
    ],
    ogTitle:
      "Markdown Previewer & Editor — Live GFM Preview with Syntax Highlighting",
    ogDescription:
      "Write and preview markdown with live rendering, GitHub-flavored markdown support, and HTML export. Free online markdown editor for developers.",
    twitterTitle: "Markdown Previewer & Editor",
    twitterDescription:
      "Live markdown editor with GitHub-flavored support and syntax highlighting. Export to HTML. Free tool.",
    schemaName: "Markdown Previewer & Editor",
    schemaDescription:
      "Write and preview markdown with live rendering, GitHub-flavored markdown support, and syntax highlighting",
    schemaKeywords: [
      "markdown editor",
      "markdown preview",
      "github flavored markdown",
      "markdown to html",
      "readme editor",
    ],
    h1: "Markdown Previewer & Editor",
    intro:
      "Write and preview markdown with live rendering, GitHub-flavored markdown support, syntax highlighting, and instant HTML export. All processing happens in your browser for complete privacy.",
    whatIsMarkdown: {
      heading: "What is Markdown?",
      paragraph:
        "Markdown is a lightweight markup language that lets you write formatted text using simple, readable plain-text syntax. It's the standard format for README files, documentation, blog posts, and notes because it stays readable even unrendered. GitHub-flavored Markdown (GFM) extends it with tables, task lists, strikethrough, and auto-linking.",
    },
    keyFacts: {
      everywhere:
        "Used everywhere: GitHub READMEs, docs sites, static site generators, note apps (Obsidian, Notion), and comments on Reddit, Discord, and Slack.",
      syntax: {
        prefix: "Core syntax:",
        forHeadings: "for headings",
        and: "and",
      },
      tables: {
        prefix: "GFM tables use pipes and hyphens, e.g.",
        suffix: "with colons for column alignment.",
      },
      codeBlocks:
        "Code blocks use triple backticks with a language name (e.g. ```javascript) to enable syntax highlighting.",
      rawHtml:
        "Raw HTML can be embedded inside Markdown for formatting it doesn't natively support, but use it sparingly.",
      privacy:
        "All parsing and rendering here happens locally in your browser — nothing you type is sent to a server.",
    },
    faq: {
      items: [
        {
          question: "What's the difference between Markdown and HTML?",
          answer:
            "Markdown is a simpler, human-readable plain-text syntax that gets converted to HTML for display. HTML offers more control but is more verbose to write and read.",
        },
        {
          question: "What is GitHub-flavored Markdown (GFM)?",
          answer:
            "GFM extends standard Markdown with tables, task list checkboxes, strikethrough, auto-linking, and syntax-highlighted code fences. It's widely supported beyond just GitHub.",
        },
        {
          question: "Is my content safe when using this tool?",
          answer:
            "Yes. All parsing and rendering happen entirely in your browser — nothing is sent to a server, and it even works offline once loaded.",
        },
        {
          question: "Why isn't my Markdown rendering correctly?",
          answer:
            "Common causes are missing blank lines around lists, quotes, or code blocks, inconsistent indentation, or mixing tabs and spaces.",
        },
      ],
    },
    relatedTools: {
      intro: "Explore other text and content tools:",
      items: [
        {
          title: "Text Diff",
          description: "Compare text differences side-by-side",
          href: "/tools/text-diff",
        },
      ],
    },
  },
  de: {
    metaTitle:
      "Markdown-Vorschau & Editor - Live-Vorschau für GitHub Flavored Markdown",
    metaDescription:
      "Kostenloser Online-Markdown-Editor mit Live-Vorschau, Unterstützung für GitHub Flavored Markdown, Syntax-Hervorhebung und HTML-Export. Ideal für Dokumentationen, README-Dateien und die Content-Erstellung.",
    keywords: [
      "markdown editor",
      "markdown vorschau",
      "gfm",
      "github flavored markdown",
      "markdown zu html",
      "online markdown",
      "markdown live vorschau",
      "markdown syntax",
      "readme editor",
    ],
    ogTitle:
      "Markdown-Vorschau & Editor — Live-GFM-Vorschau mit Syntax-Hervorhebung",
    ogDescription:
      "Markdown schreiben und mit Live-Rendering, Unterstützung für GitHub Flavored Markdown und HTML-Export in Echtzeit anzeigen. Kostenloser Online-Markdown-Editor für Entwickler.",
    twitterTitle: "Markdown-Vorschau & Editor",
    twitterDescription:
      "Live-Markdown-Editor mit Unterstützung für GitHub Flavored Markdown und Syntax-Hervorhebung. Export nach HTML. Kostenloses Tool.",
    schemaName: "Markdown-Vorschau & Editor",
    schemaDescription:
      "Markdown schreiben und mit Live-Rendering, Unterstützung für GitHub Flavored Markdown und Syntax-Hervorhebung anzeigen",
    schemaKeywords: [
      "markdown editor",
      "markdown vorschau",
      "github flavored markdown",
      "markdown zu html",
      "readme editor",
    ],
    h1: "Markdown-Vorschau & Editor",
    intro:
      "Markdown schreiben und live mit Unterstützung für GitHub Flavored Markdown, Syntax-Hervorhebung und sofortigem HTML-Export anzeigen. Die gesamte Verarbeitung erfolgt lokal im Browser für vollständige Privatsphäre.",
    whatIsMarkdown: {
      heading: "Was ist Markdown?",
      paragraph:
        "Markdown ist eine leichtgewichtige Auszeichnungssprache, mit der sich formatierter Text über eine einfache, gut lesbare Klartext-Syntax schreiben lässt. Sie ist das Standardformat für README-Dateien, Dokumentationen, Blogbeiträge und Notizen, da der Text auch unformatiert lesbar bleibt. GitHub Flavored Markdown (GFM) erweitert die Syntax um Tabellen, Aufgabenlisten, durchgestrichenen Text und automatische Verlinkung.",
    },
    keyFacts: {
      everywhere:
        "Überall im Einsatz: GitHub-READMEs, Dokumentationsseiten, Static-Site-Generatoren, Notiz-Apps (Obsidian, Notion) sowie Kommentare auf Reddit, Discord und Slack.",
      syntax: {
        prefix: "Kernsyntax:",
        forHeadings: "für Überschriften",
        and: "und",
      },
      tables: {
        prefix: "GFM-Tabellen verwenden Pipes und Bindestriche, z. B.",
        suffix: "Doppelpunkte legen dabei die Spaltenausrichtung fest.",
      },
      codeBlocks:
        "Codeblöcke verwenden drei Backticks mit einem Sprachnamen (z. B. ```javascript), um die Syntax-Hervorhebung zu aktivieren.",
      rawHtml:
        "Rohes HTML lässt sich in Markdown einbetten, um Formatierungen zu erreichen, die nicht nativ unterstützt werden – sollte aber sparsam eingesetzt werden.",
      privacy:
        "Das gesamte Parsen und Rendern erfolgt hier lokal im Browser – nichts von dem Eingegebenen wird an einen Server gesendet.",
    },
    faq: {
      items: [
        {
          question: "Was ist der Unterschied zwischen Markdown und HTML?",
          answer:
            "Markdown ist eine einfachere, für Menschen lesbare Klartext-Syntax, die zur Anzeige in HTML umgewandelt wird. HTML bietet mehr Kontrolle, ist aber aufwändiger zu schreiben und zu lesen.",
        },
        {
          question: "Was ist GitHub Flavored Markdown (GFM)?",
          answer:
            "GFM erweitert Standard-Markdown um Tabellen, Checkboxen für Aufgabenlisten, durchgestrichenen Text, automatische Verlinkung und syntax-hervorgehobene Codeblöcke. Es wird weit über GitHub hinaus unterstützt.",
        },
        {
          question: "Sind meine Inhalte bei der Nutzung dieses Tools sicher?",
          answer:
            "Ja. Das gesamte Parsen und Rendern erfolgt vollständig im Browser – es wird nichts an einen Server gesendet, und es funktioniert nach dem Laden sogar offline.",
        },
        {
          question: "Warum wird mein Markdown nicht korrekt dargestellt?",
          answer:
            "Häufige Ursachen sind fehlende Leerzeilen um Listen, Zitate oder Codeblöcke, uneinheitliche Einrückung oder eine Mischung aus Tabs und Leerzeichen.",
        },
      ],
    },
    relatedTools: {
      intro: "Weitere Text- und Content-Tools entdecken:",
      items: [
        {
          title: "Text Diff",
          description: "Textunterschiede Seite an Seite vergleichen",
          href: "/tools/text-diff",
        },
      ],
    },
  },
};
