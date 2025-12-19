//IMPORTS
import { useRef, forwardRef } from "react";

//Import - styles
import styles from "./Certifications.module.css"


const Certifications = forwardRef ((props, ref) => {
    return (
        <div ref={ref} className={styles.certMainWrapper}>
            <h1>Certifications</h1>
            <p><a href="public\FreeCodeCampCert-JavasScript.pdf">FreeCodeCamp - Javascript</a></p> <br/>
            <p><a href="public\FreeCodeCampCert-ResponsiveWebDesign.pdf">FreeCodeCamp - HTML & CSS</a></p><br/>
            <p> udemy - React "The Compplete Guide 2025" by Maximilian Schwarzmüller</p>
            <p>(In Active Progress - Core understanding of React completed)</p>
        </div>
    )
})

export default Certifications