"use client";

import React from "react";
import BackgroundDecoration from "@/components/layouts/BackgroundDecoration";
import Hero from "@/components/layouts/Hero";
import styles from "@/styles/modules/wrapper.module.css";
import Trending from "@/components/layouts/Trending";
import Convert from "@/components/layouts/Convert";
import Footer from "@/components/units/Footer";

export default function Wrapper() {
  return (
    <main className={styles.wrapper}>
      <Hero />
      <Trending />
      <Convert />
      <Footer />
      {/* <BackgroundDecoration /> */}
    </main>
  );
}
