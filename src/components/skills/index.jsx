import { useState } from "react";
import { UilBracketsCurly, UilAngleDown } from "@iconscout/react-unicons";
import { MY_SKILLS } from "../../shared/constants";
import "./skills.scss";

const Skills = () => {
  const [skillOpenedIndex, setSkillOpenedIndex] = useState(0);
  return (
    <section className="skills section" id="skills">
      <h2 className="title">Skills</h2>
      <span className="subtitle">My Technical level</span>
      <div className="skillsContainer container grid">
        {MY_SKILLS.map((data, index) => {
          return (
            <div
              className={`content ${
                skillOpenedIndex === index ? "open" : "close"
              }`}
              onClick={() =>
                setSkillOpenedIndex(skillOpenedIndex === index ? -1 : index)
              }
              key={data.title}
            >
              <div className="skillsHeader">
                <UilBracketsCurly className="icon" />
                <div>
                  <h1 className="title">{data.title}</h1>
                  <span className="subtitle">{data.subtitle}</span>
                </div>
                <UilAngleDown className="arrow" />
              </div>
              <div className="list grid">
                {data.skills.map((skill) => {
                  return (
                    <div className="data" key={skill.id}>
                      <div className="title">
                        ``
                        <h3 className="name">{skill.name}</h3>
                        <span className="number">{skill.percentage}%</span>
                      </div>
                      <div className="bar">
                        <span className={`percentage ${skill.id}`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
