import content from "../../content.json";
import { useAppSelector } from "../new/store/store";
import Line from "./Line";
import "./Sections.scss";

const About = () => {
  const lang = useAppSelector((state) => state.app.Languages);

  return (
    <section className="about">
      <h3>{content.sections.about[`${lang}`].title}</h3>
      <Line />
      <p>{content.sections.about[`${lang}`].text}</p>
    </section>
  );
};

export default About;
