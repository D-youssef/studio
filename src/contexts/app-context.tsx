"use client";

import { createContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import type { Language, Currency } from '@/types';

type Theme = "light" | "dark" | "system";

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
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

  useEffect(() => {
    if (!isMounted) return;
    
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    let effectiveTheme = theme;
    if (theme === 'system') {
      effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    root.classList.add(effectiveTheme);
    localStorage.setItem('infynia-theme', theme);
  }, [theme, isMounted]);

  const setLanguage = (lang: Language) => {
    if (!isMounted) return;
    setLanguageState(lang);
    localStorage.setItem('infynia-language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const setCurrency = (curr: Currency) => {
    if (!isMounted) return;
    setCurrencyState(curr);
    localStorage.setItem('infynia-currency', curr);
  };

  const setTheme = (t: Theme) => {
     if (!isMounted) return;
     setThemeState(t);
  }

  const value = useMemo(() => ({
    theme,
    setTheme,
    language,
    setLanguage,
    currency,
    setCurrency,
  }), [theme, language, currency]);
  
  if (!isMounted) {
    return null;
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
