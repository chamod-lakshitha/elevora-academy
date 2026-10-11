# Elelora Academy — Next.js starter

A responsive, multi-page online-learning website built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion and Lucide icons. The supplied academy logo is included at `public/logo.png` and used in the header/footer.

## Requirements
- Node.js 18.17+ (Node 20 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Pages
- `/` — animated landing page and featured classes
- `/classes` — searchable, category-filtered course grid and quick-view modal
- `/about` — vision, mission, values and learning pillars

## Customise
- **Brand colours and utilities:** `tailwind.config.ts`
- **Global layout, buttons and typography:** `app/globals.css`
- **Course content:** `lib/data.ts`
- **Logo:** replace `public/logo.png` with your final transparent PNG/SVG (update `components/BrandLogo.tsx` if changing file type)
- **Navigation/footer:** `components/Navbar.tsx`, `components/Footer.tsx`
- **Animations:** `components/Reveal.tsx` and the Framer Motion props on cards

## Before launch
Course details, prices, ratings, learner counts and instructors are illustrative placeholders. Connect enrolment, authentication, payments, contact forms and a CMS/database before accepting real students or payments. Replace placeholder course artwork with licensed assets and configure production metadata/domain details.
# elevora-academy
