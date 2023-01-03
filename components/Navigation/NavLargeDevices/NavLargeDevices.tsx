import React, { useEffect, useState } from 'react';

import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { Link as ScrollLink } from 'react-scroll/modules';
import styles from './NavLargeDevices.module.scss';

const NavLargeDevices = () => {
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentScrollPosition]);

  return (
    <div
      className={`${styles.NavigationLargeDevices} ${
        newScrollPosition >= oldScrollPosition && newScrollPosition > 55
          ? styles.scrollDown
          : ''
      } ${currentScrollPosition > 0 ? styles.navShadow : ''}`}
    >
      <ScrollLink
        to="home"
        activeClass={styles.active}
        spy={true}
        smooth={true}
        offset={-100}
        duration={-200}
        className={styles.navLink}
      >
        Home
      </ScrollLink>

      <ScrollLink
        to="about"
        activeClass={styles.active}
        spy={true}
        smooth={true}
        offset={-100}
        duration={200}
        className={styles.navLink}
      >
        About
      </ScrollLink>

      <ScrollLink
        to="projects"
        activeClass={styles.active}
        spy={true}
        smooth={true}
        offset={-100}
        duration={200}
        className={styles.navLink}
      >
        Projects
      </ScrollLink>

      <ScrollLink
        to="contact"
        activeClass={styles.active}
        spy={true}
        smooth={true}
        offset={-100}
        duration={200}
        className={styles.navLink}
      >
        Contact
      </ScrollLink>

      <div className={styles.contactIcons}>
        {/* <Link
          href={
            'https://drive.google.com/file/d/196US_VIjN4_4r-ZEf5Otl1xAYWt17wvv/view?usp=sharing'
          }
          className={styles.resume}
          target={'_blank'}
        >
          CV
        </Link> */}
        <Link href={'https://www.linkedin.com/in/markovskiL'} target={'_blank'}>
          <BsLinkedin className={styles.linkedIn} size={'1.3rem'} />
        </Link>
        <Link href={'https://github.com/markovskiL'} target={'_blank'}>
          <BsGithub className={styles.gitHub} size={'1.3rem'} />
        </Link>
        <Link href={'mailto: markovski.dev@gmail.com'}>
          <MdEmail className={styles.email} size={'1.3rem'} />
        </Link>
      </div>
    </div>
  );
};

export default NavLargeDevices;
