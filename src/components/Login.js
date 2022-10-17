import styles from "../SCSS/modules/login.module.scss";
import Input from "./ui-components/Input";
import Button from "./ui-components/Button";

import {Link} from 'react-router-dom'
function Login(props) {
  return (
    <div className={styles.container}>
      <h2>Sign in</h2>
      <div>
        <form className={styles.container__form}>
          <Input title={"Username"} />
          <Input title={"Password"} />
          <Link to="/forgot-pass">Forgot Password?</Link>
          <Button text={"Sign in"} />
        </form>
        <Link to="/register">Sign up</Link>
      </div>
    </div>
  );
}

export default Login;
