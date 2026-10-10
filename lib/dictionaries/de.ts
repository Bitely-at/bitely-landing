import type { Dictionary } from './en'

/* German copy. Addresses restaurant owners with "Sie", the norm for B2B in
   Austria and Germany. Must match the shape of en.ts. */

export const de: Dictionary = {
  meta: {
    title: 'Bitely: Feedback zu jedem Gericht statt nur zum ganzen Essen',
    description:
      'Mit Bitely scannen Gäste einen QR-Code, bewerten jedes Gericht einzeln und sammeln Treuepunkte. Betreiber sehen Bewertungen pro Gericht live und bekommen jede Woche eine KI-Zusammenfassung. Jetzt Demo anfragen.',
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
    announcement: 'Neu: jeden Montag eine KI-Auswertung zu jedem Gericht',
    headline: 'Feedback zu jedem Gericht statt nur zum ganzen Essen.',
    intro:
      'Gäste scannen am Tisch einen QR-Code, bewerten jedes bestellte Gericht und sammeln Treuepunkte. Sie sehen dabei genau, welche Teller überzeugen und wo nachgebessert werden muss.',
    primaryCta: 'Demo anfragen',
    secondaryCta: 'So funktioniert’s',
    carouselLabel: 'Screenshots der Bitely-App',
    screens: [
      {
        alt: 'Das Bitely-Dashboard: Durchschnittsbewertung, Bewertungen im Zeitverlauf und die besten und schwächsten Gerichte im Ranking',
        caption: 'Live-Bewertungen für jedes einzelne Gericht',
      },
    ],
    proofPoints: [
      'Keine App nötig',
      'Bewertung pro Gericht',
      'Wöchentliche KI-Auswertung',
      'Treuepunkte inklusive',
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
        body: 'Gäste scannen den Code auf ihrem Tisch. Keine App, kein Konto nötig.',
      },
      {
        title: 'Jedes Gericht bewerten',
        body: 'Jedes bestellte Gericht wird einzeln bewertet und nicht bloß der Besuch als Ganzes.',
      },
      {
        title: 'Punkte sammeln',
        body: 'Wer sich anmeldet, bekommt für sein Feedback Treuepunkte gutgeschrieben.',
      },
      {
        title: 'Gutschein einlösen',
        body: 'Beim nächsten Besuch werden die Punkte zum Gutschein, eingelöst mit einem Wisch.',
      },
    ],
  },

  forGuests: {
    eyebrow: 'Für Gäste',
    headline: 'Erledigt, bevor der Kaffee kommt.',
    intro:
      'Bitely nimmt Rücksicht auf die Zeit Ihrer Gäste. Eine Bewertung dauert Sekunden, die Belohnung sammelt sich ganz nebenbei.',
    imageAlt: 'Ein Gast scannt am Restauranttisch mit dem Handy einen QR-Code',
    points: [
      {
        label: 'Kein Konto nötig',
        body: 'Gäste geben sofort nach dem Scan Feedback zu jedem Gericht. Ohne Hürden und ohne Registrierung.',
      },
      {
        label: 'Optionale Anmeldung für Punkte',
        body: 'Mit einer kurzen Anmeldung per E-Mail oder Google bleiben die Treuepunkte gespeichert und das Feedback wird beim nächsten Besuch belohnt.',
      },
      {
        label: 'Sofort und endgültig eingelöst',
        body: 'Gutscheine werden direkt vor Ort eingelöst. Der Gast zeigt einen Code, das Personal trägt den Betrag ein. Einmal erledigt, für immer erledigt.',
      },
    ],
  },

  forRestaurants: {
    eyebrow: 'Für Restaurants',
    headline: 'Ein Live-Dashboard, das jedes Gericht beim Namen nennt.',
    dashboardTitle: 'Bewertungen dieser Woche',
    reviews: '412 Bewertungen',
    dishes: [
      'Gebratene Jakobsmuscheln',
      'Ribeye, 40 Tage gereift',
      'Burrata & Paradeiser',
      'Trüffel-Tagliatelle',
      'Zitronentarte',
    ],
    highlightTitle: 'KI-Wochenhighlight',
    highlightBody:
      'Die Jakobsmuscheln sind wieder Ihr Spitzenreiter. Die Zitronentarte ist auf 2,4 gefallen und drei Gäste fanden sie zu süß. Ein Blick darauf lohnt sich noch vor dem Wochenende.',
    features: [
      {
        title: 'Bewertungen pro Gericht',
        body: 'Sehen Sie genau, welche Gerichte schwächeln, statt eines verwaschenen Durchschnitts für den ganzen Besuch.',
      },
      {
        title: 'Wöchentliche KI-Zusammenfassung',
        body: 'Jeden Montag eine verständliche Übersicht: was Gäste begeistert hat, was nachgelassen hat und wo Sie ansetzen sollten.',
      },
      {
        title: 'Bestellung per Rechnungs-Scan',
        body: 'Das Personal scannt die Rechnung, um die Bestellung anzulegen. Nach der Bewertung setzt sich der Tisch automatisch zurück.',
      },
    ],
  },

  multiLocation: {
    eyebrow: 'Mehrere Standorte',
    headline: 'Für ein einzelnes Lokal oder eine ganze Gruppe.',
    body: 'Jeder Standort behält seine eigene Tischnummerierung, sein Branding und seine Speisekarte und fließt trotzdem in eine gemeinsame Übersicht ein. Betreiber vergleichen ihre Standorte auf einen Blick, jedes Lokal führt seinen Betrieb weiter selbst.',
  },

  why: {
    eyebrow: 'Warum Feedback pro Gericht',
    quote:
      'Vier Sterne für den Abend sagen Ihnen, dass der Tisch zufrieden gegangen ist. Sie sagen nicht, dass die Tarte zu süß war, die Pasta kalt ankam und die Jakobsmuscheln der einzige Grund sind, warum die Gäste wiederkommen.',
    body: 'Durchschnittswerte verstecken das Problem. Bitely zeigt auf genau das Gericht, das Sie verbessern sollten.',
  },

  demo: {
    headline: 'Bitely mit Ihrer eigenen Speisekarte erleben.',
    intro:
      'Erzählen Sie uns von Ihrem Restaurant und wir zeigen Ihnen ein Live-Dashboard rund um Ihre Gerichte.',
    successTitle: 'Vielen Dank.',
    successBody:
      'Ihre Anfrage ist eingegangen. Jemand aus dem Bitely-Team meldet sich bei Ihnen, um einen Termin zu vereinbaren.',
    fields: {
      name: 'Name',
      restaurant: 'Restaurant',
      email: 'E-Mail',
      locations: 'Standorte',
      message: 'Was sollten wir noch wissen?',
      consent: 'Bitely darf mich zu dieser Demo-Anfrage kontaktieren.',
    },
    locationOptions: {
      '1': 'Ein Standort',
      '2-5': '2 bis 5 Standorte',
      '6-20': '6 bis 20 Standorte',
      '21+': 'Mehr als 20 Standorte',
    },
    submit: 'Demo anfragen',
    sending: 'Wird gesendet…',
    errors: {
      name: 'Bitte geben Sie Ihren Namen an.',
      restaurant: 'Bitte geben Sie den Namen Ihres Restaurants an.',
      emailMissing: 'Wir brauchen eine E-Mail-Adresse, um Sie zu erreichen.',
      emailInvalid: 'Diese E-Mail-Adresse scheint nicht zu stimmen.',
      phone: 'Diese Telefonnummer ist zu kurz.',
      locations: 'Bitte wählen Sie aus, wie viele Standorte Sie betreiben.',
      message: 'Bitte bleiben Sie unter 2000 Zeichen.',
      consent: 'Wir brauchen Ihre Zustimmung, um uns bei Ihnen zu melden.',
      summary: 'Bitte prüfen Sie die markierten Felder.',
      delivery:
        'Beim Senden Ihrer Anfrage ist etwas schiefgelaufen. Bitte versuchen Sie es gleich noch einmal.',
    },
    received: 'Ihre Demo-Anfrage ist eingegangen.',
  },

  footer: {
    links: ['So funktioniert’s', 'Für Restaurants', 'Demo'],
    backToTop: 'Bitely, zurück nach oben',
    nav: 'Fußzeile',
    poweredBy: 'Powered by Bitely',
    rights: 'Bitely. Alle Rechte vorbehalten.',
  },
}
