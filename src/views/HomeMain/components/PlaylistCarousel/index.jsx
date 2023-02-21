// libs
import { Carousel } from "antd";
import { useMemo } from "react";
// hook
import { useSlidesNumber } from "src/hooks/useSlidesNumber";
// mocks
import { listNewSongCarousel } from "src/mocks/NewSongCarousel";
// components
import PlaylistCarouselItem from "../PlaylistCarouselItem";
// style
import styles from "./PlaylistCarousel.module.scss";

const PlaylistCarousel = () => {
  const numberOfSlidesToShow = useSlidesNumber(5, 3, 2, 1);
  return (
    <div className={styles["playlist-carousel-container"]}>
      <Carousel dots={false} slidesToShow={numberOfSlidesToShow} autoplay>
        {listNewSongCarousel.map((song) => (
          <PlaylistCarouselItem key={song.id} item={song} />
        ))}
      </Carousel>
    </div>
  );
};

export default PlaylistCarousel;
