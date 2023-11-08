import { createContext, useContext, useState, useEffect } from "react";
import { languages } from "@/data/Language";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  //Loading state
  const [isHydrated, setIsHydrated] = useState(true);
  //Currency state
  const [currentCurrency, setCurrentCurrency] = useState("usd");
  //Crypto information state
  const [cryptoInformation, setCryptoInformation] = useState(null);
  //Languages logic
  const [langSettings, setLangSettings] = useState(languages.es);
  //Visible selector
  const [lang, setLang] = useState(null);

  const swapLanguage = (param) => {
    if (param === "en") {
      setLangSettings(languages.en);
      setLang("en");
      return;
    }
    if (param === "es") {
      setLangSettings(languages.es);
      setLang("es");
      return;
    }
  };

  useEffect(() => {
    let userLanguage = navigator.language || navigator.userLanguage;
    if (userLanguage.includes("es")) {
      swapLanguage("es");
    } else {
      swapLanguage("en");
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isHydrated,
        setIsHydrated,
        currentCurrency,
        setCurrentCurrency,
        cryptoInformation,
        setCryptoInformation,
        langSettings,
        setLangSettings,
        lang,
        setLang,
        swapLanguage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used with a settings provider");
  }
  return context;
}
