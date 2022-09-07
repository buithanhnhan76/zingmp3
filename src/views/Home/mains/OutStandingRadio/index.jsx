// child
import OutStandingRadioHeader from "../../components/OutStandingRadioHeader";
import OutStandingRadioCarousel from "../../components/OutStandingRadioCarousel";
// style
import styles from "./OutStandingRadio.module.scss";

const OutStandingRadio = () => (
  <div className={styles["outstanding-radio-container"]}>
    <OutStandingRadioHeader />
    <OutStandingRadioCarousel />
  </div>
);

export default OutStandingRadio;
