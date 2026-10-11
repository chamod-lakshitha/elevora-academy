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


## CI/CD and free hosting

This repository includes a GitHub Actions workflow at `.github/workflows/ci-cd.yml`.

- Pull requests to `main` run dependency installation, a TypeScript check, and a production build.
- Pushes to `main` run the same checks, then deploy to Netlify if deployment secrets are configured.
- Netlify build settings are recorded in `netlify.toml`.

### One-time Netlify setup

1. Create a free account at https://app.netlify.com/ and create a site for this project. For this GitHub Actions deployment, create the site without enabling Netlify's separate Git auto-deploy, to avoid duplicate production deploys.
2. In Netlify, create a personal access token under User settings / Applications.
3. Open the site settings and copy its Site ID.
4. In GitHub, open Settings / Secrets and variables / Actions and add:
   - `NETLIFY_AUTH_TOKEN` — the token created in Netlify.
   - `NETLIFY_SITE_ID` — the Site ID of this site.
5. Push to `main`, or run the “CI and CD” workflow manually from the Actions tab while the selected branch is `main`.

The deploy job safely skips deployment when those secrets are not configured yet. Do not commit access tokens or site credentials to the repository.

## SEO and search indexing

- Set `NEXT_PUBLIC_SITE_URL` in the production environment to the canonical public origin, including `https://` (for example, your own production domain). This value powers canonical metadata, structured data, robots.txt and the XML sitemap.
- After deployment, confirm that `/robots.txt` and `/sitemap.xml` load on the production domain.
- Verify the site in [Google Search Console](https://search.google.com/search-console/about) and submit the full production `/sitemap.xml` URL. Use URL Inspection to request indexing for the homepage, classes directory, and each course page.
- Optionally verify the site in [Bing Webmaster Tools](https://www.bing.com/webmasters/about) and submit the same sitemap.
- Search engines decide when and where to list pages. Correct technical SEO and sitemap submission improve discoverability but do not guarantee indexing, ranking, or a specific search position.
- Keep class names, course descriptions, instructor details, prices, and any ratings accurate and updated. Current course ratings, learner counts, instructor names, and prices are illustrative placeholders until verified.
