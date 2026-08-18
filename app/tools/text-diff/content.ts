import type { Locale } from "@/lib/i18n/locale";

interface FactPart {
  text: string;
  bold?: boolean;
  code?: boolean;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface RelatedToolCard {
  href: string;
  name: string;
  description: string;
}

export interface TextDiffPageContent {
  /** <title> and <meta description> */
  title: string;
  metaDescription: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  /** Short base title the Twitter card title is built from: `${twitterTitle} — ${SITE_CONFIG.name}` */
  twitterTitle: string;
  twitterDescription: string;
  /** JSON-LD name/description/keywords */
  schemaName: string;
  schemaDescription: string;
  schemaKeywords: string[];
  h1: string;
  intro: string;
  whatIsHeading: string;
  whatIsParagraph: string;
  keyFacts: FactPart[][];
  faq: FaqItem[];
  relatedToolsHeading: string;
  relatedToolsIntro: string;
  relatedTools: RelatedToolCard[];
}

export const pageContent: Record<Locale, TextDiffPageContent> = {
  en: {
    title: "Text Diff Checker - Compare Text Differences Online",
    metaDescription:
      "Free online text diff tool to compare two texts side-by-side or in unified view. Visualize additions, deletions, and changes with line-by-line, word-by-word, or character-by-character comparison.",
    keywords: [
      "text diff",
      "compare text",
      "text comparison",
      "diff checker",
      "side by side diff",
      "unified diff",
      "text changes",
      "file comparison",
      "merge conflicts",
      "code review",
    ],
    ogTitle: "Text Diff Checker - Compare Text Differences Online",
    ogDescription:
      "Compare two texts and visualize differences with split or unified view. Perfect for reviewing changes, merging files, and code reviews.",
    twitterTitle: "Text Diff Checker",
    twitterDescription:
      "Compare two texts and visualize differences with split or unified view. Perfect for reviewing changes, merging files, and code reviews.",
    schemaName: "Text Diff Checker",
    schemaDescription:
      "Free online text diff tool to compare two texts side-by-side or in unified view. Visualize additions, deletions, and changes with line-by-line, word-by-word, or character-by-character comparison.",
    schemaKeywords: [
      "text diff",
      "compare text",
      "text comparison",
      "diff checker",
      "side by side diff",
      "unified diff",
      "text changes",
      "file comparison",
      "merge conflicts",
      "code review",
    ],
    h1: "Text Diff Checker",
    intro:
      "Compare two texts and visualize differences side-by-side or in unified view",
    whatIsHeading: "What is a Text Diff Tool?",
    whatIsParagraph:
      "A text diff (difference) tool compares two text documents and highlights exactly what has been added, removed, or modified between them. It's used for code reviews, comparing document versions, checking configuration files, and resolving merge conflicts. This tool uses the Myers diff algorithm—the same approach used by Git—to compute changes accurately, entirely in your browser.",
    keyFacts: [
      [
        { text: "Split view", bold: true },
        {
          text: " shows both texts side-by-side in parallel columns for context; ",
        },
        { text: "unified view", bold: true },
        {
          text: " combines them into one column with +/- markers, matching Git's patch format.",
        },
      ],
      [
        { text: "Line-by-line", bold: true },
        { text: " mode is best for code and config files, " },
        { text: "word-by-word", bold: true },
        { text: " for prose and documentation, and " },
        { text: "character-by-character", bold: true },
        { text: " for spotting typos or precise data changes." },
      ],
      [
        {
          text: 'Use "ignore whitespace" to skip formatting-only changes and "ignore case" for case-insensitive comparisons.',
        },
      ],
      [
        { text: "Generated unified diff patches can be applied with " },
        { text: "git apply patch.diff", code: true },
        { text: " or the Unix " },
        { text: "patch", code: true },
        { text: " command." },
      ],
      [
        {
          text: "All comparison happens locally in your browser—no files or text are ever uploaded, so the tool works offline too.",
        },
      ],
      [
        {
          text: "Designed for text only; use dedicated tools for binary files or images, and keep files under 1-2MB for best performance.",
        },
      ],
    ],
    faq: [
      {
        question: "What algorithm does this diff tool use?",
        answer:
          "It uses the Myers diff algorithm, the same one that powers Git and Unix diff, which finds the shortest edit script between two texts quickly and accurately.",
      },
      {
        question: "What's the difference between split and unified view?",
        answer:
          "Split view shows both texts side-by-side for context; unified view combines them into one column with +/- markers, matching Git's patch format for quick scanning.",
      },
      {
        question: "Why should I ignore whitespace when comparing code?",
        answer:
          'Formatting changes like indentation or line endings don\'t affect functionality but can create false "changes" — ignoring whitespace lets you focus on real code changes.',
      },
      {
        question: "Is my data safe when using this tool?",
        answer:
          "Yes. All comparison happens locally in your browser—nothing is uploaded to any server, so it's safe for sensitive or private documents.",
      },
    ],
    relatedToolsHeading: "Related Developer Tools",
    relatedToolsIntro:
      "Explore other text processing and development tools to enhance your workflow:",
    relatedTools: [
      {
        href: "/tools/json-formatter",
        name: "JSON Formatter",
        description:
          "Format JSON files before comparing them for better diff results",
      },
      {
        href: "/tools/regex-tester",
        name: "Regex Tester",
        description: "Test patterns to find specific changes in text",
      },
      {
        href: "/tools/base64",
        name: "Base64 Encoder/Decoder",
        description: "Decode Base64 content before comparing",
      },
    ],
  },
  de: {
    title: "Text-Diff-Checker - Textunterschiede online vergleichen",
    metaDescription:
      "Kostenloses Online-Tool zum Vergleichen von zwei Texten nebeneinander oder in vereinter Ansicht. Ergänzungen, Löschungen und Änderungen zeilenweise, wortweise oder zeichenweise visualisieren.",
    keywords: [
      "text-diff",
      "text vergleichen",
      "textvergleich",
      "diff-checker",
      "diff nebeneinander",
      "vereinter diff",
      "textänderungen",
      "dateivergleich",
      "merge-konflikte",
      "code-review",
    ],
    ogTitle: "Text-Diff-Checker - Textunterschiede online vergleichen",
    ogDescription:
      "Vergleiche zwei Texte und visualisiere Unterschiede in geteilter oder vereinter Ansicht. Perfekt zum Prüfen von Änderungen, Zusammenführen von Dateien und Code-Reviews.",
    twitterTitle: "Text-Diff-Checker",
    twitterDescription:
      "Vergleiche zwei Texte und visualisiere Unterschiede in geteilter oder vereinter Ansicht. Perfekt zum Prüfen von Änderungen, Zusammenführen von Dateien und Code-Reviews.",
    schemaName: "Text-Diff-Checker",
    schemaDescription:
      "Kostenloses Online-Tool zum Vergleichen von zwei Texten nebeneinander oder in vereinter Ansicht. Ergänzungen, Löschungen und Änderungen zeilenweise, wortweise oder zeichenweise visualisieren.",
    schemaKeywords: [
      "text-diff",
      "text vergleichen",
      "textvergleich",
      "diff-checker",
      "diff nebeneinander",
      "vereinter diff",
      "textänderungen",
      "dateivergleich",
      "merge-konflikte",
      "code-review",
    ],
    h1: "Text-Diff-Checker",
    intro:
      "Vergleiche zwei Texte und visualisiere Unterschiede nebeneinander oder in vereinter Ansicht",
    whatIsHeading: "Was ist ein Text-Diff-Tool?",
    whatIsParagraph:
      "Ein Text-Diff-Tool (Differenz-Tool) vergleicht zwei Textdokumente und zeigt genau, was zwischen ihnen hinzugefügt, entfernt oder geändert wurde. Es wird für Code-Reviews, den Vergleich von Dokumentversionen, die Prüfung von Konfigurationsdateien und das Lösen von Merge-Konflikten eingesetzt. Dieses Tool nutzt den Myers-Diff-Algorithmus – denselben Ansatz, den auch Git verwendet –, um Änderungen präzise und vollständig in deinem Browser zu berechnen.",
    keyFacts: [
      [
        { text: "Geteilte Ansicht", bold: true },
        {
          text: " zeigt beide Texte nebeneinander in parallelen Spalten für mehr Kontext; ",
        },
        { text: "vereinte Ansicht", bold: true },
        {
          text: " fasst sie in einer Spalte mit +/- Markierungen zusammen, passend zum Patch-Format von Git.",
        },
      ],
      [
        { text: "Zeilenweise", bold: true },
        { text: " eignet sich am besten für Code- und Konfigurationsdateien, " },
        { text: "wortweise", bold: true },
        { text: " für Fließtext und Dokumentation und " },
        { text: "zeichenweise", bold: true },
        { text: " zum Aufspüren von Tippfehlern oder präzisen Datenänderungen." },
      ],
      [
        {
          text: 'Mit „Leerzeichen ignorieren" werden rein formatierungsbedingte Änderungen übersprungen, mit „Groß-/Kleinschreibung ignorieren" wird unabhängig von der Schreibweise verglichen.',
        },
      ],
      [
        { text: "Erzeugte vereinte Diff-Patches lassen sich mit " },
        { text: "git apply patch.diff", code: true },
        { text: " oder dem Unix-Befehl " },
        { text: "patch", code: true },
        { text: " anwenden." },
      ],
      [
        {
          text: "Der gesamte Vergleich läuft lokal in deinem Browser ab – es werden keine Dateien oder Texte hochgeladen, daher funktioniert das Tool auch offline.",
        },
      ],
      [
        {
          text: "Ausgelegt für reinen Text; für Binärdateien oder Bilder spezialisierte Tools verwenden und Dateien unter 1-2 MB halten für die beste Performance.",
        },
      ],
    ],
    faq: [
      {
        question: "Welchen Algorithmus verwendet dieses Diff-Tool?",
        answer:
          "Es verwendet den Myers-Diff-Algorithmus, denselben, der auch Git und Unix diff antreibt und der das kürzeste Edit-Skript zwischen zwei Texten schnell und präzise findet.",
      },
      {
        question: "Was ist der Unterschied zwischen geteilter und vereinter Ansicht?",
        answer:
          "Die geteilte Ansicht zeigt beide Texte nebeneinander für mehr Kontext; die vereinte Ansicht fasst sie in einer Spalte mit +/- Markierungen zusammen, passend zum Patch-Format von Git, für schnelles Überfliegen.",
      },
      {
        question: "Warum sollte ich Leerzeichen beim Vergleichen von Code ignorieren?",
        answer:
          'Formatierungsänderungen wie Einrückung oder Zeilenumbrüche wirken sich nicht auf die Funktionalität aus, können aber unechte „Änderungen" erzeugen – wer Leerzeichen ignoriert, kann sich auf die echten Codeänderungen konzentrieren.',
      },
      {
        question: "Sind meine Daten bei der Nutzung dieses Tools sicher?",
        answer:
          "Ja. Der gesamte Vergleich läuft lokal in deinem Browser ab – nichts wird an einen Server hochgeladen, daher ist es sicher für sensible oder private Dokumente.",
      },
    ],
    relatedToolsHeading: "Passende Entwickler-Tools",
    relatedToolsIntro:
      "Entdecke weitere Text- und Entwicklungstools, um deinen Workflow zu verbessern:",
    relatedTools: [
      {
        href: "/tools/json-formatter",
        name: "JSON-Formatierer",
        description:
          "JSON-Dateien vor dem Vergleich formatieren für bessere Diff-Ergebnisse",
      },
      {
        href: "/tools/regex-tester",
        name: "Regex-Tester",
        description: "Muster testen, um bestimmte Änderungen im Text zu finden",
      },
      {
        href: "/tools/base64",
        name: "Base64-Encoder/Decoder",
        description: "Base64-Inhalte vor dem Vergleich dekodieren",
      },
    ],
  },
};
