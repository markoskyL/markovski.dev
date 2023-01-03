import ProjectCard, { ProjectCardProps } from './ProjectCard/ProjectCard';

import { F_arialBlack } from '../../assets/fonts/appFonts';
import React from 'react';
import styles from './ProjectsPage.module.scss';

interface props {
  data: ProjectCardProps[];
}

const ProjectsPage: React.FC<props> = ({ data }) => {
  return (
    <div className={styles.projects} id="projects">
      <div className={styles.projectsInner}>
        <h1 className={`${styles.pageTitle} ${F_arialBlack.className}`}>
          projects.
        </h1>
        <h2 className={`${styles.pagePretitle} ${F_arialBlack.className}`}>
          A selection of stuff i&apos;ve built
        </h2>
        <div className={styles.projectsCardsContainer}>
          {data.map((project) => (
            <ProjectCard {...project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
