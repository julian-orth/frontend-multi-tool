import type { LocalizedToolPageContent } from "@/lib/i18n/tool-content";
import type {
  JWTDecodeError,
  KnownAlgorithm,
  KnownClaimKey,
  RelativeTime,
  TimeUnit,
} from "./utils";

export const pageContent: LocalizedToolPageContent = {
  en: {
    title: "JWT Decoder - Decode & Analyze JSON Web Tokens Online",
    metaDescription:
      "Decode and analyze JSON Web Tokens (JWT) instantly. View header, payload, signature, and claims analysis. Free online JWT decoder tool with algorithm detection and expiration checking.",
    keywords: [
      "jwt",
      "decoder",
      "json web token",
      "jwt decode",
      "jwt parser",
      "jwt analyzer",
      "token decoder",
      "base64url",
      "jwt.io",
      "jwt debugger",
    ],
    h1: "JWT Decoder",
    intro:
      "Decode and analyze JSON Web Tokens (JWT) to view header, payload, signature, and claims. Inspect token expiration, algorithm, and standard claims. All processing happens in your browser for complete privacy.",
    keyFacts: [
      "Structure: Header (algorithm & token type) + Payload (claims) + Signature, each Base64URL-encoded and joined with dots.",
      "Standard claims: iss, sub, aud, exp, nbf, iat, and jti identify the issuer, subject, audience, and validity window of a token — exp is critical for limiting token lifespan.",
      "Signing algorithms: HMAC (HS256/384/512) uses a shared secret; RSA and ECDSA (RS256, ES256, etc.) use a private/public key pair, which suits distributed verification.",
      "Common uses: authentication, single sign-on, and API authorization for SPAs and mobile apps.",
      "Not encrypted: JWTs are signed, not encrypted — anyone can decode and read the payload, so never store secrets or sensitive data in it.",
      "Security: always verify the signature and exp/iss/aud claims server-side, use HTTPS, prefer short-lived access tokens with refresh tokens, and never accept the \"none\" algorithm.",
    ],
    faq: [
      {
        question: "Does decoding a JWT verify its signature?",
        answer:
          "No. Decoding just reads the Base64URL-encoded header and payload — anyone can do that without a key. Verifying checks the signature to confirm the token wasn't tampered with; this tool only decodes, it does not verify.",
      },
      {
        question: "Can I safely decode sensitive JWTs using this tool?",
        answer:
          "Yes, all decoding happens locally in your browser and nothing is sent to a server. Still, remember JWTs are only signed, not encrypted, so anyone with the token can read its contents.",
      },
      {
        question: "Should I store sensitive information in a JWT?",
        answer:
          "Generally no — JWTs are encoded, not encrypted, so include only what's needed for authorization (user ID, roles) and avoid passwords or other sensitive data.",
      },
      {
        question: 'What does "algorithm: none" mean and why is it dangerous?',
        answer:
          "It means the token has no signature and no cryptographic protection, so anyone can forge or modify it undetected. Never accept \"none\" algorithm tokens in production.",
      },
    ],
    relatedToolsBlurb: {
      "json-formatter": "Format and validate JSON data from JWT payloads.",
      base64: "Encode and decode Base64 strings (JWT uses Base64URL encoding).",
    },
  },
  de: {
    title: "JWT-Decoder - JSON Web Tokens online dekodieren & analysieren",
    metaDescription:
      "JSON Web Tokens (JWT) sofort dekodieren und analysieren. Header, Payload, Signatur und Claims-Analyse anzeigen. Kostenloser Online-JWT-Decoder mit Algorithmuserkennung und Ablaufprüfung.",
    keywords: [
      "jwt",
      "decoder",
      "json web token",
      "jwt dekodieren",
      "jwt parser",
      "jwt analyzer",
      "token decoder",
      "base64url",
      "jwt.io",
      "jwt debugger",
    ],
    h1: "JWT-Decoder",
    intro:
      "JSON Web Tokens (JWT) dekodieren und analysieren, um Header, Payload, Signatur und Claims einzusehen. Ablaufzeit, Algorithmus und Standard-Claims prüfen. Alle Berechnungen laufen im Browser für vollständige Privatsphäre.",
    keyFacts: [
      "Struktur: Header (Algorithmus & Token-Typ) + Payload (Claims) + Signatur, jeweils Base64URL-kodiert und mit Punkten verbunden.",
      "Standard-Claims: iss, sub, aud, exp, nbf, iat und jti identifizieren Aussteller, Subjekt, Empfänger und Gültigkeitsfenster eines Tokens – exp ist entscheidend, um die Token-Lebensdauer zu begrenzen.",
      "Signaturalgorithmen: HMAC (HS256/384/512) nutzt ein gemeinsames Geheimnis; RSA und ECDSA (RS256, ES256 usw.) nutzen ein privates/öffentliches Schlüsselpaar, geeignet für verteilte Verifizierung.",
      "Typische Anwendungen: Authentifizierung, Single Sign-On und API-Autorisierung für SPAs und mobile Apps.",
      "Nicht verschlüsselt: JWTs sind signiert, nicht verschlüsselt – jeder kann die Payload dekodieren und lesen, daher niemals Geheimnisse oder sensible Daten darin speichern.",
      "Sicherheit: Signatur sowie exp/iss/aud-Claims immer serverseitig prüfen, HTTPS verwenden, kurzlebige Access-Tokens mit Refresh-Tokens bevorzugen und niemals den Algorithmus „none“ akzeptieren.",
    ],
    faq: [
      {
        question: "Wird beim Dekodieren eines JWT die Signatur geprüft?",
        answer:
          "Nein. Dekodieren liest nur den Base64URL-kodierten Header und die Payload – das kann jeder ohne Schlüssel. Die Verifizierung prüft die Signatur, um sicherzustellen, dass das Token nicht manipuliert wurde; dieses Tool dekodiert nur, es verifiziert nicht.",
      },
      {
        question: "Kann ich sensible JWTs sicher mit diesem Tool dekodieren?",
        answer:
          "Ja, das gesamte Dekodieren läuft lokal im Browser, nichts wird an einen Server gesendet. Trotzdem gilt: JWTs sind nur signiert, nicht verschlüsselt, daher kann jeder mit dem Token dessen Inhalt lesen.",
      },
      {
        question: "Sollte ich sensible Informationen in einem JWT speichern?",
        answer:
          "In der Regel nicht – JWTs sind kodiert, nicht verschlüsselt. Nur das für die Autorisierung Nötige einbetten (Benutzer-ID, Rollen) und Passwörter oder andere sensible Daten vermeiden.",
      },
      {
        question: 'Was bedeutet "algorithm: none" und warum ist das gefährlich?',
        answer:
          "Es bedeutet, dass das Token keine Signatur und keinen kryptografischen Schutz hat, sodass es unbemerkt gefälscht oder verändert werden kann. „none“-Algorithmus-Tokens niemals in Produktion akzeptieren.",
      },
    ],
    relatedToolsBlurb: {
      "json-formatter": "JSON-Daten aus JWT-Payloads formatieren und validieren.",
      base64: "Base64-Zeichenfolgen kodieren und dekodieren (JWT nutzt Base64URL).",
    },
  },
};

