// mock
import { listNewReleaseSongs } from "src/mocks/NewRelease";
// component
import NewReleaseItem from "../NewReleaseItem";
// style
import styles from "./NewReleaseItems.module.scss";

const NewReleaseItems = () => (
  <div className={styles["new-release-items-container"]}>
    {listNewReleaseSongs.map((song) => (
      <NewReleaseItem key={song.id} item={song} />
    ))}
  </div>
);

export default NewReleaseItems;
