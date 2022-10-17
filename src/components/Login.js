import styles from '../SCSS/modules/login.module.scss'
import Input from './ui-components/Input'
function Login(props) {
    return (
        <div className={styles.container}>
            <h2>Login</h2>
            <div>
                <form className={styles.container__form}>
                    <Input title={'Username'}/>
                    <Input title={'Password'}/>
                </form>
                <a href='/'>Sign up</a>
                <a href='/'>Forgot Password?</a>
            </div>
        </div>
    )
}

export default Login