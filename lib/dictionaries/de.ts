import type { Dictionary } from './en'

/* German copy. Addresses restaurant owners with "Sie", the norm for B2B in
   Austria and Germany. Must match the shape of en.ts.

   Style: plain statements and concrete facts about the product. No
   "nicht X, sondern Y" contrasts, no slogans built from repeated words, and
   lists only as long as the facts they carry. Every claim must hold up
   against the app and the legal pages in lib/legal.ts. */

export const de: Dictionary = {
  meta: {
    title: 'Bitely | Restaurant-Feedback pro Gericht per QR-Code',
    description:
      'Gäste bewerten per QR-Code jedes Gericht einzeln, ohne App und ohne Konto. Im Dashboard sehen Sie, wie jedes Gericht abschneidet.',
  },

  nav: {
    home: 'Startseite',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    items: ['So funktioniert’s', 'Für Gäste', 'Für Restaurants', 'Warum Bitely'],
    howItWorks: 'So funktioniert’s',
    requestDemo: 'Demo anfragen',
    language: 'Sprache',
  },

  hero: {
    announcement: 'Neu: jeden Montag ein KI-Wochenrückblick',
    headline: 'Ihre Gäste bewerten jedes Gericht einzeln.',
    intro:
      'Der QR-Code am Tisch öffnet eine Bewertungsseite mit ein bis fünf Sternen pro Gericht. Die Ergebnisse sehen Sie im Dashboard, sobald ein Tisch bewertet hat.',
    primaryCta: 'Demo anfragen',
    secondaryCta: 'So funktioniert’s',
    carouselLabel: 'Screenshots der Bitely-App',
    screens: [
      {
        alt: 'Das Bitely-Dashboard: Durchschnittsbewertung, Bewertungen im Zeitverlauf und die besten und schwächsten Gerichte im Ranking',
        caption: 'Dashboard der Bitely-App mit Beispieldaten',
      },
    ],
    proofPoints: [
      'Keine App nötig',
      'Ohne Kassenanbindung',
      'Für mehrere Filialen',
      'Treuepunkte für Gäste',
    ],
    flowLink: 'Den ganzen Ablauf ansehen',
  },

  carousel: {
    previous: 'Vorheriger Screenshot',
    next: 'Nächster Screenshot',
    show: 'Screenshot {current} von {count} anzeigen',
  },

  howItWorks: {
    eyebrow: 'So funktioniert’s',
    headline: 'Vom Tisch zum nächsten Besuch in vier Schritten.',
    steps: [
      {
        title: 'QR-Code scannen',
        body: 'Auf jedem Tisch steht ein QR-Code. Er öffnet die Bewertung direkt im Browser.',
      },
      {
        title: 'Gerichte bewerten',
        body: 'Gäste sehen die Gerichte ihrer Bestellung und vergeben für jedes einzeln Sterne.',
      },
      {
        title: 'Punkte sammeln',
        body: 'Wer ein Konto hat, bekommt für jede Bewertung Treuepunkte.',
      },
      {
        title: 'Gutschein einlösen',
        body: 'Beim nächsten Besuch tauschen Gäste ihre Punkte gegen einen Gutschein Ihres Lokals.',
      },
    ],
  },

  forGuests: {
    eyebrow: 'Für Gäste',
    headline: 'Ohne App und ohne Anmeldung.',
    intro:
      'Gäste tippen pro Gericht die Sterne an. Wer möchte, schreibt noch eine Anmerkung dazu.',
    imageAlt: 'Ein Gast scannt am Restauranttisch mit dem Handy einen QR-Code',
    points: [
      {
        label: 'Konto nur für Punkte',
        body: 'Wer Treuepunkte sammeln will, meldet sich mit E-Mail oder Google an. Das Konto gilt in allen Lokalen mit Bitely, die Punkte nur im Lokal, in dem sie gesammelt wurden.',
      },
      {
        label: 'Punkte unabhängig von den Sternen',
        body: 'Wie viele Punkte es gibt, hängt vom Preis der bewerteten Gerichte ab. Eine schlechte Bewertung bringt genauso viele Punkte wie eine gute.',
      },
      {
        label: 'Anonym für das Restaurant',
        body: 'Sie sehen Sterne und Anmerkungen, aber weder Namen noch E-Mail-Adressen der Gäste.',
      },
      {
        label: 'Einlösen vor Ort',
        body: 'Der Gast zeigt einen Code, Ihr Personal trägt den Betrag ein. Danach ist der Gutschein verbraucht.',
      },
    ],
  },

  forRestaurants: {
    eyebrow: 'Für Restaurants',
    headline: 'Im Dashboard hat jedes Gericht seine eigene Bewertung.',
    dashboardTitle: 'Bewertungen dieser Woche',
    sample: 'Beispieldaten',
    reviews: '412 Bewertungen',
    dishes: [
      'Gebratene Jakobsmuscheln',
      'Ribeye, 40 Tage gereift',
      'Burrata & Paradeiser',
      'Trüffel-Tagliatelle',
      'Zitronentarte',
    ],
    highlightTitle: 'KI-Wochenrückblick',
    highlightBody:
      'Die Jakobsmuscheln liegen wie in der Vorwoche vorne, mit 4,8 Sternen. Die Zitronentarte ist auf 2,4 Sterne gefallen, drei Gäste fanden sie zu süß.',
    features: [
      {
        title: 'Bewertung pro Gericht',
        body: 'Das Dashboard reiht Ihre Gerichte nach der Durchschnittsbewertung und zeigt, wie oft jedes bewertet wurde. Den Zeitraum wählen Sie selbst.',
      },
      {
        title: 'KI-Wochenrückblick',
        body: 'Jeden Montag fasst eine KI die Bewertungen und Anmerkungen der Vorwoche in ein paar Sätzen zusammen.',
      },
      {
        title: 'Bestellung per Kassenbon',
        body: 'Ihr Personal fotografiert den Kassenbon und Bitely erkennt die bestellten Gerichte. Eine Anbindung an Ihre Kasse ist nicht nötig. Nach der Bewertung wird der Tisch automatisch freigegeben.',
      },
    ],
  },

  multiLocation: {
    eyebrow: 'Mehrere Standorte',
    headline: 'Für ein einzelnes Lokal oder eine ganze Gruppe.',
    body: 'Jeder Standort hat eigene Tischnummern, eine eigene Speisekarte und ein eigenes Branding. Im Dashboard sehen Sie alle Filialen zusammen oder wählen eine einzelne aus.',
  },

  why: {
    eyebrow: 'Warum Feedback pro Gericht',
    quote:
      'Ein Tisch gibt dem Abend vier Sterne. Dass die Tarte zu süß war und die Pasta lauwarm, steht in dieser Note nicht.',
    body: 'Mit einer Bewertung pro Gericht sehen Sie, welcher Teller die Note nach unten zieht.',
  },

  demo: {
    headline: 'Eine Demo mit Ihrer eigenen Speisekarte.',
    intro:
      'Schreiben Sie uns, welches Restaurant Sie führen. Wir richten ein Dashboard mit Ihren Gerichten ein und gehen es mit Ihnen durch.',
    cta: 'Demo anfragen',
    note: 'Öffnet Ihr E-Mail-Programm mit einer vorbereiteten Nachricht an office@bitely.at.',
    mailSubject: 'Demo-Anfrage',
    mailBody:
      'Hallo Bitely-Team,\n\nich möchte eine Demo sehen.\n\nName:\nRestaurant:\nAnzahl der Standorte:\nTelefon (optional):\n',
  },

  footer: {
    links: ['So funktioniert’s', 'Für Restaurants', 'Demo'],
    backToTop: 'Bitely, zurück nach oben',
    nav: 'Fußzeile',
    rights: 'Bitely. Alle Rechte vorbehalten.',
  },
}
