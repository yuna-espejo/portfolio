"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import ca from "@/messages/ca.json";

type Lang = "en" | "es" | "ca";

const messages = { en, es, ca } as const;

export type Messages = typeof en;

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Messages;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && (["en", "es", "ca"] as Lang[]).includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: messages[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
