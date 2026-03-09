# Sudut Kedai × Waroeng Soeroboyo Lawas
### Restaurant & Café Landing Page — Cileungsi, Bogor

A modern landing page for a dual-concept F&B brand combining a contemporary café
(Sudut Kedai) with an authentic East Javanese heritage kitchen (Waroeng Soeroboyo Lawas).

**Live:** [sudutkedai.netlify.app](https://sudutkedai.netlify.app)

---

## Tech Stack
- [Astro 4](https://astro.build) — Static Site Generator
- Vanilla CSS with Custom Properties
- Vanilla JavaScript
- Netlify — Deployment & CI/CD

## Features
- Dual brand showcase with distinct visual identities
- Menu data managed from a single source: `src/data/menu.ts`
- Interactive tabbed menu (3 categories, 50+ items)
- Buffet event packages (3 tiers)
- 2 branch locations with Google Maps embed
- WhatsApp direct CTA
- Scroll reveal animations & custom cursor
- Fully mobile responsive
- SEO-ready with Open Graph meta tags

## Getting Started
```bash
npm install       # Install dependencies
npm run dev       # Dev server → localhost:4321
npm run build     # Production build
npm run preview   # Preview production build
```

## Project Structure
```
src/
├── components/     # Navbar, Hero, MarqueeBand, MenuSection
├── data/
│   └── menu.ts     # Edit all menu items here
├── layouts/
│   └── Layout.astro  # SEO meta tags
├── pages/
│   └── index.astro   # Main page
└── styles/
    └── global.css    # CSS variables & utilities
```

## Updating Menu Items

All menu data lives in `src/data/menu.ts`.
Edit once → updates everywhere automatically.

## Deployment

Hosted on Netlify with automatic deployments.
Every `git push` to `main` triggers a new build.

## Developer
Built by Jiku — [@jikuown](https://instagram.com/jikuown)
