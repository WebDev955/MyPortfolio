//IMPORT - Hooks
import { forwardRef, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectsData } from "../data/ProjectsData";
//Import - Styles
import styles from "./Projects.module.css";
import DownArrow from "../assets/DownArrow.png";

const Projects = forwardRef((props, ref) => {
  const [viewProject, setViewProject] = useState("");

  const viewProjectHandler = (value) => {
    setViewProject(viewProject === value ? "" : value);
  };

  return (
    <div ref={ref} className={styles.projectsWrapper}>
      <main className={styles.projectsContent}>
        <h1>Projects</h1>
        {ProjectsData.map((project) => (
          <div key={project.id}>
            <header>
              <img
                src={DownArrow}
                width="20px"
                height="20px"
                onClick={() => viewProjectHandler(project.id)}
              />
              <h2>{project.title}</h2>
            </header>
            {viewProject === project.id && (
              <ProjectCard key={project.id} project={project} />
            )}
          </div>
        ))}
      </main>
    </div>
  );
});

export default Projects;
