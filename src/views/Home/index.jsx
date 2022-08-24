import Partner from "src/views/Home/mains/Partner";
import Event from "src/views/Home/mains/Event";
import ArtistCarousel from "./mains/ArtistCarousel";
import MediaCarousel from "./mains/MediaCarousel";
// style
import styles from "./HomeMain.module.scss";

const HomeMain = () => (
  <div className={styles["home-main-container"]}>
    <MediaCarousel />
    <ArtistCarousel />
    <Event />
    <Partner />
  </div>
);

export default HomeMain;
