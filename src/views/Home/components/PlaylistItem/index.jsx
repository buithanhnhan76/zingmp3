import Image from "next/image";
import styles from "./PlaylistItem.module.scss";

const PlaylistItem = ({ item }) => (
  <div className={styles["playlist-item-container"]}>
    <div className={styles["playlist-item-photo-container"]}>
      <Image src={item.src} layout="fill" objectFit="cover" />
    </div>
    <div className={styles["playlist-item-title"]}>{item.title}</div>
    <div className={styles["playlist-item-desc"]}>{item.desc}</div>
  </div>
);

export default PlaylistItem;
