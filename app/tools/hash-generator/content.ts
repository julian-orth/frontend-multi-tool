import type { LocalizedToolPageContent } from "@/lib/i18n/tool-content";
import type { HashAlgorithm } from "./utils";

export const pageContent: LocalizedToolPageContent = {
  en: {
    title: "Hash Generator - MD5, SHA-1, SHA-256, SHA-512 & HMAC",
    metaDescription:
      "Generate cryptographic hashes (MD5, SHA-1, SHA-256, SHA-512) and HMAC for data integrity checks, password hashing, and file checksums. Free online hash calculator with live mode.",
    keywords: [
      "hash generator",
      "md5",
      "sha1",
      "sha256",
      "sha512",
      "hmac",
      "checksum",
      "hash calculator",
      "cryptographic hash",
      "message digest",
      "password hash",
    ],
    h1: "Hash Generator",
    intro:
      "Generate cryptographic hashes with MD5, SHA-1, SHA-256, and SHA-512 algorithms. Supports HMAC, multiple input formats, and instant browser-based processing for complete privacy.",
    keyFacts: [
      "MD5 (32 hex chars): broken, use only for legacy checksums, not security.",
      "SHA-1 (40 hex chars): deprecated, avoid for new applications.",
      "SHA-256 (64 hex chars): strong, the industry-standard choice for most uses.",
      "SHA-512 (128 hex chars): maximum security for sensitive applications.",
      "HMAC adds a secret key to any algorithm for message authentication (API signing, webhooks).",
      "Common uses: password storage, file integrity checks, digital signatures, and blockchain.",
    ],
    faq: [
      {
        question: "Is MD5 still safe to use?",
        answer:
          "No — MD5 is cryptographically broken and collisions can be generated deliberately. Only use it for non-security checksums (e.g. detecting accidental file corruption).",
      },
      {
        question: "What's the difference between hashing and encryption?",
        answer:
          "Encryption is reversible with the right key; hashing is a deliberate one-way function. You can verify a hash matches, but you can't recover the original input from it.",
      },
      {
        question: "Which algorithm should I use?",
        answer:
          "SHA-256 for most general-purpose needs. Use SHA-512 for maximum security, or HMAC-SHA256 when you need to authenticate a message with a shared secret.",
      },
      {
        question: "Is my data sent to a server?",
        answer:
          "No. All hashing runs locally in your browser via the Web Crypto API — nothing is ever uploaded.",
      },
    ],
    relatedToolsBlurb: {
      base64: "Encode binary data or hash output as Base64 for safe transport.",
      "jwt-decoder": "Inspect the HMAC/RSA signature algorithm used by a JWT.",
    },
  },
  de: {
    title: "Hash-Generator - MD5, SHA-1, SHA-256, SHA-512 & HMAC",
    metaDescription:
      "Kryptografische Hashes (MD5, SHA-1, SHA-256, SHA-512) und HMAC zur Datenintegritätsprüfung, Passwort-Hashing und Datei-Prüfsummen generieren. Kostenloser Online-Hash-Rechner mit Live-Modus.",
    keywords: [
      "hash generator",
      "md5",
      "sha1",
      "sha256",
      "sha512",
      "hmac",
      "prüfsumme",
      "hash rechner",
      "kryptografischer hash",
      "message digest",
      "passwort hash",
    ],
    h1: "Hash-Generator",
    intro:
      "Kryptografische Hashes mit MD5-, SHA-1-, SHA-256- und SHA-512-Algorithmen generieren. Unterstützung für HMAC, mehrere Eingabeformate und sofortige Browser-Verarbeitung für vollständige Privatsphäre.",
    keyFacts: [
      "MD5 (32 Hex-Zeichen): gebrochen, nur für Legacy-Prüfsummen, nicht für Sicherheit.",
      "SHA-1 (40 Hex-Zeichen): veraltet, für neue Anwendungen vermeiden.",
      "SHA-256 (64 Hex-Zeichen): stark, der Industriestandard für die meisten Anwendungsfälle.",
      "SHA-512 (128 Hex-Zeichen): maximale Sicherheit für sensible Anwendungen.",
      "HMAC ergänzt jeden Algorithmus um einen geheimen Schlüssel zur Nachrichtenauthentifizierung (API-Signierung, Webhooks).",
      "Typische Anwendungen: Passwortspeicherung, Dateiintegritätsprüfung, digitale Signaturen und Blockchain.",
    ],
    faq: [
      {
        question: "Ist MD5 noch sicher?",
        answer:
          "Nein — MD5 gilt als kryptografisch gebrochen, Kollisionen lassen sich gezielt erzeugen. Nur für nicht-sicherheitskritische Prüfsummen verwenden (z. B. zufällige Dateikorruption erkennen).",
      },
      {
        question: "Was ist der Unterschied zwischen Hashing und Verschlüsselung?",
        answer:
          "Verschlüsselung ist mit dem richtigen Schlüssel umkehrbar; Hashing ist bewusst eine Einwegfunktion. Man kann einen Hash-Wert vergleichen, aber die ursprüngliche Eingabe nicht daraus wiederherstellen.",
      },
      {
        question: "Welchen Algorithmus sollte ich verwenden?",
        answer:
          "SHA-256 für die meisten allgemeinen Anwendungsfälle. SHA-512 für maximale Sicherheit, oder HMAC-SHA256, wenn eine Nachricht mit einem gemeinsamen Geheimnis authentifiziert werden soll.",
      },
      {
        question: "Werden meine Daten an einen Server gesendet?",
        answer:
          "Nein. Das gesamte Hashing läuft lokal im Browser über die Web Crypto API – es wird nichts hochgeladen.",
      },
    ],
    relatedToolsBlurb: {
      base64: "Binärdaten oder Hash-Ausgaben als Base64 für sicheren Transport kodieren.",
      "jwt-decoder": "Den HMAC-/RSA-Signaturalgorithmus eines JWT prüfen.",
    },
  },
};

