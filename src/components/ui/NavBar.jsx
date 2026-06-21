import Bttn from "./Bttn"
import styles from "./NavBar.module.css"


//<li><p onClick={() => scrollToSection(resumeRefProp)}> RESUME</p> </li> 

const NavBar = ({ bioRefProp, skillsRefProp, certRefProp, projRefProp }) => {
    
//onClick handler for refs
const scrollToSection = (ref) =>{
    if (ref && ref.current){
        ref.current.scrollIntoView({behavior: 'smooth'});
    }
}
    return (
    <header className={styles.navWrapper}>
        <h2>Austin Geisinger</h2>
        <nav className={styles.navContent}>
             <ul>
                <li>
                    <p onClick={() => scrollToSection(bioRefProp)}> BIO LINK</p>
                </li> 
                <li>
                    <p onClick={() => scrollToSection(skillsRefProp)}> SKILLS </p>
                </li> 
                <li>
                    <p onClick={() => scrollToSection(certRefProp)}> CERTIFICATIONS</p>
                </li> 
                <li>
                    <p onClick={() => scrollToSection(projRefProp)}> PROJECTS </p>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default NavBar