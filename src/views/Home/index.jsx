// child
import Partner from "src/views/Home/mains/Partner";
import Event from "src/views/Home/mains/Event";
import ArtistCarousel from "./mains/ArtistCarousel";
// style
import styles from "./MainHome.module.scss";

const MainHome = () => (
  <div className={styles["home-main-container"]}>
    <ArtistCarousel />
    <Event />
    <Partner />
  </div>
);

export default MainHome;
