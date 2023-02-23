// libs
import { Carousel } from "antd";
// custom hooks
import { useSlidesNumber } from "src/hooks/useSlidesNumber";
// mocks
import { listCarouselRankingSongs } from "src/mocks/PlaylistCarouselRanking";
// component
import PlaylistCarouselRankingItem from "../PlaylistCarouselRankingItem";
// style
import styles from "./PlaylistCarouselRanking.module.scss";

const PlaylistCarouselRanking = () => {
  const numberOfSlidesToShow = useSlidesNumber(3, 3, 2, 1);
  return (
    <div className={styles["playlist-carousel-ranking-container"]}>
      <Carousel dots={false} slidesToShow={numberOfSlidesToShow} autoplay>
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
