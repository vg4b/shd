import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export const useLanguageAwareNavigation = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const navigateWithLanguage = useCallback((to: string) => {
    // Remove leading slash if present
    const path = to.startsWith('/') ? to.slice(1) : to;
    
    // Get current path parts
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);
    const currentLang = pathParts[0];
    
    // If we're navigating to the same path, keep the language prefix
    const shouldKeepLang = path === pathParts.slice(1).join('/') && ['en', 'pl', 'sk', 'de'].includes(currentLang);
    
    // Construct the path with language prefix if not default language
    const fullPath = language === 'cs' 
      ? `/${path}` 
      : `/${language}${path ? `/${path}` : ''}`;
    
    navigate(fullPath, { replace: shouldKeepLang });
  }, [navigate, language]);

  return navigateWithLanguage;
};
