import styles from './CheckedInput.module.css'

export default function CheckedBadgeInput({
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
      <label htmlFor={id} className={styles.label}>
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
        {prop.loading && <i className={styles.input_loading}></i>}
        {!prop.notSet && !prop.loading && (
          <i
            className={
              prop.isValid
                ? styles.input_success_symbol
                : styles.input_error_symbol
            }
          ></i>
        )}
        <div className={styles.input_message_block}>
          <div
            className={styles.input_message}
            style={{
              opacity: !prop.notSet && !prop.isValid ? '100%' : '0%',
            }}
          >
            {prop.badge}
          </div>
        </div>
      </div>
    </>
  )
}
