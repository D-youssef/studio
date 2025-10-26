
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
  const [theme, setTheme] = useState<Theme>('system');
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>('USD');

  useEffect(() => {
    const storedTheme = localStorage.getItem('infynia-theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
    const storedLanguage = localStorage.getItem('infynia-language') as Language | null;
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
    const storedCurrency = localStorage.getItem('infynia-currency') as Currency | null;
    if (storedCurrency) {
      setCurrency(storedCurrency);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    let effectiveTheme = theme;
    if (theme === 'system') {
      effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    root.classList.add(effectiveTheme);
    localStorage.setItem('infynia-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('infynia-language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('infynia-currency', currency);
  }, [currency]);

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

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
