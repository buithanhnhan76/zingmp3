import styles from "./HeaderRightSettingItem.module.scss";
import Image from "next/image";

const HeaderRightSettingItem = ({ item }) => (
  <div className={styles["header-setting-item-container"]}>
    <Image
      className={styles["header-setting-item-icon"]}
      width={40}
      height={40}
      src={item.src}
      alt="setting icon"
    />
  </div>
);

export default HeaderRightSettingItem;
