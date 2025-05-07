import React from "react";
import Dots from "../../components/Dots";

const Hero = ({ translation }) => {
  const handleDownload = () => {
    // Path to your PDF file in the public folder
    const pdfUrl = "/Md_Sabuj_Mia_Frontend_Developer_2025.pdf";

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = pdfUrl;

    // Set the download attribute with the desired filename
    link.download = "Md_Sabuj_Mia_Frontend_Developer_2025.pdf";

    // Append to DOM, trigger click, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="hero">
      <div className="hero__content">
        <h1
          className="hero__title"
          dangerouslySetInnerHTML={{ __html: translation.title }}
        />
        <div className="hero__description">{translation.description}</div>
        <button onClick={handleDownload} className="button button__primary">
          {translation.button}
        </button>
      </div>
      <div className="hero__illustrations">
        <img src="/images/logo-outline.svg" alt="" className="hero__logo" />
        <img src="/images/hero.png" alt="Sabuj" className="hero__image" />
        <div className="hero__status">{translation.status}</div>
        <Dots />
      </div>
    </section>
  );
};

export default Hero;
