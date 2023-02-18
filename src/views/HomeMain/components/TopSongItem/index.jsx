// libs
import Image from "next/image";
import classNames from "classnames";
// style
import styles from "./TopSongItem.module.scss";

const TopSongItem = ({ song }) => (
  <div className={styles["top-song-item-container"]}>
    <div
      className={classNames(
        styles["top-song-item-rank"],
        { [styles["top-song-item-rank-first"]]: song.rank === 1 },
        { [styles["top-song-item-rank-second"]]: song.rank === 2 },
        { [styles["top-song-item-rank-third"]]: song.rank === 3 }
      )}
    >
      {song.rank}
    </div>
    <div className={styles["top-song-item-photo"]}>
      <Image
        src={song.src}
        layout="fill"
        objectFit="cover"
        
      />
    </div>
    <div>
      <div className={styles["top-song-item-title"]}>{song.title}</div>
      <div className={styles["top-song-item-artists"]}>{song.artists}</div>
    </div>
    <div className={styles["top-song-item-percent"]}>{song.percent}</div>
  </div>
);

export default TopSongItem;
