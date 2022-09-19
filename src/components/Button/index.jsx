// libs
import classNames from "classnames";
// style
import styles from "./Button.module.scss";

const Button = ({
  buttonLabel,
  borderColor,
  backGroundColor,
  border,
  color,
  arrow,
}) => (
  <button
    className={classNames(
      styles["button-container"],
      { [styles["border-none"]]: border === "none" },
      { [styles["border-white"]]: !borderColor },
      { [styles["background-transparent"]]: !backGroundColor },
      { [styles["background-purple"]]: backGroundColor === "purple" },
      { [styles["text-secondary"]]: color === "secondary" },
      { [styles["button-arrow"]]: arrow === true }
    )}
    type="button"
  >
    {buttonLabel}
  </button>
);

export default Button;
