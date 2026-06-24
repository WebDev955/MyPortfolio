//IMPORTS
import Bttn from "./Bttn";
import styles from "./NavBar.module.css";

const NavBar = ({ bioRefProp, skillsRefProp, certRefProp, projRefProp }) => {
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className={styles.navWrapper}>
      <h2>Austin Geisinger</h2>
      <nav className={styles.navContent}>
        <ul>
          <li>
            <p onClick={() => scrollToSection(bioRefProp)}> BIO </p>
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
  );
};

export default NavBar;
