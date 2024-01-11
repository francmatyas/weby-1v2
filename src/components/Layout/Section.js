export default function Section(props) {
  const { children, className = "", contentClassName = "" } = props;
  return (
    <section className={`sectionWrapper ${className}`}>
      <div className={`sectionContent ${contentClassName}`}>{children}</div>
    </section>
  );
}
