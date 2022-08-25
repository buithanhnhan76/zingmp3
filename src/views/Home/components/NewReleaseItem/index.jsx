// libs
import Image from "next/image";
// style
import styles from "./NewReleaseItem.module.scss";

const NewReleaseItem = ({ item }) => (
  <div className={styles["new-release-item-container"]}>
    <Image
      src={item.src}
      width={60}
      height={60}
      objectFit="cover"
      className={styles["new-release-item-photo"]}
    />
    <div>
      <h3>{item.title}</h3>
      <p className={styles["new-release-item-details"]}>{item.artists}</p>
      <p className={styles["new-release-item-details"]}>{item.dateRelease}</p>
    </div>
  </div>
);

export default NewReleaseItem;
