import Image from 'next/image';
import React from 'react';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <div className={styles.aboutWrapper} id="about">
      <div className={styles.whiteTriangleTop}></div>
      <div className={styles.whiteTriangleBottom}></div>

      <div className={styles.aboutInner}>
        <h1>about.</h1>
        <div className={styles.textAndImgWrapper}>
          <div className={styles.textContainer}>
            <p>
              {' '}
              Hi! I am <span className={styles.name}>Leonardo</span>
            </p>
            <p>
              Front-end developer based in Germany and a graduate of the
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
