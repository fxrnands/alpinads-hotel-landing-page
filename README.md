# AlpinAds Hotel Landing Page

A single-page marketing site for a luxury Alpine hotel brand. The UI is implemented in React from Figma specs: hero with booking bar, heritage gallery, room showcase, amenities, visual memories masonry, and FAQ — all on one scrollable route with no client-side routing.

## Tech stack

| Layer | Tools |
| --- | --- |
| UI | React 18, TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS 4, `tailwind-merge`, CVA |
| Components | Radix UI, Lucide icons |
| Carousel / motion | Embla Carousel, Motion (mobile carousels) |
| Smooth scroll | Lenis (dynamic import) |
| Dates | `react-day-picker`, `date-fns` |
| Tests | Vitest, Testing Library, jsdom |
| Package manager | pnpm 9 (`packageManager` in `package.json`) |

## Project structure

```
src/
├── app/
│   ├── components/       # Section UI (Hero, Navbar, Amenities, FAQ, …)
│   │   ├── faq/
│   │   ├── visual-memories/
│   │   └── ui/             # Shared primitives (shadcn-style)
│   ├── layouts/            # MainLayout
│   ├── pages/              # LandingPage (lazy-loaded sections)
│   └── sections/           # Section id constants
├── constants/              # Content and layout tokens per section
├── hooks/                  # Sliders, smooth scroll, masonry, match media
├── lib/                    # Section scroll targets, FAQ/visual-memories layout
├── utils/                  # Smooth scroll helpers, motion preference
└── test/                   # Vitest setup
```

## Requirements

- **Node.js** 20+ (CI uses 22)
- **pnpm** 9.15.9 (enforced via `packageManager`; use Corepack or install pnpm globally)

## Getting started

```bash
pnpm install
pnpm run dev
```

Dev server URL is printed in the terminal (typically `http://localhost:5173`).

Navigation uses in-page scroll only — the URL stays at `/` (no hash or path segments).

## Scripts

| Script | Description |
| --- | --- |
| `pnpm run dev` | Start Vite dev server |
| `pnpm run build` | Production build to `dist/` (vendor code-splitting enabled) |
| `pnpm run typecheck` | Typecheck app + `vite.config.ts` (`tsc -b`) |
| `pnpm run test` | Run Vitest once |
| `pnpm run test:watch` | Run Vitest in watch mode |

## CI

GitHub Actions runs on pushes and pull requests to `main` / `master`:

1. `pnpm install --frozen-lockfile`
2. `pnpm run typecheck`
3. `pnpm run test`
4. `pnpm run build`

Workflow: [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

## Path aliases

TypeScript and Vite resolve `@/*` to `src/*` (for example `@/constants/sanctuaryRooms`).

## License

Private project — all rights reserved unless otherwise specified by the repository owner.
