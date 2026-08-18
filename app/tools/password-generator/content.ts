import type { Locale } from "@/lib/i18n/locale";

export interface PasswordGeneratorPageContent {
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
  /** Twitter card title (composed with " - " + site name in page.tsx) */
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
  /** The three highlight cards below the tool UI */
  sections: { heading: string; body: string }[];
}

export const pageContent: Record<Locale, PasswordGeneratorPageContent> = {
  en: {
    metaTitle: "Password Generator - Secure Password & Passphrase Builder",
    metaDescription:
      "Generate cryptographically secure passwords and passphrases with entropy scoring, ambiguity filters, batch export, and privacy-first browser processing.",
    keywords: [
      "password generator",
      "secure password generator",
      "passphrase generator",
      "entropy calculator",
      "random password",
      "password strength",
      "bulk password generation",
    ],
    ogTitle: "Password Generator - Secure Password & Passphrase Builder",
    ogDescription:
      "Generate secure passwords and passphrases with advanced options, entropy insights, and copy/export tools. All processing happens in your browser.",
    twitterTitle: "Password Generator",
    twitterDescription:
      "Create strong passwords and passphrases with professional controls and entropy scoring.",
    schemaName: "Password Generator",
    schemaDescription:
      "Generate cryptographically secure passwords and passphrases with entropy scoring and advanced customization",
    schemaKeywords: [
      "password generator",
      "passphrase generator",
      "entropy",
      "security",
      "random password",
    ],
    h1: "Password Generator",
    intro:
      "Build strong passwords and memorable passphrases with fine-grained controls, live entropy insights, and bulk export.",
    sections: [
      {
        heading: "Why Entropy Matters",
        body: "Entropy estimates how many guesses an attacker needs on average. Higher entropy means exponentially higher resistance against brute-force attacks.",
      },
      {
        heading: "Password vs Passphrase",
        body: "Password mode is ideal for strict complexity policies. Passphrase mode improves memorability while staying strong with enough random words.",
      },
      {
        heading: "Privacy by Design",
        body: "All generation uses browser cryptography APIs locally. No passwords are sent to a server, logged, or stored remotely.",
      },
    ],
  },
  de: {
    metaTitle: "Passwort-Generator - Sicherer Passwort- und Passphrasen-Builder",
    metaDescription:
      "Kryptografisch sichere Passwörter und Passphrasen erstellen – mit Entropie-Bewertung, Filtern für mehrdeutige Zeichen, Stapel-Export und datenschutzfreundlicher Verarbeitung im Browser.",
    keywords: [
      "passwort generator",
      "sicherer passwort generator",
      "passphrase generator",
      "entropie rechner",
      "zufälliges passwort",
      "passwortstärke",
      "passwörter im stapel generieren",
    ],
    ogTitle: "Passwort-Generator - Sicherer Passwort- und Passphrasen-Builder",
    ogDescription:
      "Sichere Passwörter und Passphrasen mit erweiterten Optionen, Entropie-Einblicken und Kopier-/Export-Funktionen erstellen. Die gesamte Verarbeitung erfolgt im Browser.",
    twitterTitle: "Passwort-Generator",
    twitterDescription:
      "Starke Passwörter und Passphrasen mit professionellen Einstellungen und Entropie-Bewertung erstellen.",
    schemaName: "Passwort-Generator",
    schemaDescription:
      "Kryptografisch sichere Passwörter und Passphrasen mit Entropie-Bewertung und erweiterten Anpassungsoptionen erstellen",
    schemaKeywords: [
      "passwort generator",
      "passphrase generator",
      "entropie",
      "sicherheit",
      "zufälliges passwort",
    ],
    h1: "Passwort-Generator",
    intro:
      "Starke Passwörter und leicht merkbare Passphrasen mit feingranularen Einstellungen, Live-Entropie-Einblicken und Stapel-Export erstellen.",
    sections: [
      {
        heading: "Warum Entropie wichtig ist",
        body: "Entropie schätzt, wie viele Versuche ein Angreifer im Durchschnitt benötigt. Höhere Entropie bedeutet exponentiell höheren Widerstand gegen Brute-Force-Angriffe.",
      },
      {
        heading: "Passwort vs. Passphrase",
        body: "Der Passwort-Modus eignet sich ideal für strenge Komplexitätsrichtlinien. Der Passphrase-Modus verbessert die Merkbarkeit und bleibt bei ausreichend zufälligen Wörtern trotzdem stark.",
      },
      {
        heading: "Datenschutz von Grund auf",
        body: "Die gesamte Generierung nutzt lokale Kryptografie-APIs des Browsers. Es werden keine Passwörter an einen Server gesendet, protokolliert oder extern gespeichert.",
      },
    ],
  },
};
