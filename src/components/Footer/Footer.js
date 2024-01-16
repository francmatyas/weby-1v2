import logo from "@assets/logo.png";
import { HiOutlineMail, HiOutlineGlobeAlt } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerRow">
        <img src={logo} className="footerLogo" alt="logo" />
        <div className="footerCol">
          <h3>CestaBezKonce.cz</h3>
          <p>Studentský zápočtový projekt</p>
          <p>Aktualizováno 14.1.2024</p>
        </div>
        <div className="footerCol">
          <h3>Provozovatel</h3>
          <p>Matyáš Franc</p>
          <p className="footerLine">
            <HiOutlineMail size={20} />
            <a href="mailto:francma2@uhk.cz">francma2@uhk.cz</a>
          </p>
          <p className="footerLine">
            <HiOutlineGlobeAlt size={20} />
            <a
              href="https://www.francmatyas.com/"
              target="_blank"
              rel="noreferrer"
            >
              www.francmatyas.com
            </a>
          </p>
        </div>
        <div className="footerCol">
          <h3>Sociální sítě</h3>
          <ul className={"footerSocialsList"}>
            <li className={"footerSocialsItem"} title="Instagram">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className={"footerSocialsItem"} title="Facebook">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className={"footerSocialsItem"} title="Youtube">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </a>
            </li>
            <li className={"footerSocialsItem"} title="Patreon">
              <a
                href="https://www.patreon.com/"
                target="_blank"
                rel="noreferrer"
              >
                Patreon
              </a>
            </li>
            <li className={"footerSocialsItem"} title="X (Twitter)">
              <a href="https://www.x.com/" target="_blank" rel="noreferrer">
                X (Twitter)
              </a>
            </li>
          </ul>
        </div>
        <div className="footerCol">
          <h3>Zdroje</h3>
          <p>
            Images designed by{" "}
            <a href="https://www.freepik.com/" target="_blank" rel="noreferrer">
              Freepik
            </a>
          </p>
        </div>
      </div>

      <div className="footerRow copyright">
        <p>Copyright © 2024 Matyáš Franc</p>
      </div>
    </footer>
  );
}
