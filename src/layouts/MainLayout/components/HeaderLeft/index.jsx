// children
import HistoryButton from "../HistoryButtons";
import DynamicSearchBar from "src/components/DynamicSearchBar";
// style
import styles from "./HeaderLeft.module.scss";

const HeaderLeft = () => (
  <div className={styles["left-side-header-container"]}>
    <HistoryButton />
    <DynamicSearchBar />
  </div>
);

export default HeaderLeft;
