import type { Locale } from '@/lib/i18n'

/* Who runs Bitely. Bitely is not incorporated yet, so the operator is a
   private person. Datenschutzerklärung, Nutzungsbedingungen and Impressum all
   read from here; when a company exists, change it once in this place.
   The build stops while the address is missing: Impressum and privacy policy
   without a postal address are not compliant and must not go live. */
export const operator = {
  name: 'Alexander Si',
  street: '',
  city: '',
  country: { de: 'Österreich', en: 'Austria' },
  email: 'office@bitely.at',
}

if (!operator.street || !operator.city) {
  throw new Error('lib/legal.ts: Anschrift des Betreibers fehlt (street, city).')
}

/* Shown under each title. Bump it whenever the text changes in substance. */
export const legalUpdated: Record<Locale, string> = {
  de: '20. Oktober 2026',
  en: '20 October 2026',
}

export type LegalSection = {
  heading: string
  paragraphs?: string[]
  list?: string[]
}

export type LegalDoc = {
  title: string
  description: string
  intro?: string[]
  sections: LegalSection[]
}

export type LegalSlug = 'datenschutz' | 'agb' | 'impressum'

const address = (lang: Locale) =>
  `${operator.name}, ${operator.street}, ${operator.city}, ${operator.country[lang]}`

