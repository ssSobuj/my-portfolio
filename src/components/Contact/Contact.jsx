import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <fieldset id="contact" className={styles.container}>
      <legend className={styles.title}>Contact</legend>
      <div className={styles.text}>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mdsobujredoy@gmail.com" target="_blank">
            mdsobujredoy@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/developer-sabuj-mia/"
            target="_blank"
          >
            linkedin.com/myname
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/ssSobuj" target="_blank">
            github.com/myname
          </a>
        </li>
      </ul>
    </fieldset>
  );
};
