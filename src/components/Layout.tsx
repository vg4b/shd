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
      <a href="#main-content" className="visually-hidden-focusable">Skip to main content</a>
      <header className="pb-3 mb-4 border-bottom" role="banner">
        <div className="container d-flex justify-content-between align-items-center">
          <Link 
            to="" 
            onClick={(e) => { e.preventDefault(); navigateWithLanguage(''); }}
            className="d-flex align-items-center text-body-emphasis text-decoration-none"
            aria-label={t('site.title')}
            itemProp="url"
          >
            <svg
              width="32"
              height="32"
              className="me-2"
              viewBox="-0.5 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M18 3.91992H6C3.79086 3.91992 2 5.71078 2 7.91992V17.9199C2 20.1291 3.79086 21.9199 6 21.9199H18C20.2091 21.9199 22 20.1291 22 17.9199V7.91992C22 5.71078 20.2091 3.91992 18 3.91992Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 17.9199L17 7.91992"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 11.9199C9.10457 11.9199 10 11.0245 10 9.91992C10 8.81535 9.10457 7.91992 8 7.91992C6.89543 7.91992 6 8.81535 6 9.91992C6 11.0245 6.89543 11.9199 8 11.9199Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 17.9199C17.1046 17.9199 18 17.0245 18 15.9199C18 14.8154 17.1046 13.9199 16 13.9199C14.8954 13.9199 14 14.8154 14 15.9199C14 17.0245 14.8954 17.9199 16 17.9199Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="fs-4" itemProp="name">{t('site.title')}</span>
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
