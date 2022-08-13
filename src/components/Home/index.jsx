import Gallery from "../Gallery";
import NewRelease from "../NewRelease";
import PlayList from "../Playlist";
import FavoriteArtist from "../FavoriteArtist";
import Chart from "../Chart";
import Card from "../Card";
import Carousel from "../Carousel";
import NewReleaseSlider from "../NewReleaseSlider";
import PlaylistSlider from "../PlaylistSlider";
import RadioCarousel from "../RadioCarousel";
import Event from "../Event";
import Partner from "../Partner";
import styles from "./Home.module.scss";

const Home = () => (
  <div className={styles["home-container"]}>
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

export default Home;
