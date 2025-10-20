# SEO Quick Reference Guide

## 🚀 Quick Start - Maintaining Good SEO

### Daily Tasks (2 minutes)

1. Check that discount codes are still valid
2. Update expiration dates if needed
3. Verify site is accessible (https://slevy-hosting-domeny.cz)

### Weekly Tasks (10 minutes)

1. Check Google Search Console for errors
2. Review top performing pages
3. Check if new coupons need to be added
4. Update any expired offers

### Monthly Tasks (30 minutes)

1. Analyze traffic in Google Analytics
2. Check backlinks in Google Search Console
3. Review AI search mentions (ChatGPT, Perplexity)
4. Update seasonal content
5. Check competitors' coupons

## 📝 How to Update Discount Codes

### Location

All coupons are in: `/src/coupons.ts`

### Update Example

```typescript
export const validCoupons = {
  webhostingNoLimit: {
    code: "WN252AY1ME",
    validUntil: "31.12.2025", // ← UPDATE THIS
  },
  // ... other coupons
};
```

## 🎯 Key SEO URLs to Monitor

### Search Console

- https://search.google.com/search-console
- Check: Coverage, Performance, Enhancements

### Analytics

- https://analytics.google.com
- Check: Organic traffic, Bounce rate, Conversions

### Schema Validator

- https://validator.schema.org
- Test your structured data

### PageSpeed Insights

- https://pagespeed.web.dev
- Test: https://slevy-hosting-domeny.cz

## 🤖 AI SEO Monitoring

### How to Check AI Mentions

1. **ChatGPT**

   - Ask: "Where can I find Vedos.cz discount codes?"
   - Look for your site in the response

2. **Perplexity.ai**

   - Search: "vedos sleva 2025"
   - Check if your site appears in sources

3. **Claude**
   - Ask: "What are the current Vedos hosting discounts?"
   - Verify accurate information

### What to Look For

- ✅ Site is mentioned
- ✅ Discount codes are accurate
- ✅ Expiration dates are current
- ✅ Links work properly

## 📊 Important Keywords to Track

### Primary Keywords (Czech)

- vedos sleva
- vedos kupón
- vedos slevový kód
- webhosting sleva
- vedos akce 2025

### Long-Tail Keywords

- vedos webhosting nolimit sleva
- vedos vps sleva 33%
- vedos hosting sleva 70%
- vedos prodloužení sleva

### Track Rankings

Use: Google Search Console or tools like Ahrefs, SEMrush

## 🔧 Common SEO Fixes

### Problem: Page Not Indexed

**Solution:**

1. Check robots.txt: https://slevy-hosting-domeny.cz/robots.txt
2. Submit URL in Google Search Console
3. Check for canonical issues
4. Verify sitemap: https://slevy-hosting-domeny.cz/sitemap.xml

### Problem: Duplicate Content

**Solution:**

- Already fixed with canonical URLs
- Check that hreflang tags are present
- Verify in Search Console → Coverage

### Problem: Low Click-Through Rate

**Solution:**

1. Update meta descriptions in `src/pages/HomePage.tsx`
2. Make titles more compelling
3. Add specific discount amounts
4. Include year (2025, 2026, etc.)

### Problem: AI Not Finding Site

**Solution:**

1. Verify robots.txt allows AI crawlers
2. Check ai-plugin.json is accessible
3. Ensure structured data is valid
4. Wait 1-2 weeks for reindexing

## 📈 Content Ideas for Traffic Growth

### Blog Post Ideas

1. "5 Ways to Save Money on Web Hosting in 2025"
2. "Comparison: Wedos vs Vedos Hosting"
3. "How to Choose the Right Hosting Plan"
4. "WordPress Optimization Tips for Czech Websites"
5. "VPS vs Shared Hosting: Which is Better?"

### Location

Create blog in: `/src/pages/BlogPage.tsx` (future enhancement)

## 🎨 Quick SEO Wins

### 1. Add New Coupon

1. Update `/src/coupons.ts`
2. Add translations in `/src/i18n/translations.ts`
3. Rebuild: `npm run build`
4. Deploy

### 2. Update Expiration Date

1. Edit `/src/coupons.ts`
2. Change `validUntil` field
3. Rebuild and deploy

### 3. Add New Language

1. Update `Language` type in `translations.ts`
2. Add translations object
3. Update `LanguageContext.tsx`
4. Update `App.tsx` routes
5. Update `LanguagePicker.tsx`
6. Update `sitemap.xml`
7. Rebuild and deploy

## 🚨 Red Flags to Watch For

### Bad Signs

- ⚠️ Traffic suddenly drops >50%
- ⚠️ Google Search Console shows errors
- ⚠️ Site is slow (>3 seconds load time)
- ⚠️ Discount codes don't work
- ⚠️ Mobile version broken

### Immediate Actions

1. Check if site is live
2. Verify discount codes still work
3. Test on mobile device
4. Check Google Search Console
5. Review recent changes

## 🎓 Learning Resources

### Essential Reading

- Google Search Central: https://developers.google.com/search
- Schema.org Documentation: https://schema.org
- Web.dev by Google: https://web.dev

### Tools You Need

1. **Google Search Console** (Free) - MUST HAVE
2. **Google Analytics** (Free) - MUST HAVE
3. **PageSpeed Insights** (Free) - MUST HAVE
4. Ahrefs or SEMrush (Paid) - Nice to have

## 💡 Pro Tips

### Tip 1: Fresh Content Signals

Update the year in your title tag annually:

- 2025 → 2026 in January
- Signals freshness to search engines

### Tip 2: Seasonal Promotions

Create special coupon pages for:

- Black Friday (November)
- Cyber Monday
- New Year (January)
- Back to School (September)

### Tip 3: User Signals

Improve these for better SEO:

- Fast load times (<2 seconds)
- Low bounce rate
- High time on site
- Multiple page visits

### Tip 4: Link Building

Get links from:

- Czech web development blogs
- Hosting comparison sites
- Czech business directories
- Tech forums (Root.cz, Živě.cz)

### Tip 5: AI Optimization

To be recommended by AI:

- Keep content accurate and updated
- Use clear, factual language
- Include specific numbers (70%, 33%)
- Add FAQs to every page
- Allow all AI crawlers

## 📞 Emergency Contacts

### Site Issues

- Check: GitHub repository
- Review: Recent deployments
- Rollback: If needed

### SEO Consultation Needed?

1. Major traffic drop
2. Google penalty
3. Site migration
4. Major redesign

## ✅ Monthly SEO Checklist

Print this and check monthly:

- [ ] All discount codes verified
- [ ] Expiration dates updated
- [ ] Google Search Console reviewed
- [ ] Analytics data analyzed
- [ ] AI search mentions checked
- [ ] Page speed tested (<3 seconds)
- [ ] Mobile version tested
- [ ] New content published
- [ ] Backlinks acquired
- [ ] Sitemap updated
- [ ] Structured data validated
- [ ] Competitor analysis done

---

**Remember**: SEO is a marathon, not a sprint. Consistent, quality updates beat big one-time efforts.

**Last Updated**: October 2025
