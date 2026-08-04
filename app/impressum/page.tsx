import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Angaben gemäß § 5 DDG.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Impressum" />

      <Section className="pt-0">
        <Container className="max-w-2xl">
          <Reveal className="rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-5 text-sm text-muted-foreground">
            Platzhalter — vor Veröffentlichung mit den echten, ladungsfähigen
            Angaben ersetzen. Ein Impressum ist gemäß § 5 DDG nur mit
            vollständigen und zutreffenden Angaben rechtsgültig.
          </Reveal>

          <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-base font-semibold text-foreground">
                Angaben gemäß § 5 DDG
              </h2>
              <p className="mt-3">
                Serdar Bakirtas
                <br />
                [Straße und Hausnummer]
                <br />
                [PLZ und Ort]
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">
                Kontakt
              </h2>
              <p className="mt-3">
                Telefon: [Telefonnummer]
                <br />
                E-Mail: hello@serdarbakirtas.com
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-3">
                Serdar Bakirtas
                <br />
                [Straße und Hausnummer]
                <br />
                [PLZ und Ort]
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">
                EU-Streitschlichtung
              </h2>
              <p className="mt-3">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline underline-offset-4"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">
                Verbraucherstreitbeilegung
              </h2>
              <p className="mt-3">
                Wir sind nicht bereit und nicht verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">
                Haftung für Inhalte
              </h2>
              <p className="mt-3">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">
                Haftung für Links
              </h2>
              <p className="mt-3">
                Diese Website enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">
                Urheberrecht
              </h2>
              <p className="mt-3">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                der schriftlichen Zustimmung des jeweiligen Autors bzw.
                Erstellers.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
