import type { Metadata } from "next";
import CSSMinifierUI from "./css-minifier-ui";
import Breadcrumb from "@/components/breadcrumb";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "CSS Minifier/Beautifier - CSS online minimieren & formatieren",
  description:
    "Kostenloser CSS-Minifier und -Beautifier. CSS minimieren, um die Dateigröße zu reduzieren oder leserlich zu formatieren. Sofortige Formatierung mit Optionen zum Behalten von Kommentaren. Keine Daten werden an Server gesendet – alles läuft im Browser.",
  keywords: [
    "css minifier",
    "css beautifier",
    "css formatter",
    "minify css",
    "beautify css",
    "compress css",
    "css optimizer",
    "format css",
    "prettify css",
    "css compressor",
    "online css tool",
  ],
  openGraph: {
    title: "CSS Minifier/Beautifier — CSS online minimieren & formatieren",
    description:
      "CSS minimieren, um die Dateigröße zu reduzieren oder leserlich zu formatieren. Sofortige Formatierung, Kommentarerhaltung und keine Datentransmission.",
    url: `${SITE_CONFIG.domain}/tools/css-minifier`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `CSS Minifier/Beautifier — ${SITE_CONFIG.name}`,
    description:
      "CSS minimieren oder lesbar formatieren. Alles läuft im Browser.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/css-minifier`,
  },
};

export default function CSSMinifierPage() {
  return (
    <>
      <ToolSchema
        name="CSS Minifier/Beautifier"
        description="CSS minimieren, um die Dateigröße zu reduzieren oder für Lesbarkeit zu formatieren"
        url="/tools/css-minifier"
        keywords={[
          "css minifier",
          "css beautifier",
          "minify css",
          "css formatter",
          "css optimizer",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              CSS Minifier/Beautifier
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              CSS minimieren, um die Dateigröße zu reduzieren oder für bessere
              Lesbarkeit zu formatieren – mit sofortiger Formatierung,
              Kommentarerhaltung und ohne Datentransmission. Alles läuft im
              Browser für vollständige Privatsphäre.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <CSSMinifierUI />
          </div>

          <div className="mt-16 space-y-12">
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Was ist CSS-Minifizierung?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  CSS-Minifizierung ist der Prozess, überflüssige Zeichen aus
                  CSS-Code zu entfernen, ohne die Funktionalität zu verändern.
                  Dazu zählen Leerzeichen, Zeilenumbrüche, Kommentare und die
                  Verkürzung von Farbwerten und anderen Werten, soweit möglich.
                  Das Ergebnis ist eine deutlich kleinere Datei, die schneller
                  lädt und identisch funktioniert.
                </p>
                <p>
                  Moderne Websites enthalten oft Hunderte von Kilobytes CSS-Code
                  über mehrere Stylesheets. Jedes Byte zählt bei der
                  Ladegeschwindigkeit, was sich direkt auf Nutzererlebnis, SEO
                  und Conversion auswirkt. Minifizierung reduziert die
                  CSS-Dateigröße typischerweise um 20-40%.
                </p>
                <p>
                  CSS-Beautification ist hingegen der umgekehrte Prozess:
                  Einrückung, Zeilenumbrüche und Leerzeichen werden ergänzt,
                  damit minifizierter oder schlecht formatierter CSS-Code lesbar
                  und wartbar wird.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Häufige Anwendungsfälle für CSS-Minifizierung
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6 dark:border-teal-800 dark:bg-teal-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Optimierung von Produktiv-Websites
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    CSS vor dem Deployment minimieren, um Ladezeiten und
                    Bandbreitenverbrauch zu reduzieren.
                  </p>
                </div>
                <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6 dark:border-teal-800 dark:bg-teal-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Build-Pipeline-Integration
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Minifizierung in Build-Prozesse integrieren, während
                    Entwicklungsvarianten lesbar bleiben.
                  </p>
                </div>
                <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6 dark:border-teal-800 dark:bg-teal-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Debugging von Drittanbieter-CSS
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Minifizierten CSS-Code von Bibliotheken, CDNs oder
                    Legacy-Code formatiert anzeigen, um Layoutprobleme zu
                    debuggen.
                  </p>
                </div>
                <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6 dark:border-teal-800 dark:bg-teal-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Optimierung von E-Mail-Templates
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Inline-CSS in E-Mails minimieren, um Dateigröße und
                    Größenlimits zu reduzieren.
                  </p>
                </div>
                <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6 dark:border-teal-800 dark:bg-teal-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Performance mobiler Apps
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Kleinere CSS-Dateien sorgen für schnellere Ladezeiten und
                    bessere Leistung auf mobilen Netzwerken.
                  </p>
                </div>
                <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6 dark:border-teal-800 dark:bg-teal-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Code-Review und Lernen
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    CSS vor Reviews formatieren, damit Teammitglieder Probleme
                    leichter erkennen und Best Practices lernen.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Funktionen für Minifizierung &amp; Formatierung
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    CSS minimieren
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Entfernt überflüssige Leerzeichen, Zeilenumbrüche und
                    Einrückungen und behält wichtige Kommentare optional bei.
                    Farben werden verkürzt und Nullwerte optimiert.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    CSS formatieren
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Formatiert CSS mit sauberer Einrückung, Zeilenumbrüchen und
                    Abständen für maximale Lesbarkeit. Besonders nützlich bei
                    minifiziertem oder schlecht formatiertem Code.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
