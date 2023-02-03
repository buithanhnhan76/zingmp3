// libs
import { PlusOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
// style
import styles from "./Button.module.scss";

const Button = () => {
  const { buttonLabel } = useSelector(
    (state) => state.locale.translate.sidebar.button
  );
  return (
    <div className={styles["button-container"]}>
      <div className={styles["button-content"]}>
        <PlusOutlined className={styles["button-icon"]} />
        {buttonLabel}
      </div>
    </div>
  );
};

export default Button;
