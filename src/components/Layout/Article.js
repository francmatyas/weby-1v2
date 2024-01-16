export default function Article(props) {
  const { children, className = "", contentClassName = "" } = props;
  return (
    <article className={`articleWrapper ${className}`}>
      <div className={`articleContent ${contentClassName}`}>{children}</div>
    </article>
  );
}
