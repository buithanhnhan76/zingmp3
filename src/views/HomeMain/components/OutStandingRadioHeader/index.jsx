// child
import Button from "src/components/Button";
// style
import styles from "./OutStandingRadioHeader.module.scss";

const OutStandingRadioHeader = () => (
  <div className={styles["out-standing-radio-header"]}>
    <h3 className={styles["out-standing-radio-title"]}>Radio Nổi bật</h3>
    <Button buttonLabel="Tất cả" border="none" color="secondary" arrow />
  </div>
);

export default OutStandingRadioHeader;
