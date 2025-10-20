import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../i18n/translations';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'cs', name: 'Česky', flag: '🇨🇿' },
  { code: 'sk', name: 'Slovensky', flag: '🇸🇰' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' }
];

const LanguagePicker: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="dropdown">
      <button 
        className="btn btn-link dropdown-toggle text-decoration-none" 
        type="button" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
      >
        {languages.find(lang => lang.code === language)?.flag} {languages.find(lang => lang.code === language)?.name}
      </button>
      <ul className="dropdown-menu">
        {languages.map((lang) => (
          <li key={lang.code}>
            <button
              className={`dropdown-item ${lang.code === language ? 'active' : ''}`}
              onClick={() => setLanguage(lang.code)}
            >
              {lang.flag} {lang.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagePicker; 