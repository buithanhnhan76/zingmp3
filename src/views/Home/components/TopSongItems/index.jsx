// mock
import { listTopSongs } from "src/mocks/TopSongItems";
// child
import TopSongItem from "../TopSongItem";
import Button from "src/components/Button";
// styles
import styles from "./TopSongItems.module.scss";

const TopSongItems = () => (
  <div className={styles["top-song-items-container"]}>
    {listTopSongs.map((song) => (
      <TopSongItem song={song} key={song.id} />
    ))}
    <div className={styles["top-song-items-buttons"]}>
      <Button buttonLabel="Xem thêm" />
    </div>
  </div>
);

export default TopSongItems;
