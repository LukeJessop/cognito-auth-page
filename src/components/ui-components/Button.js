import styles from "../../SCSS/modules/ui-component-modules/button.module.scss";
function Button(props) {
  return (
    <div className={styles.container}>
      <button>
        <h3>{props.text}</h3>
      </button>
    </div>
  );
}

export default Button;
