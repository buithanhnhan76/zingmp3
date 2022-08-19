// plus icon
import { PlusOutlined } from "@ant-design/icons";
// style
import styles from "./SidebarButton.module.scss";

const SidebarButton = ({ translate }) => (
  <div className={styles["sidebar-button-container"]}>
    <div className={styles["sidebar-button-content"]}>
      <PlusOutlined className={styles["sidebar-button-icon"]} />
      {translate.sidebar.button.buttonLabel}
    </div>
  </div>
);

export default SidebarButton;
