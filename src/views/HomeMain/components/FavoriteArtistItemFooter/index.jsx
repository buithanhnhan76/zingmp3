import FavoriteArtistItemPhotos from "../FavoriteArtistItemPhotos";
// style
import styles from "./FavoriteArtistItemFooter.module.scss";

const FavoriteArtistItemFooter = ({ item }) => (
  <div className={styles["favorite-artist-item-footer"]}>
    <h3>{item.name}</h3>
    <FavoriteArtistItemPhotos items={item.listPhotos} />
  </div>
);

export default FavoriteArtistItemFooter;
