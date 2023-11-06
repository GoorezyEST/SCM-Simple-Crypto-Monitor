"use client";

import BackgroundDecoration from "@/components/layouts/BackgroundDecoration";
import Hero from "@/components/layouts/Hero";
import styles from "@/styles/modules/wrapper.module.css";

export default function Wrapper() {
  return (
    <main className={styles.wrapper}>
      <Hero />
      {/* <BackgroundDecoration /> */}
    </main>
  );
}
