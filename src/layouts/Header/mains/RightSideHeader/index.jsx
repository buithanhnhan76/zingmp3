// setting items
import SettingItems from "../../components/SettingItems";
// zalo login
import LoginButton from "../../components/LoginButton";
// styles
import styles from "./RightSideHeader.module.scss";

const RightSideHeader = () => (
  <div className={styles["header-right-container"]}>
    <SettingItems />
    <LoginButton />
  </div>
);

export default RightSideHeader;