export interface HashGeneratorUiContent {
  inputFormatLabel: string;
  inputFormatOptions: { text: string; hex: string; base64: string };
  hmacModeLabel: string;
  liveModeLabel: string;
  generateButton: string;
  generatingButton: string;
  clearButtonAriaLabel: string;
  loadFromFileLabel: string;
  loadSampleLabel: string;
  maxFileSize: string;
  errors: {
    emptyInput: string;
    missingHmacKey: string;
    unexpected: string;
    fileTooLarge: string;
    fileReadFailed: string;
  };
  inputLabel: string;
  charsBytes: (chars: number, bytes: number) => string;
  placeholders: { text: string; hex: string; base64: string };
  hmacKeyLabel: string;
  hmacKeyPlaceholder: string;
  hmacInfo: string;
  resultsTitle: (hmac: boolean) => string;
  downloadAllButton: string;
  copyButton: string;
  copiedButton: string;
  algorithmInfo: Record<HashAlgorithm, { length: string; security: string }>;
  aboutTitle: string;
  aboutIntro: string;
  aboutList: { label: string; text: string }[];
  aboutPrivacyNote: string;
  downloadFile: {
    header: string;
    generated: string;
    inputFormat: string;
    hmac: string;
    yes: string;
    no: string;
  };
}

