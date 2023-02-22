// libs
import Image from "next/legacy/image";
// styles
import styles from "./FavoriteArtistItemPhoto.module.scss";

const FavoriteArtistItemPhoto = ({ item }) => (
  <div key={item.id} className={styles["favorite-artist-item-photo"]}>
    <Image layout="fill" objectFit="cover" src={item.src} />
  </div>
);

export default FavoriteArtistItemPhoto;
