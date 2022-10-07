import React, { useState } from "react";
import HamburgerBtn from "../HamburgerBtn/HamburgerBtn";
import styles from "./NavSmallDevices.module.scss";
import { Link } from "react-scroll";
const NavSmallDevices = () => {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const handleClick = () => {
    setIsMenuClicked((prev) => !prev);
  };
  return (
    <div className={styles.NavigationSmallDevices}>
      <HamburgerBtn isMenuClicked={isMenuClicked} handleClick={handleClick} />
      <div
        className={`${styles.navigation} ${
          isMenuClicked ? styles.clicked : ""
        }`}
      >
        <div className={styles.navBg}></div>
        <Link
          suppressHydrationWarning={true}
          to="home"
          activeClass={styles.active}
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          delay={100}
          className={styles.navLink}
          onClick={handleClick}
        >
          Home
        </Link>
        <Link
          suppressHydrationWarning={true}
          to="about"
          activeClass={styles.active}
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          delay={100}
          className={styles.navLink}
          onClick={handleClick}
        >
          About
        </Link>
        <Link
          suppressHydrationWarning={true}
          to="projects"
          activeClass={styles.active}
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          delay={100}
          className={styles.navLink}
          onClick={handleClick}
        >
          Projects
        </Link>
        <Link
          suppressHydrationWarning={true}
          to="contact"
          activeClass={styles.active}
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          delay={100}
          className={styles.navLink}
          onClick={handleClick}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavSmallDevices;
