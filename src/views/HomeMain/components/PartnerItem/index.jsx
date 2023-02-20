import Image from "next/legacy/image";
// style
import styles from "./PartnerItem.module.scss";

const PartnerItem = ({ item }) => (
  <div className={styles["partner-item-container"]}>
    <Image
      width={90}
      height={50}
      src={item.src}
      alt="Partner Icon"
      className={styles["partner-item-image"]}
    />
  </div>
);

export default PartnerItem;
