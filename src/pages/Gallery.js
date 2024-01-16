import { Section, Article } from "@components/Layout/Layout";
import PageCover from "components/Elements/PageCover";
import cover_gallery from "@assets/cover_gallery.jpeg";
import GalleryGrid from "components/Elements/GalleryGrid";

import gallerySrc from "@assets/gallery";

export default function Gallery() {
  return (
    <div className="page gallery">
      <PageCover src={cover_gallery} label="Galerie" />
      <Article>
        <Section center>
          <h2>Společné okamžiky na cestě světem</h2>
          <p>
            Vítej na naší virtuální pouti napříč světem, kde se vydáváme na
            neuvěřitelná dobrodružství. S námi objevíš kouzlo různorodých
            kultur, okusíš vzduch hor, a prožiješ společné okamžiky smíchu a
            poznání. Zářivé okamžiky naší cesty jsou zachyceny ve fotografiích,
            které tě pozvou na putování napříč krajinami a přátelstvím. Připoj
            se k nám a prohlédni si svět očima dvou neoddělitelných přátel.
          </p>
        </Section>
        <GalleryGrid src={gallerySrc} />
      </Article>
    </div>
  );
}
