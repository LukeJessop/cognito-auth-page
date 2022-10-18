import { useEffect, useState } from "react";
import styles from "../../SCSS/modules/ui-component-modules/input.module.scss";
import { PatternFormat } from "react-number-format";

function Input(props) {
  const [valid, setValid] = useState(true);

  useEffect(() => {
    setValid(true);
    if (props.isSubmitted) {
      if (!props.value) {
        setValid(false);
      }
      if (props.children === "Phone Number") {
        if (props.value.includes("_")) {
          setValid(false);
        }
      }
      if (props.children === "Password" || props.children === "Confirm Password") {
        if (!props.doPasswordMatch || props.value === "") {
          setValid(false);
        } else {
          setValid(true);
        }
      }
    }
  }, [props.isSubmitted, props.doPasswordMatch]);

  const formatPhoneNumber = (text) => {};

  return (
    <div className={styles.container}>
      <p>{props.children}:</p>
      {props.children === "Phone Number" ? (
        <div className={styles.phone}>
          <select className={styles.dropdown}>
            <option>+1</option>
            <option>+3</option>
            <option>+7</option>
          </select>
          <PatternFormat
            type="tel"
            format="(###) ###-####"
            mask="_"
            className={
              valid ? styles.input__phone : styles.input__invalid__phone
            }
            onValueChange={(e) => props.setStateValue(e.formattedValue)}
            onClick={() => {
              setValid(true);
              props.setSubmitted(false);
            }}
            allowEmptyFormatting
            placeholder="(123) 456-7890"
          ></PatternFormat>
        </div>
      ) : (
        <input
          type={
            props.children === "Password" ||
            props.children === "Confirm Password"
              ? "password"
              : "text"
          }
          placeholder={props.children}
          className={valid ? styles.input : styles.input__invalid}
          onChange={(e) => props.setStateValue(e.target.value)}
          onClick={() => {
            setValid(true);
            props.setSubmitted(false);
          }}
        ></input>
      )}
    </div>
  );
}

export default Input;
