import React, { createContext, useContext, useState, useEffect } from 'react';
import thTranslations from '../locales/th.json';
import enTranslations from '../locales/en.json';

type Language = 'th' | 'en';

type TranslationsType = typeof thTranslations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (path: string) => string;
  translations: TranslationsType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('ngonlam_lang') as Language;
    return saved === 'en' || saved === 'th' ? saved : 'th';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('ngonlam_lang', lang);
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'th' ? 'en' : 'th');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const translations = language === 'th' ? thTranslations : enTranslations;

  // Helper function to resolve nested keys like "hero.title"
  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations;
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return path;
      }
    }
    return typeof current === 'string' ? current : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
