import Gallery from "../gallery";
import NewRelease from "../new-release";
import PlayList from "../playlist";
import FavoriteArtist from "../favorite-artist";
import Chart from "../chart";
import Card from "../card";
import Carousel from "../carousel";
import NewReleaseSlider from "../new-release-slider";
import PlaylistSlider from "../playlist-slider";
import RadioCarousel from "../radio-carousel";
import Event from "../event";
import Partner from "../partner";

const Home = () => (
  <div>
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
