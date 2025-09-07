//IMPORTS - Hooks
import { forwardRef } from "react";
//IMPORTS - Components 
//IMPORTS - Style/Images
import styles from "./IntroBio.module.css"
import Bttn from "./ui/Bttn"





const IntroBio = forwardRef((props, ref) => {

    return (
        <section ref = {ref} className={styles.bioMainWrapper}> 
            <header className={styles.bioHeader}>
                <h1>Hello!</h1>   
                <h2>My name is Austin Geisinger and I'm actively seeking a career change<br/> into the world of frontend web development. </h2> <br/>
            </header>   
            <article className={styles.bioContent}>
                <p> 
                    Upon realizing my desire for a much needed career change, I picked up web developement in the winter of 2024. I've had a casual interest in web developement for many years, but never dove into a committed course with it. FreeCodeAcademy changed that for me. It's been an exciting journey since. 
                <br/><br/>
                    As a creative learner, I'm drawn to web developement as a means to keep my sharp and to learn something new everyday in a field that is ever changing with new techniqes.I'm actively seeking employment junior frontend developer position.                 
                    <br/>
                    <Bttn className={styles.resumeDl}>
                    <a href='/GeisingerResume.pdf' download="AustinGeisingerResume" name="Resume">Resume
                    </a>
                </Bttn>
                </p>
                <img  src = "public\UserImage.png"/>  
             </article> 
            <div>
                
            </div>
        </section> 
    )
})

export default IntroBio
