import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/modules/convert.module.css";
import BitcoinIcon from "../icons/bitcoinIcon";
import EthereumIcon from "../icons/ethereumIcon";
import BNBIcon from "../icons/bnbIcon";
import USDCIcon from "../icons/usdcIcon";
import USDTIcon from "../icons/usdtIcon";
import SolanaIcon from "../icons/solanaIcon";
import ChevronDownIcon from "../icons/chevronDownIcon";
import { useGlobal } from "@/context/GlobalContext";
import { formatPrice } from "@/functions/Utilities";
import RefreshIcon from "../icons/refreshIcon";
import { motion } from "framer-motion";

function Convert() {
  const { cryptoInformation, currentCurrency, langSettings } = useGlobal();

  const [fromState, setFromState] = useState(null);
  const [fromMenu, setFromMenu] = useState(false);
  const fromInputRef = useRef(null);

  const [toState, setToState] = useState(null);
  const [toMenu, setToMenu] = useState(false);
  const toInputRef = useRef(null);

  useEffect(() => {
    if (cryptoInformation) {
      setFromState(cryptoInformation[0]);
      setToState(cryptoInformation[1]);
    }
  }, [cryptoInformation]);

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

  const convertCryptos = () => {
    const amount = fromInputRef.current.value;

    const fromPrice = fromState.price[currentCurrency];

    const toPrice = toState.price[currentCurrency];

    const result = (amount / toPrice) * fromPrice;

    toInputRef.current.value = result.toFixed(5);
  };

  const swapCryptos = () => {
    const previousFromCrypto = fromState;
    const previousToCrypto = toState;

    const previousFromInput = fromInputRef.current.value;

    setFromState(previousToCrypto);
    setToState(previousFromCrypto);

    const amount = previousFromInput;

    const fromPrice = previousToCrypto.price[currentCurrency];

    const toPrice = previousFromCrypto.price[currentCurrency];

    const result = (amount / toPrice) * fromPrice;

    fromInputRef.current.value = previousFromInput;
    toInputRef.current.value = result.toFixed(5);
  };

  const restart = () => {
    setFromState(cryptoInformation[0]);
    setToState(cryptoInformation[1]);
    fromInputRef.current.value = "0";
    toInputRef.current.value = "0";
  };

  return (
    <section className={styles.container} id="convert-section">
      <div className={styles.text}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.125,
          }}
        >
          {langSettings.convert.one}
        </motion.span>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.125,
          }}
        >
          {langSettings.convert.two}
        </motion.h3>
      </div>
      <div className={styles.previsualize}>
        <motion.div
          className={styles.decoration_usdc}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.125,
          }}
        >
          <USDCIcon />
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.125,
          }}
        >
          {langSettings.convert.three}
        </motion.span>
        <motion.div
          className={styles.previsualize_item}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.125,
          }}
        >
          <div className={styles.previsualize_number}>
            <span>{langSettings.convert.four}</span>
            <input type="number" defaultValue="0" ref={fromInputRef} />
          </div>
          <div
            className={styles.previsualize_dropdown}
            onClick={() => {
              if (toMenu) {
                setFromMenu((prev) => !prev);
                setToMenu((prev) => !prev);
              } else {
                setFromMenu((prev) => !prev);
              }
            }}
          >
            {fromState !== null &&
              getIconForCrypto(fromState.symbol.toUpperCase())}
            <span>{fromState !== null && fromState.name}</span>
            <div className={styles.previsualize_down}>
              <ChevronDownIcon />
            </div>
            <div
              className={styles.previsualize_sub}
              style={{ transform: fromMenu ? "scale(1)" : "scale(0)" }}
            >
              {cryptoInformation &&
                fromState &&
                toState &&
                cryptoInformation.map((crypto) => {
                  if (
                    crypto.symbol !== fromState.symbol &&
                    crypto.symbol !== toState.symbol
                  ) {
                    return (
                      <div
                        className={styles.previsualize_sub_item}
                        key={crypto.symbol}
                        onClick={() => {
                          setFromState(crypto);
                        }}
                      >
                        {getIconForCrypto(crypto.symbol.toUpperCase())}
                        <span>{crypto.name}</span>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </motion.div>
        <div className={styles.restart} onClick={() => swapCryptos()}>
          <RefreshIcon />
        </div>
        <motion.div
          className={styles.previsualize_item}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.125,
          }}
        >
          <div className={styles.previsualize_number}>
            <span>{langSettings.convert.five}</span>
            <input type="number" defaultValue="0" disabled ref={toInputRef} />
          </div>
          <div
            className={styles.previsualize_dropdown}
            onClick={() => {
              if (fromMenu) {
                setToMenu((prev) => !prev);
                setFromMenu((prev) => !prev);
              } else {
                setToMenu((prev) => !prev);
              }
            }}
          >
            {toState !== null && getIconForCrypto(toState.symbol.toUpperCase())}
            <span>{toState !== null && toState.name}</span>
            <div className={styles.previsualize_down}>
              <ChevronDownIcon />
            </div>
            <div
              className={styles.previsualize_sub}
              style={{ transform: toMenu ? "scale(1)" : "scale(0)" }}
            >
              {cryptoInformation &&
                toState &&
                fromState &&
                cryptoInformation.map((crypto) => {
                  if (
                    crypto.symbol !== toState.symbol &&
                    crypto.symbol !== fromState.symbol
                  ) {
                    return (
                      <div
                        className={styles.previsualize_sub_item}
                        key={crypto.symbol}
                        onClick={() => {
                          setToState(crypto);
                        }}
                      >
                        {getIconForCrypto(crypto.symbol.toUpperCase())}
                        <span>{crypto.name}</span>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.125,
          }}
        >
          <button className={styles.cta} onClick={() => convertCryptos()}>
            {langSettings.convert.six}
          </button>

          <button className={styles.secondary_cta} onClick={() => restart()}>
            {langSettings.convert.seven}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Convert;
