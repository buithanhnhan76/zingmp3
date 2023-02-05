// children
import SettingItems from "../SettingItems";
import LoginContainer from "../LoginContainer";
import LanguageSetting from "../LanguageSetting";
// styles
import styles from "./HeaderRight.module.scss";

const HeaderRight = () => (
  <div className={styles["header-right-container"]}>
    <SettingItems />
    <LoginContainer />
    <LanguageSetting />
  </div>
);

export default HeaderRight;
