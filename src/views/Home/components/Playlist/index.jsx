import PlaylistItems from "../PlaylistItems";
// style
import styles from "./Playlist.module.scss";

const Playlist = ({ title, listItems }) => (
  <div className={styles["playlist-container"]}>
    <h3 className={styles["playlist-title"]}>{title}</h3>
    <PlaylistItems listItems = {listItems} />
  </div>
);

export default Playlist;
