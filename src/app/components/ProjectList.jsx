import React from "react";
import Project from "../components/Project";
import projects from "../consts/projects";

const ProjectList = ({
  title,
  filter = () => true,
  limit = projects.length,
  t,
}) => {
  return (
    <div>
      {title && <h2 className="h2">{title}</h2>}
      <div className="project-list">
        {projects
          .filter(filter)
          .slice(0, limit)
          .sort((a, b) => a.hasImage - b.hasImage)
          .map((item) => (
            <Project item={item} key={item?.id} />
          ))}
      </div>
    </div>
  );
};

export default ProjectList;
