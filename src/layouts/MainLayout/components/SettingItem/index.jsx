// libs
import Image from "next/image";
// style
import styles from "./SettingItem.module.scss";

const SettingItem = ({ item }) => (
  <div
    className={`${styles["setting-item-container"]} ${
      item.isImportant ? "important" : "not-important"
    }`}
  >
    <Image
      className={styles["setting-item-icon"]}
      width={20}
      height={20}
      src={item.src}
      alt="setting icon"
    />
  </div>
);

export default SettingItem;
