import React from "react";
import Dots from "../../components/Dots";
import SkillBlock from "../../components/SkillBlock";
import skills from "../../consts/skills";

const Skills = ({ translation, t2 }) => {
  return (
    <section className="skills">
      <h2 className="h2">{translation.title}</h2>
      <div className="skills__content">
        <div className="skills__illustrations illustrations">
          <img
            src="/images/logo-outline.svg"
            alt=""
            className="illustrations__logo"
          />
          <Dots width={4} height={4} />
          <Dots width={6} height={6} />
        </div>
        <div className="skills__list">
          {Object.values(skills).map((skill, i) => (
            <SkillBlock
              key={i}
              data={skill}
              index={i}
              id={Object.keys(skills)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
