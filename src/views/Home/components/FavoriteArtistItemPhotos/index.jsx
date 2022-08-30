import Image from "next/image";
// style
import styles from "./FavoriteArtistItemPhotos.module.scss";

const FavoriteArtistItemPhotos = ({ listPhotos }) => (
  <div className={styles["favorite-artist-item-photos-container"]}>
    {listPhotos.map((photo) => (
      <Image
        key={photo.id}
        width={46}
        height={46}
        src={photo.src}
        className={styles["favorite-artist-item-photo"]}
      />
    ))}
  </div>
);

export default FavoriteArtistItemPhotos;
