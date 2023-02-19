// libs
import Image from "next/legacy/image";
// child
import FavoriteArtistItemFooter from "../FavoriteArtistItemFooter";
// style
import styles from "./FavoriteArtistItem.module.scss";

const FavoriteArtistItem = ({ artist, order }) => (
  <div className={styles["favorite-artist-item-container"]} order={order}>
    <Image
      src={artist.src}
      layout="fill"
      className={styles["favorite-artist-item-main-photo"]}
    />
    <FavoriteArtistItemFooter artist={artist} />
  </div>
);

export default FavoriteArtistItem;
