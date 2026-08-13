import Breadcrumb from "@/components/breadcrumb";
import { ColorPalettesUI } from "./color-palettes-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Farbpaletten-Generator - Harmonische Farbschemata erstellen",
  description:
    "Erzeuge schöne Farbpallette mit Farbtheorie-Harmonien: monochromatisch, analog, komplementär, triadisch und mehr. Export als CSS, SCSS, Tailwind, JSON und SVG. Kostenloses Online-Tool für Designer und Entwickler.",
  keywords: [
    "color palette generator",
    "color scheme",
    "color harmony",
    "monochromatic palette",
    "complementary colors",
    "analogous colors",
    "triadic colors",
    "color theory",
    "design colors",
    "palette export",
    "css colors",
    "tailwind colors",
    "pastel palette",
    "vibrant colors",
    "color combinations",
  ],
  openGraph: {
    title: "Farbpaletten-Generator — Harmonische Farbschemata erstellen",
    description:
      "Erzeuge schöne Farbpallette mit Farbtheorie. Monochromatische, komplementäre, triadische Schemata. Export als CSS, Tailwind, SCSS, JSON, SVG.",
    url: `${SITE_CONFIG.domain}/tools/color-palettes`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `Farbpaletten-Generator — ${SITE_CONFIG.name}`,
    description:
      "Erstelle harmonische Farbschemata mit Farbtheorie. Exportiere in verschiedene Formate. Kostenloses Online-Tool.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/color-palettes`,
  },
};

export default function ColorPalettesPage() {
  return (
    <>
      <ToolSchema
        name="Farbpaletten-Generator"
        description="Erzeuge schöne Farbpallette mit Farbtheorie-Harmonien wie monochromatischen, komplementären und triadischen Schemata"
        url="/tools/color-palettes"
        keywords={[
          "color palette generator",
          "color scheme",
          "color harmony",
          "complementary colors",
          "color theory",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Farbpaletten-Generator
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Erzeuge schöne, harmonische Farbpallette mit Hilfe der
              Farbtheorie. Stelle monochromatische, komplementäre, analoge,
              triadische und individuelle Farbschemata zusammen. Sperre Farben,
              exportiere als CSS/SCSS/Tailwind/JSON/SVG und gestalte
              beeindruckende Designs. Alle Berechnungen laufen im Browser ab.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <ColorPalettesUI />
          </div>

          <div className="mt-16 space-y-12">
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Was ist ein Farbpaletten-Generator?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Ein Farbpaletten-Generator ist ein essentielles Werkzeug für
                  Designer, Entwickler und Kreative, das automatisch harmonische
                  Farbschemata auf Basis von Farbtheorie-Prinzipien erzeugt.
                  Anstatt Farben manuell auszuwählen, die gut zusammenpassen,
                  verwendet ein Paletten-Generator mathematische Beziehungen
                  zwischen Farbtönen, um ästhetisch ansprechende
                  Farbkombinationen zu erzeugen, die in der Gestaltung bewährt
                  sind.
                </p>
                <p>
                  Die Farbtheorie, die über Jahrhunderte von Künstlern und
                  Wissenschaftlern entwickelt wurde, liefert Regeln für die
                  Kombination von Farben, die für das menschliche Auge visuell
                  ansprechend sind. Diese Regeln basieren auf dem Farbkreis,
                  einem Kreisschema, das Farben nach ihren chromatischen
                  Beziehungen ordnet. Unser Farbpaletten-Generator setzt diese
                  bewährten Prinzipien um, damit du in Sekundenschnelle
                  professionelle Farbschemata erstellen kannst.
                </p>
                <p>
                  Egal, ob du eine Website gestaltest, eine Markenidentität
                  entwickelst, eine Mobile-App baust oder an einem visuellen
                  Projekt arbeitest: Die richtige Farbwahl ist entscheidend.
                  Farben rufen Emotionen hervor, vermitteln Botschaften,
                  schaffen Hierarchien und bestimmen die gesamte Stimmung deiner
                  Gestaltung. Eine gut gewählte Palette kann den Unterschied
                  zwischen einem laienhaften und einem professionell wirkenden
                  Design ausmachen.
                </p>
                <p>
                  Unser Tool geht über die einfache zufällige Farberzeugung
                  hinaus: Es bietet mehrere Palettentypen auf Basis etablierter
                  Farbharmonien, erlaubt das Fixieren von Lieblingsfarben und
                  exportiert deine Paletten in Formate, die direkt in CSS, SCSS,
                  Tailwind CSS, JSON, SVG und JavaScript verwendet werden
                  können. Alles geschieht vollständig im Browser und hält deine
                  kreativen Arbeiten privat und sicher.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Farb-Harmonietypen verstehen
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Monochromatische Paletten
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Monochromatische Farbschemata nutzen Variationen in
                    Helligkeit und Sättigung eines einzelnen Farbtons. Diese
                    Paletten erzeugen ein zusammenhängendes, elegantes
                    Erscheinungsbild, das angenehm für die Augen ist. Ideal für
                    minimale Designs, professionelle Websites und das Schaffen
                    von Tiefe ohne Komplexität. Monochromatische Paletten sind
                    unkompliziert und funktionieren gut für Hintergründe,
                    UI-Elemente und die Schaffung visueller Hierarchie.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Analoge Paletten
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Analoge Farbschemata verwenden Farben, die auf dem Farbkreis
                    benachbart sind (typischerweise innerhalb von 30-60 Grad).
                    Diese Paletten erzeugen ruhige, angenehme Designs, wie sie
                    oft in der Natur vorkommen – etwa die Blau- und Grüntöne des
                    Ozeans oder die Rot-, Orange- und Gelbtöne eines
                    Sonnenuntergangs. Ideal für harmonische Entwürfe ohne starke
                    Kontraste.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Komplementäre Paletten
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Komplementäre Farben liegen auf dem Farbkreis direkt
                    gegenüber (180 Grad getrennt) und erzeugen maximalen
                    Kontrast und visuelle Wirkung. Beispiele sind Rot und Cyan,
                    Blau und Orange oder Gelb und Lila. Diese Paletten sind
                    kräftig, lebhaft und aufmerksamkeitsstark. Sie eignen sich
                    für Call-to-Action-Buttons, wichtige Hervorhebungen oder
                    energiegeladene Designs. Dennoch solltest du sie mit Bedacht
                    einsetzen.
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-800 dark:bg-indigo-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Triadische Paletten
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Triadische Farbschemata verwenden drei Farben, die
                    gleichmäßig um den Farbkreis verteilt sind (120 Grad
                    voneinander entfernt). Die Primärfarben (Rot, Gelb, Blau)
                    und Sekundärfarben (Orange, Grün, Lila) sind klassische
                    Triaden. Diese Paletten bieten dynamischen Kontrast bei
                    gleichzeitiger Balance und Harmonie.
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
