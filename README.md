# Dev Patel Portfolio

Product-creator portfolio built with Next.js 15 (App Router), Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

See `Structure.md` for the full folder layout. Key points:

- `src/components/` — one folder per component, self-contained
- `src/data/` — single source of truth for content (projects, stack)
- `src/hooks/useReducedMotion.js` — respects `prefers-reduced-motion`
- `src/lib/utils.js` — shared helpers (e.g. `cn` classnames merge)

## Design

See `design.md` for the full design system (colors, typography, animation rules, layout).