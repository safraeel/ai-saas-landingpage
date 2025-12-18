# AI SaaS Landing Page

A premium single-page landing experience for AI tools/services. Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, React Router, Zustand, and Heroicons.

## Tech Stack

- React + Vite (TypeScript)
- Tailwind CSS + @tailwindcss/typography
- React Router
- Zustand (theme + progress)
- Framer Motion (animations)
- Heroicons

## Scripts

- `npm run dev` – start dev server (Vite chooses a free port, often 5173).
- `npm run build` – production build to `dist/`.
- `npm run preview` – preview the production build locally.

## Development

- Main entry: `src/main.tsx` and `src/router/index.tsx`.
- Layout shell: `src/components/layout`.
- UI primitives: `src/components/ui`.
- Landing content: `src/pages/Home.tsx` (sections: `#work`, `#process`, `#pricing`, `#faq`, `#contact`).
- State: `src/store` (theme + progress).

## Notes

- Theme toggle uses `html.dark` class with Tailwind `darkMode: 'class'`.
- Progress is stored locally (mock) and not persisted to a backend.
