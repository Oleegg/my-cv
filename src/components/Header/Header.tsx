/* eslint-disable jsx-a11y/img-redundant-alt */
import "./Header.scss";
import photo from "../../images/imj/22.jpg";
import content from "../../content.json";

const Header = () => {
  const my = content.my;

  return (
    <header className="header">
      <img src={photo} alt="My photo" className="header__logo" />
      <div className="header__content">
        <h1>
          {my.surname} {my.name}
        </h1>
        <h3>{my.profession}</h3>

        <a
          className="link header__link"
          type="phone"
          href={`tel:${my.profession}`}
        >
          {my.phone}
        </a>

        <a className="link header__link" href={`mailto:${my.email}`}>
          {my.email}
        </a>
      </div>
      <div className="header__links">
        <a className="link header__link" href={my.linkedin}>
          My linkedin
        </a>

        <a className="link header__link" href={my.github}>
          My github
        </a>

        <button>EN</button>
      </div>
    </header>
  );
};

export default Header;
