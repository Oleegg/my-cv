import sprite from "../../images/svg/sprite.svg";
import Scroll from "./scroll";
import "./Footer.scss";

const Footer = () => {
  const positions = Scroll();
  const visible =
    (positions.clientHeight < 500 &&
      positions.scroll > positions.clientHeight / 2) ||
    (positions.clientHeight < 1000 &&
      positions.scroll > positions.clientHeight / 2) ||
    (positions.clientHeight > 1000 &&
      positions.scroll > positions.clientHeight / 3);

  return (
    <footer className={visible ? "footer" : "footer invisible"}>
      <a className="footer__arrow" href="#top">
        <svg className="svg">
          <use xlinkHref={`${sprite}#arrow`}></use>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
