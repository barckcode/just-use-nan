# Contributing to JustUseNan

Thanks for your interest in contributing! We favor small, focused PRs and clear intent over big bangs. This guide explains how to get set up and the workflow we use.

## Quick Start

Prerequisites

- **Node.js 24.0.0+** (recommended: 24.15.0)
- **Bun v1.3.13+**
- Git

Setup

```bash
# Fork this repo, then clone your fork
git clone https://github.com/barckcode/just-use-nan.git
cd just-use-nan

# Use the recommended Node.js version (if using nvm)
nvm use

# Install dependencies and run dev server
bun install
bun dev
```

## Project Overview

```text
/
├── public/
│   └── styles.css
├── src/
│   ├── components/
│   ├── i18n/
│   ├── layouts/
│   └── pages/
└── package.json
```

- `src/pages/` – Astro pages and locale routing (`/`, `/es/`)
- `src/components/` – Reusable Astro components
- `src/layouts/` – Page layouts
- `src/i18n/` – Translation strings (en/es)
- `public/` – Static assets

## Development Workflow

1. Create a feature branch

```
git checkout -b feat/<short-slug>
```

2. Make changes and keep PRs small and focused

- Prefer a series of small PRs over one large one.
- Include screenshots/GIFs when modifying the interface.
- Update README or inline docs when behavior changes.

3. Run checks locally

```bash
bun run build    # Build your production site to ./dist/
bun run preview  # Preview your build locally
```

4. Commit using Conventional Commits

- `feat:` – new user‑facing capability
- `fix:` – bug fix
- `chore:`, `refactor:`, `docs:`, `perf:`, `test:` etc.

Examples

```
fix: correct typo in landing page heading

feat(components): add reusable card component
```

5. Open a Pull Request

- Describe the change, rationale, and testing steps.
- Link related Issues.
- Keep the PR title in Conventional Commit format if possible.

## Code Style and Patterns

- Follow the existing style in the codebase.
- Use Astro components for page-level and reusable UI components.
- Aim for accessible elements (labels, `aria-*` where appropriate).

## Issue Reports and Feature Requests

- Use GitHub Issues. Include:
  - OS and browser
  - Steps to reproduce
  - Relevant logs or console output
  - Screenshots/GIFs for UI issues
