import { Link } from "react-router-dom";
import styles from '../SCSS/modules/register.module.scss'
import Input from './ui-components/Input'
import Button from './ui-components/Button'
function Register() {
  return (
    <div className={styles.container}>
      <h2>Sign up</h2>
      <div>
        <form className={styles.container__form}>
          <Input title={"Username"} />
          <Input title={"Password"} />
          <Button text={"Sign up"} />
        </form>
        <Link to="/">Sign in</Link>
      </div>
    </div>
  );
}

export default Register;
