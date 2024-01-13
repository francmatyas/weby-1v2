export default function Button(props) {
  const { label, className, textarea, required, ...rest } = props;

  const id = `input_${Math.random().toString(36).substring(2, 15)}`;

  return (
    <div className={"inputWrapper"}>
      <label htmlFor={id} className={"inputLabel"}>
        {label}
        {required && <span className={"inputLabelRequired"}>*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          className={`${"inputField"} ${className ?? ""}`}
          {...rest}
          required={required}
        />
      ) : (
        <input
          id={id}
          className={`${"inputField"} ${className ?? ""}`}
          {...rest}
          required={required}
        />
      )}
    </div>
  );
}
