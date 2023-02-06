// libs
import Image from "next/image";
// styles
import styles from "./PlaylistItem.module.scss";

const PlaylistItem = ({ item }) => (
  <div className={styles["playlist-item-container"]}>
    <div className={styles["playlist-item-photo-container"]}>
      <Image src={item.src} layout="fill" objectFit="cover" />
    </div>
    <div>
      <h3 className={styles["playlist-item-title"]}>{item.title}</h3>
    </div>
    <div className={styles["playlist-item-desc"]}>{item.desc}</div>
  </div>
);

export default PlaylistItem;
