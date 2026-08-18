import type { Locale } from "@/lib/i18n/locale";

/**
 * Static SEO/content block for the UUID generator page. Modeled on the shared
 * `ToolPageContent` shape (see lib/i18n/tool-content.ts / json-formatter's
 * content.ts) but extended with a bespoke "What is a UUID?" section and
 * fully custom related-tool cards (title + description), since this page's
 * layout predates — and doesn't use — the shared `RelatedTools` component.
 */
export interface UuidGeneratorKeyFact {
  label: string;
  text: string;
}

export interface UuidGeneratorFaqItem {
  question: string;
  answer: string;
}

export interface UuidGeneratorRelatedTool {
  /** Non-locale-prefixed path; localize with `localizeHref` when rendering. */
  href: string;
  title: string;
  description: string;
}

export interface UuidGeneratorPageContent {
  /** <title>, JSON-LD `name` */
  title: string;
  /** <meta description>, Open Graph/Twitter description, JSON-LD `description` */
  metaDescription: string;
  /** SEO keywords for <meta> and JSON-LD */
  keywords: string[];
  /** Visible <h1> */
  h1: string;
  /** Intro paragraph under the h1 */
  intro: string;
  whatIsHeading: string;
  whatIsBody: string;
  keyFacts: UuidGeneratorKeyFact[];
  faq: UuidGeneratorFaqItem[];
  relatedTools: UuidGeneratorRelatedTool[];
}

