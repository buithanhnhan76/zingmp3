import PlaylistItems from "../../components/PlaylistItems";
// style
import styles from "./Playlist.module.scss";

const Playlist = ({ title, listItems }) => (
  <section className={styles["playlist-container"]}>
    <h3 className={styles["playlist-title"]}>{title}</h3>
    <PlaylistItems listItems={listItems} />
  </section>
);

export default Playlist;
