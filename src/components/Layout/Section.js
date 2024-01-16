export default function Section(props) {
  const { children, className = "", size = "l", center } = props;
  return (
    <section
      className={`section ${className} ${`size-${size}`} ${
        center ? "center" : ""
      }`}
    >
      {children}
    </section>
  );
}
