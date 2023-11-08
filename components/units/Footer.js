import React from "react";
import styles from "@/styles/modules/footer.module.css";
import SCVLogo from "../icons/scvLogo";
import Link from "next/link";
import { useGlobal } from "@/context/GlobalContext";

function Footer() {
  const { langSettings } = useGlobal();

  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <SCVLogo />
      </div>

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
        <p style={{ textAlign: "center" }}>
          {langSettings.footer.eight}
          <br />
          {langSettings.footer.nine}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
