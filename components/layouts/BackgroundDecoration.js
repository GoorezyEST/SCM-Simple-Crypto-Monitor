import React from "react";
import styles from "@/styles/modules/background-decoration.module.css";
import BitcoinIcon from "../icons/bitcoinIcon";
import BNBIcon from "../icons/bnbIcon";
import CardanoIcon from "../icons/cardanoIcon";
import EthereumIcon from "../icons/ethereumIcon";
import USDCIcon from "../icons/usdcIcon";
import USDTIcon from "../icons/usdtIcon";

function BackgroundDecoration() {
  return (
    <div className={styles.container}>
      {/*Top*/}
      <div className={styles.icon} style={{ top: "2.5%", left: "20%" }}>
        <USDTIcon />
      </div>
      <div className={styles.icon} style={{ top: "2.5%", right: "20%" }}>
        <BNBIcon />
      </div>
      <div className={styles.icon} style={{ top: "2.5%", left: "40%" }}>
        <CardanoIcon />
      </div>
      <div className={styles.icon} style={{ top: "2.5%", right: "40%" }}>
        <USDCIcon />
      </div>
      <div className={styles.icon} style={{ top: "2.5%", left: "2.5%" }}>
        <USDTIcon />
      </div>
      <div className={styles.icon} style={{ top: "2.5%", right: "2.5%" }}>
        <BitcoinIcon />
      </div>
      {/*Second row top*/}
      <div className={styles.icon} style={{ top: "17.5%", left: "10.5%" }}>
        <USDTIcon />
      </div>
      <div className={styles.icon} style={{ top: "17.5%", right: "10.5%" }}>
        <BitcoinIcon />
      </div>
      <div className={styles.icon} style={{ top: "17.5%", left: "30%" }}>
        <USDTIcon />
      </div>
      <div className={styles.icon} style={{ top: "17.5%", right: "30%" }}>
        <BNBIcon />
      </div>
      <div className={styles.icon} style={{ top: "17.5%", right: "50%" }}>
        <USDCIcon />
      </div>
      {/*Third row top*/}
      <div className={styles.icon} style={{ top: "35%", left: "20%" }}>
        <BitcoinIcon />
      </div>
      <div className={styles.icon} style={{ top: "35%", right: "20%" }}>
        <BNBIcon />
      </div>
      <div className={styles.icon} style={{ top: "35%", left: "40%" }}>
        <USDTIcon />
      </div>
      <div className={styles.icon} style={{ top: "35%", right: "40%" }}>
        <USDTIcon />
      </div>
      <div className={styles.icon} style={{ top: "35%", left: "2.5%" }}>
        <USDCIcon />
      </div>
      <div className={styles.icon} style={{ top: "35%", right: "2.5%" }}>
        <CardanoIcon />
      </div>
      {/*Fourth row top*/}
      <div className={styles.icon} style={{ top: "55%", left: "10.5%" }}>
        <CardanoIcon />
      </div>
      <div className={styles.icon} style={{ top: "55%", right: "10.5%" }}>
        <BNBIcon />
      </div>
      <div className={styles.icon} style={{ top: "55%", left: "30%" }}>
        <BitcoinIcon />
      </div>
      <div className={styles.icon} style={{ top: "55%", right: "30%" }}>
        <USDTIcon />
      </div>
      <div className={styles.icon} style={{ top: "55%", right: "50%" }}>
        <USDCIcon />
      </div>
      {/*Fifth row top*/}
      <div className={styles.icon} style={{ top: "75%", left: "20%" }}>
        <BNBIcon />
      </div>
      <div className={styles.icon} style={{ top: "75%", right: "20%" }}>
        <BitcoinIcon />
      </div>
      <div className={styles.icon} style={{ top: "75%", left: "40%" }}>
        <USDCIcon />
      </div>
      <div className={styles.icon} style={{ top: "75%", right: "40%" }}>
        <USDTIcon />
      </div>
      <div className={styles.icon} style={{ top: "75%", left: "2.5%" }}>
        <CardanoIcon />
      </div>
      <div className={styles.icon} style={{ top: "75%", right: "2.5%" }}>
        <USDTIcon />
      </div>
      {/*Sixth row top*/}
      <div className={styles.icon} style={{ top: "92.5%", left: "10.5%" }}>
        <USDTIcon />
      </div>
      <div className={styles.icon} style={{ top: "92.5%", right: "10.5%" }}>
        <USDCIcon />
      </div>
      <div className={styles.icon} style={{ top: "92.5%", left: "30%" }}>
        <BNBIcon />
      </div>
      <div className={styles.icon} style={{ top: "92.5%", right: "30%" }}>
        <BitcoinIcon />
      </div>
      <div className={styles.icon} style={{ top: "92.5%", right: "50%" }}>
        <CardanoIcon />
      </div>
    </div>
  );
}

export default BackgroundDecoration;
