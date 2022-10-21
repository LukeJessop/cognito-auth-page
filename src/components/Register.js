import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../SCSS/modules/component.module.scss";
import Input from "./ui-components/Input";
import Button from "./ui-components/Button";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [usernameValid, setUsernameValid] = useState(true)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [doPasswordMatch, setDoPasswordsMatch] = useState()

  const [allInputsValid, setAllInputsValid] = useState(false)


  const submitHandler = (e) => {
    e.preventDefault();
    passwordConfirmation()
    setSubmitted(true);
    if(allInputsValid){
      axios.post('http://localhost:3000/api/register', {username, firstName, lastName, phoneNum, email, password})
      .then((res) => {}) //do something here that redirects once you can
      .catch((err) => err.response.data.name && setUsernameValid(false))
      //api call to node-manager somehow
    }
  };

  const passwordConfirmation = () => {
    if(password === confirmPassword){
        setDoPasswordsMatch(true)
    }else{
        setDoPasswordsMatch(false)
    }
  }
  const inputs = [
    {name:'Username', value: username, setValue: setUsername},
    {name:'First Name', value: firstName, setValue: setFirstName},
    {name:'Last Name', value: lastName, setValue: setLastName},
    {name:'Phone Number', value: phoneNum, setValue: setPhoneNum},
    {name:'Email', value: email, setValue: setEmail},
    {name:'Password', value: password, setValue: setPassword},
    {name:'Confirm Password', value: confirmPassword, setValue: setConfirmPassword}
  ]
  const inputMap = inputs.map((e) => {
    return (
      <Input
        key={e.name}
        setSubmitted={setSubmitted}
        isSubmitted={submitted}
        value={e.value}
        setStateValue={e.setValue}
        doPasswordMatch={doPasswordMatch}
        page={'Register'}
        setAllInputsValid={setAllInputsValid}
      >
        {e.name}
      </Input>
    );
  });



  return (
    <div className={styles.container}>
      <h2>Sign up</h2>
      <div>
        <form
          onSubmit={(e) => submitHandler(e)}
          className={styles.container__form}
        >
            {inputMap}
          {!usernameValid && <p>*Username has already been taken</p>}
          <Button>Sign Up</Button>
        </form>
        <Link to="/">Sign in</Link>
      </div>
    </div>
  );
}

export default Register;
