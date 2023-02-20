// libs
import { useSelector } from "react-redux";
// child
import Button from "src/components/Button";
// style
import styles from "./OutStandingRadioHeader.module.scss";

const OutStandingRadioHeader = () => {
  const { title, buttonLabel } = useSelector(
    (state) => state.locale.translate.featuredRadios
  );
  return (
    <div className={styles["out-standing-radio-header"]}>
      <h3 className={styles["out-standing-radio-title"]}>{title}</h3>
      <Button buttonLabel={buttonLabel} border="none" color="secondary" arrow />
    </div>
  );
};

export default OutStandingRadioHeader;
