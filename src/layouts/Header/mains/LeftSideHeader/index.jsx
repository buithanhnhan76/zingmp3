// children
import HistoryButton from "../../components/HistoryButton";
import SearchBar from "../../components/SearchBar";
// style
import styles from "./LeftSideHeader.module.scss";

const LeftSideHeader = () => (
  <div className={styles["left-side-header-container"]}>
    <HistoryButton />
    <SearchBar />
  </div>
);

export default LeftSideHeader;
