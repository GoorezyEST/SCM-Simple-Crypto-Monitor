import React from "react";
import styles from "@/styles/modules/footer.module.css";
import SCVLogo from "../icons/scvLogo";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.container}>
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
      <div className={styles.line}></div>
      <div className={styles.copyright}>
        <ul>
          <li>
            <Link
              href="https://github.com/GoorezyEST"
              target="_blank"
              noopenner="true"
              noreferrer="true"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/franco-espinosa/"
              target="_blank"
              noopenner="true"
              noreferrer="true"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://franco-espinosa-portafolio.vercel.app/"
              target="_blank"
              noopenner="true"
              noreferrer="true"
            >
              Portfolio
            </Link>
          </li>
        </ul>
        <p>© Copyright. All rights reserverd</p>
      </div>
    </footer>
  );
}

export default Footer;
