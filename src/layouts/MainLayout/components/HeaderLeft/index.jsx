// children
import HistoryButton from "../HistoryButtons";
import SearchBar from "../SearchBar";
// style
import styles from "./HeaderLeft.module.scss";

const HeaderLeft = () => (
  <div className={styles["left-side-header-container"]}>
    <HistoryButton />
    <SearchBar />
  </div>
);

export default HeaderLeft;
