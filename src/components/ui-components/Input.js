import { useEffect, useState } from "react";
import styles from "../../SCSS/modules/ui-component-modules/input.module.scss";
import { PatternFormat } from "react-number-format";

function Input(props) {
  const [valid, setValid] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  const [uCase, setUCase] = useState(false);
  const [lCase, setLCase] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [num, setNum] = useState(false);
  const [validLength, setValidLength] = useState(false);
  const [validPassword, setValidPassword] = useState();

  useEffect(() => {
    if (props.isSubmitted) {
      if (!props.value) {
        setValid(false);
      }
      if (props.children === "Phone Number") {
        if (props.value.includes("_")) {
          setValid(false);
        }
      }
      if (props.page === 'Register' && props.children === "Password" || props.children === "Confirm Password") {
        if (props.doPasswordMatch && props.value !== "") {
          if(props.children === 'Password' && validPassword){
            setValid(true)
          }else if(props.children !=='Password'){
            setValid(true)
          }else{
            setValid(false);
          }
        } else {
          setValid(false);
        }
      }
      if (props.children === "Email") {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(props.value)) {
          setValid(true);
        }else{
          setValid(false);
        }
      }
    }
  }, [props.isSubmitted, props.doPasswordMatch]);

  useEffect(() => {
    if (props.page === 'Register' && uCase && lCase && specialChar && num && validLength) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }, [uCase, lCase, specialChar, num, validLength]);

  const passwordAcceptance = (password) => {
    password.toLowerCase() != password ? setUCase(true) : setUCase(false);
    password.toUpperCase() != password ? setLCase(true) : setLCase(false);
    password.length > 8 ? setValidLength(true) : setValidLength(false);
    password.search(/[^\w\ ]/g) >= 0
      ? setSpecialChar(true)
      : setSpecialChar(false);
    password.search(/[\d]/g) >= 0 ? setNum(true) : setNum(false);
    
  };

  return (
    <div className={styles.container}>
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
            onValueChange={(e) => props.setStateValue("+1" + e.value)}
            onClick={() => {
              setValid(true);
              props.setSubmitted(false);
            }}
            allowEmptyFormatting
            placeholder="(123) 456-7890"
          ></PatternFormat>
        </div>
      ) : (
        <>
          <input
            type={
              props.children === "Password" ||
              props.children === "Confirm Password"
                ? "password"
                : "text"
            }
            placeholder={
              props.children === "Email" ? "example@gmail.com" : props.children
            }
            className={valid ? styles.input : styles.input__invalid}
            onChange={(e) => {
              props.setStateValue(e.target.value);
              if (props.page === "Register" && props.children === "Password") {
                setIsTyping(true);
                passwordAcceptance(e.target.value);
              }
            }}
            onClick={() => {
              setValid(true);
              props.setSubmitted(false);
            }}
          ></input>
          {isTyping && (
            <>
              <h5>Your password must meet criteria:</h5>
              <ul>
                <li className={uCase && styles.accepted}>
                  One upper case letter
                </li>
                <li className={lCase && styles.accepted}>
                  One lower case letter
                </li>
                <li className={specialChar && styles.accepted}>
                  One non-alphanumeric character
                </li>
                <li className={num && styles.accepted}>One number</li>
                <li className={validLength && styles.accepted}>
                  Atleast 8 characters long
                </li>
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Input;
