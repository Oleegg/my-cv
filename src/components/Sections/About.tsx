import content from "../../content.json";
import Line from "./Line";
import "./Sections.scss";

const About = () => {
  return (
    <section className="about">
      <h3>ABOUT</h3>
      <Line />
      <p>{content.sections.about.en}</p>
    </section>
  );
};

export default About;
