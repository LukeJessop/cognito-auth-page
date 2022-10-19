import Input from "./ui-components/Input";
import Button from "./ui-components/Button";
import { Link } from "react-router-dom";
import styles from "../SCSS/modules/component.module.scss";
import { useState } from "react";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <h2>Forgot Password?</h2>
      <div>
        <p>Enter your email below and we will send you a recovery email.</p>
        <form
          onSubmit={(e) => submitHandler(e)}
          className={styles.container__form}
        >
          <Input
            setSubmitted={setSubmitted}
            isSubmitted={submitted}
            value={email}
            setStateValue={setEmail}
          >
            Email
          </Input>
          <Link to="/">Go Back</Link>
          <Button>Send Recovery Email</Button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
