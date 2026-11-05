/* English copy. This file defines the shape every other language must match:
   lists line up by position with the icons and data in the components.

   Style: plain statements and concrete facts about the product. No
   "not X, but Y" contrasts, no slogans built from repeated words, and lists
   only as long as the facts they carry. Every claim must hold up against the
   app and the legal pages in lib/legal.ts. */

export const en = {
  meta: {
    title: 'Bitely | Per-Dish Restaurant Feedback via QR Code',
    description:
      'Guests rate every dish separately via a QR code, with no app and no account. Your dashboard shows how each dish is doing.',
  },

  nav: {
    home: 'Home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    items: ['How it works', 'For guests', 'For restaurants', 'Why Bitely'],
    howItWorks: 'How it works',
    requestDemo: 'Request a demo',
    language: 'Language',
  },

  hero: {
    announcement: 'New: an AI weekly recap every Monday',
    headline: 'Your guests rate every dish separately.',
    intro:
      'The QR code on the table opens a rating page with one to five stars per dish. You see the results in your dashboard as soon as a table has rated.',
    primaryCta: 'Request a demo',
    secondaryCta: 'See how it works',
    carouselLabel: 'Bitely product screenshots',
    screens: [
      {
        alt: 'The Bitely dashboard: average rating, ratings over time, and the best and weakest dishes ranked',
        caption: 'The Bitely dashboard with sample data',
      },
    ],
    proofPoints: [
      'No app needed',
      'No POS integration',
      'For multiple locations',
      'Loyalty points for guests',
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
        body: 'Every table has a QR code. It opens the rating page right in the browser.',
      },
      {
        title: 'Rate the dishes',
        body: 'Guests see the dishes from their order and give each one its own stars.',
      },
      {
        title: 'Earn points',
        body: 'Guests with an account earn loyalty points for every rating.',
      },
      {
        title: 'Redeem a voucher',
        body: 'On their next visit, guests trade their points for a voucher from your restaurant.',
      },
    ],
  },

  forGuests: {
    eyebrow: 'For guests',
    headline: 'No app and no sign-up.',
    intro: 'Guests tap the stars for each dish. If they want, they add a comment.',
    imageAlt: 'A guest scanning a QR code at a restaurant table with their phone',
    points: [
      {
        label: 'An account only for points',
        body: 'Guests who want loyalty points sign in with email or Google. The account works at every restaurant on Bitely, and points count only where they were earned.',
      },
      {
        label: 'Points regardless of stars',
        body: 'The number of points depends on the price of the dishes rated. A poor rating earns as many points as a good one.',
      },
      {
        label: 'Anonymous to the restaurant',
        body: "You see stars and comments, but not the guests' names or email addresses.",
      },
      {
        label: 'Redeemed on site',
        body: 'The guest shows a code and your staff enter the amount. After that the voucher is used up.',
      },
    ],
  },

  forRestaurants: {
    eyebrow: 'For restaurants',
    headline: 'In the dashboard, every dish has its own rating.',
    dashboardTitle: "This week's dish ratings",
    sample: 'Sample data',
    reviews: '412 reviews',
    dishes: [
      'Seared Scallops',
      'Ribeye, aged 40 days',
      'Burrata & heirloom',
      'Truffle tagliatelle',
      'Lemon tart',
    ],
    highlightTitle: 'AI weekly recap',
    highlightBody:
      'The scallops are in the lead again, at 4.8 stars. The lemon tart dropped to 2.4 stars, and three guests found it too sweet.',
    features: [
      {
        title: 'Ratings per dish',
        body: 'The dashboard ranks your dishes by average rating and shows how often each one was rated. You choose the time period.',
      },
      {
        title: 'AI weekly recap',
        body: "Every Monday, an AI sums up the past week's ratings and comments in a few sentences.",
      },
      {
        title: 'Orders from the receipt',
        body: 'Your staff take a photo of the receipt and Bitely recognises the dishes ordered. You do not need to connect your POS system. Once the guest has rated, the table resets automatically.',
      },
    ],
  },

  multiLocation: {
    eyebrow: 'Multi-location',
    headline: 'For a single restaurant or a whole group.',
    body: 'Each location has its own table numbers, menu and branding. In the dashboard you look at all branches together or pick one.',
  },

  why: {
    eyebrow: 'Why item-level feedback',
    quote:
      "A table gives the evening four stars. The score doesn't say that the tart was too sweet and the pasta lukewarm.",
    body: 'With a rating for each dish, you can see which plate is pulling the score down.',
  },

  demo: {
    headline: 'A demo with your own menu.',
    intro:
      "Tell us which restaurant you run. We'll set up a dashboard with your dishes and walk you through it.",
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
    rights: 'Bitely. All rights reserved.',
  },
}

export type Dictionary = typeof en
