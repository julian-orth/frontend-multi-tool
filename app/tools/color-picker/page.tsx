import Breadcrumb from "@/components/breadcrumb";
import { ColorPickerUI } from "./color-picker-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Farbwähler & Konverter - HEX, RGB, HSL Farbwähler",
  description:
    "Kostenloser Online-Farbwähler mit sofortiger Umwandlung zwischen HEX, RGB, HSL, RGBA und HSLA. Erzeuge Farbpalletten, prüfe WCAG-Kontrastverhältnisse und erkunde Farbtheorie.",
  keywords: [
    "color picker",
    "hex to rgb",
    "rgb to hsl",
    "color converter",
    "color palette generator",
    "complementary colors",
    "wcag contrast",
    "accessibility",
    "color theory",
  ],
  openGraph: {
    title: "Farbwähler & Konverter — Konvertierung HEX, RGB, HSL",
    description:
      "Kostenloser Farbwähler mit sofortiger Formatumwandlung, Farbpallette und WCAG-Kontrastprüfung. Ideal für Designer und Entwickler.",
    url: `${SITE_CONFIG.domain}/tools/color-picker`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `Farbwähler & Konverter — ${SITE_CONFIG.name}`,
    description:
      "Farben auswählen und zwischen HEX-, RGB- und HSL-Formaten konvertieren. Paletten erzeugen und Barrierefreiheit prüfen. Kostenloses Tool.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/color-picker`,
  },
};

export default function ColorPickerPage() {
  return (
    <>
      <ToolSchema
        name="Farbwähler & Konverter"
        description="Farben auswählen und zwischen HEX-, RGB- und HSL-Formaten konvertieren mit WCAG-Kontrastprüfung und Farbpalletten"
        url="/tools/color-picker"
        keywords={[
          "color picker",
          "hex to rgb",
          "color converter",
          "wcag contrast",
          "color palette",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Farbwähler & Konverter
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Farben auswählen, zwischen Formaten (HEX, RGB, HSL) konvertieren,
              Paletten erzeugen und Kontrastverhältnisse für Barrierefreiheit
              prüfen. Alle Berechnungen laufen komplett im Browser ab.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <ColorPickerUI />
          </div>

          <div className="mt-16 space-y-12">
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Was ist ein Farbwähler?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Ein Farbwähler ist ein essentielles Werkzeug für Designer,
                  Entwickler und digitale Gestalter, mit dem Farben ausgewählt,
                  identifiziert und zwischen verschiedenen Formaten konvertiert
                  werden können. Ob du eine Website gestaltest, Grafiken
                  erstellst oder eine Anwendung entwickelst: Die richtige
                  Farbwahl ist für Ästhetik, Branding und Benutzererfahrung
                  entscheidend.
                </p>
                <p>
                  Moderne Farbwähler gehen über die einfache Auswahl hinaus: Sie
                  bieten sofortige Umwandlungen zwischen Farbformaten, erzeugen
                  harmonische Farbpallette auf Basis der Farbtheorie und prüfen
                  sogar die Barrierefreiheit durch Berechnung von
                  Kontrastverhältnissen nach WCAG-Standards (Web Content
                  Accessibility Guidelines).
                </p>
                <p>
                  Unser Farbwähler unterstützt alle wichtigen Web-Farbformate:
                  HEX (hexadezimal), RGB (Rot-Grün-Blau), HSL
                  (Farbton-Sättigung-Helligkeit) und ihre Alpha-Varianten RGBA
                  und HSLA. Dadurch eignet er sich ideal für CSS-Styling,
                  Designsysteme und Projekte mit präzisen Farbdefinitionen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Farbformate verstehen
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-pink-200 bg-pink-50/50 p-6 dark:border-pink-800 dark:bg-pink-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    HEX (Hexadezimal)
                  </h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    Format: <code className="font-mono">#RRGGBB</code>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Das häufigste Format im Webdesign: HEX-Farben verwenden
                    sechs hexadezimale Ziffern für Rot, Grün und Blau (00-FF für
                    jeden Kanal). Beispiel: #3B82F6 steht für ein lebhaftes
                    Blau. Es ist kompakt, leicht zu kopieren und in CSS und HTML
                    universell unterstützt.
                  </p>
                </div>
                <div className="rounded-xl border border-pink-200 bg-pink-50/50 p-6 dark:border-pink-800 dark:bg-pink-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    RGB (Rot, Grün, Blau)
                  </h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    Format: <code className="font-mono">rgb(R, G, B)</code>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    RGB verwendet drei Dezimalwerte (0-255) für die Rot-, Grün-
                    und Blaukanäle. Beispiel: rgb(59, 130, 246). Dieses Format
                    ist intuitiver, um Farbzusammensetzungen zu verstehen, und
                    ist das native Format für digitale Displays. RGBA ergänzt
                    einen Alphakanal für Transparenz (0-1).
                  </p>
                </div>
                <div className="rounded-xl border border-pink-200 bg-pink-50/50 p-6 dark:border-pink-800 dark:bg-pink-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    HSL (Farbton, Sättigung, Helligkeit)
                  </h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    Format: <code className="font-mono">hsl(H, S%, L%)</code>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    HSL beschreibt Farben über Farbton (0-360°), Sättigung
                    (0-100%) und Helligkeit (0-100%). Beispiel: hsl(217, 91%,
                    60%). Dieses Format ist hervorragend für die Erstellung von
                    Farbvarianten: Die Anpassung der Sättigung macht Farben
                    lebendiger oder weniger intensiv, während die Veränderung
                    der Helligkeit Töne und Schattierungen erzeugt.
                  </p>
                </div>
                <div className="rounded-xl border border-pink-200 bg-pink-50/50 p-6 dark:border-pink-800 dark:bg-pink-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Alphakanal (Transparenz)
                  </h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    Formate: <code className="font-mono">rgba(), hsla()</code>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Der Alphakanal fügt RGB- und HSL-Farben Transparenz hinzu,
                    mit Werten von 0 (vollständig transparent) bis 1
                    (vollständig undurchsichtig). Beispiel: rgba(59, 130, 246,
                    0.5) erzeugt ein halbtransparentes Blau. Das ist für
                    Overlays, Schatten und modernes UI-Design essenziell.
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
