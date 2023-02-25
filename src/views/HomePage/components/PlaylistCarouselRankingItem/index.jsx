// libs
import Image from "next/legacy/image";
// style
import styles from "./PlaylistCarouselRankingItem.module.scss";

const PlaylistCarouselRankingItem = ({ song, order }) => (
  <div className={styles["playlist-carousel-ranking-item"]} order={order}>
    <div className={styles["playlist-carousel-ranking-item-photo"]}>
      <Image src={song.src} layout="fill" objectFit="cover" />
    </div>
    <div className={styles["playlist-carousel-ranking-content"]}>
      <div>
        <h4 className={styles["playlist-carousel-ranking-item-title"]}>
          {song.title}
        </h4>
        <div className={styles["playlist-carousel-ranking-item-artists"]}>
          {song.artists}
        </div>
      </div>
      <div className={styles["playlist-carousel-ranking-item-content-footer"]}>
        <div>{song.rank}</div>
        <div> {song.dateRelease}</div>
      </div>
    </div>
  </div>
);

export default PlaylistCarouselRankingItem;
