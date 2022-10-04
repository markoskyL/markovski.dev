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

// Cursor logic

// let innerCursor = document.querySelector(".inner-cursor");
// let outerCursor = document.querySelector(".outer-cursor");

// document.addEventListener("mousemove", moveCursor);

// function moveCursor(e) {
//   let x = e.clientX;
//   let y = e.clientY;
//   innerCursor.style.left = `${x}px`;
//   innerCursor.style.top = `${y}px`;

//   outerCursor.style.left = `${x}px`;
//   outerCursor.style.top = `${y}px`;
// }

// let links = Array.from(document.querySelectorAll("a"));
// links.forEach((link) => {
//   link.addEventListener("mouseover", () => {
//     innerCursor.classList.add("grow");
//     outerCursor.classList.add("grow");
//   });
//   link.addEventListener("mouseleave", () => {
//     innerCursor.classList.remove("grow");
//     outerCursor.classList.remove("grow");
//   });
// });
