import Breadcrumb from "@/components/breadcrumb";
import { RegexTesterUI } from "./regex-tester-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Regex Tester - Reguläre Ausdrücke online testen und debuggen",
  description:
    "Kostenloser Regex-Tester mit Echtzeit-Highlighting, Capture Groups und häufigen Musterbeispielen. Teste reguläre Ausdrücke mit mehreren Flags und Live-Modus für JavaScript, Python und mehr.",
  keywords: [
    "regex",
    "regular expression",
    "regex tester",
    "regex validator",
    "pattern matcher",
    "regex debugger",
    "regex tool",
    "regex online",
    "regex test",
    "regex flags",
  ],
  openGraph: {
    title: "Regex Tester — Reguläre Ausdrücke mit Live-Highlighting testen",
    description:
      "Kostenloser Regex-Tester mit Echtzeit-Highlighting, Capture Groups und Musterbeispielen. Reguläre Ausdrücke direkt im Browser debuggen.",
    url: `${SITE_CONFIG.domain}/tools/regex-tester`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `Regex Tester — ${SITE_CONFIG.name}`,
    description:
      "Reguläre Ausdrücke mit Echtzeit-Highlighting und Capture Groups testen und debuggen. Kostenloses Online-Tool.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/regex-tester`,
  },
};

export default function RegexTesterPage() {
  return (
    <>
      <ToolSchema
        name="Regex Tester"
        description="Reguläre Ausdrücke mit Echtzeit-Highlighting, Capture Groups und umfassender Flag-Unterstützung testen und debuggen"
        url="/tools/regex-tester"
        keywords={[
          "regex tester",
          "regular expression",
          "pattern matcher",
          "regex debugger",
          "regex validator",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Regex Tester
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Reguläre Ausdrücke mit Echtzeit-Highlighting, Capture Groups und
              umfassender Flag-Unterstützung testen und debuggen. Alles läuft im
              Browser und bleibt privat.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <RegexTesterUI />
          </div>

          <div className="mt-16 space-y-12">
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Was sind reguläre Ausdrücke?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Reguläre Ausdrücke (Regex oder RegExp) sind leistungsstarke
                  Muster, mit denen Text gesucht, abgeglichen und bearbeitet
                  wird. Sie bieten eine kompakte und flexible Möglichkeit,
                  Zeichenfolgen zu identifizieren, etwa bestimmte Zeichen,
                  Wörter oder Muster innerhalb größerer Textmengen. Reguläre
                  Ausdrücke werden in fast jeder modernen Programmiersprache
                  unterstützt, darunter JavaScript, Python, Java, PHP, Ruby und
                  viele andere.
                </p>
                <p>
                  Ein Regex-Muster setzt sich aus einer Folge von Zeichen
                  zusammen, die ein Suchmuster definieren. Diese Muster können
                  literale Zeichen (wie „cat“), Sonderzeichen namens Metazeichen
                  (wie . * + ? [ ] {} ( ) ^ $ | \) und Zeichensätze enthalten.
                  Die eigentliche Stärke regulärer Ausdrücke liegt in der
                  Möglichkeit, komplexe Suchlogik in einer kompakten,
                  deklarativen Syntax auszudrücken.
                </p>
                <p>
                  Ursprünglich in den 1950er Jahren von Mathematiker Stephen
                  Cole Kleene als Notation für reguläre Sprachen entwickelt,
                  wurden reguläre Ausdrücke in den 1970er Jahren in Unix-Tools
                  wie grep, sed und awk weit verbreitet. Heute sind sie ein
                  wichtiges Werkzeug für Entwickler, Datenanalysten und alle,
                  die mit Textverarbeitung und Validierung arbeiten.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Häufige Anwendungsfälle für reguläre Ausdrücke
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Formularvalidierung
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Validierung von Benutzereingaben für E-Mail-Adressen,
                    Telefonnummern, Postleitzahlen, Kreditkartennummern,
                    Passwörter und andere strukturierte Daten.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Textsuche &amp; Ersetzen
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Suche und Ersetzung komplexer Muster in Texteditoren, IDEs
                    und Skripten.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Datenerfassung
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Extraktion bestimmter Informationen aus Logs, Dokumenten
                    oder Webseiten.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    URL-Routing
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Web-Frameworks verwenden Regex-Muster, um Parameter aus
                    URL-Pfaden zu extrahieren.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Log-Analyse
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Parsing von Server-Logs, Anwendungs-Logs und System-Logs zur
                    Extraktion relevanter Informationen.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Syntax-Highlighting
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Code-Editoren und IDEs nutzen Regex, um Schlüsselwörter,
                    Strings und Kommentare zu erkennen.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Verständnis von Regex-Flags
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    <code className="rounded bg-red-100 px-2 py-1 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      g
                    </code>
                    Global-Flag
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Ohne das globale Flag findet Regex nur das erste Vorkommen.
                    Mit aktivem Flag sucht die Regex im gesamten String und
                    liefert alle Treffer. Wichtig für Suchen/Ersetzen und
                    Textanalysen.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    <code className="rounded bg-red-100 px-2 py-1 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      i
                    </code>
                    Case-Insensitive-Flag
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Macht den Mustervergleich groß-/kleinschreibungsunabhängig.
                    Beispiel: /hello/i findet „hello“, „Hello“, „HELLO“ und alle
                    anderen Varianten.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    <code className="rounded bg-red-100 px-2 py-1 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      m
                    </code>
                    Multiline-Flag
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Ändert das Verhalten der Anker ^ und $. Ohne dieses Flag
                    matcht ^ nur am Anfang des gesamten Strings und $ nur am
                    Ende. Mit Multiline matcht ^ am Anfang jeder Zeile und $ am
                    Ende jeder Zeile.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    <code className="rounded bg-red-100 px-2 py-1 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      s
                    </code>
                    DotAll-Flag
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Standardmäßig passt der Punkt (.) auf jedes Zeichen außer
                    Newlines. Das DotAll-Flag ändert dieses Verhalten so, dass .
                    auch Zeilenumbrüche matcht.
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
