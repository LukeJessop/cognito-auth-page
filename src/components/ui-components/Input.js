import styles from '../../SCSS/modules/ui-component-modules/input.module.scss'

function Input(props) {
    return (
        <div className={styles.container}>
            <span>{props.title}</span>
            <input/>
        </div>
    )
}

export default Input