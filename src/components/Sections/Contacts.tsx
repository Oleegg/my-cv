import ContactsElement from "../elements/Contacts";
import { useAppSelector } from "../store/store";
import Line from "../elements/Line";

const Contacts = () => {
  const lang = useAppSelector((state) => state.app.Languages);

  return (
    <section className="contacts">
      <h3 id="contacts">{lang === "en" ? "CONTACTS" : "КОНТАКТЫ"}</h3>
      <Line />
      <ContactsElement />
    </section>
  );
};

export default Contacts;
