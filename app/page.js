"use client";

import React, { useEffect, useState, useRef } from "react";
import Hero from "@/components/layouts/Hero";
import styles from "@/styles/modules/wrapper.module.css";
import Trending from "@/components/layouts/Trending";
import Convert from "@/components/layouts/Convert";
import Footer from "@/components/units/Footer";
import { useGlobal } from "@/context/GlobalContext";
import { getCryptos } from "@/functions/APILogic";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import About from "@/components/layouts/About";
import Navbar from "@/components/units/Navbar";
import Contact from "@/components/layouts/Contact";

const variants = {
  visible: { opacity: 1, y: 0 },
  hide: { opacity: 0, y: -100 },
};

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

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [showNav, setShowNav] = useState(true);
  const lastScrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > lastScrollPosition.current) {
        if (showNav) {
          setShowNav(false);
        }
      } else {
        if (!showNav) {
          setShowNav(true);
        }
      }
      lastScrollPosition.current = currentScrollPosition;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showNav]);

  return (
    <main className={styles.wrapper}>
      {/* <motion.div
        className={styles.navContainer}
        animate={showNav ? "visible" : "hide"}
        variants={variants}
        transition={{
          duration: 0.35,
        }}
      >
        <Navbar />
      </motion.div> */}
      <Hero />
      <About />
      <Trending />
      <Convert />
      <Contact />
      <Footer />
    </main>
  );
}
