// children
import SectionTitle from "src/components/SectionTitle";
import PlaylistItems from "../../components/PlaylistItems";
// style
import styles from "./Playlist.module.scss";

const Playlist = ({ title, listItems }) => (
  <section className={styles["playlist-container"]}>
    <SectionTitle>{title}</SectionTitle>
    <PlaylistItems listItems={listItems} />
  </section>
);

export default Playlist;
