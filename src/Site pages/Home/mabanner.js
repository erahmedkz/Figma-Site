import React from 'react';
import styles from '../../styles/MainBanner.module.css';
console.log('Styles loaded:', styles); 

function MainBanner() {
  return (
    <div className={styles.mainBannerSection}>
      <div className={styles.bannerBackground}></div>
      <div className={styles.bannerOverlay}></div>
      <div className={styles.bannerContent}>
        <p className={styles.contentCategory}>POSTED ON STARTUP</p>
        <h1 className={styles.bannerHeading}>Step-by-step guide to choosing great font pairs</h1>
        <p className={styles.authorDetails}>By James West | May 23, 2022</p>
        <p className={styles.bannerDescription}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <button className={styles.primaryButton}>Read More {">"}</button>
      </div>
    </div>
  );
}

export default MainBanner;