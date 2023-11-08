import React from "react";
import SCVLogo from "../icons/scvLogo";
import styles from "@/styles/modules/hero.module.css";
import ScrollDownIcon from "../icons/scrollDownIcon";
import { useGlobal } from "@/context/GlobalContext";
import { CurrenciesList } from "@/data/Currencies";

function Hero() {
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

  return (
    <section className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <SCVLogo />
        </div>
        <ul>
          <li>{langSettings.nav.one}</li>
          <li>{langSettings.nav.two}</li>
          <li>{langSettings.nav.three}</li>
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
          <span className={styles.contact}>{langSettings.nav.five}</span>
        </div>
      </nav>

      <div className={styles.content}>
        <div className={styles.text}>
          <span>{langSettings.hero.one}</span>
          <h1>
            {langSettings.hero.two}
            <br />
            {langSettings.hero.three}
          </h1>
          <p>
            {langSettings.hero.four}
            <br />
            {langSettings.hero.five}
          </p>
        </div>
        <button className={styles.cta}>{langSettings.hero.six}</button>
      </div>

      <div className={styles.scroll}>
        <ScrollDownIcon />
      </div>
    </section>
  );
}

export default Hero;
