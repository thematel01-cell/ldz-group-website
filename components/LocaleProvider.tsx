"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";

import type { Locale } from "@/data/i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");

  useEffect(() => {
    const saved = window.localStorage.getItem("ldz-locale");
    if (saved === "zh" || saved === "en") {
      setLocale(saved);
      document.documentElement.lang = saved === "zh" ? "zh-Hant" : "en";
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ldz-locale", locale);
    document.documentElement.lang = locale === "zh" ? "zh-Hant" : "en";
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider.");
  }

  return context;
}
