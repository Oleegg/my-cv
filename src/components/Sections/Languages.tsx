import { useAppSelector } from "../new/store/store";
import content from "../../content.json";
import Line from "./Line";

const Languages = () => {
  const lang = useAppSelector((state) => state.app.Languages);
  const text = content.sections.languages[`${lang}`];
  console.log(text);

  return (
    <section>
      <h3>{lang === "en" ? "LANGUAGES" : "ЯЗЫКИ"}</h3>
      <Line />
      <div className="section-list">
        {text.map((el) => (
          <p className="section__item">
            {el.title}
            {` - `}
            {el.level}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Languages;
