// plus icon
import { PlusOutlined } from "@ant-design/icons";
// style
import styles from "./SidebarButton.module.scss";

const SidebarButton = ({ trans }) => (
  <div className={styles["sidebar-button-container"]}>
    <div className={styles["sidebar-button-content"]}>
      <PlusOutlined className={styles["sidebar-button-icon"]} />
      {trans.sidebar.button.label}
    </div>
  </div>
);

export default SidebarButton;
