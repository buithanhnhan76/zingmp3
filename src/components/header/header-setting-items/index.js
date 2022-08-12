import HeaderSettingItem from "./header-setting-item";
import styles from "./header-setting-items.module.scss";
import Clip from "../../../../public/icons/clip.svg";

const listSettingItems = [
  { src: Clip.src },
  { src: Clip.src },
  { src: Clip.src },
  { src: Clip.src },
];

const HeaderSettingItems = () => (
  <div className={styles["header-setting-items-container"]}>
    {listSettingItems.map((item) => (
      <HeaderSettingItem item={item} />
    ))}
  </div>
);

export default HeaderSettingItems;
