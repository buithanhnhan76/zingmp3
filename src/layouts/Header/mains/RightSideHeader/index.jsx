// setting items
import SettingItems from "../../components/SettingItems";
// login container
import LoginContainer from "../../components/LoginContainer";
// styles
import styles from "./RightSideHeader.module.scss";

const RightSideHeader = () => (
  <div className={styles["header-right-container"]}>
    <SettingItems />
    <LoginContainer />
  </div>
);

export default RightSideHeader;
