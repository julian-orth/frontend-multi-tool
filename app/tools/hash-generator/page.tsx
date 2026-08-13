import Breadcrumb from "@/components/breadcrumb";
import { HashGeneratorUI } from "./hash-generator-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Hash Generator - MD5, SHA-1, SHA-256, SHA-512 & HMAC",
  description:
    "Kryptografische Hashes (MD5, SHA-1, SHA-256, SHA-512) und HMAC zur Datenintegritätsprüfung, Passwort-Hashing und Datei-Prüfsummen generieren. Kostenloser Online-Hash-Rechner mit Live-Modus.",
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
  openGraph: {
    title: "Hash Generator — MD5, SHA-256, SHA-512 & HMAC-Rechner",
    description:
      "Kryptografische Hashes mit MD5, SHA-1, SHA-256, SHA-512 generieren. HMAC-Unterstützung für API-Signierung. Kostenloses Online-Hash-Tool mit sofortigen Ergebnissen.",
    url: `${SITE_CONFIG.domain}/tools/hash-generator`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `Hash Generator — ${SITE_CONFIG.name}`,
    description:
      "MD5-, SHA-256-, SHA-512-Hashes und HMAC generieren. Kostenloser kryptografischer Hash-Rechner für Entwickler.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/hash-generator`,
  },
};

export default function HashGeneratorPage() {
  return (
    <>
      <ToolSchema
        name="Hash Generator"
        description="Kryptografische Hashes (MD5, SHA-1, SHA-256, SHA-512) und HMAC zur Datenintegrität und Passwort-Hashing generieren"
        url="/tools/hash-generator"
        keywords={[
          "hash generator",
          "md5 generator",
          "sha256 generator",
          "hmac calculator",
          "cryptographic hash",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Hash Generator
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Kryptografische Hashes mit MD5-, SHA-1-, SHA-256- und
              SHA-512-Algorithmen generieren. Unterstützung für HMAC, mehrere
              Eingabeformate und sofortige Browser-Verarbeitung für vollständige
              Privatsphäre.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <HashGeneratorUI />
          </div>

          <div className="mt-16 space-y-12">
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Was ist ein kryptografischer Hash?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Eine kryptografische Hash-Funktion ist ein mathematischer
                  Algorithmus, der eine Eingabe (oder eine „Nachricht“) nimmt
                  und eine Zeichenfolge fester Größe zurückgibt, die als
                  Hash-Wert, Message Digest oder einfach Hash bezeichnet wird.
                  Die Ausgabe ist typischerweise eine hexadezimale Zahl, die die
                  Eingabedaten eindeutig repräsentiert.
                </p>
                <p>
                  Hash-Funktionen sind so konzipiert, dass sie Einwegfunktionen
                  sind – das heißt, es ist praktisch unmöglich, den Prozess
                  umzukehren und den ursprünglichen Input aus dem Hash-Wert zu
                  bestimmen. Schon eine kleine Änderung der Eingabedaten erzeugt
                  einen vollständig anderen Hash-Wert, wodurch Hash-Funktionen
                  ideal zur Erkennung von Datenmanipulationen und zur
                  Gewährleistung der Datenintegrität sind.
                </p>
                <p>
                  Im Gegensatz zur Verschlüsselung, die mit dem richtigen
                  Schlüssel reversibel ist, sind Hash-Funktionen absichtlich
                  irreversibel. Dadurch eignen sie sich perfekt für
                  Passwortspeicherung, digitale Signaturen und die Verifikation,
                  dass Daten während der Übertragung nicht beschädigt oder
                  verändert wurden.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Häufige Anwendungsfälle für Hash-Funktionen
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Passwortspeicherung
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Das Speichern von Passwort-Hashes statt Klartextpasswörtern
                    stellt sicher, dass selbst bei einem Datenleck die
                    tatsächlichen Passwörter geschützt bleiben. Moderne Systeme
                    verwenden SHA-256 oder stärkere Algorithmen in Kombination
                    mit Salting und Key Stretching.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Verifikation der Dateiintegrität
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Software-Downloads enthalten oft SHA-256-Prüfsummen, mit
                    denen Nutzer prüfen können, dass die heruntergeladene Datei
                    nicht beschädigt oder manipuliert wurde.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Digitale Signaturen
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Hash-Funktionen sind essenziell für digitale
                    Signaturschemata. Zuerst wird das Dokument gehasht, dann
                    wird der Hash mit einem privaten Schlüssel verschlüsselt.
                    Dadurch werden Authentizität und Nicht-Abstreitbarkeit
                    sichergestellt.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Blockchain und Kryptowährungen
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Bitcoin und andere Kryptowährungen verwenden SHA-256 für
                    Mining und zur Erstellung sicherer, unveränderlicher
                    Transaktionsketten.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Deduplizierung von Daten
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Cloud-Speicher und Backup-Systeme verwenden Hash-Funktionen,
                    um doppelte Dateien zu erkennen.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    API-Sicherheit
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    HMAC (Hash-based Message Authentication Code) verwendet
                    Hash-Funktionen mit einem geheimen Schlüssel, um sowohl
                    Datenintegrität als auch Authentizität bei API-Anfragen und
                    Webhooks zu prüfen.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Vergleich von Hash-Algorithmen
              </h2>
              <div className="space-y-6">
                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-800/50">
                      <tr>
                        <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-50">
                          Algorithmus
                        </th>
                        <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-50">
                          Hash-Größe
                        </th>
                        <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-50">
                          Sicherheit
                        </th>
                        <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-50">
                          Anwendungsfälle
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-50">
                          MD5
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          128 Bit (32 hex chars)
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-400">
                            Gebrochen
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          Legacy-Prüfsummen, nicht für Sicherheit
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-50">
                          SHA-1
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          160 Bit (40 hex chars)
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                            Veraltet
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          Git Commits, Legacy-Systeme
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-50">
                          SHA-256
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          256 Bit (64 hex chars)
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Stark
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                          Passwörter, Zertifikate, Blockchain
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
