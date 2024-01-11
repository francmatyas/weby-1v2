export default function Article(props) {
  const { children, className = "", size = "l", center } = props;
  return (
    <article
      className={`article ${className} ${`size-${size}`} ${
        center ? "center" : ""
      }`}
    >
      {children}
    </article>
  );
}
