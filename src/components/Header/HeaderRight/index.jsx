import HeaderRightSettingItems from "./HeaderRightSettingItems";
import HeaderRightLogin from "./HeaderRightLogin";
import styles from "./HeaderRight.module.scss";

const HeaderRight = () => <div className={styles["header-right-container"]}>
    <HeaderRightSettingItems></HeaderRightSettingItems>
    <HeaderRightLogin></HeaderRightLogin>
  </div>;

export default HeaderRight;