import { Link } from "react-router-dom";

export default function NavLink({ href, label, active, ...props }) {
  return (
    <li className={`${"navListItem"} ${active ? "active" : ""}`}>
      <Link to={href} {...props}>
        {label}
        <div className={"navListItemUnderline"}></div>
      </Link>
    </li>
  );
}
