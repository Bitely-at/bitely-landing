const steps = [
  {
    icon: "📱",
    title: "QR-Code platzieren",
    description: "QR-Code am Tisch aufstellen oder aufkleben. Fertig.",
  },
  {
    icon: "⭐",
    title: "Gäste bewerten",
    description:
      "Gäste scannen und bewerten einzelne Gerichte direkt beim Essen.",
  },
  {
    icon: "📊",
    title: "Insights nutzen",
    description:
      "Dashboard öffnen und sofort sehen, was läuft — und was nicht.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          So funktioniert Bitely
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-3xl">
                {step.icon}
              </div>
              <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-emerald-600">
                Schritt {i + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-zinc-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-zinc-500">
          Kein App-Download für Gäste. Keine POS-Anbindung. Keine
          Einrichtungskomplexität.
        </p>
      </div>
    </section>
  );
}
