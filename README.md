# MOVRO Enterprises PVT LTD — Website

Premium static corporate website built for Vercel.

## Files
- `index.html` — website content and SEO metadata
- `styles.css` — complete responsive MOVRO design system
- `app.js` — mobile navigation, scroll effects and enquiry email composer
- `assets/movro-enterprises-logo.png` — supplied MOVRO logo
- `vercel.json` — clean URLs and security headers
- `robots.txt`
- `sitemap.xml`

## Contact configured
- Phone: +94 7 88 22 999 8
- WhatsApp: +94788229998
- Email: movroenterprisespvtltd@gmail.com

## Deploy to Vercel
### Easiest GitHub route
1. Create a new GitHub repository, e.g. `movro-enterprises`.
2. Upload all files from this folder to the repository root.
3. In Vercel, choose **Add New → Project**.
4. Import the GitHub repository.
5. Framework preset: **Other**.
6. Build command: leave empty.
7. Output directory: leave empty.
8. Deploy.
9. In **Project → Settings → Domains**, connect your MOVRO custom domain.

## Before custom-domain launch
Replace `https://your-domain.example/` in `sitemap.xml` with the final domain.

## Enquiry form behavior
The form intentionally does not fake a backend submission. It opens the visitor's email app with a prepared enquiry addressed to MOVRO.