const privacyDe = (): LegalDoc => ({
  title: 'Datenschutzerklärung',
  description: 'Wie Bitely personenbezogene Daten auf bitely.at und in der App unter app.bitely.at verarbeitet.',
  intro: [
    'Bitely ist ein Dienst für Restaurants: Gäste bewerten am Tisch jedes Gericht einzeln, das Restaurant sieht die Auswertung. Diese Erklärung gilt für die Website bitely.at und für die App unter app.bitely.at, sowohl für Gäste als auch für das Personal der Restaurants.',
  ],
  sections: [
    {
      heading: '1. Verantwortlicher',
      paragraphs: [
        `Verantwortlich für die Datenverarbeitung ist ${address('de')}. Sie erreichen uns unter ${operator.email}.`,
      ],
    },
    {
      heading: '2. Website bitely.at',
      paragraphs: [
        'Die Website wird über GitHub Pages ausgeliefert, einen Dienst der GitHub Inc., USA. Beim Aufruf verarbeitet GitHub technisch notwendige Daten wie Ihre IP-Adresse, Datum und Uhrzeit sowie die aufgerufene Seite, um die Website auszuliefern und vor Missbrauch zu schützen. Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren Betrieb der Website nach Art. 6 Abs. 1 lit. f DSGVO. GitHub ist nach dem EU-US Data Privacy Framework zertifiziert.',
        'Die Website setzt keine Cookies, verwendet keine Analyse- oder Werbedienste und lädt keine Schriften von fremden Servern.',
        'Wenn Sie uns über den Demo-Knopf oder direkt per E-Mail schreiben, verarbeiten wir Ihre Angaben, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit es um einen möglichen Vertrag geht, sonst unser berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO.',
      ],
    },
    {
      heading: '3. Bewerten als Gast',
      paragraphs: [
        'Wenn Sie den QR-Code am Tisch scannen und bewerten, speichern wir Ihre Sternebewertungen zu den einzelnen Gerichten und zum Service, Ihre freiwilligen Anmerkungen, das Lokal, den Tisch, die Bestellung und den Zeitpunkt. Das Restaurant sieht diese Bewertungen ohne Ihren Namen und ohne Ihre E-Mail-Adresse.',
        'Damit dieselbe Bestellung nicht mehrfach vom selben Gerät bewertet wird, legt Ihr Browser eine zufällige Gerätekennung im lokalen Speicher an. Sie enthält keine Angaben über Sie.',
        'Rechtsgrundlage ist das berechtigte Interesse des Restaurants und von Bitely, die Qualität der Gerichte zu verbessern, nach Art. 6 Abs. 1 lit. f DSGVO. Bewerten ist freiwillig und ohne Konto möglich.',
      ],
    },
    {
      heading: '4. Gastkonto',
      paragraphs: [
        'Mit einem Gastkonto sammeln Sie Punkte und lösen Gutscheine ein. Dafür speichern wir Ihre E-Mail-Adresse, Ihren Namen, Ihr Passwort als nicht umkehrbaren Hashwert, Ihre Punkte je Lokal, Ihre eingelösten Gutscheine, gesicherte Angebote anderer Lokale und den Zeitpunkt, zu dem Sie den Nutzungsbedingungen zugestimmt haben. Ein Konto gilt in allen Lokalen, die Bitely nutzen. Punkte und Einlösungen werden je Lokal geführt.',
        'Rechtsgrundlage ist die Erfüllung des Nutzungsvertrags nach Art. 6 Abs. 1 lit. b DSGVO.',
        'Lösen Sie einen Gutschein ein, sieht das Restaurant die Einlösung. Sichern Sie über das Bitely-Netzwerk ein Angebot eines anderen Lokals, sieht dieses Lokal bei der Einlösung, aus welchem Lokal das Angebot stammt.',
        'Sie können Ihr Konto jederzeit unter „Dein Konto“ selbst löschen. Dabei löschen wir das Konto, Ihre Punkte, Einlösungen und gesicherten Angebote in allen Lokalen. Bereits abgegebene Bewertungen bleiben ohne Bezug zu Ihrem Konto erhalten.',
      ],
    },
    {
      heading: '5. Anmeldung mit Google',
      paragraphs: [
        'Gäste und Personal können sich mit ihrem Google-Konto anmelden. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google übermittelt uns dabei Ihren Namen, Ihre E-Mail-Adresse und eine Kennung Ihres Google-Kontos. Wir prüfen die Anmeldung auf unserem Server und erhalten keinen Zugriff auf weitere Daten Ihres Google-Kontos.',
        'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Welche Daten Google selbst verarbeitet, steht in der Datenschutzerklärung von Google unter policies.google.com/privacy.',
        'Der Knopf „Auch auf Google bewerten“ ist ein einfacher Link zum Google-Eintrag des Lokals. Erst wenn Sie ihn antippen, werden Sie zu Google weitergeleitet. Bitely übermittelt dabei keine Daten an Google und belohnt keine Google-Rezensionen.',
      ],
    },
    {
      heading: '6. Konten des Restaurant-Personals',
      paragraphs: [
        'Für Inhaber, Filialleitungen und Servicekräfte speichern wir Name, E-Mail-Adresse, Rolle, Filiale, das Passwort als Hashwert und bei Anmeldung mit Google die Kennung des Google-Kontos. Das Konto legt das Restaurant an. Rechtsgrundlage ist die Erfüllung des Vertrags mit dem Restaurant nach Art. 6 Abs. 1 lit. b DSGVO und das berechtigte Interesse an einer sicheren Anmeldung nach Art. 6 Abs. 1 lit. f DSGVO.',
      ],
    },
    {
      heading: '7. KI-Auswertung',
      paragraphs: [
        'Für den Wochenrückblick im Dashboard des Restaurants übermitteln wir Gerichtsnamen, Sternebewertungen und die Anmerkungen der Gäste an die Anthropic PBC, USA, die daraus eine Zusammenfassung erstellt. Namen, E-Mail-Adressen oder Gerätekennungen werden nicht übermittelt. Fotografiert eine Servicekraft einen Kassenbon, wird das Foto ebenfalls an Anthropic übermittelt, um die bestellten Gerichte zu erkennen.',
        'Rechtsgrundlage ist unser berechtigtes Interesse und das des Restaurants an einer verständlichen Auswertung nach Art. 6 Abs. 1 lit. f DSGVO. Grundlage der Übermittlung in die USA sind die Standardvertragsklauseln der EU-Kommission. Anthropic verwendet diese Daten nach seinen kommerziellen Bedingungen nicht zum Training seiner Modelle.',
      ],
    },
    {
      heading: '8. Hosting und Empfänger',
      list: [
        'Die App läuft auf einem Server des Anbieters Zomro.',
        'Die Datenbank betreibt die MongoDB Inc. mit ihrem Dienst MongoDB Atlas in einem Rechenzentrum in Frankfurt am Main, Deutschland. MongoDB ist nach dem EU-US Data Privacy Framework zertifiziert.',
        'Mit allen Anbietern bestehen Verträge zur Auftragsverarbeitung nach Art. 28 DSGVO.',
        'Darüber hinaus geben wir Ihre Daten nicht weiter und verkaufen sie nicht.',
      ],
    },
    {
      heading: '9. Server-Protokolle und Schutz vor Missbrauch',
      paragraphs: [
        'Unser Server protokolliert bei jedem Aufruf der App IP-Adresse, Zeitpunkt, aufgerufene Adresse und Browserkennung. Die Protokolle werden nach 14 Tagen gelöscht. Um Anmeldeversuche zu begrenzen, zählen wir Aufrufe je IP-Adresse und je Konto für 15 Minuten im Arbeitsspeicher. Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren Betrieb nach Art. 6 Abs. 1 lit. f DSGVO.',
      ],
    },
    {
      heading: '10. Speicher im Browser',
      paragraphs: [
        'Die App setzt keine Cookies und verwendet keine Analyse- oder Werbedienste. Sie legt im lokalen Speicher Ihres Browsers nur ab, was sie für ihre Funktion braucht: Ihre Anmeldung, die für Gäste 90 Tage und für das Personal 12 Stunden gilt, die gewählte Sprache und Darstellung, die zufällige Gerätekennung und die Information, dass Sie eine Bestellung schon bewertet haben. Diese Einträge löschen Sie, indem Sie sich abmelden oder die Websitedaten in Ihrem Browser löschen. Rechtsgrundlage ist § 165 Abs. 3 TKG 2021, weil die Speicherung für den von Ihnen gewünschten Dienst unbedingt erforderlich ist.',
      ],
    },
    {
      heading: '11. Speicherdauer',
      paragraphs: [
        'Gastkonten speichern wir, bis Sie sie löschen. Personalkonten speichern wir, bis das Restaurant sie entfernt oder den Vertrag mit Bitely beendet. Bewertungen speichern wir, solange das Restaurant Bitely nutzt, und löschen sie nach Vertragsende, soweit keine gesetzliche Aufbewahrungspflicht besteht. Anfragen per E-Mail löschen wir, wenn sie erledigt sind und keine Aufbewahrungspflicht besteht.',
      ],
    },
    {
      heading: '12. Ihre Rechte',
      paragraphs: [
        'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit sowie das Recht, einer Verarbeitung auf Grundlage berechtigter Interessen zu widersprechen. Schreiben Sie dazu an ' + operator.email + '.',
        'Sie können sich außerdem bei der Österreichischen Datenschutzbehörde beschweren: Barichgasse 40–42, 1030 Wien, dsb.gv.at.',
      ],
    },
  ],
})

