import { ProjectsData } from "../data/ProjectsData"
import styles from "../components/ProjectCard.module.css"

export const ProjectCard = ({project, key}) => {
 
 return (
        <main key={key} className= {styles.projectWrapper}>
                <section key = {project.id}>
                    <section className= {styles.techStackLinks}>
                        <ul>
                             {project.tech.map((tech) =>
                                    <li>{tech}</li> 
                                )}      
                            <li><a href={project.gitRepo}>Repo Link</a></li>
                            <li><a href={project.liveDemo}>Live Demo</a></li>                  
                        </ul>
                    </section>
                    <article className={styles.projectDesc}>
                        <p>{project.description}</p>
                        <div>
                            <ul>
                                <h2>Future Features</h2>
                                {project.futureFeatures.map((feature) =>
                                    <li>{feature}</li> 
                                )}                            
                            </ul>
                        </div>
                    </article>
                    <section className = {styles.projectImgWrapper}>
                        {project.images.map((image) =>
                            <img src={image}/>
                        )}
                    </section>
                </section>
        </main>
    )
}