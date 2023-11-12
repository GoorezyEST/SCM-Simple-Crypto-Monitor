import React from "react";
import styles from "@/styles/modules/navbar.module.css";
import SCVLogo from "../icons/scvLogo";
import { CurrenciesList } from "@/data/Currencies";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { useGlobal } from "@/context/GlobalContext";

function Navbar() {
  const {
    lang,
    langSettings,
    swapLanguage,
    currentCurrency,
    setCurrentCurrency,
  } = useGlobal();

  const changeLang = () => {
    if (lang === "es") {
      swapLanguage("en");
    } else {
      swapLanguage("es");
    }
  };

  gsap.registerPlugin(ScrollToPlugin);

  const scrollToHome = () => {
    const section = document.querySelector("#home-section");

    gsap.to(window, {
      duration: 1.25,
      scrollTo: {
        y: section,
      },
      ease: "power1.in",
    });
  };

  const scrollToTrending = () => {
    const section = document.querySelector("#trending-section");

    gsap.to(window, {
      duration: 1.25,
      scrollTo: {
        y: section,
        offsetY: 64,
      },
      ease: "power1.in",
    });
  };

  const scrollToConvert = () => {
    const section = document.querySelector("#convert-section");

    gsap.to(window, {
      duration: 1.25,
      scrollTo: {
        y: section,
        offsetY: 64,
      },
      ease: "power1.in",
    });
  };

  const scrollToContact = () => {
    const section = document.querySelector("#contact-section");

    gsap.to(window, {
      duration: 1.25,
      scrollTo: {
        y: section,
        offsetY: 64,
      },
      ease: "power1.in",
    });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <SCVLogo />
      </div>
      <ul>
        <li onClick={scrollToHome}>{langSettings.nav.one}</li>
        <li onClick={scrollToTrending}>{langSettings.nav.two}</li>
        <li onClick={scrollToConvert}>{langSettings.nav.three}</li>
      </ul>
      <div className={styles.side}>
        <ul className={styles.currencies}>
          <li>
            {currentCurrency.toUpperCase()}
            <ul className={styles.sub_currencies}>
              {CurrenciesList.map((item) => {
                if (item !== currentCurrency) {
                  return (
                    <li
                      key={item}
                      onClick={() => {
                        setCurrentCurrency(item);
                      }}
                    >
                      {item.toUpperCase()}
                    </li>
                  );
                }
              })}
            </ul>
          </li>
        </ul>
        <span
          className={styles.language}
          onClick={() => {
            changeLang();
          }}
        >
          {langSettings.nav.four}
        </span>
        <span className={styles.contact} onClick={scrollToContact}>
          {langSettings.nav.five}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
