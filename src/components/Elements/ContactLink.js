import styles from "./contactLink.module.css";
import appAction from "appAction";

export default function ContactLink(props) {
  const { label, icon, className, size, ...rest } = props;

  const sizeMap = {
    small: 16,
    medium: 20,
    large: 24,
  };
  return (
    <a
      className={`${styles.contactLink} ${className ?? ""} ${
        label ? "" : styles.onlyIcon
      }`}
      {...rest}
    >
      {appAction.getIcon(icon, label ? 24 : sizeMap[size ?? "medium"])}
      {label && label}
    </a>
  );
}
