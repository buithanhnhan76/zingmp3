// libs
import { Carousel } from "antd";
// components
import PlaylistItem from "../../components/PlaylistItem";
// mocks
import { listNewSongCarousel } from "src/mocks/NewSongCarousel";
// style
import styles from "./PlaylistCarousel.module.scss";

const PlaylistCarousel = () => (
  <div className={styles["playlist-carousel-container"]}>
    <Carousel
      dots={false}
      slidesToShow={5}
      autoplay
      className={styles["carousel-container"]}
    >
      {listNewSongCarousel.map((song) => (
        <PlaylistItem
          key={song.id}
          className={styles["playlist-carousel-item"]}
          item={song}
        />
      ))}
    </Carousel>
  </div>
);

export default PlaylistCarousel;
