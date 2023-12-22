import content from "../../content";
import { useAppSelector } from "../store/store";
import Line from "../elements/Line";

const Hobby = () => {
  const lang = useAppSelector((state) => state.app.Languages);

  return (
    <section className="hobby">
      <h3 id="hobby">{lang === "en" ? "HOBBY" : "ХОББИ"}</h3>
      <Line />
      <div className="section-list">
        {content.sections.hobby[`${lang}`].map((el, i) => (
          <p key={i} className="list-item section__item">
            {el}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Hobby;
