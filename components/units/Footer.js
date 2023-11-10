import React from "react";
import styles from "@/styles/modules/footer.module.css";
import SCVLogo from "../icons/scvLogo";
import Link from "next/link";
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
      scrollTo: section,
      ease: "power1.in",
    });
  };

  const scrollToConvert = () => {
    const section = document.querySelector("#convert-section");

    gsap.to(window, {
      duration: 1.25,
      scrollTo: section,
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
        className={styles.links}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: 0.125,
        }}
      >
        <div className={styles.navigation}>
          <ul>
            <li onClick={scrollToHome}>{langSettings.nav.one}</li>
            <li onClick={scrollToTrending}>{langSettings.nav.two}</li>
            <li onClick={scrollToConvert}>{langSettings.nav.three}</li>
          </ul>
        </div>
        <div className={styles.contact}>
          <ul>
            <li>
              <Link
                href="https://github.com/GoorezyEST"
                target="_blank"
                noopenner="true"
                noreferrer="true"
              >
                {langSettings.footer.five}
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/franco-espinosa/"
                target="_blank"
                noopenner="true"
                noreferrer="true"
              >
                {langSettings.footer.six}
              </Link>
            </li>
            <li>
              <Link
                href="https://franco-espinosa-portafolio.vercel.app/"
                target="_blank"
                noopenner="true"
                noreferrer="true"
              >
                {langSettings.footer.seven}
              </Link>
            </li>
          </ul>
        </div>
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
