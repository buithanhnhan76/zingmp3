import FavoriteArtistItem from "../FavoriteArtistItem";
// style
import styles from "./FavoriteArtistItems.module.scss";

const FavoriteArtistItems = ({ listArtists }) => (
  <div className={styles["favorite-artist-items-container"]}>
    {listArtists.map((item) => (
      <FavoriteArtistItem artist={item} />
    ))}
  </div>
);

export default FavoriteArtistItems;