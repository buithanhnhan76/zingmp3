// libs
import Image from "next/image";
// style
import styles from "./NewReleaseItem.module.scss";

const NewReleaseItem = ({ item, order }) => (
  <div className={styles["new-release-item-container"]} order={order}>
    <div className={styles["new-release-item-photo-container"]}>
      <Image src={item.src} layout="fill" objectFit="cover" />
    </div>
    <div>
      <h3 className={styles["new-release-item-title"]}>{item.title}</h3>
      <p className={styles["new-release-item-details"]}>{item.artists}</p>
      <p className={styles["new-release-item-details"]}>{item.dateRelease}</p>
    </div>
  </div>
);

export default NewReleaseItem;
