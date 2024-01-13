import { Section, Article } from "@components/Layout/Layout";
import PageCover from "components/Elements/PageCover";
import cover_places from "@assets/cover_places.jpg";

export default function Places() {
  return (
    <div className="page places">
      <PageCover src={cover_places} label="Místa" />
      <Section>
        <Article>
          <p>Coming soon...</p>
        </Article>
      </Section>
    </div>
  );
}
