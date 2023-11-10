"use client";

import { useEffect } from "react";
import { useGlobal } from "./GlobalContext";
import SCVLogo from "@/components/icons/scvLogo";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export function PropsLoad({ children }) {
  const { isHydrated } = useGlobal();

  useEffect(() => {
    if (!isHydrated) {
      document.body.style.height = "100%";
      document.body.style.overflow = "auto";
    }
  }, [isHydrated]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isHydrated && (
          <motion.div
            className="loading_container"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.225,
              ease: "circIn",
            }}
          >
            <div className="loading_logo">
              <SCVLogo />
            </div>
            <span className="loading_text">Cargando</span>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
