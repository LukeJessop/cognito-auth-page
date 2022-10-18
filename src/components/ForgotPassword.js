import Input from "./ui-components/Input";
import Button from "./ui-components/Button";
import { Link } from "react-router-dom";
import styles from "../SCSS/modules/component.module.scss";
import { useState } from "react";
function ForgotPassword() {
    const [email, setEmail] = useState('')
  return (
    <div className={styles.container}>
      <h2>Forgot Password?</h2>
      <p>Enter your email below and we will send you a recovery email.</p>
      <Input>Email</Input>
      <Link to="/">Go Back</Link>
      <Button>Send Recovery Email</Button>
    </div>
  );
}

export default ForgotPassword;
