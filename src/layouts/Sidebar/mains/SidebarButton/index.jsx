// libs
import { PlusOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
// style
import styles from "./SidebarButton.module.scss";

const SidebarButton = () => {
  const { buttonLabel } = useSelector(
    (state) => state.locale.translate.sidebar.button
  );
  return (
    <div className={styles["sidebar-button-container"]}>
      <div className={styles["sidebar-button-content"]}>
        <PlusOutlined className={styles["sidebar-button-icon"]} />
        {buttonLabel}
      </div>
    </div>
  );
};

export default SidebarButton;
