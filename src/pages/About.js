import PageCover from "@components/Elements/PageCover";
import cover_about from "@assets/cover_about.jpg";
import { Section, Article } from "@components/Layout/Layout";

export default function About() {
  return (
    <div className="page about">
      <PageCover src={cover_about} label="O nás" />
      <Section className="content">
        <Article size="m" center>
          <h2>Dobrodružná Dvojice</h2>
          <p>
            Vítej na našem dobrodružném kousku internetu! Jsme Čenda a Tonda,
            dva neohrožení badatelé spojení nezlomnou láskou k cestování, a
            objevování fascinujících krajin naší planety.
          </p>
        </Article>
        <Article size="m" center>
          <h3>Kdo Jsme</h3>
          <p>
            Ahoj! Jsem Čenda, jsem dobrodružný snílek se srdcem dobroty, žiju v
            srdci města, ale mé pravé já najdeš v nekonečných horizontech
            neprozkoumané přírody. Mé kreativní oko vnímá každý moment jako
            umělecký záznam, a má zvědavá mysl se stále těší novým objevům.
          </p>

          <p>
            ¡Hola! Mé jméno je Tonda, druhá polovina této dobrodružné dvojice,
            jsem odvážný dobyvatel hor, který považuje každý vrchol za výzvu a
            každý les za domov. Mé odhodlání zdolávat překážky spojené s láskou
            k přírodě vytvářejí neuvěřitelnou kombinaci pro každé dobrodružství.
          </p>
        </Article>
        <Article size="m" center>
          <h3>Naše Kroniky Touhy po Cestování</h3>
          <p>
            Začali jsme tuto cestu jako spolužáci, kteří sdíleli stejné sny o
            dobrodružství. Od těchto začátků jsme podnikli nekonečné výpravy –
            od zasněžených vrcholů Alp po exotické pláže tropických rájů. Každé
            dobrodružství nám otevřelo nové perspektivy a posílilo naše
            přátelství.
          </p>
        </Article>
        <Article size="m" center>
          <h3>Co Nás Pohání</h3>
          <p>
            Nevidíme cestování jako únik, ale jako cestu k poznání sebe samých a
            světa kolem. Věříme, že každý krok za hranice známého přináší novou
            moudrost a otevírá cestu k vzácným zážitkům.
          </p>
        </Article>
        <Article size="m" center>
          <h3>Přidejte se k Nám na Cestě</h3>
          <p>
            Sledujte náš blog a sociální média, abyste se připojili k našim
            dobrodružstvím. Sdílíme nejen krásy přírody, ale i tipy na cestování
            a příběhy, které nás formují.
          </p>
        </Article>
        <Article size="m" center>
          <h3>Spojte se s Námi</h3>
          <p>
            Máme rádi, když nám posíláte své vlastní příběhy a rady. Jsme tady
            nejen jako průvodci, ale i jako přátelé pro vaše vlastní
            dobrodružství.
          </p>
          <p>Díky, že jste součástí naší cesty!</p>
        </Article>
      </Section>
    </div>
  );
}
