import React, { useState } from "react";
import styles from "@/styles/modules/hero.module.css";
import ScrollDownIcon from "../icons/scrollDownIcon";
import { useGlobal } from "@/context/GlobalContext";
import Navbar from "../units/Navbar";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

const variants = {
  visible: { opacity: 1, y: 0 },
  hide: { opacity: 0, y: -100 },
};

function Hero() {
  const { langSettings } = useGlobal();

  const [showNav, setShowNav] = useState(true);
  const lastScrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > lastScrollPosition.current) {
        if (showNav) {
          setShowNav(false);
        }
      } else {
        if (!showNav) {
          setShowNav(true);
        }
      }
      lastScrollPosition.current = currentScrollPosition;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showNav]);

  gsap.registerPlugin(ScrollToPlugin);

  const scrollToTrending = () => {
    const section = document.querySelector("#trending-section");

    gsap.to(window, {
      duration: 1.25,
      scrollTo: section,
      ease: "power1.in",
    });
  };

  return (
    <section className={styles.container} id="home-section">
      <motion.div
        className={styles.navContainer}
        animate={showNav ? "visible" : "hide"}
        variants={variants}
        transition={{
          duration: 0.35,
        }}
      >
        <Navbar />
      </motion.div>
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
        <button className={styles.cta} onClick={scrollToTrending}>
          {langSettings.hero.six}
        </button>
      </div>

      <div className={styles.scroll}>
        <ScrollDownIcon />
      </div>
    </section>
  );
}

export default Hero;
