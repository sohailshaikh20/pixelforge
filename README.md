# PixelForge — Free Online Image Tools

A free, privacy-first online image toolkit. All processing happens in the browser — no server uploads.

## Tools Included
- ⚡ **Compress Image** — Reduce file size up to 90%
- 📐 **Resize Image** — Custom dimensions + social media presets
- 🔄 **Convert Format** — PNG ↔ JPG ↔ WebP
- 💧 **Add Watermark** — Protect images with text watermarks
- 🔃 **Rotate & Flip** — Rotate 90°/180°/270° or mirror
- ✂️ **Crop Image** — Coming soon

## Tech Stack
- **Next.js 14** (App Router)
- **React 18**
- **100% client-side processing** (Canvas API)
- **SEO optimized** (meta tags, sitemap, JSON-LD, robots.txt)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel (Free)

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project" → Import this repo
5. Click "Deploy"
6. Your site will be live at `your-project.vercel.app`

## Monetization Setup

### Google AdSense
1. Apply at [adsense.google.com](https://adsense.google.com)
2. Once approved, replace the ad banner placeholders in `components/SharedUI.js`

### Pro Plan (Stripe)
1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Set up a €4.99/mo subscription product
3. Add Stripe checkout to the "Go Pro" buttons

## SEO Checklist
- [x] Unique meta titles per page
- [x] Meta descriptions with keywords
- [x] Open Graph tags for social sharing
- [x] JSON-LD structured data
- [x] Auto-generated sitemap.xml
- [x] robots.txt
- [x] Canonical URLs
- [x] SEO content sections on each page
- [ ] Submit sitemap to Google Search Console
- [ ] Create OG image (1200x630px) and save as `/public/og-image.png`

## License
MIT
