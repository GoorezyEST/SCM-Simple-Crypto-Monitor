"use client";

import { GlobalProvider } from "./GlobalContext";
import { PropsLoad } from "./PropsLoad";

export function ThemeProvider({ children }) {
  return (
    <GlobalProvider>
      <PropsLoad>{children}</PropsLoad>
    </GlobalProvider>
  );
}
