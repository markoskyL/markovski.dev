import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import { BiGlobe } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  websiteURL: string;
  githubURL: string;
  technologies: string[];
}
const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const reverse = Boolean(parseInt(props.id) / 2);
  console.log(reverse);
  return (
    <div
      className={`${styles.cardWrapper} ${reverse ? styles.reverse : ""}`}
      id={props.id}
    >
      <div className={styles.imgWrapper}>
        <Image
          src={props.imgSrc}
          layout={"fill"}
          objectFit="cover"
          alt={`${props.title} image`}
          className={styles.image}
        />
      </div>

      <div className={styles.projectInfo}>
        <div>
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.description}>{props.description}</p>
          <div className={styles.technologies}>
            {props.technologies.map((tech) => (
              <span className={styles.technology} key={tech + "1"}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.linksWrapper}>
          <Link href={props.websiteURL}>
            <a className={styles.website}>
              Website
              <BiGlobe size={"1.3rem"} />
            </a>
          </Link>
          <Link href={props.githubURL}>
            <a className={styles.github}>
              Github <FaGithub size={"1.3rem"} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
