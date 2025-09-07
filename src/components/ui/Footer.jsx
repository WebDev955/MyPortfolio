import Bttn from "./Bttn"
import styles from "./Footer.module.css"


function Footer() {
    return (
        <header className={styles.footerWrapper}>
            <nav className={styles.footerContent}>
                <ul>
                    <li>
                        <p>Contact</p>
                    </li> 
                    <li>
                        <p>LinkedIN</p>
                    </li> 
                </ul>
            </nav>
        </header>
    )
}

export default Footer