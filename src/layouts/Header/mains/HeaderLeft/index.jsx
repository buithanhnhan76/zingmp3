// f2 component
import HeaderLeftButtons from "../../components/HeaderLeftButtons";
import HeaderLeftSearch from "../../HeaderLeftSearch";
// style
import styles from "./HeaderLeft.module.scss";

const HeaderLeft = () => (
  <div className={styles["header-left-container"]}>
    <HeaderLeftButtons />
    <HeaderLeftSearch />
  </div>
);

export default HeaderLeft;
