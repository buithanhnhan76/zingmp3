// children
import HistoryButton from "../Header/components/HistoryButton";
import SearchBar from "../Header/components/SearchBar";
// style
import styles from "./HeaderLeft.module.scss";

const HeaderLeft = () => (
  <div className={styles["left-side-header-container"]}>
    <HistoryButton />
    <SearchBar />
  </div>
);

export default HeaderLeft;
