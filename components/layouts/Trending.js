import React from "react";
import styles from "@/styles/modules/trending.module.css";
import { useGlobal } from "@/context/GlobalContext";
import { formatPrice } from "@/functions/Utilities";
import BitcoinIcon from "../icons/bitcoinIcon";
import BNBIcon from "../icons/bnbIcon";
import CardanoIcon from "../icons/cardanoIcon";
import EthereumIcon from "../icons/ethereumIcon";
import USDCIcon from "../icons/usdcIcon";
import USDTIcon from "../icons/usdtIcon";
import Link from "next/link";
import SolanaIcon from "../icons/solanaIcon";

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
      <div className={styles.text}>
        <span>{langSettings.trending.one}</span>
        <h2>{langSettings.trending.two}</h2>
      </div>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{langSettings.trending.table.one}</th>
              <th>{langSettings.trending.table.two}</th>
              <th>{langSettings.trending.table.three}</th>
              <th>{langSettings.trending.table.four}</th>
              <th>{langSettings.trending.table.five}</th>
            </tr>
          </thead>
          <tbody>
            {cryptoInformation &&
              cryptoInformation.map((crypto, index) => {
                const IconComponent = getIconForCrypto(
                  crypto.symbol.toUpperCase()
                );

                return (
                  <tr key={index}>
                    <td className={styles.currencyCell}>
                      {IconComponent}
                      {crypto.symbol.toUpperCase()}/
                      {currentCurrency.toUpperCase()}
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
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <button className={styles.cta}>
        <Link
          href="https://www.coingecko.com/"
          target="_blank"
          noopenner="true"
          noreferrer="true"
        >
          {langSettings.trending.three}
        </Link>
      </button>
    </section>
  );
}

export default Trending;
