import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <fieldset className={styles.container} id="about">
      <legend className={styles.title}>About Me</legend>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>React Developer</h3>
              <p>
                I have experience in reactJS for building user interface and other things.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </fieldset>
  );
};
