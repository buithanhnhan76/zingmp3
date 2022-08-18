// Header right setting items
import HeaderRightSettingItems from "../../components/HeaderRightSettingItems";
// Header right login
import HeaderRightLogin from "../../components/HeaderRightLogin";
// styles
import styles from "./HeaderRight.module.scss";

const HeaderRight = () => (
  <div className={styles["header-right-container"]}>
    <HeaderRightSettingItems />
    <HeaderRightLogin />
  </div>
);

export default HeaderRight;
