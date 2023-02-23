// styles
import styles from "./HistoryButtons.module.scss";

const HistoryButtons = () => (
  <div className={styles["history-buttons-container"]}>
    <button
      type="button"
      aria-label="left button"
      className={styles["previous-button"]}
    />
    <button
      type="button"
      aria-label="right button"
      className={styles["next-button"]}
    />
  </div>
);

export default HistoryButtons;
