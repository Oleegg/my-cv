import { useAppSelector } from "../new/store/store";
import content from "../../content.json";
import certificate from "../../images/img/education.jpg";
import Line from "./Line";

const Education = () => {
  const lang = useAppSelector((state) => state.app.Languages);

  return (
    <section className="education">
      <h3>{lang === "en" ? "EDUCATION" : "ОБРАЗОВАНИЕ"}</h3>
      <Line />
      <ul className="section-list">
        {content.sections.education.map((place, i) => (
          <li key={i} className="list-item">
            {place.link.length ? (
              <>
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href={place.link}
                >
                  {place.name[`${lang}`]} {<br />}
                  <img className="education__img" src={certificate} alt="" />
                </a>
              </>
            ) : (
              <p>{place.name[`${lang}`]}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
