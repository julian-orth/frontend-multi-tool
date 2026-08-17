import type { LocalizedToolPageContent } from "@/lib/i18n/tool-content";
import type { TimestampFormatLabels } from "./utils";

export const pageContent: LocalizedToolPageContent = {
  en: {
    title: "Unix Timestamp Converter - Epoch Time to Date",
    metaDescription:
      "Convert Unix timestamps to human-readable dates and back. Supports seconds, milliseconds, microseconds, and nanoseconds. Live epoch clock with timezone conversion.",
    keywords: [
      "unix timestamp",
      "epoch converter",
      "timestamp to date",
      "date to timestamp",
      "epoch time",
      "unix time",
      "milliseconds converter",
      "timezone converter",
      "utc time",
    ],
    h1: "Unix Timestamp Converter",
    intro:
      "Convert Unix timestamps to human-readable dates and back. Supports seconds, milliseconds, and multiple timezones. All calculations run in your browser.",
    keyFacts: [
      "A Unix timestamp counts seconds since January 1, 1970, 00:00:00 UTC (the \"Unix Epoch\").",
      "Seconds (10 digits) is the standard format used by most Unix systems and languages like Python, PHP, and C.",
      "Milliseconds (13 digits) is JavaScript's native timestamp format.",
      "Microseconds (16 digits) and nanoseconds (19 digits) are used for high-precision timing (performance monitoring, distributed systems).",
      "Unix time ignores leap seconds, assuming exactly 86,400 seconds per day.",
      "1 day = 86,400 seconds, 1 week = 604,800 seconds, 1 year ≈ 31,556,926 seconds.",
    ],
    faq: [
      {
        question: "Why does the Unix Epoch start at 1970?",
        answer:
          "It was an arbitrary but convenient reference point chosen by early Unix developers — not tied to any historical event.",
      },
      {
        question: "What happens after the year 2038?",
        answer:
          "Systems storing timestamps as signed 32-bit integers will overflow on January 19, 2038 — known as the Year 2038 problem. Modern 64-bit systems aren't affected.",
      },
      {
        question: "How do I convert between seconds and milliseconds?",
        answer:
          "Multiply seconds by 1000 to get milliseconds, or divide milliseconds by 1000 to get seconds. This tool auto-detects which format you've entered.",
      },
      {
        question: "Does this tool account for timezones?",
        answer:
          "Unix timestamps are always UTC-based. Use the timezone converter below the result to see the equivalent local time anywhere in the world.",
      },
    ],
    relatedToolsBlurb: {
      "uuid-generator": "Generate a time-ordered UUID v7 using the current timestamp.",
    },
  },
  de: {
    title: "Unix-Timestamp-Konverter - Epoch-Zeit in Datumswert umwandeln",
    metaDescription:
      "Unix-Timestamps in lesbare Datumswerte und umgekehrt umwandeln. Unterstützt Sekunden, Millisekunden, Mikrosekunden und Nanosekunden. Live-Epoch-Uhr mit Zeitzonen-Konvertierung.",
    keywords: [
      "unix timestamp",
      "epoch konverter",
      "timestamp zu datum",
      "datum zu timestamp",
      "epoch zeit",
      "unix zeit",
      "millisekunden konverter",
      "zeitzonen konverter",
      "utc zeit",
    ],
    h1: "Unix-Timestamp-Konverter",
    intro:
      "Unix-Timestamps in lesbare Datumswerte und umgekehrt umwandeln. Unterstützt Sekunden, Millisekunden und mehrere Zeitzonen. Alle Berechnungen laufen im Browser ab.",
    keyFacts: [
      "Ein Unix-Timestamp zählt die Sekunden seit dem 1. Januar 1970, 00:00:00 UTC (dem „Unix-Epoch“).",
      "Sekunden (10 Stellen) ist das Standardformat der meisten Unix-Systeme und Sprachen wie Python, PHP und C.",
      "Millisekunden (13 Stellen) ist das native JavaScript-Timestamp-Format.",
      "Mikrosekunden (16 Stellen) und Nanosekunden (19 Stellen) dienen hochpräzisem Timing (Performance-Monitoring, verteilte Systeme).",
      "Unix-Zeit ignoriert Schaltsekunden und geht von genau 86.400 Sekunden pro Tag aus.",
      "1 Tag = 86.400 Sekunden, 1 Woche = 604.800 Sekunden, 1 Jahr ≈ 31.556.926 Sekunden.",
    ],
    faq: [
      {
        question: "Warum beginnt der Unix-Epoch im Jahr 1970?",
        answer:
          "Es war ein willkürlicher, aber praktischer Referenzpunkt der frühen Unix-Entwickler – ohne Bezug zu einem historischen Ereignis.",
      },
      {
        question: "Was passiert nach dem Jahr 2038?",
        answer:
          "Systeme, die Timestamps als vorzeichenbehaftete 32-Bit-Ganzzahl speichern, laufen am 19. Januar 2038 über – bekannt als Jahr-2038-Problem. Moderne 64-Bit-Systeme sind davon nicht betroffen.",
      },
      {
        question: "Wie rechne ich zwischen Sekunden und Millisekunden um?",
        answer:
          "Sekunden mit 1000 multiplizieren ergibt Millisekunden, Millisekunden durch 1000 teilen ergibt Sekunden. Dieses Tool erkennt das eingegebene Format automatisch.",
      },
      {
        question: "Berücksichtigt dieses Tool Zeitzonen?",
        answer:
          "Unix-Timestamps basieren immer auf UTC. Mit dem Zeitzonen-Konverter unter dem Ergebnis lässt sich die entsprechende Ortszeit überall auf der Welt anzeigen.",
      },
    ],
    relatedToolsBlurb: {
      "uuid-generator": "Eine zeitlich geordnete UUID v7 auf Basis des aktuellen Timestamps erzeugen.",
    },
  },
};

