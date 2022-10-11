import React, { useEffect, useRef, useState } from "react";
import styles from "./NavLargeDevices.module.scss";
import { Link } from "react-scroll/modules";

const NavLargeDevices = () => {
  const Nav = useRef<HTMLDivElement>(null);
  const [currentScrollPosition, setCurrentScrollPosition] = useState<number>(
    window.pageYOffset
  );
  const [oldScrollPosition, setOldScrollPosition] = useState<number>(0);
  const [newScrollPosition, setNewScrollPosition] = useState<number>(0);
  const handleScroll = () => {
    setCurrentScrollPosition(window.pageYOffset);
    setOldScrollPosition(newScrollPosition);
    setNewScrollPosition(currentScrollPosition);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentScrollPosition]);

  return (
    <div
      className={`${styles.NavigationLargeDevices} ${
        !(newScrollPosition <= oldScrollPosition) && styles.scrollDown
      }`}
      ref={Nav}
    >
      <Link
        to="home"
        activeClass={styles.active}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        delay={100}
        className={styles.navLink}
      >
        Home
      </Link>
      <Link
        to="about"
        activeClass={styles.active}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        delay={100}
        className={styles.navLink}
      >
        About
      </Link>

      <Link
        to="projects"
        activeClass={styles.active}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        delay={100}
        className={styles.navLink}
      >
        Projects
      </Link>

      <Link
        to="contact"
        activeClass={styles.active}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        delay={100}
        className={styles.navLink}
      >
        Contact
      </Link>
    </div>
  );
};

export default NavLargeDevices;
