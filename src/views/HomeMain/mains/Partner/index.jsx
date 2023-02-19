// libs
import { useSelector } from "react-redux";
// mocks
import { listPartners } from "src/mocks/Partner";
// component
import PartnerItems from "../../components/PartnerItems";
// style
import styles from "./Partner.module.scss";

const Partner = () => {
  const translate = useSelector((state) => state.locale.translate);
  return (
    <div className={styles["partner-container"]}>
      <h3 className={styles["partner-title"]}>{translate.partner.title}</h3>
      <PartnerItems items={listPartners} />
    </div>
  );
};

export default Partner;
