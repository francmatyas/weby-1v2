import { Section, Article } from "@components/Layout/Layout";
import PageCover from "components/Elements/PageCover";
import cover_home from "@assets/cover_home.jpg";

export default function Home() {
  return (
    <div className="page home">
      <PageCover
        src={cover_home}
        center
        labelCLass="homePageLabel"
        label={"Vydej se na cesty s námi"}
      />
    </div>
  );
}
