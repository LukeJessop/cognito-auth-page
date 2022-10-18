import styles from "../../SCSS/modules/ui-component-modules/button.module.scss";
function Button(props) {
  return (
    <div className={styles.container}>
      <button type="submit">
        <h3>{props.children}</h3>
      </button>
    </div>
  );
}

export default Button;
