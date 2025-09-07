//Import - Hooks
import { forwardRef } from "react";

//Import - Styles
import styles from "./Resume.module.css"


const Resume = forwardRef ((props, ref) =>{
    return (
        <main reff={ref} className={styles.resMainWrapper}>
            <h1>Resume</h1>
            <article>
                <h2>Education</h2>
                <div className={styles.school}>
                    <h3>Kutztown University</h3>
                    <p>August 2018</p>
                </div>
                <div className={styles.degree}>
                    <h3>Major:</h3>
                    <p>English/Professional Writing</p>
                    <h3>Minors: </h3>
                    <p>Relations and Digital Communication & New Media</p>
                </div>
                <div>
                    <hr></hr>
                    <h2>Work Experince</h2>
                    <h3>Customer Service Administrator | Penske Truck Leasing</h3>
                    <p>July 2020 - Present</p>
                    <ul>
                        <li>
                            <p>Schedule a large number of clients for preventative maintenance</p>
                        </li>
                        <li>
                            <p>Send out weekly emails and called clients regarding upcoming service</p>
                        </li>
                        <li>
                            <p>Hold weekly conference calls with regional Penske shops</p>
                        </li>
                        <li>
                            <p>Provide weekly stats and updates on clients to regional Penske shops</p>
                        </li>
                    </ul>
                </div>
            </article>
        </main>
    )
})

export default Resume