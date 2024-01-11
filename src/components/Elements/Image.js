export default function Image(props) {
  const { src, label = "", className = "", size = "l", center } = props;
  return (
    <div
      className={`imageWrapper ${className} ${`size-${size}`} ${
        center ? "center" : ""
      }`}
    >
      <img src={src} alt={label} />
    </div>
  );
}
