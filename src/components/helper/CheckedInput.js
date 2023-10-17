import styles from './CheckedInput.module.css'

export default function CheckedInput({
  id,
  type,
  placeholder,
  prop,
  label,
  validateInput,
  inputHandler,
}) {
  return (
    <>
      <label
        htmlFor={id}
        className="text-heading-text text-xl font-sans font-bold pb-3"
      >
        {label}
      </label>
      <div className={styles.inputfield}>
        <input
          placeholder={placeholder}
          type={type}
          id={id}
          value={prop.value}
          onChange={inputHandler}
          className={`${styles.input} ${
            !prop.notSet &&
            (!prop.isValid ? styles.input_error : styles.input_success)
          }`}
          onBlur={validateInput}
        />
        {!prop.notSet && (
          <i
            className={
              prop.isValid
                ? styles.input_success_symbol
                : styles.input_error_symbol
            }
          ></i>
        )}
      </div>
    </>
  )
}
