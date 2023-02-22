// children
import TopSongItemRight from "../TopSongItemRight";
import TopSongItemLeft from "../TopSongItemLeft";
// styles
import styles from "./TopSongItem.module.scss";

const TopSongItem = ({ item }) => (
  <div className={styles["top-song-item"]}>
    <TopSongItemLeft item={item} />
    <TopSongItemRight item={item} />
  </div>
);

export default TopSongItem;
