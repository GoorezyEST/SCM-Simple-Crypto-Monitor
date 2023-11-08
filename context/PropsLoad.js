"use client";

import { useEffect } from "react";
import { useGlobal } from "./GlobalContext";
import SCVLogo from "@/components/icons/scvLogo";

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
      {isHydrated && (
        <div className="loading_container">
          <div className="loading_logo">
            <SCVLogo />
          </div>
          <span className="loading_text">Cargando</span>
        </div>
      )}
      {children}
    </>
  );
}
