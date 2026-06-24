//Import - Hooks
import { forwardRef } from "react";
//Import
import styles from "./Skills.module.css";
import JavaScriptLogo from "../assets/JavaScriptLogo.png";
import HTML5Logo from "../assets/HTML5Logo.png";
import CSSLogo from "../assets/CSSLogo.png";
import ReactLogo from "../assets/ReactLogo.png";
import CheckBoxChecked from "../assets/CheckboxChecked.png";
import CheckBoxEmpty from "../assets/CheckBoxEmpty.png";

const Skills = forwardRef((props, ref) => {
  return (
    <main ref={ref} className={styles.skillsMainWrapper}>
      <h1>Skill Set</h1>
      <div className={styles.skillsGridWrapper}>
        <div className={styles.coreSkills}>
          <h2>Core Understanding</h2>
          <br />
          <ul>
            <li>
              <img width="70px" src={JavaScriptLogo} />
            </li>
            <li>
              <img width="80px" src={HTML5Logo} />
            </li>
            <li>
              <img width="70px" src={CSSLogo} />
            </li>
            <li>
              <img width="80px" src={ReactLogo} />
            </li>
          </ul>
        </div>
        <div className={styles.knowledgeIn}>
          <h2>Knowledge In</h2>
          <p>
            <img width="20px" src={CheckBoxChecked} /> TypeScript
          </p>
          <p>
            <img width="20px" src={CheckBoxChecked} /> Figma
          </p>
          <p>
            <img width="20px" src={CheckBoxChecked} /> GitHub / Version Control
          </p>
        </div>
        <div className={styles.comingSoon}>
          <h2>Coming Soon</h2>
          <h3>
            While I continue to master React, I will continue
            to learn more.
          </h3>
          <br />
          <p>
            <img width="20px" src={CheckBoxEmpty} /> Next.Js
          </p>
          <p>
            <img width="20px" src={CheckBoxEmpty} /> BootStrap
          </p>
          <p>
            <img width="20px" src={CheckBoxEmpty} /> SASS
          </p>
          <p>
            <img width="20px" src={CheckBoxEmpty} /> Additional frameworks{" "}
          </p>
          <p>
            <img width="20px" src={CheckBoxEmpty} /> Deeper understanding of the
            backend and databases
          </p>
        </div>
        <div className={styles.additionalSkills}>
          <h2>Additional Skills</h2>
          <p>
            <img width="20px" src={CheckBoxChecked} /> 5 years of professional
            work experience in an office setting.
          </p>
          <p>
            <img width="20px" src={CheckBoxChecked} /> Over 10 years in customer
            service based roles
          </p>
          <p>
            <img width="20px" src={CheckBoxChecked} /> Willing to learn
          </p>
          <p>
            <img width="20px" src={CheckBoxChecked} /> Creative
          </p>
        </div>
      </div>
    </main>
  );
});
export default Skills;
