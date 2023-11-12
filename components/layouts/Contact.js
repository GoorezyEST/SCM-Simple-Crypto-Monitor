import React from "react";
import styles from "@/styles/modules/contact.module.css";
import LinkedInIcon from "../icons/linkedinIcon";
import Link from "next/link";
import GitHubIcon from "../icons/githubIcon";
import PortfolioIcon from "../icons/portfolioIcon";
import { useGlobal } from "@/context/GlobalContext";

function Contact() {
  const { langSettings } = useGlobal();

  return (
    <section className={styles.container} id="contact-section">
      <div className={styles.text}>
        <span>{langSettings.contact.one}</span>
        <h5>{langSettings.contact.two}</h5>
      </div>
      <div className={styles.buttons}>
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
      </div>
    </section>
  );
}

export default Contact;
