import React from "react";

export default ({ data, index, id }) => {
  return (
    <div className="skill-block">
      <div className="skill-block__name">{id[index]}</div>
      <ul className="skill-block__list">
        {data.map((techIndex) => (
          <li className="skill-block__skill" key={techIndex}>
            {techIndex}
          </li>
        ))}
      </ul>
    </div>
  );
};
