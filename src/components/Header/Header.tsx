/* eslint-disable jsx-a11y/img-redundant-alt */
import "./Header.scss";
import photo from "../../images/imj/22.jpg";
import sprite from "../../images/svg/sprite.svg";

import content from "../../content.json";

const Header = () => {
  const my = content.my;

  return (
    <header className="header">
      <img src={photo} alt="My photo" className="header__logo" />
      <div className="header__content">
        <h1>
          {my.surname.en} {my.name.en}
        </h1>
        <h3>{my.profession}</h3>
        <a className="link header__link" type="phone" href={`tel:${my.phone}`}>
          <svg className="svg">
            <use xlinkHref={`${sprite}#phone`}></use>
          </svg>
          {my.phone}
        </a>
        <a className="link header__link" href={`mailto:${my.email}`}>
          <svg className="svg">
            <use xlinkHref={`${sprite}#mail`}></use>
          </svg>
          {my.email}
        </a>
      </div>
      <div className="header__links">
        <a className="link header__link" href={my.linkedin}>
          <svg className="svg">
            <use xlinkHref={`${sprite}#linkidin`}></use>
          </svg>
          My linkedin
        </a>
        <a className="link header__link" href={my.github}>
          <svg className="svg">
            <use xlinkHref={`${sprite}#github`}></use>
          </svg>
          My github
        </a>

        <button className="leng-btn">EN</button>
      </div>
    </header>
  );
};

export default Header;
