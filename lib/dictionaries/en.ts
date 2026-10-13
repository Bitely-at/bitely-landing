/* English copy. This file defines the shape every other language must match:
   lists line up by position with the icons and data in the components. */

export const en = {
  meta: {
    title: 'Bitely | Per-Dish Restaurant Feedback via QR Code',
    description:
      'Guests scan a QR code, rate each dish and earn loyalty points. You see live per-dish ratings and get weekly AI insights. Request a demo.',
  },

  nav: {
    home: 'home',
    openMenu: 'Open Menu',
    closeMenu: 'Close Menu',
    items: ['How it works', 'For guests', 'For restaurants', 'Why Bitely'],
    howItWorks: 'How it works',
    requestDemo: 'Request a demo',
    language: 'Language',
  },

  hero: {
    announcement: 'New: an AI recap of every dish, every Monday',
    headline: 'Feedback on every dish not just the meal.',
    intro:
      'Guests scan a QR code at the table, rate each dish they ordered, and earn loyalty points. Meanwhile you see exactly which plates are winning and which need work.',
    primaryCta: 'Request a demo',
    secondaryCta: 'See how it works',
    carouselLabel: 'Bitely product screenshots',
    screens: [
      {
        alt: 'The Bitely dashboard: average rating, ratings over time, and the best and weakest dishes ranked',
        caption: 'Live per-dish ratings, named plate by plate',
      },
    ],
    proofPoints: [
      'No app to download',
      'Per-dish ratings',
      'AI weekly recap',
      'Loyalty points built in',
    ],
    flowLink: 'See the whole flow',
  },

  carousel: {
    previous: 'Previous screenshot',
    next: 'Next screenshot',
    /** {current} and {count} are filled in by the carousel. */
    show: 'Show screenshot {current} of {count}',
  },

  howItWorks: {
    eyebrow: 'How it works',
    headline: 'From the table to a return visit, in four steps.',
    steps: [
      {
        title: 'Scan the QR code',
        body: 'Guests scan the code on their table. No app to download, no account required.',
      },
      {
        title: 'Rate each dish',
        body: 'They rate every item from their order individually, not just the visit as a whole.',
      },
      {
        title: 'Earn points',
        body: 'Optional sign-in banks loyalty points for the feedback they leave.',
      },
      {
        title: 'Redeem a voucher',
        body: 'On a future visit, points turn into a voucher redeemed with a single swipe.',
      },
    ],
  },

  forGuests: {
    eyebrow: 'For guests',
    headline: 'Fast enough to finish before the coffee arrives.',
    intro:
      "Bitely is built around the guest's time. Rating dishes takes seconds, and rewards accrue quietly in the background.",
    imageAlt: 'A guest scanning a QR code at a restaurant table with their phone',
    points: [
      {
        label: 'No account required',
        body: 'Guests can leave dish-by-dish feedback the moment they scan. Zero friction, zero sign-up wall.',
      },
      {
        label: 'Optional sign-in to bank points',
        body: 'A quick email or Google sign-in saves loyalty points, so feedback is rewarded on the next visit.',
      },
      {
        label: 'Instant, irreversible redemption',
        body: 'Vouchers are redeemed on the spot. The guest shows a code and staff enter the payout. Done once, done for good.',
      },
    ],
  },

  forRestaurants: {
    eyebrow: 'For restaurants',
    headline: 'A live dashboard that names the dish, not just the score.',
    dashboardTitle: "This week's dish ratings",
    reviews: '412 reviews',
    dishes: [
      'Seared Scallops',
      'Ribeye, aged 40 days',
      'Burrata & heirloom',
      'Truffle tagliatelle',
      'Lemon tart',
    ],
    highlightTitle: 'AI weekly highlight',
    highlightBody:
      'Scallops are your standout again. The lemon tart dropped to 2.4, and three guests flagged it as too sweet. Worth a look before the weekend.',
    features: [
      {
        title: 'Per-dish rating breakdown',
        body: 'See exactly which items are underperforming, not a single blurred average for the whole visit.',
      },
      {
        title: 'AI weekly highlight summary',
        body: 'Every Monday, a plain-English recap of what guests loved, what slipped, and what to act on.',
      },
      {
        title: 'Receipt-scan order entry',
        body: 'Staff scan a receipt to seed the order, and the table auto-resets once the guest has rated.',
      },
    ],
  },

  multiLocation: {
    eyebrow: 'Multi-location',
    headline: 'Built for a single location, or a whole group.',
    body: 'Every location keeps its own table numbering, branding, and menu availability, then rolls up into one chain-wide view. Owners compare sites at a glance; each venue still runs its own floor.',
  },

  why: {
    eyebrow: 'Why item-level feedback',
    quote:
      "A four-star meal tells you the table left happy. It doesn't tell you the tart was too sweet, the pasta arrived cold, and the scallops are the only reason they'll come back.",
    body: 'Averages hide the problem. Bitely points at the exact dish to fix.',
  },

  demo: {
    headline: 'See Bitely on your own menu.',
    intro:
      "Tell us about your restaurant and we'll walk you through a live dashboard built around your dishes.",
    cta: 'Request a demo',
    note: 'Opens your email app with a ready-made message to office@bitely.at.',
    mailSubject: 'Demo request',
    mailBody:
      'Hello Bitely team,\n\nI would like to see a demo.\n\nName:\nRestaurant:\nNumber of locations:\nPhone (optional):\n',
  },

  footer: {
    links: ['How it works', 'For restaurants', 'Demo'],
    backToTop: 'Bitely, back to top',
    nav: 'Footer',
    poweredBy: 'Powered by Bitely',
    rights: 'Bitely. All rights reserved.',
  },
}

export type Dictionary = typeof en
