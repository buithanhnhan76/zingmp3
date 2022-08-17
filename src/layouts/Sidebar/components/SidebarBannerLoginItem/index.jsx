// style
import styles from "./SidebarBannerLoginItem.module.scss";

const SidebarBannerLoginItem = ({ item }) => (
  <div className={styles["sidebar-banner-item-container"]}>
    <h3>{item.title}</h3>
    <button type="button" className={styles["sidebar-banner-item-button"]}>
      {item.label}
    </button>
  </div>
);

export default SidebarBannerLoginItem;
