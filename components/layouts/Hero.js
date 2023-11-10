import React from "react";
import styles from "@/styles/modules/hero.module.css";
import ScrollDownIcon from "../icons/scrollDownIcon";
import { useGlobal } from "@/context/GlobalContext";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

function Hero() {
  const { langSettings } = useGlobal();

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
      <div className={styles.content}>
        <div className={styles.text}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: 0.125,
            }}
          >
            {langSettings.hero.one}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: 0.125,
            }}
          >
            {langSettings.hero.two}
            <br />
            {langSettings.hero.three}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: 0.125,
            }}
          >
            {langSettings.hero.four}
            <br />
            {langSettings.hero.five}
          </motion.p>
        </div>
        <motion.button
          className={styles.cta}
          onClick={scrollToTrending}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.125,
          }}
        >
          {langSettings.hero.six}
        </motion.button>
      </div>

      <div className={styles.scroll}>
        <ScrollDownIcon />
      </div>
    </section>
  );
}

export default Hero;
