# Veltara International — React website

A responsive React + Vite website for Veltara International, an India-based merchant exporter headquartered in Mysuru, Karnataka.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Included
- Responsive header and mobile navigation
- Multi-category product catalog with category filtering and product search
- Product detail overlays with shareable `/products/<product-slug>` URLs
- Export information page at `/export`
- Contact and quotation form at `/contact`, with product preselection from quote links

## Before publishing
- Replace the demo social links and product imagery with approved company assets.
- Connect the quotation form to a backend or CRM if email-client handoff is not sufficient. The current form prepares an email using `mailto:`.
- Configure the production host to serve the SPA entry point for `/export`, `/contact`, and `/products/*` routes.
- Confirm contact information and product details before release.
- Product photos are local files in `public/images/products`; image credits are shown where required.

## Deploy to Vercel
- Import this GitHub repository into Vercel.
- Keep the detected Vite settings: build command `npm run build`, output directory `dist`.
- `vercel.json` rewrites client-side routes to the React app entry point.
