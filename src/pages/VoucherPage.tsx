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
    // domains: "https://www.vedos.cz/domeny/?ap=Lf2pCY",
    vps: "https://www.vedos.cz/vps-on/?ap=Lf2pCY",
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
    const title = `${t(`${serviceKey}.title` as any)} - ${t('discountCode')}: ${couponData.code} | slevy-hosting-domeny.cz`;
    const description = `${t(`${serviceKey}.content` as any)} ${t('discountCode')}: ${couponData.code}. ${t('validUntil')} ${couponData.validUntil}.`;
    
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

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
    ogUrl.setAttribute('content', `https://slevy-hosting-domeny.cz/${category.replace(/([A-Z])/g, '-$1').toLowerCase()}`);

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = `${t('title')} | slevy-hosting-domeny.cz`;
    };
  }, [t, category, couponData, serviceKey]);

  return (
    <Layout>
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="" onClick={(e) => { e.preventDefault(); navigateWithLanguage(''); }}>{t('title')}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {t(`${serviceKey}.title` as any)}
          </li>
        </ol>
      </nav>

      <div className="p-2 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">
            {t(`${serviceKey}.title` as any)}
          </h1>
          <p className="col-md-8 fs-4 mb-4">
            {t(`${serviceKey}.content` as any)}
          </p>
          
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{t('discountCode')}</h5>
                  <h2 className="text-primary">{couponData.code}</h2>
                  <p className="card-text text-muted">
                    {t('validUntil')} {couponData.validUntil}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-left">
            <a 
              href={getServiceUrl(category, language)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-lg me-3 mb-2 mb-md-0"
            >
              {t(`${serviceKey}.cta` as any)}
            </a>
            <Link to="" onClick={(e) => { e.preventDefault(); navigateWithLanguage(''); }} className="btn btn-outline-secondary btn-lg">
              ← {t('title')}
            </Link>
          </div>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-12">
          <InfoTile
            title={t(`${serviceKey}.title` as any)}
            content={t(`${serviceKey}.content` as any)}
            bgColor="#003484"
            textColor="light"
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

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Offer",
          "name": t(`${serviceKey}.title` as any),
          "description": t(`${serviceKey}.content` as any),
          "seller": {
            "@type": "Organization",
            "name": "Vedos.cz"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "CZK",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "unitText": "Discount Code: " + couponData.code
            }
          },
          "validThrough": couponData.validUntil,
          "url": `https://slevy-hosting-domeny.cz/${category.replace(/([A-Z])/g, '-$1').toLowerCase()}`
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
