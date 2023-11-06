import React from "react";
import SCVLogo from "../icons/scvLogo";
import styles from "@/styles/modules/hero.module.css";
import ScrollDownIcon from "../icons/scrollDownIcon";

function Hero() {
  return (
    <section className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <SCVLogo />
        </div>
        <ul>
          <li>Home</li>
          <li>Featured</li>
          <li>Convert</li>
        </ul>
        <span>Get in touch</span>
      </nav>

      <div className={styles.content}>
        <div className={styles.text}>
          <span>SIMPLE CRYPTO VIEWER</span>
          <h1>
            Your simple gateway
            <br />
            to the crypto world
          </h1>
          <p>
            Keep track of the most trending cryptocurrencies and preview
            <br />
            conversions between a wide range of currencies.
          </p>
        </div>
        <button className={styles.cta}>Get started</button>
      </div>

      <div className={styles.scroll}>
        <ScrollDownIcon />
      </div>
    </section>
  );
}

export default Hero;
