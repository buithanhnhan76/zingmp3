// children
import NewSongCarouselTitle from "../../components/NewSongCarouselTitle";
import PlaylistCarousel from "../../components/PlaylistCarousel";
import PlaylistCarouselRanking from "../../components/PlaylistCarouselRanking";
// styles
import styles from "./NewSongCarousel.module.scss";

const NewSongCarousel = () => (
  <section className={styles["new-song-carousel-container"]}>
    <NewSongCarouselTitle />
    <PlaylistCarouselRanking />
    <PlaylistCarousel />
  </section>
);

export default NewSongCarousel;
