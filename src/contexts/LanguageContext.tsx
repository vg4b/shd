import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const firstPart = pathParts[0];
  
  if (['en', 'pl', 'sk', 'de', 'it'].includes(firstPart)) {
    return firstPart as Language;
  }
  return 'cs';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage());

  useEffect(() => {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);
    const currentLang = pathParts[0];
    
    // Determine if current first part is a language code
    const isCurrentLangPath = ['en', 'pl', 'sk', 'de', 'it'].includes(currentLang);
    
    // Get the base path depending on whether we're on a language path
    const basePath = isCurrentLangPath ? pathParts.slice(1).join('/') : pathParts.join('/');
    
    // Don't modify URL if we're already on the correct language path
    if (currentLang === language) {
      return;
    }

    // Construct the new path
    let newPath;
    if (language === 'cs') {
      newPath = basePath ? `/${basePath}` : '/';
    } else {
      newPath = `/${language}${basePath ? `/${basePath}` : ''}`;
    }

    // Only update if the path actually changed
    if (currentPath !== newPath) {
      window.history.pushState({}, '', newPath);
    }
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