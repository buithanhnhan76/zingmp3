// mocks
import { listPartners } from "src/mocks/Partner";
// children
import PartnerItem from "../PartnerItem";
// style
import styles from "./PartnerItems.module.scss";

const PartnerItems = () => (
  <div className={styles["partner-items-container"]}>
    {listPartners.map((item) => (
      <PartnerItem key={item.id} item={item} />
    ))}
  </div>
);

export default PartnerItems;
