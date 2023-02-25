// libs
import Image from "next/legacy/image";
// style
import styles from "./NewReleaseItem.module.scss";

const NewReleaseItem = ({ item, order }) => (
  <div className={styles["new-release-item-container"]} order={order}>
    <div className={styles["new-release-item-photo-container"]}>
      <Image src={item.src} layout="fill" objectFit="cover" />
    </div>
    <div>
      <h4 className={styles["new-release-item-title"]}>{item.title}</h4>
      <span className={styles["new-release-item-details"]}>{item.artists}</span>
      <span className={styles["new-release-item-details"]}>{item.dateRelease}</span>
    </div>
  </div>
);

export default NewReleaseItem;
