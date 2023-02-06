// child
import PlaylistItem from "../PlaylistItem";
// styles
import styles from "./PlaylistItems.module.scss";

const PlaylistItems = ({ listItems }) => (
  <div className={styles["playlist-items-container"]}>
    {listItems.map((item) => (
      <PlaylistItem item={item} key={item.id}/>
    ))}
  </div>
);

export default PlaylistItems;
