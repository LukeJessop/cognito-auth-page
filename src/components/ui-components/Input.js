import { useState } from "react";
import styles from "../../SCSS/modules/ui-component-modules/input.module.scss";

function Input(props) {
  const [valid, setValid] = useState(true);
  return (
    <div className={styles.container}>
      <p>{props.title}:</p>
      <input
        placeholder={props.title}
        className={valid ? styles.input : styles.input__invalid}
        onClick={() => setValid(true)}
        onBlur={(e) => (e.target.value !== "" ? null : setValid(false))}
      ></input>
    </div>
  );
}

export default Input;
