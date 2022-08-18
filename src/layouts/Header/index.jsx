// children of Header
import HeaderLeft from "./mains/HeaderLeft";
import HeaderRight from "./mains/HeaderRight";
// style of header
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles["header-container"]}>
    <HeaderLeft />
    <HeaderRight />
  </div>
);

export default Header;
