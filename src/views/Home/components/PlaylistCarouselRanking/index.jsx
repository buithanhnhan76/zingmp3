//libs
import { Carousel } from "antd";
import Image from "next/image";
// mocks
import { listCarouselRankingSongs } from "src/mocks/PlaylistCarouselRanking";
// style
import styles from "./PlaylistCarouselRanking.module.scss";

const PlaylistCarouselRanking = () => (
  <div className={styles["playlist-carousel-ranking-container"]}>
    <Carousel
      dots={false}
      slidesToShow={3}
      autoplay
      className={styles["carousel-container"]}
    >
      {listCarouselRankingSongs.map((song) => (
        <div>
          <div
            key={song.id}
            className={styles["playlist-carousel-ranking-item"]}
          >
            <div className={styles["playlist-carousel-ranking-item-photo"]}>
              <Image src={song.src} layout="fill" objectFit="cover"/>
            </div>
            <div className={styles["playlist-carousel-ranking-content"]}>
              <div>
                <h3 className={styles["playlist-carousel-ranking-item-title"]}>
                  {song.title}
                </h3>
                <div
                  className={styles["playlist-carousel-ranking-item-artists"]}
                >
                  {song.artists}
                </div>
              </div>
              <div className={styles["playlist-carousel-ranking-item-content-footer"]}>
                <div>{song.rank}</div>
                <div> {song.dateRelease}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default PlaylistCarouselRanking;
