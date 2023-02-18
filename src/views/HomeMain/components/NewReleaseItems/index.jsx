// libs
import { useMemo } from "react";
// mock
import { listNewReleaseSongs } from "src/mocks/NewRelease";
// component
import NewReleaseItem from "../NewReleaseItem";
// style
import styles from "./NewReleaseItems.module.scss";

const NewReleaseItems = () => {
  const renderItems = useMemo(() => listNewReleaseSongs.slice(0, 12), listNewReleaseSongs);
  return (
    <div className={styles["new-release-items-container"]}>
      {listNewReleaseSongs.map((song, index) => (
        <NewReleaseItem key={song.id} item={song} order={index}/>
      ))}
    </div>
  );
};

export default NewReleaseItems;
