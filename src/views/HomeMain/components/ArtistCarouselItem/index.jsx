// libs
import Image from "next/legacy/image";
// styles 
import styles from "./ArtistCarouselItem.module.scss";

const ArtistCarouselItem = ({item}) => (
  <div className={styles["artist-carousel-item"]}>
    <Image src={item.src} layout="fill" />
  </div>
);

export default ArtistCarouselItem;
