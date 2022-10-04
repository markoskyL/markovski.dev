import React from "react";
import styles from "./SquarePrismName.module.scss";
const SquarePrismName = () => {
  return (
    <div className={styles.containerWrapper}>
      <div className={`${styles.floating}, ${styles.sidesContainer}`}>
        <div className={styles.box} id="box">
          <div className={styles.side} id={styles.front}></div>
          <div className={styles.side} id={styles.back}></div>
          <div className={styles.side} id={styles.left}></div>
          <div className={styles.side} id={styles.right}>
            <p className={styles.yellow}>LEONARDO</p>
          </div>
          <div className={styles.side} id={styles.top}>
            <p>MARKOVSKI .</p>
          </div>
          <div className={styles.side} id={styles.bottom}></div>
        </div>
      </div>
      <div className={styles.frontEndDev}>
        <p className={styles.slidingText}>Front-end developer</p>
      </div>
    </div>
  );
};

export default SquarePrismName;
