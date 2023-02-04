// setting items
import SettingItems from "../Header/components/SettingItems";
// login container
import LoginContainer from "../Header/components/LoginContainer";
import LanguageSetting from "../Header/components/LanguageSetting";
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
