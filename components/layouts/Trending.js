import React from "react";
import styles from "@/styles/modules/trending.module.css";
import { useGlobal } from "@/context/GlobalContext";
import { formatPrice } from "@/functions/Utilities";
import BitcoinIcon from "../icons/bitcoinIcon";
import BNBIcon from "../icons/bnbIcon";
import EthereumIcon from "../icons/ethereumIcon";
import USDCIcon from "../icons/usdcIcon";
import USDTIcon from "../icons/usdtIcon";
import Link from "next/link";
import SolanaIcon from "../icons/solanaIcon";
import { motion } from "framer-motion";

function Trending() {
  const { cryptoInformation, currentCurrency, langSettings } = useGlobal();

  function getIconForCrypto(symbol) {
    switch (symbol) {
      case "BTC":
        return <BitcoinIcon />;

      case "ETH":
        return <EthereumIcon />;

      case "BNB":
        return <BNBIcon />;

      case "USDC":
        return <USDCIcon />;

      case "USDT":
        return <USDTIcon />;

      case "SOL":
        return <SolanaIcon />;
      default:
    }
  }

  return (
    <section className={styles.container} id="trending-section">
      <motion.div
        className={styles.decoration_btc}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: 0.125,
        }}
      >
        <BitcoinIcon />
      </motion.div>
      <motion.div
        className={styles.decoration_bnb}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: 0.125,
        }}
      >
        <BNBIcon />
      </motion.div>
      <div className={styles.text}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.125,
          }}
        >
          {langSettings.trending.one}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.125,
          }}
        >
          {langSettings.trending.two}
        </motion.h2>
      </div>
      <motion.div
        className={styles.table_container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: 0.125,
        }}
      >
        <table className={styles.table}>
          <thead>
            <motion.tr
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: 0.125,
              }}
            >
              <th>{langSettings.trending.table.one}</th>
              <th>{langSettings.trending.table.two}</th>
              <th>{langSettings.trending.table.three}</th>
              <th>{langSettings.trending.table.four}</th>
              <th>{langSettings.trending.table.five}</th>
            </motion.tr>
          </thead>
          <tbody>
            {cryptoInformation &&
              cryptoInformation.map((crypto, index) => {
                const IconComponent = getIconForCrypto(
                  crypto.symbol.toUpperCase()
                );

                return (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: 0.125,
                    }}
                  >
                    <td>
                      <div className={styles.currencyCell}>
                        {IconComponent}
                        {crypto.symbol.toUpperCase()}/
                        {currentCurrency.toUpperCase()}
                      </div>
                    </td>
                    <td>
                      {formatPrice(
                        crypto.price[currentCurrency],
                        currentCurrency.toUpperCase()
                      )}
                    </td>
                    <td
                      style={{
                        color:
                          crypto.last_24[currentCurrency] < 0
                            ? "var(--red)"
                            : "var(--green)",
                      }}
                    >
                      {crypto.last_24[currentCurrency].toFixed(2)}&nbsp;%
                    </td>
                    <td
                      style={{
                        color:
                          crypto.last_week[currentCurrency] < 0
                            ? "var(--red)"
                            : "var(--green)",
                      }}
                    >
                      {crypto.last_week[currentCurrency].toFixed(2)}&nbsp;%
                    </td>
                    <td
                      style={{
                        color:
                          crypto.last_month[currentCurrency] < 0
                            ? "var(--red)"
                            : "var(--green)",
                      }}
                    >
                      {crypto.last_month[currentCurrency].toFixed(2)}&nbsp;%
                    </td>
                  </motion.tr>
                );
              })}
          </tbody>
        </table>
      </motion.div>
      <motion.button
        className={styles.cta}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: 0.125,
        }}
      >
        <Link
          href="https://www.coingecko.com/"
          target="_blank"
          noopenner="true"
          noreferrer="true"
        >
          {langSettings.trending.three}
        </Link>
      </motion.button>
    </section>
  );
}

export default Trending;
