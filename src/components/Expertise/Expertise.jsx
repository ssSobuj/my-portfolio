import React from "react";

import styles from "./Expertise.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Expertise = () => {
  return (
    <fieldset className={styles.container} id="expertise">
      <legend className={styles.title}>Expertise</legend>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </fieldset>
  );
};
