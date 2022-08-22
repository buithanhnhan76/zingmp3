// children
import PartnerItem from "../PartnerItem";
// style
import styles from "./PartnerItems.module.scss";

const PartnerItems = ({ items }) => (
  <div className={styles["partner-items-container"]}>
    {items.map((item) => (
      <PartnerItem key={item.id} item={item} />
    ))}
  </div>
);

export default PartnerItems;
