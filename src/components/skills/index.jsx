import { useState } from "react";
import { UilBracketsCurly, UilAngleDown } from "@iconscout/react-unicons";
import "./skills.scss";

const Skills = () => {
  const [isSkillsOpen, setIsSkillsOpen] = useState(true);
  return (
    <section className="skills section" id="skills">
      <h2 className="title">Skills</h2>
      <span className="subtitle">My Technical level</span>
      <div className="skillsContainer container grid">
        <div
          className={`content ${isSkillsOpen ? "open" : "close"}`}
          onClick={() => setIsSkillsOpen(!isSkillsOpen)}
        >
          <div className="skillsHeader">
            <UilBracketsCurly className="icon" />
            <div>
              <h1 className="title">Frontend Developer</h1>
              <span className="subtitle">More than 2 years</span>
            </div>
            <UilAngleDown className="arrow" />
          </div>
          <div className="list grid">
            <div className="data">
              <div className="title">
                <h3 className="name">HTML</h3>
                <span className="number">90%</span>
              </div>
              <div className="bar">
                <span className="percentage html"></span>
              </div>
            </div>
            <div className="data">
              <div className="title">
                <h3 className="name">CSS</h3>
                <span className="number">80%</span>
              </div>
              <div className="bar">
                <span className="percentage css"></span>
              </div>
            </div>
            <div className="data">
              <div className="title">
                <h3 className="name">JavaScript</h3>
                <span className="number">85%</span>
              </div>
              <div className="bar">
                <span className="percentage javascript"></span>
              </div>
            </div>
            <div className="data">
              <div className="title">
                <h3 className="name">React</h3>
                <span className="number">90%</span>
              </div>
              <div className="bar">
                <span className="percentage react"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
