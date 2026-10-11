# Bitely — Landingpage

Einseitige deutschsprachige Marketing-Website für Bitely, ein B2B-SaaS-Produkt, das
Restaurants gerichtgenaues Gästefeedback per QR-Code liefert.

Dieses Repo enthält **nur die Landingpage**. Sie läuft unter `bitely.at`.
Die eigentliche App liegt in einem separaten Repo
([`Bitely-at/Granular-Feedback`](https://github.com/Bitely-at/Granular-Feedback))
und läuft unter `app.bitely.at`.

Der vollständige inhaltliche Brief steht in [bitely-website-brief.md](./bitely-website-brief.md).

## Stack

- **Next.js 16** (App Router, React 19)
- **Tailwind CSS 4** + shadcn-Komponenten (`components/ui`)
- **Framer Motion** für Animationen
- **pnpm** als Paketmanager
- Statischer Export (`output: 'export'`), Deployment über **GitHub Pages** (`.github/workflows/deploy.yml`, Node 22)

## Entwicklung

```bash
pnpm install
pnpm dev
```

Läuft auf http://localhost:3000.

## Build

```bash
pnpm build
```

## Struktur

| Pfad | Inhalt |
|---|---|
| `app/[lang]/` | Layout und Seite, je einmal unter `/de` und `/en` |
| `app/actions/` | Server Action für das Demo-Formular |
| `components/` | Sektionen der Landingpage (Hero, How it works, …) |
| `components/ui/` | Wiederverwendbare UI-Bausteine |
| `lib/dictionaries/` | Alle Texte der Seite, `de.ts` und `en.ts` |
| `lib/` | Hilfsfunktionen, Sprachen (`i18n.ts`) und Demo-Request-Logik |
| `proxy.ts` | Leitet `/` auf `/de` oder `/en` weiter (Cookie, sonst Browsersprache, sonst Deutsch) |
| `public/` | Bilder, Logos, Icons |

## Hinweise

- Deployment: Push auf `main` baut `out/` und veröffentlicht es. Einmalig im Repo
  Settings → Pages → Source auf „GitHub Actions“ stellen; Custom Domain `bitely.at`
  (`public/CNAME`) und „Enforce HTTPS“ aktivieren.
- Es gibt keine Server-Runtime: Das Demo-Formular ist ein `mailto:`-Link
  (`components/demo-cta.tsx`).
- `public/index.html` leitet `/` per JavaScript auf `/de` oder `/en` weiter (Browsersprache).
- `public/404.html` (nach dem Build über `out/404.html` kopiert, weil Next sie sonst überschreibt) leitet die alten `bitely.at`-Pfade gedruckter QR-Codes
  (`/:org/.../table/:n`, `/:org/staff`, `/:org/admin`) auf `app.bitely.at` weiter.
  Darf weg, sobald alle QR-Codes ersetzt sind.
