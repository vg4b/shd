export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  language: "cs" | "en" | "pl" | "sk" | "de" | "it";
  publishedAt: string;
  updatedAt?: string;
  content: string[];
  productLinks: { label: string; url: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "wordpress-hosting-lowcost-vs-nolimit",
    title: "WP LowCost vs WP NoLimit: co vybrat pro WordPress v roce 2026",
    excerpt:
      "Srozumitelné srovnání dvou WordPress variant od VEDOS: kdy stačí LowCost a kdy se vyplatí jít do NoLimit.",
    category: "WordPress hosting",
    language: "cs",
    publishedAt: "2026-02-17",
    content: [
      "WordPress hosting je dnes nejrychlejší cesta, jak spustit blog, firemní web nebo menší e-shop. U VEDOS najdete dvě hlavní varianty: WP LowCost a WP NoLimit.",
      "WP LowCost je ideální pro menší projekty, kde je důležitá cena a jednoduchý start. Hodí se pro osobní blogy, weby živnostníků nebo menší prezentační stránky.",
      "WP NoLimit je lepší volba pro firemní weby a projekty, které rostou. Pokud očekáváte vyšší návštěvnost, více pluginů nebo náročnější šablonu, NoLimit vám dá větší rezervu výkonu.",
      "V obou případech dává smysl řešit i technické minimum: pravidelné zálohy, aktualizace WordPressu, bezpečnostní plugin a základní cachování.",
      "Praktické doporučení: začněte s variantou, která odpovídá aktuální velikosti projektu. Jakmile web poroste, přechod na vyšší variantu je obvykle jednodušší a levnější, než řešit dlouhodobé limity levnějšího tarifu.",
      "Pokud chcete ušetřit při startu, sledujte slevové kupóny. U WordPress hostingu se často vyplatí zejména první fakturační období."
    ],
    productLinks: [
      {
        label: "WordPress hosting (WP LowCost + WP NoLimit)",
        url: "https://www.vedos.cz/wordpress-hosting/?ap=Lf2pCY"
      }
    ]
  },
  {
    slug: "vps-on-vs-vps-ssd",
    title: "VPS ON vs VPS SSD: praktické rozdíly a rozhodovací checklist",
    excerpt:
      "Nevíte, jestli vzít VPS ON nebo VPS SSD? Tady je praktický přehled podle typu projektu, výkonu a flexibility.",
    category: "VPS",
    language: "cs",
    publishedAt: "2026-02-17",
    content: [
      "Výběr mezi VPS ON a VPS SSD není jen o ceně. Jde hlavně o to, jak moc potřebujete flexibilitu, garantovaný výkon a jak se bude projekt vyvíjet v čase.",
      "VPS ON je vhodné pro týmy, které chtějí konfiguraci více na míru a počítají s častějšími změnami parametrů. Dává smysl u aplikací, které se rychle vyvíjejí.",
      "VPS SSD je skvělá volba tam, kde potřebujete předvídatelné prostředí a stabilní výkon. Typicky firemní systémy, produkční weby nebo služby se stálou zátěží.",
      "Rozhodovací checklist: 1) Jak často měníte parametry serveru? 2) Potřebujete spíš pružnost, nebo konzistentní výkon? 3) Máte interní DevOps, nebo preferujete jednodušší provoz?",
      "Doporučení z praxe: pokud si nejste jistí, začněte variantou, která lépe sedí aktuálnímu provozu, a nastavte měření výkonu od prvního dne (CPU, RAM, disk I/O, response time).",
      "Správná volba VPS je ta, která vám dává rezervu na růst bez zbytečného přeplácení."
    ],
    productLinks: [
      {
        label: "VPS ON",
        url: "https://www.vedos.cz/vps-on/?ap=Lf2pCY"
      },
      {
        label: "VPS SSD",
        url: "https://www.vedos.cz/vps-ssd/?ap=Lf2pCY"
      }
    ]
  },
  {
    slug: "jak-vybrat-domenu-a-neudelat-chybu",
    title: "Jak vybrat doménu a neudělat drahou chybu",
    excerpt:
      "5 praktických pravidel, jak vybrat doménu pro nový web tak, aby fungovala marketingově i dlouhodobě.",
    category: "Domény",
    language: "cs",
    publishedAt: "2026-02-17",
    content: [
      "Doména je základ značky. Pokud vyberete špatně, může vás to stát čas, důvěru i peníze při budoucím rebrandingu.",
      "Pravidlo 1: držte název krátký a zapamatovatelný. Čím méně znaků a bez komplikovaných spojovníků, tím lépe.",
      "Pravidlo 2: vybírejte koncovku podle trhu. Pro ČR obvykle .cz, pro mezinárodní projekty .com, případně tematické TLD jen tam, kde dávají jasný smysl.",
      "Pravidlo 3: ověřte kolize značky. Zkontrolujte dostupnost na sociálních sítích a ideálně i základní právní kolize názvu.",
      "Pravidlo 4: myslete na budoucí růst. Název by neměl být příliš úzký, pokud plánujete rozšíření služeb.",
      "Pravidlo 5: aktivujte hned po registraci správné DNS, přesměrování variant a základní ochranu e-mailové reputace (SPF, DKIM, DMARC).",
      "Dobře zvolená doména vám usnadní SEO, brand i důvěru zákazníků. Špatně zvolená doména vás bude brzdit roky."
    ],
    productLinks: [
      {
        label: "Domény (sleva 50 %)",
        url: "https://www.vedos.cz/domeny/?ap=Lf2pCY"
      }
    ]
  },
  {
    slug: "how-to-choose-wordpress-hosting-2026",
    title: "How to Choose WordPress Hosting in 2026 (Without Overpaying)",
    excerpt:
      "A practical checklist for choosing the right WordPress hosting plan for blogs, business sites, and WooCommerce projects.",
    category: "WordPress Hosting",
    language: "en",
    publishedAt: "2026-02-17",
    content: [
      "Choosing WordPress hosting is mostly about matching performance to your real traffic and plugin stack. Most websites can start small and scale later.",
      "If your project is a small blog or a lightweight business site, entry plans are usually enough. For heavier themes, more plugins, and higher traffic, choose a stronger plan early.",
      "Always check what matters in real operations: storage type, PHP performance, backup options, SSL support, and support quality when something breaks.",
      "For WooCommerce stores, prioritize stability and response time. Slow checkout and admin can cost revenue quickly.",
      "Best practice: monitor performance from day one and upgrade before bottlenecks become business issues."
    ],
    productLinks: [
      {
        label: "WordPress hosting offer",
        url: "https://www.vedos.cz/en/wordpress-hosting/?ap=Lf2pCY"
      }
    ]
  },
  {
    slug: "jak-wybrac-vps-na-start",
    title: "Jak wybrać VPS na start: praktyczny przewodnik",
    excerpt:
      "Krótki poradnik dla osób, które przechodzą z hostingu współdzielonego na VPS i chcą uniknąć typowych błędów.",
    category: "VPS",
    language: "pl",
    publishedAt: "2026-02-17",
    content: [
      "VPS daje większą kontrolę niż hosting współdzielony, ale wymaga lepszego planowania zasobów i podstaw administracji.",
      "Na start najważniejsze są trzy rzeczy: odpowiednia ilość RAM, szybki dysk SSD i możliwość łatwej zmiany parametrów.",
      "Jeśli projekt dynamicznie rośnie, wybierz rozwiązanie z prostym skalowaniem. Przy stałym ruchu bardziej opłaca się konfiguracja przewidywalna.",
      "Nie zapominaj o monitoringu (CPU, RAM, I/O) i automatycznych kopiach zapasowych. To oszczędza czas i nerwy.",
      "Dobrze dobrany VPS to taki, który nie ogranicza rozwoju, ale też nie powoduje nadpłaty za niewykorzystane zasoby."
    ],
    productLinks: [
      {
        label: "VPS ON",
        url: "https://www.vedos.cz/vps-on/?ap=Lf2pCY"
      },
      {
        label: "VPS SSD",
        url: "https://www.vedos.cz/vps-ssd/?ap=Lf2pCY"
      }
    ]
  },
  {
    slug: "ako-vybrat-webhosting-pre-firemny-web",
    title: "Ako vybrať webhosting pre firemný web",
    excerpt:
      "Praktické kroky, podľa ktorých vyberiete webhosting s dobrým pomerom ceny, výkonu a podpory.",
    category: "Webhosting",
    language: "sk",
    publishedAt: "2026-02-17",
    content: [
      "Firemný web potrebuje hlavne stabilitu, rýchlosť a spoľahlivú podporu. Cena je dôležitá, ale nemala by byť jediné kritérium.",
      "Pred výberom si ujasnite, čo bude web robiť: prezentačný web, blog, alebo e-shop. Každý scenár má iné nároky.",
      "Sledujte technické parametre, dostupnosť záloh, SSL certifikáty a jednoduchosť správy hostingu.",
      "Ak plánujete rast obsahu alebo návštevnosti, vyberte službu, kde je prechod na vyšší plán jednoduchý.",
      "Kvalitný webhosting vám ušetrí čas pri prevádzke a zníži riziko výpadkov."
    ],
    productLinks: [
      {
        label: "Webhosting NoLimit",
        url: "https://order.wedos.com/sk/webhosting/order.html?step=1&coupon_code=XFSMA9P6V5&variant=nolimit&ap=Lf2pCY"
      }
    ]
  },
  {
    slug: "domain-fuer-unternehmen-auswaehlen",
    title: "Die richtige Domain für Ihr Unternehmen auswählen",
    excerpt:
      "Kurzanleitung für eine Domain, die professionell wirkt und langfristig zur Marke passt.",
    category: "Domains",
    language: "de",
    publishedAt: "2026-02-17",
    content: [
      "Eine Domain ist ein zentraler Markenbaustein. Ein unpassender Name kann später teure Änderungen verursachen.",
      "Halten Sie den Namen kurz, klar und leicht merkbar. Vermeiden Sie komplizierte Schreibweisen und unnötige Bindestriche.",
      "Wählen Sie die Endung passend zum Markt: lokal, international oder thematisch nur dann, wenn es strategisch sinnvoll ist.",
      "Prüfen Sie frühzeitig die Verfügbarkeit auf sozialen Netzwerken und mögliche Markenkonflikte.",
      "Mit einer sauberen Domain-Strategie verbessern Sie Auffindbarkeit, Vertrauen und langfristige Marketingeffizienz."
    ],
    productLinks: [
      {
        label: "Domain-Angebot",
        url: "https://www.vedos.cz/en/domeny/?ap=Lf2pCY"
      }
    ]
  },
  {
    slug: "hosting-wordpress-guida-rapida",
    title: "Hosting WordPress: guida rapida per scegliere bene",
    excerpt:
      "Cosa controllare prima di acquistare un piano WordPress, con consigli pratici per evitare costi inutili.",
    category: "WordPress Hosting",
    language: "it",
    publishedAt: "2026-02-17",
    content: [
      "Per scegliere un hosting WordPress non basta guardare il prezzo: servono prestazioni stabili, backup e supporto affidabile.",
      "Per un blog o sito vetrina, un piano base spesso basta. Per e-commerce o siti con molti plugin, conviene partire con risorse maggiori.",
      "Valuta in anticipo SSL, velocità del database, gestione cache e facilità di upgrade del piano.",
      "Una buona regola: monitorare il sito fin da subito e aumentare risorse prima che i rallentamenti impattino utenti e vendite.",
      "Con la configurazione giusta all'inizio, risparmi tempo operativo e riduci i problemi tecnici nel lungo periodo."
    ],
    productLinks: [
      {
        label: "Offerta WordPress hosting",
        url: "https://www.vedos.cz/en/wordpress-hosting/?ap=Lf2pCY"
      }
    ]
  }
];

export const getBlogPostBySlug = (slug?: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);

const WORDS_PER_MINUTE = 260;

const countWords = (text: string): number =>
  text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

export const getEstimatedReadingMinutes = (post: BlogPost): number => {
  const fullText = [post.title, post.excerpt, ...post.content].join(" ");
  const totalWords = countWords(fullText);
  return totalWords / WORDS_PER_MINUTE;
};
