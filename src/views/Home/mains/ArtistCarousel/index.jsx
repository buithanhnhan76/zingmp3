// libs
import Image from "next/image";
import { Carousel } from "antd";
import { useRef } from "react";
// mock
import { listArtistCarousel } from "src/mocks/ArtistCarousel";
// child
import CarouselLeftButton from "../../components/CarouselLeftButton";
import CarouselRightButton from "../../components/CarouselRightButton";
// style
import styles from "./ArtistCarousel.module.scss";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};
const ArtistCarousel = () => {
  const carousel = useRef();

  return (
    <div className={styles["carousel-container"]}>
      <Carousel autoplay dots={false} slidesToShow={7} ref={carousel}>
        {listArtistCarousel.map((item) => (
          <div key={item.id} className={styles["carousel-item"]}>
            <Image src={item.src} layout="fill" style={contentStyle} />
          </div>
        ))}
      </Carousel>
      <CarouselLeftButton carousel={carousel} />
      <CarouselRightButton carousel={carousel} />
    </div>
  );
};

export default ArtistCarousel;
