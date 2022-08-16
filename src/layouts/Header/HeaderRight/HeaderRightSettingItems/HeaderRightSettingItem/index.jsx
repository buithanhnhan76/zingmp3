import styles from "./HeaderRightSettingItem.module.scss";

const HeaderRightSettingItem = ({ item }) => (
  <div className={styles["header-setting-item-container"]}>
    <img
      className={styles["header-setting-item-icon"]}
      src={item.src}
      alt="icon"
    />
  </div>
);

export default HeaderRightSettingItem;
