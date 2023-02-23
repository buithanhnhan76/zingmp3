// children
import Button from "src/components/Button";
// styles
import styles from "./HistoryButtons.module.scss";

const HistoryButtons = () => (
  <div className={styles["history-buttons-container"]}>
    {/* <Button largeLeftArrow />
    <Button largeRightArrow /> */}
    <button className={styles["previous-button"]} />
    <button className={styles["next-button"]} /> 
  </div>
);

export default HistoryButtons;
