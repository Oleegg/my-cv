import content from "../../content";
import sprite from "../../images/svg/sprite.svg";
import { useAppSelector } from "../store/store";
import Line from "../elements/Line";

const Skills = () => {
  const lang = useAppSelector((state) => state.app.Languages);

  return (
    <section className="skills">
      <h3 id="skills">{lang === "en" ? "SKILLS & TOOLS" : "НАВЫКИ"}</h3>
      <Line />
      <ul className="section-list">
        {content.sections.skills.map((skill, i) => (
          <li key={i} className="skills__item">
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
