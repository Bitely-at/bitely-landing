# Bitely — Landingpage

Einseitige deutschsprachige Marketing-Website für Bitely, ein B2B-SaaS-Produkt, das
Restaurants gerichtgenaues Gästefeedback per QR-Code liefert.

Dieses Repo enthält **nur die Landingpage**. Die eigentliche App hinter `bitely.at`
liegt in einem separaten Repo und wird per Proxy eingebunden.

Der vollständige inhaltliche Brief steht in [bitely-website-brief.md](./bitely-website-brief.md).

## Stack

- **Next.js 16** (App Router, React 19)
- **Tailwind CSS 4** + shadcn-Komponenten (`components/ui`)
- **Framer Motion** für Animationen
- **pnpm** als Paketmanager
- Deployment über **Netlify** (`@netlify/plugin-nextjs`, Node 22)

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
| `app/` | Layout, Seite und Server Action für das Demo-Formular |
| `components/` | Sektionen der Landingpage (Hero, How it works, …) |
| `components/ui/` | Wiederverwendbare UI-Bausteine |
| `lib/` | Hilfsfunktionen und Demo-Request-Logik |
| `public/` | Bilder, Logos, Icons |

## Hinweise

- `pnpm-workspace.yaml` setzt `nodeLinker: hoisted` — ohne das scheitert der Netlify-Build
  unter Windows an Symlinks.
- Das Demo-Formular nutzt eine Server Action, braucht also eine Server-Runtime.
  Ein rein statischer Export (z. B. GitHub Pages) funktioniert damit nicht.
