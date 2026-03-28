import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useLanguageAwareNavigation } from '../hooks/useLanguageAwareNavigation';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const navigateWithLanguage = useLanguageAwareNavigation();

  return (
    <footer className="footer-modern">
      <div className="footer-modern__container">
        <div className="footer-modern__grid">
          <section>
            <h3>{t('footer.aboutTitle')}</h3>
            <p>
              <strong>slevy-hosting-domeny.cz</strong> {t('footer.aboutText1')}
            </p>
            <p>
              {t('footer.aboutText2')}
            </p>
          </section>

          <section>
            <h3>{t('footer.linksTitle')}</h3>
            <ul>
              <li>
                <Link to="" onClick={(e) => { e.preventDefault(); navigateWithLanguage(''); }}>
                  {t('footer.links.home')}
                </Link>
              </li>
              <li>
                <Link to="" onClick={(e) => { e.preventDefault(); navigateWithLanguage('blog'); }}>
                  {t('footer.links.blog')}
                </Link>
              </li>
              <li>
                <Link to="" onClick={(e) => { e.preventDefault(); navigateWithLanguage('privacy'); }}>
                  {t('footer.links.privacy')}
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h3>{t('footer.servicesTitle')}</h3>
            <ul>
              <li><a href="https://www.vininfo.cz/" target="_blank" rel="noopener noreferrer">{t('footer.services.vinInfo')}</a></li>
              <li><a href="https://fixweb.cz" target="_blank" rel="noopener noreferrer">{t('footer.services.fixweb')}</a></li>
              <li><a href="https://www.dealora.cz/" target="_blank" rel="noopener noreferrer">{t('footer.services.dealora')}</a></li>
              <li><a href="https://jsouobchodyotevrene.cz/" target="_blank" rel="noopener noreferrer">{t('footer.services.openShops')}</a></li>
              <li><a href="https://www.kurzykaret.cz/" target="_blank" rel="noopener noreferrer">{t('footer.services.kurzyKaret')}</a></li>
            </ul>
          </section>
        </div>

        <div className="footer-modern__bottom">
          © 2026{' '}
          <a href="https://fixweb.cz" target="_blank" rel="noopener noreferrer">
            FixWeb.cz
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
