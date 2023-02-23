// libs
import classNames from "classnames";
// children of Header
import HeaderLeft from "../HeaderLeft";
import HeaderRight from "../HeaderRight";
// style of header
import styles from "./Header.module.scss";

const Header = () => (
  <header className={classNames(styles["header"])}>
    <HeaderLeft />
    <HeaderRight />
  </header>
);

export default Header;
