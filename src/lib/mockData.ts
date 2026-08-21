export type Dish = {
  name: string;
  ratingA: number; // last 7 days
  ratingB: number; // last 30 days
};

export const dishes: Dish[] = [
  { name: "Wiener Schnitzel", ratingA: 4.7, ratingB: 4.6 },
  { name: "Zwiebelrostbraten", ratingA: 4.5, ratingB: 4.4 },
  { name: "Tafelspitz", ratingA: 4.3, ratingB: 4.2 },
  { name: "Kaiserschmarrn", ratingA: 4.1, ratingB: 4.0 },
  { name: "Gulasch", ratingA: 3.8, ratingB: 3.7 },
  { name: "Leberknödelsuppe", ratingA: 3.4, ratingB: 3.5 },
  { name: "Spargelcremesuppe", ratingA: 3.1, ratingB: 3.2 },
  { name: "Gebackener Camembert", ratingA: 2.8, ratingB: 2.9 },
];

export type WeekData = {
  label: string;
  reviews: number;
  avgScore: number;
};

export const weeklyData: WeekData[] = [
  { label: "W1", reviews: 18, avgScore: 3.9 },
  { label: "W2", reviews: 24, avgScore: 4.0 },
  { label: "W3", reviews: 21, avgScore: 4.1 },
  { label: "W4", reviews: 29, avgScore: 4.2 },
  { label: "W5", reviews: 33, avgScore: 4.1 },
  { label: "W6", reviews: 28, avgScore: 4.3 },
  { label: "W7", reviews: 35, avgScore: 4.4 },
  { label: "W8", reviews: 41, avgScore: 4.5 },
];

export type DemoRange = "7d" | "30d";

export function getSortedDishes(range: DemoRange) {
  const key = range === "7d" ? "ratingA" : "ratingB";
  return [...dishes].sort((a, b) => b[key] - a[key]);
}

export function getWeeklyDataForRange(range: DemoRange) {
  return range === "7d" ? weeklyData.slice(-4) : weeklyData;
}

export function getTopAndWorst(range: DemoRange) {
  const sorted = getSortedDishes(range);
  return {
    top: sorted.slice(0, 3),
    worst: sorted.slice(-3).reverse(),
  };
}

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  stars: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Endlich wissen wir, warum Gäste nicht wiederkommen. Der Tafelspitz hat uns überrascht — wir hätten ihn fast von der Karte genommen.",
    name: "Thomas K.",
    role: "Restaurantleiter",
    location: "München",
    stars: 5,
  },
  {
    quote:
      "Die Einrichtung hat 10 Minuten gedauert. Jetzt sehen wir jeden Montag, was die Woche gebracht hat.",
    name: "Sandra M.",
    role: "Inhaberin",
    location: "Wien",
    stars: 5,
  },
];
