import React, { useEffect, useState } from "react";
import styles from "./SideNav.module.scss";
import { Link } from "react-scroll/modules";

type pageVisibleTypes = "home" | "about" | "projects" | "contact";

const SideNav: React.FC = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [pageVisible, setPageVisible] = useState<pageVisibleTypes>("home");
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <div className={styles.sideNav}>
          <div className={styles.sideNavInner}>
            <div className={styles.navLinkAndButtonWrapper}>
              <div
                className={`${styles.navStatusBtn} ${
                  pageVisible === "home" ? styles.active : ""
                }`}
              ></div>
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
            </div>

            <div className={styles.navLinkAndButtonWrapper}>
              <div
                className={`${styles.navStatusBtn} ${
                  pageVisible === "about" ? styles.active : ""
                }`}
              ></div>
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
            </div>

            <div className={styles.navLinkAndButtonWrapper}>
              <div
                className={`${styles.navStatusBtn} ${
                  pageVisible === "projects" ? styles.active : ""
                }`}
              ></div>
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
            </div>

            <div className={styles.navLinkAndButtonWrapper}>
              <div
                className={`${styles.navStatusBtn} ${
                  pageVisible === "contact" ? styles.active : ""
                }`}
              ></div>
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
          </div>
        </div>
      )}
    </>
  );
};

export default SideNav;
