// libs
import Image from "next/image";
import { Carousel } from "antd";
import { useRef } from "react";
// mock
import { listArtistCarousel } from "src/mocks/ArtistCarousel";
// children
import LeftButton from "../../components/LeftButton";
import RightButton from "../../components/RightButton";
// style
import styles from "./ArtistCarousel.module.scss";

const ArtistCarousel = () => {
  const carousel = useRef();

  return (
    <div className={styles["carousel-container"]}>
      <LeftButton carousel={carousel} />
      <Carousel autoplay dots={false} slidesToShow={7} ref={carousel}>
        {listArtistCarousel.map((item) => (
          <div key={item.id} className={styles["carousel-item"]}>
            <Image src={item.src} layout="fill" />
          </div>
        ))}
      </Carousel>
      <RightButton carousel={carousel} />
    </div>
  );
};

export default ArtistCarousel;
