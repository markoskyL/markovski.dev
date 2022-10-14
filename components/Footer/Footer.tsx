import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.Footer}>
      <p>&copy; 2022 | Designed and coded by Leonardo Markovski</p>
      <div className={styles.contactIcons}>
        <Link
          href={"https://www.linkedin.com/in/leonardo-markovski-97293a162/"}
        >
          <a target={"_blank"}>
            <BsLinkedin />
          </a>
        </Link>
        <Link href={"https://github.com/markoskyL"}>
          <a target={"_blank"}>
            <BsGithub />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
