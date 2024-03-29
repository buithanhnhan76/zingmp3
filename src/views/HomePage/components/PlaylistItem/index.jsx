// libs
import Image from "next/legacy/image";
// styles
import styles from "./PlaylistItem.module.scss";

const PlaylistItem = ({ item, order }) => (
  <div className={styles["playlist-item-container"]} order={order}>
    <div className={styles["playlist-item-photo-container"]}>
      <Image src={item.src} layout="fill" objectFit="cover" />
    </div>
    <h4 className={styles["playlist-item-title"]}>{item.title}</h4>
    <div className={styles["playlist-item-desc"]}>{item.desc}</div>
  </div>
);

export default PlaylistItem;
