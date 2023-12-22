import { useAppSelector } from "../store/store";
import content from "../../content";
import { SetStateAction, Dispatch } from "react";

type Props = { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> };

const Menu = ({ isOpen, setIsOpen }: Props) => {
  const leng = useAppSelector((state) => state.app.Languages);
  const links = content.titles.map((el) => Object.keys(el)[0]);
  const titles = content.titles.map((el) => Object.values(el));

  return (
    <div className={isOpen ? "menu-wrapper open" : "menu-wrapper"}>
      <nav className="menu">
        <ul>
          {titles.map((title, i) => (
            <li key={i}>
              <a href={`#${links[i]}`} onClick={() => setIsOpen(false)}>
                {title[0][`${leng}`]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
