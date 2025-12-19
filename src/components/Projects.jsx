//IMPORT - Hooks
import { forwardRef } from "react";

//Import - Styles
import styles from "./Projects.module.css"
import BingeLogHome from "../assets/BingeLogHome.png"
import BingeLogShowSearch from  "../assets/BingeLogHome.png"
import BingeLogUserPg from  "../assets/BingeLogHome.png"

const Projects = forwardRef((props, ref) =>{
    return (
        <div ref={ref} className={styles.projectsWrapper}>
            <h1>Projects</h1>
            <div className= {styles.projects}>
                <ul>
                    <li>
                        <div>
                         <h2>BingeLog</h2>
                            <div className={styles.bingeLogImgs}>
                                <img src={BingeLogHome}/>
                                <img src={BingeLogShowSearch}/>
                                <img src={BingeLogUserPg}/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h2>Random Topic Generater</h2>
                    </li>
                    <li>
                        <h2>Quiz App</h2>
                    </li>
                    <li>
                        <h2>Magic RPG Game (WIP)</h2>
                    </li>
                </ul>
            </div>
        </div>
    )
})

export default Projects