export interface JwtDecoderUiContent {
  decodeButton: string;
  clearButtonAriaLabel: string;
  loadFromFileLabel: string;
  loadSampleLabel: string;
  fileReadFailed: string;
  tokenInputLabel: string;
  tokenInputPlaceholder: string;
  charsLabel: (chars: number) => string;
  errorLabel: string;
  decodeError: (error: JWTDecodeError) => string;
  decodedSuccessTitle: string;
  decodedSuccessBody: string;
  securityWarningTitle: string;
  securityWarningBody: string;
  tokenExpiredTitle: string;
  expiredSentence: (rel: RelativeTime) => string;
  timeUnit: (unit: TimeUnit, value: number) => string;
  signingAlgorithmTitle: string;
  algorithmDescription: (
    algorithm: string,
    knownAlgorithm: KnownAlgorithm | null,
    isUnspecified: boolean
  ) => string;
  headerTitle: string;
  payloadTitle: string;
  signatureTitle: string;
  copyButton: string;
  copiedButton: string;
  downloadButton: string;
  claimsAnalysisTitle: string;
  claimDescription: (key: string, knownKey: KnownClaimKey | null) => string;
  noSignature: string;
  signatureExplanation: string;
  aboutTitle: string;
  aboutIntro: string;
  aboutList: { label: string; text: string }[];
  aboutPrivacyNote: string;
}

