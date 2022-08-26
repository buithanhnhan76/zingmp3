// components
import NewSongCarouselTitle from "../../components/NewSongCarouselTitle";
import PlaylistCarousel from "../../components/PlaylistCarousel";
import PlaylistCarouselRanking from "../../components/PlaylistCarouselRanking";
// style
import styles from "./NewSongCarousel.module.scss";

const NewSongCarousel = () => (
  <div className={styles["new-song-carousel-container"]}>
    <NewSongCarouselTitle />
    <PlaylistCarouselRanking />
    <PlaylistCarousel />
  </div>
);

export default NewSongCarousel;
