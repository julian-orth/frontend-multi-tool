import type { LocalizedToolPageContent } from "@/lib/i18n/tool-content";

export const pageContent: LocalizedToolPageContent = {
  en: {
    title: "JSON Formatter & Validator",
    metaDescription:
      "Online JSON formatter and validator with advanced features: beautify, minify, validate, sort keys, and detect errors with line numbers.",
    keywords: [
      "json",
      "formatter",
      "validator",
      "beautifier",
      "minify",
      "pretty print",
      "json lint",
      "syntax",
    ],
    h1: "JSON Formatter & Validator",
    intro:
      "Format, validate, minify, and beautify JSON data with advanced error detection and formatting options",
    keyFacts: [
      "Syntax rules: keys and strings need double quotes, no trailing commas, and no comments are allowed anywhere in valid JSON.",
      "Common uses: API request/response payloads, config files (package.json, tsconfig.json), database exports, and frontend state serialization.",
      "Format & validate: beautify with 2, 3, or 4-space indentation and get precise line/column error locations for broken JSON.",
      "Minify: stripping whitespace typically shrinks file size by 20-30%, useful for production API payloads.",
      "Sort keys: alphabetizing object keys improves readability and produces cleaner version-control diffs.",
      "Best practice: use consistent key naming, keep nesting under 3-4 levels, and validate JSON in CI before deployment.",
    ],
    faq: [
      {
        question: "What's the difference between JSON and JavaScript objects?",
        answer:
          "JSON requires double-quoted keys and strings, disallows trailing commas, functions, and comments. JavaScript objects are more flexible and allow all of these.",
      },
      {
        question: "Why does my JSON have a syntax error?",
        answer:
          "The most common causes are trailing commas, single quotes instead of double quotes, unquoted keys, and missing brackets. Paste your JSON into the formatter above to see the exact line and column of the error.",
      },
      {
        question: "Can I add comments to JSON?",
        answer:
          'No, standard JSON doesn\'t support comments. Use a "_comment" key for inline notes, or switch to YAML/JSONC if you need real comment support.',
      },
      {
        question: "Is my data safe when using this formatter?",
        answer:
          "Yes. All formatting and validation happens locally in your browser—nothing is sent to a server, so it's safe to use with sensitive data.",
      },
    ],
    relatedToolsBlurb: {
      base64: "Encode JSON data to Base64 for transmission or storage.",
      "jwt-decoder": "Decode and format JSON payloads from JWT tokens.",
    },
  },
  de: {
    title: "JSON-Formatierer & Validator",
    metaDescription:
      "Online-JSON-Formatierer und -Validator mit erweiterten Funktionen: formatieren, minifizieren, validieren, Schlüssel sortieren und Fehler mit Zeilennummern erkennen.",
    keywords: [
      "json",
      "formatierer",
      "validator",
      "beautifier",
      "minifizieren",
      "pretty print",
      "json lint",
      "syntax",
    ],
    h1: "JSON-Formatierer & Validator",
    intro:
      "JSON-Daten formatieren, validieren, minifizieren und mit erweiterten Optionen zur Fehlererkennung und Formatierung bearbeiten",
    keyFacts: [
      "Syntaxregeln: Schlüssel und Zeichenketten benötigen doppelte Anführungszeichen, keine abschließenden Kommas und keine Kommentare sind in gültigem JSON erlaubt.",
      "Typische Anwendungen: API-Anfragen/-Antworten, Konfigurationsdateien (package.json, tsconfig.json), Datenbank-Exporte und Frontend-State-Serialisierung.",
      "Formatieren & validieren: mit 2, 3 oder 4 Leerzeichen einrücken und präzise Zeilen-/Spaltenangaben für fehlerhaftes JSON erhalten.",
      "Minifizieren: das Entfernen von Leerraum verkleinert die Dateigröße meist um 20-30 %, nützlich für produktive API-Payloads.",
      "Schlüssel sortieren: alphabetisch sortierte Objektschlüssel verbessern die Lesbarkeit und erzeugen sauberere Versionskontroll-Diffs.",
      "Best Practice: einheitliche Schlüsselbenennung verwenden, Verschachtelung unter 3-4 Ebenen halten und JSON vor dem Deployment in der CI validieren.",
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen JSON und JavaScript-Objekten?",
        answer:
          "JSON erfordert doppelt zitierte Schlüssel und Zeichenketten und erlaubt keine abschließenden Kommas, Funktionen oder Kommentare. JavaScript-Objekte sind flexibler und erlauben all dies.",
      },
      {
        question: "Warum hat mein JSON einen Syntaxfehler?",
        answer:
          "Die häufigsten Ursachen sind abschließende Kommas, einfache statt doppelte Anführungszeichen, nicht zitierte Schlüssel und fehlende Klammern. JSON oben in den Formatierer einfügen, um die genaue Zeile und Spalte des Fehlers zu sehen.",
      },
      {
        question: "Kann ich Kommentare zu JSON hinzufügen?",
        answer:
          'Nein, Standard-JSON unterstützt keine Kommentare. Für Inline-Notizen einen "_comment"-Schlüssel verwenden oder zu YAML/JSONC wechseln, wenn echte Kommentarunterstützung benötigt wird.',
      },
      {
        question: "Sind meine Daten bei der Nutzung dieses Formatierers sicher?",
        answer:
          "Ja. Die gesamte Formatierung und Validierung läuft lokal im Browser – nichts wird an einen Server gesendet, daher ist es sicher, auch mit sensiblen Daten zu arbeiten.",
      },
    ],
    relatedToolsBlurb: {
      base64: "JSON-Daten für Übertragung oder Speicherung als Base64 kodieren.",
      "jwt-decoder": "JSON-Payloads aus JWT-Tokens dekodieren und formatieren.",
    },
  },
};

