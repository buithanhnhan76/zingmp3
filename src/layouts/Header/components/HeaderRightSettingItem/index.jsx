// style
import styles from "./HeaderRightSettingItem.module.scss";
// next image
import Image from "next/image";

const HeaderRightSettingItem = ({ item }) => (
  <div className={styles["header-setting-item-container"]}>
    <Image
      className={styles["header-setting-item-icon"]}
      width={20}
      height={20}
      src={item.src}
      alt="setting icon"
    />
  </div>
);

export default HeaderRightSettingItem;
