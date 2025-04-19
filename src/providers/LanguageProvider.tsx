// src/components/LanguageProvider.tsx
"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import { locales, defaultLocale, getInitialLocale } from "@/i18n";

type LanguageContextType = {
  locale: string;
  setLocale: (locale: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState(defaultLocale);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Set initial locale based on browser/stored preference
    const initialLocale = getInitialLocale();
    setLocaleState(initialLocale);
    localStorage.setItem('locale', initialLocale);
  }, []);

  const setLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    
    // Store the new locale preference
    localStorage.setItem('locale', newLocale);
    setLocaleState(newLocale);
    
    // Force a refresh to apply the new locale
    // This approach avoids URL changes
    window.location.reload();
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);