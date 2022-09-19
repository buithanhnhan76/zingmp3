// libs
import { Carousel } from "antd";
// mocks
import { listCarouselRankingSongs } from "src/mocks/PlaylistCarouselRanking";
// component
import PlaylistCarouselRankingItems from "../PlaylistCarouselRankingItems";
// style
import styles from "./PlaylistCarouselRanking.module.scss";

const PlaylistCarouselRanking = () => (
  <div className={styles["playlist-carousel-ranking-container"]}>
    <Carousel
      dots={false}
      slidesToShow={3}
      autoplay
      className={styles["carousel-container"]}
    >
      {listCarouselRankingSongs.map((song) => (
        <PlaylistCarouselRankingItems key={song.id} song={song} />
      ))}
    </Carousel>
  </div>
);

export default PlaylistCarouselRanking;
