// styles
import styles from "./TopSongItemRight.module.scss";

const TopSongItemRight = ({ item }) => (
  <div className={styles["top-song-item-right"]}>
    <div className={styles["top-song-item-percent"]}>{item.percent}</div>
  </div>
);

export default TopSongItemRight;
