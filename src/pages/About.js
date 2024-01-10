import PageCover from "@components/Elements/PageCover";
import cover_about from "@assets/cover_about.jpg";

export default function About() {
  return (
    <div>
      <PageCover src={cover_about} label="O nás" />
    </div>
  );
}
