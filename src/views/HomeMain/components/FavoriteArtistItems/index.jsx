// children
import FavoriteArtistItem from "../FavoriteArtistItem";
// styles
import styles from "./FavoriteArtistItems.module.scss";

const FavoriteArtistItems = ({ listArtists }) => (
  <div className={styles["favorite-artist-items"]}>
    {listArtists.map((item, index) => (
      <FavoriteArtistItem item={item} key={item.id} order={index}/>
    ))}
  </div>
);

export default FavoriteArtistItems;
