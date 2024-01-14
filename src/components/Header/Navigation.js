import { Link, useLocation } from "react-router-dom";
import logo from "assets/logo.png";
import NavLink from "./NavLink";

export default function Navigation() {
  const { pathname } = useLocation();

  const links = {
    places: {
      href: "/places",
      label: "Místa",
    },
    gallery: {
      href: "/gallery",
      label: "Galerie",
    },
    faq: {
      href: "/faq",
      label: "FAQ",
    },
    about: {
      href: "/about",
      label: "O nás",
    },
    contact: {
      href: "/contact",
      label: "Kontakt",
    },
  };

  return (
    <nav className={"nav"}>
      <ul className={"navList"}>
        {Object.values(links).map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
            active={pathname === link.href}
          />
        ))}
      </ul>
    </nav>
  );
}
