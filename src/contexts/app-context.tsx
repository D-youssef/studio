
"use client";

import { createContext, useState, useEffect, useMemo, type ReactNode, useCallback } from 'react';
import type { Language, Currency } from '@/types';
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';
import ar from '@/locales/ar.json';

type Theme = "light" | "dark" | "system";

const translations = { en, fr, ar };

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  t: (key: string) => string;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [language, setLanguageState] = useState<Language>('en');
  const [currency, setCurrencyState] = useState<Currency>('USD');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem('infynia-theme') as Theme | null;
    const storedLanguage = localStorage.getItem('infynia-language') as Language | null;
    const storedCurrency = localStorage.getItem('infynia-currency') as Currency | null;

    if (storedTheme) setThemeState(storedTheme);
    if (storedLanguage) setLanguageState(storedLanguage);
    if (storedCurrency) setCurrencyState(storedCurrency);
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    if (isMounted) {
      localStorage.setItem('infynia-theme', t);
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
     if (isMounted) {
      localStorage.setItem('infynia-language', lang);
    }
  };
  
  const setCurrency = (curr: Currency) => {
    setCurrencyState(curr);
    if (isMounted) {
      localStorage.setItem('infynia-currency', curr);
    }
  };

  useEffect(() => {
    if (isMounted) {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [language, isMounted]);

  useEffect(() => {
    if (isMounted) {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');

      let effectiveTheme = theme;
      if (theme === 'system') {
        effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      
      root.classList.add(effectiveTheme);
    }
  }, [theme, isMounted]);

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let result: any = translations[language];
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        // Fallback to English if translation is missing
        let fallbackResult: any = translations.en;
        for (const fk of keys) {
          fallbackResult = fallbackResult?.[fk];
        }
        return fallbackResult || key;
      }
    }
    return result || key;
  }, [language]);

  const value = useMemo(() => ({
    theme,
    setTheme,
    language,
    setLanguage,
    currency,
    setCurrency,
    t
  }), [theme, language, currency, t]);

  if (!isMounted) {
    return null;
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
