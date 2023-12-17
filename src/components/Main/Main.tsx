import About from "../Sections/About";
import Education from "../Sections/Education";
import Hobby from "../Sections/Hobby";
import Languages from "../Sections/Languages";
import Projects from "../Sections/Projects";
import Skills from "../Sections/Skills";
import "./Main.scss";

const Main = () => {
  return (
    <main className="main">
      <About />
      <div className="main__content">
        <Skills />
        <Hobby />
        <Projects />
        <Education />
        <Languages />
      </div>
    </main>
  );
};
export default Main;
