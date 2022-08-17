// style
import styles from "./SidebarBannerVipItem.module.scss";

const SidebarBannerVipItem = ({ item }) => (
  <div className={styles["sidebar-vip-banner-item-container"]}>
    <h3>{item.title}</h3>
    <button type="button" className={styles["sidebar-vip-banner-item-button"]}>
      {item.label}
    </button>
  </div>
);

export default SidebarBannerVipItem;
