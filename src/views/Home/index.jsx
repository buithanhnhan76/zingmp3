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
import Chart from "./mains/Chart";
import NewRelease from "./mains/NewRelease";
import OutStandingRadio from "./mains/OutStandingRadio";
import NewSongCarousel from "./mains/NewSongCarousel";
// style
import styles from "./HomeMain.module.scss";

const HomeMain = () => (
  <div className={styles["home-main-container"]}>
    <MediaCarousel />
    <NewRelease />
    <Chill />
    <FavoriteArtist />
    <NewSongEveryDay />
    <Chart />
    <Banner />
    <ArtistCarousel />
    <Top100 />
    <NewSongCarousel />
    <XOneCorner />
    <OutStandingRadio />
    <Event />
    <Partner />
  </div>
);

export default HomeMain;
