import Breadcrumb from "@/components/breadcrumb";
import { GradientGeneratorUI } from "./gradient-generator-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "CSS-Verlaufsgenerator - Lineare, radiale und konische Verläufe",
  description:
    "Erstelle schöne CSS-Verläufe mit unserem kostenlosen Online-Generator. Wähle aus 45+ vordefinierten Verläufen oder erstelle eigene lineare, radiale und konische Verläufe. Exportiere als CSS, SCSS, Tailwind, JSON und SVG. Perfekt für Webdesign und Entwicklung.",
  keywords: [
    "gradient generator",
    "css gradient",
    "linear gradient",
    "radial gradient",
    "conic gradient",
    "gradient maker",
    "color gradient",
    "gradient tool",
    "tailwind gradient",
    "gradient css",
    "gradient background",
    "gradient design",
    "web gradient",
    "gradient export",
    "gradient presets",
  ],
  openGraph: {
    title: "CSS-Verlaufsgenerator — Schöne Verläufe mit 45+ Presets erstellen",
    description:
      "Kostenloser CSS-Verlaufsgenerator mit linearen, radialen und konischen Verläufen. Export als CSS, Tailwind, SCSS, JSON und SVG. 45+ Presets inklusive.",
    url: `${SITE_CONFIG.domain}/tools/gradient-generator`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `CSS-Verlaufsgenerator — ${SITE_CONFIG.name}`,
    description:
      "Erstelle beeindruckende CSS-Verläufe mit 45+ Presets. Export als CSS, Tailwind und mehr. Kostenloses Online-Tool.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/gradient-generator`,
  },
};

export default function GradientGeneratorPage() {
  return (
    <>
      <ToolSchema
        name="CSS-Verlaufsgenerator"
        description="Erstelle schöne CSS-Verläufe mit 45+ Presets. Generiere lineare, radiale und konische Verläufe mit individuellen Farben"
        url="/tools/gradient-generator"
        keywords={[
          "gradient generator",
          "css gradient",
          "linear gradient",
          "radial gradient",
          "gradient maker",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              CSS-Verlaufsgenerator
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Erstelle beeindruckende CSS-Verläufe mit 45+ hochwertigen Presets
              oder gestalte eigene lineare, radiale und konische Verläufe.
              Exportiere als CSS, SCSS, Tailwind, JSON und SVG. Alle
              Berechnungen laufen im Browser ab.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <GradientGeneratorUI />
          </div>

          <div className="mt-16 space-y-12">
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Was ist ein CSS-Verlauf?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  CSS-Verläufe sind sanfte Übergänge zwischen zwei oder mehr
                  Farben, die vollständig mit CSS erstellt werden, ohne
                  Bilddateien zu benötigen. Verläufe verleihen Webdesigns Tiefe,
                  visuelles Interesse und eine moderne Ästhetik, ohne die
                  Ladezeiten zu erhöhen und bei jeder Bildschirmauflösung scharf
                  zu bleiben. Im Gegensatz zu Bildern sind CSS-Verläufe
                  skalierbar, leichtgewichtig und mit Code einfach anzupassen.
                </p>
                <p>
                  Moderne Browser unterstützen drei Arten von Verläufen: lineare
                  (Übergang entlang einer geraden Linie), radiale (Übergang vom
                  Mittelpunkt aus) und konische (Übergang um einen Mittelpunkt
                  herum). Jede Art bietet einzigartige visuelle Effekte für
                  unterschiedliche Design-Anforderungen – von subtilen
                  Hintergrundtexturen bis hin zu auffälligen Hero-Bereichen.
                </p>
                <p>
                  Verläufe sind im modernen Webdesign essenziell und werden von
                  großen Marken wie Instagram, Stripe und Spotify genutzt. Sie
                  schaffen visuelle Hierarchie, lenken die Aufmerksamkeit der
                  Nutzer, verleihen flachen Designs Tiefe und etablieren
                  einprägsame Markenidentitäten. Unser Generator bietet 45+
                  professionell gestaltete Presets sowie einen individuellen
                  Editor für genau das, was du dir vorstellst.
                </p>
                <p>
                  Egal, ob du eine Website baust, eine Landingpage gestaltest,
                  Marketingmaterialien erstellst oder eine Webanwendung
                  entwickelst: Verläufe sind ein eleganter Weg, um das Design zu
                  verbessern, ohne Performance zu opfern. Alle von diesem Tool
                  erzeugten Verläufe sind produktionsreife CSS-Codes, die in
                  allen modernen Browsern funktionieren.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Arten von CSS-Verläufen
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-6 dark:border-rose-800 dark:bg-rose-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Lineare Verläufe
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Lineare Verläufe erzeugen glatte Farbübergänge entlang einer
                    geraden Linie. Die Richtung lässt sich über Winkel (0-360°)
                    oder Richtungsbegriffe steuern. Ideal für Hintergründe,
                    Header, Buttons und das Erzeugen von Tiefe. Der
                    vielseitigste und am häufigsten genutzte Verlaufstyp im
                    Webdesign.
                  </p>
                </div>
                <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-6 dark:border-rose-800 dark:bg-rose-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Radiale Verläufe
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Radiale Verläufe strahlen von einem Mittelpunkt aus und
                    verbreiten sich in kreisförmigen oder elliptischen Mustern.
                    Ideal für Spotlights, Leuchteffekte, Vignetten und
                    fokussierte Hervorhebungen. Perfekt für
                    Call-to-Action-Buttons, Badges und das Sichtbarmachen von
                    bestimmten Elementen.
                  </p>
                </div>
                <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-6 dark:border-rose-800 dark:bg-rose-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Konische Verläufe
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Konische Verläufe drehen Farben um einen Mittelpunkt und
                    bilden einen kreisförmigen Effekt mit pie-ähnlicher
                    Ausrichtung. Perfekt für Fortschrittsindikatoren,
                    Kreisdiagramme, Farbkreise und einzigartige geometrische
                    Muster.
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
