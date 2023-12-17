import content from "../../content.json";

const Hobby = () => {
  return (
    <section className="hobby">
      <h3>Hobby</h3>
      <ul>
        {content.sections.hobby.en.map((el) => (
          <li className="list-item">{el}</li>
        ))}
      </ul>
    </section>
  );
};

export default Hobby;