const privacyEn = (): LegalDoc => ({
  title: 'Privacy policy',
  description: 'How Bitely processes personal data on bitely.at and in the app at app.bitely.at.',
  intro: [
    'Bitely is a service for restaurants: guests rate every dish individually at the table, and the restaurant sees the results. This policy covers the website bitely.at and the app at app.bitely.at, for guests as well as for restaurant staff. The German version is legally binding.',
  ],
  sections: [
    {
      heading: '1. Controller',
      paragraphs: [`The controller is ${address('en')}. You can reach us at ${operator.email}.`],
    },
    {
      heading: '2. Website bitely.at',
      paragraphs: [
        'The website is served via GitHub Pages, a service of GitHub Inc., USA. When you visit it, GitHub processes technically necessary data such as your IP address, date and time and the page requested, in order to deliver the website and protect it from abuse. The legal basis is our legitimate interest in operating the website securely under Art. 6(1)(f) GDPR. GitHub is certified under the EU-US Data Privacy Framework.',
        'The website sets no cookies, uses no analytics or advertising services and loads no fonts from third-party servers.',
        'If you write to us via the demo button or by email, we process your details to answer your request. The legal basis is Art. 6(1)(b) GDPR where a possible contract is concerned, otherwise our legitimate interest under Art. 6(1)(f) GDPR.',
      ],
    },
    {
      heading: '3. Rating as a guest',
      paragraphs: [
        'When you scan the QR code at the table and rate, we store your star ratings for the individual dishes and for the service, any comments you choose to add, the restaurant, the table, the order and the time. The restaurant sees these ratings without your name or email address.',
        'So that the same order is not rated several times from the same device, your browser creates a random device ID in local storage. It contains no information about you.',
        'The legal basis is the legitimate interest of the restaurant and of Bitely in improving the quality of the dishes under Art. 6(1)(f) GDPR. Rating is voluntary and possible without an account.',
      ],
    },
    {
      heading: '4. Guest account',
      paragraphs: [
        'With a guest account you collect points and redeem vouchers. For this we store your email address, your name, your password as a non-reversible hash, your points per restaurant, your redeemed vouchers, offers from other restaurants you have saved and the time you accepted the terms of use. One account works in every restaurant that uses Bitely. Points and redemptions are kept per restaurant.',
        'The legal basis is the performance of the user agreement under Art. 6(1)(b) GDPR.',
        'When you redeem a voucher, the restaurant sees the redemption. If you save an offer from another restaurant via the Bitely network, that restaurant sees at redemption which restaurant the offer came from.',
        'You can delete your account yourself at any time under “Your account”. This deletes the account, your points, redemptions and saved offers in every restaurant. Ratings you have already submitted remain, without any link to your account.',
      ],
    },
    {
      heading: '5. Sign in with Google',
      paragraphs: [
        'Guests and staff can sign in with their Google account. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Google sends us your name, your email address and an identifier of your Google account. We verify the sign-in on our server and get no access to any other data in your Google account.',
        'The legal basis is Art. 6(1)(b) GDPR. What Google itself processes is described in Google’s privacy policy at policies.google.com/privacy.',
        'The button “Also review on Google” is a plain link to the restaurant’s Google listing. You are only taken to Google when you tap it. Bitely sends no data to Google and does not reward Google reviews.',
      ],
    },
    {
      heading: '6. Restaurant staff accounts',
      paragraphs: [
        'For owners, managers and waiters we store name, email address, role, branch, the password as a hash and, when signing in with Google, the Google account identifier. The restaurant creates the account. The legal basis is the performance of the contract with the restaurant under Art. 6(1)(b) GDPR and the legitimate interest in secure sign-in under Art. 6(1)(f) GDPR.',
      ],
    },
    {
      heading: '7. AI analysis',
      paragraphs: [
        'For the weekly review in the restaurant’s dashboard we send dish names, star ratings and guest comments to Anthropic PBC, USA, which writes a summary from them. Names, email addresses and device IDs are not sent. When a waiter photographs a receipt, the photo is also sent to Anthropic to recognise the ordered dishes.',
        'The legal basis is our and the restaurant’s legitimate interest in an understandable analysis under Art. 6(1)(f) GDPR. Transfers to the USA are based on the European Commission’s standard contractual clauses. Under its commercial terms, Anthropic does not use this data to train its models.',
      ],
    },
    {
      heading: '8. Hosting and recipients',
      list: [
        'The app runs on a server of the provider Zomro.',
        'The database is operated by MongoDB Inc. with its MongoDB Atlas service in a data centre in Frankfurt am Main, Germany. MongoDB is certified under the EU-US Data Privacy Framework.',
        'Data processing agreements under Art. 28 GDPR are in place with all providers.',
        'Beyond this we do not share your data and we never sell it.',
      ],
    },
    {
      heading: '9. Server logs and abuse protection',
      paragraphs: [
        'Our server logs IP address, time, requested address and browser identifier for every request to the app. The logs are deleted after 14 days. To limit sign-in attempts, we count requests per IP address and per account for 15 minutes in memory. The legal basis is our legitimate interest in secure operation under Art. 6(1)(f) GDPR.',
      ],
    },
    {
      heading: '10. Browser storage',
      paragraphs: [
        'The app sets no cookies and uses no analytics or advertising services. It keeps in your browser’s local storage only what it needs to work: your sign-in, valid for 90 days for guests and 12 hours for staff, your chosen language and appearance, the random device ID and the note that you have already rated an order. You remove these entries by signing out or by clearing the site data in your browser. The legal basis is § 165(3) of the Austrian Telecommunications Act 2021, as the storage is strictly necessary for the service you requested.',
      ],
    },
    {
      heading: '11. Retention',
      paragraphs: [
        'We keep guest accounts until you delete them. We keep staff accounts until the restaurant removes them or ends its contract with Bitely. We keep ratings as long as the restaurant uses Bitely and delete them after the contract ends, unless a legal retention duty applies. We delete email enquiries once they are settled and no retention duty applies.',
      ],
    },
    {
      heading: '12. Your rights',
      paragraphs: [
        'You have the right of access, rectification, erasure, restriction of processing and data portability, and the right to object to processing based on legitimate interests. Write to ' + operator.email + '.',
        'You can also lodge a complaint with the Austrian Data Protection Authority: Barichgasse 40–42, 1030 Vienna, dsb.gv.at.',
      ],
    },
  ],
})

