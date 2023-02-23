// mock
import { listNewRelease } from "src/mocks/NewRelease";
// child
import NewReleaseItem from "../NewReleaseItem";
// styles
import styles from "./NewReleaseItems.module.scss";

const NewReleaseItems = () => (
  <div className={styles["new-release-items-container"]}>
    {listNewRelease.map((song, index) => (
      <NewReleaseItem key={song.id} item={song} order={index} />
    ))}
  </div>
);

export default NewReleaseItems;
