// mock
import { listTopSongs } from "src/mocks/TopSongItems";
// children
import Button from "src/components/Button";
import TopSongItem from "../TopSongItem";
// styles
import styles from "./TopSongItems.module.scss";

const TopSongItems = () => (
  <div className={styles["top-song-items"]}>
    {listTopSongs.map((item) => (
      <TopSongItem item={item} key={item.id} />
    ))}
    <div className={styles["top-song-items-button"]}>
      <Button buttonLabel="Xem thêm" />
    </div>
  </div>
);

export default TopSongItems;
