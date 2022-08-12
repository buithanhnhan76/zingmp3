import styles from "./header-setting-item.module.scss";

const HeaderSettingItem = ({ item }) => (
  <div className={styles["header-setting-item-container"]}>
    <img
      className={styles["header-setting-item-icon"]}
      src={item.src}
      alt="icon"
    />
  </div>
);

export default HeaderSettingItem;
