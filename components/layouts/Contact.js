import React from "react";
import styles from "@/styles/modules/contact.module.css";
import LinkedInIcon from "../icons/linkedinIcon";
import Link from "next/link";
import GitHubIcon from "../icons/githubIcon";
import PortfolioIcon from "../icons/portfolioIcon";
import { useGlobal } from "@/context/GlobalContext";
import { motion } from "framer-motion";

function Contact() {
  const { langSettings } = useGlobal();

  return (
    <section className={styles.container} id="contact-section">
      <div className={styles.text}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.125,
          }}
        >
          {langSettings.contact.one}
        </motion.span>
        <motion.h5
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.125,
          }}
        >
          {langSettings.contact.two}
        </motion.h5>
      </div>
      <motion.div
        className={styles.buttons}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: 0.125,
        }}
      >
        <Link
          href="https://www.linkedin.com/in/franco-espinosa/"
          target="_blank"
        >
          <button>
            <div className={styles.logo}>
              <LinkedInIcon />
            </div>
          </button>
        </Link>
        <Link href="https://github.com/GoorezyEST" target="_blank">
          <button>
            <div className={styles.logo}>
              <GitHubIcon />
            </div>
          </button>
        </Link>
        <Link
          href="https://franco-espinosa-portafolio.vercel.app/"
          target="_blank"
        >
          <button>
            <div className={styles.logo}>
              <PortfolioIcon />
            </div>
          </button>
        </Link>
      </motion.div>
    </section>
  );
}

export default Contact;
