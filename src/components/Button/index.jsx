// libs
import classNames from "classnames";
// style
import styles from "./Button.module.scss";

const Button = ({ buttonLabel, borderColor, backGroundColor }) => (
  <button
    className={classNames(
      styles["button-container"],
      { [styles["border-white"]]: !borderColor },
      { [styles["background-transparent"]]: !backGroundColor }
    )}
  >
    {buttonLabel}
  </button>
);

export default Button;
