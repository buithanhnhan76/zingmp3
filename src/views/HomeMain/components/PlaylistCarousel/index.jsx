// libs
import { Carousel } from "antd";
import { useMemo } from "react";
// hook
import useWindowDimensions from "src/hooks/useWindowDimensions";
// mocks
import { listNewSongCarousel } from "src/mocks/NewSongCarousel";
// components
import PlaylistCarouselItem from "../PlaylistCarouselItem";
// style
import styles from "./PlaylistCarousel.module.scss";

const PlaylistCarousel = () => {
  const windowDimension = useWindowDimensions();
  const calcWindowDimension = () => {
    if(windowDimension) {
      if(windowDimension.width > 425)
        return 5;
      return 1;
    }
    return  5;
  }
  const calcSlidesToShow = useMemo(() => calcWindowDimension(), [windowDimension]);
  return (
    <div className={styles["playlist-carousel-container"]}>
      <Carousel
        dots={false}
        slidesToShow={calcSlidesToShow}
        autoplay
      >
        {listNewSongCarousel.map((song) => (
          <PlaylistCarouselItem key={song.id} item={song} />
        ))}
      </Carousel>
    </div>
  );
};

export default PlaylistCarousel;
