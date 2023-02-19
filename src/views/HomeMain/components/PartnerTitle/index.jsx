// libs
import { useSelector } from "react-redux";
// style
import styles from "./PartnerTitle.module.scss";

const PartnerTitle = () => {
  const title = useSelector((state) => state.locale.translate.partner.title);
  return <h3 className={styles["partner-title"]}>{console.log(title)}{title}</h3>;
};

export default PartnerTitle;
