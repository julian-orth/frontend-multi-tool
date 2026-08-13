import Breadcrumb from "@/components/breadcrumb";
import { TimestampConverterUI } from "./timestamp-converter-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Unix-Timestamp-Konverter - Epoch-Zeit in Datumswert umwandeln",
  description:
    "Unix-Timestamps in lesbare Datumswerte und umgekehrt umwandeln. Unterstützt Sekunden, Millisekunden, Mikrosekunden und Nanosekunden. Live-Epoch-Uhr mit Zeitzonen-Konvertierung.",
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
  openGraph: {
    title: "Unix-Timestamp-Konverter — Epoch-Zeit zu Datum",
    description:
      "Unix-Timestamps sofort in lesbare Datumswerte umwandeln. Unterstützt mehrere Formate und Zeitzonen. Live-Epoch-Uhr inklusive.",
    url: `${SITE_CONFIG.domain}/tools/timestamp-converter`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `Unix-Timestamp-Konverter — ${SITE_CONFIG.name}`,
    description:
      "Unix-Timestamps in Datumswerte und umgekehrt umwandeln. Live-Epoch-Uhr mit Zeitzonenunterstützung.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/timestamp-converter`,
  },
};

export default function TimestampConverterPage() {
  return (
    <>
      <ToolSchema
        name="Unix-Timestamp-Konverter"
        description="Unix-Timestamps in lesbare Datumswerte und umgekehrt konvertieren mit Millisekunden-Unterstützung und Zeitzonenformatierung"
        url="/tools/timestamp-converter"
        keywords={[
          "timestamp converter",
          "unix timestamp",
          "epoch converter",
          "date converter",
          "unix time",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Unix-Timestamp-Konverter
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Unix-Timestamps in lesbare Datumswerte und umgekehrt umwandeln.
              Unterstützt Sekunden, Millisekunden und mehrere Zeitzonen. Alle
              Berechnungen laufen im Browser ab.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <TimestampConverterUI />
          </div>

          <div className="mt-16 space-y-12">
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Was ist ein Unix-Timestamp?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Ein Unix-Timestamp (auch Epoch-Zeit, POSIX-Zeit oder Unix-Zeit
                  genannt) ist ein System zur Zeitmessung als laufende
                  Gesamtzahl von Sekunden. Es zählt die seit dem Unix-Epoch
                  verstrichenen Sekunden: 1. Januar 1970, 00:00:00 UTC
                  (Coordinated Universal Time). Dieser Zeitpunkt wird auch als
                  „Geburt der Unix-Zeit“ bezeichnet und dient als Referenzpunkt
                  für alle Unix-Timestamp-Berechnungen.
                </p>
                <p>
                  Das Unix-Timestamp-System wurde ursprünglich für
                  Unix-Betriebssysteme entwickelt und ist seitdem zu einem
                  universellen Standard geworden, der von praktisch allen
                  modernen Computerplattformen, Programmiersprachen und
                  Datenbanken verwendet wird. Der Vorteil von Unix-Timestamps
                  liegt in ihrer Einfachheit: Eine einzelne Zahl repräsentiert
                  einen genauen Moment, wodurch sie für Speicherung, Vergleich
                  und Berechnung besonders effizient sind.
                </p>
                <p>
                  Im Gegensatz zu menschenlesbaren Datumsformaten, die je nach
                  Sprache, Region und Zeitzone variieren, sind Unix-Timestamps
                  eindeutig und universell. Ob du in New York, Tokio oder Sydney
                  bist: Der Unix-Timestamp 1701388800 repräsentiert für alle
                  denselben Zeitpunkt. Diese Universalität macht Unix-Timestamps
                  für verteilte Systeme, internationale Anwendungen und
                  Software, die Zeit konsistent über verschiedene Standorte
                  hinweg verarbeiten muss, unverzichtbar.
                </p>
                <p>
                  Eine wichtige Eigenschaft von Unix-Timestamps ist, dass sie
                  keine Schaltsekunden berücksichtigen – kleine Anpassungen, die
                  das atomare Zeitmaß mit der Erdrotation synchron halten.
                  Dadurch geht Unix-Zeit von genau 86.400 Sekunden pro Tag aus,
                  was Berechnungen vereinfacht, aber im Laufe der Zeit leicht
                  von der tatsächlichen Sonnenzeit abweichen kann.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Verschiedene Timestamp-Formate verstehen
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-cyan-200 bg-cyan-50/50 p-6 dark:border-cyan-800 dark:bg-cyan-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Sekunden (10 Stellen)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Das Standardformat für Unix-Timestamps, das die Anzahl der
                    Sekunden seit dem Unix-Epoch zählt. Dies ist das häufigste
                    Format und wird von den meisten Unix-Systemen, Linux, macOS
                    und vielen Programmiersprachen wie Python, PHP und C
                    verwendet.
                  </p>
                  <div className="rounded-lg border border-cyan-200 bg-white p-3 font-mono text-sm dark:border-cyan-800 dark:bg-gray-900">
                    Beispiel: 1701388800
                  </div>
                </div>
                <div className="rounded-xl border border-cyan-200 bg-cyan-50/50 p-6 dark:border-cyan-800 dark:bg-cyan-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Millisekunden (13 Stellen)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Das native JavaScript-Timestamp-Format, das Millisekunden
                    seit dem Unix-Epoch zählt. Wird in der Webentwicklung, bei
                    Node.js und JavaScript-Anwendungen häufig verwendet.
                  </p>
                  <div className="rounded-lg border border-cyan-200 bg-white p-3 font-mono text-sm dark:border-cyan-800 dark:bg-gray-900">
                    Beispiel: 1701388800000
                  </div>
                </div>
                <div className="rounded-xl border border-cyan-200 bg-cyan-50/50 p-6 dark:border-cyan-800 dark:bg-cyan-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Mikrosekunden (16 Stellen)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Hochpräzise Zeitstempel, die Mikrosekunden seit dem
                    Unix-Epoch zählen. Wird für Performance-Monitoring,
                    Hochfrequenzhandel und wissenschaftliche Anwendungen mit
                    präziser Zeitschätzung verwendet.
                  </p>
                  <div className="rounded-lg border border-cyan-200 bg-white p-3 font-mono text-sm dark:border-cyan-800 dark:bg-gray-900">
                    Beispiel: 1701388800000000
                  </div>
                </div>
                <div className="rounded-xl border border-cyan-200 bg-cyan-50/50 p-6 dark:border-cyan-800 dark:bg-cyan-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Nanosekunden (19 Stellen)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Zeitstempel mit extrem hoher Präzision, die Nanosekunden
                    seit dem Unix-Epoch zählen. Essenziell für verteilte
                    Systeme, Echtzeit-Handel und Anwendungen mit
                    Nanosekunden-Genauigkeit.
                  </p>
                  <div className="rounded-lg border border-cyan-200 bg-white p-3 font-mono text-sm dark:border-cyan-800 dark:bg-gray-900">
                    Beispiel: 1701388800000000000
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
