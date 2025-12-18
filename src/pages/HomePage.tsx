import React, { useEffect } from "react";
import Layout from "../components/Layout";
import CouponList from "../components/CouponList";
import InfoTile from "../components/InfoTile";
import { useLanguage } from "../contexts/LanguageContext";
import { DiscountCoupon } from "../types";
import { validCoupons } from "../coupons";

const getLocalizedUrl = (baseUrl: string, language: string): string => {
  if (language === "cs") return baseUrl;
  if (language === "sk") {
    return baseUrl
      .replace("vedos.cz", "vedos.cz/sk")
      .replace("wedos.com/cs/", "wedos.com/sk/");
  }
  return baseUrl
    .replace("vedos.cz", "vedos.cz/en")
    .replace("wedos.com/cs/", "wedos.com/en/");
};

const HomePage: React.FC = () => {
  const { t, language } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO meta tags for homepage
  useEffect(() => {
    const title =
      language === "cs"
        ? "Vedos Slevové Kupóny 2025 - Až 70% Sleva na Webhosting, VPS ON, VPS SSD a Domény"
        : `${t("title")} | slevy-hosting-domeny.cz`;
    const description = t("subtitle");
    const currentUrl = `https://slevy-hosting-domeny.cz${
      language === "cs" ? "/" : `/${language}/`
    }`;

    document.title = title;

    // Update lang attribute
    document.documentElement.lang = language;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentUrl);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title);

    let ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", currentUrl);

    // Update locale
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement("meta");
      ogLocale.setAttribute("property", "og:locale");
      document.head.appendChild(ogLocale);
    }
    const localeMap: Record<string, string> = {
      cs: "cs_CZ",
      en: "en_US",
      sk: "sk_SK",
      de: "de_DE",
      pl: "pl_PL",
      it: "it_IT",
    };
    ogLocale.setAttribute("content", localeMap[language] || "cs_CZ");
  }, [t, language]);

  const coupons: DiscountCoupon[] = [
    {
      description: t("coupons.webhostingNoLimit") + ":",
      code: validCoupons.webhostingNoLimit.code,
    },
    // {
    //   description: t("coupons.webhostingLowCost") + ":",
    //   code: validCoupons.webhostingLowCost.code,
    // },
    {
      description: t("coupons.domains") + ":",
      code: validCoupons.domains.code,
    },
    {
      description: t("coupons.vpsOn") + ":",
      code: validCoupons.vpsOn.code,
    },
    {
      description: t("coupons.vpsSsd") + ":",
      code: validCoupons.vpsSsd.code,
    },
    {
      description: t("coupons.website") + ":",
      code: validCoupons.website.code,
    },
    // {
    //   description: t('coupons.cd') + ':',
    //   code: validCoupons.cd.code
    // },
    {
      description: t("coupons.disk") + ":",
      code: validCoupons.disk.code,
    },
    {
      description: t("coupons.mailhosting") + ":",
      code: validCoupons.mailhosting.code,
    },
    {
      description: t("coupons.renewal") + ":",
      code: validCoupons.renewal.code,
      validUntil: validCoupons.renewal.validUntil,
      additionalInfo: {
        text: t("coupons.renewalInfo.text"),
        linkText: t("coupons.renewalInfo.linkText"),
        linkUrl: t("coupons.renewalInfo.linkUrl"),
      },
    },
  ];

  return (
    <Layout>
      {/* Structured Data for AI and Search Engines */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Slevy Hosting Domény",
          url: `https://slevy-hosting-domeny.cz${
            language === "cs" ? "/" : `/${language}/`
          }`,
          description: t("subtitle"),
          inLanguage: language,
          potentialAction: {
            "@type": "SearchAction",
            target: `https://slevy-hosting-domeny.cz${
              language === "cs" ? "/" : `/${language}/`
            }?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Slevy Hosting Domény",
          url: "https://slevy-hosting-domeny.cz",
          logo: "https://slevy-hosting-domeny.cz/android-chrome-512x512.png",
          description:
            "Aktuální slevové kupóny na Vedos.cz webhosting, VPS servery, domény a další služby",
          sameAs: ["https://vedos.cz"],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: [
              "Czech",
              "English",
              "Slovak",
              "German",
              "Polish",
              "Italian",
            ],
          },
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Aktuální slevové kupóny Vedos.cz",
          description: "Seznam aktuálních slevových kupónů na služby Vedos.cz",
          numberOfItems: coupons.length,
          itemListElement: coupons.map((coupon, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Offer",
              name: coupon.description,
              description: coupon.description,
              priceSpecification: {
                "@type": "PriceSpecification",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  unitText: `Discount Code: ${coupon.code}`,
                },
              },
              seller: {
                "@type": "Organization",
                name: "Vedos.cz",
              },
            },
          })),
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: t("title"),
              item: `https://slevy-hosting-domeny.cz${
                language === "cs" ? "/" : `/${language}/`
              }`,
            },
          ],
        })}
      </script>
      <div className="p-2 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">{t("title")}</h1>
          <p className="col-md-8 fs-4">{t("subtitle")}</p>
          <CouponList coupons={coupons} />
          <div className="text-left">
            <a
              href={getLocalizedUrl("https://vedos.cz/?ap=Lf2pCY", language)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg mt-2"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <InfoTile
          title={t("services.webhostingNoLimit.title")}
          content={t("services.webhostingNoLimit.content")}
          bgColor="#003484"
          textColor="light"
          discountCode={{
            code: validCoupons.webhostingNoLimit.code,
            validUntil: validCoupons.webhostingNoLimit.validUntil,
          }}
          link={{
            url: getLocalizedUrl(
              "https://order.wedos.com/cs/webhosting/order.html?step=1&coupon_code=WN252AY1ME&variant=nolimit&ap=Lf2pCY",
              language
            ),
            text: t("services.webhostingNoLimit.cta"),
          }}
          internalLink="/webhosting-nolimit"
        />
        {/* <InfoTile
          title={t("services.webhostingLowCost.title")}
          content={t("services.webhostingLowCost.content")}
          bgColor="#003484"
          textColor="light"
          discountCode={{
            code: coupons[1].code,
            validUntil: validCoupons.webhostingLowCost.validUntil,
          }}
          link={{
            url: getLocalizedUrl(
              "https://order.wedos.com/cs/webhosting/order.html?step=1&coupon_code=WN251YEAKI&variant=lowcost&ap=Lf2pCY",
              language
            ),
            text: t("services.webhostingLowCost.cta"),
          }}
          internalLink="/webhosting-lowcost"
        /> */}
        {
          <InfoTile
            title={t("services.domains.title")}
            content={t("services.domains.content")}
            bgColor="#003484"
            textColor="light"
            discountCode={{
              code: validCoupons.domains.code,
              validUntil: validCoupons.domains.validUntil,
            }}
            link={{
              url: getLocalizedUrl(
                "https://www.vedos.cz/domeny/?ap=Lf2pCY",
                language
              ),
              text: t("services.domains.cta"),
            }}
            internalLink="/domains"
          />
        }
        <InfoTile
          title={t("services.vpsOn.title")}
          content={t("services.vpsOn.content")}
          bgColor="#003484"
          textColor="light"
          discountCode={{
            code: validCoupons.vpsOn.code,
            validUntil: validCoupons.vpsOn.validUntil,
          }}
          link={{
            url: getLocalizedUrl(
              "https://www.vedos.cz/vps-on/?ap=Lf2pCY",
              language
            ),
            text: t("services.vpsOn.cta"),
          }}
          internalLink="/vps-on"
        />
        <InfoTile
          title={t("services.vpsSsd.title")}
          content={t("services.vpsSsd.content")}
          bgColor="#003484"
          textColor="light"
          discountCode={{
            code: validCoupons.vpsSsd.code,
            validUntil: validCoupons.vpsSsd.validUntil,
          }}
          link={{
            url: getLocalizedUrl(
              "https://www.vedos.cz/vps-ssd/?ap=Lf2pCY",
              language
            ),
            text: t("services.vpsSsd.cta"),
          }}
          internalLink="/vps-ssd"
        />
        <InfoTile
          title={t("services.website.title")}
          content={t("services.website.content")}
          bgColor="#003484"
          textColor="light"
          discountCode={{
            code: validCoupons.website.code,
            validUntil: validCoupons.website.validUntil,
          }}
          link={{
            url: getLocalizedUrl(
              "https://www.vedos.cz/website-1-0/?ap=Lf2pCY",
              language
            ),
            text: t("services.website.cta"),
          }}
          internalLink="/website"
        />
        {/* <InfoTile
          title={t('services.cd.title')}
          content={t('services.cd.content')}
          bgColor="#003484"
          textColor="light"
          discountCode={{
            code: coupons[6].code,
            validUntil: validCoupons.cd.validUntil
          }}
          link={{
            url: getLocalizedUrl("https://www.vedos.cz/cd/?ap=Lf2pCY", language),
            text: t('services.cd.cta')
          }}
          internalLink="/cd"
        /> */}
        <InfoTile
          title={t("services.disk.title")}
          content={t("services.disk.content")}
          bgColor="#003484"
          textColor="light"
          discountCode={{
            code: validCoupons.disk.code,
            validUntil: validCoupons.disk.validUntil,
          }}
          link={{
            url: getLocalizedUrl(
              "https://www.vedos.cz/disk/?ap=Lf2pCY",
              language
            ),
            text: t("services.disk.cta"),
          }}
          internalLink="/disk"
        />
        <InfoTile
          title={t("services.mailhosting.title")}
          content={t("services.mailhosting.content")}
          bgColor="#003484"
          textColor="light"
          discountCode={{
            code: validCoupons.mailhosting.code,
            validUntil: validCoupons.mailhosting.validUntil,
          }}
          link={{
            url: getLocalizedUrl(
              "https://www.vedos.cz/mailhosting/?ap=Lf2pCY",
              language
            ),
            text: t("services.mailhosting.cta"),
          }}
          internalLink="/mailhosting"
        />
        <InfoTile
          title={t("services.renewal.title")}
          content={t("services.renewal.content")}
          bgColor="#003484"
          textColor="light"
          discountCode={{
            code: validCoupons.renewal.code,
            validUntil: validCoupons.renewal.validUntil,
          }}
          link={{
            url: getLocalizedUrl("https://www.vedos.cz/?ap=Lf2pCY", language),
            text: t("services.renewal.cta"),
          }}
          internalLink="/renewal"
        />
      </div>
    </Layout>
  );
};

export default HomePage;
