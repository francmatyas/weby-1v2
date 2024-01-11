import PageCover from "components/Elements/PageCover";
import cover_faq from "assets/cover_faq.jpg";
import { Section, Article } from "@components/Layout/Layout";
import FAQItem from "@components/Elements/FAQItem";

export default function FAQ() {
  const faqs = [
    {
      question: "Jak jste se poznali a začali cestovat společně?",
      answer:
        "Potkali jsme se během výměnného programu ve škole v Japonsku a zjistili jsme, že máme společnou vášeň pro objevování nových míst. Od té doby jsme se stali neodloučitelným týmem dobrodruhů.",
    },
    {
      question: "Jak vybíráte destinace pro svá dobrodružství?",
      answer:
        "Destinace se vybíráme podle různorodosti a zajímavosti. Snažíme se spojit krásu přírody s kulturním bohatstvím a zajímavými zážitky.",
    },
    {
      question: "Jaké jsou vaše nejoblíbenější tipy pro levné cestování?",
      answer:
        "Prvním tipem je plánování předem – hledání výhodných nabídek na ubytování a letenky. Dále se snažíme jíst místní jídla, což často šetří peníze a přináší autentický zážitek.",
    },
    {
      question:
        "Jak udržujete rovnováhu mezi dobrodružstvím a studiem ve škole?",
      answer:
        "Rovnováha mezi studiem a cestováním není vždy snadná, ale snažíme se plánovat naše cesty tak, abychom minimalizovali vliv na školní povinnosti. Předem si dobře organizujeme čas.",
    },
    {
      question: "Který zážitek z vašich cest vás nejvíce ovlivnil?",
      answer:
        "Asi nejvíce nás ovlivnilo setkání s místními komunitami v Indonésii. Je úžasné vidět, jak lidé žijí v jiných částech světa, a to nás neustále inspiruje.",
    },
    {
      question: "Máte nějaké tipy pro začínající cestovatele?",
      answer:
        "Rozhodně! Začněte s menšími dobrodružstvími, naučte se respektovat a rozumět místní kultuře, a vždy si přineste kousíček místního jazyka. A nebojte se vydat mimo turisticky oblíbené trasy.",
    },
    {
      question:
        "Jaký byl váš nejnáročnější, ale zároveň nejzajímavější moment na cestách?",
      answer:
        "Nejnáročnější byl asi trek v Pakistánu přes Karákóram, ale právě tam jsme zažili něco neuvěřitelného – setkání s místními průvodci, kteří nám ukázali úžasná místa, která nejsou v průvodcích.",
    },
    {
      question:
        "Plánujete nějaké speciální akce nebo setkání pro své čtenáře v budoucnu?",
      answer:
        "Ano, máme v plánu pořádat pravidelné setkání s našimi čtenáři. Sledujte náš blog a sociální média pro aktuální informace o nadcházejících akcích.",
    },
  ];
  return (
    <div className="page faq">
      <PageCover src={cover_faq} label="FAQ" />
      <Section>
        <div className="faqList">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Section>
    </div>
  );
}
