import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Sobuj Mia. All rights reserved.</p>
      <p>
        Developed with JS using React. Check out my{" "}
        <a
          href="https://github.com/ssSobuj"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        for more projects.
      </p>
    </footer>
  );
};

export default Footer;
