import styles from "./FAQItem.module.css";

export default function FAQItem(props) {
  return (
    <div className={styles.FAQItem}>
      <h3 className={styles.FAQItemQuestion}>{props.question}</h3>
      <p className={styles.FAQItemAnswer}>{props.answer}</p>
    </div>
  );
}
