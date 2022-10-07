import React from "react";
import styles from "./HamburgerBtn.module.scss";
interface Props {
  isMenuClicked: boolean;
  handleClick: () => void;
}
const HamburgerBtn: React.FC<Props> = ({ isMenuClicked, handleClick }) => {
  return (
    <>
      <div
        className={`${styles.hamburgerBtn} ${
          isMenuClicked ? styles.clicked : ""
        }`}
        onClick={handleClick}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default HamburgerBtn;
