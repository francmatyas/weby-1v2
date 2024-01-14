import Navigation from "./Navigation";
import appAction from "appAction";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@assets/logo.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const [isTop, setIsTop] = useState(true);
  const [device, setDevice] = useState("desktop"); // ["desktop", "tablet", "mobile"]
  const [menuOpen, setMenuOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const pageEl = document.querySelector(".appContent");
    pageEl.addEventListener("scroll", () => {
      setIsTop(pageEl.scrollTop < 24);
    });

    return () => {
      pageEl.removeEventListener("scroll", () => {});
    };
  }, []);

  useEffect(() => {
    const mobileMedia = window.matchMedia("(max-width: 480px)");
    const mobileMediaHandler = (e) => {
      setDevice(e.matches ? "mobile" : "tablet");
    };
    mobileMedia.addEventListener("change", mobileMediaHandler);
    mobileMediaHandler(mobileMedia);

    const tabletMedia = window.matchMedia("(max-width: 768px)");
    const tabletMediaHandler = (e) => {
      setDevice(e.matches ? "tablet" : "desktop");
    };
    tabletMedia.addEventListener("change", tabletMediaHandler);
    tabletMediaHandler(tabletMedia);

    return () => {
      tabletMedia.removeEventListener("change", tabletMediaHandler);
    };
  }, []);

  useEffect(() => {
    document.querySelector(".appContent").scrollTo(0, 0);
    if (device !== "desktop") setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (device === "desktop") setMenuOpen(false);
  }, [device]);

  const headerContent = (
    <>
      <div className="headerNavigation">
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
      </div>
    </>
  );

  return (
    <header
      className={`header ${!isTop ? "headerFill" : ""} ${
        menuOpen ? "open" : ""
      }`}
    >
      <Link to="/">
        <img height={48} src={logo} alt="logo" className={"navLogo"} />
      </Link>
      {device === "desktop" ? (
        headerContent
      ) : (
        <div>
          <button
            className={"headerMenuButton"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      )}
      {menuOpen && (
        <div className={"headerMenu"}>
          {headerContent}
        </div>
      )}
    </header>
  );
}
