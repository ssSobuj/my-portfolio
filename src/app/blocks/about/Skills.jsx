import React from "react";
import skills from "../../consts/skills";
import SkillBlock from "../../components/SkillBlock.jsx";

export default ({ translation, t2 }) => {
  return (
    <section className="skills">
      <h2 className="h2">{translation.title}</h2>
      <div className="skills__content">
        {Object.values(skills).map((skill, i) => (
          <SkillBlock key={i} data={skill} index={i} id={Object.keys(skills)} />
        ))}
      </div>
    </section>
  );
};
