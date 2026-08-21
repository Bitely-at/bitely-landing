const benefits = [
  {
    icon: "🍽️",
    title: "Bewertungen auf Gerichtsebene",
    description:
      "Nicht nur Gesamtsterne. Sehen Sie genau, welches Gericht begeistert und welches enttäuscht.",
  },
  {
    icon: "📈",
    title: "Echtzeit-Dashboard",
    description:
      "Top-Gerichte, Schwachstellen und Trends — auf einen Blick, jederzeit abrufbar.",
  },
  {
    icon: "✍️",
    title: "Automatische Bewertungen",
    description:
      "Bitely generiert Bewertungstexte für Google & TripAdvisor — Gäste posten mit einem Klick.",
  },
  {
    icon: "🏢",
    title: "Mehrere Standorte",
    description:
      "Verwalten Sie alle Filialen in einem Dashboard mit Branch-Filter.",
  },
  {
    icon: "🔌",
    title: "Null Integration",
    description:
      "Kein POS, kein IT-Team, keine Schnittstelle. Einfach QR-Code aufstellen.",
  },
];

export default function ValueProps() {
  return (
    <section id="value-props" className="bg-zinc-50 px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          Was Sie mit Bitely gewinnen
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="text-2xl">{benefit.icon}</div>
              <h3 className="mt-3 text-base font-semibold text-zinc-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
