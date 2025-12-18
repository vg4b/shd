import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useLanguageAwareNavigation } from '../hooks/useLanguageAwareNavigation';
import LanguagePicker from './LanguagePicker';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useLanguage();
  const navigateWithLanguage = useLanguageAwareNavigation();

  return (
    <div className="App" itemScope itemType="https://schema.org/WebPage">
      <a href="#main-content" className="visually-hidden-focusable">{t('skipToContent')}</a>
      <header role="banner">
        <div className="container d-flex justify-content-between align-items-center">
          <Link 
            to="" 
            onClick={(e) => { e.preventDefault(); navigateWithLanguage(''); }}
            className="d-flex align-items-center text-decoration-none"
            aria-label={t('site.title')}
            itemProp="url"
          >
            <div className="d-flex align-items-center bg-primary rounded-circle p-2 me-2" style={{ width: '40px', height: '40px' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
            </div>
            <span className="fs-4 d-none d-sm-inline" itemProp="name">{t('site.title')}</span>
          </Link>
          <nav aria-label="Language selection">
            <LanguagePicker />
          </nav>
        </div>
      </header>

      <div className="container-fluid px-3 px-md-4 px-lg-5 py-4" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <main id="main-content" role="main" itemProp="mainContentOfPage">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
