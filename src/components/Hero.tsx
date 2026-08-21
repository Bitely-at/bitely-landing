import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white px-6 pt-20 pb-16 sm:pt-28 sm:pb-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl sm:leading-tight">
          Wissen Sie wirklich, welche Gerichte Ihre Gäste begeistern?
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600 sm:text-xl">
          Bitely liefert Bewertungen auf Gerichtsebene — direkt am Tisch, ohne
          Integration, ohne Aufwand.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3">
          <CtaButton>Jetzt Kontakt aufnehmen</CtaButton>
          <p className="text-sm text-zinc-500">
            Einrichtung in einem Schritt. Kein IT-Team nötig.
          </p>
        </div>

        <div className="mt-14 w-full max-w-3xl">
          <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-emerald-100 bg-white shadow-xl shadow-emerald-900/5">
            <span className="text-sm font-medium text-zinc-400">
              Dashboard-Vorschau
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
