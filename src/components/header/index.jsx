import HeaderButtons from "./header-buttons";
import HeaderSearch from "./header-search";
import HeaderSettingItems from "./header-setting-items";
import styles from "./header.module.scss";

const Header = () => (
  <div className={styles["header-container"]}>
    <HeaderButtons />
    <HeaderSearch />
    <HeaderSettingItems />
  </div>
);

export default Header;
