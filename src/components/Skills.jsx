//Import - Hooks
import {forwardRef } from "react";

//Import 
import styles from "./Skills.module.css"

const Skills = forwardRef((props, ref) => {
    return (
        <main ref = {ref} className={styles.skillsMainWrapper}>
            <h1>Skill Set</h1>
            <div className={styles.skillsGridWrapper}>
                <div className={styles.coreSkills}>
                    <h2>Core Understanding</h2><br/>
                        <ul>
                            <li><img width ="70px" src = "JavaScriptLogo.png"/></li>
                            <li><img width ="80px" src="HTML5Logo.png"/></li>
                            <li><img width ="70px" src="CSSLogo.png"/></li>
                            <li><img width ="80px" src="ReactLogo.png"/></li>
                        </ul>
                </div>
                <div className={styles.knowledgeIn}>
                    <h2>Knowledge In</h2>
                        <p><img width = "20px" src = "CheckboxChecked.png"/> Figma</p>
                        <p><img width = "20px" src = "CheckboxChecked.png"/> GitHub / Version Control</p>
                </div>
                <div className={styles.comingSoon}>
                    <h2>Coming Soon</h2>
                    <h3>While I continue to master functionalites of React, I will continue to learn more</h3><br/>
                            <p><img width = "20px" src = "CheckboxEmpty.png"/> TypeScript</p>
                            <p><img width = "20px" src = "CheckboxEmpty.png"/> Next.Js</p>
                            <p><img width = "20px" src = "CheckboxEmpty.png"/> BootStrap</p>
                            <p><img width = "20px" src = "CheckboxEmpty.png"/> SASS</p>
                            <p><img width = "20px" src = "CheckboxEmpty.png"/> An additional framekwork such as Angluar/Vue</p>
                            <p><img width = "20px" src = "CheckboxEmpty.png"/> Deeper understanding of the backend, with firm understaning of database</p>    
                </div>
                <div className={styles.additionalSkills}>
                    <h2>Additional Skills</h2>
                            <p><img width = "20px" src = "CheckboxChecked.png"/> 5 years of professional work experience in an office setting.</p>
                            <p><img width = "20px" src = "CheckboxChecked.png"/> Over 10 years in customer service based roles</p>
                            <p><img width = "20px" src = "CheckboxChecked.png"/> Willing to learn</p>
                            <p><img width = "20px" src = "CheckboxChecked.png"/> Creative</p>
                </div>
        </div>
        </main>
    )
})
export default Skills