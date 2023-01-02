import React, { useEffect, useState } from 'react';
import SplideSlider, { imageDataProps } from '../../SplideSlider/SplideSlider';

import { BiGlobe } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import LightBox from '../../LightBox/LightBox';
import Link from 'next/link';
import styles from './ProjectCard.module.scss';

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imgSrc: imageDataProps[];
  websiteURL: string;
  githubURL: string;
  technologies: string[];
  disabled?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const reverse = Boolean(parseInt(props.id) % 2);
  const [lightBox, setLightBox] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClick = () => {
    setLightBox((prev) => !prev);
  };

  useEffect(() => {
    lightBox
      ? document.body.classList.add('preventScroll')
      : document.body.classList.remove('preventScroll');
  }, [lightBox]);

  return (
    <div
      className={`${styles.cardWrapper} ${reverse ? styles.reverse : ''} ${
        props.disabled === true ? styles.disabled : ''
      }`}
      id={props.id}
    >
      <div className={styles.imgWrapper}>
        <SplideSlider
          imagesData={props.imgSrc}
          handleClick={handleClick}
          setCurrentIndex={setCurrentIndex}
        />
      </div>

      <div className={styles.projectInfo}>
        <div>
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.description}>{props.description}</p>
          <div className={styles.technologies}>
            {props.technologies.map((tech) => (
              <span className={styles.technology} key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.linksWrapper}>
          <Link
            href={props.websiteURL}
            className={styles.website}
            target="_blank"
          >
            Website
            <BiGlobe size={'1.3rem'} />
          </Link>
          <Link
            href={props.githubURL}
            className={styles.github}
            target="_blank"
          >
            Github <FaGithub size={'1.3rem'} />
          </Link>
        </div>
      </div>
      {lightBox && (
        <LightBox
          images={props.imgSrc}
          onClose={handleClick}
          currentIndex={currentIndex}
        />
      )}
    </div>
  );
};

export default ProjectCard;
