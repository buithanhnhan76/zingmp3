// child
import Partner from "src/views/Home/mains/Partner";
import Event from "src/views/Home/mains/Event";
import ArtistCarousel from "./mains/ArtistCarousel";
import MediaCarousel from "./mains/MediaCarousel";
import XOneCorner from "./mains/XOneCorner";
import Chill from "./mains/Chill";
import NewSongEveryDay from "./mains/NewSongEveryDay";
import Top100 from "./mains/Top100";
import Banner from "./mains/Banner";
import FavoriteArtist from "./mains/FavoriteArtist";
// style
import styles from "./HomeMain.module.scss";

const HomeMain = () => (
  <div className={styles["home-main-container"]}>
    <MediaCarousel />
    <Chill />
    <FavoriteArtist />
    <NewSongEveryDay />
    <Banner />
    <ArtistCarousel />
    <Top100 />
    <XOneCorner />
    <Event />
    <Partner />
  </div>
);

export default HomeMain;
