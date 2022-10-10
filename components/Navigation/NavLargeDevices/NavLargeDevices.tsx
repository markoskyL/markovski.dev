import React, { useEffect, useState } from "react";
import styles from "./NavLargeDevices.module.scss";
import { Link } from "react-scroll/modules";

type pageVisibleTypes = "home" | "about" | "projects" | "contact";

const NavLargeDevices = () => {
  const [pageVisible, setPageVisible] = useState<pageVisibleTypes>("home");

  return (
    <div className={styles.NavigationLargeDevices}>
      <Link
        to="home"
        activeClass={styles.active}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        delay={100}
        className={styles.navLink}
        onSetActive={() => setPageVisible("home")}
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
        onSetActive={() => setPageVisible("about")}
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
        onSetActive={() => setPageVisible("projects")}
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
        onSetActive={() => setPageVisible("contact")}
      >
        Contact
      </Link>
    </div>
  );
};

export default NavLargeDevices;
