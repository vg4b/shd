import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useLanguageAwareNavigation } from '../hooks/useLanguageAwareNavigation';
import Layout from '../components/Layout';
import InfoTile from '../components/InfoTile';
import { validCoupons } from '../coupons';
import { translations } from '../i18n/translations';

interface VoucherPageProps {
  category: keyof typeof validCoupons;
}

const getLocalizedUrl = (baseUrl: string, language: string): string => {
  if (language === 'cs') return baseUrl;
  if (language === 'sk') {
    return baseUrl
      .replace('vedos.cz', 'vedos.cz/sk')
      .replace('wedos.com/cs/', 'wedos.com/sk/');
  }
  return baseUrl
    .replace('vedos.cz', 'vedos.cz/en')
    .replace('wedos.com/cs/', 'wedos.com/en/');
};

const getServiceUrl = (category: keyof typeof validCoupons, language: string): string => {
  const urls = {
    webhostingNoLimit: `https://order.wedos.com/cs/webhosting/order.html?step=1&coupon_code=${validCoupons.webhostingNoLimit.code}&variant=nolimit&ap=Lf2pCY`,
    webhostingLowCost: `https://order.wedos.com/cs/webhosting/order.html?step=1&coupon_code=${validCoupons.webhostingLowCost.code}&variant=lowcost&ap=Lf2pCY`,
    domains: "https://www.vedos.cz/domeny/?ap=Lf2pCY",
    vpsOn: "https://www.vedos.cz/vps-on/?ap=Lf2pCY",
    vpsSsd: "https://www.vedos.cz/vps-ssd/?ap=Lf2pCY",
    website: "https://www.vedos.cz/website-1-0/?ap=Lf2pCY",
    // cd: "https://www.vedos.cz/cd/?ap=Lf2pCY",
    disk: "https://www.vedos.cz/disk/?ap=Lf2pCY",
    mailhosting: "https://www.vedos.cz/mailhosting/?ap=Lf2pCY",
    renewal: "https://www.vedos.cz/?ap=Lf2pCY"
  } as const;

  return getLocalizedUrl(urls[category], language);
};

