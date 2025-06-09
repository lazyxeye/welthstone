import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Translations } from '../i18n/translations';

type Language = 'en' | 'he' | 'fr' | 'ru' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Default to Hebrew as per authentic Wealthstone website
  const [language, setLanguageState] = useState<Language>('he');
  const [isInitialized, setIsInitialized] = useState(false);

  // Load saved language preference on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-language') as Language;
    if (savedLang && translations[savedLang]) {
      setLanguageState(savedLang);
    } else {
      // Keep Hebrew as default instead of detecting browser language
      setLanguageState('he');
    }
    setIsInitialized(true);
  }, []);

  // Update document attributes when language changes
  useEffect(() => {
    if (!isInitialized) return;
    
    const isRTL = language === 'he';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Add a class to the body for language-specific styling
    document.body.className = document.body.className.replace(/lang-\w+/g, '');
    document.body.classList.add(`lang-${language}`);
    
    console.log('Language changed to:', language, 'RTL:', isRTL);
  }, [language, isInitialized]);

  const setLanguage = (lang: Language) => {
    console.log('Setting language to:', lang);
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const isRTL = language === 'he';
  const t = translations[language];

  // Don't render until initialized to avoid hydration issues
  if (!isInitialized) {
    return <div className="min-h-screen bg-obsidian flex items-center justify-center">
      <div className="text-accent-gold">טוען...</div>
    </div>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};