const termsDe = (): LegalDoc => ({
  title: 'Nutzungsbedingungen',
  description: 'Nutzungsbedingungen für Gäste der Bitely-App unter app.bitely.at.',
  intro: [
    'Diese Bedingungen gelten für Gäste, die in einem Restaurant über Bitely bewerten, Punkte sammeln und Gutscheine einlösen. Für Restaurants gilt der jeweilige Vertrag mit Bitely.',
  ],
  sections: [
    {
      heading: '1. Anbieter',
      paragraphs: [`Bitely wird betrieben von ${address('de')}, ${operator.email}.`],
    },
    {
      heading: '2. Was Bitely bietet',
      paragraphs: [
        'Über den QR-Code am Tisch bewerten Sie die Gerichte Ihrer Bestellung und den Service. Das ist kostenlos und ohne Konto möglich. Mit einem kostenlosen Gastkonto erhalten Sie für Ihre Bewertungen Punkte, die Sie im jeweiligen Lokal gegen Gutscheine einlösen können.',
      ],
    },
    {
      heading: '3. Gastkonto',
      list: [
        'Für ein Konto müssen Sie mindestens 14 Jahre alt sein.',
        'Jede Person darf nur ein Konto führen. Ihre Angaben müssen zutreffen.',
        'Halten Sie Ihr Passwort geheim. Für Handlungen über Ihr Konto sind Sie verantwortlich, soweit Sie den Missbrauch zu vertreten haben.',
        'Sie können Ihr Konto jederzeit unter „Dein Konto“ löschen. Ihre Punkte verfallen damit in allen Lokalen.',
      ],
    },
    {
      heading: '4. Bewertungen',
      list: [
        'Bewerten Sie nur, was Sie selbst gegessen oder getrunken haben, und geben Sie Ihre ehrliche Meinung wieder.',
        'Anmerkungen dürfen keine beleidigenden, diskriminierenden oder rechtswidrigen Inhalte und keine Daten anderer Personen enthalten.',
        'Sie räumen dem Restaurant und Bitely das unentgeltliche Recht ein, Ihre Bewertungen auszuwerten, um Angebot und Service zu verbessern. Veröffentlicht werden Bewertungen nur mit Zustimmung des Restaurants und nie mit Ihrem Namen.',
        'Bitely darf Bewertungen entfernen, die gegen diese Regeln verstoßen.',
      ],
    },
    {
      heading: '5. Punkte und Gutscheine',
      list: [
        'Punkte gibt es für das Bewerten, unabhängig von der Zahl der Sterne. Wie viele Punkte es gibt, richtet sich nach dem Preis der bewerteten Gerichte.',
        'Punkte gelten nur in dem Lokal, in dem Sie sie gesammelt haben. Sie haben keinen Geldwert, werden nicht ausbezahlt und sind nicht übertragbar.',
        'Welche Gutscheine es gibt, legt das jeweilige Lokal fest und kann es ändern. Die Leistung aus einem Gutschein erbringt das Lokal.',
        'Eingelöst wird vor Ort durch Wischen im Beisein des Personals. Eine Einlösung ist endgültig, die Punkte werden dabei abgebucht.',
        'Nutzt ein Lokal Bitely nicht mehr, verfallen die dort gesammelten Punkte.',
      ],
    },
    {
      heading: '6. Bitely-Netzwerk',
      paragraphs: [
        'Lokale, die am Bitely-Netzwerk teilnehmen, können nach einer Bewertung Willkommensangebote für Ihren ersten Besuch zeigen. Ein Angebot gilt einmal je Konto, nur für Gäste, die das Lokal noch nicht besucht haben, und 90 Tage ab dem Sichern. Die Leistung erbringt das anbietende Lokal.',
      ],
    },
    {
      heading: '7. Google-Rezensionen',
      paragraphs: [
        'Bitely bietet nach jeder Bewertung einen Link zum Google-Eintrag des Lokals an. Eine Google-Rezension ist freiwillig und wird nie belohnt. Was Sie dort schreiben, verantworten Sie selbst.',
      ],
    },
    {
      heading: '8. Missbrauch',
      paragraphs: [
        'Wer Punkte durch falsche Bewertungen, mehrere Konten oder technische Tricks erschleicht, dem kann Bitely Punkte abziehen oder das Konto sperren.',
      ],
    },
    {
      heading: '9. Verfügbarkeit und Haftung',
      paragraphs: [
        'Bitely ist für Gäste kostenlos. Wir bemühen uns um einen störungsfreien Betrieb, können ihn aber nicht garantieren. Wir haften unbeschränkt für Vorsatz, grobe Fahrlässigkeit und Personenschäden. Für leichte Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Pflichten und begrenzt auf den vorhersehbaren Schaden. Zwingende Rechte nach dem Konsumentenschutzgesetz bleiben unberührt.',
      ],
    },
    {
      heading: '10. Änderungen',
      paragraphs: [
        'Wir können diese Bedingungen ändern. Wesentliche Änderungen zeigen wir in der App an, bevor sie gelten. Nutzen Sie Ihr Konto danach weiter, gelten die neuen Bedingungen. Sie können Ihr Konto jederzeit löschen.',
      ],
    },
    {
      heading: '11. Recht und Gerichtsstand',
      paragraphs: [
        'Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts. Als Verbraucher behalten Sie den Schutz der zwingenden Bestimmungen des Staates, in dem Sie Ihren gewöhnlichen Aufenthalt haben, und können auch dort klagen.',
      ],
    },
  ],
})

