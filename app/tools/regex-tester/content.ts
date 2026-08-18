export interface RegexTesterPageContent {
  /** <title> */
  title: string;
  /** <meta description> */
  metaDescription: string;
  /** SEO keywords for <meta> */
  keywords: string[];
  /** Open Graph title/description */
  ogTitle: string;
  ogDescription: string;
  /** Twitter card description */
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
  flagsSection: {
    heading: string;
    items: { flag: string; title: string; description: string }[];
  };
}

export const pageContent: Record<"en" | "de", RegexTesterPageContent> = {
  en: {
    title: "Regex Tester - Test and Debug Regular Expressions Online",
    metaDescription:
      "Free regex tester with real-time highlighting, capture groups, and common pattern examples. Test regular expressions with multiple flags and live mode for JavaScript, Python, and more.",
    keywords: [
      "regex",
      "regular expression",
      "regex tester",
      "regex validator",
      "pattern matcher",
      "regex debugger",
      "regex tool",
      "regex online",
      "regex test",
      "regex flags",
    ],
    ogTitle: "Regex Tester — Test Regular Expressions with Live Highlighting",
    ogDescription:
      "Free regex tester with real-time highlighting, capture groups, and pattern examples. Debug regular expressions directly in your browser.",
    twitterDescription:
      "Test and debug regular expressions with real-time highlighting and capture groups. Free online tool.",
    schemaDescription:
      "Test and debug regular expressions with real-time highlighting, capture groups, and comprehensive flag support",
    schemaKeywords: [
      "regex tester",
      "regular expression",
      "pattern matcher",
      "regex debugger",
      "regex validator",
    ],
    h1: "Regex Tester",
    intro:
      "Test and debug regular expressions with real-time highlighting, capture groups, and comprehensive flag support. Everything runs in your browser and stays private.",
    whatIsSection: {
      heading: "What Are Regular Expressions?",
      paragraphs: [
        "Regular expressions (regex or RegExp) are powerful patterns used to search, match, and manipulate text. They offer a compact and flexible way to identify character sequences — specific characters, words, or patterns within larger blocks of text. Regular expressions are supported in nearly every modern programming language, including JavaScript, Python, Java, PHP, Ruby, and many others.",
        'A regex pattern is made up of a sequence of characters that define a search pattern. These patterns can include literal characters (like "cat"), special characters called metacharacters (such as . * + ? [ ] {} ( ) ^ $ | \\), and character sets. The real strength of regular expressions lies in their ability to express complex search logic in a compact, declarative syntax.',
        "Originally developed in the 1950s by mathematician Stephen Cole Kleene as a notation for regular languages, regular expressions became widely used in the 1970s through Unix tools like grep, sed, and awk. Today they're an essential tool for developers, data analysts, and anyone working with text processing and validation.",
      ],
    },
    useCasesSection: {
      heading: "Common Use Cases for Regular Expressions",
      items: [
        {
          title: "Form Validation",
          description:
            "Validate user input for email addresses, phone numbers, postal codes, credit card numbers, passwords, and other structured data.",
        },
        {
          title: "Text Search & Replace",
          description:
            "Search and replace complex patterns in text editors, IDEs, and scripts.",
        },
        {
          title: "Data Extraction",
          description:
            "Extract specific information from logs, documents, or web pages.",
        },
        {
          title: "URL Routing",
          description:
            "Web frameworks use regex patterns to extract parameters from URL paths.",
        },
        {
          title: "Log Analysis",
          description:
            "Parse server logs, application logs, and system logs to extract relevant information.",
        },
        {
          title: "Syntax Highlighting",
          description:
            "Code editors and IDEs use regex to recognize keywords, strings, and comments.",
        },
      ],
    },
    flagsSection: {
      heading: "Understanding Regex Flags",
      items: [
        {
          flag: "g",
          title: "Global Flag",
          description:
            "Without the global flag, regex only finds the first match. With it enabled, the regex searches the entire string and returns all matches. Essential for search/replace and text analysis.",
        },
        {
          flag: "i",
          title: "Case-Insensitive Flag",
          description:
            'Makes pattern matching case-independent. Example: /hello/i matches "hello", "Hello", "HELLO", and every other variant.',
        },
        {
          flag: "m",
          title: "Multiline Flag",
          description:
            "Changes the behavior of the ^ and $ anchors. Without this flag, ^ only matches the start of the entire string and $ only the end. With multiline enabled, ^ matches the start of every line and $ the end of every line.",
        },
        {
          flag: "s",
          title: "DotAll Flag",
          description:
            "By default, the dot (.) matches any character except newlines. The dotAll flag changes this behavior so that . also matches line breaks.",
        },
      ],
    },
  },
  de: {
    title: "Regex Tester - Reguläre Ausdrücke online testen und debuggen",
    metaDescription:
      "Kostenloser Regex-Tester mit Echtzeit-Highlighting, Capture Groups und häufigen Musterbeispielen. Teste reguläre Ausdrücke mit mehreren Flags und Live-Modus für JavaScript, Python und mehr.",
    keywords: [
      "regex",
      "regular expression",
      "regex tester",
      "regex validator",
      "pattern matcher",
      "regex debugger",
      "regex tool",
      "regex online",
      "regex test",
      "regex flags",
    ],
    ogTitle: "Regex Tester — Reguläre Ausdrücke mit Live-Highlighting testen",
    ogDescription:
      "Kostenloser Regex-Tester mit Echtzeit-Highlighting, Capture Groups und Musterbeispielen. Reguläre Ausdrücke direkt im Browser debuggen.",
    twitterDescription:
      "Reguläre Ausdrücke mit Echtzeit-Highlighting und Capture Groups testen und debuggen. Kostenloses Online-Tool.",
    schemaDescription:
      "Reguläre Ausdrücke mit Echtzeit-Highlighting, Capture Groups und umfassender Flag-Unterstützung testen und debuggen",
    schemaKeywords: [
      "regex tester",
      "regular expression",
      "pattern matcher",
      "regex debugger",
      "regex validator",
    ],
    h1: "Regex Tester",
    intro:
      "Reguläre Ausdrücke mit Echtzeit-Highlighting, Capture Groups und umfassender Flag-Unterstützung testen und debuggen. Alles läuft im Browser und bleibt privat.",
    whatIsSection: {
      heading: "Was sind reguläre Ausdrücke?",
      paragraphs: [
        "Reguläre Ausdrücke (Regex oder RegExp) sind leistungsstarke Muster, mit denen Text gesucht, abgeglichen und bearbeitet wird. Sie bieten eine kompakte und flexible Möglichkeit, Zeichenfolgen zu identifizieren, etwa bestimmte Zeichen, Wörter oder Muster innerhalb größerer Textmengen. Reguläre Ausdrücke werden in fast jeder modernen Programmiersprache unterstützt, darunter JavaScript, Python, Java, PHP, Ruby und viele andere.",
        "Ein Regex-Muster setzt sich aus einer Folge von Zeichen zusammen, die ein Suchmuster definieren. Diese Muster können literale Zeichen (wie „cat“), Sonderzeichen namens Metazeichen (wie . * + ? [ ] {} ( ) ^ $ | \\) und Zeichensätze enthalten. Die eigentliche Stärke regulärer Ausdrücke liegt in der Möglichkeit, komplexe Suchlogik in einer kompakten, deklarativen Syntax auszudrücken.",
        "Ursprünglich in den 1950er Jahren von Mathematiker Stephen Cole Kleene als Notation für reguläre Sprachen entwickelt, wurden reguläre Ausdrücke in den 1970er Jahren in Unix-Tools wie grep, sed und awk weit verbreitet. Heute sind sie ein wichtiges Werkzeug für Entwickler, Datenanalysten und alle, die mit Textverarbeitung und Validierung arbeiten.",
      ],
    },
    useCasesSection: {
      heading: "Häufige Anwendungsfälle für reguläre Ausdrücke",
      items: [
        {
          title: "Formularvalidierung",
          description:
            "Validierung von Benutzereingaben für E-Mail-Adressen, Telefonnummern, Postleitzahlen, Kreditkartennummern, Passwörter und andere strukturierte Daten.",
        },
        {
          title: "Textsuche & Ersetzen",
          description:
            "Suche und Ersetzung komplexer Muster in Texteditoren, IDEs und Skripten.",
        },
        {
          title: "Datenerfassung",
          description:
            "Extraktion bestimmter Informationen aus Logs, Dokumenten oder Webseiten.",
        },
        {
          title: "URL-Routing",
          description:
            "Web-Frameworks verwenden Regex-Muster, um Parameter aus URL-Pfaden zu extrahieren.",
        },
        {
          title: "Log-Analyse",
          description:
            "Parsing von Server-Logs, Anwendungs-Logs und System-Logs zur Extraktion relevanter Informationen.",
        },
        {
          title: "Syntax-Highlighting",
          description:
            "Code-Editoren und IDEs nutzen Regex, um Schlüsselwörter, Strings und Kommentare zu erkennen.",
        },
      ],
    },
    flagsSection: {
      heading: "Verständnis von Regex-Flags",
      items: [
        {
          flag: "g",
          title: "Global-Flag",
          description:
            "Ohne das globale Flag findet Regex nur das erste Vorkommen. Mit aktivem Flag sucht die Regex im gesamten String und liefert alle Treffer. Wichtig für Suchen/Ersetzen und Textanalysen.",
        },
        {
          flag: "i",
          title: "Case-Insensitive-Flag",
          description:
            "Macht den Mustervergleich groß-/kleinschreibungsunabhängig. Beispiel: /hello/i findet „hello“, „Hello“, „HELLO“ und alle anderen Varianten.",
        },
        {
          flag: "m",
          title: "Multiline-Flag",
          description:
            "Ändert das Verhalten der Anker ^ und $. Ohne dieses Flag matcht ^ nur am Anfang des gesamten Strings und $ nur am Ende. Mit Multiline matcht ^ am Anfang jeder Zeile und $ am Ende jeder Zeile.",
        },
        {
          flag: "s",
          title: "DotAll-Flag",
          description:
            "Standardmäßig passt der Punkt (.) auf jedes Zeichen außer Newlines. Das DotAll-Flag ändert dieses Verhalten so, dass . auch Zeilenumbrüche matcht.",
        },
      ],
    },
  },
};
