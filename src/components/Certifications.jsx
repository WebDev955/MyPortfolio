//IMPORTS
import {forwardRef } from "react";

//Import - styles
import styles from "./Certifications.module.css"
import JavaScriptCert from "../../public/Javascript.pdf"
import ResponsiveWebCrt from "../../public/ResponsiveWebDesign.pdf"


const Certifications = forwardRef ((props, ref) => {
    return (
        <div ref={ref} className={styles.certMainWrapper}>
            <h1>Certifications</h1>
            <p><a href={JavaScriptCert}>FreeCodeCamp - Javascript</a></p> <br/>
            <p><a href={ResponsiveWebCrt}>FreeCodeCamp - HTML & CSS</a></p><br/>
            <p> udemy - React "The Compplete Guide 2025" by Maximilian Schwarzmüller</p>
            <p>(In Active Progress - Core understanding of React completed)</p>
        </div>
    )
})

export default Certifications