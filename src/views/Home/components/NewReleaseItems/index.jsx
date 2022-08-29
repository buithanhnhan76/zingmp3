// child
import NewReleaseItem from "../NewReleaseItem";
// mock
import { listNewReleaseSongs } from "src/mocks/NewRelease";
// style
import styles from "./NewReleaseItems.module.scss";

const NewReleaseItems = () => (
  <div className={styles["new-release-items-container"]}>
    {listNewReleaseSongs.map((song) => (
      <NewReleaseItem id={song.id} item={song} />
    ))}
  </div>
);

export default NewReleaseItems;
