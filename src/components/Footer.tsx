import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer style={{
      borderTop: '1px solid #eaeaea',
      padding: '20px',
      textAlign: 'center',
      width: '100%',
      backgroundColor: 'white',
      marginTop: '2rem'
    }}>
      <div style={{ marginBottom: '10px' }}>
        <Link 
          to={language === 'cs' ? '/privacy' : `/${language}/privacy`}
          style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}
        >
          {t('privacyPolicy')}
        </Link>
      </div>
      <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
        © 2024-2025{' '}
        <a 
          href="https://fixweb.cz" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            color: '#0070f3',
            textDecoration: 'none'
          }}
        >
          by FixWeb.cz
        </a>
      </p>
    </footer>
  );
};

export default Footer;
