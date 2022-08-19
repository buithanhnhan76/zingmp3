// children
import Gallery from "./mains/Gallery";
import NewRelease from "./mains/NewRelease";
import PlayList from "./mains/Playlist";
import FavoriteArtist from "./mains/FavoriteArtist";
import Chart from "./mains/Chart";
import Card from "./mains/Card";
import Carousel from "./mains/Carousel";
import NewReleaseSlider from "./mains/NewReleaseSlider";
import PlaylistSlider from "./mains/PlaylistSlider";
import RadioCarousel from "./mains/RadioCarousel";
import Event from "./mains/Event";
import Partner from "./mains/Partner";
// style
import styles from "./HomeMain.module.scss";

const HomeMain = () => (
  <div className={styles["home-main-container"]}>
    <Gallery />
    <NewRelease />
    <PlayList />
    <FavoriteArtist />
    <PlayList />
    <Chart />
    <Card />
    <Carousel />
    <PlayList />
    <NewReleaseSlider />
    <PlaylistSlider />
    <PlayList />
    <RadioCarousel />
    <Event />
    <Partner />
  </div>
);

export default HomeMain;
