import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sabuj</h1>
        <p className={styles.description}>
          I'm a front-end developer using React <br /> Reach out if you'd like
          to learn more!
        </p>
        <a href="mdsobujredoy@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.imgDiv}>
        <img
          // src={getImageUrl("hero/heroImage.png")}j
          src={getImageUrl("hero/resiger.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
