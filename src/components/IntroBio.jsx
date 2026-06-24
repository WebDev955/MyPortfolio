//IMPORTS - Hooks
import { forwardRef } from "react";
//IMPORTS - Style/Images
import styles from "./IntroBio.module.css";
import Bttn from "./ui/Bttn";
import HeadShot from "../../public/Headshot.jpg";
import HeadShotSquare from "../../public/HeadShotSquare.jpg";
import resume from "../../public/AustinGeisingerResume.pdf";

const IntroBio = forwardRef((props, ref) => {
  return (
    <section ref={ref} className={styles.bioMainWrapper}>
      <header className={styles.bioHeader}>
        <h1>Hello!</h1>
        <h2>
          My name is Austin Geisinger and I'm seeking a career change
          <br /> into the world of frontend web development.{" "}
        </h2>
      </header>
      <article className={styles.bioContent}>
        <p>
          Upon realizing my desire for a much needed career change, I picked up
          web development in the winter of 2024. I had a casual interest in web
          development for many years, but never dove into a committed course. freeCodeAcademy changed that for me. It's been an exciting
          journey since.
          <br />
          <br />
          As a creative person, I'm drawn to web developement as a means to keep
          my mind sharp and to learn something new everyday in a field that is
          ever changing. I'm currently seeking employment in a junior frontend
          developer position.
          <br />
          <Bttn className={styles.resumeDl}>
            <a href={resume} download="AustinGeisingerResume" name="Resume">
              Resume
            </a>
          </Bttn>
        </p>
        <div className={styles.imgDiv}>
          <img src={HeadShotSquare} />
        </div>
      </article>
      <div></div>
    </section>
  );
});

export default IntroBio;
