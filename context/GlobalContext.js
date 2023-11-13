import { createContext, useContext, useState, useEffect } from "react";
import { languages } from "@/data/Language";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  //State to know if the device is or not mobile
  const [device, setDevice] = useState(null);
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
  //Mobile navbar menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleOrientationChange = (event) => {
      // Check if orientation is portrait
      if (event.matches) {
        setDevice(true);
      } else {
        setDevice(false);
      }
    };

    // Check if the window object is available (client-side rendering)
    if (typeof window !== "undefined") {
      const portrait = window.matchMedia("(orientation: portrait)");
      setDevice(portrait.matches); // Set initial value based on current orientation

      portrait.addEventListener("change", handleOrientationChange);

      return () => {
        // Clean up the event listener when the component unmounts
        portrait.removeEventListener("change", handleOrientationChange);
      };
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
        mobileMenuOpen,
        setMobileMenuOpen,
        device,
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
