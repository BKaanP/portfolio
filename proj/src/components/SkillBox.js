import React from "react";
import PropTypes from "prop-types";
import "../styles/SkillBox.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SkillBox = ({ group, skills, onSkillClick }) => {
  return (
    <div className="skill-box">
      <h2>{group}</h2>

      {skills.map((skill) => (
        <div
          className="skill-box-item"
          key={skill.name}
          onClick={() => onSkillClick(skill.name)}
        >
          <img src={skill.logo} alt={skill.name} />
          <div>
            <strong>{skill.name}</strong>
            <p>{skill.description}</p>
          </div>
          <i className="fas fa-external-link-alt skill-link-icon"> </i>
        </div>
      ))}
    </div>
  );
};

SkillBox.propTypes = {
  group: PropTypes.string.isRequired,
  onSkillClick: PropTypes.func,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default SkillBox;
