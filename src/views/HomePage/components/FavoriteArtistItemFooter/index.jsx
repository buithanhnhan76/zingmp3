import FavoriteArtistItemPhotos from "../FavoriteArtistItemPhotos";
// style
import styles from "./FavoriteArtistItemFooter.module.scss";

const FavoriteArtistItemFooter = ({ item }) => (
  <div className={styles["favorite-artist-item-footer"]}>
    <h4>{item.name}</h4>
    <FavoriteArtistItemPhotos items={item.listPhotos} />
  </div>
);

export default FavoriteArtistItemFooter;
