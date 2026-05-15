# AlpinAds Hotel Landing Page

A responsive marketing landing page for a luxury Alpine hotel brand. Built with React and Vite, aligned to mobile-first Figma specs for the hero booking experience and the Our Heritage gallery.

## Features

- **Hero** — Full-viewport image carousel (Embla), sticky navbar with responsive logos, and a booking bar with date range and guest pickers (mobile stack + desktop horizontal layout, backdrop blur, field reordering on small screens).
- **Our Heritage** — Typography and spacing tuned for mobile/desktop, infinite-loop image gallery with centered slides and side peek on mobile, gallery navigation with reduced-opacity previous control.
- **Shared UI** — Radix-based primitives, Tailwind CSS v4, Manrope typography, and accessible form controls.

## Tech stack

| Layer | Tools |
| --- | --- |
| UI | React 18, TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS 4, `tailwind-merge`, CVA |
| Components | Radix UI, Lucide icons |
| Carousel | Embla Carousel React |
| Dates | `react-day-picker`, `date-fns` |
| Tests | Vitest, Testing Library, jsdom |

## Project structure

```
src/
├── app/
│   ├── components/     # Hero, Navbar, OurHeritage, BookingFields, UI primitives
│   ├── layouts/        # MainLayout
│   ├── pages/          # LandingPage
│   └── sections/       # Section id constants
├── constants/          # Nav links, heritage slide URLs
├── hooks/              # Infinite loop slider, match media, heritage geometry
├── styles/             # Global CSS and theme tokens
└── test/               # Vitest setup
```

## Requirements

- **Node.js** 20+ (CI uses 22)
- **pnpm** recommended (`pnpm-lock.yaml` is checked in; CI uses `npm ci` with `package-lock.json`)

## Getting started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Typecheck
pnpm run typecheck

# Run tests
pnpm run test

# Production build
pnpm run build
```

The dev server URL is printed in the terminal (typically `http://localhost:5173`).

## Scripts

| Script | Description |
| --- | --- |
| `pnpm run dev` | Start Vite dev server |
| `pnpm run build` | Production build to `dist/` |
| `pnpm run typecheck` | Run `tsc --noEmit` |
| `pnpm run test` | Run Vitest once |
| `pnpm run test:watch` | Run Vitest in watch mode |

## CI

GitHub Actions runs on pushes and pull requests to `main` / `master`:

1. `npm ci`
2. `npm run typecheck`
3. `npm run test`
4. `npm run build`

Workflow file: [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

## Path aliases

TypeScript and Vite resolve `@/*` to `src/*` (for example `@/hooks/useMatchMedia`).

## License

Private project — all rights reserved unless otherwise specified by the repository owner.
