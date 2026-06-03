import { ProjectsData } from "../data/ProjectsData"
import styles from "../components/ProjectCard.module.css"
import { useState } from "react"

export const ProjectCard = ({project, key}) => {
 

 return (
        <main key={key} className= {styles.projectWrapper}>
                <section key = {project.id}>
                    <section className= {styles.techStackLinks}>
                        <ul>
                            <li>{project.tech[0]}</li>
                            <li>{project.tech[1]}</li>
                            <li>{project.tech[2]}</li>
                            <li>{project?.tech[3]}</li>
                            <li><a>{project.gitRepo}</a></li>
                            <li><a>{project.liveDemo}</a></li>                  
                        </ul>
                    </section>
                    <article className={styles.projectDesc}>
                        <p>{project.description}</p>
                    </article>
                    <section className = {styles.projectImgWrapper}>
                        <img src={project.images[0]}/>
                        <img src={project.images[1]}/>
                    </section>
                </section>
        </main>
    )
}