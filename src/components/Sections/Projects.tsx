import { useAppSelector } from "../new/store/store";
import content from "../../content.json";
import Line from "./Line";

const Projects = () => {
  const lang = useAppSelector((state) => state.app.Languages);

  return (
    <section className="projects">
      <h3>{lang === "en" ? "PROGECTS" : "ПРОЕКТЫ"}</h3>
      <Line />
      <ul className="section-list projects__list">
        {content.sections.projects.map((project, i) => (
          <li key={i} className="section__item list-item">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href={project.link}
            >
              {project.title[`${lang}`]}
            </a>
            <br />
            {project.addition ? (
              <a
                className="link addition"
                target="_blank"
                rel="noreferrer"
                href={project.addition.link}
              >
                {project.addition.title[`${lang}`]}
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
