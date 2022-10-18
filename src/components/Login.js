import { useState } from "react";
import styles from "../SCSS/modules/component.module.scss";
import Input from "./ui-components/Input";
import Button from "./ui-components/Button";

import { Link } from "react-router-dom";
function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputs = [
    { name: 'Username', value: username, setValue: setUsername },
    { name: 'Password', value: password, setValue: setPassword }
  ];

  const inputMap = inputs.map((e) => {
    return (
      <Input
        key={e.name}
        setSubmitted={setSubmitted}
        isSubmitted={submitted}
        value={e.value}
        setStateValue={e.setValue}
      >
        {e.name}
      </Input>
    );
  });

  return (
    <div className={styles.container}>
      <h2>Sign in</h2>
      <div>
        <form
          onSubmit={(e) => submitHandler(e)}
          className={styles.container__form}
        >
          {inputMap}
          <Link to="/forgot-password">Forgot Password?</Link>
          <Button>Sign in</Button>
        </form>
        <Link to="/register">Sign up</Link>
      </div>
    </div>
  );
}

export default Login;
