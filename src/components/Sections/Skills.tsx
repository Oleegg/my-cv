import content from "../../content.json";
import sprite from "../../images/svg/sprite.svg";
import Line from "./Line";

const Skills = () => {
  return (
    <section className="skills">
      <h3>Skills & tools</h3>
      <Line />
      <ul className="skills__list">
        {content.sections.skills.map((skill) => (
          <li className="skills__item">
            <svg className="svg">
              <use xlinkHref={`${sprite}#${skill.toLowerCase()}`}></use>
            </svg>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
