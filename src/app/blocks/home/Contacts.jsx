import React from "react";
import media from "../../consts/media.js";

const contacts = [
  {
    name: "discord",
    text: "sabuj-mia",
    image: "/images/icons/linkedin.svg",
    link: "https://www.linkedin.com/in/developer-sabuj-mia",
  },
  {
    name: "email",
    text: "mdsobujredoy@gmail.com",
    image: "/images/icons/email.svg",
    link: "mdsobujredoy@gmail.com",
  },
];

const Contacts = ({ translation }) => {
  return (
    <section className="contacts" id="contacts">
      <h2 className="h2">{translation.title}</h2>
      <div className="contacts__content">
        <p className="contacts__description">{translation.text}</p>
        <div className="contacts__media">
          <h3 className="contacts__title">{translation.media}</h3>
          <div className="contacts__list">
            {contacts.map((contact) => (
              <div className="contact">
                <img src={contact.image} alt="" />

                {contact?.name === "email" ? (
                  <a href={`mailto:${contact?.link}`} className="contact__name">
                    {contact.text}
                  </a>
                ) : (
                  <a
                    target="_blank"
                    href={contact?.link}
                    className="contact__name"
                  >
                    {contact.text}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
