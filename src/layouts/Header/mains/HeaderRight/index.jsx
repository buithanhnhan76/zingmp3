import HeaderRightSettingItems from "./HeaderRightSettingItems";
import HeaderRightLogin from "./HeaderRightLogin";
import styles from "./HeaderRight.module.scss";

const HeaderRight = () => (
  <div className={styles["header-right-container"]}>
    <HeaderRightSettingItems />
    <HeaderRightLogin />
  </div>
);

export default HeaderRight;
