export interface Base64PageContent {
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
  /** JSON-LD `name`/`description`/`keywords` (shorter/curated subset) */
  schemaDescription: string;
  schemaKeywords: string[];
  /** Visible <h1> */
  h1: string;
  /** Intro paragraph under the h1 */
  intro: string;
  whatIsSection: {
    heading: string;
    /** Each bolded term followed by the text that continues its sentence */
    terms: { term: string; text: string }[];
    /** Closing sentence(s) after the three terms */
    conclusion: string;
  };
  keyFacts: {
    heading: string;
    /** Optional bolded label rendered before `text`; omitted for plain items */
    items: { label?: string; text: string }[];
  };
  faq: {
    heading: string;
    items: { question: string; answer: string }[];
  };
  /**
   * Per-tool blurb for each related-tool card, keyed by the OTHER tool's id.
   * The related tool's own name/description come from getLocalizedTool();
   * this only holds the relationship-specific sentence.
   */
  relatedToolsBlurb: Record<string, string>;
}

export const pageContent: Record<"en" | "de", Base64PageContent> = {
  en: {
    title: "Base64 / URL / HTML Encoder & Decoder - Free Online Tool",
    metaDescription:
      "Encode and decode Base64, URL, and HTML entities in one tool. URL-safe Base64, MIME chunks, 4 URL encoding modes, named/numeric HTML entities, and live mode.",
    keywords: [
      "base64",
      "url encoder",
      "html encoder",
      "encoder",
      "decoder",
      "encode",
      "decode",
      "url safe",
      "mime",
      "html entities",
      "converter",
    ],
    ogTitle: "Base64 / URL / HTML Encoder & Decoder",
    ogDescription:
      "Free Base64, URL, and HTML encoder/decoder with URL-safe format, MIME chunks, query string parsing, and named/numeric HTML entities. All processing in your browser.",
    twitterDescription:
      "Encode and decode Base64, URL, and HTML entities. Free online tool.",
    schemaDescription:
      "Encode and decode Base64, URL, and HTML entities with URL-safe format support for data transmission and APIs",
    schemaKeywords: [
      "base64 encoder",
      "base64 decoder",
      "url encoder",
      "html encoder",
      "encode base64",
      "decode base64",
    ],
    h1: "Base64 / URL / HTML Encoder & Decoder",
    intro:
      "Encode and decode Base64, URL, and HTML entities — with URL-safe format, MIME chunking, four URL encoding modes, and named or numeric HTML entities. All processing happens in your browser for complete privacy.",
    whatIsSection: {
      heading: "What Are Base64, URL, and HTML Encoding?",
      terms: [
        {
          term: "Base64",
          text: "is a binary-to-text encoding that turns arbitrary binary data into ASCII text so it survives systems built for text (email, JSON, data URLs).",
        },
        {
          term: "URL (percent) encoding",
          text: "escapes characters that would break URL syntax, and",
        },
        {
          term: "HTML entity encoding",
          text: "replaces characters like <, >, and & that have special meaning in HTML, which is essential for rendering user-supplied text safely.",
        },
      ],
      conclusion:
        "None of these are encryption — they're reversible, publicly-documented transformations, not security measures. Use the tabs above to switch between the three.",
    },
    keyFacts: {
      heading: "Key Facts",
      items: [
        {
          label: "Base64 uses cases:",
          text: "MIME email attachments, data URLs, JWT header/payload segments, Basic HTTP auth, and PEM-formatted keys/certificates.",
        },
        {
          label: "URL-safe Base64 (RFC 4648):",
          text: "replaces + with -, / with _, and drops padding = so it can be used directly in URLs, filenames, or JWTs; MIME chunking (RFC 2045) wraps output at 76 characters per line for email.",
        },
        {
          label: "Four URL encoding modes:",
          text: "Component (single parameter values), Full URI (preserves : / ? #), Form data (spaces become + instead of %20), and RFC 3986 strict (also escapes ! ' ( ) *).",
        },
        {
          label: "HTML entities:",
          text: "named forms (&lt;, &amp;, &copy;) are more readable; numeric forms (&#60;, &#38;, &#169;) work for any character, including ones without a named equivalent.",
        },
        {
          label: "Size overhead:",
          text: "Base64 converts every 3 bytes of input into 4 ASCII characters, an ~33% size increase.",
        },
        {
          text: "Every tab supports live mode, and all processing happens in your browser — nothing is sent to a server.",
        },
      ],
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "Is Base64/URL/HTML encoding the same as encryption?",
          answer:
            "No. All three are reversible, publicly-documented encoding schemes, not encryption. Anyone can decode the output without a key or password. For confidentiality, use actual encryption (AES, RSA) or a secure channel like HTTPS.",
        },
        {
          question: "Why does Base64 encoding increase file size?",
          answer:
            "Base64 converts every 3 bytes (24 bits) of input into 4 ASCII characters, an approximately 33% size increase — the trade-off for making binary data safely transmittable as text.",
        },
        {
          question:
            "What are the padding characters (=) at the end of Base64?",
          answer:
            "The equals sign pads the output so its length is always a multiple of 4. In URL-safe Base64, padding is typically omitted since it can be inferred from the data length.",
        },
        {
          question: 'Why am I getting an "Invalid" error when decoding?',
          answer:
            "For Base64, the input contains characters outside the Base64 alphabet or has incorrect padding — make sure you decode with the same URL-safe setting used to encode. For URL decoding, it means the input has a malformed percent-escape sequence.",
        },
      ],
    },
    relatedToolsBlurb: {
      "json-formatter": "Format and validate JSON before or after Base64-encoding it.",
      "jwt-decoder": "Decode and analyze JSON Web Tokens, which use Base64URL encoding.",
    },
  },
  de: {
    title: "Base64 / URL / HTML Encoder & Decoder - Kostenloses Online-Tool",
    metaDescription:
      "Base64, URL und HTML-Entities in einem Tool kodieren und dekodieren. URL-sicheres Base64, MIME-Chunks, 4 URL-Kodierungsmodi, benannte/numerische HTML-Entities und Live-Modus.",
    keywords: [
      "base64",
      "url encoder",
      "html encoder",
      "kodierer",
      "dekodierer",
      "kodieren",
      "dekodieren",
      "url-sicher",
      "mime",
      "html-entities",
      "konverter",
    ],
    ogTitle: "Base64 / URL / HTML Encoder & Decoder",
    ogDescription:
      "Kostenloser Base64-, URL- und HTML-Encoder/Decoder mit URL-sicherem Format, MIME-Chunks, Query-String-Parsing und benannten/numerischen HTML-Entities. Die gesamte Verarbeitung erfolgt im Browser.",
    twitterDescription:
      "Base64, URL und HTML-Entities kodieren und dekodieren. Kostenloses Online-Tool.",
    schemaDescription:
      "Base64, URL und HTML-Entities kodieren und dekodieren, mit Unterstützung für URL-sicheres Format für Datenübertragung und APIs",
    schemaKeywords: [
      "base64 encoder",
      "base64 decoder",
      "url encoder",
      "html encoder",
      "base64 kodieren",
      "base64 dekodieren",
    ],
    h1: "Base64 / URL / HTML Encoder & Decoder",
    intro:
      "Base64, URL und HTML-Entities kodieren und dekodieren – mit URL-sicherem Format, MIME-Chunking, vier URL-Kodierungsmodi sowie benannten oder numerischen HTML-Entities. Die gesamte Verarbeitung erfolgt im Browser für vollständige Privatsphäre.",
    whatIsSection: {
      heading: "Was sind Base64-, URL- und HTML-Kodierung?",
      terms: [
        {
          term: "Base64",
          text: "ist eine Binär-zu-Text-Kodierung, die beliebige Binärdaten in ASCII-Text umwandelt, damit sie Systeme überstehen, die für Text ausgelegt sind (E-Mail, JSON, Data-URLs).",
        },
        {
          term: "URL- (Prozent-)Kodierung",
          text: "maskiert Zeichen, die die URL-Syntax stören würden, und",
        },
        {
          term: "HTML-Entity-Kodierung",
          text: "ersetzt Zeichen wie <, >, und &, die in HTML eine besondere Bedeutung haben – essenziell, um von Nutzern eingegebenen Text sicher darzustellen.",
        },
      ],
      conclusion:
        "Keines davon ist Verschlüsselung – es handelt sich um umkehrbare, öffentlich dokumentierte Transformationen, keine Sicherheitsmaßnahmen. Über die Tabs oben lässt sich zwischen den drei Verfahren wechseln.",
    },
    keyFacts: {
      heading: "Wichtige Fakten",
      items: [
        {
          label: "Anwendungsfälle für Base64:",
          text: "MIME-E-Mail-Anhänge, Data-URLs, JWT-Header-/Payload-Segmente, HTTP-Basic-Auth und PEM-formatierte Schlüssel/Zertifikate.",
        },
        {
          label: "URL-sicheres Base64 (RFC 4648):",
          text: "ersetzt + durch -, / durch _ und lässt das Padding-Zeichen = weg, sodass es direkt in URLs, Dateinamen oder JWTs verwendet werden kann; MIME-Chunking (RFC 2045) bricht die Ausgabe für E-Mails alle 76 Zeichen um.",
        },
        {
          label: "Vier URL-Kodierungsmodi:",
          text: "Component (einzelne Parameterwerte), Full URI (erhält : / ? #), Form-Data (Leerzeichen werden zu + statt %20) und RFC 3986 strict (maskiert zusätzlich ! ' ( ) *).",
        },
        {
          label: "HTML-Entities:",
          text: "benannte Formen (&lt;, &amp;, &copy;) sind besser lesbar; numerische Formen (&#60;, &#38;, &#169;) funktionieren für jedes Zeichen, auch für solche ohne benanntes Äquivalent.",
        },
        {
          label: "Größenzuwachs:",
          text: "Base64 wandelt je 3 Byte Eingabe in 4 ASCII-Zeichen um, ein Größenzuwachs von etwa 33 %.",
        },
        {
          text: "Jeder Tab unterstützt den Live-Modus, und die gesamte Verarbeitung erfolgt im Browser – es wird nichts an einen Server gesendet.",
        },
      ],
    },
    faq: {
      heading: "Häufig gestellte Fragen",
      items: [
        {
          question:
            "Ist Base64-/URL-/HTML-Kodierung dasselbe wie Verschlüsselung?",
          answer:
            "Nein. Alle drei sind umkehrbare, öffentlich dokumentierte Kodierungsverfahren, keine Verschlüsselung. Die Ausgabe kann von jedem ohne Schlüssel oder Passwort dekodiert werden. Für Vertraulichkeit echte Verschlüsselung (AES, RSA) oder einen sicheren Kanal wie HTTPS verwenden.",
        },
        {
          question: "Warum vergrößert Base64-Kodierung die Dateigröße?",
          answer:
            "Base64 wandelt je 3 Byte (24 Bit) Eingabe in 4 ASCII-Zeichen um, ein Größenzuwachs von etwa 33 % – der Preis dafür, Binärdaten sicher als Text übertragbar zu machen.",
        },
        {
          question:
            "Wofür stehen die Padding-Zeichen (=) am Ende von Base64?",
          answer:
            "Das Gleichheitszeichen füllt die Ausgabe auf, damit ihre Länge immer ein Vielfaches von 4 ist. Bei URL-sicherem Base64 wird das Padding meist weggelassen, da es sich aus der Datenlänge ableiten lässt.",
        },
        {
          question: 'Warum erhalte ich beim Dekodieren einen „Ungültig"-Fehler?',
          answer:
            "Bei Base64 enthält die Eingabe Zeichen außerhalb des Base64-Alphabets oder hat ein falsches Padding – beim Dekodieren dieselbe URL-sicher-Einstellung wie beim Kodieren verwenden. Bei der URL-Dekodierung bedeutet es, dass die Eingabe eine fehlerhafte Prozent-Escape-Sequenz enthält.",
        },
      ],
    },
    relatedToolsBlurb: {
      "json-formatter": "JSON vor oder nach der Base64-Kodierung formatieren und validieren.",
      "jwt-decoder": "JSON Web Tokens dekodieren und analysieren – sie verwenden Base64URL-Kodierung.",
    },
  },
};
