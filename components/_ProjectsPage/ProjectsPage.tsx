import React from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard/ProjectCard';
import styles from './ProjectsPage.module.scss';

interface props {
  data: ProjectCardProps[];
}

const ProjectsPage: React.FC<props> = ({ data }) => {
  return (
    <div className={styles.projects} id="projects">
      <div className={styles.projectsInner}>
        <h1 className={styles.pageTitle}>projects.</h1>
        <h2 className={styles.pagePretitle}>
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
