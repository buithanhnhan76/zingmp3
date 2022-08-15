import styles from "./PartnerItem.module.scss";

const PartnerItem = ({ item }) => (
  <div className={styles["partner-item-container"]}>
    <img src={item.imgSrc} alt="Partner Icon" className={styles["partner-item-image"]} />
  </div>
);

export default PartnerItem;
