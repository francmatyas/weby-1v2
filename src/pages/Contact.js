import ContactForm from "components/Forms/ContactForm";
import { Section, Article } from "components/Layout/Layout";
import PageCover from "components/Elements/PageCover";
import cover_contact from "@assets/cover_contact.jpg";

export default function Contact() {
  return (
    <div className="page contact">
      <PageCover src={cover_contact} label="Kontakt" />
      <Article>
        <Section size="m" center>
          <h2>Kontaktujte nás</h2>
          <p>
            Děkujeme, že jste se rozhodli nás kontaktovat! Jsme rádi, že můžeme
            komunikovat s našimi čtenáři a přáteli dobrodružství. Pro snadnější
            orientaci jsou zde některé způsoby, jak nás můžete dosáhnout.
          </p>
        </Section>
        <ContactForm className="contactPageForm"/>
      </Article>
    </div>
  );
}
