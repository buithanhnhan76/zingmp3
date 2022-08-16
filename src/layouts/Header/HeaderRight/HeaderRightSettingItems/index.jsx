import HeaderRightSettingItem from "./HeaderRightSettingItem";
import styles from "./HeaderRightSettingItems.module.scss";
import Clip from "../../../../../public/icons/clip.svg";

const listSettingItems = [
  { src: Clip.src },
  { src: Clip.src },
  { src: Clip.src },
  { src: Clip.src },
];

const HeaderRightSettingItems = () => (
  <div className={styles["header-setting-items-container"]}>
    {listSettingItems.map((item) => (
      <HeaderRightSettingItem item={item} />
    ))}
  </div>
);

export default HeaderRightSettingItems;
