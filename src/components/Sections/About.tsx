import content from "../../content";
import { useAppSelector } from "../store/store";
import Line from "../elements/Line";
import "./Sections.scss";

const About = () => {
  const lang = useAppSelector((state) => state.app.Languages);

  return (
    <section className="about">
      <h3 id="about">{lang === "en" ? "ABOUT" : "ОБО МНЕ"}</h3>
      <Line />
      <p>{content.sections.about[`${lang}`].text}</p>
    </section>
  );
};

export default About;