export const pageContent: Record<Locale, UuidGeneratorPageContent> = {
  en: {
    title: "UUID (GUID) Generator, Validator, Decoder & Format Converter",
    metaDescription:
      "Generate, validate, decode, and reformat RFC 4122 compliant UUIDs (GUIDs) — v1, v3, v4, v5, v7, NIL — with shareable links via ?tab= and ?version=",
    keywords: [
      "uuid",
      "guid",
      "unique identifier",
      "generator",
      "validator",
      "decoder",
      "format converter",
      "v1",
      "v3",
      "v4",
      "v5",
      "v7",
    ],
    h1: "UUID / GUID Generator",
    intro:
      "Generate RFC 4122 compliant UUIDs (GUIDs — Microsoft term) instantly, then validate, decode, or reformat them — all in one place.",
    whatIsHeading: "What is a UUID (GUID)?",
    whatIsBody:
      "A UUID (Universally Unique Identifier), also known as a GUID in Microsoft terminology, is a 128-bit value standardized by RFC 4122 that's unique across systems without needing central coordination. It's typically written as 32 hex digits in five hyphenated groups (8-4-4-4-12), e.g. 550e8400-e29b-41d4-a716-446655440000. UUIDs come in several versions — random (v4), time-ordered (v1, v7), and deterministic namespace-based (v3, v5) — and this tool lets you generate, validate, decode, and reformat any of them.",
    keyFacts: [
      {
        label: "Most common versions:",
        text: "v4 (fully random, the default choice) and v7 (time-ordered, great for database index locality); v1/v3/v5 cover MAC-based, MD5-namespace, and SHA-1-namespace use cases.",
      },
      {
        label: "Format:",
        text: "canonical form is 8-4-4-4-12 lowercase hex with hyphens (36 chars); compact (no hyphens), URN (urn:uuid:...), and braced ({...}) forms are also supported by the Format tab.",
      },
      {
        label: "Common uses:",
        text: "database primary keys, REST API resource identifiers, session/transaction IDs, and offline-generated client-side IDs.",
      },
      {
        label: "Collision risk:",
        text: "for v4, astronomically low — you'd need ~2.71 quintillion UUIDs for a 50% chance of a single collision.",
      },
      {
        label: "Best practice:",
        text: "use v4 by default, v7/v1 when insertion order matters, v5 for deterministic namespaced IDs, and never use UUIDs as security or auth tokens.",
      },
      {
        label: "Shareable links:",
        text: "pre-select a tab via ?tab=validate|decode|format and a version via ?version=v1|v3|v4|v5|v7|nil.",
      },
    ],
    faq: [
      {
        question: "What's the difference between UUID and GUID?",
        answer:
          "They're the same thing — a 128-bit identifier standardized by RFC 4122. \"UUID\" is the standard term; \"GUID\" is Microsoft's terminology for it.",
      },
      {
        question: "Which UUID version should I use?",
        answer:
          "Use v4 (random) by default. Choose v7 or v1 when you need time-ordered IDs for database indexing, and v5 (or v3) for deterministic IDs from namespaced names.",
      },
      {
        question: "How likely are UUID collisions?",
        answer:
          "For v4 (random) UUIDs, extremely unlikely — you'd need to generate about 2.71 quintillion of them to have a 50% chance of a single collision.",
      },
      {
        question: "Can I use UUIDs as database primary keys?",
        answer:
          "Yes — they avoid coordination and merge conflicts, though they take more index space (16 bytes) than integers. Use v1/v7 instead of v4 for better index locality.",
      },
    ],
    relatedTools: [
      {
        href: "/tools/timestamp-converter",
        title: "Timestamp Converter",
        description:
          "Convert the Unix timestamp decoded from a v1 UUID into a human-readable date",
      },
      {
        href: "/tools/hash-generator",
        title: "Hash Generator",
        description:
          "Generate MD5, SHA-1, and SHA-256 hashes for checksums and data integrity",
      },
    ],
  },
  de: {
    title: "UUID- (GUID-) Generator, Validator, Decoder & Formatkonverter",
    metaDescription:
      "RFC-4122-konforme UUIDs (GUIDs) erzeugen, validieren, dekodieren und umformatieren — v1, v3, v4, v5, v7, NIL — mit teilbaren Links über ?tab= und ?version=",
    keywords: [
      "uuid",
      "guid",
      "eindeutige kennung",
      "generator",
      "validator",
      "decoder",
      "formatkonverter",
      "v1",
      "v3",
      "v4",
      "v5",
      "v7",
    ],
    h1: "UUID-/GUID-Generator",
    intro:
      "RFC-4122-konforme UUIDs (GUIDs – Microsoft-Bezeichnung) sofort erzeugen und anschließend validieren, dekodieren oder neu formatieren – alles an einem Ort.",
    whatIsHeading: "Was ist eine UUID (GUID)?",
    whatIsBody:
      "Eine UUID (Universally Unique Identifier), in Microsoft-Terminologie auch GUID genannt, ist ein 128-Bit-Wert nach RFC 4122, der systemübergreifend eindeutig ist, ohne dass eine zentrale Koordination nötig ist. Sie wird üblicherweise als 32 Hexadezimalziffern in fünf durch Bindestriche getrennten Gruppen (8-4-4-4-12) geschrieben, z. B. 550e8400-e29b-41d4-a716-446655440000. UUIDs gibt es in mehreren Versionen – zufällig (v4), zeitlich geordnet (v1, v7) und deterministisch namensraumbasiert (v3, v5) – und mit diesem Tool lassen sich beliebige davon erzeugen, validieren, dekodieren und umformatieren.",
    keyFacts: [
      {
        label: "Gängigste Versionen:",
        text: "v4 (vollständig zufällig, die Standardwahl) und v7 (zeitlich geordnet, ideal für die Index-Lokalität in Datenbanken); v1/v3/v5 decken MAC-basierte, MD5-Namensraum- und SHA-1-Namensraum-Anwendungsfälle ab.",
      },
      {
        label: "Format:",
        text: "die kanonische Form ist 8-4-4-4-12 in Kleinbuchstaben-Hex mit Bindestrichen (36 Zeichen); kompakte (ohne Bindestriche), URN- (urn:uuid:...) und geklammerte ({...}) Formen werden ebenfalls im Format-Tab unterstützt.",
      },
      {
        label: "Typische Anwendungen:",
        text: "Primärschlüssel in Datenbanken, Ressourcen-Kennungen für REST-APIs, Sitzungs-/Transaktions-IDs und offline erzeugte clientseitige IDs.",
      },
      {
        label: "Kollisionsrisiko:",
        text: "bei v4 astronomisch gering – für eine 50-prozentige Wahrscheinlichkeit einer einzigen Kollision wären rund 2,71 Trillionen UUIDs nötig.",
      },
      {
        label: "Best Practice:",
        text: "standardmäßig v4 verwenden, v7/v1 wenn die Einfügereihenfolge wichtig ist, v5 für deterministische namensraumbasierte IDs, und UUIDs niemals als Sicherheits- oder Auth-Token verwenden.",
      },
      {
        label: "Teilbare Links:",
        text: "einen Tab per ?tab=validate|decode|format und eine Version per ?version=v1|v3|v4|v5|v7|nil vorauswählen.",
      },
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen UUID und GUID?",
        answer:
          "Es handelt sich um dasselbe – einen 128-Bit-Bezeichner nach RFC 4122. „UUID“ ist der Standardbegriff; „GUID“ ist die Microsoft-Bezeichnung dafür.",
      },
      {
        question: "Welche UUID-Version sollte ich verwenden?",
        answer:
          "Standardmäßig v4 (zufällig) verwenden. v7 oder v1 wählen, wenn zeitlich geordnete IDs für die Datenbankindizierung benötigt werden, und v5 (oder v3) für deterministische IDs aus namensraumbasierten Namen.",
      },
      {
        question: "Wie wahrscheinlich sind UUID-Kollisionen?",
        answer:
          "Bei v4-UUIDs (zufällig) äußerst unwahrscheinlich – es müssten rund 2,71 Trillionen davon erzeugt werden, um eine Wahrscheinlichkeit von 50 % für eine einzige Kollision zu erreichen.",
      },
      {
        question: "Kann ich UUIDs als Primärschlüssel in Datenbanken verwenden?",
        answer:
          "Ja – sie vermeiden Koordinationsaufwand und Merge-Konflikte, benötigen aber mehr Indexspeicher (16 Byte) als Ganzzahlen. Für eine bessere Index-Lokalität v1/v7 statt v4 verwenden.",
      },
    ],
    relatedTools: [
      {
        href: "/tools/timestamp-converter",
        title: "Timestamp Converter",
        description:
          "Den aus einer v1-UUID dekodierten Unix-Timestamp in ein lesbares Datum umwandeln",
      },
      {
        href: "/tools/hash-generator",
        title: "Hash Generator",
        description:
          "MD5-, SHA-1- und SHA-256-Hashes für Prüfsummen und Datenintegrität erzeugen",
      },
    ],
  },
};
