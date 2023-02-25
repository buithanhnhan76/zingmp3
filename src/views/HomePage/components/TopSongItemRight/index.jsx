// styles
import styles from "./TopSongItemRight.module.scss";

const TopSongItemRight = ({ item }) => (
  <div className={styles["top-song-item-right"]}>
    <span className={styles["top-song-item-percent"]}>{item.percent}</span>
  </div>
);

export default TopSongItemRight;
