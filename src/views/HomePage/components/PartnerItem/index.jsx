// libs
import Image from "next/legacy/image";
// style
import styles from "./PartnerItem.module.scss";

const PartnerItem = ({ item }) => (
  <figure className={styles["partner-item-container"]}>
    <Image
      width={90}
      height={50}
      src={item.src}
      alt="Partner Icon"
    />
  </figure>
);

export default PartnerItem;
