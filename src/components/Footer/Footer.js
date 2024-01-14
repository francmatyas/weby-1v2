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
