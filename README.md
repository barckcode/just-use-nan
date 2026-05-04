# just-use-nan

Landing page for [nan.builders](https://nan.builders) — flat-rate GPU inference, open models, no token meter.

Built with [Astro](https://astro.build). Static, bilingual (EN/ES), zero client-side JavaScript.

## Quick Start

```bash
bun install
bun dev        # http://localhost:4321
```

## Commands

| Command          | Action                           |
| :--------------- | :------------------------------- |
| `bun dev`        | Start dev server at :4321        |
| `bun build`      | Build production site to ./dist/ |
| `bun preview`    | Preview production build locally |
| `bun run format` | Format all files with Prettier   |

## Project Structure

```text
/
├── public/
│   └── styles.css
├── src/
│   ├── components/
│   │   └── HomePage.astro   # shared page template (locale-aware)
│   ├── i18n/
│   │   └── translations.ts  # EN + ES strings
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro      # /  (English)
│       └── es/
│           └── index.astro  # /es/ (Spanish)
└── package.json
```

## i18n

Locale routing is handled by Astro's built-in i18n. English is the default locale (`/`), Spanish lives at `/es/`. All strings are in `src/i18n/translations.ts` — adding a key to `en` without adding it to `es` is a TypeScript error.

## Requirements

- Node.js 24.0.0+
- Bun 1.3.13+
