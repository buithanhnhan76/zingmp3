// libs
import { useSelector } from "react-redux";
// style
import styles from "./PartnerTitle.module.scss";

const PartnerTitle = () => {
  const translate = useSelector((state) => state.locale.translate);
  return <h3 className={styles["partner-title"]}>{translate.partner.title}</h3>;
};

export default PartnerTitle;
