import styles from "./input.module.css";

export default function Button(props) {
  const { label, className, textarea, required, ...rest } = props;

  const id = `input_${Math.random().toString(36).substring(2, 15)}`;

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
        {required && <span className={styles.inputLabelRequired}>*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          className={`${styles.inputField} ${className ?? ""}`}
          {...rest}
          required={required}
        />
      ) : (
        <input
          id={id}
          className={`${styles.inputField} ${className ?? ""}`}
          {...rest}
          required={required}
        />
      )}
    </div>
  );
}
