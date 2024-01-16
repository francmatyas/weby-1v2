import PageCover from "components/Elements/PageCover";
import cover_faq from "assets/cover_faq.jpg";
import { Section, Article } from "@components/Layout/Layout";
import FAQItem from "@components/Elements/FAQItem";

export default function FAQ() {
  const faqs = [
    {
      question: "Jak jsme začali cestovat?",
      answer:
        "Začali jsme svou cestu jako spolužáci s nezdolnou touhou po dobrodružství. Náš příběh začíná ve školních lavicích a rozvíjí se s každým novým objevem.",
    },
    {
      question: "Jak nám můžete představit svá dobrodružství?",
      answer:
        "Sledujte náš blog a sociální média pro denní dávku inspirace. Fotografie, příběhy a tipy na cestování vám přiblíží naše zážitky a nabídnou vám pohled na svět našima očima.",
    },
    {
      question: "Máte nějaké oblíbené destinace?",
      answer:
        "Ano, máme! Milujeme horizontální rozmanitost naší planety. Od himálajských vrcholů po pralesy Amazonského pralesa – každé místo nás oslovuje svým vlastním způsobem.",
    },
    {
      question: "Jak mohu navázat kontakt?",
      answer:
        "Jsme rádi, když se na nás obracíte! Vyplňte kontaktní formulář na naší stránce Kontakt nebo nám pište přímo na kontakt@cestabezkonce.cz.",
    },
    {
      question: "Můžeme sdílet naše vlastní cestovatelské příběhy s vámi?",
      answer:
        "Ano, prosím! Rádi bychom slyšeli o vašich dobrodružstvích. Dejte nám vědět prostřednictvím sociálních médii.",
    },
    {
      question: "Jak vás mohu podpořit?",
      answer:
        "Pokud máte rádi naše příběhy a cestovatelské tipy, podpořte nás tím, že budete sdílet naši stránku s přáteli a sledujte nás na sociálních sítích. Vaše podpora je pro náš vším!",
    },
  ];
  return (
    <div className="page faq">
      <PageCover src={cover_faq} label="FAQ" />
      <Article>
        <Section center>
          <h2>Často kladené otázky</h2>
          <p>
            Vítejte na naší stránce FAQ, kde jsme se snažili zodpovědět několik
            nejčastějších otázek, které by vás mohly zajímat. Pokud však
            nenajdete odpověď na vaši otázku, neváhejte nás kontaktovat.
          </p>
          <div className="faqList">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
          <p>
            Nemůžete najít odpověď na vaši otázku? Napište nám a rádi vám
            odpovíme!
          </p>
          <p>Díky, že jste s námi na cestě!</p>
        </Section>
      </Article>
    </div>
  );
}
