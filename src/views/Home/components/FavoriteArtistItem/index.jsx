// libs
import Image from "next/image";
// child
import FavoriteArtistItemFooter from "../FavoriteArtistItemFooter";
// style
import styles from "./FavoriteArtistItem.module.scss";

const FavoriteArtistItem = ({ artist }) => (
  <div className={styles["favorite-artist-item-container"]}>
    <Image src={artist.src} layout="fill" className={styles["favorite-artist-item-main-photo"]}/>
    <FavoriteArtistItemFooter artist={artist}/>
  </div>
);

export default FavoriteArtistItem;
