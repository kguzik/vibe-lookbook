# vibe-lookbook

AI-powered fashion lookbook app. User uploads a selfie, picks a vibe, and gets AI-generated editorial looks they can shop.

## Tech stack

- Next.js App Router (v16)
- React 19
- TypeScript
- Tailwind CSS v4
- pnpm
- Supabase (auth + database + storage + realtime)
- Stripe (payments + credit system)
- Image generation API (TBD - likely Replicate or fal.ai)

## Commands

- Install dependencies: `pnpm install`
- Run dev server: `pnpm dev`
- Build: `pnpm build`
- Lint: `pnpm lint`

## Architecture

- Use feature-based folder structure under `src/features/`
- Use `src/components/ui/` for reusable UI components
- Use `src/components/layout/` for layout components
- Keep components small and readable
- Prefer composition over abstraction

## Content

- All static copy (heading, paragraphs, labels, taglines, nav links) lives in `src/content/` — never hardcoded in components
- One file per section/page: `footer.ts`, `home.ts`, etc.

## Rules

- Do not install new packages unless explicitly requested
- Do not create unnecessary abstractions or custom hooks too early
- Prefer simple React and TypeScript solutions
- Use ES modules import/export syntax
- Prefer `type` over `interface`
- Use arrow functions instead of function declarations.

## Stylesheet

- All design tokens (colors, fonts, radius) live in `@theme` inside `src/app/globals.css` — never hardcode raw color values in components
- Always reference colors/backrounds via CSS variables: `var(--color-accent)`, `var(--color-background)`, bg-[var(--color-accent)] etc.
- Headings h1–h6 and paragraphs use base styles - no need to add font classes manually
- For an accent-colored italic word inside a heading, use `<span className="accent-word">word</span>`
- For uppercase tracking labels use `.label` (muted) or `.label-accent` (caramel)