const claimTitles: Record<KnownClaimKey, { en: string; de: string }> = {
  iss: { en: "Issuer", de: "Aussteller" },
  sub: { en: "Subject", de: "Subjekt" },
  aud: { en: "Audience", de: "Empfänger" },
  exp: { en: "Expiration Time", de: "Ablaufzeit" },
  nbf: { en: "Not Before", de: "Nicht gültig vor" },
  iat: { en: "Issued At", de: "Ausgestellt am" },
  jti: { en: "JWT ID", de: "JWT-ID" },
  name: { en: "Name", de: "Name" },
  email: { en: "Email", de: "E-Mail" },
  email_verified: { en: "Email Verified", de: "E-Mail verifiziert" },
  phone_number: { en: "Phone Number", de: "Telefonnummer" },
  phone_number_verified: {
    en: "Phone Verified",
    de: "Telefonnummer verifiziert",
  },
  given_name: { en: "Given Name", de: "Vorname" },
  family_name: { en: "Family Name", de: "Nachname" },
  middle_name: { en: "Middle Name", de: "Zweiter Vorname" },
  nickname: { en: "Nickname", de: "Spitzname" },
  preferred_username: { en: "Preferred Username", de: "Bevorzugter Benutzername" },
  profile: { en: "Profile", de: "Profil" },
  picture: { en: "Picture", de: "Profilbild" },
  website: { en: "Website", de: "Webseite" },
  gender: { en: "Gender", de: "Geschlecht" },
  birthdate: { en: "Birthdate", de: "Geburtsdatum" },
  zoneinfo: { en: "Zone Info", de: "Zeitzone" },
  locale: { en: "Locale", de: "Sprache/Region" },
  updated_at: { en: "Updated At", de: "Zuletzt aktualisiert" },
  azp: { en: "Authorized Party", de: "Autorisierte Partei" },
  nonce: { en: "Nonce", de: "Nonce" },
  auth_time: { en: "Authentication Time", de: "Authentifizierungszeit" },
  acr: {
    en: "Authentication Context Class Reference",
    de: "Authentifizierungskontext-Referenz",
  },
  amr: {
    en: "Authentication Methods References",
    de: "Verwendete Authentifizierungsmethoden",
  },
  scope: { en: "Scope", de: "Berechtigungsumfang" },
  roles: { en: "Roles", de: "Rollen" },
  groups: { en: "Groups", de: "Gruppen" },
};

const claimExplanations: Record<KnownClaimKey, { en: string; de: string }> = {
  iss: { en: "Identifies who issued the JWT", de: "Identifiziert den Aussteller des JWT" },
  sub: { en: "Identifies the subject of the JWT", de: "Identifiziert das Subjekt des JWT" },
  aud: { en: "Identifies the recipients of the JWT", de: "Identifiziert die Empfänger des JWT" },
  exp: {
    en: "Time after which the JWT must not be accepted",
    de: "Zeitpunkt, nach dem das JWT nicht mehr akzeptiert werden darf",
  },
  nbf: {
    en: "Time before which the JWT must not be accepted",
    de: "Zeitpunkt, vor dem das JWT nicht akzeptiert werden darf",
  },
  iat: { en: "Time at which the JWT was issued", de: "Zeitpunkt, zu dem das JWT ausgestellt wurde" },
  jti: { en: "Unique identifier for the JWT", de: "Eindeutige Kennung des JWT" },
  name: { en: "Full name of the user", de: "Vollständiger Name des Benutzers" },
  email: { en: "Email address of the user", de: "E-Mail-Adresse des Benutzers" },
  email_verified: {
    en: "Whether the email has been verified",
    de: "Ob die E-Mail-Adresse verifiziert wurde",
  },
  phone_number: { en: "Phone number of the user", de: "Telefonnummer des Benutzers" },
  phone_number_verified: {
    en: "Whether the phone number has been verified",
    de: "Ob die Telefonnummer verifiziert wurde",
  },
  given_name: { en: "First name of the user", de: "Vorname des Benutzers" },
  family_name: { en: "Last name of the user", de: "Nachname des Benutzers" },
  middle_name: { en: "Middle name of the user", de: "Zweiter Vorname des Benutzers" },
  nickname: { en: "Casual name of the user", de: "Rufname des Benutzers" },
  preferred_username: {
    en: "Shorthand name for the user",
    de: "Kurzform des Benutzernamens",
  },
  profile: { en: "Profile page URL", de: "URL der Profilseite" },
  picture: { en: "Profile picture URL", de: "URL des Profilbilds" },
  website: { en: "Web page or blog URL", de: "URL der Webseite oder des Blogs" },
  gender: { en: "Gender of the user", de: "Geschlecht des Benutzers" },
  birthdate: { en: "Birthday of the user", de: "Geburtstag des Benutzers" },
  zoneinfo: { en: "Time zone of the user", de: "Zeitzone des Benutzers" },
  locale: { en: "Locale of the user", de: "Spracheinstellung des Benutzers" },
  updated_at: {
    en: "Time the user's information was last updated",
    de: "Zeitpunkt der letzten Aktualisierung der Benutzerdaten",
  },
  azp: { en: "Party to which the ID token was issued", de: "Partei, an die das ID-Token ausgestellt wurde" },
  nonce: {
    en: "Value used to associate a client session with an ID token",
    de: "Wert zur Verknüpfung einer Client-Sitzung mit einem ID-Token",
  },
  auth_time: { en: "Time when authentication occurred", de: "Zeitpunkt der Authentifizierung" },
  acr: { en: "Authentication context class", de: "Authentifizierungskontextklasse" },
  amr: { en: "Authentication methods used", de: "Verwendete Authentifizierungsmethoden" },
  scope: { en: "Space-separated list of scope values", de: "Durch Leerzeichen getrennte Liste von Berechtigungswerten" },
  roles: { en: "User roles or permissions", de: "Benutzerrollen oder Berechtigungen" },
  groups: { en: "User groups", de: "Benutzergruppen" },
};

