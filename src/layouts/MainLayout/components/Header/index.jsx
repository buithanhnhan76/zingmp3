// libs
import classNames from "classnames";
// children of Header
import LeftSideHeader from "./mains/LeftSideHeader";
import RightSideHeader from "./mains/RightSideHeader";
// style of header
import styles from "./Header.module.scss";

const Header = () => (
  <div className={classNames(styles["header-container"])}>
    <LeftSideHeader />
    <RightSideHeader />
  </div>
);

export default Header;
