import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import styles from "./ProjectsPage.module.scss";
import data from "../../assets/projects.json";
const ProjectsPage = () => {
  return (
    <div className={styles.projects} id="projects">
      <div className={styles.projectsInner}>
        <h1>projects.</h1>
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
