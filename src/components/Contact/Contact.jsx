import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2y5vgh1",
        "template_sdusixi",
        form.current,
        "-3W3Ae_tDcZcDgkfg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <fieldset id="contact" className={styles.container}>
        <legend className={styles.title}>Contact</legend>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <p>Live Your Message Here!</p>
          <div>
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" rows={5} />
          </div>
          <button>Send</button>
        </form>

        <ul className={styles.links}>
          <p>Feel free to reach out!</p>
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
              linkedin.com/sabuj-mia
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <a href="https://github.com/ssSobuj" target="_blank">
              github.com/sabuj-mia
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/phone.jpg")} alt="Phone nomber" />
            <a href="tel:+8801731620933">+88 0173-1620-933</a>
          </li>
        </ul>
      </fieldset>
    </>
  );
};
