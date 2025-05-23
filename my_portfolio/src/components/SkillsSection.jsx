import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./SkillsSection.css"; // Importing the CSS file

const skillsData = [
  { name: "Full Stack", percentage: 95 },
  { name: "Java", percentage: 85 },
  { name: "C++", percentage: 80 },
  { name: "JavaScript", percentage: 90 },
  { name: "DSA", percentage: 80 },
  { name: "Python", percentage: 80 },
  { name: "Android", percentage: 80 },
  { name: "React", percentage: 80 },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-content">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <div className="skill-box" key={index}>
              <div className="click-effect"> {/* Click cursor effect */}
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    textColor: "#ffcc33",
                    pathColor: "#ffcc33",
                    trailColor: "#222",
                  })}
                />
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
