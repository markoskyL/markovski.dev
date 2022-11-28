import React, { useEffect, useState } from "react";
import HamburgerBtn from "../Navbar/HamburgerBtn";
import styles from "./NavSmallDevices.module.scss";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const NavSmallDevices = () => {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const handleClick = () => {
    setIsMenuClicked((prev) => !prev);
  };
  useEffect(() => {
    isMenuClicked
      ? document.body.classList.add("preventScroll")
      : document.body.classList.remove("preventScroll");
  }, [isMenuClicked]);

  return (
    <div className={styles.NavigationSmallDevices}>
      <HamburgerBtn isMenuClicked={isMenuClicked} handleClick={handleClick} />
      <div
        className={`${styles.navigation} ${
          isMenuClicked ? styles.clicked : ""
        }`}
      >
        <div className={styles.navBg}></div>
        <ScrollLink
          to="home"
          activeClass={styles.active}
          spy={true}
          smooth={true}
          duration={200}
          offset={0}
          className={styles.navLink}
          onClick={handleClick}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          activeClass={styles.active}
          spy={true}
          smooth={true}
          duration={200}
          offset={0}
          className={styles.navLink}
          onClick={handleClick}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="projects"
          activeClass={styles.active}
          spy={true}
          smooth={true}
          duration={200}
          offset={0}
          className={styles.navLink}
          onClick={handleClick}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          activeClass={styles.active}
          spy={true}
          smooth={true}
          duration={200}
          offset={0}
          className={styles.navLink}
          onClick={handleClick}
        >
          Contact
        </ScrollLink>
        <div className={styles.contactIcons}>
          <Link href={"https://www.linkedin.com/in/markovskiL/"}>
            <a target={"_blank"}>
              <BsLinkedin className={styles.linkedIn} size={"2rem"} />
            </a>
          </Link>
          <Link href={"https://github.com/markovskiL"}>
            <a target={"_blank"}>
              <BsGithub className={styles.gitHub} size={"2rem"} />
            </a>
          </Link>
          <Link href={"mailto: markovski.dev@gmail.com"}>
            <a>
              <MdEmail size={"2rem"} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavSmallDevices;
