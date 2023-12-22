import SocialElement from "../elements/Social";
import { useAppSelector } from "../store/store";
import Line from "../elements/Line";

const Social = () => {
  const lang = useAppSelector((state) => state.app.Languages);

  return (
    <section className="social">
      <h3 id="social">{lang === "en" ? "SOCIAL" : "СОЦИАЛЬНЫЕ СЕТИ"}</h3>
      <Line />
      <SocialElement />
    </section>
  );
};

export default Social;
