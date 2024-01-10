import Navigation from "./Navigation";
import appAction from "appAction";
import { useEffect, useState } from "react";

export default function Header() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const pageEl = document.querySelector(".appContent");
    pageEl.addEventListener("scroll", () => {
      setIsTop(pageEl.scrollTop < 24);
    });

    return () => {
      pageEl.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <header className={`header ${!isTop ? "headerFill" : ""}`}>
      <Navigation />
      <div className={"headerSocials"}>
        <ul className={"headerSocialsList"}>
          <li className={"headerSocialsItem"} title="Instagram">
            <a href="https://www.instagram.com/" target="_blank">
              {appAction.getIcon("instagram", 20)}
            </a>
          </li>
          <li className={"headerSocialsItem"} title="Facebook">
            <a href="https://www.facebook.com/" target="_blank">
              {appAction.getIcon("facebook", 20)}
            </a>
          </li>
          <li className={"headerSocialsItem"} title="Youtube">
            <a href="https://www.youtube.com/" target="_blank">
              {appAction.getIcon("youtube", 20)}
            </a>
          </li>
          <li className={"headerSocialsItem"} title="Patreon">
            <a href="https://www.patreon.com/" target="_blank">
              {appAction.getIcon("patreon", 20)}
            </a>
          </li>
          <li className={"headerSocialsItem"} title="X (Twitter)">
            <a href="https://www.x.com/" target="_blank">
              {appAction.getIcon("twitter", 20)}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