const algorithmDescriptions: Record<KnownAlgorithm, { en: string; de: string }> = {
  HS256: {
    en: "HMAC with SHA-256 - Symmetric algorithm using a shared secret",
    de: "HMAC mit SHA-256 - Symmetrischer Algorithmus mit gemeinsamem Geheimnis",
  },
  HS384: {
    en: "HMAC with SHA-384 - Symmetric algorithm using a shared secret",
    de: "HMAC mit SHA-384 - Symmetrischer Algorithmus mit gemeinsamem Geheimnis",
  },
  HS512: {
    en: "HMAC with SHA-512 - Symmetric algorithm using a shared secret",
    de: "HMAC mit SHA-512 - Symmetrischer Algorithmus mit gemeinsamem Geheimnis",
  },
  RS256: {
    en: "RSA Signature with SHA-256 - Asymmetric algorithm using RSA key pair",
    de: "RSA-Signatur mit SHA-256 - Asymmetrischer Algorithmus mit RSA-Schlüsselpaar",
  },
  RS384: {
    en: "RSA Signature with SHA-384 - Asymmetric algorithm using RSA key pair",
    de: "RSA-Signatur mit SHA-384 - Asymmetrischer Algorithmus mit RSA-Schlüsselpaar",
  },
  RS512: {
    en: "RSA Signature with SHA-512 - Asymmetric algorithm using RSA key pair",
    de: "RSA-Signatur mit SHA-512 - Asymmetrischer Algorithmus mit RSA-Schlüsselpaar",
  },
  ES256: {
    en: "ECDSA with P-256 curve and SHA-256 - Asymmetric algorithm using elliptic curve",
    de: "ECDSA mit P-256-Kurve und SHA-256 - Asymmetrischer Algorithmus mit elliptischer Kurve",
  },
  ES384: {
    en: "ECDSA with P-384 curve and SHA-384 - Asymmetric algorithm using elliptic curve",
    de: "ECDSA mit P-384-Kurve und SHA-384 - Asymmetrischer Algorithmus mit elliptischer Kurve",
  },
  ES512: {
    en: "ECDSA with P-521 curve and SHA-512 - Asymmetric algorithm using elliptic curve",
    de: "ECDSA mit P-521-Kurve und SHA-512 - Asymmetrischer Algorithmus mit elliptischer Kurve",
  },
  PS256: {
    en: "RSASSA-PSS with SHA-256 - Asymmetric algorithm using RSA-PSS key pair",
    de: "RSASSA-PSS mit SHA-256 - Asymmetrischer Algorithmus mit RSA-PSS-Schlüsselpaar",
  },
  PS384: {
    en: "RSASSA-PSS with SHA-384 - Asymmetric algorithm using RSA-PSS key pair",
    de: "RSASSA-PSS mit SHA-384 - Asymmetrischer Algorithmus mit RSA-PSS-Schlüsselpaar",
  },
  PS512: {
    en: "RSASSA-PSS with SHA-512 - Asymmetric algorithm using RSA-PSS key pair",
    de: "RSASSA-PSS mit SHA-512 - Asymmetrischer Algorithmus mit RSA-PSS-Schlüsselpaar",
  },
  NONE: {
    en: "No digital signature or MAC - WARNING: Not secure!",
    de: "Keine digitale Signatur oder MAC - WARNUNG: Nicht sicher!",
  },
};

