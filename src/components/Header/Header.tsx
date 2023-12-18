/* eslint-disable jsx-a11y/img-redundant-alt */
import photo from "../../images/img/22.jpg";
import sprite from "../../images/svg/sprite.svg";
import content from "../../content.json";
import { useAppDispatch, useAppSelector } from "../new/store/store";
import { changeLang } from "../new/store/langSlice";
import "./Header.scss";

const Header = () => {
  const my = content.my;
  const dispatch = useAppDispatch();
  const lang = useAppSelector((state) => state.app.Languages);
  // const Languages = `lang`

  const changeLanguages = () => {
    const Languages = lang === "ru" ? "en" : "ru";
    dispatch(changeLang({ Languages }));
  };

  return (
    <header className="header">
      <img src={photo} alt="My photo" className="header__logo" />
      <div className="header__content">
        <h1>
          {my.surname[`${lang}`]} {my.name[`${lang}`]}
        </h1>
        <h3>{my.profession}</h3>
        <a
          target="_blank"
          rel="noreferrer"
          className="link header__link"
          type="phone"
          href={`tel:${my.phone}`}
        >
          <svg className="svg">
            <use xlinkHref={`${sprite}#phone`}></use>
          </svg>
          {my.phone}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="link header__link"
          href={`mailto:${my.email}`}
        >
          <svg className="svg">
            <use xlinkHref={`${sprite}#mail`}></use>
          </svg>
          {my.email}
        </a>
      </div>
      <div className="header__links">
        <a
          target="_blank"
          rel="noreferrer"
          className="link header__link"
          href={my.linkedin}
        >
          <svg className="svg">
            <use xlinkHref={`${sprite}#linkidin`}></use>
          </svg>
          My linkedin
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="link header__link"
          href={my.github}
        >
          <svg className="svg">
            <use xlinkHref={`${sprite}#github`}></use>
          </svg>
          My github
        </a>
        <button onClick={changeLanguages} className="leng-btn">
          {lang.toUpperCase()}
        </button>
      </div>
    </header>
  );
};

export default Header;