export interface JsonFormatterUiContent {
  indentSizeLabel: string;
  indentOptions: { 2: string; 3: string; 4: string };
  sortKeysLabel: string;
  lineNumbersLabel: string;
  formatButton: string;
  minifyButton: string;
  validateButton: string;
  clearButtonAriaLabel: string;
  loadFromFileLabel: string;
  loadFromUrlLabel: string;
  loadSampleLabel: string;
  urlPlaceholder: string;
  loadButton: string;
  loadingButton: string;
  cancelButton: string;
  validJson: string;
  invalidJson: string;
  lineColumn: (line: number, column: number) => string;
  inputLabel: string;
  inputPlaceholder: string;
  outputLabel: string;
  outputPlaceholder: string;
  copyButton: string;
  copiedButton: string;
  downloadButton: string;
  charactersLabel: string;
  linesLabel: string;
  sizeLabel: string;
  fileReadFailed: string;
  loadUrlFailed: (message: string) => string;
}

export const uiContent: Record<"en" | "de", JsonFormatterUiContent> = {
  en: {
    indentSizeLabel: "Indent Size",
    indentOptions: { 2: "2 spaces", 3: "3 spaces", 4: "4 spaces" },
    sortKeysLabel: "Sort keys",
    lineNumbersLabel: "Line numbers",
    formatButton: "Format",
    minifyButton: "Minify",
    validateButton: "Validate",
    clearButtonAriaLabel: "Clear input",
    loadFromFileLabel: "Load from file",
    loadFromUrlLabel: "Load from URL",
    loadSampleLabel: "Load sample",
    urlPlaceholder: "Enter JSON URL (e.g., https://api.example.com/data.json)",
    loadButton: "Load",
    loadingButton: "Loading...",
    cancelButton: "Cancel",
    validJson: "Valid JSON",
    invalidJson: "Invalid JSON",
    lineColumn: (line, column) => `(Line ${line}, Column ${column})`,
    inputLabel: "Input JSON",
    inputPlaceholder: 'Paste your JSON here... e.g. {"key": "value"}',
    outputLabel: "Output",
    outputPlaceholder: "Output will appear here...",
    copyButton: "Copy",
    copiedButton: "Copied",
    downloadButton: "Download",
    charactersLabel: "Characters:",
    linesLabel: "Lines:",
    sizeLabel: "Size:",
    fileReadFailed: "Failed to read file",
    loadUrlFailed: (message) => `Failed to load from URL: ${message}`,
  },
  de: {
    indentSizeLabel: "Einrückungsgröße",
    indentOptions: { 2: "2 Leerzeichen", 3: "3 Leerzeichen", 4: "4 Leerzeichen" },
    sortKeysLabel: "Schlüssel sortieren",
    lineNumbersLabel: "Zeilennummern",
    formatButton: "Formatieren",
    minifyButton: "Minifizieren",
    validateButton: "Validieren",
    clearButtonAriaLabel: "Eingabe leeren",
    loadFromFileLabel: "Aus Datei laden",
    loadFromUrlLabel: "Aus URL laden",
    loadSampleLabel: "Probe laden",
    urlPlaceholder: "JSON-URL eingeben (z. B. https://api.example.com/data.json)",
    loadButton: "Laden",
    loadingButton: "Wird geladen...",
    cancelButton: "Abbrechen",
    validJson: "Gültiges JSON",
    invalidJson: "Ungültiges JSON",
    lineColumn: (line, column) => `(Zeile ${line}, Spalte ${column})`,
    inputLabel: "JSON-Eingabe",
    inputPlaceholder: 'JSON hier einfügen... z. B. {"key": "value"}',
    outputLabel: "Ausgabe",
    outputPlaceholder: "Die Ausgabe erscheint hier...",
    copyButton: "Kopieren",
    copiedButton: "Kopiert",
    downloadButton: "Herunterladen",
    charactersLabel: "Zeichen:",
    linesLabel: "Zeilen:",
    sizeLabel: "Größe:",
    fileReadFailed: "Datei konnte nicht gelesen werden",
    loadUrlFailed: (message) => `Laden von URL fehlgeschlagen: ${message}`,
  },
};
