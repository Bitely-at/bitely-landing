import CtaButton from "./CtaButton";
import { CONTACT_EMAIL } from "@/lib/mailto";

export default function FinalCta() {
  return (
    <section id="contact" className="bg-emerald-600 px-6 py-16 sm:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Bereit, Ihre Gäste wirklich zu verstehen?
        </h2>
        <p className="mt-4 text-emerald-50">
          Kein Vertrag. Kein IT-Aufwand. Einfach anfangen.
        </p>

        <div className="mt-8">
          <CtaButton variant="inverted">Jetzt Kontakt aufnehmen</CtaButton>
        </div>

        <p className="mt-4 text-sm text-emerald-100">
          Oder schreiben Sie direkt:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
