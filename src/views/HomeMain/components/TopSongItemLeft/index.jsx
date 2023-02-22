// libs
import Image from "next/legacy/image";
import classNames from "classnames";
// styles
import styles from "./TopSongItemLeft.module.scss";

const TopSongItemLeft = ({ item }) => (
  <div className={styles["top-song-item-left"]}>
    <div
      className={classNames(
        styles["top-song-item-rank"],
        { [styles["top-song-item-first"]]: item.rank === 1 },
        { [styles["top-song-item-second"]]: item.rank === 2 },
        { [styles["top-song-item-third"]]: item.rank === 3 }
      )}
    >
      {item.rank}
    </div>
    <div className={styles["top-song-item-photo"]}>
      <Image src={item.src} layout="fill" objectFit="cover" />
    </div>
    <div>
      <div className={styles["top-song-item-title"]}>{item.title}</div>
      <div className={styles["top-song-item-artists"]}>{item.artists}</div>
    </div>
  </div>
);

export default TopSongItemLeft;
