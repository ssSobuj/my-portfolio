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
        {/* <ul className={styles.aboutItems}>
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
                I have experience in reactJS for building user interface and
                other things.
              </p>
            </div>
          </li>
        </ul> */}
        <div className={styles.aboutItems}>
          <p>
            Hello! I'm Sabuj Mia, a front-end developer focused on creating
            responsive, high-performance web applications. With expertise in
            React and Next.js, I build interactive, user-friendly interfaces
            that deliver a seamless experience across all devices. I’m skilled
            in JavaScript, TypeScript, Tailwind CSS, and SASS.
          </p>
          <p>
            I love turning complex ideas into intuitive, efficient applications.
            I stay up-to-date with the latest in web development to deliver top
            solutions. If you're looking to enhance user engagement or site
            functionality, let’s connect—I’d be excited to bring your vision to
            life!
          </p>
        </div>
      </div>
    </fieldset>
  );
};
