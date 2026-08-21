const columns = [
  {
    title: "Google Reviews",
    description: "Nur Gesamteindruck. Kein Bezug zu einzelnen Gerichten.",
    highlight: false,
  },
  {
    title: "Interne Umfragen",
    description: "Gäste füllen sie nicht aus. Rücklauf nahe null.",
    highlight: false,
  },
  {
    title: "Bitely",
    description:
      "Gerichtsgenaue Bewertungen. Frictionless für den Gast. Automatisch für Sie.",
    highlight: true,
  },
];

export default function Differentiators() {
  return (
    <section id="differentiators" className="bg-white px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          Was Bitely anders macht
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {columns.map((col) => (
            <div
              key={col.title}
              className={
                col.highlight
                  ? "rounded-2xl border-2 border-emerald-600 bg-emerald-50 p-6 shadow-md"
                  : "rounded-2xl border border-zinc-200 bg-zinc-50 p-6"
              }
            >
              <h3
                className={
                  col.highlight
                    ? "text-lg font-bold text-emerald-700"
                    : "text-lg font-semibold text-zinc-700"
                }
              >
                {col.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{col.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
