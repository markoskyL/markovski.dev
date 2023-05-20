import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiDocumentText } from 'react-icons/hi';

import { F_arialBlack, F_Montserrat } from '../../assets/fonts/appFonts';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <div className={styles.aboutWrapper} id="about">
      <div className={styles.whiteTriangleTop}></div>
      <div className={styles.whiteTriangleBottom}></div>

      <div className={styles.aboutInner}>
        <h1 className={F_arialBlack.className}>about.</h1>
        <div className={styles.textAndImgWrapper}>
          <div className={`${styles.textContainer} ${F_Montserrat.className}`}>
            <p>
              {' '}
              Hi! I am <span className={F_arialBlack.className}>Leonardo</span>
            </p>
            <p>
              Front-end developer based in Macedonia and a graduate of the
              Brainster Front-end Academy.
            </p>
            <p>
              My focus is creating websites that are fast, easy to use, and
              built with best practices.
            </p>
            <p>
              {' '}
              I have also worked as a freelance graphic designer and I believe
              having experience in both fields allows for making the most
              optimal user experiences.
            </p>
            <Link href={'resume/LM_Resume.pdf'} className={`${styles.resumeLink}`}>
              <button className={`${styles.resume} ${F_arialBlack.className}`}>
                Resume
                <HiDocumentText className={styles.eyeIcon} />
              </button>
            </Link>
          </div>
          <div className={styles.imageWrapper}>
            <img src={'/images/Vector.png'} alt="Leonardo Markovski Image" />
          </div>
        </div>
      </div>
      <div className={styles.skillsWrapper}></div>
    </div>
  );
};

export default AboutPage;
