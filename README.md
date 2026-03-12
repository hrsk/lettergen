# lettergen

Small SPA for generating and managing job application letters.

The app is currently template-based (no backend): you fill in a short form and it produces a structured letter, saves it to `localStorage`, and lets you copy/delete generated applications.

## Features

- Generate a letter from `job`, `company`, `skills`, `additional details`
- Dashboard with saved applications (persisted via `localStorage`)
- Copy to clipboard (from generator view and dashboard cards)
- Delete saved applications
- Goal counter (`MAX_GOALS = 5`)

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Routing: `react-router-dom` (`HashRouter` for GitHub Pages)
- State: Zustand (`persist` -> `localStorage`)
- Forms: `react-hook-form` + Zod
- Styling: SCSS modules
- Tooling: ESLint, Prettier, Stylelint, Husky + lint-staged
- UI: `@hrsk/lettergen-ui-kit`

## Requirements

- Node.js 20+ (CI uses Node 20)
- pnpm 10+

## Quickstart

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000/lettergen/`.

## Scripts

- `pnpm dev`: start Vite dev server (port `3000`)
- `pnpm build`: typecheck + production build into `build/`
- `pnpm preview`: preview the production build locally
- `pnpm lint`: run ESLint
- `pnpm lint:styles`: run Stylelint
- `pnpm lint:styles:fix`: auto-fix Stylelint issues
- `pnpm storybook`: run Storybook on `6006`
- `pnpm build-storybook`: build Storybook

## Environment Variables

Vite loads `.env*` files and exposes variables prefixed with `VITE_` to the client.

- `VITE_GEMINI_API_KEY`: reserved for a future Gemini integration (currently not referenced in `src/`)

Use `.env.example` as a template and keep your real `.env` uncommitted (it is ignored by `.gitignore`).

## Project Structure

- `src/app`: app shell and routing (`AppRoutes`, `Main`)
- `src/widgets`: page-level widgets (`Dashboard`, `LettersGenerator`, `Header`)
- `src/features`: feature modules (generate form, output, previews, goals)
- `src/shared`: shared constants/config/utils
- `src/styles`, `src/index.scss`: global styles and variables

## Persistence

Generated applications are stored in the browser under the `localStorage` key `letters`.
To fully reset the app state, clear that key (or clear site data in your browser).

## Deployment (GitHub Pages)

CI builds on pushes to `main` and deploys the `build/` directory to GitHub Pages via `.github/workflows/deploy.yml`.

This repo is configured with:

- Vite `base: "/lettergen/"` in `vite.config.ts`
- `HashRouter` in `src/app/appRoutes.tsx` to avoid server-side route handling on Pages
