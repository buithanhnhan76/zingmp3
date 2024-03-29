// children
import FavoriteArtistItemPhoto from "../FavoriteArtistItemPhoto";
// styles
import styles from "./FavoriteArtistItemPhotos.module.scss";

const FavoriteArtistItemPhotos = ({ items }) => (
  <div className={styles["favorite-artist-item-photos"]}>
    {items.map((item) => (
    < FavoriteArtistItemPhoto key={item.id} item={item} />
    ))}
  </div>
);

export default FavoriteArtistItemPhotos;
