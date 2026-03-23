# PixelForge — Complete Deployment Guide
## From Zero to Live Website (Step by Step)

---

## PHASE 1: Set Up Your Accounts (10 minutes)

### Step 1: Create a GitHub Account
1. Go to **github.com**
2. Click **Sign up**
3. Enter your email, create a password, pick a username
4. Verify your email

### Step 2: Create a Vercel Account
1. Go to **vercel.com**
2. Click **Sign Up**
3. Choose **Continue with GitHub**
4. Authorize Vercel to access your GitHub

---

## PHASE 2: Upload Project to GitHub (5 minutes)

### Step 3: Create a New Repository
1. Go to **github.com/new**
2. Repository name: `pixelforge`
3. Description: `Free online image tools - compress, resize, convert`
4. Select **Public** (required for free Vercel hosting)
5. Click **Create repository**

### Step 4: Upload the Project Files
**Option A — Easy Way (Browser Upload):**
1. Unzip the `pixelforge-project.zip` file on your computer
2. In your new GitHub repo, click **"uploading an existing file"**
3. Drag and drop ALL files and folders from the `pixelforge` folder
4. Click **Commit changes**

**Option B — Command Line (if you have Git installed):**
```bash
# Unzip the project
unzip pixelforge-project.zip
cd pixelforge

# Initialize git and push
git init
git add .
git commit -m "Initial commit - PixelForge"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pixelforge.git
git push -u origin main
```

---

## PHASE 3: Deploy to Vercel (3 minutes)

### Step 5: Import and Deploy
1. Go to **vercel.com/new**
2. You'll see your `pixelforge` repo listed
3. Click **Import**
4. Framework Preset should auto-detect **Next.js**
5. Click **Deploy**
6. Wait 1-2 minutes for the build to complete
7. Your site is now LIVE at: `pixelforge-xxxxx.vercel.app`

### Step 6: Set a Custom Subdomain (Free)
1. In Vercel dashboard, go to your project → **Settings** → **Domains**
2. You can change it to something like: `pixelforge.vercel.app`
   (if available, or try `pixelforge-tools.vercel.app`)

---

## PHASE 4: SEO Setup — Get Found on Google (15 minutes)

### Step 7: Update URLs in the Code
Before or after deploying, update the base URL in these files if your
Vercel domain is different from `pixelforge.vercel.app`:

- `app/layout.js` — Change `metadataBase` URL
- `app/sitemap.js` — Change `baseUrl`
- `app/robots.js` — Change sitemap URL
- Each tool's `page.js` — Change `alternates.canonical` URLs

### Step 8: Submit to Google Search Console
1. Go to **search.google.com/search-console**
2. Click **Add Property**
3. Choose **URL prefix**
4. Enter your Vercel URL: `https://pixelforge.vercel.app`
5. Verify ownership:
   - Choose **HTML tag** method
   - Copy the meta tag content value
   - Add it to `app/layout.js` in the `verification` object:
     ```js
     verification: {
       google: 'your-verification-code-here',
     },
     ```
   - Redeploy (Vercel auto-deploys when you push to GitHub)
6. After verification, go to **Sitemaps** in the left menu
7. Submit: `https://pixelforge.vercel.app/sitemap.xml`

### Step 9: Submit to Bing Webmaster Tools
1. Go to **bing.com/webmasters**
2. Sign in and add your site
3. Submit your sitemap URL

---

## PHASE 5: Monetization Setup

### Step 10: Google AdSense (Ad Revenue)
**When to apply:** Wait until you have ~20-30 pages of content and
some traffic (even 50-100 daily visitors)

1. Go to **adsense.google.com**
2. Apply with your site URL
3. Once approved, get your ad code
4. Replace the placeholder `<AdBanner>` components in
   `components/SharedUI.js` with actual AdSense code

### Step 11: Stripe Payment (Pro Plan)
1. Create account at **stripe.com**
2. Create a product: "PixelForge Pro" at €4.99/month
3. Use Stripe Checkout for the "Go Pro" buttons
4. You'll need to add a simple API route — ask me when you're ready!

---

## PHASE 6: Growth Strategies

### Content Marketing (Free Traffic)
Add a `/blog` section with articles like:
- "How to Compress Images for Your Website Without Losing Quality"
- "PNG vs JPG vs WebP: Which Format Should You Use?"
- "Best Image Sizes for Every Social Media Platform in 2026"

Each article targets keywords people search for → free Google traffic

### Social Media
- Share on Reddit: r/webdev, r/InternetIsBeautiful, r/SideProject
- Post on Product Hunt (can get 1000+ visitors in a day)
- Share on Twitter/X with a demo video

### Grow the Tool Suite
High-traffic tools to add next:
- Background remover (AI-powered — huge demand)
- PDF to Image converter
- Image to PDF converter
- Bulk/batch processing (Pro feature)
- Color palette extractor
- Screenshot tool

---

## QUICK REFERENCE

| What | Where |
|------|-------|
| Your site | `https://pixelforge.vercel.app` |
| Vercel dashboard | `vercel.com/dashboard` |
| Google Search Console | `search.google.com/search-console` |
| Google AdSense | `adsense.google.com` |
| Stripe | `stripe.com` |
| GitHub repo | `github.com/YOUR_USERNAME/pixelforge` |

---

## TROUBLESHOOTING

**Build fails on Vercel?**
- Check the build logs in Vercel dashboard
- Make sure all files are uploaded correctly
- The project should have `package.json` at the root level

**Site not appearing on Google?**
- It takes 3-14 days for Google to index new sites
- Make sure you submitted the sitemap
- Keep adding content — Google ranks active sites higher

**Want to use a custom domain?**
- Buy a domain (Namecheap, Cloudflare — ~€8-12/year)
- In Vercel: Settings → Domains → Add your domain
- Update DNS records as Vercel instructs

---

Good luck with PixelForge! 🚀
