import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "EN" | "VI";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (en: string, vi: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "VI" : "EN"));
  };

  const t = (en: string, vi: string) => {
    return language === "EN" ? en : vi;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
