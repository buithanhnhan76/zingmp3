// children
import DynamicSearchBar from "src/components/DynamicSearchBar";
import HistoryButton from "../HistoryButtons";
// style
import styles from "./HeaderLeft.module.scss";

const HeaderLeft = () => (
  <div className={styles["left-side-header-container"]}>
    <HistoryButton />
    <DynamicSearchBar />
  </div>
);

export default HeaderLeft;
