// components
import NewSongCarouselTitle from "../../components/NewSongCarouselTitle";
import PlaylistCarousel from "../../components/PlaylistCarousel";
// style
import styles from "./NewSongCarousel.module.scss";

const NewSongCarousel = () => (
  <div className={styles["new-song-carousel-container"]}>
    <NewSongCarouselTitle />
    <PlaylistCarousel />
  </div>
);

export default NewSongCarousel;
