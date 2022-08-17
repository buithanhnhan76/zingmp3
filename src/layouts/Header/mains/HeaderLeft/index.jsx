import HeaderLeftButtons from "./HeaderLeftButtons";
import HeaderLeftSearch from "./HeaderLeftSearch";
import styles from "./HeaderLeft.module.scss";

const HeaderLeft = () => (
  <div className={styles["header-left-container"]}>
    <HeaderLeftButtons></HeaderLeftButtons>
    <HeaderLeftSearch></HeaderLeftSearch>
  </div>
);

export default HeaderLeft;