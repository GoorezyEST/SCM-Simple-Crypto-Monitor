import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/GlobalComponent";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "400", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://simple-crypto-monitor.vercel.app/"),
  title: "SCM - Simple Crypto Monitor",
  description:
    "A web application developed to monitor the latest trends in cryptocurrencies. It allows users to track variations in their values over the last day, week, or month. Additionally, users can preview currency conversions between different cryptocurrencies.",
  openGraph: {
    title: "SCM - Simple Crypto Monitor",
    description:
      "A web application developed to monitor the latest trends in cryptocurrencies. It allows users to track variations in their values over the last day, week, or month. Additionally, users can preview currency conversions between different cryptocurrencies.",
    url: "https://simple-crypto-monitor.vercel.app/",
  },
  keywords: [
    "monitor cryptos",
    "crypto",
    "cryptos",
    "cryptocurrencies",
    "cryptomonedas",
    "criptomonedas",
    "cripto",
    "criptos",
    "mercado cripto",
    "crypto market",
    "trending crypto",
    "crypto trends",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
