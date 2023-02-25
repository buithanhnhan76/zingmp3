// libs
import { useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
// styles
import styles from "./SidebarButton.module.scss";

const SidebarButton = () => {
  const buttonLabel = useSelector(
    (state) => state.locale.translate.sidebar.button.buttonLabel
  );
  return (
    <div className={styles["sidebar-button"]}>
      <button className={styles["button"]}>
        <PlusOutlined className={styles["button-icon"]} />
        {buttonLabel}
      </button>
    </div>
  );
};

export default SidebarButton;
