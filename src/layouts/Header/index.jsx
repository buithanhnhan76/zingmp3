import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles["header-container"]}>
    <HeaderLeft />
    <HeaderRight />
  </div>
);

export default Header;