const timeUnitWords: Record<TimeUnit, { en: [string, string]; de: [string, string] }> = {
  second: { en: ["second", "seconds"], de: ["Sekunde", "Sekunden"] },
  minute: { en: ["minute", "minutes"], de: ["Minute", "Minuten"] },
  hour: { en: ["hour", "hours"], de: ["Stunde", "Stunden"] },
  day: { en: ["day", "days"], de: ["Tag", "Tage"] },
};

function englishDecodeError(error: JWTDecodeError): string {
  switch (error.code) {
    case "empty":
      return "Please enter a JWT token";
    case "wrong-part-count":
      return `Invalid JWT format. Expected 3 parts (header.payload.signature), got ${error.got} parts`;
    case "empty-header-or-payload":
      return "JWT header or payload is empty";
    case "invalid-header-json":
      return `Invalid JSON in header: ${error.message}`;
    case "invalid-payload-json":
      return `Invalid JSON in payload: ${error.message}`;
    case "decode-error":
      return `Decoding error: ${error.message}`;
  }
}

function germanDecodeError(error: JWTDecodeError): string {
  switch (error.code) {
    case "empty":
      return "Bitte ein JWT-Token eingeben";
    case "wrong-part-count":
      return `Ungültiges JWT-Format. Erwartet wurden 3 Teile (Header.Payload.Signatur), gefunden: ${error.got}`;
    case "empty-header-or-payload":
      return "JWT-Header oder -Payload ist leer";
    case "invalid-header-json":
      return `Ungültiges JSON im Header: ${error.message}`;
    case "invalid-payload-json":
      return `Ungültiges JSON in der Payload: ${error.message}`;
    case "decode-error":
      return `Dekodierungsfehler: ${error.message}`;
  }
}

