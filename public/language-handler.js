// Set the correct language attribute and canonical URL based on the current path
document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    cs: {
      description:
        "Slevy na Wedos Webhosting a domény - Získejte až 70% slevu na webhosting, domény, VPS a další služby. Aktuální slevové kupóny pro Wedos.",
      keywords:
        "wedos, vedos, Webhosting NoLimit, domény, wedos, webhosting wedos, wedos sleva, webhosting vedos, wedos slevový kupon, wedos kupony, wedos sleva, wedos akce, wedos hosting sleva, sleva na prodloužení wedos",
      title: "Slevy na webhosting, servery, domény | slevy-hosting-domeny.cz",
      structuredName: "Slevy na webhosting a domény",
      structuredDescription:
        "Slevy na Wedos Webhosting a domény - Získejte až 70% slevu na webhosting, domény, VPS a další služby.",
    },
    en: {
      description:
        "Discounts on Wedos Webhosting and domains - Get up to 70% off on webhosting, domains, VPS and other services. Current discount coupons for Wedos.",
      keywords:
        "wedos, vedos, Webhosting NoLimit, domains, wedos, webhosting wedos, wedos discount, webhosting vedos, wedos discount coupon, wedos coupons, wedos sale, wedos deals, wedos hosting discount, wedos renewal discount",
      title:
        "Discounts on webhosting, servers, domains | slevy-hosting-domeny.cz",
      structuredName: "Discounts on webhosting and domains",
      structuredDescription:
        "Discounts on Wedos Webhosting and domains - Get up to 70% off on webhosting, domains, VPS and other services.",
    },
    pl: {
      description:
        "Rabaty na Wedos Webhosting i domeny - Otrzymaj do 70% zniżki na hosting, domeny, VPS i inne usługi. Aktualne kupony rabatowe dla Wedos.",
      keywords:
        "wedos, vedos, Webhosting NoLimit, domeny, wedos, webhosting wedos, wedos rabat, webhosting vedos, wedos kupon rabatowy, wedos kupony, wedos promocja, wedos oferty, wedos hosting rabat, wedos przedłużenie rabat",
      title: "Rabaty na hosting, serwery, domeny | slevy-hosting-domeny.cz",
      structuredName: "Rabaty na hosting i domeny",
      structuredDescription:
        "Rabaty na Wedos Webhosting i domeny - Otrzymaj do 70% zniżki na hosting, domeny, VPS i inne usługi.",
    },
    sk: {
      description:
        "Zľavy na Wedos Webhosting a domény - Získajte až 70% zľavu na webhosting, domény, VPS a ďalšie služby. Aktuálne zľavové kupóny pre Wedos.",
      keywords:
        "wedos, vedos, Webhosting NoLimit, domény, wedos, webhosting wedos, wedos zľava, webhosting vedos, wedos zľavový kupón, wedos kupóny, wedos zľava, wedos akcie, wedos hosting zľava, zľava na predĺženie wedos",
      title: "Zľavy na webhosting, servery, domény | slevy-hosting-domeny.cz",
      structuredName: "Zľavy na webhosting a domény",
      structuredDescription:
        "Zľavy na Wedos Webhosting a domény - Získajte až 70% zľavu na webhosting, domény, VPS a ďalšie služby.",
    },
    de: {
      description:
        "Rabatte auf Wedos Webhosting und Domains - Erhalten Sie bis zu 70% Rabatt auf Webhosting, Domains, VPS und andere Dienste. Aktuelle Rabattgutscheine für Wedos.",
      keywords:
        "wedos, vedos, Webhosting NoLimit, Domains, wedos, webhosting wedos, wedos Rabatt, webhosting vedos, wedos Gutscheincode, wedos Gutscheine, wedos Angebot, wedos Aktion, wedos hosting Rabatt, wedos Verlängerung Rabatt",
      title:
        "Rabatte auf Webhosting, Server, Domains | slevy-hosting-domeny.cz",
      structuredName: "Rabatte auf Webhosting und Domains",
      structuredDescription:
        "Rabatte auf Wedos Webhosting und Domains - Erhalten Sie bis zu 70% Rabatt auf Webhosting, Domains, VPS und andere Dienste.",
    },
  };

  const baseUrl = "https://slevy-hosting-domeny.cz";
  const html = document.documentElement;
  const canonical = document.querySelector('link[rel="canonical"]');
  const ogUrl = document.querySelector('meta[property="og:url"]');
  const twitterUrl = document.querySelector('meta[property="twitter:url"]');

  function updateUrls(url) {
    if (canonical) canonical.href = url;
    if (ogUrl) ogUrl.content = url;
    if (twitterUrl) twitterUrl.content = url;
  }

  function updateMetaTags(lang) {
    const trans = translations[lang];

    // Update meta description
    document.querySelector('meta[name="description"]').content =
      trans.description;
    document.querySelector('meta[name="keywords"]').content = trans.keywords;

    // Update title
    document.title = trans.title;

    // Update Open Graph tags
    document.querySelector('meta[property="og:title"]').content = trans.title;
    document.querySelector('meta[property="og:description"]').content =
      trans.description;

    // Update Twitter Card tags
    document.querySelector('meta[property="twitter:title"]').content =
      trans.title;
    document.querySelector('meta[property="twitter:description"]').content =
      trans.description;

    // Update structured data
    const structuredData = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (structuredData) {
      const data = JSON.parse(structuredData.textContent);
      data.name = trans.structuredName;
      data.description = trans.structuredDescription;
      structuredData.textContent = JSON.stringify(data, null, 2);
    }
  }

  // Handle initial load
  const path = window.location.pathname;
  let currentLang = "cs";

  if (path.startsWith("/en")) {
    currentLang = "en";
    html.lang = "en";
    updateUrls(`${baseUrl}/en`);
  } else if (path.startsWith("/pl")) {
    currentLang = "pl";
    html.lang = "pl";
    updateUrls(`${baseUrl}/pl`);
  } else if (path.startsWith("/sk")) {
    currentLang = "sk";
    html.lang = "sk";
    updateUrls(`${baseUrl}/sk`);
  } else if (path.startsWith("/de")) {
    currentLang = "de";
    html.lang = "de";
    updateUrls(`${baseUrl}/de`);
  } else {
    currentLang = "cs";
    html.lang = "cs";
    updateUrls(baseUrl);
  }

  // Update meta tags on initial load
  updateMetaTags(currentLang);

  // Listen for language changes from React
  window.addEventListener("languageChange", function (event) {
    const newLang = event.detail.language;
    html.lang = newLang;
    updateUrls(newLang === "cs" ? baseUrl : `${baseUrl}/${newLang}`);
    updateMetaTags(newLang);
  });
});
