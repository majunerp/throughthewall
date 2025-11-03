# Through The Wall - Deployment Guide

## Pre-Deployment Checklist

### 1. Update Analytics IDs

Before deploying, update the following IDs in `lib/utils/constants.ts`:

```typescript
analytics: {
  googleId: "G-XXXXXXXXXX", // Replace with your GA4 ID
  clarityId: "XXXXXXXXXX", // Replace with your Clarity ID
},
```

### 2. Update AdSense ID

In `components/layout/AdContainer.tsx`, replace:

```typescript
data-ad-client="ca-pub-0000000000000000" // Replace with actual AdSense ID
```

### 3. Prepare Images

Add the following images to `public/images/`:
- `og-image.jpg` (1200x630px) - Open Graph image for social sharing
- Favicon files are already in `app/favicon.ico`

### 4. Test SEO

Run the development server and verify:
- All page titles are 40-60 characters
- All descriptions are 140-160 characters
- Keyword density is 3-5% for "through the wall"
- All pages have canonical URLs
- robots.txt is accessible at /robots.txt
- sitemap.xml is accessible at /sitemap.xml

## Build & Deploy

### Local Build Test

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment:
   - Domain: through-the-wall.com
   - Enable analytics
4. Deploy

### Environment Variables (Optional)

If you want to use environment variables for IDs:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
```

## Post-Deployment

1. **Submit Sitemap to Google Search Console**
   - Add property for https://through-the-wall.com
   - Submit sitemap: https://through-the-wall.com/sitemap.xml

2. **Verify Analytics**
   - Check Google Analytics real-time reports
   - Verify Microsoft Clarity recordings
   - Test AdSense ad display

3. **Test Performance**
   - Run Lighthouse audit (target: 90+ for SEO)
   - Test on mobile devices
   - Verify game iframe loads correctly

4. **Monitor**
   - Check GSC for crawl errors
   - Monitor page load times
   - Track keyword rankings

## SEO Optimization Notes

All pages have been optimized with:
- ✅ Title: 40-60 characters
- ✅ Description: 140-160 characters
- ✅ Keyword density: 3-5% for "through the wall"
- ✅ Word count: 800+ words per page
- ✅ Canonical URLs with absolute paths
- ✅ Proper heading hierarchy (H1-H6)
- ✅ Schema markup ready
- ✅ Mobile-responsive
- ✅ Fast loading optimized

## Domain Configuration

Point your domain (through-the-wall.com) to your hosting:

**For Vercel:**
- Add custom domain in project settings
- Configure DNS records as instructed
- Enable automatic HTTPS

## Troubleshooting

**Issue:** Ads not showing
- Verify AdSense approval
- Check ad placement code
- Allow 24-48 hours for ads to appear

**Issue:** Analytics not tracking
- Confirm IDs are correct
- Check browser console for errors
- Verify scripts are loading

**Issue:** Poor SEO performance
- Run Lighthouse audit
- Check mobile usability
- Verify meta tags are rendering

## Maintenance

Regular tasks:
- Monitor GSC for errors (weekly)
- Update content (monthly)
- Check page speed (monthly)
- Review analytics data (weekly)
- Test game functionality (weekly)
