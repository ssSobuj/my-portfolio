import React from "react";
import websites from "../consts/websites";
import media from "../consts/media";

const mapLinks = (links) => {
  return Object.keys(links).map((link) => {
    let href =
      "https://" + (link === "live" ? "" : websites[link]) + links[link];

    if (link === "figma")
      href = `https://figma.com/community/file/${links[link]}`;
    if (link === "github" && links[link].startsWith("/"))
      href = media.github + links[link];

    const className = link === "cached" ? "button__secondary" : "";
    const name = `${link[0].toUpperCase()}${link.slice(1)}`;

    return (
      <a
        href={href}
        target="_blank"
        className={`button ${className}`}
        key={link}
      >
        {name} =&gt;
      </a>
    );
  });
};

const Project = ({ item }) => {
  return (
    <div className="project">
      {item?.hasImage && (
        <img src={item?.image} alt={item?.name} className="project__image " />
      )}

      <ul className="project__techs">
        {item?.techs.map((tech) => (
          <li className="project__tech" key={tech}>
            {tech}
          </li>
        ))}
      </ul>

      <div className="project__content">
        <div className="project__name">{item.name}</div>
        <div className="project__description">{item.description}</div>
        <div className="project__links">{mapLinks(item?.links)}</div>
      </div>
    </div>
  );
};

export default Project;
