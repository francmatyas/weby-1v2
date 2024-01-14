import { Section, Article } from "@components/Layout/Layout";
import PageCover from "components/Elements/PageCover";

import cover_italy from "@assets/cover_italy.jpg";
import italy_1 from "@assets/italy_1.jpg";
import italy_2 from "@assets/italy_2.jpeg";
import italy_3 from "@assets/italy_3.jpeg";
import italy_4 from "@assets/italy_4.jpg";
import italy_5 from "@assets/italy_5.jpg";

export default function Italy() {
  return (
    <div className="placesDetail">
      <PageCover src={cover_italy} label="Itálie" />
      <Section>
        <Article center>
          <h2>Itálie</h2>
          <p>
            Vítejte v zemi vášně, umění a vynikající kuchyně, to je Itálie. Od
            majestátních římských památek až po malebné vesničky na pobřeží
            Amalfi, každý roh této země přináší vzrušující mix historie, kultury
            a nádhery.
          </p>
        </Article>
        <Article center>
          <h3>Kulinářské Zážitky</h3>
          <p>
            V Itálii se každé jídlo stává událostí. Ochutnejte autentickou
            italskou kávu, lahodné těstoviny, a nezapomeňte na pravý italský
            gelato. Každý kousek chutí je cestou do srdce italské kuchyně.
          </p>
        </Article>
        <div className="imageLine">
          <div className="imageWrapper">
            <img
              src={italy_4}
              alt="pohled na Dolomity přes azurové jezero a les"
            />
          </div>
          <div className="imageWrapper">
            <img src={italy_5} alt="Florencie" />
          </div>
        </div>
        <Article center>
          <h3>Umělecké Dědictví</h3>
          <p>
            Itálie, kolébka renesance a umění. Prozkoumejte mistrovská díla v
            galeriích ve Florencii, obdivujte Michelangelovy sochy a procházejte
            se mezi památkami Říma, které vyprávějí příběhy minulosti.
          </p>
        </Article>
        <Article center>
          <h3>Přírodní Krása</h3>
          <p>
            Od Toskánských vinic až po slunné pláže na Sicílii, příroda v Itálii
            pohladí duši. Každý region nabízí jedinečné scenérie, od vrcholků
            hor po azurově modré moře.
          </p>
        </Article>
        <div className="imageLine">
          <div className="imageWrapper">
            <img src={italy_1} alt="dolomity v Itálii" />
          </div>
          <div className="imageWrapper">
            <img src={italy_2} alt="hory a jezero v Itálii" />
          </div>
          <div className="imageWrapper">
            <img src={italy_3} alt="hory v Itálii" />
          </div>
        </div>
        <Article center>
          <h3>Životní Styl a Móda</h3>
          <p>
            Prožijte italský životní styl plný elegance, vášně a módního vkusu.
            Milán, hlavní město módy, vás přivítá s butiky slavných návrhářů a
            nejnovějšími trendy.
          </p>
        </Article>
        <Article center>
          <h3>Historická Města</h3>
          <p>
            Přeskočte do minulosti procházkou historickými uličkami Benátek, kde
            se každý krok stává cestou do doby středověku. Každé město v Itálii
            skrývá své vlastní tajemství a fascinující historii.
          </p>
        </Article>
      </Section>
    </div>
  );
}
