# Bitely — Marketing Website

Single-page German-language marketing site for Bitely, a B2B SaaS product giving restaurant owners dish-level guest feedback via QR codes. Built with Next.js (App Router) and Tailwind CSS. No backend, no database — the interactive demo section uses hardcoded mock data. See [bitely-website-brief.md](./bitely-website-brief.md) for the full brief.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

This produces a static export in `out/` (see `output: "export"` in [next.config.ts](./next.config.ts)).

## Deployment (GitHub Pages)

Deployment is automatic: every push to `main` triggers [.github/workflows/deploy.yml](./.github/workflows/deploy.yml), which builds the static export and publishes it to GitHub Pages.

One-time setup in the GitHub repo settings: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The site is served under `/bitely-landing/` (the repo name) via `basePath`/`assetPrefix` in `next.config.ts`, applied automatically when running in GitHub Actions.
