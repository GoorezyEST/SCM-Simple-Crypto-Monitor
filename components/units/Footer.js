import React from "react";
import styles from "@/styles/modules/footer.module.css";
import SCVLogo from "../icons/scvLogo";
import { useGlobal } from "@/context/GlobalContext";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { motion } from "framer-motion";

function Footer() {
  const { langSettings } = useGlobal();

  gsap.registerPlugin(ScrollToPlugin);

  const scrollToHome = () => {
    const section = document.querySelector("#home-section");

    gsap.to(window, {
      duration: 1.25,
      scrollTo: section,
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

  return (
    <footer className={styles.container} id="footer">
      <div className={styles.start}>
        <motion.div
          className={styles.logo}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.125,
          }}
        >
          <SCVLogo />
        </motion.div>
      </div>

      <div className={styles.line}></div>

      <motion.div
        className={styles.navigation}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: 0.125,
        }}
      >
        <ul>
          <li onClick={scrollToHome}>{langSettings.nav.one}</li>
          <li onClick={scrollToTrending}>{langSettings.nav.two}</li>
          <li onClick={scrollToConvert}>{langSettings.nav.three}</li>
        </ul>
      </motion.div>

      <motion.div
        className={styles.copyright}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: 0.125,
        }}
      >
        <p style={{ textAlign: "center" }}>
          {langSettings.footer.eight}
          <br />
          {langSettings.footer.nine}
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
