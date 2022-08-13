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