const termsEn = (): LegalDoc => ({
  title: 'Terms of use',
  description: 'Terms of use for guests of the Bitely app at app.bitely.at.',
  intro: [
    'These terms apply to guests who rate, collect points and redeem vouchers in a restaurant via Bitely. Restaurants are covered by their own contract with Bitely. The German version is legally binding.',
  ],
  sections: [
    {
      heading: '1. Provider',
      paragraphs: [`Bitely is operated by ${address('en')}, ${operator.email}.`],
    },
    {
      heading: '2. What Bitely offers',
      paragraphs: [
        'Using the QR code at the table you rate the dishes of your order and the service. This is free and possible without an account. With a free guest account you earn points for your ratings, which you can redeem for vouchers at the restaurant concerned.',
      ],
    },
    {
      heading: '3. Guest account',
      list: [
        'You must be at least 14 years old to have an account.',
        'Each person may hold only one account. Your details must be accurate.',
        'Keep your password secret. You are responsible for actions taken through your account to the extent you are at fault for its misuse.',
        'You can delete your account at any time under “Your account”. Your points then lapse in every restaurant.',
      ],
    },
    {
      heading: '4. Ratings',
      list: [
        'Only rate what you ate or drank yourself, and give your honest opinion.',
        'Comments must not contain insulting, discriminatory or unlawful content, nor data about other people.',
        'You grant the restaurant and Bitely the free right to analyse your ratings to improve food and service. Ratings are only published with the restaurant’s consent and never with your name.',
        'Bitely may remove ratings that break these rules.',
      ],
    },
    {
      heading: '5. Points and vouchers',
      list: [
        'Points are given for rating, regardless of the number of stars. How many points you get depends on the price of the dishes rated.',
        'Points are only valid at the restaurant where you collected them. They have no cash value, are not paid out and cannot be transferred.',
        'Each restaurant decides which vouchers it offers and may change them. The restaurant provides what the voucher promises.',
        'Vouchers are redeemed on site by swiping in the presence of staff. A redemption is final and the points are deducted.',
        'If a restaurant stops using Bitely, the points collected there lapse.',
      ],
    },
    {
      heading: '6. Bitely network',
      paragraphs: [
        'Restaurants taking part in the Bitely network may show welcome offers for your first visit after a rating. An offer applies once per account, only to guests who have not visited that restaurant before, and for 90 days from saving it. The offering restaurant provides the benefit.',
      ],
    },
    {
      heading: '7. Google reviews',
      paragraphs: [
        'After every rating Bitely offers a link to the restaurant’s Google listing. A Google review is voluntary and never rewarded. You are responsible for what you write there.',
      ],
    },
    {
      heading: '8. Abuse',
      paragraphs: [
        'If someone obtains points through false ratings, multiple accounts or technical tricks, Bitely may deduct points or suspend the account.',
      ],
    },
    {
      heading: '9. Availability and liability',
      paragraphs: [
        'Bitely is free for guests. We aim for uninterrupted operation but cannot guarantee it. We are liable without limitation for intent, gross negligence and personal injury. For slight negligence we are liable only for breach of essential obligations and limited to foreseeable damage. Mandatory consumer rights remain unaffected.',
      ],
    },
    {
      heading: '10. Changes',
      paragraphs: [
        'We may change these terms. We announce material changes in the app before they take effect. If you keep using your account afterwards, the new terms apply. You can delete your account at any time.',
      ],
    },
    {
      heading: '11. Governing law',
      paragraphs: [
        'Austrian law applies, excluding the UN Convention on Contracts for the International Sale of Goods. As a consumer you keep the protection of the mandatory rules of the country where you habitually reside and may also bring proceedings there.',
      ],
    },
  ],
})

