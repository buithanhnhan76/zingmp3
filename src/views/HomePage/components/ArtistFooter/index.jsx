// child
import FavoriteArtistItemPhotos from "../FavoriteArtistItemPhotos";
// styles
import styles from "./ArtistFooter.module.scss";

const ArtistFooter = ({ item }) => (
  <div className={styles["artist-footer"]}>
    <h4 className={styles["artist-name"]}>{item.name}</h4>
    <FavoriteArtistItemPhotos items={item.listPhotos} />
  </div>
);

export default ArtistFooter;
