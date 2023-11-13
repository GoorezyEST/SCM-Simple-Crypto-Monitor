import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/modules/navbar.module.css";
import SCVLogo from "../icons/scvLogo";
import { CurrenciesList } from "@/data/Currencies";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { useGlobal } from "@/context/GlobalContext";
import HamburgerIcon from "../icons/hamburgerIcon";
import CloseIcon from "../icons/closeIcon";

function Navbar() {
  const {
    lang,
    langSettings,
    swapLanguage,
    currentCurrency,
    setCurrentCurrency,
    mobileMenuOpen,
    setMobileMenuOpen,
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
      <div className={styles.mobile}>
        <div
          className={styles.mobile_icon}
          onClick={() => {
            setMobileMenuOpen((prev) => !prev);
          }}
        >
          {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </div>
        <div
          className={styles.mobile_menu}
          style={{ transform: mobileMenuOpen ? "scale(1)" : "scale(0)" }}
        >
          <h6>Menu</h6>
          <ul>
            <li onClick={scrollToHome}>{langSettings.nav.one}</li>
            <li onClick={scrollToTrending}>{langSettings.nav.two}</li>
            <li onClick={scrollToConvert}>{langSettings.nav.three}</li>
          </ul>
          <ul>
            {CurrenciesList.map((item) => {
              return (
                <li
                  style={{
                    color:
                      currentCurrency.toUpperCase() === item.toUpperCase()
                        ? "var(--green)"
                        : "",
                  }}
                  key={item}
                  onClick={() => {
                    setCurrentCurrency(item);
                  }}
                >
                  {item.toUpperCase()}
                </li>
              );
            })}
          </ul>
          <span
            className={styles.mobile_language}
            onClick={() => {
              changeLang();
            }}
          >
            {langSettings.nav.four}
          </span>
          <span className={styles.mobile_contact} onClick={scrollToContact}>
            {langSettings.nav.five}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
