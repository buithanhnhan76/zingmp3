// component
import PartnerItems from "../../components/PartnerItems";
import PartnerTitle from "../../components/PartnerTitle";
// style
import styles from "./Partner.module.scss";

const Partner = () => (
  <div className={styles["partner-container"]}>
    <PartnerTitle />
    <PartnerItems />
  </div>
);

export default Partner;
