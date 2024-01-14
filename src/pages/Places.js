import { Section, Article } from "@components/Layout/Layout";
import PageCover from "components/Elements/PageCover";
import cover_places from "@assets/cover_places.jpg";
import PlaceLink from "components/Elements/PlaceLink";
import iceland_link from "@assets/iceland_link.jpg";
import italy_link from "@assets/italy_link.jpg";

export default function Places() {
  const places = [
    { id: "iceland", title: "Island", image: iceland_link },
    {
      id: "italy",
      title: "Itálie",
      image: italy_link,
    },
  ];

  return (
    <div className="page places">
      <PageCover src={cover_places} label="Místa" />
      <Section>
        <Article center>
          <h2>Destinace, Které Očarují</h2>
          <p>
            Vítejte na naší stránce plné inspirace a dobrodružství! Procházejte
            našimi různorodými destinacemi, kde každé místo vypráví svůj vlastní
            příběh. Od malebných městeček po ohromující divočinu, náš průvodce
            vás provede unikátním světem, který stojí za objevování. Připravte
            se na cestu plnou kouzla, dojemných momentů a nekonečných
            dobrodružství. Zapojte se do našeho světa a objevujte krásy, které
            čekají na vás.
          </p>
        </Article>

        <div className="placesLinks">
          {places.map((place) => (
            <PlaceLink key={place.id} place={place} />
          ))}
        </div>
      </Section>
    </div>
  );
}
