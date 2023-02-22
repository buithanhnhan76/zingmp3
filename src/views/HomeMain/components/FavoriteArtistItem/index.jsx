// libs
import Image from "next/legacy/image";
// child
import FavoriteArtistItemFooter from "../FavoriteArtistItemFooter";
// styles
import styles from "./FavoriteArtistItem.module.scss";

const FavoriteArtistItem = ({ item, order }) => (
  <div className={styles["favorite-artist-item"]} order={order}>
    <Image
      src={item.src}
      layout="fill"
      objectFit="cover"
      className={styles["favorite-artist-item-photo"]}
    />
    <FavoriteArtistItemFooter item={item} />
  </div>
);

export default FavoriteArtistItem;
