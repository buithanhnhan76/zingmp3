// children
import SettingItem from "../SettingItem";
// style
import { listSettingItems } from "src/mocks/Header/HeaderMockData";
// style
import styles from "./SettingItems.module.scss";

const SettingItems = () => (
  <div className={styles["setting-items-container"]}>
    {listSettingItems.map((item) => (
      <SettingItem item={item} key={item.id} />
    ))}
  </div>
);

export default SettingItems;
