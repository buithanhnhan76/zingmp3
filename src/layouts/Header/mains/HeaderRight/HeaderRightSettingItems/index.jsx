import HeaderRightSettingItem from "./HeaderRightSettingItem";
import styles from "./HeaderRightSettingItems.module.scss";
import Clip from "public/icons/clip.svg";

const listSettingItems = [
  {id: 1, src: Clip.src },
  {id: 2, src: Clip.src },
  {id: 3, src: Clip.src },
  {id: 4, src: Clip.src },
];

const HeaderRightSettingItems = () => (
  <div className={styles["header-setting-items-container"]}>
    {listSettingItems.map((item) => (
      <HeaderRightSettingItem item={item} key={item.id}/>
    ))}
  </div>
);

export default HeaderRightSettingItems;
