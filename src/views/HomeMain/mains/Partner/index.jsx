// children
import PartnerItems from "../../components/PartnerItems";
import PartnerTitle from "../../components/PartnerTitle";
// styles
import styles from "./Partner.module.scss";

const Partner = () => (
  <section className={styles["partner-container"]}>
    <PartnerTitle />
    <PartnerItems />
  </section>
);

export default Partner;
