// libs
import { Carousel } from "antd";
import { useMemo } from "react";
// custom hooks
import useWindowDimensions from "src/hooks/useWindowDimensions";
// mocks
import { listCarouselRankingSongs } from "src/mocks/PlaylistCarouselRanking";
// component
import PlaylistCarouselRankingItem from "../PlaylistCarouselRankingItem";
// style
import styles from "./PlaylistCarouselRanking.module.scss";

const PlaylistCarouselRanking = () => {
  const windowDimensions = useWindowDimensions();
  const calculateSlideToShow = () => {
    if (windowDimensions) {
      if (windowDimensions.width > 425) return 3;
      return 1;
    }
    return 3;
  };
  const calcSlidesToShow = useMemo(
    calculateSlideToShow,
    [windowDimensions]
  );
  return (
    <div className={styles["playlist-carousel-ranking-container"]}>
      <Carousel
        dots={false}
        slidesToShow={calcSlidesToShow}
        autoplay
      >
        {listCarouselRankingSongs.map((song, index) => (
          <PlaylistCarouselRankingItem
            key={song.id}
            song={song}
            order={index}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default PlaylistCarouselRanking;
