import photo from "../../images/img/22.jpg";
import content from "../../content";
import ContactsElement from "../elements/Contacts";
import SocialElement from "../elements/Social";
import { useAppDispatch, useAppSelector } from "../store/store";
import { changeLang } from "../store/langSlice";
import "./Header.scss";
import Menu from "../elements/Menu";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const my = content.my;
  const dispatch = useAppDispatch();
  const lang = useAppSelector((state) => state.app.Languages);

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflowY = isOpenMenu ? "hidden" : "visible";
  }, [isOpenMenu]);

  const changeLanguages = () => {
    const Languages = lang === "ru" ? "en" : "ru";
    dispatch(changeLang({ Languages }));
  };

  const burgerHandler = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header className="header">
      <img src={photo} alt="I" className="header__logo" />
      <div className="header__content" id="top">
        <div className="header__title">
          <h1>
            {my.surname[`${lang}`]} {my.name[`${lang}`]}
          </h1>
          <h2>{my.profession}</h2>
        </div>
        <div className="header__social">
          <SocialElement />
        </div>
        <div className="header__contacts">
          <ContactsElement />
        </div>
        <div className="header__btn">
          <div
            onClick={burgerHandler}
            className={isOpenMenu ? "burger open" : "burger"}
          >
            <p className="burger__p">
              <span className="burger__span"></span>
            </p>
          </div>
          <button onClick={changeLanguages} className="leng-btn">
            <span></span>
            {lang.toUpperCase()}
          </button>
        </div>
        <Menu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
      </div>
    </header>
  );
};

export default Header;
