import React, { useRef } from "react";
import styles from "./SquarePrismName.module.scss";
const SquarePrismName = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (rotateX: number) => {
    if (!boxRef.current) return;
    boxRef.current.style.transform = `rotateY(25deg) rotateX(-${rotateX}deg) scale(1.1)`;
  };
  const handleMouseLeave = () => {
    if (!boxRef.current) return;
    boxRef.current.style.transform = "rotateY(0deg) rotateX(-40deg)";
  };

  return (
    <div className={styles.containerWrapper}>
      <div className={`${styles.floating}, ${styles.sidesContainer}`}>
        <div className={styles.box} id="box" ref={boxRef}>
          <div className={styles.side} id={styles.front}></div>
          <div className={styles.side} id={styles.back}></div>
          <div className={styles.side} id={styles.left}></div>
          <div
            className={styles.side}
            id={styles.right}
            onMouseEnter={() => handleMouseEnter(20)}
            onMouseLeave={handleMouseLeave}
          >
            <p className={styles.yellow}>LEONARDO</p>
          </div>
          <div
            className={styles.side}
            id={styles.top}
            onMouseEnter={() => handleMouseEnter(70)}
            onMouseLeave={handleMouseLeave}
          >
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

