import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicyPage: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Zásady ochrany osobních údajů | slevy-hosting-domeny.cz";
  }, []);

  // Content is primarily in Czech as per request and legal context of the query
  return (
    <Layout>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="mb-4">Zásady ochrany osobních údajů</h1>
            
            <p className="lead mb-5">
              Vaše soukromí je pro nás důležité. Tento dokument vysvětluje, jaké osobní údaje zpracováváme,
              proč tak činíme a jaká jsou vaše práva, zejména v souvislosti s používáním souborů cookies
              a affiliate odkazů.
            </p>

            <section className="mb-5">
              <h2 className="h4 mb-3">1. Kdo je správce (Identita)</h2>
              <p>
                Správcem vašich osobních údajů je provozovatel tohoto webu. Níže naleznete naše identifikační údaje:
              </p>
              <div className="bg-light p-4 rounded mb-3">
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><strong>Jméno:</strong> Bc. Václav Gabriel</li>
                  <li className="mb-2"><strong>IČO:</strong> 88350207</li>
                  <li className="mb-2"><strong>Sídlo:</strong> Krkoškova 37, Brno</li>
                  <li><strong>Kontaktní e-mail:</strong> shd@fixweb.cz</li>
                </ul>
              </div>
              <p className="text-muted small">
                Jako správce určujeme účely a prostředky zpracování vašich osobních údajů a odpovídáme za jejich soulad se zákonem.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">2. Zpracovatelé a předávání dat</h2>
              <p>
                Pro fungování webu, analýzu návštěvnosti a zajištění affiliate provizí využíváme služeb
                následujících zpracovatelů. Vaše data (např. IP adresa, ID transakce, cookies) mohou být předávána
                těmto subjektům:
              </p>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Google Ireland Ltd.</h5>
                  <p className="card-text">
                    Využíváme službu <strong>Google Analytics</strong> pro analýzu návštěvnosti webu.
                    Google zpracovává údaje o vašem chování na webu, typu zařízení a další analytická data.
                  </p>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">WEDOS Internet, a.s.</h5>
                  <p className="card-text">
                    Využíváme affiliate program od společnosti WEDOS Internet, a.s.
                    Pokud kliknete na naše affiliate odkazy, mohou být předávána data (např. IP adresa, informace o prokliku)
                    za účelem vyhodnocení provize z prodeje.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">3. Cookies a jejich kategorizace</h2>
              <p>
                Na tomto webu používáme soubory cookies. Ty dělíme do tří kategorií podle účelu:
              </p>

              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Kategorie</th>
                      <th>Účel</th>
                      <th>Příklady a expirace</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Technické (Nezbytné)</strong></td>
                      <td>Nezbytné pro správné fungování webu. Bez nich by stránka nefungovala správně. K jejich použití nepotřebujeme váš souhlas.</td>
                      <td>Session cookies (do zavření prohlížeče), nastavení preferencí.</td>
                    </tr>
                    <tr>
                      <td><strong>Analytické</strong></td>
                      <td>Pomáhají nám měřit návštěvnost a pochopit, jak web používáte, abychom ho mohli zlepšovat.</td>
                      <td>
                        Google Analytics (_ga): uchovává se 2 roky.<br />
                        _gid: uchovává se 24 hodin.
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Marketingové / Affiliate</strong></td>
                      <td>Slouží k trackování výkonu reklam a affiliate odkazů (pro připsání provize partnerovi).</td>
                      <td>
                        Cookies affiliate partnera (WEDOS): pro identifikaci doporučení, expirace dle podmínek partnera (obvykle 30-90 dní).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-5">
              <h2 className="h4 mb-3">4. Právní důvody zpracování</h2>
              <p>Vaše osobní údaje zpracováváme na základě následujících právních titulů:</p>
              <ul>
                <li className="mb-2">
                  <strong>Oprávněný zájem / Plnění smlouvy:</strong> Pro technické cookies a základní funkčnost webu.
                  Zajištění bezpečnosti webu a evidence affiliate konverzí (oprávněný zájem na vyplacení odměny).
                </li>
                <li className="mb-2">
                  <strong>Souhlas:</strong> Pro analytické a marketingové cookies (Google Analytics, reklamní systémy).
                  Tento souhlas udělujete prostřednictvím cookie lišty a můžete jej kdykoli odvolat.
                  <em> "Marketingové a analytické cookies zpracováváme pouze na základě vašeho uděleného souhlasu."</em>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="h4 mb-3">5. Vaše práva</h2>
              <p>V souvislosti se zpracováním osobních údajů máte následující práva:</p>
              <ul>
                <li>Právo na přístup k vašim osobním údajům.</li>
                <li>Právo na opravu nepřesných údajů.</li>
                <li>Právo na výmaz ("právo být zapomenut"), pokud pominul důvod zpracování.</li>
                <li>Právo vznést námitku proti zpracování na základě oprávněného zájmu.</li>
                <li>Právo podat stížnost u dozorového úřadu (Úřad pro ochranu osobních údajů).</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;

