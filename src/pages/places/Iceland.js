import { Section, Article } from "@components/Layout/Layout";
import PageCover from "components/Elements/PageCover";
import cover_iceland from "@assets/cover_iceland.jpg";
import iceland_1 from "@assets/iceland_1.jpg";
import iceland_2 from "@assets/iceland_2.jpg";
import iceland_3 from "@assets/iceland_3.jpg";
import iceland_4 from "@assets/iceland_4.jpeg";
import iceland_5 from "@assets/iceland_5.jpg";
import iceland_6 from "@assets/iceland_6.jpeg";
import iceland_7 from "@assets/iceland_7.jpeg";
import iceland_8 from "@assets/iceland_8.jpg";

export default function Iceland() {
  return (
    <div className="placesDetail">
      <PageCover src={cover_iceland} label="Island" />
      <Section>
        <Article center>
          <h2>Island</h2>
          <p>
            Vítejte na Islandu, zemi ohromující přírodní krásy, kde se setkávají
            ledovce a hory, vodopády a gejzíry. Každý roh nabízí pohled na
            divokou krajinu, která tvoří jedinečný charakter této arktické
            perly. Země, která je domovem pro více ovcí než lidí, vás přivítá
            svou otevřenou náručí. Připravte se na cestu plnou dobrodružství a
            nekonečných zážitků. Zapojte se do našeho světa a objevujte krásy,
            které na vás čekají.
          </p>
        </Article>
        <div className="imageLine">
          <div className="imageWrapper tall">
            <img src={iceland_2} alt="Tonda a vodopád Skogáfos na islandu" />
          </div>
        </div>
        <Article center>
          <h3>Cestování a Dobrodružství</h3>
          <p>
            Island - domov nekonečných dobrodružství. Prozkoumejte prastaré
            sopečné krátery, vkročte do tajuplných ledovcových jeskyní a
            sledujte taneční světlo polární záře na obloze. Zde je každý krok
            cestou do příběhu.
          </p>
        </Article>
        <div className="imageLine">
          <div className="imageWrapper">
            <img src={iceland_4} alt="slunečné údolí" />
          </div>
          <div className="imageWrapper">
            <img
              src={iceland_8}
              alt="letecký záběr rozvětvené řeky v duhových horách na islandu"
            />
          </div>
        </div>
        <Article center>
          <h3>Geotermalní Krása</h3>
          <p>
            V srdci Islandu pulsuje síla Země. Geotermální jezera, horké prameny
            a vřící lávová pole vytvářejí surreální krajinu, která nám
            připomíná, že příroda je nejlepší umělec.
          </p>
        </Article>
        <Article center>
          <h3>Kulturní Poklady</h3>
          <p>
            Island je domovem nejen přírodních divů, ale i bohaté kultury.
            Objevte tradiční islandské legendy, folklor a umění, které odrážejí
            odvahu a hrdinství této národnosti.
          </p>
        </Article>
        <div className="imageLine">
          <div className="imageWrapper">
            <img src={iceland_7} alt="vodopád Haifos" />
          </div>
          <div className="imageWrapper">
            <img src={iceland_5} alt="vodopád Svartifoss s čedičovými pilíři" />
          </div>
          <div className="imageWrapper">
            <img src={iceland_6} alt="vodopád Hengifoss" />
          </div>
        </div>
        <Article center>
          <h3>Fotografický Ráj</h3>
          <p>
            Pro fotografy je Island nekonečným rájem. Každý roh nabízí jedinečné
            kompozice, od ledovců po polární záři. Vytvářejte vzpomínky v podobě
            snímků, které vypráví příběhy o tomto magickém ostrově.
          </p>
        </Article>
        <Article center>
          <h3>Romantika na Islandu</h3>
          <p>
            Prožijte romantiku na Islandu, kde se vlající zelené polární záře,
            horské výhledy a klidné jezera spojují, tvoříce ideální prostředí
            pro nezapomenutelné chvíle ve dvou.
          </p>
        </Article>

        <div className="imageLine">
          <div className="imageWrapper tall">
            <img src={iceland_3} alt="dva papuchalkové na útesu" />
          </div>
          <div className="imageWrapper tall">
            <img src={iceland_1} alt="malebný kaňon s řekou" />
          </div>
        </div>
      </Section>
    </div>
  );
}
