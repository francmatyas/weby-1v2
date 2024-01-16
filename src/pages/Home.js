import { Section, Article } from "@components/Layout/Layout";
import PageCover from "components/Elements/PageCover";
import cover_home from "@assets/cover_home.jpg";
import home_1 from "@assets/home_1.jpg";
import home_2 from "@assets/home_2.jpg";
import home_3 from "@assets/home_3.jpg";

export default function Home() {
  return (
    <div className="page home">
      <PageCover
        src={cover_home}
        center
        labelCLass="homePageLabel"
        label={"Vydej se na cesty s námi"}
      />
      <Article>
        <Section size="l" center>
          <h2>Vítej na Našem Cestovatelském Blogu!</h2>
          <p>
            Prozkoumej neuvěřitelná dobrodružství dvou nejlepších přátel, Tondy
            a Čendy, kteří se společně vydávají na cesty, objevují nové kultury
            a sdílejí nezapomenutelné okamžiky.
          </p>
        </Section>
        <Section size="l" center>
          <h3>Všechny naše fotky</h3>
          <p>
            Naše fotogalerie ti přináší poutavé pohledy na malebná místa,
            vzrušující dobrodružství a spontánní okamžiky smíchu. Připoutej se a
            nech se unést krásou našich fotografií a příběhů.
          </p>
        </Section>
        <Section size="l" center>
          <h3>Kde nás můžeš sledovat?</h3>
          <p>
            Přidej se k nám na naší cestě, kde přátelství, dobrodružství a
            nekonečné objevování spojují své síly. Sleduj nás na sociálních
            médiích, abys nezmeškal/a žádný moment!
          </p>
        </Section>
        <Section size="l" center>
          <h3>Co můžeš očekávat?</h3>
          <p>
            Připrav se na inspiraci, pohodu a nádherné výhledy. Zažijeme spolu
            kus světa, tak pojďme na to!
          </p>
          <div className="imageLine">
            <div className="imageWrapper">
              <img
                src={home_1}
                alt="fotka hory v inverzi, při východu slunce"
              />
            </div>
            <div className="imageWrapper">
              <img
                src={home_2}
                alt="výhled do lehce zamlžené krajiny za východu slunce"
              />
            </div>
            <div className="imageWrapper">
              <img
                src={home_3}
                alt="západ slunce do moře na kamenitém pobřeží"
              />
            </div>
          </div>
        </Section>
      </Article>
    </div>
  );
}
