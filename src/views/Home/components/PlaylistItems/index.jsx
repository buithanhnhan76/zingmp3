import styles from "./PlaylistItems.module.scss";
import PlaylistItem from "../PlaylistItem";

const PlaylistItems = ({ listItems }) => (
  <div className={styles["playlist-items-container"]}>
    {listItems.map((item) => (
      <PlaylistItem item={item} />
    ))}
  </div>
);

export default PlaylistItems;