export const uiContent: Record<"en" | "de", JwtDecoderUiContent> = {
  en: {
    decodeButton: "Decode JWT",
    clearButtonAriaLabel: "Clear input",
    loadFromFileLabel: "Load from file",
    loadSampleLabel: "Load sample JWT",
    fileReadFailed: "Failed to read file",
    tokenInputLabel: "JWT Token Input",
    tokenInputPlaceholder:
      "Paste your JWT token here (e.g., eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c)",
    charsLabel: (chars) => `${chars.toLocaleString()} chars`,
    errorLabel: "Error",
    decodeError: englishDecodeError,
    decodedSuccessTitle: "JWT Decoded Successfully",
    decodedSuccessBody:
      "The token has been decoded. Review the header, payload, and signature below.",
    securityWarningTitle: "Security Warning",
    securityWarningBody:
      'This JWT uses the "none" algorithm, which provides no cryptographic protection. This is highly insecure and should never be used in production.',
    tokenExpiredTitle: "Token Expired",
    expiredSentence: (rel) =>
      `This JWT ${rel.direction === "past" ? "expired" : "expires"} ${uiContent.en.timeUnit(rel.unit, rel.value)} ${rel.direction === "past" ? "ago" : "from now"}`,
    timeUnit: (unit, value) => {
      const [singular, plural] = timeUnitWords[unit].en;
      return `${value} ${value === 1 ? singular : plural}`;
    },
    signingAlgorithmTitle: "Signing Algorithm",
    algorithmDescription: (algorithm, known, isUnspecified) => {
      if (isUnspecified) return "Algorithm not specified in header";
      if (known) return algorithmDescriptions[known].en;
      return "Custom or non-standard algorithm";
    },
    headerTitle: "Header",
    payloadTitle: "Payload",
    signatureTitle: "Signature",
    copyButton: "Copy",
    copiedButton: "Copied",
    downloadButton: "Download",
    claimsAnalysisTitle: "Claims Analysis",
    claimDescription: (key, knownKey) => {
      if (knownKey) return `${claimTitles[knownKey].en} - ${claimExplanations[knownKey].en}`;
      return "Custom claim - Application-specific data";
    },
    noSignature: "(No signature)",
    signatureExplanation:
      "The signature is used to verify that the sender of the JWT is who it claims to be and that the message wasn't changed along the way. To verify the signature, you need the secret key or public key (depending on the algorithm used).",
    aboutTitle: "About JWT Tokens",
    aboutIntro:
      "JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims between two parties. A JWT consists of three parts separated by dots: Header.Payload.Signature",
    aboutList: [
      { label: "Header:", text: "Contains the token type (JWT) and signing algorithm (e.g., HS256, RS256)" },
      { label: "Payload:", text: "Contains the claims (statements about the user and additional metadata)" },
      { label: "Signature:", text: "Used to verify the token's integrity and authenticity" },
    ],
    aboutPrivacyNote:
      "⚠️ Note: This tool only decodes and displays JWT contents. It does not verify signatures or validate tokens. All processing happens in your browser for privacy.",
  },
  de: {
    decodeButton: "JWT dekodieren",
    clearButtonAriaLabel: "Eingabe leeren",
    loadFromFileLabel: "Aus Datei laden",
    loadSampleLabel: "Beispiel-JWT laden",
    fileReadFailed: "Datei konnte nicht gelesen werden",
    tokenInputLabel: "JWT-Token-Eingabe",
    tokenInputPlaceholder:
      "JWT-Token hier einfügen (z. B. eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c)",
    charsLabel: (chars) => `${chars.toLocaleString()} Zeichen`,
    errorLabel: "Fehler",
    decodeError: germanDecodeError,
    decodedSuccessTitle: "JWT erfolgreich dekodiert",
    decodedSuccessBody:
      "Das Token wurde dekodiert. Header, Payload und Signatur unten prüfen.",
    securityWarningTitle: "Sicherheitswarnung",
    securityWarningBody:
      'Dieses JWT verwendet den Algorithmus „none", der keinen kryptografischen Schutz bietet. Das ist höchst unsicher und sollte niemals in Produktion verwendet werden.',
    tokenExpiredTitle: "Token abgelaufen",
    expiredSentence: (rel) =>
      rel.direction === "past"
        ? `Dieses JWT ist vor ${uiContent.de.timeUnit(rel.unit, rel.value)} abgelaufen`
        : `Dieses JWT läuft in ${uiContent.de.timeUnit(rel.unit, rel.value)} ab`,
    timeUnit: (unit, value) => {
      const [singular, plural] = timeUnitWords[unit].de;
      return `${value} ${value === 1 ? singular : plural}`;
    },
    signingAlgorithmTitle: "Signaturalgorithmus",
    algorithmDescription: (algorithm, known, isUnspecified) => {
      if (isUnspecified) return "Algorithmus nicht im Header angegeben";
      if (known) return algorithmDescriptions[known].de;
      return "Benutzerdefinierter oder nicht-standardisierter Algorithmus";
    },
    headerTitle: "Header",
    payloadTitle: "Payload",
    signatureTitle: "Signatur",
    copyButton: "Kopieren",
    copiedButton: "Kopiert",
    downloadButton: "Herunterladen",
    claimsAnalysisTitle: "Claims-Analyse",
    claimDescription: (key, knownKey) => {
      if (knownKey) return `${claimTitles[knownKey].de} - ${claimExplanations[knownKey].de}`;
      return "Benutzerdefinierter Claim - anwendungsspezifische Daten";
    },
    noSignature: "(Keine Signatur)",
    signatureExplanation:
      "Die Signatur dient dazu zu verifizieren, dass der Absender des JWT der ist, der er vorgibt zu sein, und dass die Nachricht unterwegs nicht verändert wurde. Zur Verifizierung wird der geheime Schlüssel oder der öffentliche Schlüssel benötigt (je nach verwendetem Algorithmus).",
    aboutTitle: "Über JWT-Tokens",
    aboutIntro:
      "JSON Web Tokens (JWT) sind eine kompakte, URL-sichere Methode, um Claims zwischen zwei Parteien darzustellen. Ein JWT besteht aus drei durch Punkte getrennten Teilen: Header.Payload.Signatur",
    aboutList: [
      { label: "Header:", text: "Enthält den Token-Typ (JWT) und den Signaturalgorithmus (z. B. HS256, RS256)" },
      { label: "Payload:", text: "Enthält die Claims (Aussagen über den Benutzer und zusätzliche Metadaten)" },
      { label: "Signatur:", text: "Dient zur Überprüfung von Integrität und Authentizität des Tokens" },
    ],
    aboutPrivacyNote:
      "⚠️ Hinweis: Dieses Tool dekodiert und zeigt nur JWT-Inhalte an. Es werden weder Signaturen überprüft noch Token validiert. Aus Datenschutzgründen erfolgt die gesamte Verarbeitung in Ihrem Browser.",
  },
};
