import FavoriteArtistItemPhotos from "../FavoriteArtistItemPhotos";
// style
import styles from "./FavoriteArtistItemFooter.module.scss";

const FavoriteArtistItemFooter = ({ artist }) => (
  <div className={styles["favorite-artist-item-footer-container"]}>
    <h3>{artist.name}</h3>
    <FavoriteArtistItemPhotos listPhotos={artist.listPhotos} />
  </div>
);

export default FavoriteArtistItemFooter;