const VoucherPage: React.FC<VoucherPageProps> = ({ category }) => {
  const { t, language } = useLanguage();
  const navigateWithLanguage = useLanguageAwareNavigation();
  
  const couponData = validCoupons[category];
  const serviceKey = `services.${category}` as const;
  const seoLong: string | undefined = (translations as any)[language]?.seo?.long?.[category];
  const faqs: Array<{ q: string; a: string }> | undefined = (translations as any)[language]?.seo?.faqs?.[category];
  const faqTitle: string | undefined = (translations as any)[language]?.seo?.faqTitle;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO meta tags
  useEffect(() => {
    const categorySlug = category.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
    const currentUrl = `https://slevy-hosting-domeny.cz${language === 'cs' ? '' : `/${language}`}/${categorySlug}/`;
    const title = `${t(`${serviceKey}.title` as any)} - ${t('discountCode')}: ${couponData.code} | slevy-hosting-domeny.cz`;
    const description = `${t(`${serviceKey}.content` as any)} ${t('discountCode')}: ${couponData.code}. ${t('validUntil')} ${couponData.validUntil}.`;
    
    document.title = title;
    
    // Update lang attribute
    document.documentElement.lang = language;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Update hreflang tags
    const languages = ['cs', 'en', 'sk', 'de', 'pl', 'it'];
    languages.forEach(lang => {
      let hreflang = document.querySelector(`link[hreflang="${lang}"]`);
      if (!hreflang) {
        hreflang = document.createElement('link');
        hreflang.setAttribute('rel', 'alternate');
        hreflang.setAttribute('hreflang', lang);
        document.head.appendChild(hreflang);
      }
      const langUrl = `https://slevy-hosting-domeny.cz${lang === 'cs' ? '' : `/${lang}`}/${categorySlug}/`;
      hreflang.setAttribute('href', langUrl);
    });

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', currentUrl);

    // Update locale
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement('meta');
      ogLocale.setAttribute('property', 'og:locale');
      document.head.appendChild(ogLocale);
    }
    const localeMap: Record<string, string> = {
      cs: 'cs_CZ',
      en: 'en_US',
      sk: 'sk_SK',
      de: 'de_DE',
      pl: 'pl_PL',
      it: 'it_IT'
    };
    ogLocale.setAttribute('content', localeMap[language] || 'cs_CZ');

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = `${t('title')} | slevy-hosting-domeny.cz`;
    };
  }, [t, category, couponData, serviceKey, language]);

  const getIconForCategory = (cat: string): "hosting" | "vps" | "domain" | "website" | "disk" | "mail" | "renewal" => {
    if (cat.includes('webhosting')) return 'hosting';
    if (cat.includes('vps')) return 'vps';
    if (cat === 'domains') return 'domain';
    if (cat === 'website') return 'website';
    if (cat === 'disk') return 'disk';
    if (cat === 'mailhosting') return 'mail';
    return 'renewal';
  };

  return (
    <Layout>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="" onClick={(e) => { e.preventDefault(); navigateWithLanguage(''); }}>{t('title')}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {t(`${serviceKey}.title` as any)}
          </li>
        </ol>
      </nav>

      <div className="hero-section mb-5">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="mb-3">{t(`${serviceKey}.title` as any)}</h1>
            <p className="lead mb-4">{t(`${serviceKey}.content` as any)}</p>
            <div className="d-flex flex-wrap gap-3">
              <a 
                href={getServiceUrl(category, language)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-modern btn-modern-primary"
              >
                {t(`${serviceKey}.cta` as any)}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
              <Link to="" onClick={(e) => { e.preventDefault(); navigateWithLanguage(''); }} className="btn-modern btn-modern-outline">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                {t('title')}
              </Link>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="card shadow-lg border-0 bg-white text-dark">
              <div className="card-body p-4 text-center">
                <h5 className="text-muted mb-3 uppercase tracking-wider small fw-bold">{t('discountCode')}</h5>
                <div className="display-6 fw-bold text-primary mb-2" style={{ fontFamily: 'monospace', letterSpacing: '2px' }}>
                  {couponData.code}
                </div>
                <p className="text-muted mb-0 small">
                  {t('validUntil')} {couponData.validUntil}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 mb-5">
          <InfoTile
            title={t(`${serviceKey}.title` as any)}
            content={t(`${serviceKey}.content` as any)}
            icon={getIconForCategory(category)}
            discountCode={{
              code: couponData.code,
              validUntil: couponData.validUntil
            }}
            link={{
              url: getServiceUrl(category, language),
              text: t(`${serviceKey}.cta` as any)
            }}
          />
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="mt-5">
        <div className="row">
          <div className="col-md-8">
            <h2 className="h3 mb-4">
              {t(`coupons.${category}` as any)}
            </h2>
            <div className="seo-content">
              <p className="lead">
                {t(`${serviceKey}.content` as any)}
              </p>
              <p>
                {t('seo.useCode')} <strong>{couponData.code}</strong> {t('seo.saveOnServices')} {couponData.validUntil} {t('seo.significantDiscount')} {t(`${serviceKey}.title` as any).toLowerCase()}.
              </p>
              <p>
                {t('seo.aboutVedos')}
              </p>

              {seoLong && seoLong.split('\n\n').map((para, idx) => (
                <p key={`long-${idx}`}>{para}</p>
              ))}
              
              <h3 className="h4 mt-4 mb-3">{t('seo.howToUse')}</h3>
              <ol>
                <li>{t('seo.step1')} "{t(`${serviceKey}.cta` as any)}" {t('seo.above')}</li>
                <li>{t('seo.step2')}</li>
                <li>{t('seo.step3')} <strong>{couponData.code}</strong></li>
                <li>{t('seo.step4')}</li>
              </ol>

              <h3 className="h4 mt-4 mb-3">{t('seo.whyChoose')}</h3>
              <ul>
                <li>{t('seo.reason1')}</li>
                <li>{t('seo.reason2')}</li>
                <li>{t('seo.reason3')}</li>
                <li>{t('seo.reason4')}</li>
                <li>{t('seo.reason5')}</li>
              </ul>

              {faqs && faqs.length > 0 && (
                <>
                  <h3 className="h4 mt-4 mb-3">{faqTitle}</h3>
                  <div className="accordion" id="faq">
                    {faqs.map((item, i) => (
                      <div className="accordion-item" key={`faq-${i}`}>
                        <h2 className="accordion-header" id={`faq-h-${i}`}>
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faq-c-${i}`}
                            aria-expanded="false"
                            aria-controls={`faq-c-${i}`}
                          >
                            {item.q}
                          </button>
                        </h2>
                        <div
                          id={`faq-c-${i}`}
                          className="accordion-collapse collapse"
                          aria-labelledby={`faq-h-${i}`}
                          data-bs-parent="#faq"
                        >
                          <div className="accordion-body">{item.a}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{t('seo.moreCoupons')}</h4>
                <p className="card-text">{t('seo.exploreMore')}</p>
              <Link 
                to="" 
                onClick={(e) => { e.preventDefault(); navigateWithLanguage(''); }}
                className="btn btn-primary"
              >
                {t('seo.allCoupons')} →
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO and AI */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": t('title'),
              "item": `https://slevy-hosting-domeny.cz${language === 'cs' ? '/' : `/${language}/`}`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": t(`${serviceKey}.title` as any),
              "item": `https://slevy-hosting-domeny.cz${language === 'cs' ? '' : `/${language}`}/${category.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}/`
            }
          ]
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": t(`${serviceKey}.title` as any),
          "description": t(`${serviceKey}.content` as any),
          "brand": {
            "@type": "Brand",
            "name": "Vedos.cz"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "CZK",
            "availability": "https://schema.org/InStock",
            "validThrough": couponData.validUntil,
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "CZK",
              "eligibleQuantity": {
                "@type": "QuantitativeValue",
                "unitText": "Discount Code: " + couponData.code
              }
            },
            "seller": {
              "@type": "Organization",
              "name": "Vedos.cz"
            },
            "url": `https://slevy-hosting-domeny.cz${language === 'cs' ? '' : `/${language}`}/${category.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}/`
          }
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": t(`${serviceKey}.title` as any),
          "description": t(`${serviceKey}.content` as any),
          "url": `https://slevy-hosting-domeny.cz${language === 'cs' ? '' : `/${language}`}/${category.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}/`,
          "inLanguage": language,
          "isPartOf": {
            "@type": "WebSite",
            "name": "Slevy Hosting Domény",
            "url": "https://slevy-hosting-domeny.cz"
          },
          "about": {
            "@type": "Thing",
            "name": t(`${serviceKey}.title` as any),
            "description": `Slevový kupón ${couponData.code} na ${t(`${serviceKey}.title` as any)}`
          }
        })}
      </script>
      {faqs && faqs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
          })}
        </script>
      )}
    </Layout>
  );
};

export default VoucherPage;
