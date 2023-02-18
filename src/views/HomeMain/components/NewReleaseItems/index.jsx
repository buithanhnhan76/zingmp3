// mock
import { listNewReleaseSongs } from "src/mocks/NewRelease";
// component
import NewReleaseItem from "../NewReleaseItem";
// style
import styles from "./NewReleaseItems.module.scss";

const NewReleaseItems = () => (
  <div className={styles["new-release-items-container"]}>
    {listNewReleaseSongs.map((song, index) => (
      <NewReleaseItem key={song.id} item={song} order={index} />
    ))}
  </div>
);

export default NewReleaseItems;