export interface TimestampConverterUiContent {
  currentTimestampTitle: string;
  secondsLabel: string;
  millisecondsLabel: string;
  modeToDate: string;
  modeToTimestamp: string;
  convertButton: string;
  clearButtonAriaLabel: string;
  useCurrentTime: string;
  loadSample: string;
  quickDates: {
    weekAgo: string;
    yesterday: string;
    today: string;
    tomorrow: string;
    weekAhead: string;
  };
  errorLabel: string;
  convertedSuccessfully: string;
  inputLabel: string;
  inputSuffixToDate: string;
  inputSuffixToTimestamp: string;
  charsLabel: (chars: number) => string;
  placeholderToDate: string;
  placeholderToTimestamp: string;
  outputLabel: string;
  outputSuffixToDate: string;
  outputSuffixToTimestamp: string;
  copyButton: string;
  copiedButton: string;
  downloadButton: string;
  outputPlaceholder: string;
  timezoneConverterTitle: string;
  selectTimezoneLabel: string;
  aboutTitle: string;
  aboutIntro: string;
  formatList: { label: string; text: string }[];
  conversionTable: { label: string; value: string }[];
  timestampLabels: TimestampFormatLabels;
}

export const uiContent: Record<"en" | "de", TimestampConverterUiContent> = {
  en: {
    currentTimestampTitle: "Current Unix Timestamp",
    secondsLabel: "Seconds",
    millisecondsLabel: "Milliseconds",
    modeToDate: "Timestamp → Date",
    modeToTimestamp: "Date → Timestamp",
    convertButton: "Convert",
    clearButtonAriaLabel: "Clear input",
    useCurrentTime: "Use current time",
    loadSample: "Load sample",
    quickDates: {
      weekAgo: "1 week ago",
      yesterday: "Yesterday",
      today: "Today",
      tomorrow: "Tomorrow",
      weekAhead: "1 week ahead",
    },
    errorLabel: "Error",
    convertedSuccessfully: "Converted successfully",
    inputLabel: "Input",
    inputSuffixToDate: "(Unix Timestamp)",
    inputSuffixToTimestamp: "(Date/Time String)",
    charsLabel: (chars) => `${chars.toLocaleString()} chars`,
    placeholderToDate:
      "Enter Unix timestamp (seconds or milliseconds)...\nExamples: 1701388800, 1701388800000",
    placeholderToTimestamp:
      "Enter date/time string...\nExamples:\n2024-12-01\nDec 1, 2024 12:00:00\n12/1/2024",
    outputLabel: "Output",
    outputSuffixToDate: "(Date/Time Formats)",
    outputSuffixToTimestamp: "(Unix Timestamp)",
    copyButton: "Copy",
    copiedButton: "Copied",
    downloadButton: "Download",
    outputPlaceholder: "Output will appear here...",
    timezoneConverterTitle: "Timezone Converter",
    selectTimezoneLabel: "Select Timezone",
    aboutTitle: "About Unix Timestamps",
    aboutIntro:
      "Unix timestamp (also known as Epoch time) is a system for tracking time as a running total of seconds since January 1, 1970 00:00:00 UTC (the Unix Epoch).",
    formatList: [
      { label: "Seconds:", text: "Standard Unix timestamp (10 digits)" },
      { label: "Milliseconds:", text: "JavaScript timestamp (13 digits)" },
      { label: "Microseconds:", text: "High-precision timestamp (16 digits)" },
      { label: "Nanoseconds:", text: "Ultra-precise timestamp (19 digits)" },
    ],
    conversionTable: [
      { label: "1 minute", value: "60 seconds" },
      { label: "1 hour", value: "3,600 seconds" },
      { label: "1 day", value: "86,400 seconds" },
      { label: "1 week", value: "604,800 seconds" },
      { label: "1 year (365.24 days)", value: "31,556,926 seconds" },
    ],
    timestampLabels: {
      detectedFormat: "Detected format",
      iso8601: "ISO 8601",
      rfc2822: "RFC 2822",
      utc: "UTC",
      local: "Local",
      relative: "Relative",
      unixSeconds: "Unix Timestamp (seconds)",
      unixMilliseconds: "Unix Timestamp (milliseconds)",
      errors: {
        emptyTimestamp: "Please enter a timestamp",
        invalidTimestampFormat: "Invalid timestamp format. Please enter a valid number.",
        invalidTimestamp: "Invalid timestamp. Please check your input.",
        yearOutOfRange: (year) =>
          `Timestamp results in year ${year}. Please verify your input format.`,
        unknownError: "Unknown error occurred",
        emptyDate: "Please enter a date",
        invalidDateFormat:
          "Invalid date format. Try formats like: 2024-12-01, Dec 1 2024, 12/1/2024",
      },
      relativeTime: {
        justNow: "just now",
        inAFewSeconds: "in a few seconds",
        past: (n, unit) => `${n} ${unit}${n === 1 ? "" : "s"} ago`,
        future: (n, unit) => `in ${n} ${unit}${n === 1 ? "" : "s"}`,
      },
    },
  },
  de: {
    currentTimestampTitle: "Aktueller Unix-Timestamp",
    secondsLabel: "Sekunden",
    millisecondsLabel: "Millisekunden",
    modeToDate: "Timestamp → Datum",
    modeToTimestamp: "Datum → Timestamp",
    convertButton: "Umwandeln",
    clearButtonAriaLabel: "Eingabe leeren",
    useCurrentTime: "Aktuelle Zeit verwenden",
    loadSample: "Probe laden",
    quickDates: {
      weekAgo: "Vor 1 Woche",
      yesterday: "Gestern",
      today: "Heute",
      tomorrow: "Morgen",
      weekAhead: "In 1 Woche",
    },
    errorLabel: "Fehler",
    convertedSuccessfully: "Erfolgreich umgewandelt",
    inputLabel: "Eingabe",
    inputSuffixToDate: "(Unix-Timestamp)",
    inputSuffixToTimestamp: "(Datum-/Zeitangabe)",
    charsLabel: (chars) => `${chars.toLocaleString()} Zeichen`,
    placeholderToDate:
      "Unix-Timestamp eingeben (Sekunden oder Millisekunden)...\nBeispiele: 1701388800, 1701388800000",
    placeholderToTimestamp:
      "Datum-/Zeitangabe eingeben...\nBeispiele:\n2024-12-01\n1. Dez 2024 12:00:00\n1.12.2024",
    outputLabel: "Ausgabe",
    outputSuffixToDate: "(Datum-/Zeitformate)",
    outputSuffixToTimestamp: "(Unix-Timestamp)",
    copyButton: "Kopieren",
    copiedButton: "Kopiert",
    downloadButton: "Herunterladen",
    outputPlaceholder: "Die Ausgabe erscheint hier...",
    timezoneConverterTitle: "Zeitzonen-Konverter",
    selectTimezoneLabel: "Zeitzone auswählen",
    aboutTitle: "Über Unix-Timestamps",
    aboutIntro:
      "Ein Unix-Timestamp (auch Epoch-Zeit genannt) misst Zeit als laufende Gesamtzahl von Sekunden seit dem 1. Januar 1970, 00:00:00 UTC (dem Unix-Epoch).",
    formatList: [
      { label: "Sekunden:", text: "Standard-Unix-Timestamp (10 Stellen)" },
      { label: "Millisekunden:", text: "JavaScript-Timestamp (13 Stellen)" },
      { label: "Mikrosekunden:", text: "Hochpräziser Timestamp (16 Stellen)" },
      { label: "Nanosekunden:", text: "Ultrapräziser Timestamp (19 Stellen)" },
    ],
    conversionTable: [
      { label: "1 Minute", value: "60 Sekunden" },
      { label: "1 Stunde", value: "3.600 Sekunden" },
      { label: "1 Tag", value: "86.400 Sekunden" },
      { label: "1 Woche", value: "604.800 Sekunden" },
      { label: "1 Jahr (365,24 Tage)", value: "31.556.926 Sekunden" },
    ],
    timestampLabels: {
      detectedFormat: "Erkanntes Format",
      iso8601: "ISO 8601",
      rfc2822: "RFC 2822",
      utc: "UTC",
      local: "Lokal",
      relative: "Relativ",
      unixSeconds: "Unix-Timestamp (Sekunden)",
      unixMilliseconds: "Unix-Timestamp (Millisekunden)",
      errors: {
        emptyTimestamp: "Bitte einen Timestamp eingeben",
        invalidTimestampFormat: "Ungültiges Timestamp-Format. Bitte eine gültige Zahl eingeben.",
        invalidTimestamp: "Ungültiger Timestamp. Bitte die Eingabe prüfen.",
        yearOutOfRange: (year) =>
          `Der Timestamp ergibt das Jahr ${year}. Bitte das Eingabeformat prüfen.`,
        unknownError: "Ein unbekannter Fehler ist aufgetreten",
        emptyDate: "Bitte ein Datum eingeben",
        invalidDateFormat:
          "Ungültiges Datumsformat. Beispiele: 2024-12-01, 1. Dez 2024, 1.12.2024",
      },
      relativeTime: {
        justNow: "gerade eben",
        inAFewSeconds: "in wenigen Sekunden",
        past: (n, unit) => {
          const units: Record<string, [string, string]> = {
            minute: ["Minute", "Minuten"],
            hour: ["Stunde", "Stunden"],
            day: ["Tag", "Tagen"],
            month: ["Monat", "Monaten"],
            year: ["Jahr", "Jahren"],
          };
          const [singular, plural] = units[unit];
          return `vor ${n} ${n === 1 ? singular : plural}`;
        },
        future: (n, unit) => {
          const units: Record<string, [string, string]> = {
            minute: ["Minute", "Minuten"],
            hour: ["Stunde", "Stunden"],
            day: ["Tag", "Tagen"],
            month: ["Monat", "Monaten"],
            year: ["Jahr", "Jahren"],
          };
          const [singular, plural] = units[unit];
          return `in ${n} ${n === 1 ? singular : plural}`;
        },
      },
    },
  },
};