export const uiContent: Record<"en" | "de", HashGeneratorUiContent> = {
  en: {
    inputFormatLabel: "Input format:",
    inputFormatOptions: {
      text: "Text (UTF-8)",
      hex: "Hexadecimal",
      base64: "Base64",
    },
    hmacModeLabel: "HMAC mode",
    liveModeLabel: "Live mode",
    generateButton: "Generate Hashes",
    generatingButton: "Generating...",
    clearButtonAriaLabel: "Clear input",
    loadFromFileLabel: "Load from file",
    loadSampleLabel: "Load sample",
    maxFileSize: "Max file size: 10MB",
    errors: {
      emptyInput: "Please enter some text to hash",
      missingHmacKey: "Please enter an HMAC key",
      unexpected: "An unexpected error occurred",
      fileTooLarge: "File size must be less than 10MB",
      fileReadFailed: "Failed to read file",
    },
    inputLabel: "Input",
    charsBytes: (chars, bytes) =>
      `${chars.toLocaleString()} chars (${bytes} bytes)`,
    placeholders: {
      text: "Enter text to hash...",
      hex: "Enter hexadecimal string (e.g., 48656c6c6f)...",
      base64: "Enter Base64 string...",
    },
    hmacKeyLabel: "HMAC Secret Key",
    hmacKeyPlaceholder: "Enter secret key for HMAC...",
    hmacInfo:
      "HMAC (Hash-based Message Authentication Code) uses a secret key to create authenticated hashes. Only parties with the key can generate or verify the hash.",
    resultsTitle: (hmac) => (hmac ? "Hash Results (HMAC)" : "Hash Results"),
    downloadAllButton: "Download All",
    copyButton: "Copy",
    copiedButton: "Copied",
    algorithmInfo: {
      MD5: {
        length: "128-bit (32 hex characters)",
        security: "Broken - not recommended for security",
      },
      "SHA-1": {
        length: "160-bit (40 hex characters)",
        security: "Deprecated - avoid for new applications",
      },
      "SHA-256": {
        length: "256-bit (64 hex characters)",
        security: "Strong - recommended for most uses",
      },
      "SHA-512": {
        length: "512-bit (128 hex characters)",
        security: "Very strong - high security applications",
      },
    },
    aboutTitle: "About Hash Generation",
    aboutIntro:
      "This tool generates cryptographic hashes using multiple algorithms simultaneously. All computations are performed locally in your browser using the Web Crypto API.",
    aboutList: [
      { label: "MD5:", text: "Fast but cryptographically broken, use only for checksums" },
      { label: "SHA-1:", text: "Deprecated, avoid for new applications" },
      { label: "SHA-256:", text: "Industry standard, recommended for most uses" },
      { label: "SHA-512:", text: "Maximum security for sensitive applications" },
      { label: "HMAC:", text: "Add a secret key for message authentication" },
    ],
    aboutPrivacyNote:
      "All hash calculations happen in your browser. No data is sent to any server.",
    downloadFile: {
      header: "Hash Generation Results",
      generated: "Generated",
      inputFormat: "Input Format",
      hmac: "HMAC",
      yes: "Yes",
      no: "No",
    },
  },
  de: {
    inputFormatLabel: "Eingabeformat:",
    inputFormatOptions: {
      text: "Text (UTF-8)",
      hex: "Hexadezimal",
      base64: "Base64",
    },
    hmacModeLabel: "HMAC-Modus",
    liveModeLabel: "Live-Modus",
    generateButton: "Hashes erzeugen",
    generatingButton: "Wird erzeugt...",
    clearButtonAriaLabel: "Eingabe leeren",
    loadFromFileLabel: "Aus Datei laden",
    loadSampleLabel: "Probe laden",
    maxFileSize: "Maximale Dateigröße: 10 MB",
    errors: {
      emptyInput: "Bitte Text zum Hashen eingeben",
      missingHmacKey: "Bitte einen HMAC-Schlüssel eingeben",
      unexpected: "Ein unerwarteter Fehler ist aufgetreten",
      fileTooLarge: "Die Datei darf maximal 10 MB groß sein",
      fileReadFailed: "Datei konnte nicht gelesen werden",
    },
    inputLabel: "Eingabe",
    charsBytes: (chars, bytes) =>
      `${chars.toLocaleString()} Zeichen (${bytes} Bytes)`,
    placeholders: {
      text: "Text zum Hashen eingeben...",
      hex: "Hexadezimal-Zeichenfolge eingeben (z. B. 48656c6c6f)...",
      base64: "Base64-Zeichenfolge eingeben...",
    },
    hmacKeyLabel: "HMAC-Geheimschlüssel",
    hmacKeyPlaceholder: "Geheimschlüssel für HMAC eingeben...",
    hmacInfo:
      "HMAC (Hash-based Message Authentication Code) verwendet einen geheimen Schlüssel, um authentifizierte Hashes zu erstellen. Nur wer den Schlüssel kennt, kann den Hash erzeugen oder prüfen.",
    resultsTitle: (hmac) => (hmac ? "Hash-Ergebnisse (HMAC)" : "Hash-Ergebnisse"),
    downloadAllButton: "Alle herunterladen",
    copyButton: "Kopieren",
    copiedButton: "Kopiert",
    algorithmInfo: {
      MD5: {
        length: "128-Bit (32 Hexadezimalzeichen)",
        security: "Gebrochen - nicht für Sicherheitszwecke empfohlen",
      },
      "SHA-1": {
        length: "160-Bit (40 Hexadezimalzeichen)",
        security: "Veraltet - für neue Anwendungen vermeiden",
      },
      "SHA-256": {
        length: "256-Bit (64 Hexadezimalzeichen)",
        security: "Stark - für die meisten Anwendungsfälle empfohlen",
      },
      "SHA-512": {
        length: "512-Bit (128 Hexadezimalzeichen)",
        security: "Sehr stark - für sicherheitskritische Anwendungen",
      },
    },
    aboutTitle: "Über Hash-Generierung",
    aboutIntro:
      "Dieses Tool generiert kryptografische Hashes mit mehreren Algorithmen gleichzeitig. Alle Berechnungen laufen lokal in Ihrem Browser über die Web Crypto API.",
    aboutList: [
      { label: "MD5:", text: "Schnell, aber kryptografisch gebrochen, nur für Prüfsummen verwenden" },
      { label: "SHA-1:", text: "Veraltet, für neue Anwendungen vermeiden" },
      { label: "SHA-256:", text: "Industriestandard, für die meisten Anwendungsfälle empfohlen" },
      { label: "SHA-512:", text: "Maximale Sicherheit für sensible Anwendungen" },
      { label: "HMAC:", text: "Geheimschlüssel für Nachrichtenauthentifizierung ergänzen" },
    ],
    aboutPrivacyNote:
      "Alle Hash-Berechnungen laufen in Ihrem Browser. Es werden keine Daten an einen Server gesendet.",
    downloadFile: {
      header: "Hash-Generierungsergebnisse",
      generated: "Erzeugt",
      inputFormat: "Eingabeformat",
      hmac: "HMAC",
      yes: "Ja",
      no: "Nein",
    },
  },
};
