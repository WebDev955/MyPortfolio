import Bttn from "./Bttn";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <header className={styles.footerWrapper}>
      <nav className={styles.footerContent}>
        <ul>
          <li>
            <p>Contact</p>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/austin-geisinger/">
              <p>LinkedIN</p>
            </a>
          </li>
          <li>
            <a href="https://github.com/WebDev955">
              <p>GitHub</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Footer;
