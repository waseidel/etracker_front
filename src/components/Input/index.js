const styles = {
  formGroup: {
  }
}

const Input = ({label, ...args}) => {
  return (
    <div style={styles.formGroup}>
      <label>{label}</label>
      <input
        { ...args }
      />

    </div>
  )
}

export default Input;
