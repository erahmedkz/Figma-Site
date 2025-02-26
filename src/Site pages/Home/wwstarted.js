import React from "react";
import styles from '../../styles/WhyWeStarted.module.css';

function CompanyStory() {
  return (
    <div className={styles.container}>
      <img 
        src="https://s3-alpha-sig.figma.com/img/9b1a/e821/ce4666853a588ecefa1d1add86d0a4da?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GCTLIkEaX7m-grSB6m0wrX2-vmPSs20MgFerNT4PPVN5eRiDmazBXAgJn2JZPJd7pVJvDLbWRW6iGAVEV75N8ce9IOZZFoUyacQAeem6tsBq-z6o7MRk1ZQIHj~X3PMeX~egnSEvbFCu2D00HplxLbtqqEgZiqa4dJYPPwM4~JkOd98GxVZFCzjKuPZ5vKch5pz~O5F1LDen5cCKbgvjiKTxQJ3zhGxnLsm1eSv9wxhEG-gL8547FR2yLnEcWs7axChI6-mZFcPFcPqQM3iHg2OMeRA459y1mDIMVmnY0xMMN3s59nJAgCdaYSrMDtvNz6M7OHIFS9g0ZFSGLEZ7dQ__" 
        alt="Our Story" 
        className={styles.image}
      />
      <div className={styles.content}>
        <span className={styles.label}>WHY WE STARTED</span>
        <h2 className={styles.title}>
          It started out as a simple idea and evolved into our passion
        </h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <button className={styles.button}>
          Discover our story &gt;
        </button>
      </div>
    </div>
  );
}

export default CompanyStory;