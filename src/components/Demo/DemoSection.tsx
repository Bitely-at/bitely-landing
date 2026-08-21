"use client";

import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  DemoRange,
  getSortedDishes,
  getTopAndWorst,
  getWeeklyDataForRange,
} from "@/lib/mockData";

function barColor(index: number, total: number) {
  if (index < 3) return "#059669"; // green — top 3
  if (index >= total - 2) return "#dc2626"; // red — bottom 2
  return "#a1a1aa"; // neutral
}

function DishRatingChart({ range }: { range: DemoRange }) {
  const data = getSortedDishes(range);
  const rating = range === "7d" ? "ratingA" : "ratingB";

  return (
    <div className="h-[360px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 8, right: 24, bottom: 8, left: 8 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" domain={[0, 5]} tick={{ fontSize: 12 }} />
          <YAxis
            type="category"
            dataKey="name"
            width={140}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            formatter={(value) => Number(value).toFixed(1)}
          />
          <Bar dataKey={rating} radius={[0, 4, 4, 0]} barSize={16}>
            {data.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={barColor(index, data.length)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function WeeklyComboChart({ range }: { range: DemoRange }) {
  const data = getWeeklyDataForRange(range);

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" tick={{ fontSize: 12 }} />
          <YAxis
            yAxisId="left"
            tick={{ fontSize: 12 }}
            width={32}
            label={{
              value: "Bewertungen",
              angle: -90,
              position: "insideLeft",
              fontSize: 11,
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 5]}
            tick={{ fontSize: 12 }}
            width={32}
            label={{
              value: "Ø Score",
              angle: 90,
              position: "insideRight",
              fontSize: 11,
            }}
          />
          <Tooltip />
          <Bar
            yAxisId="left"
            dataKey="reviews"
            fill="#a7f3d0"
            radius={[4, 4, 0, 0]}
            barSize={24}
            name="Bewertungen"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="avgScore"
            stroke="#059669"
            strokeWidth={2}
            dot={{ r: 3 }}
            name="Ø Score"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

function TopWorstLists({ range }: { range: DemoRange }) {
  const { top, worst } = getTopAndWorst(range);
  const rating = range === "7d" ? "ratingA" : "ratingB";

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <h4 className="text-sm font-semibold text-emerald-700">Top 3</h4>
        <ul className="mt-3 space-y-2">
          {top.map((dish) => (
            <li
              key={dish.name}
              className="flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2 text-zinc-800">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {dish.name}
              </span>
              <span className="font-medium text-zinc-600">
                {dish[rating].toFixed(1)} ★
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-red-200 bg-red-50 p-4">
        <h4 className="text-sm font-semibold text-red-700">Worst 3</h4>
        <ul className="mt-3 space-y-2">
          {worst.map((dish) => (
            <li
              key={dish.name}
              className="flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2 text-zinc-800">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                {dish.name}
              </span>
              <span className="font-medium text-zinc-600">
                {dish[rating].toFixed(1)} ★
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function DemoSection() {
  const [range, setRange] = useState<DemoRange>("7d");

  const toggle = useMemo(
    () => [
      { value: "7d" as const, label: "Letzte 7 Tage" },
      { value: "30d" as const, label: "Letzte 30 Tage" },
    ],
    []
  );

  return (
    <section id="demo" className="bg-zinc-50 px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Demo-Ansicht · Beispieldaten
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            So sieht Ihr Dashboard aus
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Alle Daten sind Beispieldaten zur Veranschaulichung.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {toggle.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setRange(option.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${
                range === option.value
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-zinc-600 hover:bg-zinc-100"
              } border border-zinc-200`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
          <h3 className="text-sm font-semibold text-zinc-700">
            Bewertungen je Gericht
          </h3>
          <DishRatingChart range={range} />
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
          <h3 className="text-sm font-semibold text-zinc-700">
            Wöchentliches Bewertungsvolumen &amp; Ø Score
          </h3>
          <WeeklyComboChart range={range} />
        </div>

        <div className="mt-6">
          <TopWorstLists range={range} />
        </div>
      </div>
    </section>
  );
}
