// libs
import classNames from "classnames";
// children of Header
import HeaderLeft from "../HeaderLeft";
import HeaderRight from "../HeaderRight";
// style of header
import styles from "./Header.module.scss";

const Header = () => (
  <div className={classNames(styles["header-container"])}>
    <HeaderLeft />
    <HeaderRight />
  </div>
);

export default Header;
