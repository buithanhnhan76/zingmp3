import { useMemo } from "react";
// child
import PlaylistItem from "../PlaylistItem";
// styles
import styles from "./PlaylistItems.module.scss";

const PlaylistItems = ({ listItems }) => {

  const renderItems = useMemo(() => {
    return listItems.slice(0, 5);
  }, listItems);
  return (
    <div className={styles["playlist-items-container"]}>
      {renderItems.map((item, index) => (
        <PlaylistItem item={item} key={item.id} order={(index)} />
      ))}
    </div>
  );
};

export default PlaylistItems;
