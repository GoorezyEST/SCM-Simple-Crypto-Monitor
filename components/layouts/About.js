import React from "react";
import styles from "@/styles/modules/about.module.css";
import SCMIllustration from "../illustrations/SCMIllustration";
import { useGlobal } from "@/context/GlobalContext";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

function About() {
  const { langSettings } = useGlobal();

  gsap.registerPlugin(ScrollToPlugin);

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

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text_side}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: 0.125,
            }}
          >
            {langSettings.about.one}
          </motion.span>
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: 0.125,
            }}
          >
            {langSettings.about.two}
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: 0.125,
            }}
          >
            {langSettings.about.three}
          </motion.p>
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
            {langSettings.about.four}
          </motion.button>
        </div>
        <motion.div
          className={styles.image_side}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.125,
          }}
        >
          <div className={styles.decoration}></div>
          <div className={styles.svg}>
            <SCMIllustration />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
