import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  const path = window.location.pathname;
  if (path.startsWith('/en')) return 'en';
  if (path.startsWith('/pl')) return 'pl';
  if (path.startsWith('/sk')) return 'sk';
  if (path.startsWith('/de')) return 'de';
  return 'cs';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage());

  useEffect(() => {
    const currentPath = window.location.pathname;
    const basePath = currentPath.split('/').slice(2).join('/');
    
    if (language === 'cs') {
      if (currentPath !== '/' && currentPath !== `/${basePath}`) {
        window.history.pushState({}, '', `/${basePath}`);
      }
    } else {
      const newPath = `/${language}${basePath ? `/${basePath}` : ''}`;
      if (currentPath !== newPath) {
        window.history.pushState({}, '', newPath);
      }
    }

    // Dispatch custom event for language change
    const event = new CustomEvent('languageChange', { detail: { language } });
    window.dispatchEvent(event);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 