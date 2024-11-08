import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/redy-light-CV.pdf"; // Path to your PDF file
    link.download = "redy-light-CV.pdf"; // Desired file name when downloaded
    link.click();
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sabuj Mia</h1>
        <p className={styles.description}>
          I'm a front-end developer specializing in React. <br />
          Feel free to reach out if you'd like to learn more!
        </p>
        <button
          onClick={handleDownloadCV}
          href="#contact"
          className={styles.contactBtn}
        >
          Download CV
        </button>
      </div>
      <div className={styles.imgDiv}>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
