import Image from "next/image";
import styles from "./PlaylistItem.module.scss";

const PlaylistItem = ({ item }) => (
  <div className={styles["playlist-item-container"]}>
    <Image src={item.src} width={195} height={195} objectFit="cover" className={styles["playlist-item-photo"]}/>
    <div className={styles["playlist-item-title"]}>{item.title}</div>
    <div className={styles["playlist-item-desc"]}>{item.desc}</div>
  </div>
);

export default PlaylistItem;
