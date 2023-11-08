"use client";

import React, { useEffect } from "react";
import BackgroundDecoration from "@/components/layouts/BackgroundDecoration";
import Hero from "@/components/layouts/Hero";
import styles from "@/styles/modules/wrapper.module.css";
import Trending from "@/components/layouts/Trending";
import Convert from "@/components/layouts/Convert";
import Footer from "@/components/units/Footer";
import { useGlobal } from "@/context/GlobalContext";
import { getCryptos } from "@/functions/APILogic";

export default function Wrapper() {
  //Import from the global context
  const { setIsHydrated, setCryptoInformation } = useGlobal();

  const initFunction = async () => {
    try {
      //Get all cryptos information
      const cryptoData = await getCryptos();
      //Store the information in the global context
      setCryptoInformation(cryptoData);
      //Set the loading state to false
      setIsHydrated(false);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  //Call the init function
  useEffect(() => {
    initFunction();
  }, []);

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