const imprint = (lang: Locale): LegalDoc => {
  const de = lang === 'de'
  return {
    title: de ? 'Impressum' : 'Legal notice',
    description: de ? 'Angaben nach § 5 ECG und § 25 MedienG.' : 'Information under § 5 ECG and § 25 MedienG.',
    sections: [
      {
        heading: de ? 'Betreiber' : 'Operator',
        paragraphs: [operator.name, operator.street, `${operator.city}, ${operator.country[lang]}`, operator.email],
      },
      {
        heading: de ? 'Inhalt' : 'Purpose',
        paragraphs: [
          de
            ? 'Bitely ist ein Dienst für Restaurants, mit dem Gäste jedes Gericht einzeln bewerten. Diese Website informiert über den Dienst.'
            : 'Bitely is a service for restaurants that lets guests rate every dish individually. This website provides information about the service.',
        ],
      },
      {
        heading: de ? 'Streitbeilegung' : 'Dispute resolution',
        paragraphs: [
          de
            ? 'Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
            : 'We are neither obliged nor willing to take part in dispute resolution proceedings before a consumer arbitration board.',
        ],
      },
    ],
  }
}

export function getLegalDoc(slug: LegalSlug, lang: Locale): LegalDoc {
  if (slug === 'impressum') return imprint(lang)
  if (slug === 'datenschutz') return lang === 'de' ? privacyDe() : privacyEn()
  return lang === 'de' ? termsDe() : termsEn()
}

export const legalSlugs: LegalSlug[] = ['datenschutz', 'agb', 'impressum']

/* Footer labels, in the order of legalSlugs. */
export const legalLabels: Record<Locale, Record<LegalSlug, string>> = {
  de: { datenschutz: 'Datenschutz', agb: 'Nutzungsbedingungen', impressum: 'Impressum' },
  en: { datenschutz: 'Privacy', agb: 'Terms', impressum: 'Legal notice' },
}
