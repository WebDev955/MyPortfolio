//IMPORT - Hooks
import { forwardRef, useState } from "react";
import { Carousel, Flex } from "antd";
import { ProjectCard } from "./ProjectCard";
import { ProjectsData } from "../data/ProjectsData";
//Import - Styles
import styles from "./Projects.module.css"
import BingeLogHome from "../assets/BingeLogHome.png"
import BingeLogShowSearch from  "../assets/BingeLogHome.png"
import BingeLogUserPg from  "../assets/BingeLogHome.png"
import DownArrow from "../assets/DownArrow.png"


const contentStyle = {
  margin: 0,
  width: "320px",
  textAlign: 'center',
  background: '#364d79',
  
};

const Projects = forwardRef((props, ref) =>{
    
    const [viewProject, setViewProject] = useState("")

    const viewProjectHandler = (value) => {
        setViewProject(viewProject === value ? "" : value)
    }

    return (
        <div ref={ref} className={styles.projectsWrapper}>
            <main>
            <h1>Projects</h1>
            {ProjectsData.map((project) =>
                <div key={project.id}>
                    <header>
                        <img src={DownArrow} width="20px" height="20px" onClick={()=> viewProjectHandler (project.id)}/>
                        <h2>{project.title}</h2>
                    </header>
                    {viewProject === project.id && 
                        <ProjectCard key={project.id} project={project}/>
                    }
                </div>
            )}
            </main>
        </div>
    )
})

export default Projects